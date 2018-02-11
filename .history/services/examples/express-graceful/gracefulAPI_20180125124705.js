const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const server = app.listen(port);

var router = express.Router();

let amIHealthy = true;

router.get("/healthcheck", (req, res, next) => {
  res.status(amIHealthy === true ? 200 : 503).end();
});


//API endpoint: is aspecial kind of middleware
router.get("/api/products", (req, res, next) => {
  setTimeout(() => {
    res.json({});
    next();
  }, 3000);
});

app.use(router);

process.on("SIGTERM", function() {
  console.log("SIGTERM");
  // app.server.close(function () {
  //   process.exit(0);
  // });
});

process.on("SIGINT", function() {
  console.log("SIGINT");
  amIHealthy = false;
  const timeReceiveSignal = new Date();
  server.close(function () {
    console.log(`Server is now closed, it took ${new Date() - timeReceiveSignal}`)
    process.exit(0);
  });
});

//downstream middleware: after API endpoint
app.use((req, res, next) => {
  console.log(
    "Downstream middleware -> I'm about to log the request success status"
  );
  console.log(res.statusCode);
  next();
});

console.log(`Starting`);
