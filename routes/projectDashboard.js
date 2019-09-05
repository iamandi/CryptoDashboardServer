const projectDashboardAppDB = require('../db/project-dashboard-db');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

router.get('/:id', auth, async (req, res) => {
  console.log(res.header());
  res.send(projectDashboardAppDB.widgets);
});

router.get('/don/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetDon);
});

router.get('/btc/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetBtc);
});

router.get('/etc/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetEth);
});

module.exports = router;