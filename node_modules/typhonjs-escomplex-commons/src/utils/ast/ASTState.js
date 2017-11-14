import ASTData    from './ASTData';

import astSyntax  from './astSyntax';

export default class ASTState
{
   /**
    * Creates an instance of ASTState.
    *
    * @param {object}      options - Optional parameters for source code formatting.
    * @property {string}   indent - A string to use for indentation (defaults to `\t`)
    * @property {string}   lineEnd - A string to use for line endings (defaults to `\n`)
    * @property {number}   startingIndentLevel - indent level to start from (default to `0`)
    */
   constructor(options = {})
   {
      if (typeof options !== 'object') { throw new TypeError(`ctor error: 'options' is not an 'object'.`); }

      this.output = new ASTData();

      // Assign the syntax
      this.generator = astSyntax;

      // Formatting options
      this.indent = typeof options.indent === 'string' ? options.indent : '\t';

      this.lineEnd = typeof options.lineEnd === 'string' ? options.lineEnd : '\n';

      this.indentLevel = Number.isInteger(options.startingIndentLevel) ? options.startingIndentLevel : 0;

      // Internal state
      this.noTrailingSemicolon = false;
   }
}