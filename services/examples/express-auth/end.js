const express = require("express");
const app = express();
const util = require("util");

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

global.sessions = [];

router.post("/api/login", (req, res) => {
  console.log(`Login details are ${util.inspect(req.body)}`);
  if (getUser(req.body.username, req.body.password)) {
    console.log("a")  
    res.status(404).end();
  } else {
    console.log("b")
    const sessionId = Math.random();
    global.sessions.push(sessionId);

    res
      .setHeader("authentication", sessionId)
      .status(200)
      .end();
  }
});

app.use((req, res, next) => {
  console.log("c")
  const userId = global.sessions[req.get("authentication")];
  if (!userId) {
    res.set(401).end();
  } else {
    req.user = getUserById(userId);
  }
  next();
});

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.json(req.body);
});

function getUser(username, password) {
  if (!username === "username" || !password === "123456") return null;

  return { name: "Ryan Dahl", roles: ["admin", "visitor"] };
}

function getUserById(id) {
  return { name: "Ryan Dahl", roles: ["admin", "visitor"] };
}

app.use(router);
console.log(`App is starting`);
