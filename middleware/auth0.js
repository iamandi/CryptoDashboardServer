const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const jwtAuthz = require("express-jwt-authz");

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const auth0Jwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-gv9jrgzh.auth0.com/.well-known/jwks.json"
  }),

  // Validate the audience and the issuer.
  audience: [
    "https://quickstart.com/api",
    "https://dev-gv9jrgzh.auth0.com/api/v2/",
    "WNwrqQ9GzvywEP48t8Vwmp6Yb9mh1CXt"
  ],
  issuer: "https://dev-gv9jrgzh.auth0.com/",
  algorithms: ["RS256"]
});

module.exports = function (req, res, next) {
  auth0Jwt(req, res, err => {
    if (err) {
      res.status(err.status).send(err.message);
    } else {
      const { sub } = req.user;

      const userId = sub.slice(0, 6) === "auth0|" ? sub.slice(6) : sub;
      req.user.userId = userId;

      next();
    }
  });
};

