const accessControlHeaders = (req, res, next) => {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  console.log('>>', req.url);
  console.log('>>', req.method);

  next();
};

module.exports = accessControlHeaders;