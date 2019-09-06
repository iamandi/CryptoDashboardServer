const faqDB = require("../db/faq-db");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  res.send(faqDB);
});

module.exports = router;
