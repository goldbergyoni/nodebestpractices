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
  const requestId = Math.ceil(Math.random() * 1000).toString();
  console.log(`Request ${requestId} has started`)
  res.write(`Request ${requestId} started \n`);
  setTimeout(() => {
    res.write(`Request ${requestId} ended \n`);
    res.end();
    console.log(`Request ${requestId} has finished`)
    next();
  }, 2000);
});

app.use(router);

process.on("SIGTERM", function() {
  console.log("SIGTERM");
  app.server.close(function () {
    process.exit(0);
  });
});

// process.on("SIGINT", function() {
//   console.log("SIGINT received");
//   amIHealthy = false;
//   const timeReceiveSignal = new Date();
//   server.close(function () {
//     console.log(`Server is now closed, it took ${new Date() - timeReceiveSignal}`)
//     process.exit(0);
//   });
// });

//downstream middleware: after API endpoint
app.use((req, res, next) => {
  console.log(
    "Downstream middleware -> I'm about to log the request success status"
  );
  console.log(res.statusCode);
  next();
});

console.log(`Starting`);
