'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('executor');

exports.default = {
  // https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options
  spawnSync: function spawnSync(cmd, args, childOptions) {
    logger.debug(cmd, args);
    var child = (0, _child_process.spawnSync)(cmd, args, childOptions);
    if (child.error) {
      logger.debug('Critical error occurred.');
      throw new Error(child.stderr.toString());
    }
    return {
      exitCode: child.status,
      message: child.stdout ? child.stdout.toString() : ''
    };
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGVjdXRvci5qcyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJzcGF3blN5bmMiLCJjbWQiLCJhcmdzIiwiY2hpbGRPcHRpb25zIiwiZGVidWciLCJjaGlsZCIsImVycm9yIiwiRXJyb3IiLCJzdGRlcnIiLCJ0b1N0cmluZyIsImV4aXRDb2RlIiwic3RhdHVzIiwibWVzc2FnZSIsInN0ZG91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQUNBLElBQU1BLFNBQVMsc0JBQU8sVUFBUCxDQUFmOztrQkFFZTtBQUNiO0FBQ0FDLGFBQVcsbUJBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxZQUFaLEVBQTZCO0FBQ3RDSixXQUFPSyxLQUFQLENBQWFILEdBQWIsRUFBa0JDLElBQWxCO0FBQ0EsUUFBTUcsUUFBUSw4QkFBVUosR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxZQUFyQixDQUFkO0FBQ0EsUUFBSUUsTUFBTUMsS0FBVixFQUFpQjtBQUNmUCxhQUFPSyxLQUFQLENBQWEsMEJBQWI7QUFDQSxZQUFNLElBQUlHLEtBQUosQ0FBVUYsTUFBTUcsTUFBTixDQUFhQyxRQUFiLEVBQVYsQ0FBTjtBQUNEO0FBQ0QsV0FBTztBQUNMQyxnQkFBVUwsTUFBTU0sTUFEWDtBQUVMQyxlQUFTUCxNQUFNUSxNQUFOLEdBQWVSLE1BQU1RLE1BQU4sQ0FBYUosUUFBYixFQUFmLEdBQXlDO0FBRjdDLEtBQVA7QUFJRDtBQWJZLEMiLCJmaWxlIjoiZXhlY3V0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3blN5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5jb25zdCBsb2dnZXIgPSBMb2dnZXIoJ2V4ZWN1dG9yJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9jaGlsZF9wcm9jZXNzLmh0bWwjY2hpbGRfcHJvY2Vzc19jaGlsZF9wcm9jZXNzX3NwYXduc3luY19jb21tYW5kX2FyZ3Nfb3B0aW9uc1xuICBzcGF3blN5bmM6IChjbWQsIGFyZ3MsIGNoaWxkT3B0aW9ucykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhjbWQsIGFyZ3MpO1xuICAgIGNvbnN0IGNoaWxkID0gc3Bhd25TeW5jKGNtZCwgYXJncywgY2hpbGRPcHRpb25zKTtcbiAgICBpZiAoY2hpbGQuZXJyb3IpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZygnQ3JpdGljYWwgZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2hpbGQuc3RkZXJyLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdENvZGU6IGNoaWxkLnN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IGNoaWxkLnN0ZG91dCA/IGNoaWxkLnN0ZG91dC50b1N0cmluZygpIDogJydcbiAgICB9O1xuICB9XG59O1xuIl19