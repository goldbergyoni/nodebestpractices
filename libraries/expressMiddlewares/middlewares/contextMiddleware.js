const uuidv1 = require("uuid/v1");

const contextMiddleware = function(req, res, next) {
  req.context = {
    transactionId: req.transactionId || uuidv1(),
    userId: req.user ? req.user.id : "",
    userToken: req.user ? req.user.token : ""
  };
};

module.exports = contextMiddleware;
