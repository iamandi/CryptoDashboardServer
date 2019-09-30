const faqDB = require("../db/faq-db");
const auth = require("../middleware/auth");
const auth0Jwt = require('../middleware/auth0');
const express = require("express");
const router = express.Router();

router.get("/", auth0Jwt, async (req, res) => {
  res.send(faqDB);
});

module.exports = router;
