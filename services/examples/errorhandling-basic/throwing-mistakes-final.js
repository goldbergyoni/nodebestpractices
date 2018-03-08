class CustomError extends Error {
  constructor(name = "generic", isOperational = false, message = 'Uknown error has occured', ...params) {
    super(...params);
    Error.captureStackTrace(this, CustomError);
    this.date = new Date();
    this.isOperational = isOperational;
    this.message = message;
  }
}

class someBusinessLogicThatThrowsErrors {
  a() {
    try {
      throw "Error as string";
    } catch (error) {
      console.log(error);
    }
  }

  b() {
    return new Promise((resolve, reject) => {
      reject("Error as reject");
    }).catch(error => {
      console.log(error);
    });
  }

  c() {
    try {
      throw {message: "Error as object",code: "500"};
    } catch (error) {
      console.log(error);
    }
  }
  d() {
    try {
      throw new Error("Error as... Error!");
    } catch (error) {
      console.log(error);
    }
  }

  e() {
    try {
      throw new CustomError("InvalidInput", true, "This error should NOT crash the process");
    } catch (error) {
      console.log(error);
    }
  }
}

const aClassThatThrowsErrors = new someBusinessLogicThatThrowsErrors();
aClassThatThrowsErrors.d();