import expressionPrecedence   from './expressionPrecedence';
import operatorPrecedence     from './operatorPrecedence';

export default class ASTUtil
{
   /**
    * Formats a sequence of `nodes`.
    *
    * @param {Array<object>}  nodes - A sequence of AST nodes.
    * @param {object}         state -
    * @param {object}         traveler -
    */
   static formatSequence(nodes, state, traveler)
   {
      const { output } = state;

      output.write('(');

      if (Array.isArray(nodes) && nodes.length > 0)
      {
         traveler[nodes[0].type](nodes[0], state);

         for (let i = 1; i < nodes.length; i++)
         {
            output.write(', ');

            const param = nodes[i];
            traveler[param.type](param, state);
         }
      }

      output.write(')');
   }

   /**
    * Formats into the `output` stream a left-hand or right-hand expression `node` from a binary expression applying the
    * provided `operator`. The `isRightHand` parameter should be `true` if the `node` is a right-hand argument.
    *
    * @param {object}   node - An AST node.
    * @param {object}   parentNode - The AST parent node.
    * @param {boolean}  isRightHand - Represents a right-hand target when true.
    * @param {object}   state -
    * @param {object}   traveler -
    */
   static formatBinaryExpressionPart(node, parentNode, isRightHand, state, traveler)
   {
      const nodePrecedence = expressionPrecedence[node.type];
      const parentNodePrecedence = expressionPrecedence[parentNode.type];

      if (nodePrecedence > parentNodePrecedence)
      {
         traveler[node.type](node, state);
         return;
      }
      else if (nodePrecedence === parentNodePrecedence)
      {
         if (nodePrecedence === 13 || nodePrecedence === 14)
         {
            // Either `LogicalExpression` or `BinaryExpression`
            if (isRightHand)
            {
               if (operatorPrecedence[node.operator] > operatorPrecedence[parentNode.operator])
               {
                  traveler[node.type](node, state);
                  return;
               }
            }
            else
            {
               if (operatorPrecedence[node.operator] >= operatorPrecedence[parentNode.operator])
               {
                  traveler[node.type](node, state);
                  return;
               }
            }
         }
         else
         {
            traveler[node.type](node, state);
            return;
         }
      }

      state.output.write('(');
      traveler[node.type](node, state);
      state.output.write(')');
   }

   /**
    * Returns `true` if the provided `node` contains a call expression and `false` otherwise.
    *
    * @param {object}   node - An AST node.
    *
    * @returns {boolean}
    */
   static hasCallExpression(node)
   {
      while (typeof node === 'object')
      {
         const { type } = node;

         if (type[0] === 'C' && type[1] === 'a')
         {
            return true;         // Is CallExpression
         }
         else if (type[0] === 'M' && type[1] === 'e' && type[2] === 'm')
         {
            node = node.object;  // Is MemberExpression
         }
         else
         {
            return false;
         }
      }
   }
}