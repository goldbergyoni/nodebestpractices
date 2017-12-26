const express = require("express");
const router = express.Router();
const middlewares = require("./middlewares");

router.post("/", middlewares.roleBasedAuthorization("admin"), (req, res) => {
  res.json({ someSecuredData: "Something goes here" });
});

module.exports = router;
