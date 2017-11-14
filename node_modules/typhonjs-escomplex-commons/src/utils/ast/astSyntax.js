/* eslint-disable eqeqeq */
import ASTUtil                from './ASTUtil';

import expressionPrecedence   from './expressionPrecedence';

let ArrayExpression, BinaryExpression, ForInStatement, FunctionDeclaration;

export default {
   Program(node, state)
   {
      const indent = state.indent.repeat(state.indentLevel);
      const { lineEnd, output } = state;
      const statements = node.body;

      for (let i = 0; i < statements.length; i++)
      {
         const statement = statements[i];

         output.write(indent);

         this[statement.type](statement, state);

         output.write(lineEnd);
      }
   },

   BlockStatement(node, state)
   {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, output } = state;
      const statementIndent = indent + state.indent;

      output.write('{');

      const statements = node.body;

      if (statements != null && statements.length > 0)
      {
         output.write(lineEnd);

         for (let i = 0; i < statements.length; i++)
         {
            const statement = statements[i];

            output.write(statementIndent);

            this[statement.type](statement, state);

            output.write(lineEnd);
         }
         output.write(indent);
      }

      output.write('}');
      state.indentLevel--;
   },

   EmptyStatement(node, state)
   {
      state.output.write(';');
   },

   ExpressionStatement(node, state)
   {
      const precedence = expressionPrecedence[node.expression.type];

      if (precedence === 17 || (precedence === 3 && node.expression.left.type[0] === 'O'))
      {
         // Should always have parentheses or is an AssignmentExpression to an ObjectPattern
         state.output.write('(');
         this[node.expression.type](node.expression, state);
         state.output.write(')');
      }
      else
      {
         this[node.expression.type](node.expression, state);
      }

      state.output.write(';');
   },

   IfStatement(node, state)
   {
      const { output } = state;

      output.write('if (');
      output.operators.push('if');

      this[node.test.type](node.test, state);

      output.write(') ');

      this[node.consequent.type](node.consequent, state);

      if (node.alternate != null)
      {
         output.write(' else ');
         output.operators.push('else');

         this[node.alternate.type](node.alternate, state);
      }
   },

   LabeledStatement(node, state)
   {
      this[node.label.type](node.label, state);
      state.output.write(': ');
      this[node.body.type](node.body, state);
   },

   BreakStatement(node, state)
   {
      const { output } = state;

      output.write('break');
      output.operators.push('break');

      if (node.label)
      {
         output.write(' ');
         this[node.label.type](node.label, state);
      }
      output.write(';');
   },

   ContinueStatement(node, state)
   {
      const { output } = state;

      output.write('continue');
      output.operators.push('continue');

      if (node.label)
      {
         output.write(' ');
         this[node.label.type](node.label, state);
      }

      output.write(';');
   },

   WithStatement(node, state)
   {
      const { output } = state;

      output.write('with (');
      output.operators.push('with');

      this[node.object.type](node.object, state);

      output.write(') ');

      this[node.body.type](node.body, state);
   },

   SwitchStatement(node, state)
   {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, output } = state;

      state.indentLevel++;

      const caseIndent = indent + state.indent;
      const statementIndent = caseIndent + state.indent;

      output.write('switch (');
      output.operators.push('switch');

      this[node.discriminant.type](node.discriminant, state);

      output.write(`) \{${lineEnd}`);

      const { cases: occurences } = node;
      const { length: occurencesCount } = occurences;

      for (let i = 0; i < occurencesCount; i++)
      {
         const occurence = occurences[i];

         if (occurence.test)
         {
            output.write(`${caseIndent}case `);
            output.operators.push('case');

            this[occurence.test.type](occurence.test, state);

            output.write(`:${lineEnd}`);
         }
         else
         {
            output.write(`${caseIndent}default:${lineEnd}`);
            output.operators.push('default');
         }

         const { consequent } = occurence;
         const { length: consequentCount } = consequent;

         for (let j = 0; j < consequentCount; j++)
         {
            const statement = consequent[j];

            output.write(statementIndent);

            this[statement.type](statement, state);

            output.write(lineEnd);
         }
      }

      state.indentLevel -= 2;

      output.write(`${indent}}`);
   },

   ReturnStatement(node, state)
   {
      const { output } = state;

      output.write('return');
      output.operators.push('return');

      if (node.argument)
      {
         output.write(' ');

         this[node.argument.type](node.argument, state);
      }

      output.write(';');
   },

   ThrowStatement(node, state)
   {
      const { output } = state;

      output.write('throw ');
      output.operators.push('throw');

      this[node.argument.type](node.argument, state);

      output.write(';');
   },

   TryStatement(node, state)
   {
      const { output } = state;

      output.write('try ');
      output.operators.push('try');

      this[node.block.type](node.block, state);

      if (node.handler)
      {
         const { handler } = node;

         output.write(' catch (');
         output.operators.push('catch');

         this[handler.param.type](handler.param, state);

         output.write(') ');

         this[handler.body.type](handler.body, state);
      }

      if (node.finalizer)
      {
         output.write(' finally ');
         output.operators.push('finally');

         this[node.finalizer.type](node.finalizer, state);
      }
   },

   WhileStatement(node, state)
   {
      const { output } = state;

      output.operators.push('while');
      output.write('while (');

      this[node.test.type](node.test, state);

      output.write(') ');

      this[node.body.type](node.body, state);
   },

   DoWhileStatement(node, state)
   {
      const { output } = state;

      output.operators.push('dowhile');
      output.write('do ');

      this[node.body.type](node.body, state);

      output.write(' while (');

      this[node.test.type](node.test, state);

      output.write(');');
   },

   ForStatement(node, state)
   {
      const { output } = state;

      output.write('for (');
      output.operators.push('for');

      if (node.init != null)
      {
         state.noTrailingSemicolon = true;

         this[node.init.type](node.init, state);

         state.noTrailingSemicolon = false;
      }

      output.write('; ');

      if (node.test) { this[node.test.type](node.test, state); }

      output.write('; ');

      if (node.update) { this[node.update.type](node.update, state); }

      output.write(') ');

      this[node.body.type](node.body, state);
   },

   ForInStatement: ForInStatement = function(node, state)
   {
      const { output } = state;

      output.write('for (');

      const { left } = node, { type } = left;

      state.noTrailingSemicolon = true;

      this[type](left, state);

      state.noTrailingSemicolon = false;

      // Identifying whether node.type is `ForInStatement` or `ForOfStatement`
      output.write(node.type[3] === 'I' ? ' in ' : ' of ');
      output.operators.push(node.type[3] === 'I' ? 'forin' : 'forof');

      this[node.right.type](node.right, state);

      output.write(') ');

      this[node.body.type](node.body, state);
   },

   ForOfStatement: ForInStatement,

   DebuggerStatement(node, state)
   {
      state.output.write(`debugger;${state.lineEnd}`);
   },

   FunctionDeclaration: FunctionDeclaration = function(node, state)
   {
      const { output } = state;

      output.write(node.generator ? 'function* ' : 'function ');
      output.operators.push(node.generator ? 'function*' : 'function');

      if (node.id)
      {
         output.write(node.id.name);
         output.operands.push(node.id.name);
      }

      ASTUtil.formatSequence(node.params, state, this);

      output.write(' ');

      this[node.body.type](node.body, state);
   },

   FunctionExpression: FunctionDeclaration,

   VariableDeclaration(node, state)
   {
      const { output } = state;
      const { declarations } = node;

      output.write(`${node.kind} `);
      output.operators.push(node.kind);

      const { length } = declarations;

      if (length > 0)
      {
         this.VariableDeclarator(declarations[0], state);

         for (let i = 1; i < length; i++)
         {
            output.write(', ');

            this.VariableDeclarator(declarations[i], state);
         }
      }

      if (state.noTrailingSemicolon !== true) { output.write(';'); }
   },

   VariableDeclarator(node, state)
   {
      this[node.id.type](node.id, state);

      if (node.init != null)
      {
         state.output.write(' = ');
         state.output.operators.push('=');

         this[node.init.type](node.init, state);
      }
   },

   ClassDeclaration(node, state)
   {
      const { output } = state;

      output.write('class ');
      output.operators.push('class');

      if (node.id) { output.write(`${node.id.name} `); }

      if (node.superClass)
      {
         output.write('extends ');
         output.operators.push('extends');

         this[node.superClass.type](node.superClass, state);

         output.write(' ');
      }

      this.BlockStatement(node.body, state);
   },

   ImportDeclaration(node, state)
   {
      const { output } = state;

      output.write('import ');
      output.operators.push('import');

      const { specifiers } = node;
      const { length } = specifiers;

      if (length > 0)
      {
         let i = 0, specifier;
         while (i < length)
         {
            if (i > 0) { output.write(', '); }

            specifier = specifiers[i];
            const type = specifier.type[6];

            if (type === 'D')
            {
               output.write(specifier.local.name); // ImportDefaultSpecifier
               i++;
            }
            else if (type === 'N')
            {

               output.write(`* as ${specifier.local.name}`);   // ImportNamespaceSpecifier
               i++;
            }
            else
            {
               break;   // ImportSpecifier
            }
         }

         if (i < length)
         {
            output.write('{');

            for (; ;)
            {
               specifier = specifiers[i];
               const { name } = specifier.imported;

               output.write(name);

               if (name !== specifier.local.name) { output.write(` as ${specifier.local.name}`); }

               if (++i < length)
               {
                  output.write(', ');
               }
               else
               {
                  break;
               }
            }

            output.write('}');
         }

         output.write(' from ');
         output.operators.push('from');
      }

      this.Literal(node.source, state);

      output.write(';');
   },

   ExportDefaultDeclaration(node, state)
   {
      const { output } = state;

      output.write('export default ');
      output.operators.push('export');
      output.operators.push('default');

      this[node.declaration.type](node.declaration, state);

      // All expression nodes except `FunctionExpression`
      if (expressionPrecedence[node.declaration.type] && node.declaration.type[0] !== 'F') { output.write(';'); }
   },

   ExportNamedDeclaration(node, state)
   {
      const { output } = state;

      output.write('export ');
      output.operators.push('export');

      if (node.declaration)
      {
         this[node.declaration.type](node.declaration, state);
      }
      else
      {
         output.write('{');
         output.operators.push('{}');

         const { specifiers } = node, { length } = specifiers;

         if (length > 0)
         {
            for (let i = 0; ;)
            {
               const specifier = specifiers[i];
               const { name } = specifier.local;

               output.write(name);

               if (name !== specifier.exported.name) { output.write(` as ${specifier.exported.name}`); }

               if (++i < length)
               {
                  output.write(', ');
               }
               else
               {
                  break;
               }
            }
         }

         output.write('}');

         if (node.source)
         {
            output.write(' from ');

            this.Literal(node.source, state);
         }

         output.write(';');
      }
   },

   ExportAllDeclaration(node, state)
   {
      const { output } = state;

      output.write('export * from ');
      output.operators.push('export');
      output.operators.push('*');

      this.Literal(node.source, state);

      output.write(';');
   },

   MethodDefinition(node, state)
   {
      const { output } = state;

      if (node.static)
      {
         output.write('static ');
         output.operators.push('static');
      }

      switch (node.kind[0])
      {
         case 'g': // `get`
         case 's': // `set`
            output.write(`${node.kind} `);
            output.operators.push(node.kind);
            break;
      }

      if (node.value.generator) { output.write('*'); }

      if (node.computed)
      {
         output.write('[');

         this[node.key.type](node.key, state);

         output.write(']');
      }
      else
      {
         this[node.key.type](node.key, state);
      }

      ASTUtil.formatSequence(node.value.params, state, this);

      output.write(' ');

      this[node.value.body.type](node.value.body, state);
   },

   ClassExpression(node, state)
   {
      this.ClassDeclaration(node, state);
   },

   ArrowFunctionExpression(node, state)
   {
      const { output } = state;
      const { params } = node;

      if (params != null)
      {
         // If params[0].type[0] starts with 'I', it can't be `ImportDeclaration` nor `IfStatement` and thus is
         // `Identifier`
         if (params.length === 1 && params[0].type[0] === 'I')
         {
            output.write(params[0].name);
         }
         else
         {
            ASTUtil.formatSequence(node.params, state, this);
         }
      }

      output.write(' => ');
      output.operators.push('function=>');

      if (node.body.type[0] === 'O')
      {
         output.write('(');

         this.ObjectExpression(node.body, state);

         output.write(')');
      }
      else
      {
         this[node.body.type](node.body, state);
      }
   },

   ThisExpression(node, state)
   {
      state.output.write('this');
      state.output.operators.push('this');
   },

   Super(node, state)
   {
      state.output.write('super');
      state.output.operators.push('super');
   },

   RestElement(node, state)
   {
      state.output.write('...');
      state.output.operators.push('... (rest)');

      this[node.argument.type](node.argument, state);
   },

   SpreadElement(node, state)
   {
      state.output.write('...');
      state.output.operators.push('... (spread)');
      this[node.argument.type](node.argument, state);
   },

   YieldExpression(node, state)
   {
      const { output } = state;

      output.write(node.delegate ? 'yield*' : 'yield');
      output.operators.push(node.delegate ? 'yield*' : 'yield');

      if (node.argument)
      {
         output.write(' ');

         this[node.argument.type](node.argument, state);
      }
   },

   TemplateLiteral(node, state)
   {
      const { output } = state;
      const { quasis, expressions } = node;
      const { length } = expressions;

      output.write('`');

      for (let i = 0; i < length; i++)
      {
         const expression = expressions[i];

         output.write(quasis[i].value.raw);
         output.write('${');

         this[expression.type](expression, state);

         output.write('}');
      }

      output.write(quasis[quasis.length - 1].value.raw);
      output.write('`');
   },

   TaggedTemplateExpression(node, state)
   {
      this[node.tag.type](node.tag, state);
      this[node.quasi.type](node.quasi, state);
   },

   ArrayExpression: ArrayExpression = function(node, state)
   {
      const { output } = state;

      output.operators.push('[]');
      output.write('[');

      if (node.elements.length > 0)
      {
         const { elements } = node, { length } = elements;

         for (let i = 0; ;)
         {
            const element = elements[i];

            if (element != null) { this[element.type](element, state); }

            if (++i < length)
            {
               output.write(', ');
            }
            else
            {
               if (element == null) { output.write(', '); }
               break;
            }
         }
      }

      output.write(']');
   },

   ArrayPattern: ArrayExpression,

   ObjectExpression(node, state)
   {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, output } = state;
      const propertyIndent = indent + state.indent;

      output.operators.push('{}');
      output.write('{');

      if (node.properties.length > 0)
      {
         output.write(lineEnd);

         const comma = `,${lineEnd}`, { properties } = node, { length } = properties;

         for (let i = 0; ;)
         {
            const property = properties[i];

            output.write(propertyIndent);

            this.Property(property, state);

            if (++i < length)
            {
               output.write(comma);
            }
            else
            {
               break;
            }
         }

         output.write(lineEnd);
         output.write(`${indent}}`);
      }
      else
      {
         output.write('}');
      }

      state.indentLevel--;
   },

   Property(node, state)
   {
      if (node.method || node.kind[0] !== 'i')
      {
         this.MethodDefinition(node, state); // Either a method or of kind `set` or `get` (not `init`)
      }
      else
      {
         const { output } = state;

         if (!node.shorthand)
         {
            if (node.computed)
            {
               output.operators.push('[]');
               output.write('[');

               this[node.key.type](node.key, state);

               output.write(']');
            }
            else
            {
               this[node.key.type](node.key, state);
            }

            output.operators.push(':');
            output.write(': ');
         }

         this[node.value.type](node.value, state);
      }
   },

   ObjectPattern(node, state)
   {
      const { output } = state;

      output.operators.push('{}');
      output.write('{');

      if (node.properties.length > 0)
      {
         const { properties } = node, { length } = properties;

         for (let i = 0; ;)
         {
            this.Property(properties[i], state);

            if (++i < length)
            {
               output.write(', ');
            }
            else
            {
               break;
            }
         }
      }
      output.write('}');
   },

   SequenceExpression(node, state)
   {
      ASTUtil.formatSequence(node.expressions, state, this);
   },

   UnaryExpression(node, state)
   {
      const { output } = state;

      output.operators.push(`${node.operator} (${node.prefix ? 'pre' : 'post'}fix)`);

      if (node.prefix)
      {
         output.write(node.operator);

         if (node.operator.length > 1) { output.write(' '); }

         if (expressionPrecedence[node.argument.type] < expressionPrecedence.UnaryExpression)
         {
            output.write('(');

            this[node.argument.type](node.argument, state);

            output.write(')');
         }
         else
         {
            this[node.argument.type](node.argument, state);
         }
      }
      else
      {
         // FIXME: This case never occurs
         this[node.argument.type](node.argument, state);

         state.output.write(node.operator);
      }
   },

   UpdateExpression(node, state)
   {
      // Always applied to identifiers or members, no parenthesis check needed
      state.output.operators.push(`${node.operator} (${node.prefix ? 'pre' : 'post'}fix)`);

      if (node.prefix)
      {
         state.output.write(node.operator);

         this[node.argument.type](node.argument, state);
      }
      else
      {
         this[node.argument.type](node.argument, state);

         state.output.write(node.operator);
      }
   },

   AssignmentExpression(node, state)
   {
      this[node.left.type](node.left, state);

      state.output.write(` ${node.operator} `);

      this[node.right.type](node.right, state);

      state.output.operators.push(node.operator);
   },

   AssignmentPattern(node, state)
   {
      this[node.left.type](node.left, state);

      state.output.write(' = ');

      this[node.right.type](node.right, state);

      state.output.operators.push('=');
   },

   BinaryExpression: BinaryExpression = function(node, state)
   {
      const { output } = state;

      output.operators.push(node.operator);

      if (node.operator === 'in')
      {
         // Avoids confusion in `for` loops initializers
         output.write('(');

         ASTUtil.formatBinaryExpressionPart(node.left, node, false, state, this);

         output.write(` ${node.operator} `);

         ASTUtil.formatBinaryExpressionPart(node.right, node, true, state, this);

         output.write(')');
      }
      else
      {
         ASTUtil.formatBinaryExpressionPart(node.left, node, false, state, this);

         output.write(` ${node.operator} `);

         ASTUtil.formatBinaryExpressionPart(node.right, node, true, state, this);
      }
   },

   LogicalExpression: BinaryExpression,

   ConditionalExpression(node, state)
   {
      const { output } = state;

      if (expressionPrecedence[node.test.type] > expressionPrecedence.ConditionalExpression)
      {
         this[node.test.type](node.test, state);
      }
      else
      {
         output.operators.push('()');
         output.write('(');

         this[node.test.type](node.test, state);

         output.write(')');
      }

      output.write(' ? ');

      this[node.consequent.type](node.consequent, state);

      output.write(' : ');

      this[node.alternate.type](node.alternate, state);

      output.operators.push(':?');
   },

   NewExpression(node, state)
   {
      const { output } = state;

      output.write('new ');
      output.operators.push('new');

      if (expressionPrecedence[node.callee.type] < expressionPrecedence.CallExpression ||
       ASTUtil.hasCallExpression(node.callee))
      {
         output.write('(');

         this[node.callee.type](node.callee, state);

         output.write(')');

         output.operators.push('()');
      }
      else
      {
         this[node.callee.type](node.callee, state);
      }

      ASTUtil.formatSequence(node['arguments'], state, this);
   },

   CallExpression(node, state)
   {
      const { output } = state;

      if (expressionPrecedence[node.callee.type] < expressionPrecedence.CallExpression)
      {
         output.write('(');

         this[node.callee.type](node.callee, state);

         output.write(')');
         output.operators.push('()');
      }
      else
      {
         this[node.callee.type](node.callee, state);
      }

      ASTUtil.formatSequence(node['arguments'], state, this);
   },

   MemberExpression(node, state)
   {
      const { output } = state;

      if (expressionPrecedence[node.object.type] < expressionPrecedence.MemberExpression)
      {
         output.write('(');

         this[node.object.type](node.object, state);

         output.write(')');
         output.operators.push('()');
      }
      else
      {
         this[node.object.type](node.object, state);
      }

      if (node.computed)
      {
         output.write('[');

         this[node.property.type](node.property, state);

         output.write(']');

         output.operators.push('[]');
      }
      else
      {
         output.write('.');
         output.operators.push('.');

         this[node.property.type](node.property, state);
      }
   },

   MetaProperty(node, state)
   {
      state.output.write(`${node.meta.name}.${node.property.name}`);

      state.output.operators.push('.');
      state.output.operands.push(node.meta.name);
      state.output.operands.push(node.property.name);
   },

   Identifier(node, state)
   {
      state.output.write(node.name);
      state.output.operands.push(node.name);
   },

   Literal(node, state)
   {
      if (node.raw != null)
      {
         state.output.write(node.raw);
         state.output.operands.push(node.raw);
      }
      else if (node.regex != null)
      {
         this.RegExpLiteral(node, state);
      }
      else
      {
         state.output.write(JSON.stringify(node.value));
      }
   },

   RegExpLiteral(node, state)
   {
      const { regex } = node;

      state.output.write(`new RegExp(${JSON.stringify(regex.pattern)}, ${JSON.stringify(regex.flags)})`);
   },

   // Babylon AST nodes ---------------------------------------------------------------------------------------------

   BooleanLiteral(node, state)
   {
      state.output.write(node.value);
      state.output.operands.push(node.value);
   },

   DirectiveLiteral(node, state)
   {
      state.output.write(node.value);
      state.output.operands.push(node.value);
   },

   NullLiteral(node, state)
   {
      state.output.write('null');
      state.output.operands.push('null');
   },

   NumericLiteral(node, state)
   {
      state.output.write(node.value);
      state.output.operands.push(node.value);
   },

   StringLiteral(node, state)
   {
      if (node.extra != null && node.extra.raw != null)
      {
         state.output.write(node.extra.raw);
         state.output.operands.push(node.extra.raw);
      }
      else
      {
         state.output.write(JSON.stringify(node.value));
         state.output.operands.push(JSON.stringify(node.value));
      }
   }
};