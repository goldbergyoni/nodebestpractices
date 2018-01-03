const express = require("express");
const app = express();
const util = require("util");
const productService = require('./securedResource');
const userService = require('./userService');

const port = process.env.PORT || 8080;
app.listen(port);
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

var router = express.Router();

global.sessions = [];

const authenticate = (req, res, next) => {
  const userId = global.sessions[req.headers.authorization];
  console.log(
    `Authorization header ${
      req.headers.authorization
    } is and the found user is ${userId}`
  );
  if (!userId) {
    res.status(401).end();
  } else {
    req.user = userService.getUserById(userId);
    next();
  }
};

app.use("/api", authenticate);
app.use("/api/products", productService);
app.use("/account" , userService.router);
console.log(`App is starting`);