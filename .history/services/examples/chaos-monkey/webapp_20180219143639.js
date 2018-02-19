require('./chaos-monkey');
const express = require("express");
const app = express();


const port = process.env.PORT || 8080;
app.listen(port);

var router = express.Router();

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.json(req.body);
});

app.use(router);