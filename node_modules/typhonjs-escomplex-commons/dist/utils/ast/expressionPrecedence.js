"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = {
   // Definitions
   ArrayExpression: 20,
   TaggedTemplateExpression: 20,
   ThisExpression: 20,
   Identifier: 20,
   Literal: 18,
   TemplateLiteral: 20,
   Super: 20,
   SequenceExpression: 20,
   // Operations
   MemberExpression: 19,
   CallExpression: 19,
   NewExpression: 19,
   ArrowFunctionExpression: 18,
   // Other definitions
   // Value 17 enables parenthesis in an `ExpressionStatement` node
   ClassExpression: 17,
   FunctionExpression: 17,
   ObjectExpression: 17,
   // Other operations
   UpdateExpression: 16,
   UnaryExpression: 15,
   BinaryExpression: 14,
   LogicalExpression: 13,
   ConditionalExpression: 4,
   AssignmentExpression: 3,
   YieldExpression: 2,
   RestElement: 1,

   // Babylon AST nodes ---------------------------------------------------------------------------------------------

   BooleanLiteral: 18,
   DirectiveLiteral: 18,
   NullLiteral: 18,
   NumericLiteral: 18,
   StringLiteral: 18
};
module.exports = exports["default"];