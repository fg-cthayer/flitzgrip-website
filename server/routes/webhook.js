const express = require('express');
const router  = express.Router();
const mollie  = require('../services/mollie');
const backend = require('../services/backend');

const STATUS_MAP = {
  paid:     'paid',
  failed:   'failed',
  expired:  'failed',
  canceled: 'cancelled',
};

router.post('/', async (req, res) => {
  // Always respond 200 — Mollie retries on any other status
  res.status(200).end();

  try {
    const { id } = req.body;
    if (!id) return;

    const payment = await mollie.payments.get(id);
    const orderId = payment.metadata?.orderId;
    if (!orderId) return;

    const status = STATUS_MAP[payment.status] || payment.status;
    const extra  = payment.status === 'paid'
      ? { molliePaymentMethod: payment.method, paidAt: new Date().toISOString() }
      : {};

    await backend.updateStatus(orderId, status, extra);
  } catch (err) {
    console.error('[webhook]', err.message);
  }
});

module.exports = router;
