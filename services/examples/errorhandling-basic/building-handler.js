const asyncMiddleware = (fn) =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
  

const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

var router = express.Router();
router.get("/api/products", (req, res, next) => {
  try {
    console.log(`Request started`);
    await Promise.reject("from promise");
    res.json(req.body);
  } catch (error) {
    next(error);
  }
});
app.use(router);

app.use((err, req, res, next) => {
  console.log(`Exception was caught by express middleware`);
  new errorHandler().handleError(err);
});

class customError extends Error {
  constructor(name, message, isOperational, httpCode) {
    super(message);
    Error.captureStackTrace(this, CustomError);
    this.date = new Date();
    this.isOperational = isOperational;
    this.message = message;
  }
}

class errorHandler {
  initialize() {
    process.on("uncaughtException", error => {
      console.log(`Uncaught error is now handled error`);
      if (!error.isOperational) process.exit(1);
      handleError(error);
    });

    process.on("unhandledRejection", (reason, p) => {
      console.log(`Uncaught promise is now handled error`);
    });
  }

  handleError(error) {
    //send right status code to caller

    //log error
    console.log(`Error is now being handled:`);
    console.log(error);

    //decide whether to crash
    if (!error.isOperational) process.exit(1);
  }
}

new errorHandler().initialize();
