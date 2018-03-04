const express = require("express");
const app = express();
const util = require("util");
const productService = require("./securedResource");
const userService = require("./userService");
const jwt = require("jsonwebtoken");

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

const authenticate = (req, res, next) => {
  const userClaims = jwt.verify(req.headers.authorization, 'very-long-secret');
  console.log(`Authorization header ${req.headers.authorization} is and the found user is ${JSON.stringify(userClaims)}`);
  if (!userClaims) {
    res.status(401).end();
  } else {
    req.user = userClaims;
    next();
  }
};

app.use("/api", authenticate);
router.get('/api/products', (req,res,next)=>{
  console.log("got it")
  res.status(200).json({status:"yesssshhhhh"})
})
app.use(router);
app.use("/api/products", productService);
app.use("/account", userService.router);
console.log(`App is starting`);