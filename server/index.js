require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:8080' }));

// Webhook receives application/x-www-form-urlencoded from Mollie
app.use('/api/webhook', express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/checkout', require('./routes/checkout'));
app.use('/api/webhook',  require('./routes/webhook'));
app.use('/api/orders',   require('./routes/orders'));

app.get('/health', (_, res) => res.json({ ok: true, ts: new Date().toISOString() }));

app.listen(PORT, () =>
  console.log(`FlitzGrip checkout server → http://localhost:${PORT}`)
);
