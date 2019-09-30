const projectDashboardAppDB = require("../db/project-dashboard-db");
const auth0Jwt = require("../middleware/auth0");
const { Ethereum, validate } = require("../models/ethereum");
const _ = require("lodash");
const createUserIfAbsent = require("../middleware/createUserIfAbsent");
const express = require("express");
const router = express.Router();

router.get("/", [auth0Jwt, createUserIfAbsent], async (req, res) => {
  const isEmailVerified = req.user.isEmailVerified;
  const crypto = await req.user.crypto;
  
  projectDashboardAppDB.widgets.widgetBtc = crypto.bitcoin;
  projectDashboardAppDB.widgets.widgetEth = crypto.ethereum;
  projectDashboardAppDB.widgets.widgetDon = crypto.donpia;

  res.send(projectDashboardAppDB.widgets);
});

router.get("/:id", auth0Jwt, async (req, res) => {
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
