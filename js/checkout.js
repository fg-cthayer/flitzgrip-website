/* ============================================
   FLITZGRIP — checkout.js
   Handles buy.html quantity picker + checkout.html form
   ============================================ */

const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:3000'
  : '';

/* ---- BUY PAGE: quantity picker ---- */
const qtyVal          = document.getElementById('qtyVal');
const qtyMinus        = document.getElementById('qtyMinus');
const qtyPlus         = document.getElementById('qtyPlus');
const qtyShippingNote = document.getElementById('qtyShippingNote');
const buyNowBtn       = document.getElementById('buyNowBtn');

if (qtyVal) {
  const UNIT      = 11.95;
  const SHIPPING  = 3.50;
  const FREE_FROM = 2;
  let qty = 1;

  function updateQty() {
    const shipping = qty >= FREE_FROM ? 0 : SHIPPING;
    const total    = (UNIT * qty + shipping).toFixed(2);

    qtyVal.textContent = qty;

    if (qtyShippingNote) {
      qtyShippingNote.textContent = qty >= FREE_FROM ? 'Free shipping' : `+ €${SHIPPING.toFixed(2)} shipping`;
      qtyShippingNote.style.color = qty >= FREE_FROM ? 'var(--blue-dark)' : 'rgba(12,12,12,0.45)';
    }

    if (buyNowBtn) {
      buyNowBtn.textContent = `Buy Now — €${total}`;
      buyNowBtn.href        = `checkout.html?qty=${qty}`;
    }

    if (qtyMinus) qtyMinus.disabled = qty <= 1;
  }

  qtyMinus?.addEventListener('click', () => { if (qty > 1)  { qty--; updateQty(); } });
  qtyPlus?.addEventListener('click',  () => { if (qty < 20) { qty++; updateQty(); } });
  updateQty();
}

/* ---- CHECKOUT PAGE: form ---- */
const checkoutForm = document.getElementById('checkoutForm');

if (checkoutForm) {
  // Pre-fill quantity from URL and update summary
  const params   = new URLSearchParams(window.location.search);
  const qty      = Math.min(Math.max(parseInt(params.get('qty')) || 1, 1), 20);
  const UNIT     = 11.95;
  const SHIPPING = 3.50;
  const FREE_FROM = 2;

  const shipping = qty >= FREE_FROM ? 0 : SHIPPING;
  const total    = (UNIT * qty + shipping).toFixed(2);

  const els = {
    qty:      document.getElementById('summaryQty'),
    subtotal: document.getElementById('summarySubtotal'),
    shipping: document.getElementById('summaryShipping'),
    total:    document.getElementById('summaryTotal'),
    qtyInput: document.getElementById('hiddenQty'),
  };

  if (els.qty)      els.qty.textContent      = `FlitzGrip™ Skin Repair Bar × ${qty}`;
  if (els.subtotal) els.subtotal.textContent = `€${(UNIT * qty).toFixed(2)}`;
  if (els.shipping) els.shipping.textContent = shipping === 0 ? 'Free' : `€${SHIPPING.toFixed(2)}`;
  if (els.total)    els.total.textContent    = `€${total}`;
  if (els.qtyInput) els.qtyInput.value       = qty;

  checkoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const err = document.getElementById('checkoutError');
    btn.disabled        = true;
    btn.textContent     = 'Processing…';
    err.style.display   = 'none';

    const data = {
      quantity:   qty,
      email:      checkoutForm.email.value.trim(),
      firstName:  checkoutForm.firstName.value.trim(),
      lastName:   checkoutForm.lastName.value.trim(),
      street:     checkoutForm.street.value.trim(),
      city:       checkoutForm.city.value.trim(),
      postcode:   checkoutForm.postcode.value.trim(),
      country:    checkoutForm.country.value,
    };

    try {
      const res  = await fetch(`${API_BASE}/api/checkout`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || 'Checkout failed.');

      window.location.href = json.checkoutUrl;
    } catch (error) {
      err.textContent   = error.message;
      err.style.display = 'block';
      btn.disabled      = false;
      btn.textContent   = 'Pay with Mollie';
    }
  });
}

/* ---- SUCCESS PAGE ---- */
const successOrderId = document.getElementById('successOrderId');

if (successOrderId) {
  const params  = new URLSearchParams(window.location.search);
  const orderId = params.get('orderId');

  if (orderId) {
    successOrderId.textContent = orderId;

    fetch(`${API_BASE}/api/orders/${orderId}`)
      .then(r => r.ok ? r.json() : null)
      .then(order => {
        if (!order) return;
        const el = document.getElementById('successSummary');
        if (!el) return;
        const item = order.items?.[0];
        el.innerHTML = `
          <div class="success-row">${item?.name} × ${item?.quantity}</div>
          <div class="success-row">Total: <strong>€${(order.total_cents / 100).toFixed(2)}</strong></div>
          <div class="success-row" style="color:var(--dim);font-size:0.85rem">
            Ships to ${order.shippingAddress?.city}, ${order.shippingAddress?.country}
          </div>`;
      })
      .catch(() => {});
  }
}
