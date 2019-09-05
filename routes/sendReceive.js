const sendReceiveDB = require('../db/send-receive-db');
const express = require('express');
const router = express.Router();

router.get('/transfers', (req, res) => {
  res.send(sendReceiveDB.transfers);
});

router.get('/qrcode', (req, res) => {
  res.send('0x23333b98c7d1cc4310a5dc23d4c6a736509e0c08');
});

module.exports = router;