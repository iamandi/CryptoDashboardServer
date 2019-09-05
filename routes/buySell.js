const buySellDB = require('../db/buy-sell-db');
const express = require('express');
const router = express.Router();

router.get('/transactions', async (req, res) => {
  res.send(buySellDB.transactions);
});

module.exports = router;