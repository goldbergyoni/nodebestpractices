const express = require("express");
const  router = express.Router();
const util = require("util");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  console.log(`Login details are ${util.inspect(req.body)}`);
  const user = getUserByName(req.body.username, req.body.password);
  if (!user) {
    //wrong credentials
    res.status(404).end();
  } else {
    //user exists
    const tokenWithUserClaims = jwt.sign(user , 'very-long-secret');

    res.setHeader("authorization", tokenWithUserClaims);
    console.log(`Authorization header is ${tokenWithUserClaims}`);
    res.status(200).end();
  }
});

function getUserByName(username, password) {
  if (username !== "username" || password !== "123456") {
    return null;
  }

  return { name: "Ryan Dahl", roles: ["admin", "visitor"] };
}

function getUserById(id) {
  return {id:4, name: "Ryan Dahl", roles: ["admin", "visitor"] };
}

module.exports.router = router;
module.exports.getUserByName = getUserByName;
module.exports.getUserById = getUserById;