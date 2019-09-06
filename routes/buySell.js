const buySellDB = require("../db/buy-sell-db");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/transactions", auth, async (req, res) => {
  res.send(buySellDB.transactions);
});

module.exports = router;
