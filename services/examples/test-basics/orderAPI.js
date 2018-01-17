const express = require("express");
const app = express();
const orderService = require('./orderService').orderService;

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

router.post("/api/orders", (req, res) => {
  console.log(`The order is ${req.body}`);
  res.json(new orderService().add(req.body));
});

app.use(router);

module.exports = app;