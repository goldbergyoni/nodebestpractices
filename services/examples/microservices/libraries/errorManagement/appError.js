'use strict';

class AppError extends Error {
  constructor(message, httpCode, name, innerException) {
    super(message);
    this.httpCode = httpCode || 500;
    this.name = name || "UnknownError";
    this.isOperational = true;
    this.innerException = innerException;
  }

  toString() {
    let result = "\nError Info: ";
    if (this.name)
      result += `${this.name}`;
    if (this.httpCode)
      result += ` (${this.httpCode})`;
    if (this.message)
      result += `: ${this.message}`;
    result += '\n';
    if (this.stack)
      result += this.stack;
    if (this.innerException)
      result += `Inner Exception: ${this.innerException}`;

    return result;
  }
}

module.exports = AppError;
