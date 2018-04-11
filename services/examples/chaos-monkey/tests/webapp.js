const ChaosControl = require("../chaos-control");
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

new ChaosControl(app, require('./chaos.config') ).start();

var router = express.Router();

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.status(200).json(req.body);
});

process.on("uncaughtException", error => {
  console.log(`Uncaught error is now handled error`);
  console.log(error);

});

process.on("unhandledRejection", (reason, p) => {
  console.log(`Uncaught promise is now handled error`);
  console.log(error);
});

app.use(router);
