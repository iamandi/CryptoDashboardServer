const projectDashboardAppDB = require("../db/project-dashboard-db");
const auth0Jwt = require("../middleware/auth0");
const profileToken = require("../middleware/profile");
const _ = require("lodash");
const createUserIfAbsent = require("../middleware/createUserIfAbsent");
const express = require("express");
const router = express.Router();

router.get("/", [auth0Jwt, createUserIfAbsent], async (req, res) => {
  const crypto = req.user.crypto;

  const widgets = projectDashboardAppDB.widgets;
  const widgetLine = widgets.widgetLine;
  const widgetPie = widgets.widgetPie;
  const widgetBudgetAllocation = widgets.widgetBudgetAllocation;

  const result = {
    data: crypto,
    widgetLine,
    widgetCryptoPrices: [],
    widgetPie,
    widgetBudgetAllocation
  };

  res.send(result);
});

router.get("/:id", profileToken, async (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

router.get("/don/:id", async (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetDon);
});

router.get("/btc/:id", async (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetBtc);
});

router.get("/eth/:id", async (req, res) => {
  res.send(projectDashboardAppDB.widgets.widgetEth);
});

module.exports = router;
