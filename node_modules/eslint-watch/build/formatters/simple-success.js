'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simpleSuccess;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _success = require('./helpers/success');

var _success2 = _interopRequireDefault(_success);

var _errorWarning = require('./helpers/error-warning');

var _errorWarning2 = _interopRequireDefault(_errorWarning);

var _characters = require('./helpers/characters');

var _characters2 = _interopRequireDefault(_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function simpleSuccess(results) {
  return _lodash2.default.reduce(results, function (message, result) {
    if (result.errorCount === 0 && result.warningCount === 0) {
      message += `${(0, _success2.default)(result)}${_characters2.default.endLine}`;
    } else {
      message += `${(0, _errorWarning2.default)(result)}${_characters2.default.endLine}`;
    }
    return message;
  }, '');
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZXJzL3NpbXBsZS1zdWNjZXNzLmpzIl0sIm5hbWVzIjpbInNpbXBsZVN1Y2Nlc3MiLCJyZXN1bHRzIiwicmVkdWNlIiwibWVzc2FnZSIsInJlc3VsdCIsImVycm9yQ291bnQiLCJ3YXJuaW5nQ291bnQiLCJlbmRMaW5lIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFNd0JBLGE7O0FBTnhCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUFnQztBQUM3QyxTQUFPLGlCQUFFQyxNQUFGLENBQVNELE9BQVQsRUFBa0IsVUFBQ0UsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQzNDLFFBQUlBLE9BQU9DLFVBQVAsS0FBc0IsQ0FBdEIsSUFBMkJELE9BQU9FLFlBQVAsS0FBd0IsQ0FBdkQsRUFBMEQ7QUFDeERILGlCQUFZLEdBQUUsdUJBQVFDLE1BQVIsQ0FBZ0IsR0FBRSxxQkFBRUcsT0FBUSxFQUExQztBQUNELEtBRkQsTUFFTztBQUNMSixpQkFBWSxHQUFFLDRCQUFNQyxNQUFOLENBQWMsR0FBRSxxQkFBRUcsT0FBUSxFQUF4QztBQUNEO0FBQ0QsV0FBT0osT0FBUDtBQUNELEdBUE0sRUFPSixFQVBJLENBQVA7QUFRRCIsImZpbGUiOiJzaW1wbGUtc3VjY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBzdWNjZXNzIGZyb20gJy4vaGVscGVycy9zdWNjZXNzJztcbmltcG9ydCBlcnJvciBmcm9tICcuL2hlbHBlcnMvZXJyb3Itd2FybmluZyc7XG5pbXBvcnQgYyBmcm9tICcuL2hlbHBlcnMvY2hhcmFjdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZVN1Y2Nlc3MocmVzdWx0cykge1xuICByZXR1cm4gXy5yZWR1Y2UocmVzdWx0cywgKG1lc3NhZ2UsIHJlc3VsdCkgPT57XG4gICAgaWYgKHJlc3VsdC5lcnJvckNvdW50ID09PSAwICYmIHJlc3VsdC53YXJuaW5nQ291bnQgPT09IDApIHtcbiAgICAgIG1lc3NhZ2UgKz0gYCR7c3VjY2VzcyhyZXN1bHQpfSR7Yy5lbmRMaW5lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgKz0gYCR7ZXJyb3IocmVzdWx0KX0ke2MuZW5kTGluZX1gO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSwgJycpO1xufTtcbiJdfQ==