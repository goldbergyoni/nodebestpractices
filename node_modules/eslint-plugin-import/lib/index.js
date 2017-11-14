'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const rules = exports.rules = {
  'no-unresolved': require('./rules/no-unresolved'),
  'named': require('./rules/named'),
  'default': require('./rules/default'),
  'namespace': require('./rules/namespace'),
  'no-namespace': require('./rules/no-namespace'),
  'export': require('./rules/export'),
  'no-mutable-exports': require('./rules/no-mutable-exports'),
  'extensions': require('./rules/extensions'),
  'no-restricted-paths': require('./rules/no-restricted-paths'),
  'no-internal-modules': require('./rules/no-internal-modules'),

  'no-named-default': require('./rules/no-named-default'),
  'no-named-as-default': require('./rules/no-named-as-default'),
  'no-named-as-default-member': require('./rules/no-named-as-default-member'),
  'no-anonymous-default-export': require('./rules/no-anonymous-default-export'),

  'no-commonjs': require('./rules/no-commonjs'),
  'no-amd': require('./rules/no-amd'),
  'no-duplicates': require('./rules/no-duplicates'),
  'first': require('./rules/first'),
  'max-dependencies': require('./rules/max-dependencies'),
  'no-extraneous-dependencies': require('./rules/no-extraneous-dependencies'),
  'no-absolute-path': require('./rules/no-absolute-path'),
  'no-nodejs-modules': require('./rules/no-nodejs-modules'),
  'no-webpack-loader-syntax': require('./rules/no-webpack-loader-syntax'),
  'order': require('./rules/order'),
  'newline-after-import': require('./rules/newline-after-import'),
  'prefer-default-export': require('./rules/prefer-default-export'),
  'no-dynamic-require': require('./rules/no-dynamic-require'),
  'unambiguous': require('./rules/unambiguous'),
  'no-unassigned-import': require('./rules/no-unassigned-import'),

  // export
  'exports-last': require('./rules/exports-last'),

  // metadata-based
  'no-deprecated': require('./rules/no-deprecated'),

  // deprecated aliases to rules
  'imports-first': require('./rules/imports-first')
};

const configs = exports.configs = {
  'recommended': require('../config/recommended'),

  'errors': require('../config/errors'),
  'warnings': require('../config/warnings'),

  // shhhh... work in progress "secret" rules
  'stage-0': require('../config/stage-0'),

  // useful stuff for folks using various environments
  'react': require('../config/react'),
  'react-native': require('../config/react-native'),
  'electron': require('../config/electron')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwicmVxdWlyZSIsImNvbmZpZ3MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsd0JBQVE7QUFDbkIsbUJBQWlCQyxRQUFRLHVCQUFSLENBREU7QUFFbkIsV0FBU0EsUUFBUSxlQUFSLENBRlU7QUFHbkIsYUFBV0EsUUFBUSxpQkFBUixDQUhRO0FBSW5CLGVBQWFBLFFBQVEsbUJBQVIsQ0FKTTtBQUtuQixrQkFBZ0JBLFFBQVEsc0JBQVIsQ0FMRztBQU1uQixZQUFVQSxRQUFRLGdCQUFSLENBTlM7QUFPbkIsd0JBQXNCQSxRQUFRLDRCQUFSLENBUEg7QUFRbkIsZ0JBQWNBLFFBQVEsb0JBQVIsQ0FSSztBQVNuQix5QkFBdUJBLFFBQVEsNkJBQVIsQ0FUSjtBQVVuQix5QkFBdUJBLFFBQVEsNkJBQVIsQ0FWSjs7QUFZbkIsc0JBQW9CQSxRQUFRLDBCQUFSLENBWkQ7QUFhbkIseUJBQXVCQSxRQUFRLDZCQUFSLENBYko7QUFjbkIsZ0NBQThCQSxRQUFRLG9DQUFSLENBZFg7QUFlbkIsaUNBQStCQSxRQUFRLHFDQUFSLENBZlo7O0FBaUJuQixpQkFBZUEsUUFBUSxxQkFBUixDQWpCSTtBQWtCbkIsWUFBVUEsUUFBUSxnQkFBUixDQWxCUztBQW1CbkIsbUJBQWlCQSxRQUFRLHVCQUFSLENBbkJFO0FBb0JuQixXQUFTQSxRQUFRLGVBQVIsQ0FwQlU7QUFxQm5CLHNCQUFvQkEsUUFBUSwwQkFBUixDQXJCRDtBQXNCbkIsZ0NBQThCQSxRQUFRLG9DQUFSLENBdEJYO0FBdUJuQixzQkFBb0JBLFFBQVEsMEJBQVIsQ0F2QkQ7QUF3Qm5CLHVCQUFxQkEsUUFBUSwyQkFBUixDQXhCRjtBQXlCbkIsOEJBQTRCQSxRQUFRLGtDQUFSLENBekJUO0FBMEJuQixXQUFTQSxRQUFRLGVBQVIsQ0ExQlU7QUEyQm5CLDBCQUF3QkEsUUFBUSw4QkFBUixDQTNCTDtBQTRCbkIsMkJBQXlCQSxRQUFRLCtCQUFSLENBNUJOO0FBNkJuQix3QkFBc0JBLFFBQVEsNEJBQVIsQ0E3Qkg7QUE4Qm5CLGlCQUFlQSxRQUFRLHFCQUFSLENBOUJJO0FBK0JuQiwwQkFBd0JBLFFBQVEsOEJBQVIsQ0EvQkw7O0FBaUNuQjtBQUNBLGtCQUFnQkEsUUFBUSxzQkFBUixDQWxDRzs7QUFvQ25CO0FBQ0EsbUJBQWlCQSxRQUFRLHVCQUFSLENBckNFOztBQXVDbkI7QUFDQSxtQkFBaUJBLFFBQVEsdUJBQVI7QUF4Q0UsQ0FBZDs7QUEyQ0EsTUFBTUMsNEJBQVU7QUFDckIsaUJBQWVELFFBQVEsdUJBQVIsQ0FETTs7QUFHckIsWUFBVUEsUUFBUSxrQkFBUixDQUhXO0FBSXJCLGNBQVlBLFFBQVEsb0JBQVIsQ0FKUzs7QUFNckI7QUFDQSxhQUFXQSxRQUFRLG1CQUFSLENBUFU7O0FBU3JCO0FBQ0EsV0FBU0EsUUFBUSxpQkFBUixDQVZZO0FBV3JCLGtCQUFnQkEsUUFBUSx3QkFBUixDQVhLO0FBWXJCLGNBQVlBLFFBQVEsb0JBQVI7QUFaUyxDQUFoQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBydWxlcyA9IHtcbiAgJ25vLXVucmVzb2x2ZWQnOiByZXF1aXJlKCcuL3J1bGVzL25vLXVucmVzb2x2ZWQnKSxcbiAgJ25hbWVkJzogcmVxdWlyZSgnLi9ydWxlcy9uYW1lZCcpLFxuICAnZGVmYXVsdCc6IHJlcXVpcmUoJy4vcnVsZXMvZGVmYXVsdCcpLFxuICAnbmFtZXNwYWNlJzogcmVxdWlyZSgnLi9ydWxlcy9uYW1lc3BhY2UnKSxcbiAgJ25vLW5hbWVzcGFjZSc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbmFtZXNwYWNlJyksXG4gICdleHBvcnQnOiByZXF1aXJlKCcuL3J1bGVzL2V4cG9ydCcpLFxuICAnbm8tbXV0YWJsZS1leHBvcnRzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1tdXRhYmxlLWV4cG9ydHMnKSxcbiAgJ2V4dGVuc2lvbnMnOiByZXF1aXJlKCcuL3J1bGVzL2V4dGVuc2lvbnMnKSxcbiAgJ25vLXJlc3RyaWN0ZWQtcGF0aHMnOiByZXF1aXJlKCcuL3J1bGVzL25vLXJlc3RyaWN0ZWQtcGF0aHMnKSxcbiAgJ25vLWludGVybmFsLW1vZHVsZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLWludGVybmFsLW1vZHVsZXMnKSxcblxuICAnbm8tbmFtZWQtZGVmYXVsdCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbmFtZWQtZGVmYXVsdCcpLFxuICAnbm8tbmFtZWQtYXMtZGVmYXVsdCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbmFtZWQtYXMtZGVmYXVsdCcpLFxuICAnbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXInOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyJyksXG4gICduby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQnOiByZXF1aXJlKCcuL3J1bGVzL25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCcpLFxuXG4gICduby1jb21tb25qcyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tY29tbW9uanMnKSxcbiAgJ25vLWFtZCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tYW1kJyksXG4gICduby1kdXBsaWNhdGVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1kdXBsaWNhdGVzJyksXG4gICdmaXJzdCc6IHJlcXVpcmUoJy4vcnVsZXMvZmlyc3QnKSxcbiAgJ21heC1kZXBlbmRlbmNpZXMnOiByZXF1aXJlKCcuL3J1bGVzL21heC1kZXBlbmRlbmNpZXMnKSxcbiAgJ25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcycpLFxuICAnbm8tYWJzb2x1dGUtcGF0aCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tYWJzb2x1dGUtcGF0aCcpLFxuICAnbm8tbm9kZWpzLW1vZHVsZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5vZGVqcy1tb2R1bGVzJyksXG4gICduby13ZWJwYWNrLWxvYWRlci1zeW50YXgnOiByZXF1aXJlKCcuL3J1bGVzL25vLXdlYnBhY2stbG9hZGVyLXN5bnRheCcpLFxuICAnb3JkZXInOiByZXF1aXJlKCcuL3J1bGVzL29yZGVyJyksXG4gICduZXdsaW5lLWFmdGVyLWltcG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvbmV3bGluZS1hZnRlci1pbXBvcnQnKSxcbiAgJ3ByZWZlci1kZWZhdWx0LWV4cG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvcHJlZmVyLWRlZmF1bHQtZXhwb3J0JyksXG4gICduby1keW5hbWljLXJlcXVpcmUnOiByZXF1aXJlKCcuL3J1bGVzL25vLWR5bmFtaWMtcmVxdWlyZScpLFxuICAndW5hbWJpZ3VvdXMnOiByZXF1aXJlKCcuL3J1bGVzL3VuYW1iaWd1b3VzJyksXG4gICduby11bmFzc2lnbmVkLWltcG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tdW5hc3NpZ25lZC1pbXBvcnQnKSxcblxuICAvLyBleHBvcnRcbiAgJ2V4cG9ydHMtbGFzdCc6IHJlcXVpcmUoJy4vcnVsZXMvZXhwb3J0cy1sYXN0JyksXG5cbiAgLy8gbWV0YWRhdGEtYmFzZWRcbiAgJ25vLWRlcHJlY2F0ZWQnOiByZXF1aXJlKCcuL3J1bGVzL25vLWRlcHJlY2F0ZWQnKSxcblxuICAvLyBkZXByZWNhdGVkIGFsaWFzZXMgdG8gcnVsZXNcbiAgJ2ltcG9ydHMtZmlyc3QnOiByZXF1aXJlKCcuL3J1bGVzL2ltcG9ydHMtZmlyc3QnKSxcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3MgPSB7XG4gICdyZWNvbW1lbmRlZCc6IHJlcXVpcmUoJy4uL2NvbmZpZy9yZWNvbW1lbmRlZCcpLFxuXG4gICdlcnJvcnMnOiByZXF1aXJlKCcuLi9jb25maWcvZXJyb3JzJyksXG4gICd3YXJuaW5ncyc6IHJlcXVpcmUoJy4uL2NvbmZpZy93YXJuaW5ncycpLFxuXG4gIC8vIHNoaGhoLi4uIHdvcmsgaW4gcHJvZ3Jlc3MgXCJzZWNyZXRcIiBydWxlc1xuICAnc3RhZ2UtMCc6IHJlcXVpcmUoJy4uL2NvbmZpZy9zdGFnZS0wJyksXG5cbiAgLy8gdXNlZnVsIHN0dWZmIGZvciBmb2xrcyB1c2luZyB2YXJpb3VzIGVudmlyb25tZW50c1xuICAncmVhY3QnOiByZXF1aXJlKCcuLi9jb25maWcvcmVhY3QnKSxcbiAgJ3JlYWN0LW5hdGl2ZSc6IHJlcXVpcmUoJy4uL2NvbmZpZy9yZWFjdC1uYXRpdmUnKSxcbiAgJ2VsZWN0cm9uJzogcmVxdWlyZSgnLi4vY29uZmlnL2VsZWN0cm9uJyksXG59XG4iXX0=