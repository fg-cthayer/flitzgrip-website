const express = require('express');
const router  = express.Router();
const backend = require('../services/backend');

// Called by success.html to display order confirmation
router.get('/:id', async (req, res) => {
  try {
    const order = await backend.getOrder(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found.' });
    return res.json(order);
  } catch (err) {
    console.error('[orders]', err.message);
    return res.status(500).json({ error: 'Could not fetch order.' });
  }
});

module.exports = router;
