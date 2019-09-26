const {
  Ethereum,
  validate
} = require('../models/ethereum');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();


// all genres
router.get("/", async (req, res) => {
  let ethereums;
  const userId = req.query.user_id;
  if (userId)
    ethereums = await Ethereum.find({
      "user.user_id": userId
    }).select('-user.private_key -__v -_id');
  else
    ethereums = await Ethereum.find().sort('name').select('-user.private_key -__v -_id').limit(100);

  res.send(ethereums);
});

// add ethereum
router.post("/", async (req, res) => {
  const {
    error
  } = validate(req.body);
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