const projectDashboardAppDB = require("../db/project-dashboard-db");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const auth0Jwt = require('../middleware/auth0');
const {
  User,
  validate
} = require("../models/user");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

router.get("/", auth0Jwt, async (req, res) => {
  res.send(projectDashboardAppDB.widgets);
});

router.get("/:id", auth0Jwt, async (req, res) => {
  const userId = req.userId;
  console.log({userId});



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