class CustomError extends Error {
  constructor(name = "generic", code = 500, message = 'Uknown error has occured',  isOperational = false, ...params) {
    super(...params);
    Error.captureStackTrace(this, CustomError);
    this.name = name;
    this.date = new Date();
    this.code = code;
    this.isOperational = isOperational; 
    this.message = message;
  }
}

module.exports = CustomError;