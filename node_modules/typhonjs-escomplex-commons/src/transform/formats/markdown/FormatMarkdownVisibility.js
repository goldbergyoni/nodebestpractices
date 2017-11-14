import FormatTextVisibility from '../text/FormatTextVisibility';

/**
 * Provides a format transform for ModuleReport / ProjectReport instances converting a matrix list into markdown.
 */
export default class FormatMarkdownVisibility extends FormatTextVisibility
{
   constructor(headers = {}, keys = {})
   {
      super(Object.assign(Object.assign({}, s_DEFAULT_HEADERS), headers), keys);
   }

   /**
    * Gets the file extension.
    *
    * @returns {string}
    */
   get extension()
   {
      return 'md';
   }

   /**
    * Gets the format name.
    *
    * @returns {string}
    */
   get name()
   {
      return 'markdown-visibility';
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Defines the default headers added to any output strings..
 * @type {{entryPrepend: string, entryWrapper: string, textHeader: string}}
 * @ignore
 */
const s_DEFAULT_HEADERS =
{
   entryPrepend: '* ',
   entryWrapper: '`',
   textHeader: '* Visibility (reverse dependents / numerical indices correspond to ProjectReport modules / reports):\n'
};
