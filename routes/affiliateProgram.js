const affiliateProgramDB = require("../db/affiliate-program-db");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/projects", auth, async (req, res) => {
  res.send(affiliateProgramDB.projects);
});

router.get("/referrals", auth, async (req, res) => {
  res.send(affiliateProgramDB.referrals);
});

module.exports = router;
