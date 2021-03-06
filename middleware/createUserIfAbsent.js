const { User } = require("../models/user");
const { Crypto } = require("../models/crypto");
const _ = require("lodash");

// Add management API to check whether userId exists
// Then and then only create user entry
// otherwise authenticated users will DoS this API
async function createUserIfAbsent(userId) {
  let user = await User.findOne({
    userId
  });
  let crypto = await Crypto.findOne({
    userId
  });

  if (!user) {
    user = new User({ userId });

    crypto = new Crypto({
      userId,
      ethereum: {
        private_key: "ETH-private-adsadsasdas",
        public_key: "ETH-public-adsadsasdas",
        address: "0xa589D2e07064f767f12Daa23d75880aC10Cbe0ec",
        balances: [
          {
            balanceCrypto: 0,
            balanceUsd: 0,
            change: 0
          }
        ]
      },
      bitcoin: {
        private_key: "BTC-private-adsadsasdas",
        public_key: "BTC-public-adsadsasdas",
        address: "BTC-address-adsadsasdas",
        balances: [
          {
            balanceCrypto: 0,
            balanceUsd: 0,
            change: 0
          }
        ]
      },
      donpia: {
        private_key: "DON-private-adsadsasdas",
        public_key: "DON-public-adsadsasdas",
        address: "0xa589D2e07064f767f12Daa23d75880aC10Cbe0ec",
        balances: [
          {
            balanceCrypto: 0,
            balanceUsd: 0,
            change: 0
          }
        ]
      },
      unia: {
        private_key: "UNIA-private-adsadsasdas",
        public_key: "UNIA-public-adsadsasdas",
        address: "0xa589D2e07064f767f12Daa23d75880aC10Cbe0ec",
        balances: [
          {
            balanceCrypto: 5000,
            balanceUsd: 0,
            change: 0
          }
        ]
      }
    });

    cypto = await crypto.save();
    await user.save();
  }

  return crypto;
}

checkUserValidityManagement = userId => {
  // check user id agaisnt Auth0
  // also use it for isEmailVeirifed param
};

module.exports = async function(req, res, next) {
  const userId = req.user.userId;

  const { unia, bitcoin, ethereum, donpia } = await createUserIfAbsent(userId);
  console.log({ unia });

  // some email not verified logic

  req.user.crypto = [unia, donpia, bitcoin, ethereum];

  next();
};
