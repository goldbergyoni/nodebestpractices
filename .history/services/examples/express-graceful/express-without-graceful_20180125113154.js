const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const server = app.listen(port);

var router = express.Router();

//upstream middleware: before API endpoint
app.use((req, res, next) => {
  console.log(
    `Upstream middleware -> I'm about to log a new request  ${req.url}`
  );
  next();
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
  const timeReceiveSignal = new Date();
  server.close(function () {
    console.log(`Server is now closed, it tool ${}`)
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
