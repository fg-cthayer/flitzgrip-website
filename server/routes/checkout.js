const express = require('express');
const router  = express.Router();
const mollie  = require('../services/mollie');
const backend = require('../services/backend');

const PRODUCT = {
  id:               'flitzgrip-skin-repair-bar',
  name:             'FlitzGrip Skin Repair Bar',
  unitCents:        1195,
  shippingCents:    350,
  freeFromUnits:    2,
};

function calcTotals(qty) {
  const subtotal = PRODUCT.unitCents * qty;
  const shipping = qty >= PRODUCT.freeFromUnits ? 0 : PRODUCT.shippingCents;
  const total    = subtotal + shipping;
  return { subtotal, shipping, total, totalStr: (total / 100).toFixed(2) };
}

router.post('/', async (req, res) => {
  try {
    const {
      quantity, email,
      firstName, lastName,
      street, city, postcode, country,
    } = req.body;

    if (!quantity || !email || !firstName || !lastName || !street || !city || !postcode || !country) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty < 1 || qty > 20) {
      return res.status(400).json({ error: 'Quantity must be between 1 and 20.' });
    }

    const { subtotal, shipping, total, totalStr } = calcTotals(qty);
    const orderId     = `FG-${Date.now()}`;
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:8080';

    // 1. Upsert customer in backend
    const customer = await backend.upsertCustomer({ email, firstName, lastName });

    // 2. Create pending order in backend
    await backend.createOrder({
      id:              orderId,
      customerId:      customer.id,
      shippingAddress: { street, city, postcode, country },
      status:          'pending',
      items: [{
        productId:      PRODUCT.id,
        name:           PRODUCT.name,
        quantity:       qty,
        unitPriceCents: PRODUCT.unitCents,
        totalCents:     PRODUCT.unitCents * qty,
      }],
      subtotalCents: subtotal,
      shippingCents: shipping,
      totalCents:    total,
      currency:      'EUR',
    });

    // 3. Create Mollie payment
    const payment = await mollie.payments.create({
      amount:      { currency: 'EUR', value: totalStr },
      description: `FlitzGrip Skin Repair Bar × ${qty}`,
      redirectUrl: `${frontendUrl}/success?orderId=${orderId}`,
      method:      ['paypal', 'creditcard'],
      metadata:    { orderId },
      ...(process.env.WEBHOOK_URL && {
        webhookUrl: `${process.env.WEBHOOK_URL}/api/webhook`,
      }),
    });

    // 4. Save Mollie payment ID to the order
    await backend.updateStatus(orderId, 'pending', { molliePaymentId: payment.id });

    return res.json({ checkoutUrl: payment.getCheckoutUrl() });
  } catch (err) {
    console.error('[checkout]', err.message);
    return res.status(500).json({ error: 'Checkout failed. Please try again.' });
  }
});

module.exports = router;
