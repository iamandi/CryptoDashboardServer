const sendReceiveDB = require("../db/send-receive-db");
const auth0Jwt = require("../middleware/auth0");
const _ = require("lodash");
const createUserIfAbsent = require("../middleware/createUserIfAbsent");
const express = require("express");
const router = express.Router();

router.get("/transfers", auth0Jwt, async (req, res) => {
  res.send(sendReceiveDB.transfers);
});

router.get("/qrcode", [auth0Jwt, createUserIfAbsent], async (req, res) => {
  const crypto = req.user.crypto;
  crypto.shift();

  const coins = crypto.map(coin => {
    return _.pick(coin, ["rank", "name", "ticker", "address"]);
  });

  res.send({
    data: coins
  });
});

module.exports = router;
