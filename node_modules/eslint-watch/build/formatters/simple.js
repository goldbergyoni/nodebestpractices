'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simple;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _errorWarning = require('./helpers/error-warning');

var _errorWarning2 = _interopRequireDefault(_errorWarning);

var _characters = require('./helpers/characters');

var _characters2 = _interopRequireDefault(_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function simple(results) {
  return _lodash2.default.reduce(results, function (str, result) {
    if (result.errorCount !== 0 || result.warningCount !== 0) {
      str += `${(0, _errorWarning2.default)(result)}${_characters2.default.endLine}`;
    }
    return str;
  }, '');
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZXJzL3NpbXBsZS5qcyJdLCJuYW1lcyI6WyJzaW1wbGUiLCJyZXN1bHRzIiwicmVkdWNlIiwic3RyIiwicmVzdWx0IiwiZXJyb3JDb3VudCIsIndhcm5pbmdDb3VudCIsImVuZExpbmUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUt3QkEsTTs7QUFMeEI7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxPQUFoQixFQUF5QjtBQUN0QyxTQUFPLGlCQUFFQyxNQUFGLENBQVNELE9BQVQsRUFBa0IsVUFBQ0UsR0FBRCxFQUFNQyxNQUFOLEVBQWdCO0FBQ3ZDLFFBQUlBLE9BQU9DLFVBQVAsS0FBc0IsQ0FBdEIsSUFBMkJELE9BQU9FLFlBQVAsS0FBd0IsQ0FBdkQsRUFBMEQ7QUFDeERILGFBQVEsR0FBRSw0QkFBTUMsTUFBTixDQUFjLEdBQUUscUJBQUVHLE9BQVEsRUFBcEM7QUFDRDtBQUNELFdBQU9KLEdBQVA7QUFDRCxHQUxNLEVBS0osRUFMSSxDQUFQO0FBTUQiLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGVycm9yIGZyb20gJy4vaGVscGVycy9lcnJvci13YXJuaW5nJztcbmltcG9ydCBjIGZyb20gJy4vaGVscGVycy9jaGFyYWN0ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2ltcGxlKHJlc3VsdHMpIHtcbiAgcmV0dXJuIF8ucmVkdWNlKHJlc3VsdHMsIChzdHIsIHJlc3VsdCkgPT57XG4gICAgaWYgKHJlc3VsdC5lcnJvckNvdW50ICE9PSAwIHx8IHJlc3VsdC53YXJuaW5nQ291bnQgIT09IDApIHtcbiAgICAgIHN0ciArPSBgJHtlcnJvcihyZXN1bHQpfSR7Yy5lbmRMaW5lfWA7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH0sICcnKTtcbn07XG4iXX0=