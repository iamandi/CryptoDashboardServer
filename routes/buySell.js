const buySellDB = require("../db/buy-sell-db");
const auth = require("../middleware/auth");
const auth0Jwt = require('../middleware/auth0');
const express = require("express");
const router = express.Router();

router.get("/transactions", auth0Jwt, async (req, res) => {
  res.send(buySellDB.transactions);
});

module.exports = router;
