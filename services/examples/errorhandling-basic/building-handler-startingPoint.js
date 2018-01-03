class CustomError extends Error {
  constructor(name = "generic", ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.date = new Date();
  }
}

try {
  throw new CustomError("Invalid Input", "bazMessage");
} catch (e) {
  console.log(e)
}