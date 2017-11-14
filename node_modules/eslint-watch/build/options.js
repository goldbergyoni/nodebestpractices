'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _optionator = require('optionator');

var _optionator2 = _interopRequireDefault(_optionator);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _help = require('./eslint/help');

var _help2 = _interopRequireDefault(_help);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('options');
logger.debug('Loaded');

var settings = {
  prepend: 'esw [options] [file.js ...] [dir ...]',
  concatRepeatedArrays: true,
  mergeRepeatedObjects: true
};

var myOptions = [{
  heading: 'Options'
}, {
  option: 'help',
  alias: 'h',
  type: 'Boolean',
  description: 'Show help'
}, {
  option: 'format',
  alias: 'f',
  type: 'String',
  default: 'simple-detail',
  description: 'Use a specific output format'
}, {
  option: 'watch',
  alias: 'w',
  type: 'Boolean',
  description: 'Enable file watch'
}, {
  option: 'changed',
  type: 'Boolean',
  description: 'Enables single file linting while watch is enabled'
}, {
  option: 'clear',
  type: 'Boolean',
  description: 'Clear terminal when running lint'
}, {
  option: 'esw-version',
  type: 'Boolean',
  description: 'Prints Eslint-Watch\'s Version'
}];

var eslintOptions = (0, _help2.default)();
var newOptions = _lodash2.default.union(myOptions, eslintOptions);
settings.options = newOptions;

exports.default = (0, _optionator2.default)(settings);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vcHRpb25zLmpzIl0sIm5hbWVzIjpbImxvZ2dlciIsImRlYnVnIiwic2V0dGluZ3MiLCJwcmVwZW5kIiwiY29uY2F0UmVwZWF0ZWRBcnJheXMiLCJtZXJnZVJlcGVhdGVkT2JqZWN0cyIsIm15T3B0aW9ucyIsImhlYWRpbmciLCJvcHRpb24iLCJhbGlhcyIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHQiLCJlc2xpbnRPcHRpb25zIiwibmV3T3B0aW9ucyIsInVuaW9uIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsc0JBQU8sU0FBUCxDQUFmO0FBQ0FBLE9BQU9DLEtBQVAsQ0FBYSxRQUFiOztBQUVBLElBQU1DLFdBQVc7QUFDZkMsV0FBUyx1Q0FETTtBQUVmQyx3QkFBc0IsSUFGUDtBQUdmQyx3QkFBc0I7QUFIUCxDQUFqQjs7QUFNQSxJQUFNQyxZQUFZLENBQUM7QUFDakJDLFdBQVM7QUFEUSxDQUFELEVBRWY7QUFDREMsVUFBUSxNQURQO0FBRURDLFNBQU8sR0FGTjtBQUdEQyxRQUFNLFNBSEw7QUFJREMsZUFBYTtBQUpaLENBRmUsRUFPZjtBQUNESCxVQUFRLFFBRFA7QUFFREMsU0FBTyxHQUZOO0FBR0RDLFFBQU0sUUFITDtBQUlERSxXQUFTLGVBSlI7QUFLREQsZUFBYTtBQUxaLENBUGUsRUFhZjtBQUNESCxVQUFRLE9BRFA7QUFFREMsU0FBTyxHQUZOO0FBR0RDLFFBQU0sU0FITDtBQUlEQyxlQUFhO0FBSlosQ0FiZSxFQWtCZjtBQUNESCxVQUFRLFNBRFA7QUFFREUsUUFBTSxTQUZMO0FBR0RDLGVBQWE7QUFIWixDQWxCZSxFQXNCZjtBQUNESCxVQUFRLE9BRFA7QUFFREUsUUFBTSxTQUZMO0FBR0RDLGVBQWE7QUFIWixDQXRCZSxFQTBCZjtBQUNESCxVQUFRLGFBRFA7QUFFREUsUUFBTSxTQUZMO0FBR0RDLGVBQWE7QUFIWixDQTFCZSxDQUFsQjs7QUFnQ0EsSUFBTUUsZ0JBQWdCLHFCQUF0QjtBQUNBLElBQU1DLGFBQWEsaUJBQUVDLEtBQUYsQ0FBUVQsU0FBUixFQUFtQk8sYUFBbkIsQ0FBbkI7QUFDQVgsU0FBU2MsT0FBVCxHQUFtQkYsVUFBbkI7O2tCQUVlLDBCQUFXWixRQUFYLEMiLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvcHRpb25hdG9yIGZyb20gJ29wdGlvbmF0b3InO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGdldE9wdGlvbnMgZnJvbSAnLi9lc2xpbnQvaGVscCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdvcHRpb25zJyk7XG5sb2dnZXIuZGVidWcoJ0xvYWRlZCcpO1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgcHJlcGVuZDogJ2VzdyBbb3B0aW9uc10gW2ZpbGUuanMgLi4uXSBbZGlyIC4uLl0nLFxuICBjb25jYXRSZXBlYXRlZEFycmF5czogdHJ1ZSxcbiAgbWVyZ2VSZXBlYXRlZE9iamVjdHM6IHRydWVcbn07XG5cbmNvbnN0IG15T3B0aW9ucyA9IFt7XG4gIGhlYWRpbmc6ICdPcHRpb25zJ1xufSwge1xuICBvcHRpb246ICdoZWxwJyxcbiAgYWxpYXM6ICdoJyxcbiAgdHlwZTogJ0Jvb2xlYW4nLFxuICBkZXNjcmlwdGlvbjogJ1Nob3cgaGVscCdcbn0sIHtcbiAgb3B0aW9uOiAnZm9ybWF0JyxcbiAgYWxpYXM6ICdmJyxcbiAgdHlwZTogJ1N0cmluZycsXG4gIGRlZmF1bHQ6ICdzaW1wbGUtZGV0YWlsJyxcbiAgZGVzY3JpcHRpb246ICdVc2UgYSBzcGVjaWZpYyBvdXRwdXQgZm9ybWF0J1xufSwge1xuICBvcHRpb246ICd3YXRjaCcsXG4gIGFsaWFzOiAndycsXG4gIHR5cGU6ICdCb29sZWFuJyxcbiAgZGVzY3JpcHRpb246ICdFbmFibGUgZmlsZSB3YXRjaCdcbn0sIHtcbiAgb3B0aW9uOiAnY2hhbmdlZCcsXG4gIHR5cGU6ICdCb29sZWFuJyxcbiAgZGVzY3JpcHRpb246ICdFbmFibGVzIHNpbmdsZSBmaWxlIGxpbnRpbmcgd2hpbGUgd2F0Y2ggaXMgZW5hYmxlZCdcbn0sIHtcbiAgb3B0aW9uOiAnY2xlYXInLFxuICB0eXBlOiAnQm9vbGVhbicsXG4gIGRlc2NyaXB0aW9uOiAnQ2xlYXIgdGVybWluYWwgd2hlbiBydW5uaW5nIGxpbnQnXG59LCB7XG4gIG9wdGlvbjogJ2Vzdy12ZXJzaW9uJyxcbiAgdHlwZTogJ0Jvb2xlYW4nLFxuICBkZXNjcmlwdGlvbjogJ1ByaW50cyBFc2xpbnQtV2F0Y2hcXCdzIFZlcnNpb24nXG59XTtcblxuY29uc3QgZXNsaW50T3B0aW9ucyA9IGdldE9wdGlvbnMoKTtcbmNvbnN0IG5ld09wdGlvbnMgPSBfLnVuaW9uKG15T3B0aW9ucywgZXNsaW50T3B0aW9ucyk7XG5zZXR0aW5ncy5vcHRpb25zID0gbmV3T3B0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgb3B0aW9uYXRvcihzZXR0aW5ncyk7XG4iXX0=