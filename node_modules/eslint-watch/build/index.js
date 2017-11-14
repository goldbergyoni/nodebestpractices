'use strict';

var _keypress = require('keypress');

var _keypress2 = _interopRequireDefault(_keypress);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

var _cli = require('./eslint/cli');

var _cli2 = _interopRequireDefault(_cli);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _watcher = require('./watcher');

var _watcher2 = _interopRequireDefault(_watcher);

var _argParser = require('./arg-parser');

var _argParser2 = _interopRequireDefault(_argParser);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _package = require('../package');

var _package2 = _interopRequireDefault(_package);

var _clearTerminal = require('./formatters/helpers/clear-terminal.js');

var _clearTerminal2 = _interopRequireDefault(_clearTerminal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('esw-cli'); /* eslint no-process-exit: 0*/


logger.debug('Loaded');
logger.debug(`Eslint-Watch: ${_package2.default.version}`);

var exitCode = void 0;
var args = process.argv;

function runLint(args, options) {
  logger.debug(args);
  var result = (0, _cli2.default)(args, options);
  logger.debug('lint completed. Exit Code: %o', result.exitCode);
  exitCode = result.exitCode;
  logger.log(result.message);
}

function keyListener(args, options) {
  var stdin = process.stdin;
  if (!stdin.setRawMode) {
    logger.debug('Process might be wrapped exiting keybinding');
    return;
  }
  (0, _keypress2.default)(stdin);
  stdin.on('keypress', function keyPressListener(ch, key) {
    logger.debug('%s was pressed', key ? key.name : ch);
    if (key && key.name === 'return') {
      logger.debug('relinting...');
      logger.debug(options);
      runLint(args, options);
    }
    if (key && key.ctrl && key.name === 'c') {
      process.exit();
    }
  });
  stdin.setRawMode(true);
  stdin.resume();
}

logger.debug('Arguments passed: %o', args);
var parsedOptions = _options2.default.parse(args);
_settings2.default.cliOptions = parsedOptions;

if (parsedOptions.eswVersion) {
  logger.log(_package2.default.version);
} else {
  logger.debug('Parsing args');
  var eslArgs = _argParser2.default.parse(args, parsedOptions);
  if (!parsedOptions.help) {
    logger.debug('Running initial lint');
    if (parsedOptions.clear) {
      (0, _clearTerminal2.default)();
    }
    runLint(eslArgs, parsedOptions);
    if (parsedOptions.watch) {
      logger.debug('-w seen');
      keyListener(eslArgs, parsedOptions);
      (0, _watcher2.default)(parsedOptions);
    }
  } else {
    logger.log(_options2.default.generateHelp());
  }
}

process.on('exit', function () {
  logger.debug(`Exiting: ${exitCode}`);
  process.exit(exitCode);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJkZWJ1ZyIsInZlcnNpb24iLCJleGl0Q29kZSIsImFyZ3MiLCJwcm9jZXNzIiwiYXJndiIsInJ1bkxpbnQiLCJvcHRpb25zIiwicmVzdWx0IiwibG9nIiwibWVzc2FnZSIsImtleUxpc3RlbmVyIiwic3RkaW4iLCJzZXRSYXdNb2RlIiwib24iLCJrZXlQcmVzc0xpc3RlbmVyIiwiY2giLCJrZXkiLCJuYW1lIiwiY3RybCIsImV4aXQiLCJyZXN1bWUiLCJwYXJzZWRPcHRpb25zIiwicGFyc2UiLCJjbGlPcHRpb25zIiwiZXN3VmVyc2lvbiIsImVzbEFyZ3MiLCJoZWxwIiwiY2xlYXIiLCJ3YXRjaCIsImdlbmVyYXRlSGVscCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsc0JBQU8sU0FBUCxDQUFmLEMsQ0FaQTs7O0FBY0FBLE9BQU9DLEtBQVAsQ0FBYSxRQUFiO0FBQ0FELE9BQU9DLEtBQVAsQ0FBYyxpQkFBZ0Isa0JBQUlDLE9BQVEsRUFBMUM7O0FBRUEsSUFBSUMsaUJBQUo7QUFDQSxJQUFNQyxPQUFPQyxRQUFRQyxJQUFyQjs7QUFFQSxTQUFTQyxPQUFULENBQWlCSCxJQUFqQixFQUF1QkksT0FBdkIsRUFBZ0M7QUFDOUJSLFNBQU9DLEtBQVAsQ0FBYUcsSUFBYjtBQUNBLE1BQU1LLFNBQVMsbUJBQVVMLElBQVYsRUFBZ0JJLE9BQWhCLENBQWY7QUFDQVIsU0FBT0MsS0FBUCxDQUFhLCtCQUFiLEVBQThDUSxPQUFPTixRQUFyRDtBQUNBQSxhQUFXTSxPQUFPTixRQUFsQjtBQUNBSCxTQUFPVSxHQUFQLENBQVdELE9BQU9FLE9BQWxCO0FBQ0Q7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQlIsSUFBckIsRUFBMkJJLE9BQTNCLEVBQW9DO0FBQ2xDLE1BQUlLLFFBQVFSLFFBQVFRLEtBQXBCO0FBQ0EsTUFBSSxDQUFDQSxNQUFNQyxVQUFYLEVBQXVCO0FBQ3JCZCxXQUFPQyxLQUFQLENBQWEsNkNBQWI7QUFDQTtBQUNEO0FBQ0QsMEJBQVNZLEtBQVQ7QUFDQUEsUUFBTUUsRUFBTixDQUFTLFVBQVQsRUFBcUIsU0FBU0MsZ0JBQVQsQ0FBMEJDLEVBQTFCLEVBQThCQyxHQUE5QixFQUFtQztBQUN0RGxCLFdBQU9DLEtBQVAsQ0FBYSxnQkFBYixFQUErQmlCLE1BQU1BLElBQUlDLElBQVYsR0FBaUJGLEVBQWhEO0FBQ0EsUUFBSUMsT0FBT0EsSUFBSUMsSUFBSixLQUFhLFFBQXhCLEVBQWtDO0FBQ2hDbkIsYUFBT0MsS0FBUCxDQUFhLGNBQWI7QUFDQUQsYUFBT0MsS0FBUCxDQUFhTyxPQUFiO0FBQ0FELGNBQVFILElBQVIsRUFBY0ksT0FBZDtBQUNEO0FBQ0QsUUFBSVUsT0FBT0EsSUFBSUUsSUFBWCxJQUFtQkYsSUFBSUMsSUFBSixLQUFhLEdBQXBDLEVBQXlDO0FBQ3ZDZCxjQUFRZ0IsSUFBUjtBQUNEO0FBQ0YsR0FWRDtBQVdBUixRQUFNQyxVQUFOLENBQWlCLElBQWpCO0FBQ0FELFFBQU1TLE1BQU47QUFDRDs7QUFFRHRCLE9BQU9DLEtBQVAsQ0FBYSxzQkFBYixFQUFxQ0csSUFBckM7QUFDQSxJQUFNbUIsZ0JBQWdCLGtCQUFZQyxLQUFaLENBQWtCcEIsSUFBbEIsQ0FBdEI7QUFDQSxtQkFBU3FCLFVBQVQsR0FBc0JGLGFBQXRCOztBQUVBLElBQUlBLGNBQWNHLFVBQWxCLEVBQThCO0FBQzVCMUIsU0FBT1UsR0FBUCxDQUFXLGtCQUFJUixPQUFmO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xGLFNBQU9DLEtBQVAsQ0FBYSxjQUFiO0FBQ0EsTUFBTTBCLFVBQVUsb0JBQVVILEtBQVYsQ0FBZ0JwQixJQUFoQixFQUFzQm1CLGFBQXRCLENBQWhCO0FBQ0EsTUFBSSxDQUFDQSxjQUFjSyxJQUFuQixFQUF5QjtBQUN2QjVCLFdBQU9DLEtBQVAsQ0FBYSxzQkFBYjtBQUNBLFFBQUlzQixjQUFjTSxLQUFsQixFQUF5QjtBQUN2QjtBQUNEO0FBQ0R0QixZQUFRb0IsT0FBUixFQUFpQkosYUFBakI7QUFDQSxRQUFJQSxjQUFjTyxLQUFsQixFQUF5QjtBQUN2QjlCLGFBQU9DLEtBQVAsQ0FBYSxTQUFiO0FBQ0FXLGtCQUFZZSxPQUFaLEVBQXFCSixhQUFyQjtBQUNBLDZCQUFRQSxhQUFSO0FBQ0Q7QUFDRixHQVhELE1BV087QUFDTHZCLFdBQU9VLEdBQVAsQ0FBVyxrQkFBWXFCLFlBQVosRUFBWDtBQUNEO0FBQ0Y7O0FBR0QxQixRQUFRVSxFQUFSLENBQVcsTUFBWCxFQUFtQixZQUFNO0FBQ3ZCZixTQUFPQyxLQUFQLENBQWMsWUFBV0UsUUFBUyxFQUFsQztBQUNBRSxVQUFRZ0IsSUFBUixDQUFhbEIsUUFBYjtBQUNELENBSEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tcHJvY2Vzcy1leGl0OiAwKi9cbmltcG9ydCBrZXlwcmVzcyBmcm9tICdrZXlwcmVzcyc7XG5cbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCBlc2xpbnRDbGkgZnJvbSAnLi9lc2xpbnQvY2xpJztcbmltcG9ydCBoZWxwT3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJztcbmltcG9ydCBhcmdQYXJzZXIgZnJvbSAnLi9hcmctcGFyc2VyJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlJztcbmltcG9ydCBjbGVhclRlcm1pbmFsIGZyb20gJy4vZm9ybWF0dGVycy9oZWxwZXJzL2NsZWFyLXRlcm1pbmFsLmpzJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdlc3ctY2xpJyk7XG5cbmxvZ2dlci5kZWJ1ZygnTG9hZGVkJyk7XG5sb2dnZXIuZGVidWcoYEVzbGludC1XYXRjaDogJHtwa2cudmVyc2lvbn1gKTtcblxubGV0IGV4aXRDb2RlO1xuY29uc3QgYXJncyA9IHByb2Nlc3MuYXJndjtcblxuZnVuY3Rpb24gcnVuTGludChhcmdzLCBvcHRpb25zKSB7XG4gIGxvZ2dlci5kZWJ1ZyhhcmdzKTtcbiAgY29uc3QgcmVzdWx0ID0gZXNsaW50Q2xpKGFyZ3MsIG9wdGlvbnMpO1xuICBsb2dnZXIuZGVidWcoJ2xpbnQgY29tcGxldGVkLiBFeGl0IENvZGU6ICVvJywgcmVzdWx0LmV4aXRDb2RlKTtcbiAgZXhpdENvZGUgPSByZXN1bHQuZXhpdENvZGU7XG4gIGxvZ2dlci5sb2cocmVzdWx0Lm1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBrZXlMaXN0ZW5lcihhcmdzLCBvcHRpb25zKSB7XG4gIGxldCBzdGRpbiA9IHByb2Nlc3Muc3RkaW47XG4gIGlmICghc3RkaW4uc2V0UmF3TW9kZSkge1xuICAgIGxvZ2dlci5kZWJ1ZygnUHJvY2VzcyBtaWdodCBiZSB3cmFwcGVkIGV4aXRpbmcga2V5YmluZGluZycpO1xuICAgIHJldHVybjtcbiAgfVxuICBrZXlwcmVzcyhzdGRpbik7XG4gIHN0ZGluLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIGtleVByZXNzTGlzdGVuZXIoY2gsIGtleSkge1xuICAgIGxvZ2dlci5kZWJ1ZygnJXMgd2FzIHByZXNzZWQnLCBrZXkgPyBrZXkubmFtZSA6IGNoKTtcbiAgICBpZiAoa2V5ICYmIGtleS5uYW1lID09PSAncmV0dXJuJykge1xuICAgICAgbG9nZ2VyLmRlYnVnKCdyZWxpbnRpbmcuLi4nKTtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhvcHRpb25zKTtcbiAgICAgIHJ1bkxpbnQoYXJncywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChrZXkgJiYga2V5LmN0cmwgJiYga2V5Lm5hbWUgPT09ICdjJykge1xuICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgfVxuICB9KTtcbiAgc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTtcbiAgc3RkaW4ucmVzdW1lKCk7XG59XG5cbmxvZ2dlci5kZWJ1ZygnQXJndW1lbnRzIHBhc3NlZDogJW8nLCBhcmdzKTtcbmNvbnN0IHBhcnNlZE9wdGlvbnMgPSBoZWxwT3B0aW9ucy5wYXJzZShhcmdzKTtcbnNldHRpbmdzLmNsaU9wdGlvbnMgPSBwYXJzZWRPcHRpb25zO1xuXG5pZiAocGFyc2VkT3B0aW9ucy5lc3dWZXJzaW9uKSB7XG4gIGxvZ2dlci5sb2cocGtnLnZlcnNpb24pO1xufSBlbHNlIHtcbiAgbG9nZ2VyLmRlYnVnKCdQYXJzaW5nIGFyZ3MnKTtcbiAgY29uc3QgZXNsQXJncyA9IGFyZ1BhcnNlci5wYXJzZShhcmdzLCBwYXJzZWRPcHRpb25zKTtcbiAgaWYgKCFwYXJzZWRPcHRpb25zLmhlbHApIHtcbiAgICBsb2dnZXIuZGVidWcoJ1J1bm5pbmcgaW5pdGlhbCBsaW50Jyk7XG4gICAgaWYgKHBhcnNlZE9wdGlvbnMuY2xlYXIpIHtcbiAgICAgIGNsZWFyVGVybWluYWwoKTtcbiAgICB9XG4gICAgcnVuTGludChlc2xBcmdzLCBwYXJzZWRPcHRpb25zKTtcbiAgICBpZiAocGFyc2VkT3B0aW9ucy53YXRjaCkge1xuICAgICAgbG9nZ2VyLmRlYnVnKCctdyBzZWVuJyk7XG4gICAgICBrZXlMaXN0ZW5lcihlc2xBcmdzLCBwYXJzZWRPcHRpb25zKTtcbiAgICAgIHdhdGNoZXIocGFyc2VkT3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvZ2dlci5sb2coaGVscE9wdGlvbnMuZ2VuZXJhdGVIZWxwKCkpO1xuICB9XG59XG5cblxucHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgbG9nZ2VyLmRlYnVnKGBFeGl0aW5nOiAke2V4aXRDb2RlfWApO1xuICBwcm9jZXNzLmV4aXQoZXhpdENvZGUpO1xufSk7XG4iXX0=