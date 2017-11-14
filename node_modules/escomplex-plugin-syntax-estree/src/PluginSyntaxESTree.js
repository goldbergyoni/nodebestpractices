import AbstractSyntaxLoader   from 'typhonjs-escomplex-commons/src/module/plugin/syntax/AbstractSyntaxLoader';

import actualize              from 'typhonjs-escomplex-commons/src/module/traits/actualize';
import TraitUtil              from 'typhonjs-escomplex-commons/src/module/traits/TraitUtil';

/**
 * Provides an typhonjs-escomplex-module / ESComplexModule plugin which loads syntax definitions for trait resolution
 * for all ESTree AST nodes up to and including ES6.
 *
 * @see https://www.npmjs.com/package/typhonjs-escomplex-module
 */
export default class PluginSyntaxESTree extends AbstractSyntaxLoader
{
   // ESComplexModule plugin callbacks ------------------------------------------------------------------------------

   /**
    * Loads any default settings that are not already provided by any user options.
    *
    * @param {object}   ev - escomplex plugin event data.
    *
    * The following options are:
    * ```
    * (boolean)   commonjs - Boolean indicating that source code being processed is CommonJS; defaults to false.
    *
    * (function)  dependencyResolver - Provides a function to resolve dynamic dependencies; defaults to undefined.
    *
    * (boolean)   forin - Boolean indicating whether for...in / for...of loops should be considered a source of
    *                     cyclomatic complexity; defaults to false.
    *
    * (boolean)   logicalor - Boolean indicating whether operator || should be considered a source of cyclomatic
    *                         complexity; defaults to true.
    *
    * (boolean)   switchcase - Boolean indicating whether switch statements should be considered a source of cyclomatic
    *                          complexity; defaults to true.
    *
    * (boolean)   trycatch - Boolean indicating whether catch clauses should be considered a source of cyclomatic
    *                        complexity; defaults to false.
    * ```
    */
   onConfigure(ev)
   {
      ev.data.settings.commonjs = typeof ev.data.options.commonjs === 'boolean' ? ev.data.options.commonjs : false;
      ev.data.settings.dependencyResolver = typeof ev.data.options.dependencyResolver === 'function' ?
       ev.data.options.dependencyResolver : void 0;
      ev.data.settings.forin = typeof ev.data.options.forin === 'boolean' ? ev.data.options.forin : false;
      ev.data.settings.logicalor = typeof ev.data.options.logicalor === 'boolean' ? ev.data.options.logicalor : true;
      ev.data.settings.switchcase = typeof ev.data.options.switchcase === 'boolean' ? ev.data.options.switchcase : true;
      ev.data.settings.trycatch = typeof ev.data.options.trycatch === 'boolean' ? ev.data.options.trycatch : false;
   }

   // Core / ES5 ESTree AST nodes -----------------------------------------------------------------------------------

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#arrayexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ArrayExpression() { return actualize(0, 0, '[]'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#assignmentexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   AssignmentExpression() { return actualize(0, 0, (node) => { return node.operator; }); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#blockstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   BlockStatement() { return actualize(0, 0); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#binaryexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   BinaryExpression() { return actualize(0, 0, (node) => { return node.operator; }); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#breakstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   BreakStatement() { return actualize(1, 0, 'break'); }

   /**
    * ES5 Node
    *
    * Processes CommonJS dependencies if settings.commonjs is set to true. An optional function
    * settings.dependencyResolver may be used to resolve dynamic dependencies.

    * @param {object}   settings - escomplex settings
    *
    * @see https://github.com/estree/estree/blob/master/spec.md#callexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   CallExpression(settings)
   {
      return actualize(
       (node) => { return node.callee.type === 'FunctionExpression' ? 1 : 0; },   // lloc
       0,                                                                         // cyclomatic
       '()',                                                                      // operators
       void 0,                                                                    // operands
       void 0,                                                                    // ignoreKeys
       void 0,                                                                    // newScope
       (node) =>
       {
          // Only process CJS dependencies if settings.commonjs is true.
          if (settings.commonjs && node.callee.type === 'Identifier' && node.callee.name === 'require' &&
           node.arguments.length === 1)
          {
             const dependency = node.arguments[0];

             let dependencyPath = '* dynamic dependency *';

             if (dependency.type === 'Literal' || dependency.type === 'StringLiteral')
             {
                dependencyPath = typeof settings.dependencyResolver === 'function' ?
                 settings.dependencyResolver(dependency.value) : dependency.value;
             }

             return { line: node.loc.start.line, path: dependencyPath, type: 'cjs' };
          }
       }
      );
   }

   /**
    * ES5 Node
    * @param {object}   settings - escomplex settings
    * @see https://github.com/estree/estree/blob/master/spec.md#catchclause
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   CatchClause(settings) { return actualize(1, () => { return settings.trycatch ? 1 : 0; }, 'catch'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#conditionalexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ConditionalExpression() { return actualize(0, 1, ':?'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#continuestatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ContinueStatement() { return actualize(1, 0, 'continue'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#dowhilestatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   DoWhileStatement() { return actualize(2, (node) => { return node.test ? 1 : 0; }, 'dowhile'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#emptystatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   EmptyStatement() { return actualize(0, 0); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#expressionstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ExpressionStatement() { return actualize(1, 0); }

   /**
    * ES5 Node
    * @param {object}   settings - escomplex settings
    * @see https://github.com/estree/estree/blob/master/spec.md#forinstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ForInStatement(settings) { return actualize(1, () => { return settings.forin ? 1 : 0; }, 'forin'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#forstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ForStatement() { return actualize(1, (node) => { return node.test ? 1 : 0; }, 'for'); }

   /**
    * ES5 Node
    *
    * Note: The function name (node.id) is returned as an operand and excluded from traversal as to not be included in
    * the function operand calculations.
    *
    * @see https://github.com/estree/estree/blob/master/spec.md#functiondeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   FunctionDeclaration()
   {
      return actualize(1, 0,
       (node, parent) =>
       {
          const operators = TraitUtil.safeComputedOperators(node, parent);
          operators.push(typeof node.generator === 'boolean' && node.generator ? 'function*' : 'function');
          return operators;
       },
       (node, parent) => { return TraitUtil.safeComputedOperands(node, parent); },
       'id', 'method'
      );
   }

   /**
    * ES5 Node
    *
    * Note: The function name (node.id) is returned as an operand and excluded from traversal as to not be included in
    * the function operand calculations.
    *
    * @see https://github.com/estree/estree/blob/master/spec.md#functionexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   FunctionExpression()
   {
      return actualize(0, 0,
       (node, parent) =>
       {
          const operators = TraitUtil.safeComputedOperators(node, parent);
          operators.push(typeof node.generator === 'boolean' && node.generator ? 'function*' : 'function');
          return operators;
       },
       (node, parent) =>
       {
          return TraitUtil.safeComputedOperands(node, parent);
       },
       'id', 'method'
      );
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#identifier
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   Identifier() { return actualize(0, 0, void 0, (node) => { return node.name; }); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#ifstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   IfStatement()
   {
      return actualize((node) => { return node.alternate ? 2 : 1; }, 1,
       ['if', { identifier: 'else', filter: (node) => { return !!node.alternate; } }]);
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#labeledstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   LabeledStatement() { return actualize(0, 0); }

   /**
    * ES5 Node
    *
    * Avoid conflicts between string literals and identifiers.
    *
    * @see https://github.com/estree/estree/blob/master/spec.md#literal
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   Literal()
   {
      return actualize(0, 0, void 0, (node) =>
       {
          return typeof node.value === 'string' ? `"${node.value}"` : node.value;
       }
      );
   }

   /**
    * ES5 Node
    * @param {object}   settings - escomplex settings
    * @see https://github.com/estree/estree/blob/master/spec.md#logicalexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   LogicalExpression(settings)
   {
      return actualize(0, (node) =>
       {
          const isAnd = node.operator === '&&';
          const isOr = node.operator === '||';
          return (isAnd || (settings.logicalor && isOr)) ? 1 : 0;
       },
       (node) => { return node.operator; }
      );
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#memberexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   MemberExpression()
   {
      return actualize((node) =>
       {
          return ['ObjectExpression', 'ArrayExpression', 'FunctionExpression'].indexOf(node.object.type) === -1 ?
           0 : 1;
       },
       0, '.'
      );
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#newexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   NewExpression()
   {
      return actualize((node) => { return node.callee.type === 'FunctionExpression' ? 1 : 0; }, 0, 'new');
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#objectexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ObjectExpression() { return actualize(0, 0, '{}'); }

   /**
    * ES5 Node
    *
    * Note that w/ ES6+ `:` may be omitted and the Property node defines `shorthand` to indicate this case.
    *
    * @see https://github.com/estree/estree/blob/master/spec.md#property
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   Property()
   {
      return actualize(1, 0, (node) =>
       {
          return typeof node.shorthand === 'undefined' ? ':' :
           typeof node.shorthand === 'boolean' && !node.shorthand ? ':' : void 0;
       }
      );
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#returnstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ReturnStatement() { return actualize(1, 0, 'return'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#sequenceexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   SequenceExpression() { return actualize(0, 0); }

   /**
    * ES5 Node
    * @param {object}   settings - escomplex settings
    * @see https://github.com/estree/estree/blob/master/spec.md#switchcase
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   SwitchCase(settings)
   {
      return actualize(1, (node) => { return settings.switchcase && node.test ? 1 : 0; },
       (node) => { return node.test ? 'case' : 'default'; });
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#switchstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   SwitchStatement() { return actualize(1, 0, 'switch'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#thisexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ThisExpression() { return actualize(0, 0, void 0, 'this'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#throwstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ThrowStatement() { return actualize(1, 0, 'throw'); }

   /**
    * ES5 Node
    *
    * Note: esprima has duplicate nodes the catch block; `handler` is the actual ESTree spec.
    *
    * @see https://github.com/estree/estree/blob/master/spec.md#trystatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   TryStatement()
   {
      return actualize(1, 0, (node) => { return node.finalizer ? ['try', 'finally'] : ['try']; }, void 0,
       ['guardedHandlers', 'handlers']);
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#unaryexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   UnaryExpression()
   {
      return actualize(0, 0, (node) => { return `${node.operator} (${node.prefix ? 'pre' : 'post'}fix)`; });
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#updateexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   UpdateExpression()
   {
      return actualize(0, 0, (node) => { return `${node.operator} (${node.prefix ? 'pre' : 'post'}fix)`; });
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#variabledeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   VariableDeclaration() { return actualize(0, 0, (node) => { return node.kind; }); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#variabledeclarator
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   VariableDeclarator()
   {
      return actualize(1, 0, { identifier: '=', filter: (node) => { return !!node.init; } });
   }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#whilestatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   WhileStatement() { return actualize(1, (node) => { return node.test ? 1 : 0; }, 'while'); }

   /**
    * ES5 Node
    * @see https://github.com/estree/estree/blob/master/spec.md#withstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   WithStatement() { return actualize(1, 0, 'with'); }

   // ES6 ESTree AST nodes ------------------------------------------------------------------------------------------

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#assignmentpattern
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   AssignmentPattern()
   {
      return actualize(0, 0, (node) => { return node.operator; }, void 0, (node) =>
       {
          return node.left.type === 'MemberExpression' ? `${TraitUtil.safeName(node.left.object)}.${
           node.left.property.name}` : typeof node.left.id !== 'undefined' ? TraitUtil.safeName(node.left.id) :
            TraitUtil.safeName(node.left);
       }
      );
   }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#arraypattern
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ArrayPattern() { return actualize(0, 0, '[]'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#arrowfunctionexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ArrowFunctionExpression() { return actualize(0, 0, 'function=>', void 0, void 0, 'method'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#classbody
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ClassBody() { return actualize(0, 0); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#classdeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ClassDeclaration() { return actualize(1, 0, 'class', void 0, void 0, 'class'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#classexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ClassExpression() { return actualize(1, 0, 'class', void 0, void 0, 'class'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#exportalldeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ExportAllDeclaration() { return actualize(0, 0, ['export', '*']); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#exportdefaultdeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ExportDefaultDeclaration() { return actualize(0, 0, ['export', 'default']); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#exportnameddeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ExportNamedDeclaration() { return actualize(0, 0, ['export', '{}']); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#exportspecifier
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ExportSpecifier()
   {
      return actualize(0, 0, (node) => { return node.exported.name === node.local.name ? void 0 : 'as'; });
   }

   /**
    * ES6 Node
    * @param {object}   settings - escomplex settings
    * @see https://github.com/estree/estree/blob/master/es6.md#forofstatement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ForOfStatement(settings) { return actualize(1, () => { return settings.forin ? 1 : 0; }, 'forof'); }

   /**
    * ES6 Node
    * @param {object}   settings - escomplex settings
    * @see https://github.com/estree/estree/blob/master/es6.md#importdeclaration
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ImportDeclaration(settings)
   {
      return actualize(0, 0, ['import', 'from'], void 0, void 0, void 0, (node) =>
       {
          const dependencyPath = typeof settings.dependencyResolver === 'function' ?
           settings.dependencyResolver(node.source.value) : node.source.value;

          return { line: node.source.loc.start.line, path: dependencyPath, type: 'esm' };
       }
      );
   }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#importdefaultspecifier
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ImportDefaultSpecifier() { return actualize(0, 0); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#importnamespacespecifier
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ImportNamespaceSpecifier() { return actualize(0, 0, ['import', '*', 'as']); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#importspecifier
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ImportSpecifier()
   {
      return actualize(0, 0, (node) => { return node.imported.name === node.local.name ? '{}' : ['{}', 'as']; });
   }

   /**
    * ES6 Node
    *
    * Note: esprima doesn't follow the ESTree spec and `meta` & `property` are strings instead of Identifier nodes.
    *
    * @see https://github.com/estree/estree/blob/master/es6.md#metaproperty
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   MetaProperty()
   {
      return actualize(0, 0, '.',
       (node) =>
       {
          return typeof node.meta === 'string' && typeof node.property === 'string' ? [node.meta, node.property] :
           void 0;
       }
      );
   }

   /**
    * ES6 Node
    *
    * Note: must skip as the following FunctionExpression assigns the name.
    *
    * @see https://github.com/estree/estree/blob/master/es6.md#methoddefinition
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   MethodDefinition()
   {
      return actualize(0, 0, (node) =>
       {
          const operators = [];
          if (node.kind && (node.kind === 'get' || node.kind === 'set')) { operators.push(node.kind); }
          if (typeof node.static === 'boolean' && node.static) { operators.push('static'); }
          return operators;
       },
       void 0,
       'key'
      );
   }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#objectpattern
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ObjectPattern() { return actualize(0, 0, '{}'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#restelement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   RestElement() { return actualize(0, 0, '... (rest)'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#spreadelement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   SpreadElement() { return actualize(0, 0, '... (spread)'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#super
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   Super() { return actualize(0, 0, void 0, 'super'); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#taggedtemplateexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   TaggedTemplateExpression() { return actualize(0, 0); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#templateelement
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   TemplateElement()
   {
      return actualize(0, 0, void 0, (node) => { return node.value.cooked !== '' ? node.value.cooked : void 0; });
   }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#templateliteral
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   TemplateLiteral() { return actualize(0, 0); }

   /**
    * ES6 Node
    * @see https://github.com/estree/estree/blob/master/es6.md#yieldexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   YieldExpression()
   {
      return actualize(1, 0, (node) =>
      {
         return typeof node.delegate === 'boolean' && node.delegate ? 'yield*' : 'yield';
      });
   }
}
