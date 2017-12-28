const express = require("express");
const app = express();
const util = require("util");
const someSecuredResource = require('./securedResource');
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


app.use("/api/products", someSecuredResource);
app.use("/account" , userService.router);
console.log(`App is starting`);