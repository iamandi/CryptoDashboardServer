"use strict";
const config = require("config");
const {
  User,
  validate
} = require("../models/user");
const auth0Jwt = require('../middleware/auth0.js');
const _ = require('lodash');
const express = require("express");
const router = express.Router();


router.get("/me", auth0Jwt, async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findOne({
    userId
  });

  res.send(user);
});

// User registration
router.post("/", async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userId = req.body.userId;

  let user = await User.findOne({
    userId
  });
  if (user) return res.status(400).send("User already registered");

  user = new User(
    _.pick(req.body, ["userId", "isEmailVerified", "data"])
  );

  await user.save();

  res.send(_.pick(user, ["_id", "userId", "isEmailVerified", "data"]));
});

module.exports = router;