import PluginSyntaxESTree  from 'escomplex-plugin-syntax-estree/src/PluginSyntaxESTree';

import TraitUtil           from 'typhonjs-escomplex-commons/src/module/traits/TraitUtil';

import actualize           from 'typhonjs-escomplex-commons/src/module/traits/actualize';

/**
 * Provides an typhonjs-escomplex-module / ESComplexModule plugin which loads syntax definitions for trait resolution
 * for unique Babylon AST not found in ESTree.
 *
 * @see https://www.npmjs.com/package/typhonjs-escomplex-module
 */
export default class PluginSyntaxBabylon extends PluginSyntaxESTree
{
   // Unique Babylon AST nodes --------------------------------------------------------------------------------------

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#bindexpression
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   BindExpression() { return actualize(0, 0); }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#booleanliteral
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   BooleanLiteral() { return actualize(0, 0, undefined, (node) => { return node.value; }); }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#classmethod
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ClassMethod()
   {
      return actualize(0, 0, (node, parent) =>
       {
          const operators = TraitUtil.safeComputedOperators(node, parent);
          operators.push(typeof node.generator === 'boolean' && node.generator ? 'function*' : 'function');

          if (node.kind && (node.kind === 'get' || node.kind === 'set')) { operators.push(node.kind); }
          if (typeof node.async === 'boolean' && node.async) { operators.push('async'); }
          if (typeof node.static === 'boolean' && node.static) { operators.push('static'); }
          return operators;
       },
       (node, parent) => { return TraitUtil.safeComputedOperands(node, parent); },
       'key',   // Note: must skip key as the assigned name is determined above.
       'method'
      );
   }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#decorator
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   Decorator() { return actualize(0, 0); }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#directive
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   Directive() { return actualize(1, 0); }

   /**
    * Avoid conflicts between string literals and identifiers.
    *
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#directiveliteral
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   DirectiveLiteral()
   {
      return actualize(0, 0, void 0, (node) =>
       {
          return typeof node.value === 'string' ? `"${node.value}"` : node.value;
       }
      );
   }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#nullliteral
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   NullLiteral() { return actualize(0, 0, void 0, 'null'); }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#numericliteral
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   NumericLiteral() { return actualize(0, 0, void 0, (node) => { return node.value; }); }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#objectmethod
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ObjectMethod()
   {
      return actualize(0, 0, (node) =>
       {
          return typeof node.kind === 'string' && (node.kind === 'get' || node.kind === 'set') ? node.kind : void 0;
       },
       void 0,
       'key'  // Note: must skip key as the assigned name is forwarded on to FunctionExpression.
      );
   }

   /**
    * Note: that w/ ES6+ `:` may be omitted and the Property node defines `shorthand` to indicate this case.
    *
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#objectproperty
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   ObjectProperty()
   {
      return actualize(1, 0, (node) =>
       {
          return typeof node.shorthand === 'undefined' ? ':' :
           typeof node.shorthand === 'boolean' && !node.shorthand ? ':' : void 0;
       }
      );
   }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#restproperty
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   RestProperty() { return actualize(0, 0); }

   /**
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#spreadproperty
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   SpreadProperty() { return actualize(0, 0); }

   /**
    * Avoid conflicts between string literals and identifiers.
    *
    * @see https://github.com/babel/babylon/blob/master/ast/spec.md#stringliteral
    * @returns {{lloc: *, cyclomatic: *, operators: *, operands: *, ignoreKeys: *, newScope: *, dependencies: *}}
    */
   StringLiteral() { return actualize(0, 0, void 0, (node) => { return `"${node.value}"`; }); }
}
