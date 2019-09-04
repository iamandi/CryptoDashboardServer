const express = require('express');
const projectDashboardAppDB = require('./db/project-dashboard-db');
const sendReceiveDB = require('./db/send-receive-db');
const affiliateProgramDB = require('./db/affiliate-program-db');
const buySellDB = require('./db/buy-sell-db');
const faqDB = require('./db/faq-db');
const userDB = require('./db/user-db');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  console.log('>>', req.url)

  next();
});

app.get('/', (req, res) => {
  res.send('/hello');
});

app.get('/api/project-dashboard-app/widgets', (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

app.get('/api/project-dashboard-app/widgets/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

app.get('/api/project-dashboard-app/widgetDon/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetDon);
});

app.get('/api/project-dashboard-app/widgetBtc/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetBtc);
});

app.get('/api/project-dashboard-app/widgetEth/:id', (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetEth);
});

app.get('/api/project-dashboard-app/projects', (req, res) => {
  res.send(affiliateProgramDB.projects);
});

app.get('/api/affiliate-program-app/referrals', (req, res) => {
  res.send(affiliateProgramDB.referrals);
});

app.get('/api/buy-sell-app/transactions', (req, res) => {
  res.send(buySellDB.transactions);
});

app.get('/api/send-receive-app/transfers', (req, res) => {
  res.send(sendReceiveDB.transfers);
});

app.get('/api/send-receive-app/qrcode', (req, res) => {
  res.send('0x23333b98c7d1cc4310a5dc23d4c6a736509e0c08');
});

app.get('/api/faq', (req, res) => {
  res.send(faqDB);
});

const PORT = 4000;
app.listen(4000, () => console.log(`Server on ${PORT}`));