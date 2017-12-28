const express = require("express");
const router = express.Router();
const middlewares = require("./middlewares");

router.post("/", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.json(req.body);
});

module.exports = router;