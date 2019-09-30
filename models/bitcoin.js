const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

function arrayLimit(val) {
  const arrayLimitConstant = 10;
  return val.length <= arrayLimitConstant;
}

const bitcoinSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["Bitcoin"],
    required: true
  },
  ticker: {
    type: String,
    enum: ["BTC"],
    required: true
  },
  user: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    private_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    public_address: {
      type: String,
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

const Bitcoin = mongoose.model("Bitcoin", bitcoinSchema);

function validateBitcoin(bitcoin) {
  const schema = {
    name: Joi.string()
      .default("Bitcoin")
      .required(),
    ticker: Joi.string()
      .default("BTC")
      .required(),

    user: {
      userId: Joi.objectId().required(),
      private_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      public_address: Joi.string().required(),

      balances: {
        date_updated: Joi.date()
          .description("Bitcoin balance update date")
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

  return Joi.validate(bitcoin, schema);
}

exports.Bitcoin = Bitcoin;
exports.bitcoinSchema = bitcoinSchema;
exports.validate = validateBitcoin;
