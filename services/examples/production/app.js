const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

var router = express.Router();

router.get("/api/products", (req, res, next) => {
  console.log(`Getting products`);
  res.json({});
  next();
});

router.get("/api/products/bad", (req, res, next) => {
  console.log(`Will crash now`);
  process.exit(1);
});

app.use(router);