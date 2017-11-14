'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eslintHelp;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _cli = require('./cli');

var _cli2 = _interopRequireDefault(_cli);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('eslint-help');
logger.debug('Loaded');

var namedOption = /^--/;

function parseNo(option, str) {
  if (!str) return;

  var cmd = str.replace('--', '');
  if (/no-/.test(cmd)) {
    logger.debug('Parsing no option', str);
    cmd = cmd.replace('no-', '');
    option.default = 'true';
  }
  option.option = cmd;
  return option;
}

function parseDouble(arr) {
  var description = _lodash2.default.without(arr.slice(2), '').join(' ');
  return {
    option: arr[0].replace('--', ''),
    type: 'Boolean',
    alias: arr[1].replace('--', ''),
    description: description
  };
}

function parseRegular(arr) {
  logger.debug('Parsing %s', arr[0]);
  if (!arr[0]) {
    return;
  }
  var optionText = arr[0];
  var type = arr[1] || 'Boolean';
  var option = {};
  option = parseNo(option, optionText);

  option.type = type;

  var helpText = _lodash2.default.without(arr, optionText, type, '');

  var description = helpText.join(' ');
  if (description) {
    option.description = description;
  }
  return option;
}

function parseAlias(arr) {
  var alias = arr[0];
  logger.debug('Alias found: %s', alias);
  var option = parseRegular(_lodash2.default.without(arr, alias));

  if (alias) {
    option.alias = alias.replace('-', '');
  }
  return option;
}

function createOption(arr) {
  var option = void 0;

  if (namedOption.test(arr[0]) && namedOption.test(arr[1])) {
    // no alias defaulted boolean
    option = parseDouble(arr);
  } else if (namedOption.test(arr[0]) && !namedOption.test(arr[1])) {
    // just a no alias
    option = parseRegular(arr);
  } else {
    // aliased or other
    option = parseAlias(arr);
  }
  var isEmpty = _lodash2.default.isEmpty(option);
  return isEmpty ? undefined : option;
}

function parseHelp(helpText) {
  var helpArr = helpText.split('\n');
  var newArr = [];
  var previousLine = [];
  _lodash2.default.each(helpArr, function (row, index) {
    if (index <= 2) {
      return;
    }
    var str = row.replace(',', '');
    var arr = str.trim().split(' ');
    if (str.indexOf('-') >= 0 && previousLine[0] !== '') {
      var option = createOption(arr);
      if (option && option.option !== 'format' && option.option !== 'help') {
        newArr.push(option);
      }
    }
    previousLine = arr;
  });
  return newArr;
}

function eslintHelp() {
  logger.debug('Executing help');
  var result = (0, _cli2.default)(['--help'], { stdio: [process.stdin, null, process.stderr] });
  if (!result.message) {
    throw new Error('Help text not received from Eslint.');
  }
  var eslintOptions = parseHelp(result.message);
  return eslintOptions;
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lc2xpbnQvaGVscC5qcyJdLCJuYW1lcyI6WyJlc2xpbnRIZWxwIiwibG9nZ2VyIiwiZGVidWciLCJuYW1lZE9wdGlvbiIsInBhcnNlTm8iLCJvcHRpb24iLCJzdHIiLCJjbWQiLCJyZXBsYWNlIiwidGVzdCIsImRlZmF1bHQiLCJwYXJzZURvdWJsZSIsImFyciIsImRlc2NyaXB0aW9uIiwid2l0aG91dCIsInNsaWNlIiwiam9pbiIsInR5cGUiLCJhbGlhcyIsInBhcnNlUmVndWxhciIsIm9wdGlvblRleHQiLCJoZWxwVGV4dCIsInBhcnNlQWxpYXMiLCJjcmVhdGVPcHRpb24iLCJpc0VtcHR5IiwidW5kZWZpbmVkIiwicGFyc2VIZWxwIiwiaGVscEFyciIsInNwbGl0IiwibmV3QXJyIiwicHJldmlvdXNMaW5lIiwiZWFjaCIsInJvdyIsImluZGV4IiwidHJpbSIsImluZGV4T2YiLCJwdXNoIiwicmVzdWx0Iiwic3RkaW8iLCJwcm9jZXNzIiwic3RkaW4iLCJzdGRlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJlc2xpbnRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFxR3dCQSxVOztBQXJHeEI7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLHNCQUFPLGFBQVAsQ0FBZjtBQUNBQSxPQUFPQyxLQUFQLENBQWEsUUFBYjs7QUFFQSxJQUFNQyxjQUFjLEtBQXBCOztBQUVBLFNBQVNDLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUM1QixNQUFJLENBQUNBLEdBQUwsRUFBVTs7QUFFVixNQUFJQyxNQUFNRCxJQUFJRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFWO0FBQ0EsTUFBSSxNQUFNQyxJQUFOLENBQVdGLEdBQVgsQ0FBSixFQUFxQjtBQUNuQk4sV0FBT0MsS0FBUCxDQUFhLG1CQUFiLEVBQWtDSSxHQUFsQztBQUNBQyxVQUFNQSxJQUFJQyxPQUFKLENBQVksS0FBWixFQUFtQixF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QkFBRUMsSUFBRixDQUFPSixPQUFQLEVBQWdCLFVBQVVLLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUNwQyxRQUFJQSxTQUFTLENBQWIsRUFBZ0I7QUFDZDtBQUNEO0FBQ0QsUUFBSTNCLE1BQU0wQixJQUFJeEIsT0FBSixDQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FBVjtBQUNBLFFBQUlJLE1BQU1OLElBQUk0QixJQUFKLEdBQVdOLEtBQVgsQ0FBaUIsR0FBakIsQ0FBVjtBQUNBLFFBQUl0QixJQUFJNkIsT0FBSixDQUFZLEdBQVosS0FBb0IsQ0FBcEIsSUFBeUJMLGFBQWEsQ0FBYixNQUFvQixFQUFqRCxFQUFxRDtBQUNuRCxVQUFJekIsU0FBU2tCLGFBQWFYLEdBQWIsQ0FBYjtBQUNBLFVBQUlQLFVBQVVBLE9BQU9BLE1BQVAsS0FBa0IsUUFBNUIsSUFBd0NBLE9BQU9BLE1BQVAsS0FBa0IsTUFBOUQsRUFBc0U7QUFDcEV3QixlQUFPTyxJQUFQLENBQVkvQixNQUFaO0FBQ0Q7QUFDRjtBQUNEeUIsbUJBQWVsQixHQUFmO0FBRUQsR0FkRDtBQWVBLFNBQU9pQixNQUFQO0FBQ0Q7O0FBRWMsU0FBUzdCLFVBQVQsR0FBc0I7QUFDbkNDLFNBQU9DLEtBQVAsQ0FBYSxnQkFBYjtBQUNBLE1BQU1tQyxTQUFTLG1CQUFPLENBQUMsUUFBRCxDQUFQLEVBQW1CLEVBQUVDLE9BQU8sQ0FBRUMsUUFBUUMsS0FBVixFQUFpQixJQUFqQixFQUF1QkQsUUFBUUUsTUFBL0IsQ0FBVCxFQUFuQixDQUFmO0FBQ0EsTUFBSSxDQUFDSixPQUFPSyxPQUFaLEVBQXFCO0FBQ25CLFVBQU0sSUFBSUMsS0FBSixDQUFVLHFDQUFWLENBQU47QUFDRDtBQUNELE1BQU1DLGdCQUFnQmxCLFVBQVVXLE9BQU9LLE9BQWpCLENBQXRCO0FBQ0EsU0FBT0UsYUFBUDtBQUNEIiwiZmlsZSI6ImhlbHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgZXNsaW50IGZyb20gJy4vY2xpJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdlc2xpbnQtaGVscCcpO1xubG9nZ2VyLmRlYnVnKCdMb2FkZWQnKTtcblxuY29uc3QgbmFtZWRPcHRpb24gPSAvXi0tLztcblxuZnVuY3Rpb24gcGFyc2VObyhvcHRpb24sIHN0cikge1xuICBpZiAoIXN0cikgcmV0dXJuO1xuXG4gIGxldCBjbWQgPSBzdHIucmVwbGFjZSgnLS0nLCAnJyk7XG4gIGlmICgvbm8tLy50ZXN0KGNtZCkpIHtcbiAgICBsb2dnZXIuZGVidWcoJ1BhcnNpbmcgbm8gb3B0aW9uJywgc3RyKTtcbiAgICBjbWQgPSBjbWQucmVwbGFjZSgnbm8tJywgJycpO1xuICAgIG9wdGlvbi5kZWZhdWx0ID0gJ3RydWUnO1xuICB9XG4gIG9wdGlvbi5vcHRpb24gPSBjbWQ7XG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIHBhcnNlRG91YmxlKGFycikge1xuICBsZXQgZGVzY3JpcHRpb24gPSBfLndpdGhvdXQoYXJyLnNsaWNlKDIpLCcnKS5qb2luKCcgJyk7XG4gIHJldHVybiB7XG4gICAgb3B0aW9uOiBhcnJbMF0ucmVwbGFjZSgnLS0nLCAnJyksXG4gICAgdHlwZTogJ0Jvb2xlYW4nLFxuICAgIGFsaWFzOiBhcnJbMV0ucmVwbGFjZSgnLS0nLCAnJyksXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlUmVndWxhcihhcnIpIHtcbiAgbG9nZ2VyLmRlYnVnKCdQYXJzaW5nICVzJywgYXJyWzBdKTtcbiAgaWYgKCFhcnJbMF0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IG9wdGlvblRleHQgPSBhcnJbMF07XG4gIGxldCB0eXBlID0gYXJyWzFdIHx8ICdCb29sZWFuJztcbiAgbGV0IG9wdGlvbiA9IHt9O1xuICBvcHRpb24gPSBwYXJzZU5vKG9wdGlvbiwgb3B0aW9uVGV4dCk7XG5cbiAgb3B0aW9uLnR5cGUgPSB0eXBlO1xuXG4gIGxldCBoZWxwVGV4dCA9IF8ud2l0aG91dChhcnIsIG9wdGlvblRleHQsIHR5cGUsICcnKTtcblxuICBsZXQgZGVzY3JpcHRpb24gPSBoZWxwVGV4dC5qb2luKCcgJyk7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIG9wdGlvbi5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWxpYXMoYXJyKSB7XG4gIGxldCBhbGlhcyA9IGFyclswXTtcbiAgbG9nZ2VyLmRlYnVnKCdBbGlhcyBmb3VuZDogJXMnLCBhbGlhcyk7XG4gIGxldCBvcHRpb24gPSBwYXJzZVJlZ3VsYXIoXy53aXRob3V0KGFyciwgYWxpYXMpKTtcblxuICBpZiAoYWxpYXMpIHtcbiAgICBvcHRpb24uYWxpYXMgPSBhbGlhcy5yZXBsYWNlKCctJywnJyk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKGFycikge1xuICBsZXQgb3B0aW9uO1xuXG4gIGlmIChuYW1lZE9wdGlvbi50ZXN0KGFyclswXSkgJiYgbmFtZWRPcHRpb24udGVzdChhcnJbMV0pKSB7IC8vIG5vIGFsaWFzIGRlZmF1bHRlZCBib29sZWFuXG4gICAgb3B0aW9uID0gcGFyc2VEb3VibGUoYXJyKTtcbiAgfSBlbHNlIGlmIChuYW1lZE9wdGlvbi50ZXN0KGFyclswXSkgJiYgIW5hbWVkT3B0aW9uLnRlc3QoYXJyWzFdKSkgeyAvLyBqdXN0IGEgbm8gYWxpYXNcbiAgICBvcHRpb24gPSBwYXJzZVJlZ3VsYXIoYXJyKTtcbiAgfSBlbHNlIHsvLyBhbGlhc2VkIG9yIG90aGVyXG4gICAgb3B0aW9uID0gcGFyc2VBbGlhcyhhcnIpO1xuICB9XG4gIGxldCBpc0VtcHR5ID0gXy5pc0VtcHR5KG9wdGlvbik7XG4gIHJldHVybiBpc0VtcHR5ID8gdW5kZWZpbmVkIDogb3B0aW9uO1xufVxuXG5mdW5jdGlvbiBwYXJzZUhlbHAoaGVscFRleHQpIHtcbiAgbGV0IGhlbHBBcnIgPSBoZWxwVGV4dC5zcGxpdCgnXFxuJyk7XG4gIGxldCBuZXdBcnIgPSBbXTtcbiAgbGV0IHByZXZpb3VzTGluZSA9IFtdO1xuICBfLmVhY2goaGVscEFyciwgZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPD0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc3RyID0gcm93LnJlcGxhY2UoJywnLCAnJyk7XG4gICAgbGV0IGFyciA9IHN0ci50cmltKCkuc3BsaXQoJyAnKTtcbiAgICBpZiAoc3RyLmluZGV4T2YoJy0nKSA+PSAwICYmIHByZXZpb3VzTGluZVswXSAhPT0gJycpIHtcbiAgICAgIGxldCBvcHRpb24gPSBjcmVhdGVPcHRpb24oYXJyKTtcbiAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLm9wdGlvbiAhPT0gJ2Zvcm1hdCcgJiYgb3B0aW9uLm9wdGlvbiAhPT0gJ2hlbHAnKSB7XG4gICAgICAgIG5ld0Fyci5wdXNoKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIHByZXZpb3VzTGluZSA9IGFycjtcblxuICB9KTtcbiAgcmV0dXJuIG5ld0Fycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNsaW50SGVscCgpIHtcbiAgbG9nZ2VyLmRlYnVnKCdFeGVjdXRpbmcgaGVscCcpO1xuICBjb25zdCByZXN1bHQgPSBlc2xpbnQoWyctLWhlbHAnXSwgeyBzdGRpbzogWyBwcm9jZXNzLnN0ZGluLCBudWxsLCBwcm9jZXNzLnN0ZGVycl0gfSk7XG4gIGlmICghcmVzdWx0Lm1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlbHAgdGV4dCBub3QgcmVjZWl2ZWQgZnJvbSBFc2xpbnQuJyk7XG4gIH1cbiAgY29uc3QgZXNsaW50T3B0aW9ucyA9IHBhcnNlSGVscChyZXN1bHQubWVzc2FnZSk7XG4gIHJldHVybiBlc2xpbnRPcHRpb25zO1xufTtcbiJdfQ==