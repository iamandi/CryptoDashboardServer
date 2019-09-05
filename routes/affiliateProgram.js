const affiliateProgramDB = require('../db/affiliate-program-db');
const express = require('express');
const router = express.Router();

router.get('/projects', async (req, res) => {
  res.send(affiliateProgramDB.projects);
});

router.get('/referrals', async (req, res) => {
  res.send(affiliateProgramDB.referrals);
});


module.exports = router;