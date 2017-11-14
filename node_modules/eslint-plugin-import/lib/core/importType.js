'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.isAbsolute = isAbsolute;
exports.isBuiltIn = isBuiltIn;
exports.default = resolveImportType;

var _lodash = require('lodash.cond');

var _lodash2 = _interopRequireDefault(_lodash);

var _builtinModules = require('builtin-modules');

var _builtinModules2 = _interopRequireDefault(_builtinModules);

var _path = require('path');

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constant(value) {
  return () => value;
}

function baseModule(name) {
  if (isScoped(name)) {
    var _name$split = name.split('/'),
        _name$split2 = _slicedToArray(_name$split, 2);

    const scope = _name$split2[0],
          pkg = _name$split2[1];

    return `${scope}/${pkg}`;
  }

  var _name$split3 = name.split('/'),
      _name$split4 = _slicedToArray(_name$split3, 1);

  const pkg = _name$split4[0];

  return pkg;
}

function isAbsolute(name) {
  return name.indexOf('/') === 0;
}

function isBuiltIn(name, settings) {
  const base = baseModule(name);
  const extras = settings && settings['import/core-modules'] || [];
  return _builtinModules2.default.indexOf(base) !== -1 || extras.indexOf(base) > -1;
}

function isExternalPath(path, name, settings) {
  const folders = settings && settings['import/external-module-folders'] || ['node_modules'];
  return !path || folders.some(folder => -1 < path.indexOf((0, _path.join)(folder, name)));
}

const externalModuleRegExp = /^\w/;
function isExternalModule(name, settings, path) {
  return externalModuleRegExp.test(name) && isExternalPath(path, name, settings);
}

const scopedRegExp = /^@[^/]+\/[^/]+/;
function isScoped(name) {
  return scopedRegExp.test(name);
}

function isInternalModule(name, settings, path) {
  return externalModuleRegExp.test(name) && !isExternalPath(path, name, settings);
}

function isRelativeToParent(name) {
  return name.indexOf('../') === 0;
}

const indexFiles = ['.', './', './index', './index.js'];
function isIndex(name) {
  return indexFiles.indexOf(name) !== -1;
}

function isRelativeToSibling(name) {
  return name.indexOf('./') === 0;
}

const typeTest = (0, _lodash2.default)([[isAbsolute, constant('absolute')], [isBuiltIn, constant('builtin')], [isExternalModule, constant('external')], [isScoped, constant('external')], [isInternalModule, constant('internal')], [isRelativeToParent, constant('parent')], [isIndex, constant('index')], [isRelativeToSibling, constant('sibling')], [constant(true), constant('unknown')]]);

function resolveImportType(name, context) {
  return typeTest(name, context.settings, (0, _resolve2.default)(name, context));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvaW1wb3J0VHlwZS5qcyJdLCJuYW1lcyI6WyJpc0Fic29sdXRlIiwiaXNCdWlsdEluIiwicmVzb2x2ZUltcG9ydFR5cGUiLCJjb25zdGFudCIsInZhbHVlIiwiYmFzZU1vZHVsZSIsIm5hbWUiLCJpc1Njb3BlZCIsInNwbGl0Iiwic2NvcGUiLCJwa2ciLCJpbmRleE9mIiwic2V0dGluZ3MiLCJiYXNlIiwiZXh0cmFzIiwiaXNFeHRlcm5hbFBhdGgiLCJwYXRoIiwiZm9sZGVycyIsInNvbWUiLCJmb2xkZXIiLCJleHRlcm5hbE1vZHVsZVJlZ0V4cCIsImlzRXh0ZXJuYWxNb2R1bGUiLCJ0ZXN0Iiwic2NvcGVkUmVnRXhwIiwiaXNJbnRlcm5hbE1vZHVsZSIsImlzUmVsYXRpdmVUb1BhcmVudCIsImluZGV4RmlsZXMiLCJpc0luZGV4IiwiaXNSZWxhdGl2ZVRvU2libGluZyIsInR5cGVUZXN0IiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFtQmdCQSxVLEdBQUFBLFU7UUFJQUMsUyxHQUFBQSxTO2tCQWtEUUMsaUI7O0FBekV4Qjs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQU8sTUFBTUEsS0FBYjtBQUNEOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLE1BQUlDLFNBQVNELElBQVQsQ0FBSixFQUFvQjtBQUFBLHNCQUNHQSxLQUFLRSxLQUFMLENBQVcsR0FBWCxDQURIO0FBQUE7O0FBQUEsVUFDWEMsS0FEVztBQUFBLFVBQ0pDLEdBREk7O0FBRWxCLFdBQVEsR0FBRUQsS0FBTSxJQUFHQyxHQUFJLEVBQXZCO0FBQ0Q7O0FBSnVCLHFCQUtWSixLQUFLRSxLQUFMLENBQVcsR0FBWCxDQUxVO0FBQUE7O0FBQUEsUUFLakJFLEdBTGlCOztBQU14QixTQUFPQSxHQUFQO0FBQ0Q7O0FBRU0sU0FBU1YsVUFBVCxDQUFvQk0sSUFBcEIs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OztBQVllLFNBQVNELGlCQUFULENBQTJCSSxJQUEzQixFQUFpQ3dCLE9BQWpDLEVBQTBDO0FBQ3ZELFNBQU9ELFNBQVN2QixJQUFULEVBQWV3QixRQUFRbEIsUUFBdkIsRUFBaUMsdUJBQVFOLElBQVIsRUFBY3dCLE9BQWQsQ0FBakMsQ0FBUDtBQUNEIiwiZmlsZSI6ImNvcmUvaW1wb3J0VHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25kIGZyb20gJ2xvZGFzaC5jb25kJ1xuaW1wb3J0IGJ1aWx0aW5Nb2R1bGVzIGZyb20gJ2J1aWx0aW4tbW9kdWxlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnXG5cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiAoKSA9PiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBiYXNlTW9kdWxlKG5hbWUpIHtcbiAgaWYgKGlzU2NvcGVkKG5hbWUpKSB7XG4gICAgY29uc3QgW3Njb3BlLCBwa2ddID0gbmFtZS5zcGxpdCgnLycpXG4gICAgcmV0dXJuIGAke3Njb3BlfS8ke3BrZ31gXG4gIH1cbiAgY29uc3QgW3BrZ10gPSBuYW1lLnNwbGl0KCcvJylcbiAgcmV0dXJuIHBrZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBYnNvbHV0ZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLmluZGV4T2YoJy8nKSA9PT0gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsdEluKG5hbWUsIHNldHRpbmdzKSB7XG4gIGNvbnN0IGJhc2UgPSBiYXNlTW9kdWxlKG5hbWUpXG4gIGNvbnN0IGV4dHJhcyA9IChzZXR0aW5ncyAmJiBzZXR0aW5nc1snaW1wb3J0L2NvcmUtbW9kdWxlcyddKSB8fCBbXVxuICByZXR1cm4gYnVpbHRpbk1vZHVsZXMuaW5kZXhPZihiYXNlKSAhPT0gLTEgfHwgZXh0cmFzLmluZGV4T2YoYmFzZSkgPiAtMVxufVxuXG5mdW5jdGlvbiBpc0V4dGVybmFsUGF0aChwYXRoLCBuYW1lLCBzZXR0aW5ncykge1xuICBjb25zdCBmb2xkZXJzID0gKHNldHRpbmdzICYmIHNldHRpbmdzWydpbXBvcnQvZXh0ZXJuYWwtbW9kdWxlLWZvbGRlcnMnXSkgfHwgWydub2RlX21vZHVsZXMnXVxuICByZXR1cm4gIXBhdGggfHwgZm9sZGVycy5zb21lKGZvbGRlciA9PiAtMSA8IHBhdGguaW5kZXhPZihqb2luKGZvbGRlciwgbmFtZSkpKVxufVxuXG5jb25zdCBleHRlcm5hbE1vZHVsZVJlZ0V4cCA9IC9eXFx3L1xuZnVuY3Rpb24gaXNFeHRlcm5hbE1vZHVsZShuYW1lLCBzZXR0aW5ncywgcGF0aCkge1xuICByZXR1cm4gZXh0ZXJuYWxNb2R1bGVSZWdFeHAudGVzdChuYW1lKSAmJiBpc0V4dGVybmFsUGF0aChwYXRoLCBuYW1lLCBzZXR0aW5ncylcbn1cblxuY29uc3Qgc2NvcGVkUmVnRXhwID0gL15AW14vXStcXC9bXi9dKy9cbmZ1bmN0aW9uIGlzU2NvcGVkKG5hbWUpIHtcbiAgcmV0dXJuIHNjb3BlZFJlZ0V4cC50ZXN0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJuYWxNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgpIHtcbiAgcmV0dXJuIGV4dGVybmFsTW9kdWxlUmVnRXhwLnRlc3QobmFtZSkgJiYgIWlzRXh0ZXJuYWxQYXRoKHBhdGgsIG5hbWUsIHNldHRpbmdzKVxufVxuXG5mdW5jdGlvbiBpc1JlbGF0aXZlVG9QYXJlbnQobmFtZSkge1xuICByZXR1cm4gbmFtZS5pbmRleE9mKCcuLi8nKSA9PT0gMFxufVxuXG5jb25zdCBpbmRleEZpbGVzID0gWycuJywgJy4vJywgJy4vaW5kZXgnLCAnLi9pbmRleC5qcyddXG5mdW5jdGlvbiBpc0luZGV4KG5hbWUpIHtcbiAgcmV0dXJuIGluZGV4RmlsZXMuaW5kZXhPZihuYW1lKSAhPT0gLTFcbn1cblxuZnVuY3Rpb24gaXNSZWxhdGl2ZVRvU2libGluZyhuYW1lKSB7XG4gIHJldHVybiBuYW1lLmluZGV4T2YoJy4vJykgPT09IDBcbn1cblxuY29uc3QgdHlwZVRlc3QgPSBjb25kKFtcbiAgW2lzQWJzb2x1dGUsIGNvbnN0YW50KCdhYnNvbHV0ZScpXSxcbiAgW2lzQnVpbHRJbiwgY29uc3RhbnQoJ2J1aWx0aW4nKV0sXG4gIFtpc0V4dGVybmFsTW9kdWxlLCBjb25zdGFudCgnZXh0ZXJuYWwnKV0sXG4gIFtpc1Njb3BlZCwgY29uc3RhbnQoJ2V4dGVybmFsJyldLFxuICBbaXNJbnRlcm5hbE1vZHVsZSwgY29uc3RhbnQoJ2ludGVybmFsJyldLFxuICBbaXNSZWxhdGl2ZVRvUGFyZW50LCBjb25zdGFudCgncGFyZW50JyldLFxuICBbaXNJbmRleCwgY29uc3RhbnQoJ2luZGV4JyldLFxuICBbaXNSZWxhdGl2ZVRvU2libGluZywgY29uc3RhbnQoJ3NpYmxpbmcnKV0sXG4gIFtjb25zdGFudCh0cnVlKSwgY29uc3RhbnQoJ3Vua25vd24nKV0sXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlSW1wb3J0VHlwZShuYW1lLCBjb250ZXh0KSB7XG4gIHJldHVybiB0eXBlVGVzdChuYW1lLCBjb250ZXh0LnNldHRpbmdzLCByZXNvbHZlKG5hbWUsIGNvbnRleHQpKVxufVxuIl19