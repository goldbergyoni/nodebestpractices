const express = require("express");
const app = express();

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

app.use((req, res, next) => {
  console.log(`New request arrived ${req.url}`);
  next();
});

app.use((req, res, next) => {
  res.removeHeader("X-Powered-By");
  next();
});

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.json(req.body);
});

app.use(router);