const affiliateProgramDB = require("../db/affiliate-program-db");
const auth = require("../middleware/auth");
const auth0Jwt = require('../middleware/auth0');
const express = require("express");
const router = express.Router();

router.get("/projects", auth0Jwt, async (req, res) => {
  res.send(affiliateProgramDB.projects);
});

router.get("/referrals", auth0Jwt, async (req, res) => {
  res.send(affiliateProgramDB.referrals);
});

module.exports = router;
