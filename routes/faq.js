const faqDB = require('../db/faq-db');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(faqDB);
});

module.exports = router;