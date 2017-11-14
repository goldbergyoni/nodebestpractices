'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLogger;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createLogger(thing) {
  return {
    log: console.log,
    error: console.error,
    debug: (0, _debug2.default)('esw:' + thing)
  };
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlTG9nZ2VyIiwidGhpbmciLCJsb2ciLCJjb25zb2xlIiwiZXJyb3IiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxZOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDMUMsU0FBTztBQUNMQyxTQUFLQyxRQUFRRCxHQURSO0FBRUxFLFdBQU9ELFFBQVFDLEtBRlY7QUFHTEMsV0FBTyxxQkFBTSxTQUFTSixLQUFmO0FBSEYsR0FBUDtBQUtEIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcih0aGluZykge1xuICByZXR1cm4ge1xuICAgIGxvZzogY29uc29sZS5sb2csXG4gICAgZXJyb3I6IGNvbnNvbGUuZXJyb3IsXG4gICAgZGVidWc6IGRlYnVnKCdlc3c6JyArIHRoaW5nKVxuICB9O1xufTtcbiJdfQ==