const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require('joi-objectid')(Joi);
require('mongoose-type-ethereum-address');

function arrayLimit(val) {
  const arrayLimitConstant = 10;
  return val.length <= arrayLimitConstant;
}

const ethereumSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Ethereum'],
    required: true
  },
  ticker: {
    type: String,
    enum: ['ETH'],
    required: true
  },
  user: {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    private_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    public_address: {
      type: mongoose.Schema.Types.EthereumAddress,
      required: true
    },
    balances: {
      date_updated: {
        type: Date,
        required: true,
        default: Date.now
      },
      balance_crypto: {
        type: mongoose.Types.Decimal128,
        min: 0,
        required: true
      },
      balance_usd: {
        type: mongoose.Types.Decimal128,
        min: 0,
        required: true
      }
    }
  }
});

const Ethereum = mongoose.model("Ethereum", ethereumSchema);

function validateEthereum(ethereum) {
  const schema = {
    name: Joi.string()
      .default('Ethereum')
      .required(),
    ticker: Joi.string()
      .default('ETH')
      .required(),

    user: {
      user_id: Joi.objectId()
        .required(),
      private_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      public_address: Joi.string()
        .required(),

      balances: {
        date_updated: Joi.date()
          .description('Ethereum balance update date')
          .default(Date.now()),
        balance_crypto: Joi.number()
          .precision(18)
          .min(0)
          .required(),
        balance_usd: Joi.number()
          .precision(2)
          .min(0)
          .required()
      }
    }
  };

  return Joi.validate(ethereum, schema);
}

exports.Ethereum = Ethereum;
exports.ethereumSchema = ethereumSchema;
exports.validate = validateEthereum;