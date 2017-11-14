'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Internal Settings */
var logger = (0, _logger2.default)('internal-settings');
var platform = _os2.default.platform();

var eslintPath = function loadEslintPath() {
  var cmd = platform === 'win32' ? '.cmd' : '';
  var eslintPath = void 0;
  try {
    eslintPath = _path2.default.join('./', `node_modules/.bin/eslint${cmd}`);
    _fs2.default.accessSync(eslintPath);
    logger.debug(`Eslint installed locally ${eslintPath}`);
  } catch (e) {
    logger.debug(e);
    try {
      eslintPath = _path2.default.join(process.env._, `../eslint${cmd}`);
      _fs2.default.accessSync(eslintPath);
      logger.debug(`Eslint installed globally ${eslintPath}`);
    } catch (e) {
      throw new Error('Eslint needs to be installed globally or locally in node_modules.');
    }
  }
  return eslintPath;
}();

var settings = {
  eslintPath,
  platform,
  isWindows: platform === 'win32'
};

logger.debug(settings);

exports.default = settings;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJwbGF0Zm9ybSIsImVzbGludFBhdGgiLCJsb2FkRXNsaW50UGF0aCIsImNtZCIsImpvaW4iLCJhY2Nlc3NTeW5jIiwiZGVidWciLCJlIiwicHJvY2VzcyIsImVudiIsIl8iLCJFcnJvciIsInNldHRpbmdzIiwiaXNXaW5kb3dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkE7QUFNQSxJQUFNQSxTQUFTLHNCQUFPLG1CQUFQLENBQWY7QUFDQSxJQUFNQyxXQUFXLGFBQUdBLFFBQUgsRUFBakI7O0FBRUEsSUFBTUMsYUFBYyxTQUFTQyxjQUFULEdBQTBCO0FBQzVDLE1BQU1DLE1BQU1ILGFBQWEsT0FBYixHQUF1QixNQUF2QixHQUFnQyxFQUE1QztBQUNBLE1BQUlDLG1CQUFKO0FBQ0EsTUFBSTtBQUNGQSxpQkFBYSxlQUFLRyxJQUFMLENBQVUsSUFBVixFQUFpQiwyQkFBMEJELEdBQUksRUFBL0MsQ0FBYjtBQUNBLGlCQUFHRSxVQUFILENBQWNKLFVBQWQ7QUFDQUYsV0FBT08sS0FBUCxDQUFjLDRCQUEyQkwsVUFBVyxFQUFwRDtBQUNELEdBSkQsQ0FJRSxPQUFPTSxDQUFQLEVBQVU7QUFDVlIsV0FBT08sS0FBUCxDQUFhQyxDQUFiO0FBQ0EsUUFBSTtBQUNGTixtQkFBYSxlQUFLRyxJQUFMLENBQVVJLFFBQVFDLEdBQVIsQ0FBWUMsQ0FBdEIsRUFBMEIsWUFBV1AsR0FBSSxFQUF6QyxDQUFiO0FBQ0EsbUJBQUdFLFVBQUgsQ0FBY0osVUFBZDtBQUNBRixhQUFPTyxLQUFQLENBQWMsNkJBQTRCTCxVQUFXLEVBQXJEO0FBQ0QsS0FKRCxDQUlFLE9BQU9NLENBQVAsRUFBVTtBQUNWLFlBQU0sSUFBSUksS0FBSixDQUFVLG1FQUFWLENBQU47QUFDRDtBQUNGO0FBQ0QsU0FBT1YsVUFBUDtBQUNELENBbEJrQixFQUFuQjs7QUFvQkEsSUFBTVcsV0FBVztBQUNmWCxZQURlO0FBRWZELFVBRmU7QUFHZmEsYUFBV2IsYUFBYTtBQUhULENBQWpCOztBQU1BRCxPQUFPTyxLQUFQLENBQWFNLFFBQWI7O2tCQUVlQSxRIiwiZmlsZSI6InNldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW50ZXJuYWwgU2V0dGluZ3MgKi9cbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3QgbG9nZ2VyID0gTG9nZ2VyKCdpbnRlcm5hbC1zZXR0aW5ncycpO1xuY29uc3QgcGxhdGZvcm0gPSBvcy5wbGF0Zm9ybSgpO1xuXG5jb25zdCBlc2xpbnRQYXRoID0gKGZ1bmN0aW9uIGxvYWRFc2xpbnRQYXRoKCkge1xuICBjb25zdCBjbWQgPSBwbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/ICcuY21kJyA6ICcnO1xuICBsZXQgZXNsaW50UGF0aDtcbiAgdHJ5IHtcbiAgICBlc2xpbnRQYXRoID0gcGF0aC5qb2luKCcuLycsIGBub2RlX21vZHVsZXMvLmJpbi9lc2xpbnQke2NtZH1gKTtcbiAgICBmcy5hY2Nlc3NTeW5jKGVzbGludFBhdGgpO1xuICAgIGxvZ2dlci5kZWJ1ZyhgRXNsaW50IGluc3RhbGxlZCBsb2NhbGx5ICR7ZXNsaW50UGF0aH1gKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhlKTtcbiAgICB0cnkge1xuICAgICAgZXNsaW50UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmVudi5fLCBgLi4vZXNsaW50JHtjbWR9YCk7XG4gICAgICBmcy5hY2Nlc3NTeW5jKGVzbGludFBhdGgpO1xuICAgICAgbG9nZ2VyLmRlYnVnKGBFc2xpbnQgaW5zdGFsbGVkIGdsb2JhbGx5ICR7ZXNsaW50UGF0aH1gKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VzbGludCBuZWVkcyB0byBiZSBpbnN0YWxsZWQgZ2xvYmFsbHkgb3IgbG9jYWxseSBpbiBub2RlX21vZHVsZXMuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBlc2xpbnRQYXRoO1xufSkoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGVzbGludFBhdGgsXG4gIHBsYXRmb3JtLFxuICBpc1dpbmRvd3M6IHBsYXRmb3JtID09PSAnd2luMzInXG59O1xuXG5sb2dnZXIuZGVidWcoc2V0dGluZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXR0aW5ncztcbiJdfQ==