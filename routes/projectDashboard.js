const projectDashboardAppDB = require("../db/project-dashboard-db");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

router.get("/:id", auth, async (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

router.get("/don/:id", async (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetDon);
});

router.get("/btc/:id", async (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetBtc);
});

router.get("/etc/:id", async (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetEth);
});

module.exports = router;
