const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
require("mongoose-type-ethereum-address");

function arrayLimit(val) {
  const arrayLimitConstant = 10;
  return val.length <= arrayLimitConstant;
}

const cryptoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  unia: {
    rank: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: "UNIA points Wallet"
    },
    ticker: {
      type: String,
      default: "UNIA"
    },
    classes: {
      type: String,
      default: "yellow"
    },
    private_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    public_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    address: {
      type: mongoose.Schema.Types.EthereumAddress,
      required: true
    },
    balances: [{
      date_updated: {
        type: Date,
        required: true,
        default: Date.now
      },
      balanceCrypto: {
        type: Number,
        min: 0,
        required: true
      },
      balanceUsd: {
        type: Number,
        min: 0,
        required: true
      },
      change: {
        type: Number,
        required: true
      }
    }]
  },
  ethereum: {
    rank: {
      type: Number,
      default: 3
    },
    name: {
      type: String,
      default: "Ethereum Wallet"
    },
    ticker: {
      type: String,
      default: "ETH"
    },
    classes: {
      type: String,
      default: "green"
    },
    private_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    public_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    address: {
      type: mongoose.Schema.Types.EthereumAddress,
      required: true
    },
    balances: [{
      date_updated: {
        type: Date,
        required: true,
        default: Date.now
      },
      balanceCrypto: {
        type: Number,
        min: 0,
        required: true
      },
      balanceUsd: {
        type: Number,
        min: 0,
        required: true
      },
      change: {
        type: Number,
        required: true
      }
    }]
  },
  bitcoin: {
    rank: {
      type: Number,
      default: 2
    },
    name: {
      type: String,
      default: "Bitcoin Wallet"
    },
    ticker: {
      type: String,
      default: "BTC"
    },
    classes: {
      type: String,
      default: "orange"
    },
    private_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    public_key: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    balances: [{
      date_updated: {
        type: Date,
        required: true,
        default: Date.now
      },
      balanceCrypto: {
        type: Number,
        min: 0,
        required: true
      },
      balanceUsd: {
        type: Number,
        min: 0,
        required: true
      },
      change: {
        type: Number,
        required: true
      }
    }]
  },
  donpia: {
    rank: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: "Donpia Wallet"
    },
    ticker: {
      type: String,
      default: "DON"
    },
    classes: {
      type: String,
      default: "red"
    },
    private_key: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2048
    },
    public_key: {
      type: String,
      required: true
    },
    address: {
      type: mongoose.Schema.Types.EthereumAddress,
      required: true
    },
    balances: [{
      date_updated: {
        type: Date,
        required: true,
        default: Date.now
      },
      balanceCrypto: {
        type: Number,
        min: 0,
        required: true
      },
      balanceUsd: {
        type: Number,
        min: 0,
        required: true
      },
      change: {
        type: Number,
        required: true
      }
    }]
  }
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

function validateCrypto(crypto) {
  const schema = {
    userId: Joi.objectId().required(),
    ethereum: {
      private_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      public_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      address: Joi.string()
        .alphanum()
        .length(42)
        .required(),
      balances: [{
        date_updated: Joi.date()
          .description("Ethereum balance update date")
          .default(Date.now()),
        balanceCrypto: Joi.number()
          .precision(18)
          .min(0)
          .required(),
        balanceUsd: Joi.number()
          .precision(2)
          .min(0)
          .required(),
        change: Joi.number().required()
      }]
    },
    bitcoin: {
      private_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      public_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      address: Joi.string()
        .alphanum()
        .required(),
      balances: [{
        date_updated: Joi.date()
          .description("Bitcoin balance update date")
          .default(Date.now()),
        balanceCrypto: Joi.number()
          .precision(18)
          .min(0)
          .required(),
        balanceUsd: Joi.number()
          .precision(2)
          .min(0)
          .required(),
        change: Joi.number().required()
      }]
    },
    donpia: {
      private_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      public_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      address: Joi.string()
        .alphanum()
        .length(42)
        .required(),
      balances: [{
        date_updated: Joi.date()
          .description("Donpia balance update date")
          .default(Date.now()),
        balanceCrypto: Joi.number()
          .precision(18)
          .min(0)
          .required(),
        balanceUsd: Joi.number()
          .precision(2)
          .min(0)
          .required(),
        change: Joi.number().required()
      }]
    },
    unia: {
      private_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      public_key: Joi.string()
        .min(5)
        .max(2048)
        .required(),
      address: Joi.string()
        .alphanum()
        .length(42)
        .required(),
      balances: [{
        date_updated: Joi.date()
          .description("Unia balance update date")
          .default(Date.now()),
        balanceCrypto: Joi.number()
          .precision(18)
          .min(0)
          .required(),
        balanceUsd: Joi.number()
          .precision(2)
          .min(0)
          .required(),
        change: Joi.number().required()
      }]
    }
  };

  return Joi.validate(crypto, schema);
}

exports.Crypto = Crypto;
exports.cryptoSchema = cryptoSchema;
exports.validate = validateCrypto;
