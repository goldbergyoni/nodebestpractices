const express = require("express");
const  router = express.Router();
const util = require("util");

router.post("/login", (req, res) => {
  console.log(`Login details are ${util.inspect(req.body)}`);
  const user = getUserByName(req.body.username, req.body.password);
  if (!user) {
    //wrong credentials
    res.status(404).end();
  } else {
    //user exists
    const sessionId = Math.random();
    global.sessions[sessionId] = user;

    res.setHeader("authorization", sessionId);
    console.log(`Authorization header is ${sessionId}`);
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
  return { name: "Ryan Dahl", roles: ["admin", "visitor"] };
}

module.exports.router = router;
module.exports.getUserByName = getUserByName;
module.exports.getUserById = getUserById;