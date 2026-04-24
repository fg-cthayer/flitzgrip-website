const Database = require('better-sqlite3');
const path     = require('path');

const db = new Database(path.join(__dirname, 'mock.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS customers (
    id         TEXT PRIMARY KEY,
    email      TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name  TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS orders (
    id                   TEXT PRIMARY KEY,
    customer_id          TEXT NOT NULL,
    shipping_address     TEXT NOT NULL,
    status               TEXT DEFAULT 'pending',
    mollie_payment_id    TEXT,
    mollie_payment_method TEXT,
    items                TEXT NOT NULL,
    subtotal_cents       INTEGER NOT NULL,
    shipping_cents       INTEGER NOT NULL,
    total_cents          INTEGER NOT NULL,
    currency             TEXT DEFAULT 'EUR',
    created_at           TEXT DEFAULT (datetime('now')),
    paid_at              TEXT,
    shipped_at           TEXT
  );
`);

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

module.exports = {
  upsertCustomer({ email, firstName, lastName }) {
    const existing = db.prepare('SELECT * FROM customers WHERE email = ?').get(email);
    if (existing) return existing;
    const id = newId();
    db.prepare(
      'INSERT INTO customers (id, email, first_name, last_name) VALUES (?, ?, ?, ?)'
    ).run(id, email, firstName, lastName);
    return db.prepare('SELECT * FROM customers WHERE id = ?').get(id);
  },

  createOrder(order) {
    db.prepare(`
      INSERT INTO orders
        (id, customer_id, shipping_address, items, subtotal_cents, shipping_cents, total_cents, currency)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      order.id,
      order.customerId,
      JSON.stringify(order.shippingAddress),
      JSON.stringify(order.items),
      order.subtotalCents,
      order.shippingCents,
      order.totalCents,
      order.currency || 'EUR'
    );
    return this.getOrder(order.id);
  },

  updateStatus(id, status, extra = {}) {
    const sets   = ['status = ?'];
    const values = [status];

    if (extra.molliePaymentId) {
      sets.push('mollie_payment_id = ?');
      values.push(extra.molliePaymentId);
    }
    if (extra.molliePaymentMethod) {
      sets.push('mollie_payment_method = ?');
      values.push(extra.molliePaymentMethod);
    }
    if (extra.paidAt) {
      sets.push('paid_at = ?');
      values.push(extra.paidAt);
    }

    values.push(id);
    db.prepare(`UPDATE orders SET ${sets.join(', ')} WHERE id = ?`).run(...values);
    return this.getOrder(id);
  },

  getOrder(id) {
    const row = db.prepare('SELECT * FROM orders WHERE id = ?').get(id);
    if (!row) return null;
    return {
      ...row,
      shippingAddress: JSON.parse(row.shipping_address),
      items:           JSON.parse(row.items),
    };
  },

  listOrders() {
    return db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all().map(row => ({
      ...row,
      shippingAddress: JSON.parse(row.shipping_address),
      items:           JSON.parse(row.items),
    }));
  },
};
