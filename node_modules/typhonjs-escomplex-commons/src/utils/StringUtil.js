import ObjectUtil from './ObjectUtil';

/**
 * Provides common string utilities.
 */
export default class StringUtil
{
   /**
    * Compares two strings.
    *
    * @param {string}   lhs - Left-hand side.
    * @param {string}   rhs - Right-hand side.
    *
    * @returns {number}
    */
   static compare(lhs, rhs)
   {
      return lhs.toLowerCase().localeCompare(rhs.toLowerCase());
   }

   /**
    * Increments the indentation amount.
    *
    * @param {number}   indentation - Current indentation amount.
    * @param {number}   amount - (Optional) indentation amount; default: 3.
    *
    * @returns {number}
    */
   static incrementIndent(indentation, amount = 3)
   {
      return indentation + amount;
   }

   /**
    * Creates an indentation string given the indentation amount.
    *
    * @param {number}   indentation - Current indentation amount.
    * @param {string}   string - A string to append.
    *
    * @returns {string}
    */
   static indent(indentation, string = '')
   {
      return (new Array(indentation + 1)).join(' ') + string;
   }

   /**
    * Returns the SafeEntry constructor which is used by `safeStringsObject` and `safeStringsPrependObject`.
    *
    * @returns {SafeEntry}
    */
   static get SafeEntry() { return SafeEntry; }

   /**
    * Provides a way to output a given string value with concatenated data from safely accessing an objects data /
    * entries given an accessor string which describes the entries to walk. To access deeper entries into the object
    * format the accessor string with `.` between entries to walk.
    *
    * @param {string}   string - A string to prepend to the object data received.
    * @param {object}   object - An object to access entry data.
    * @param {string}   accessor - A string describing the entries to access.
    * @param {number}   newLine - (Optional) A number of new line characters to append; default: `1`.
    * @param {string}   appendString - (Optional) A string to potentially append; default: `''`;
    * @param {function} tagFunction - (Optional) A template tag function to apply; default: `void 0`;
    *
    * @returns {string}
    */
   static safeStringObject(string, object, accessor, newLine = 1, appendString = '', tagFunction = void 0)
   {
      const value = ObjectUtil.safeAccess(object, accessor);

      if (typeof value === 'undefined' || (Array.isArray(value) && value.length === 0)) { return ''; }

      let end = '\n';

      // Create the ending new line result if it is not the default of `1`.
      if (newLine === 0 || newLine > 1) { end = new Array(newLine + 1).join('\n'); }

      return typeof tagFunction === 'function' ? tagFunction`${string}${value}${appendString}${end}` :
       `${string}${value}${appendString}${end}`;
   }

   /**
    * Provides a convenience method producing a block of `safeStringObject` results.
    *
    * @param {object}         object - An object to access entry data.
    *
    * @param {string|SafeEntry|Array<string|SafeEntry>} entries -
    *                                  Multiple arrays or strings. If an entry is not a SafeEntry it will
    *                                  simply be appended. If the entry is an array then entries in this array
    *                                  correspond to the following parameters which are forwarded onto
    *                                  `safeStringObject`.
    *
    * @returns {string}
    */
   static safeStringsObject(object, ...entries)
   {
      return StringUtil.safeStringsPrependObject('', object, ...entries);
   }

   /**
    * Provides a convenience method producing a block of `safeStringObject` results with the option to prepend a
    * given string.
    *
    * @param {*}              origPrepend - An additional value to prepend to all results.
    *
    * @param {object}         object - An object to access entry data.
    *
    * @param {string|SafeEntry|Array<string|SafeEntry>} entries -
    *                                  Multiple arrays or strings. If an entry is not a SafeEntry it will
    *                                  simply be appended. If the entry is an array then entries in this array
    *                                  correspond to the following parameters which are forwarded onto
    *                                  `safeStringObject`.
    *
    * @returns {string}
    */
   static safeStringsPrependObject(origPrepend, object, ...entries)
   {
      if (typeof object !== 'object') { return ''; }

      const output = [];

      let skipPrepend = false;

      for (let cntr = 0; cntr < entries.length; cntr++)
      {
         const entry = entries[cntr];

         // Skip prepend action if last entry did not include a new line.
         const prepend = skipPrepend ? '' : origPrepend;

         // Process an array entry otherwise simply append `entry` to output if it is a string.
         if (entry instanceof SafeEntry)
         {
            skipPrepend = entry.newLine === 0;

            output.push(StringUtil.safeStringObject(`${prepend}${entry.prependString}`,
             object, entry.accessor, entry.newLine, entry.appendString, entry.tagFunction));
         }
         else if (typeof entry === 'string' && entry !== '')
         {
            output.push(`${prepend}${entry}`);
         }
         else if (typeof entry.toString === 'function')
         {
            const stringValue = entry.toString();

            if (stringValue !== '')
            {
               output.push(`${prepend}${stringValue}`);
            }
         }
      }

      return output.join('');
   }

   /**
    * Provides a tagged template method to escape HTML elements.
    *
    * @param {Array<string>}  literal - Literal components of template string.
    * @param {Array<*>}       values - Values to substitute.
    *
    * @returns {string}
    */
   static tagEscapeHTML(literal, ...values)
   {
      return values.reduce((previous, value, index) =>
      {
         return previous + String(value).replace(/</g, '&lt;').replace(/>/g, '&gt;') + literal[index + 1];
      }, literal[0]);
   }
}

/**
 * Defines the parameters for a safe string object lookup. If the accessor resolves against a given object then
 * a string is created by combining the prepend / append strings between the value with optional new lines appended
 * at the end. If a template tag function is defined it is applied to the template string.
 */
class SafeEntry
{
   /**
    * Initializes SafeEntry instance.
    *
    * @param {string}   prependString - The string to prepend.
    * @param {string}   accessor - The accessor string describing the lookup operation.
    * @param {number}   newLine - (Optional) The number of newlines characters to append.
    * @param {string}   appendString - (Optional) A string to append to the end.
    * @param {function} tagFunction - (Optional) A template tag function to apply.
    */
   constructor(prependString, accessor, newLine = 1, appendString = '', tagFunction = void 0)
   {
      if (typeof prependString !== 'string') { throw new TypeError(`ctor error: 'prependString' is not a 'string'.`); }
      if (typeof accessor !== 'string') { throw new TypeError(`ctor error: 'accessor' is not a 'string'.`); }
      if (typeof appendString !== 'string') { throw new TypeError(`ctor error: 'appendString' is not a 'string'.`); }

      if (typeof tagFunction !== 'function' && typeof tagFunction !== 'undefined')
      {
         throw new TypeError(`ctor error: 'tagFunction' is not a 'function' or 'undefined'.`);
      }

      if (Number.isInteger(newLine) && newLine < 0)
      {
         throw new TypeError(`ctor error: 'newLine' is not a positive 'integer' (${newLine}).`);
      }

      /**
       * The string to prepend.
       * @type {string}
       * @private
       */
      this._prependString = prependString;

      /**
       * The accessor string describing the lookup operation.
       * @type {string}
       * @private
       */
      this._accessor = accessor;

      /**
       * The number of newlines characters to append.
       * @type {number}
       * @private
       */
      this._newLine = newLine;

      /**
       * A string to append to the end.
       * @type {string}
       * @private
       */
      this._appendString = appendString;

      /**
       * A template tag function to apply.
       * @type {Function}
       * @private
       */
      this._tagFunction = tagFunction;
   }

   /**
    * Returns the accessor string describing the lookup operation.
    * @returns {string}
    */
   get accessor() { return this._accessor; }

   /**
    * Returns a string to append to the end if any.
    * @returns {string}
    */
   get appendString() { return this._appendString; }

   /**
    * Returns the new line count.
    * @returns {number}
    */
   get newLine() { return this._newLine; }

   /**
    * Returns the string to prepend.
    * @returns {string}
    */
   get prependString() { return this._prependString; }

   /**
    * Returns a template tag function to apply if any.
    * @returns {Function}
    */
   get tagFunction() { return this._tagFunction; }
}