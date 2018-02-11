const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const server = app.listen(port);

var router = express.Router();

let amIHealthy = true;

router.get("/healthcheck", (req, res, next) => {
  console.log(`Health check is performed now, response is ${amIHealthy}`)
  res.status(amIHealthy === true ? 200 : 503).end();
});


//API endpoint: is aspecial kind of middleware
router.get("/api/products", (req, res, next) => {
  const requestId = Math.random();
  console.log(`Request ${requestId} has started, `)
  setTimeout(() => {
    res.json({});
    next();
  }, 5000);
});

app.use(router);

// rs

//downstream middleware: after API endpoint
app.use((req, res, next) => {
  console.log(
    "Downstream middleware -> I'm about to log the request success status"
  );
  console.log(res.statusCode);
  next();
});

console.log(`Starting`);
