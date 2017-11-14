'use strict';

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Rule to enforce new line after import not followed by another import.
 * @author Radek Benkel
 */

const log = (0, _debug2.default)('eslint-plugin-import:rules:newline-after-import');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function containsNodeOrEqual(outerNode, innerNode) {
  return outerNode.range[0] <= innerNode.range[0] && outerNode.range[1] >= innerNode.range[1];
}

function getScopeBody(scope) {
  if (scope.block.type === 'SwitchStatement') {
    log('SwitchStatement scopes not supported');
    return null;
  }

  const body = scope.block.body;

  if (body && body.type === 'BlockStatement') {
    return body.body;
  }

  return body;
}

function findNodeIndexInScopeBody(body, nodeToFind) {
  return body.findIndex(node => containsNodeOrEqual(node, nodeToFind));
}

function getLineDifference(node, nextNode) {
  return nextNode.loc.start.line - node.loc.end.line;
}

function isClassWithDecorator(node) {
  return node.type === 'ClassDeclaration' && node.decorators && node.decorators.length;
}

module.exports = {
  meta: {
    docs: {},
    schema: [{
      'type': 'object',
      'properties': {
        'count': {
          'type': 'integer',
          'minimum': 1
        }
      },
      'additionalProperties': false
    }],
    fixable: 'whitespace'
  },
  create: function (context) {
    let level = 0;
    const requireCalls = [];

    function checkForNewLine(node, nextNode, type) {
      if (isClassWithDecorator(nextNode)) {
        nextNode = nextNode.decorators[0];
      }

      const options = context.options[0] || { count: 1 };
      const lineDifference = getLineDifference(node, nextNode);
      const EXPECTED_LINE_DIFFERENCE = options.count + 1;

      if (lineDifference < EXPECTED_LINE_DIFFERENCE) {
        let column = node.loc.start.column;

        if (node.loc.start.line !== node.loc.end.line) {
          column = 0;
        }

        context.report({
          loc: {
            line: node.loc.end.line,
            column
          },
          message: `Expected empty line after ${type} statement not followed by another ${type}.`,
          fix: fixer => fixer.insertTextAfter(node, '\n'.repeat(EXPECTED_LINE_DIFFERENCE - lineDifference))
        });
      }
    }

    function incrementLevel() {
      level++;
    }
    function decrementLevel() {
      level--;
    }

    return {
      ImportDeclaration: function (node) {
        const parent = node.parent;

        const nodePosition = parent.body.indexOf(node);
        const nextNode = parent.body[nodePosition + 1];

        if (nextNode && nextNode.type !== 'ImportDeclaration') {
          checkForNewLine(node, nextNode, 'import');
        }
      },
      CallExpression: function (node) {
        if ((0, _staticRequire2.default)(node) && level === 0) {
          requireCalls.push(node);
        }
      },
      'Program:exit': function () {
        log('exit processing for', context.getFilename());
        const scopeBody = getScopeBody(context.getScope());
        log('got scope:', scopeBody);

        requireCalls.forEach(function (node, index) {
          const nodePosition = findNodeIndexInScopeBody(scopeBody, node);
          log('node position in scope:', nodePosition);

          const statementWithRequireCall = scopeBody[nodePosition];
          const nextStatement = scopeBody[nodePosition + 1];
          const nextRequireCall = requireCalls[index + 1];

          if (nextRequireCall && containsNodeOrEqual(statementWithRequireCall, nextRequireCall)) {
            return;
          }

          if (nextStatement && (!nextRequireCall || !containsNodeOrEqual(nextStatement, nextRequireCall))) {

            checkForNewLine(statementWithRequireCall, nextStatement, 'require');
          }
        });
      },
      FunctionDeclaration: incrementLevel,
      FunctionExpression: incrementLevel,
      ArrowFunctionExpression: incrementLevel,
      BlockStatement: incrementLevel,
      ObjectExpression: incrementLevel,
      Decorator: incrementLevel,
      'FunctionDeclaration:exit': decrementLevel,
      'FunctionExpression:exit': decrementLevel,
      'ArrowFunctionExpression:exit': decrementLevel,
      'BlockStatement:exit': decrementLevel,
      'ObjectExpression:exit': decrementLevel,
      'Decorator:exit': decrementLevel
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25ld2xpbmUtYWZ0ZXItaW1wb3J0LmpzIl0sIm5hbWVzIjpbImxvZyIsImNvbnRhaW5zTm9kZU9yRXF1YWwiLCJvdXRlck5vZGUiLCJpbm5lck5vZGUiLCJyYW5nZSIsImdldFNjb3BlQm9keSIsInNjb3BlIiwiYmxvY2siLCJ0eXBlIiwiYm9keSIsImZpbmROb2RlSW5kZXhJblNjb3BlQm9keSIsIm5vZGVUb0ZpbmQiLCJmaW5kSW5kZXgiLCJub2RlIiwiZ2V0TGluZURpZmZlcmVuY2UiLCJuZXh0Tm9kZSIsImxvYyIsInN0YXJ0IiwibGluZSIsImVuZCIsImlzQ2xhc3NXaXRoRGVjb3JhdG9yIiwiZGVjb3JhdG9ycyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsInNjaGVtYSIsImZpeGFibGUiLCJjcmVhdGUiLCJjb250ZXh0IiwibGV2ZWwiLCJyZXF1aXJlQ2FsbHMiLCJjaGVja0Zvck5ld0xpbmUiLCJvcHRpb25zIiwiY291bnQiLCJsaW5lRGlmZmVyZW5jZSIsIkVYUEVDVEVEX0xJTkVfRElGRkVSRU5DRSIsImNvbHVtbiIsInJlcG9ydCIsIm1lc3NhZ2UiLCJmaXgiLCJmaXhlciIsImluc2VydFRleHRBZnRlciIsInJlcGVhdCIsImluY3JlbWVudExldmVsIiwiZGVjcmVtZW50TGV2ZWwiLCJJbXBvcnREZWNsYXJhdGlvbiIsInBhcmVudCIsIm5vZGVQb3NpdGlvbiIsImluZGV4T2YiLCJDYWxsRXhwcmVzc2lvbiIsInB1c2giLCJnZXRGaWxlbmFtZSIsInNjb3BlQm9keSIsImdldFNjb3BlIiwiZm9yRWFjaCIsImluZGV4Iiwic3RhdGVtZW50V2l0aFJlcXVpcmVDYWxsIiwibmV4dFN0YXRlbWVudCIsIm5leHRSZXF1aXJlQ2FsbCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJGdW5jdGlvbkV4cHJlc3Npb24iLCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsIkJsb2NrU3RhdGVtZW50IiwiT2JqZWN0RXhwcmVzc2lvbiIsIkRlY29yYXRvciJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7OztBQUVBOzs7Ozs7QUFQQTs7Ozs7QUFRQSxNQUFNQSxNQUFNLHFCQUFNLGlEQUFOLENBQVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLG1CQUFULENBQTZCQyxTQUE3QixFQUF3Q0MsU0FBeEMsRUFBbUQ7QUFDL0MsU0FBT0QsVUFBVUUsS0FBVixDQUFnQixDQUFoQixLQUFzQkQsVUFBVUMsS0FBVixDQUFnQixDQUFoQixDQUF0QixJQUE0Q0YsVUFBVUUsS0FBVixDQUFnQixDQUFoQixLQUFzQkQsVUFBVUMsS0FBVixDQUFnQixDQUFoQixDQUF6RTtBQUNIOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCLE1BQUlBLE1BQU1DLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixpQkFBekIsRUFBNEM7QUFDMUNSLFFBQUksc0NBQUo7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFKd0IsUUFNakJTLElBTmlCLEdBTVJILE1BQU1DLEtBTkUsQ0FNakJFLElBTmlCOztBQU96QixNQUFJQSxRQUFRQSxLQUFLRCxJQUFMLEtBQWMsZ0JBQTFCLEVBQTRDO0FBQ3hDLFdBQU9DLEtBQUtBLElBQVo7QUFDSDs7QUFFRCxTQUFPQSxJQUFQO0FBQ0g7O0FBRUQsU0FBU0Msd0JBQVQsQ0FBa0NELElBQWxDLEVBQXdDRSxVQUF4QyxFQUFvRDtBQUNoRCxTQUFPRixLQUFLRyxTQUFMLENBQWdCQyxJQUFELElBQVVaLG9CQUFvQlksSUFBcEIsRUFBMEJGLFVBQTFCLENBQXpCLENBQVA7QUFDSDs7QUFFRCxTQUFTRyxpQkFBVCxDQUEyQkQsSUFBM0IsRUFBaUNFLFFBQWpDLEVBQTJDO0FBQ3pDLFNBQU9BLFNBQVNDLEdBQVQsQ0FBYUMsS0FBYixDQUFtQkMsSUFBbkIsR0FBMEJMLEtBQUtHLEdBQUwsQ0FBU0csR0FBVCxDQUFhRCxJQUE5QztBQUNEOztBQUVELFNBQVNFLG9CQUFULENBQThCUCxJQUE5QixFQUFvQztBQUNsQyxTQUFPQSxLQUFLTCxJQUFMLEtBQWMsa0JBQWQsSUFBb0NLLEtBQUtRLFVBQXpDLElBQXVEUixLQUFLUSxVQUFMLENBQWdCQyxNQUE5RTtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxFQURGO0FBRUpDLFlBQVEsQ0FDTjtBQUNFLGNBQVEsUUFEVjtBQUVFLG9CQUFjO0FBQ1osaUJBQVM7QUFDUCxrQkFBUSxTQUREO0FBRVAscUJBQVc7QUFGSjtBQURHLE9BRmhCO0FBUUUsOEJBQXdCO0FBUjFCLEtBRE0sQ0FGSjtBQWNKQyxhQUFTO0FBZEwsR0FEUztBQWlCZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pCLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFVBQU1DLGVBQWUsRUFBckI7O0FBRUEsYUFBU0MsZUFBVCxDQUF5QnBCLElBQXpCLEVBQStCRSxRQUEvQixFQUF5Q1AsSUFBekMsRUFBK0M7QUFDN0MsVUFBSVkscUJBQXFCTCxRQUFyQixDQUFKLEVBQW9DO0FBQ2xDQSxtQkFBV0EsU0FBU00sVUFBVCxDQUFvQixDQUFwQixDQUFYO0FBQ0Q7O0FBRUQsWUFBTWEsVUFBVUosUUFBUUksT0FBUixDQUFnQixDQUFoQixLQUFzQixFQUFFQyxPQUFPLENBQVQsRUFBdEM7QUFDQSxZQUFNQyxpQkFBaUJ0QixrQkFBa0JELElBQWxCLEVBQXdCRSxRQUF4QixDQUF2QjtBQUNBLFlBQU1zQiwyQkFBMkJILFFBQVFDLEtBQVIsR0FBZ0IsQ0FBakQ7O0FBRUEsVUFBSUMsaUJBQWlCQyx3QkFBckIsRUFBK0M7QUFDN0MsWUFBSUMsU0FBU3pCLEtBQUtHLEdBQUwsQ0FBU0MsS0FBVCxDQUFlcUIsTUFBNUI7O0FBRUEsWUFBSXpCLEtBQUtHLEdBQUwsQ0FBU0MsS0FBVCxDQUFlQyxJQUFmLEtBQXdCTCxLQUFLRyxHQUFMLENBQVNHLEdBQVQsQ0FBYUQsSUFBekMsRUFBK0M7QUFDN0NvQixtQkFBUyxDQUFUO0FBQ0Q7O0FBRURSLGdCQUFRUyxNQUFSLENBQWU7QUFDYnZCLGVBQUs7QUFDSEUsa0JBQU1MLEtBQUtHLEdBQUwsQ0FBU0csR0FBVCxDQUFhRCxJQURoQjtBQUVIb0I7QUFGRyxXQURRO0FBS2JFLG1CQUFVLDZCQUE0QmhDLElBQUssc0NBQXFDQSxJQUFLLEdBTHhFO0FBTWJpQyxlQUFLQyxTQUFTQSxNQUFNQyxlQUFOLENBQ1o5QixJQURZLEVBRVosS0FBSytCLE1BQUwsQ0FBWVAsMkJBQTJCRCxjQUF2QyxDQUZZO0FBTkQsU0FBZjtBQVdEO0FBQ0Y7O0FBRUQsYUFBU1MsY0FBVCxHQUEwQjtBQUN4QmQ7QUFDRDtBQUNELGFBQVNlLGNBQVQsR0FBMEI7QUFDeEJmO0FBQ0Q7O0FBRUQsV0FBTztBQUNMZ0IseUJBQW1CLFVBQVVsQyxJQUFWLEVBQWdCO0FBQUEsY0FDekJtQyxNQUR5QixHQUNkbkMsSUFEYyxDQUN6Qm1DLE1BRHlCOztBQUVqQyxjQUFNQyxlQUFlRCxPQUFPdkMsSUFBUCxDQUFZeUMsT0FBWixDQUFvQnJDLElBQXBCLENBQXJCO0FBQ0EsY0FBTUUsV0FBV2lDLE9BQU92QyxJQUFQLENBQVl3QyxlQUFlLENBQTNCLENBQWpCOztBQUVBLFlBQUlsQyxZQUFZQSxTQUFTUCxJQUFULEtBQWtCLG1CQUFsQyxFQUF1RDtBQUNyRHlCLDBCQUFnQnBCLElBQWhCLEVBQXNCRSxRQUF0QixFQUFnQyxRQUFoQztBQUNEO0FBQ0YsT0FUSTtBQVVMb0Msc0JBQWdCLFVBQVN0QyxJQUFULEVBQWU7QUFDN0IsWUFBSSw2QkFBZ0JBLElBQWhCLEtBQXlCa0IsVUFBVSxDQUF2QyxFQUEwQztBQUN4Q0MsdUJBQWFvQixJQUFiLENBQWtCdkMsSUFBbEI7QUFDRDtBQUNGLE9BZEk7QUFlTCxzQkFBZ0IsWUFBWTtBQUMxQmIsWUFBSSxxQkFBSixFQUEyQjhCLFFBQVF1QixXQUFSLEVBQTNCO0FBQ0EsY0FBTUMsWUFBWWpELGFBQWF5QixRQUFReUIsUUFBUixFQUFiLENBQWxCO0FBQ0F2RCxZQUFJLFlBQUosRUFBa0JzRCxTQUFsQjs7QUFFQXRCLHFCQUFhd0IsT0FBYixDQUFxQixVQUFVM0MsSUFBVixFQUFnQjRDLEtBQWhCLEVBQXVCO0FBQzFDLGdCQUFNUixlQUFldkMseUJBQXlCNEMsU0FBekIsRUFBb0N6QyxJQUFwQyxDQUFyQjtBQUNBYixjQUFJLHlCQUFKLEVBQStCaUQsWUFBL0I7O0FBRUEsZ0JBQU1TLDJCQUEyQkosVUFBVUwsWUFBVixDQUFqQztBQUNBLGdCQUFNVSxnQkFBZ0JMLFVBQVVMLGVBQWUsQ0FBekIsQ0FBdEI7QUFDQSxnQkFBTVcsa0JBQWtCNUIsYUFBYXlCLFFBQVEsQ0FBckIsQ0FBeEI7O0FBRUEsY0FBSUcsbUJBQW1CM0Qsb0JBQW9CeUQsd0JBQXBCLEVBQThDRSxlQUE5QyxDQUF2QixFQUF1RjtBQUNyRjtBQUNEOztBQUVELGNBQUlELGtCQUNBLENBQUNDLGVBQUQsSUFBb0IsQ0FBQzNELG9CQUFvQjBELGFBQXBCLEVBQW1DQyxlQUFuQyxDQURyQixDQUFKLEVBQytFOztBQUU3RTNCLDRCQUFnQnlCLHdCQUFoQixFQUEwQ0MsYUFBMUMsRUFBeUQsU0FBekQ7QUFDRDtBQUNGLFNBakJEO0FBa0JELE9BdENJO0FBdUNMRSwyQkFBcUJoQixjQXZDaEI7QUF3Q0xpQiwwQkFBb0JqQixjQXhDZjtBQXlDTGtCLCtCQUF5QmxCLGNBekNwQjtBQTBDTG1CLHNCQUFnQm5CLGNBMUNYO0FBMkNMb0Isd0JBQWtCcEIsY0EzQ2I7QUE0Q0xxQixpQkFBV3JCLGNBNUNOO0FBNkNMLGtDQUE0QkMsY0E3Q3ZCO0FBOENMLGlDQUEyQkEsY0E5Q3RCO0FBK0NMLHNDQUFnQ0EsY0EvQzNCO0FBZ0RMLDZCQUF1QkEsY0FoRGxCO0FBaURMLCtCQUF5QkEsY0FqRHBCO0FBa0RMLHdCQUFrQkE7QUFsRGIsS0FBUDtBQW9ERDtBQTlHYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uZXdsaW5lLWFmdGVyLWltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBSdWxlIHRvIGVuZm9yY2UgbmV3IGxpbmUgYWZ0ZXIgaW1wb3J0IG5vdCBmb2xsb3dlZCBieSBhbm90aGVyIGltcG9ydC5cbiAqIEBhdXRob3IgUmFkZWsgQmVua2VsXG4gKi9cblxuaW1wb3J0IGlzU3RhdGljUmVxdWlyZSBmcm9tICcuLi9jb3JlL3N0YXRpY1JlcXVpcmUnXG5cbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1ZydcbmNvbnN0IGxvZyA9IGRlYnVnKCdlc2xpbnQtcGx1Z2luLWltcG9ydDpydWxlczpuZXdsaW5lLWFmdGVyLWltcG9ydCcpXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSdWxlIERlZmluaXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNvbnRhaW5zTm9kZU9yRXF1YWwob3V0ZXJOb2RlLCBpbm5lck5vZGUpIHtcbiAgICByZXR1cm4gb3V0ZXJOb2RlLnJhbmdlWzBdIDw9IGlubmVyTm9kZS5yYW5nZVswXSAmJiBvdXRlck5vZGUucmFuZ2VbMV0gPj0gaW5uZXJOb2RlLnJhbmdlWzFdXG59XG5cbmZ1bmN0aW9uIGdldFNjb3BlQm9keShzY29wZSkge1xuICAgIGlmIChzY29wZS5ibG9jay50eXBlID09PSAnU3dpdGNoU3RhdGVtZW50Jykge1xuICAgICAgbG9nKCdTd2l0Y2hTdGF0ZW1lbnQgc2NvcGVzIG5vdCBzdXBwb3J0ZWQnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IGJvZHkgfSA9IHNjb3BlLmJsb2NrXG4gICAgaWYgKGJvZHkgJiYgYm9keS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG4gICAgICAgIHJldHVybiBib2R5LmJvZHlcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keVxufVxuXG5mdW5jdGlvbiBmaW5kTm9kZUluZGV4SW5TY29wZUJvZHkoYm9keSwgbm9kZVRvRmluZCkge1xuICAgIHJldHVybiBib2R5LmZpbmRJbmRleCgobm9kZSkgPT4gY29udGFpbnNOb2RlT3JFcXVhbChub2RlLCBub2RlVG9GaW5kKSlcbn1cblxuZnVuY3Rpb24gZ2V0TGluZURpZmZlcmVuY2Uobm9kZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIG5leHROb2RlLmxvYy5zdGFydC5saW5lIC0gbm9kZS5sb2MuZW5kLmxpbmVcbn1cblxuZnVuY3Rpb24gaXNDbGFzc1dpdGhEZWNvcmF0b3Iobm9kZSkge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnQ2xhc3NEZWNsYXJhdGlvbicgJiYgbm9kZS5kZWNvcmF0b3JzICYmIG5vZGUuZGVjb3JhdG9ycy5sZW5ndGhcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAnb2JqZWN0JyxcbiAgICAgICAgJ3Byb3BlcnRpZXMnOiB7XG4gICAgICAgICAgJ2NvdW50Jzoge1xuICAgICAgICAgICAgJ3R5cGUnOiAnaW50ZWdlcicsXG4gICAgICAgICAgICAnbWluaW11bSc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZGl0aW9uYWxQcm9wZXJ0aWVzJzogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZml4YWJsZTogJ3doaXRlc3BhY2UnLFxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgbGV0IGxldmVsID0gMFxuICAgIGNvbnN0IHJlcXVpcmVDYWxscyA9IFtdXG5cbiAgICBmdW5jdGlvbiBjaGVja0Zvck5ld0xpbmUobm9kZSwgbmV4dE5vZGUsIHR5cGUpIHtcbiAgICAgIGlmIChpc0NsYXNzV2l0aERlY29yYXRvcihuZXh0Tm9kZSkpIHtcbiAgICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5kZWNvcmF0b3JzWzBdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwgeyBjb3VudDogMSB9XG4gICAgICBjb25zdCBsaW5lRGlmZmVyZW5jZSA9IGdldExpbmVEaWZmZXJlbmNlKG5vZGUsIG5leHROb2RlKVxuICAgICAgY29uc3QgRVhQRUNURURfTElORV9ESUZGRVJFTkNFID0gb3B0aW9ucy5jb3VudCArIDFcblxuICAgICAgaWYgKGxpbmVEaWZmZXJlbmNlIDwgRVhQRUNURURfTElORV9ESUZGRVJFTkNFKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBub2RlLmxvYy5zdGFydC5jb2x1bW5cblxuICAgICAgICBpZiAobm9kZS5sb2Muc3RhcnQubGluZSAhPT0gbm9kZS5sb2MuZW5kLmxpbmUpIHtcbiAgICAgICAgICBjb2x1bW4gPSAwXG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbG9jOiB7XG4gICAgICAgICAgICBsaW5lOiBub2RlLmxvYy5lbmQubGluZSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IGBFeHBlY3RlZCBlbXB0eSBsaW5lIGFmdGVyICR7dHlwZX0gc3RhdGVtZW50IG5vdCBmb2xsb3dlZCBieSBhbm90aGVyICR7dHlwZX0uYCxcbiAgICAgICAgICBmaXg6IGZpeGVyID0+IGZpeGVyLmluc2VydFRleHRBZnRlcihcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAnXFxuJy5yZXBlYXQoRVhQRUNURURfTElORV9ESUZGRVJFTkNFIC0gbGluZURpZmZlcmVuY2UpXG4gICAgICAgICAgKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRMZXZlbCgpIHtcbiAgICAgIGxldmVsKytcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVjcmVtZW50TGV2ZWwoKSB7XG4gICAgICBsZXZlbC0tXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBjb25zdCB7IHBhcmVudCB9ID0gbm9kZVxuICAgICAgICBjb25zdCBub2RlUG9zaXRpb24gPSBwYXJlbnQuYm9keS5pbmRleE9mKG5vZGUpXG4gICAgICAgIGNvbnN0IG5leHROb2RlID0gcGFyZW50LmJvZHlbbm9kZVBvc2l0aW9uICsgMV1cblxuICAgICAgICBpZiAobmV4dE5vZGUgJiYgbmV4dE5vZGUudHlwZSAhPT0gJ0ltcG9ydERlY2xhcmF0aW9uJykge1xuICAgICAgICAgIGNoZWNrRm9yTmV3TGluZShub2RlLCBuZXh0Tm9kZSwgJ2ltcG9ydCcpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDYWxsRXhwcmVzc2lvbjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBpZiAoaXNTdGF0aWNSZXF1aXJlKG5vZGUpICYmIGxldmVsID09PSAwKSB7XG4gICAgICAgICAgcmVxdWlyZUNhbGxzLnB1c2gobm9kZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdQcm9ncmFtOmV4aXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvZygnZXhpdCBwcm9jZXNzaW5nIGZvcicsIGNvbnRleHQuZ2V0RmlsZW5hbWUoKSlcbiAgICAgICAgY29uc3Qgc2NvcGVCb2R5ID0gZ2V0U2NvcGVCb2R5KGNvbnRleHQuZ2V0U2NvcGUoKSlcbiAgICAgICAgbG9nKCdnb3Qgc2NvcGU6Jywgc2NvcGVCb2R5KVxuXG4gICAgICAgIHJlcXVpcmVDYWxscy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xuICAgICAgICAgIGNvbnN0IG5vZGVQb3NpdGlvbiA9IGZpbmROb2RlSW5kZXhJblNjb3BlQm9keShzY29wZUJvZHksIG5vZGUpXG4gICAgICAgICAgbG9nKCdub2RlIHBvc2l0aW9uIGluIHNjb3BlOicsIG5vZGVQb3NpdGlvbilcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFdpdGhSZXF1aXJlQ2FsbCA9IHNjb3BlQm9keVtub2RlUG9zaXRpb25dXG4gICAgICAgICAgY29uc3QgbmV4dFN0YXRlbWVudCA9IHNjb3BlQm9keVtub2RlUG9zaXRpb24gKyAxXVxuICAgICAgICAgIGNvbnN0IG5leHRSZXF1aXJlQ2FsbCA9IHJlcXVpcmVDYWxsc1tpbmRleCArIDFdXG5cbiAgICAgICAgICBpZiAobmV4dFJlcXVpcmVDYWxsICYmIGNvbnRhaW5zTm9kZU9yRXF1YWwoc3RhdGVtZW50V2l0aFJlcXVpcmVDYWxsLCBuZXh0UmVxdWlyZUNhbGwpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV4dFN0YXRlbWVudCAmJlxuICAgICAgICAgICAgICghbmV4dFJlcXVpcmVDYWxsIHx8ICFjb250YWluc05vZGVPckVxdWFsKG5leHRTdGF0ZW1lbnQsIG5leHRSZXF1aXJlQ2FsbCkpKSB7XG5cbiAgICAgICAgICAgIGNoZWNrRm9yTmV3TGluZShzdGF0ZW1lbnRXaXRoUmVxdWlyZUNhbGwsIG5leHRTdGF0ZW1lbnQsICdyZXF1aXJlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgRnVuY3Rpb25EZWNsYXJhdGlvbjogaW5jcmVtZW50TGV2ZWwsXG4gICAgICBGdW5jdGlvbkV4cHJlc3Npb246IGluY3JlbWVudExldmVsLFxuICAgICAgQXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IGluY3JlbWVudExldmVsLFxuICAgICAgQmxvY2tTdGF0ZW1lbnQ6IGluY3JlbWVudExldmVsLFxuICAgICAgT2JqZWN0RXhwcmVzc2lvbjogaW5jcmVtZW50TGV2ZWwsXG4gICAgICBEZWNvcmF0b3I6IGluY3JlbWVudExldmVsLFxuICAgICAgJ0Z1bmN0aW9uRGVjbGFyYXRpb246ZXhpdCc6IGRlY3JlbWVudExldmVsLFxuICAgICAgJ0Z1bmN0aW9uRXhwcmVzc2lvbjpleGl0JzogZGVjcmVtZW50TGV2ZWwsXG4gICAgICAnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb246ZXhpdCc6IGRlY3JlbWVudExldmVsLFxuICAgICAgJ0Jsb2NrU3RhdGVtZW50OmV4aXQnOiBkZWNyZW1lbnRMZXZlbCxcbiAgICAgICdPYmplY3RFeHByZXNzaW9uOmV4aXQnOiBkZWNyZW1lbnRMZXZlbCxcbiAgICAgICdEZWNvcmF0b3I6ZXhpdCc6IGRlY3JlbWVudExldmVsLFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==