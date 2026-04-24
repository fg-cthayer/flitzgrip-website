const express = require('express');
const db      = require('./db');

const app    = express();
const PORT   = process.env.PORT    || 3001;
const API_KEY = process.env.API_KEY || 'dev-secret';

app.use(express.json());

// Auth middleware
app.use((req, res, next) => {
  if (req.headers['x-api-key'] !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});

// POST /customers — create or find by email
app.post('/customers', (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: 'email, firstName, lastName required' });
    }
    const customer = db.upsertCustomer({ email, firstName, lastName });
    return res.status(201).json(customer);
  } catch (err) {
    console.error('[POST /customers]', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// POST /orders — create order
app.post('/orders', (req, res) => {
  try {
    const order = db.createOrder(req.body);
    return res.status(201).json(order);
  } catch (err) {
    console.error('[POST /orders]', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// PATCH /orders/:id/status — update status + optional fields
app.patch('/orders/:id/status', (req, res) => {
  try {
    const { status, ...extra } = req.body;
    if (!status) return res.status(400).json({ error: 'status required' });
    const order = db.updateStatus(req.params.id, status, extra);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    return res.json(order);
  } catch (err) {
    console.error('[PATCH /orders/:id/status]', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// GET /orders/:id
app.get('/orders/:id', (req, res) => {
  const order = db.getOrder(req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  return res.json(order);
});

// GET /orders — list all (handy for debugging)
app.get('/orders', (req, res) => {
  return res.json(db.listOrders());
});

app.listen(PORT, () =>
  console.log(`FlitzGrip mock backend → http://localhost:${PORT}`)
);
