const AppError = require('./appError');

let commonErrors = {
    InvalidInput: {name: "InvalidInput", httpStatus: 400},
    Unauthorized: {name: "Unauthorized", httpStatus: 401},
    OperationNotAllowed: {name: "OperationNotAllowed", httpStatus: 403},
    ResourceNotFound: {name: "ResourceNotFound", httpStatus: 404},
    DuplicateItem: {name: "DuplicateItem", httpStatus: 409},
    Conflict: {name: "Conflict", httpStatus: 409},
    BadFormat: {name: "BadFormat", httpStatus: 422},
    UnknownError: {name: "UnknownError", httpStatus: 500}
};

module.exports = {
  InvalidInputError: (message, name = null, innerException = null) => new AppError(message, commonErrors.InvalidInput.httpStatus, name || commonErrors.InvalidInput.name, innerException),
  UnauthorizedError: (message, name = null, innerException = null) => new AppError(message || commonErrors.Unauthorized.name, commonErrors.Unauthorized.httpStatus, name || commonErrors.Unauthorized.name, innerException),
  OperationNotAllowedError: (message, name = null, innerException = null) => new AppError(message, commonErrors.OperationNotAllowed.httpStatus, name || commonErrors.OperationNotAllowed.name, innerException),
  ResourceNotFoundError: (message, name = null, innerException = null) => new AppError(message || commonErrors.ResourceNotFound.name, commonErrors.ResourceNotFound.httpStatus, name || commonErrors.ResourceNotFound.name, innerException),
  DuplicateItemError: (message, name = null, innerException = null) => new AppError(message, commonErrors.DuplicateItem.httpStatus, name || commonErrors.DuplicateItem.name, innerException),
  ConflictError: (message, name = null, innerException = null) => new AppError(message, commonErrors.Conflict.httpStatus, name || commonErrors.Conflict.name, innerException),
  BadFormatError: (message, name = null, innerException = null) => new AppError(message, commonErrors.BadFormat.httpStatus, name || commonErrors.BadFormat.name, innerException),
  UnknownError: (message, name = null, innerException = null) => new AppError(message, commonErrors.UnknownError.httpStatus, name || commonErrors.UnknownError.name, innerException)
};
