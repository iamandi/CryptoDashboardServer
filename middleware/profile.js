const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const jwtAuthz = require("express-jwt-authz");

const profileToken = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-gv9jrgzh.auth0.com/.well-known/jwks.json"
  }),

  // custom header to extract token from
  getToken: function fromHeader(req) {
    if (req.headers.profile) {
      return req.headers.profile;
    }
    return null;
  },

  // do not attach token to default: req.user
  requestProperty: 'profile',

  // Validate the audience and the issuer.
  audience: [
    "WNwrqQ9GzvywEP48t8Vwmp6Yb9mh1CXt"
  ],
  issuer: "https://dev-gv9jrgzh.auth0.com/",
  algorithms: ["RS256"]
});

module.exports = function (req, res, next) {
  profileToken(req, res, err => {
    if (err) {
      res.status(err.status).send(err.message);
    } else {
      console.log('req.profile');
      console.log(req.profile);

      next();
    }
  });
};

//module.exports = auth0Jwt;
