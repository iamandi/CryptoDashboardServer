const { Crypto, validate } = require("../models/crypto");
const auth0Jwt = require("../middleware/auth0.js");
const express = require("express");
const router = express.Router();

// all genres
router.get("/", auth0Jwt, async (req, res) => {
  console.log(req.userId);
  let ethereums;
  const userId = req.query.user_id;
  if (userId)
    ethereums = await Ethereum.find({
      "user.user_id": userId
    }).select("-user.private_key -__v -_id");
  else
    ethereums = await Ethereum.find()
      .sort("name")
      .select("-user.private_key -__v -_id")
      .limit(100);

  res.send(ethereums);
});

router.get("/:id", auth0Jwt, async (req, res) => {
  const id = req.params.id;

  const ethereum = await Ethereum.findById(id);
  if (!ethereum) res.status(404).send("ID does not exist.");

  res.send(ethereum);
});

// add ethereum
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let ethereum = new Crypto({
    name: req.body.name,
    ticker: req.body.ticker,
    user: req.body.user
  });

  ethereum = await ethereum.save();
  res.send(ethereum);
});

// update ethereum blance
router.put("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let ethereum = new Ethereum({
    name: req.body.name,
    ticker: req.body.ticker,
    user: req.body.user
  });

  ethereum = await ethereum.save();
  res.send(ethereum);
});

module.exports = router;
