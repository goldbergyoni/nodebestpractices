'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('arg-parser');
logger.debug('Loaded');

var simpleDetail = 'simple-detail';
var formatterPath = 'formatters';

var defaultPath = './';
var formatKey = '-f';
var keys = {
  '-w': true,
  '--watch': true,
  '--changed': true,
  '--clear': true,
  '--esw-version': true
};
var formats = {
  'simple': true,
  'simple-success': true,
  'simple-detail': true
};

function getPath(options) {
  logger.debug('GetPath: %s', options.format);
  var formatPath = _path2.default.join(__dirname, formatterPath, options.format);
  logger.debug(formatPath);
  return formatPath;
};

exports.default = {
  parse: function argParser(cliArgs, options) {
    var arr = [];
    var dirs = options._;
    var formatSpecified = false;
    var args = _lodash2.default.slice(cliArgs, 2, cliArgs.length);
    logger.debug('Directories to check: %o', dirs);
    logger.debug('Args %o', args);
    _lodash2.default.each(args, function (item) {
      if (!keys[item] && !formats[item]) {
        logger.debug('Pushing item: %s', item);
        arr.push(item);
      }
      if (formats[item]) {
        formatSpecified = true;
        logger.debug('Format specified');
        arr.push(getPath(options));
      }
    });
    if (options.format === simpleDetail && !formatSpecified) {
      logger.debug('setting custom formatter');
      arr.push(formatKey);
      arr.push(getPath(options));
    }
    if (!dirs.length) {
      arr.push(defaultPath);
      logger.debug('Setting default path: %s', defaultPath);
    }
    return arr;
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmctcGFyc2VyLmpzIl0sIm5hbWVzIjpbImxvZ2dlciIsImRlYnVnIiwic2ltcGxlRGV0YWlsIiwiZm9ybWF0dGVyUGF0aCIsImRlZmF1bHRQYXRoIiwiZm9ybWF0S2V5Iiwia2V5cyIsImZvcm1hdHMiLCJnZXRQYXRoIiwib3B0aW9ucyIsImZvcm1hdCIsImZvcm1hdFBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwicGFyc2UiLCJhcmdQYXJzZXIiLCJjbGlBcmdzIiwiYXJyIiwiZGlycyIsIl8iLCJmb3JtYXRTcGVjaWZpZWQiLCJhcmdzIiwic2xpY2UiLCJsZW5ndGgiLCJlYWNoIiwiaXRlbSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxzQkFBTyxZQUFQLENBQWY7QUFDQUEsT0FBT0MsS0FBUCxDQUFhLFFBQWI7O0FBRUEsSUFBTUMsZUFBZSxlQUFyQjtBQUNBLElBQU1DLGdCQUFnQixZQUF0Qjs7QUFFQSxJQUFNQyxjQUFjLElBQXBCO0FBQ0EsSUFBTUMsWUFBWSxJQUFsQjtBQUNBLElBQU1DLE9BQU87QUFDWCxRQUFNLElBREs7QUFFWCxhQUFXLElBRkE7QUFHWCxlQUFhLElBSEY7QUFJWCxhQUFXLElBSkE7QUFLWCxtQkFBaUI7QUFMTixDQUFiO0FBT0EsSUFBTUMsVUFBVTtBQUNkLFlBQVUsSUFESTtBQUVkLG9CQUFrQixJQUZKO0FBR2QsbUJBQWlCO0FBSEgsQ0FBaEI7O0FBTUEsU0FBU0MsT0FBVCxDQUFpQkMsT0FBakIsRUFBMEI7QUFDeEJULFNBQU9DLEtBQVAsQ0FBYSxhQUFiLEVBQTRCUSxRQUFRQyxNQUFwQztBQUNBLE1BQU1DLGFBQWEsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCVixhQUFyQixFQUFvQ00sUUFBUUMsTUFBNUMsQ0FBbkI7QUFDQVYsU0FBT0MsS0FBUCxDQUFhVSxVQUFiO0FBQ0EsU0FBT0EsVUFBUDtBQUNEOztrQkFFYztBQUNiRyxTQUFPLFNBQVNDLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCUCxPQUE1QixFQUFxQztBQUMxQyxRQUFJUSxNQUFNLEVBQVY7QUFDQSxRQUFJQyxPQUFPVCxRQUFRVSxDQUFuQjtBQUNBLFFBQUlDLGtCQUFrQixLQUF0QjtBQUNBLFFBQUlDLE9BQU8saUJBQUVDLEtBQUYsQ0FBUU4sT0FBUixFQUFpQixDQUFqQixFQUFvQkEsUUFBUU8sTUFBNUIsQ0FBWDtBQUNBdkIsV0FBT0MsS0FBUCxDQUFhLDBCQUFiLEVBQXlDaUIsSUFBekM7QUFDQWxCLFdBQU9DLEtBQVAsQ0FBYSxTQUFiLEVBQXdCb0IsSUFBeEI7QUFDQSxxQkFBRUcsSUFBRixDQUFPSCxJQUFQLEVBQWEsVUFBVUksSUFBVixFQUFnQjtBQUMzQixVQUFJLENBQUNuQixLQUFLbUIsSUFBTCxDQUFELElBQWUsQ0FBQ2xCLFFBQVFrQixJQUFSLENBQXBCLEVBQW1DO0FBQ2pDekIsZUFBT0MsS0FBUCxDQUFhLGtCQUFiLEVBQWlDd0IsSUFBakM7QUFDQVIsWUFBSVMsSUFBSixDQUFTRCxJQUFUO0FBQ0Q7QUFDRCxVQUFJbEIsUUFBUWtCLElBQVIsQ0FBSixFQUFtQjtBQUNqQkwsMEJBQWtCLElBQWxCO0FBQ0FwQixlQUFPQyxLQUFQLENBQWEsa0JBQWI7QUFDQWdCLFlBQUlTLElBQUosQ0FBU2xCLFFBQVFDLE9BQVIsQ0FBVDtBQUNEO0FBQ0YsS0FWRDtBQVdBLFFBQUlBLFFBQVFDLE1BQVIsS0FBbUJSLFlBQW5CLElBQW1DLENBQUNrQixlQUF4QyxFQUF5RDtBQUN2RHBCLGFBQU9DLEtBQVAsQ0FBYSwwQkFBYjtBQUNBZ0IsVUFBSVMsSUFBSixDQUFTckIsU0FBVDtBQUNBWSxVQUFJUyxJQUFKLENBQVNsQixRQUFRQyxPQUFSLENBQVQ7QUFDRDtBQUNELFFBQUksQ0FBQ1MsS0FBS0ssTUFBVixFQUFrQjtBQUNoQk4sVUFBSVMsSUFBSixDQUFTdEIsV0FBVDtBQUNBSixhQUFPQyxLQUFQLENBQWEsMEJBQWIsRUFBeUNHLFdBQXpDO0FBQ0Q7QUFDRCxXQUFPYSxHQUFQO0FBQ0Q7QUE3QlksQyIsImZpbGUiOiJhcmctcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdhcmctcGFyc2VyJyk7XG5sb2dnZXIuZGVidWcoJ0xvYWRlZCcpO1xuXG5jb25zdCBzaW1wbGVEZXRhaWwgPSAnc2ltcGxlLWRldGFpbCc7XG5jb25zdCBmb3JtYXR0ZXJQYXRoID0gJ2Zvcm1hdHRlcnMnO1xuXG5jb25zdCBkZWZhdWx0UGF0aCA9ICcuLyc7XG5jb25zdCBmb3JtYXRLZXkgPSAnLWYnO1xuY29uc3Qga2V5cyA9IHtcbiAgJy13JzogdHJ1ZSxcbiAgJy0td2F0Y2gnOiB0cnVlLFxuICAnLS1jaGFuZ2VkJzogdHJ1ZSxcbiAgJy0tY2xlYXInOiB0cnVlLFxuICAnLS1lc3ctdmVyc2lvbic6IHRydWVcbn07XG5jb25zdCBmb3JtYXRzID0ge1xuICAnc2ltcGxlJzogdHJ1ZSxcbiAgJ3NpbXBsZS1zdWNjZXNzJzogdHJ1ZSxcbiAgJ3NpbXBsZS1kZXRhaWwnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBnZXRQYXRoKG9wdGlvbnMpIHtcbiAgbG9nZ2VyLmRlYnVnKCdHZXRQYXRoOiAlcycsIG9wdGlvbnMuZm9ybWF0KTtcbiAgY29uc3QgZm9ybWF0UGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGZvcm1hdHRlclBhdGgsIG9wdGlvbnMuZm9ybWF0KTtcbiAgbG9nZ2VyLmRlYnVnKGZvcm1hdFBhdGgpO1xuICByZXR1cm4gZm9ybWF0UGF0aDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2U6IGZ1bmN0aW9uIGFyZ1BhcnNlcihjbGlBcmdzLCBvcHRpb25zKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBkaXJzID0gb3B0aW9ucy5fO1xuICAgIGxldCBmb3JtYXRTcGVjaWZpZWQgPSBmYWxzZTtcbiAgICBsZXQgYXJncyA9IF8uc2xpY2UoY2xpQXJncywgMiwgY2xpQXJncy5sZW5ndGgpO1xuICAgIGxvZ2dlci5kZWJ1ZygnRGlyZWN0b3JpZXMgdG8gY2hlY2s6ICVvJywgZGlycyk7XG4gICAgbG9nZ2VyLmRlYnVnKCdBcmdzICVvJywgYXJncyk7XG4gICAgXy5lYWNoKGFyZ3MsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBpZiAoIWtleXNbaXRlbV0gJiYgIWZvcm1hdHNbaXRlbV0pIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdQdXNoaW5nIGl0ZW06ICVzJywgaXRlbSk7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKGZvcm1hdHNbaXRlbV0pIHtcbiAgICAgICAgZm9ybWF0U3BlY2lmaWVkID0gdHJ1ZTtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdGb3JtYXQgc3BlY2lmaWVkJyk7XG4gICAgICAgIGFyci5wdXNoKGdldFBhdGgob3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLmZvcm1hdCA9PT0gc2ltcGxlRGV0YWlsICYmICFmb3JtYXRTcGVjaWZpZWQpIHtcbiAgICAgIGxvZ2dlci5kZWJ1Zygnc2V0dGluZyBjdXN0b20gZm9ybWF0dGVyJyk7XG4gICAgICBhcnIucHVzaChmb3JtYXRLZXkpO1xuICAgICAgYXJyLnB1c2goZ2V0UGF0aChvcHRpb25zKSk7XG4gICAgfVxuICAgIGlmICghZGlycy5sZW5ndGgpIHtcbiAgICAgIGFyci5wdXNoKGRlZmF1bHRQYXRoKTtcbiAgICAgIGxvZ2dlci5kZWJ1ZygnU2V0dGluZyBkZWZhdWx0IHBhdGg6ICVzJywgZGVmYXVsdFBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG59O1xuIl19