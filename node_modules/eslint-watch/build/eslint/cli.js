'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eslintCli;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _executor = require('../executor');

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('eslint-cli');
logger.debug('Loaded');

function eslintCli(args, options) {
  logger.debug('eslint: %o', args.join(' '));
  var result = (0, _executor.spawnSync)(_settings2.default.eslintPath, args, _lodash2.default.merge({ stdio: 'inherit' }, options));
  logger.debug(result);
  return result;
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lc2xpbnQvY2xpLmpzIl0sIm5hbWVzIjpbImVzbGludENsaSIsImxvZ2dlciIsImRlYnVnIiwiYXJncyIsIm9wdGlvbnMiLCJqb2luIiwicmVzdWx0IiwiZXNsaW50UGF0aCIsIm1lcmdlIiwic3RkaW8iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVF3QkEsUzs7QUFSeEI7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLHNCQUFPLFlBQVAsQ0FBZjtBQUNBQSxPQUFPQyxLQUFQLENBQWEsUUFBYjs7QUFFZSxTQUFTRixTQUFULENBQW1CRyxJQUFuQixFQUF5QkMsT0FBekIsRUFBa0M7QUFDL0NILFNBQU9DLEtBQVAsQ0FBYSxZQUFiLEVBQTJCQyxLQUFLRSxJQUFMLENBQVUsR0FBVixDQUEzQjtBQUNBLE1BQU1DLFNBQVMseUJBQVUsbUJBQVNDLFVBQW5CLEVBQStCSixJQUEvQixFQUFxQyxpQkFBRUssS0FBRixDQUFRLEVBQUVDLE9BQU8sU0FBVCxFQUFSLEVBQThCTCxPQUE5QixDQUFyQyxDQUFmO0FBQ0FILFNBQU9DLEtBQVAsQ0FBYUksTUFBYjtBQUNBLFNBQU9BLE1BQVA7QUFDRCIsImZpbGUiOiJjbGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc3Bhd25TeW5jIH0gZnJvbSAnLi4vZXhlY3V0b3InO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdlc2xpbnQtY2xpJyk7XG5sb2dnZXIuZGVidWcoJ0xvYWRlZCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2xpbnRDbGkoYXJncywgb3B0aW9ucykge1xuICBsb2dnZXIuZGVidWcoJ2VzbGludDogJW8nLCBhcmdzLmpvaW4oJyAnKSk7XG4gIGNvbnN0IHJlc3VsdCA9IHNwYXduU3luYyhzZXR0aW5ncy5lc2xpbnRQYXRoLCBhcmdzLCBfLm1lcmdlKHsgc3RkaW86ICdpbmhlcml0JyB9LCBvcHRpb25zKSk7XG4gIGxvZ2dlci5kZWJ1ZyhyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdfQ==