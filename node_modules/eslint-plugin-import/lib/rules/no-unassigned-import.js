'use strict';

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function report(context, node) {
  context.report({
    node,
    message: 'Imported module should be assigned'
  });
}

function testIsAllow(globs, filename, source) {
  if (!Array.isArray(globs)) {
    return false; // default doesn't allow any patterns
  }

  let filePath;

  if (source[0] !== '.' && source[0] !== '/') {
    // a node module
    filePath = source;
  } else {
    filePath = _path2.default.resolve(_path2.default.dirname(filename), source); // get source absolute path
  }

  return globs.find(glob => (0, _minimatch2.default)(filePath, glob) || (0, _minimatch2.default)(filePath, _path2.default.join(process.cwd(), glob))) !== undefined;
}

function create(context) {
  const options = context.options[0] || {};
  const filename = context.getFilename();
  const isAllow = source => testIsAllow(options.allow, filename, source);

  return {
    ImportDeclaration(node) {
      if (node.specifiers.length === 0 && !isAllow(node.source.value)) {
        report(context, node);
      }
    },
    ExpressionStatement(node) {
      if (node.expression.type === 'CallExpression' && (0, _staticRequire2.default)(node.expression) && !isAllow(node.expression.arguments[0].value)) {
        report(context, node.expression);
      }
    }
  };
}

module.exports = {
  create,
  meta: {
    docs: {},
    schema: [{
      'type': 'object',
      'properties': {
        'devDependencies': { 'type': ['boolean', 'array'] },
        'optionalDependencies': { 'type': ['boolean', 'array'] },
        'peerDependencies': { 'type': ['boolean', 'array'] },
        'allow': {
          'type': 'array',
          'items': {
            'type': 'string'
          }
        }
      },
      'additionalProperties': false
    }]
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLXVuYXNzaWduZWQtaW1wb3J0LmpzIl0sIm5hbWVzIjpbInJlcG9ydCIsImNvbnRleHQiLCJub2RlIiwibWVzc2FnZSIsInRlc3RJc0FsbG93IiwiZ2xvYnMiLCJmaWxlbmFtZSIsInNvdXJjZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbGVQYXRoIiwicmVzb2x2ZSIsImRpcm5hbWUiLCJmaW5kIiwiZ2xvYiIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwidW5kZWZpbmVkIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZpbGVuYW1lIiwiaXNBbGxvdyIsImFsbG93IiwiSW1wb3J0RGVjbGFyYXRpb24iLCJzcGVjaWZpZXJzIiwibGVuZ3RoIiwidmFsdWUiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJzY2hlbWEiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxPQUFoQixFQUF5QkMsSUFBekIsRUFBK0I7QUFDN0JELFVBQVFELE1BQVIsQ0FBZTtBQUNiRSxRQURhO0FBRWJDLGFBQVM7QUFGSSxHQUFmO0FBSUQ7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLFFBQTVCLEVBQXNDQyxNQUF0QyxFQUE4QztBQUM1QyxNQUFJLENBQUNDLE1BQU1DLE9BQU4sQ0FBY0osS0FBZCxDQUFMLEVBQTJCO0FBQ3pCLFdBQU8sS0FBUCxDQUR5QixDQUNaO0FBQ2Q7O0FBRUQsTUFBSUssUUFBSjs7QUFFQSxNQUFJSCxPQUFPLENBQVAsTUFBYyxHQUFkLElBQXFCQSxPQUFPLENBQVAsTUFBYyxHQUF2QyxFQUE0QztBQUFFO0FBQzVDRyxlQUFXSCxNQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0xHLGVBQVcsZUFBS0MsT0FBTCxDQUFhLGVBQUtDLE9BQUwsQ0FBYU4sUUFBYixDQUFiLEVBQXFDQyxNQUFyQyxDQUFYLENBREssQ0FDbUQ7QUFDekQ7O0FBRUQsU0FBT0YsTUFBTVEsSUFBTixDQUFXQyxRQUNoQix5QkFBVUosUUFBVixFQUFvQkksSUFBcEIsS0FDQSx5QkFBVUosUUFBVixFQUFvQixlQUFLSyxJQUFMLENBQVVDLFFBQVFDLEdBQVIsRUFBVixFQUF5QkgsSUFBekIsQ0FBcEIsQ0FGSyxNQUdBSSxTQUhQO0FBSUQ7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQmxCLE9BQWhCLEVBQXlCO0FBQ3ZCLFFBQU1tQixVQUFVbkIsUUFBUW1CLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBc0IsRUFBdEM7QUFDQSxRQUFNZCxXQUFXTCxRQUFRb0IsV0FBUixFQUFqQjtBQUNBLFFBQU1DLFVBQVVmLFVBQVVILFlBQVlnQixRQUFRRyxLQUFwQixFQUEyQmpCLFFBQTNCLEVBQXFDQyxNQUFyQyxDQUExQjs7QUFFQSxTQUFPO0FBQ0xpQixzQkFBa0J0QixJQUFsQixFQUF3QjtBQUN0QixVQUFJQSxLQUFLdUIsVUFBTCxDQUFnQkMsTUFBaEIsS0FBMkIsQ0FBM0IsSUFBZ0MsQ0FBQ0osUUFBUXBCLEtBQUtLLE1BQUwsQ0FBWW9CLEtBQXBCLENBQXJDLEVBQWlFO0FBQy9EM0IsZUFBT0MsT0FBUCxFQUFnQkMsSUFBaEI7QUFDRDtBQUNGLEtBTEk7QUFNTDBCLHdCQUFvQjFCLElBQXBCLEVBQTBCO0FBQ3hCLFVBQUlBLEtBQUsyQixVQUFMLENBQWdCQyxJQUFoQixLQUF5QixnQkFBekIsSUFDRiw2QkFBZ0I1QixLQUFLMkIsVUFBckIsQ0FERSxJQUVGLENBQUNQLFFBQVFwQixLQUFLMkIsVUFBTCxDQUFnQkUsU0FBaEIsQ0FBMEIsQ0FBMUIsRUFBNkJKLEtBQXJDLENBRkgsRUFFZ0Q7QUFDOUMzQixlQUFPQyxPQUFQLEVBQWdCQyxLQUFLMkIsVUFBckI7QUFDRDtBQUNGO0FBWkksR0FBUDtBQWNEOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZkLFFBRGU7QUFFZmUsUUFBTTtBQUNKQyxVQUFNLEVBREY7QUFFSkMsWUFBUSxDQUNOO0FBQ0UsY0FBUSxRQURWO0FBRUUsb0JBQWM7QUFDWiwyQkFBbUIsRUFBRSxRQUFRLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBVixFQURQO0FBRVosZ0NBQXdCLEVBQUUsUUFBUSxDQUFDLFNBQUQsRUFBWSxPQUFaLENBQVYsRUFGWjtBQUdaLDRCQUFvQixFQUFFLFFBQVEsQ0FBQyxTQUFELEVBQVksT0FBWixDQUFWLEVBSFI7QUFJWixpQkFBUztBQUNQLGtCQUFRLE9BREQ7QUFFUCxtQkFBUztBQUNQLG9CQUFRO0FBREQ7QUFGRjtBQUpHLE9BRmhCO0FBYUUsOEJBQXdCO0FBYjFCLEtBRE07QUFGSjtBQUZTLENBQWpCIiwiZmlsZSI6InJ1bGVzL25vLXVuYXNzaWduZWQtaW1wb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzU3RhdGljUmVxdWlyZSBmcm9tICcuLi9jb3JlL3N0YXRpY1JlcXVpcmUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnXG5cbmZ1bmN0aW9uIHJlcG9ydChjb250ZXh0LCBub2RlKSB7XG4gIGNvbnRleHQucmVwb3J0KHtcbiAgICBub2RlLFxuICAgIG1lc3NhZ2U6ICdJbXBvcnRlZCBtb2R1bGUgc2hvdWxkIGJlIGFzc2lnbmVkJyxcbiAgfSlcbn1cblxuZnVuY3Rpb24gdGVzdElzQWxsb3coZ2xvYnMsIGZpbGVuYW1lLCBzb3VyY2UpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGdsb2JzKSkge1xuICAgIHJldHVybiBmYWxzZSAvLyBkZWZhdWx0IGRvZXNuJ3QgYWxsb3cgYW55IHBhdHRlcm5zXG4gIH1cblxuICBsZXQgZmlsZVBhdGhcblxuICBpZiAoc291cmNlWzBdICE9PSAnLicgJiYgc291cmNlWzBdICE9PSAnLycpIHsgLy8gYSBub2RlIG1vZHVsZVxuICAgIGZpbGVQYXRoID0gc291cmNlXG4gIH0gZWxzZSB7XG4gICAgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKGZpbGVuYW1lKSwgc291cmNlKSAvLyBnZXQgc291cmNlIGFic29sdXRlIHBhdGhcbiAgfVxuXG4gIHJldHVybiBnbG9icy5maW5kKGdsb2IgPT4gKFxuICAgIG1pbmltYXRjaChmaWxlUGF0aCwgZ2xvYikgfHxcbiAgICBtaW5pbWF0Y2goZmlsZVBhdGgsIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBnbG9iKSlcbiAgKSkgIT09IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBjcmVhdGUoY29udGV4dCkge1xuICBjb25zdCBvcHRpb25zID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9XG4gIGNvbnN0IGZpbGVuYW1lID0gY29udGV4dC5nZXRGaWxlbmFtZSgpXG4gIGNvbnN0IGlzQWxsb3cgPSBzb3VyY2UgPT4gdGVzdElzQWxsb3cob3B0aW9ucy5hbGxvdywgZmlsZW5hbWUsIHNvdXJjZSlcblxuICByZXR1cm4ge1xuICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnNwZWNpZmllcnMubGVuZ3RoID09PSAwICYmICFpc0FsbG93KG5vZGUuc291cmNlLnZhbHVlKSkge1xuICAgICAgICByZXBvcnQoY29udGV4dCwgbm9kZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSkge1xuICAgICAgaWYgKG5vZGUuZXhwcmVzc2lvbi50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmXG4gICAgICAgIGlzU3RhdGljUmVxdWlyZShub2RlLmV4cHJlc3Npb24pICYmXG4gICAgICAgICFpc0FsbG93KG5vZGUuZXhwcmVzc2lvbi5hcmd1bWVudHNbMF0udmFsdWUpKSB7XG4gICAgICAgIHJlcG9ydChjb250ZXh0LCBub2RlLmV4cHJlc3Npb24pXG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlLFxuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgICd0eXBlJzogJ29iamVjdCcsXG4gICAgICAgICdwcm9wZXJ0aWVzJzoge1xuICAgICAgICAgICdkZXZEZXBlbmRlbmNpZXMnOiB7ICd0eXBlJzogWydib29sZWFuJywgJ2FycmF5J10gfSxcbiAgICAgICAgICAnb3B0aW9uYWxEZXBlbmRlbmNpZXMnOiB7ICd0eXBlJzogWydib29sZWFuJywgJ2FycmF5J10gfSxcbiAgICAgICAgICAncGVlckRlcGVuZGVuY2llcyc6IHsgJ3R5cGUnOiBbJ2Jvb2xlYW4nLCAnYXJyYXknXSB9LFxuICAgICAgICAgICdhbGxvdyc6IHtcbiAgICAgICAgICAgICd0eXBlJzogJ2FycmF5JyxcbiAgICAgICAgICAgICdpdGVtcyc6IHtcbiAgICAgICAgICAgICAgJ3R5cGUnOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZGl0aW9uYWxQcm9wZXJ0aWVzJzogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG4iXX0=