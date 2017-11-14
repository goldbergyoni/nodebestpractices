'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _textTable = require('text-table');

var _textTable2 = _interopRequireDefault(_textTable);

var _stripAnsi = require('strip-ansi');

var _stripAnsi2 = _interopRequireDefault(_stripAnsi);

var _characters = require('./helpers/characters');

var _characters2 = _interopRequireDefault(_characters);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('simple-detail'); // Template Author Sindre Sorhus @eslint
// https://github.com/sindresorhus/eslint-stylish


logger.debug('loaded');

var tableSettings = {
  align: ['', '', 'r'],
  stringLength: function stringLength(str) {
    return (0, _stripAnsi2.default)(str).length;
  }
};

function pluralize(word, count) {
  return count === 1 ? word : word + 's';
}

function simpleDetail(results) {
  var totalErrors = 0;
  var totalWarnings = 0;
  var output = '';
  var cleanMsg = '';
  var messageTime = _chalk2.default.dim(`(${new Date().toLocaleTimeString()})`);
  logger.debug(results);
  results.forEach(function (result) {
    var messages = result.messages;
    var warnings = 0;
    var errors = 0;
    if (!messages.length) {
      return;
    }

    var tableText = (0, _textTable2.default)(messages.map(function (message) {
      function getMessageType(msg) {
        if (msg.fatal || msg.severity === 2) {
          totalErrors++;
          errors++;
          return _chalk2.default.red(_characters2.default.x);
        }

        totalWarnings++;
        warnings++;
        return _chalk2.default.yellow(_characters2.default.ex);
      }

      return ['', getMessageType(message), message.line || 0, message.column || 0, _chalk2.default.dim(message.message.replace(/\.$/, '')), _chalk2.default.dim(message.ruleId || '')];
    }), tableSettings);

    output += _chalk2.default.white.underline(result.filePath) + ` (${_chalk2.default.red(errors)}/${_chalk2.default.yellow(warnings)})${_characters2.default.endLine}`;
    output += tableText.split(_characters2.default.endLine).map(function (el) {
      return el.replace(/(\d+)\s+(\d+)/, function (m, p1, p2) {
        return _chalk2.default.dim(`${p1}:${p2}`);
      });
    }).join(_characters2.default.endLine) + _characters2.default.endLine + _characters2.default.endLine;
  });

  if (totalErrors) {
    output += _chalk2.default.red(`${_characters2.default.x} ${totalErrors} ${pluralize('error', totalErrors)} `);
  }
  if (totalWarnings) {
    output += _chalk2.default.yellow(`${_characters2.default.ex} ${totalWarnings} ${pluralize('warning', totalWarnings)} `);
  }

  if (results.length > 0 || !results.length) {
    cleanMsg = _chalk2.default.green(`${_characters2.default.check} Clean`) + ` ${messageTime}`;
  }

  output = totalErrors || totalWarnings ? `${output}${messageTime}${_characters2.default.endLine}` : cleanMsg;

  return output;
}

exports.default = simpleDetail;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXR0ZXJzL3NpbXBsZS1kZXRhaWwuanMiXSwibmFtZXMiOlsibG9nZ2VyIiwiZGVidWciLCJ0YWJsZVNldHRpbmdzIiwiYWxpZ24iLCJzdHJpbmdMZW5ndGgiLCJzdHIiLCJsZW5ndGgiLCJwbHVyYWxpemUiLCJ3b3JkIiwiY291bnQiLCJzaW1wbGVEZXRhaWwiLCJyZXN1bHRzIiwidG90YWxFcnJvcnMiLCJ0b3RhbFdhcm5pbmdzIiwib3V0cHV0IiwiY2xlYW5Nc2ciLCJtZXNzYWdlVGltZSIsImRpbSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJmb3JFYWNoIiwicmVzdWx0IiwibWVzc2FnZXMiLCJ3YXJuaW5ncyIsImVycm9ycyIsInRhYmxlVGV4dCIsIm1hcCIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlVHlwZSIsIm1zZyIsImZhdGFsIiwic2V2ZXJpdHkiLCJyZWQiLCJ4IiwieWVsbG93IiwiZXgiLCJsaW5lIiwiY29sdW1uIiwicmVwbGFjZSIsInJ1bGVJZCIsIndoaXRlIiwidW5kZXJsaW5lIiwiZmlsZVBhdGgiLCJlbmRMaW5lIiwic3BsaXQiLCJlbCIsIm0iLCJwMSIsInAyIiwiam9pbiIsImdyZWVuIiwiY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsc0JBQU8sZUFBUCxDQUFmLEMsQ0FUQTtBQUNBOzs7QUFVQUEsT0FBT0MsS0FBUCxDQUFhLFFBQWI7O0FBRUEsSUFBSUMsZ0JBQWdCO0FBQ2xCQyxTQUFPLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBRFc7QUFFbEJDLGdCQUFjLHNCQUFDQyxHQUFEO0FBQUEsV0FBUyx5QkFBTUEsR0FBTixFQUFXQyxNQUFwQjtBQUFBO0FBRkksQ0FBcEI7O0FBS0EsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDO0FBQzlCLFNBQVFB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QVcsZ0JBQU1tQyxLQUFOLENBQWEsR0FBRSxxQkFBRUMsS0FBTSxRQUF2QixJQUFtQyxJQUFHbkMsV0FBWSxFQUE3RDtBQUNEOztBQUVERixXQUFVRixlQUFlQyxhQUFoQixHQUFrQyxHQUFFQyxNQUFPLEdBQUVFLFdBQVksR0FBRSxxQkFBRTJCLE9BQVEsRUFBckUsR0FBeUU1QixRQUFsRjs7QUFFQSxTQUFPRCxNQUFQO0FBQ0Q7O2tCQUVjSixZIiwiZmlsZSI6InNpbXBsZS1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUZW1wbGF0ZSBBdXRob3IgU2luZHJlIFNvcmh1cyBAZXNsaW50XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2VzbGludC1zdHlsaXNoXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHRhYmxlIGZyb20gJ3RleHQtdGFibGUnO1xuaW1wb3J0IHN0cmlwIGZyb20gJ3N0cmlwLWFuc2knO1xuXG5pbXBvcnQgYyBmcm9tICcuL2hlbHBlcnMvY2hhcmFjdGVycyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2xvZ2dlcic7XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlcignc2ltcGxlLWRldGFpbCcpO1xuXG5sb2dnZXIuZGVidWcoJ2xvYWRlZCcpO1xuXG5sZXQgdGFibGVTZXR0aW5ncyA9IHtcbiAgYWxpZ246IFsnJywgJycsICdyJ10sXG4gIHN0cmluZ0xlbmd0aDogKHN0cikgPT4gc3RyaXAoc3RyKS5sZW5ndGhcbn07XG5cbmZ1bmN0aW9uIHBsdXJhbGl6ZSh3b3JkLCBjb3VudCkge1xuICByZXR1cm4gKGNvdW50ID09PSAxID8gd29yZCA6IHdvcmQgKyAncycpO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVEZXRhaWwocmVzdWx0cykge1xuICBsZXQgdG90YWxFcnJvcnMgPSAwO1xuICBsZXQgdG90YWxXYXJuaW5ncyA9IDA7XG4gIGxldCBvdXRwdXQgPSAnJztcbiAgbGV0IGNsZWFuTXNnID0gJyc7XG4gIGxldCBtZXNzYWdlVGltZSA9IGNoYWxrLmRpbShgKCR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0pYCk7XG4gIGxvZ2dlci5kZWJ1ZyhyZXN1bHRzKTtcbiAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBsZXQgbWVzc2FnZXMgPSByZXN1bHQubWVzc2FnZXM7XG4gICAgbGV0IHdhcm5pbmdzID0gMDtcbiAgICBsZXQgZXJyb3JzID0gMDtcbiAgICBpZiAoIW1lc3NhZ2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0YWJsZVRleHQgPSB0YWJsZShcbiAgICAgIG1lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRNZXNzYWdlVHlwZShtc2cpIHtcbiAgICAgICAgICBpZiAobXNnLmZhdGFsIHx8IG1zZy5zZXZlcml0eSA9PT0gMikge1xuICAgICAgICAgICAgdG90YWxFcnJvcnMrKztcbiAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWxrLnJlZChjLngpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvdGFsV2FybmluZ3MrKztcbiAgICAgICAgICB3YXJuaW5ncysrO1xuICAgICAgICAgIHJldHVybiBjaGFsay55ZWxsb3coYy5leCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gWycnLFxuICAgICAgICAgIGdldE1lc3NhZ2VUeXBlKG1lc3NhZ2UpLFxuICAgICAgICAgIG1lc3NhZ2UubGluZSB8fCAwLFxuICAgICAgICAgIG1lc3NhZ2UuY29sdW1uIHx8IDAsXG4gICAgICAgICAgY2hhbGsuZGltKG1lc3NhZ2UubWVzc2FnZS5yZXBsYWNlKC9cXC4kLywgJycpKSxcbiAgICAgICAgICBjaGFsay5kaW0obWVzc2FnZS5ydWxlSWQgfHwgJycpXTtcbiAgICAgIH0pLCB0YWJsZVNldHRpbmdzKTtcblxuICAgIG91dHB1dCArPSBjaGFsay53aGl0ZS51bmRlcmxpbmUocmVzdWx0LmZpbGVQYXRoKSArIGAgKCR7Y2hhbGsucmVkKGVycm9ycyl9LyR7Y2hhbGsueWVsbG93KHdhcm5pbmdzKX0pJHtjLmVuZExpbmV9YDtcbiAgICBvdXRwdXQgKz0gdGFibGVUZXh0LnNwbGl0KGMuZW5kTGluZSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsLnJlcGxhY2UoLyhcXGQrKVxccysoXFxkKykvLCAobSwgcDEsIHAyKSA9PiBjaGFsay5kaW0oYCR7cDF9OiR7cDJ9YCkpO1xuICAgIH0pLmpvaW4oYy5lbmRMaW5lKSArIGMuZW5kTGluZSArIGMuZW5kTGluZTtcbiAgfSk7XG5cbiAgaWYgKHRvdGFsRXJyb3JzKSB7XG4gICAgb3V0cHV0ICs9IGNoYWxrLnJlZChgJHtjLnh9ICR7dG90YWxFcnJvcnN9ICR7cGx1cmFsaXplKCdlcnJvcicsIHRvdGFsRXJyb3JzKX0gYCk7XG4gIH1cbiAgaWYgKHRvdGFsV2FybmluZ3MpIHtcbiAgICBvdXRwdXQgKz0gY2hhbGsueWVsbG93KGAke2MuZXh9ICR7dG90YWxXYXJuaW5nc30gJHtwbHVyYWxpemUoJ3dhcm5pbmcnLCB0b3RhbFdhcm5pbmdzKX0gYCk7XG4gIH1cblxuICBpZiAocmVzdWx0cy5sZW5ndGggPiAwIHx8ICFyZXN1bHRzLmxlbmd0aCkge1xuICAgIGNsZWFuTXNnID0gY2hhbGsuZ3JlZW4oYCR7Yy5jaGVja30gQ2xlYW5gKSArIGAgJHttZXNzYWdlVGltZX1gO1xuICB9XG5cbiAgb3V0cHV0ID0gKHRvdGFsRXJyb3JzIHx8IHRvdGFsV2FybmluZ3MpID8gYCR7b3V0cHV0fSR7bWVzc2FnZVRpbWV9JHtjLmVuZExpbmV9YCA6IGNsZWFuTXNnO1xuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZURldGFpbDtcbiJdfQ==