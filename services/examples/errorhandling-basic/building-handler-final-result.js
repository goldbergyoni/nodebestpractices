const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

var router = express.Router();
router.get("/api/products", (req, res, next) => {
  try {
    console.log(`Request started`)
  res.json(req.body);  
  } catch (error) {
    next(error)
  }
});

app.use((err, req, res, next) => {
  logger.info(`Exception was caught by express middleware`);
});

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
  
class CustomError extends Error {
  constructor(name = "generic", isOperational = false, message = 'Uknown error has occured', ...params) {
    super(...params);
    Error.captureStackTrace(this, CustomError);
    this.date = new Date();
    this.isOperational = isOperational;
    this.message = message;
  }
}

class ErrorHandler {
  constructor() {
    process.on("uncaughtException", error => {
      console.log(`Uncaught error is now handled ${error}`);
    });
    process.on("unhandledRejection", (reason, p) => {
      console.log(`Uncaught promise is now handled ${error}`);
    });
  }

  handleError(error) {
    //send right status code to caller

    //log error
    console.log(`Error is now being handled:`);
    console.log(error);

    //decide whether to crash
    //if(!error.isOperational)
    //process.exit(1);
  }
}

class someBusinessLogicThatThrowsErrors {
  a() {
    try {
      throw "Error as string";
    } catch (error) {
      new ErrorHandler().handleError(error);
    }
  }

  b() {
    return new Promise((resolve, reject) => {
      reject("Error as reject");
    }).catch(error => {
      new ErrorHandler().handleError(error);
    });
  }
  c() {
    try {
      throw {
        message: "Error as object",
        code: "500"
      };
    } catch (error) {
      new ErrorHandler().handleError(error);
    }
  }
  d() {
    try {
      throw new Error("Error as... well Error");
    } catch (error) {
      new ErrorHandler().handleError(error);
    }
  }

  e() {
    try {
      throw new CustomError("InvalidInput", true, "This error should NOT crash the process");
    } catch (error) {
      new ErrorHandler().handleError(error);
    }
  }

  f() {
    try {
      throw new CustomError("InvalidInput", false, "This error SHOULD crash the process");
    } catch (error) {
      new ErrorHandler().handleError(error);
    }
  }
}

const aClassThatThrowsErrors = new someBusinessLogicThatThrowsErrors();
aClassThatThrowsErrors.a();
aClassThatThrowsErrors.b();
aClassThatThrowsErrors.c();
aClassThatThrowsErrors.d();
aClassThatThrowsErrors.e();
aClassThatThrowsErrors.f();