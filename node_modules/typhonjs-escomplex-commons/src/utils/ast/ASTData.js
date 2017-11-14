/**
 * Defines the output data from parsing an AST tree.
 */
export default class ASTData
{
   constructor()
   {
      this.source = '';
      this.operands = [];
      this.operators = [];
   }

   write(string)
   {
      this.source += string;
   }

   toString()
   {
      return this.source;
   }
}