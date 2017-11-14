import ASTParser from '../../utils/ast/ASTParser';

export default class TraitUtil
{
   /**
    * Provides safe array creation from a given input.
    *
    * @param {*}  value - A value to potentially convert into a safe array.
    *
    * @returns {Array}
    */
   static safeArray(value)
   {
      return typeof value === 'undefined' || value === null ? [] : Array.isArray(value) ? value : [value];
   }

   /**
    * Provides a utility method that determines the name of a method for ESTree / Babylon AST nodes. For ESTree the
    * parent node must be accessed for class methods. If the name is a computed value and not a string literal then
    * `astParse` is invoked to determine the computed name and is output as `<computed~${computed expression}>`.
    *
    * Note; ESTree has a parent node which defines the method name with a child FunctionExpression /
    * FunctionDeclaration. Babylon AST only has ClassMethod with a child `key` providing the method name.
    *
    * @param {object}   node - The current AST node.
    * @param {object}   parent - The parent AST node.
    *
    * @returns {string}
    */
   static safeComputedName(node, parent)
   {
      let name;

      // Handle ESTree case.
      if (parent && parent.type === 'MethodDefinition')
      {
         if (typeof parent.computed === 'boolean' && parent.computed)
         {
            // The following will pick up a single literal computed value (string); expressions return
            // `<computed>`.
            name = parent.key.type === 'Literal' ? TraitUtil.safeValue(parent.key) :
             `<computed~${ASTParser.parse(parent.key).source}>`;
         }
         else // Parent is not computed and `parent.key` is an `Identifier` node.
         {
            name = TraitUtil.safeName(parent.key);
         }
      }

      // Handle Babylon AST ClassMethod node.
      if (node.type === 'ClassMethod')
      {
         if (typeof node.computed === 'boolean' && node.computed)
         {
            name = node.key.type === 'StringLiteral' ? TraitUtil.safeValue(node.key) :
             `<computed~${ASTParser.parse(node.key).source}>`;
         }
         else // ClassMethod is not computed and is an `Identifier` node.
         {
            name = TraitUtil.safeName(node.key);
         }
      }

      // Last chance assignment handles other node types / expressions: arrow, yield, etc.
      if (typeof name !== 'string')
      {
         name = TraitUtil.safeName(node.id || node.key);
      }

      return name;
   }

   /**
    * Provides a utility method that determines the operands of a method for ESTree / Babylon AST nodes. For ESTree the
    * parent node must be accessed for class methods. If the name is a computed value and not a string literal then
    * `astParse` is invoked to determine the computed operands.
    *
    * Note; ESTree has a parent node which defines the method name with a child FunctionExpression /
    * FunctionDeclaration. Babylon AST only has ClassMethod with a child `key` providing the method name.
    *
    * @param {object}   node - The current AST node.
    * @param {object}   parent - The parent AST node.
    *
    * @returns {Array<*>}
    */
   static safeComputedOperands(node, parent)
   {
      const operands = [];

      // Handle ESTree case.
      if (parent && parent.type === 'MethodDefinition')
      {
         if (typeof parent.computed === 'boolean' && parent.computed)
         {
            // The following will pick up a single literal computed value (string).
            if (parent.key.type === 'Literal')
            {
               operands.push(TraitUtil.safeValue(parent.key));
            }
            else // Fully evaluate AST node and children for computed operands.
            {
               operands.push(...ASTParser.parse(parent.key).operands);
            }
         }
         else // Parent is not computed and `parent.key` is an `Identifier` node.
         {
            operands.push(TraitUtil.safeNameOrValue(parent.key));
         }
      }

      // Handle Babylon AST ClassMethod node.
      if (node.type === 'ClassMethod')
      {
         if (typeof node.computed === 'boolean' && node.computed)
         {
            // The following will pick up a single literal computed value (string).
            if (node.key.type === 'StringLiteral')
            {
               operands.push(TraitUtil.safeValue(node.key));
            }
            else // Fully evaluate AST node and children for computed operands.
            {
               operands.push(...ASTParser.parse(node.key).operands);
            }
         }
         else // Parent is not computed and `parent.key` is an `Identifier` node.
         {
            operands.push(TraitUtil.safeNameOrValue(node.key));
         }
      }

      if (operands.length === 0)
      {
         operands.push(TraitUtil.safeName(node.id || node.key));
      }

      return operands;
   }

   /**
    * Provides a utility method that determines the operators of a method for ESTree / Babylon AST nodes. For ESTree the
    * parent node must be accessed for class methods. If the node is computed then `astParse` is invoked to determine
    * the computed operators.
    *
    * Note; ESTree has a parent node which defines the method name with a child FunctionExpression /
    * FunctionDeclaration. Babylon AST only has ClassMethod with a child `key` providing the method name.
    *
    * @param {object}   node - The current AST node.
    * @param {object}   parent - The parent AST node.
    *
    * @returns {Array<*>}
    */
   static safeComputedOperators(node, parent)
   {
      const operators = [];

      // Handle ESTree case.
      if (parent && parent.type === 'MethodDefinition' && typeof parent.computed === 'boolean' && parent.computed)
      {
         operators.push(...ASTParser.parse(parent.key).operators);
      }

      // Handle Babylon AST ClassMethod node.
      if (node.type === 'ClassMethod' && typeof node.computed === 'boolean' && node.computed)
      {
         operators.push(...ASTParser.parse(node.key).operators);
      }

      return operators;
   }

   /**
    * Provides a utility method that defers to `object.name` if it exists or fallback to `defaultName` or `anonymous`.
    *
    * @param {object}   object - The target object to provide safe name coverage.
    * @param {string}   defaultName - A default name to fallback to if `object.name` is missing.
    *
    * @returns {string}
    */
   static safeName(object, defaultName = '')
   {
      if (object !== null && typeof object === 'object' && typeof object.name === 'string' && object.name !== '')
      {
         return object.name;
      }

      if (typeof defaultName === 'string' && defaultName !== '') { return defaultName; }

      return '<anonymous>';
   }

   /**
    * Provides a utility method that defers to `object.name` if it exists then falls back to 'object.value' if it exists
    * or falls back to `defaultNameOrValue` or `anonymous`.
    *
    * @param {object}   object - The target object to provide safe name / value coverage.
    *
    * @param {string}   defaultNameOrValue - A default name / value to fallback to if `object.name` or `object.value` is
    *                                        missing.
    *
    * @returns {string}
    */
   static safeNameOrValue(object, defaultNameOrValue = '')
   {
      if (object !== null && typeof object === 'object')
      {
         if (typeof object.name === 'string' && object.name !== '') { return object.name; }
         if (typeof object.value === 'string' && object.value !== '') { return object.value; }
      }

      if (typeof defaultNameOrValue === 'string' && defaultNameOrValue !== '') { return defaultNameOrValue; }

      return '<anonymous>';
   }

   /**
    * Provides a utility method that defers to `object.value` if it exists or fallback to `defaultValue` or `anonymous`.
    *
    * @param {object}   object - The target object to provide safe name coverage.
    * @param {string}   defaultValue - A default value to fallback to if `object.value` is missing.
    *
    * @returns {string}
    */
   static safeValue(object, defaultValue = '')
   {
      if (object !== null && typeof object === 'object' && typeof object.value === 'string' && object.value !== '')
      {
         return object.value;
      }

      if (typeof defaultValue === 'string' && defaultValue !== '') { return defaultValue; }

      return '<anonymous>';
   }
}
