const project = require('../routes/projectDashboard');
const buySell = require('../routes/buySell');
const sendReceive = require('../routes/sendReceive');
const faq = require('../routes/faq');
const affiliateProgram = require('../routes/affiliateProgram');
const accessControlHeaders = require('../middleware/accessControlHeaders');
const users = require('../routes/users');
const auth = require('../routes/auth');
const express = require('express');

const routes = (app) => {
  app.use(express.json());

  app.use('/api/project-dashboard-app/widgets', project);
  app.use('/api/affiliate-program-app', affiliateProgram);
  app.use('/api/buy-sell-app', buySell);
  app.use('/api/send-receive-app', sendReceive);
  app.use('/api/faq', faq);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(accessControlHeaders);
}

module.exports = routes;