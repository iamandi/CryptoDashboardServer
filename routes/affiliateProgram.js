const affiliateProgramDB = require('../db/affiliate-program-db');
const express = require('express');
const router = express.Router();

router.get('/projects', (req, res) => {
  res.send(affiliateProgramDB.projects);
});

router.get('/referrals', (req, res) => {
  res.send(affiliateProgramDB.referrals);
});


module.exports = router;