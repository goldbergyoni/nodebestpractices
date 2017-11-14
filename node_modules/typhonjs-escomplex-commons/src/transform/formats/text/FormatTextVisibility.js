import AbstractTextMatrix  from './AbstractTextMatrix';

/**
 * Provides a format transform for ModuleReport / ProjectReport instances converting a matrix list into plain text.
 */
export default class FormatTextVisibility extends AbstractTextMatrix
{
   constructor(headers = {}, keys = {})
   {
      super(Object.assign(Object.assign({}, s_DEFAULT_HEADERS), headers),
       Object.assign(Object.assign({}, s_DEFAULT_KEYS), keys));
   }

   /**
    * Gets the file extension.
    *
    * @returns {string}
    */
   get extension()
   {
      return 'txt';
   }

   /**
    * Gets the format name.
    *
    * @returns {string}
    */
   get name()
   {
      return 'text-visibility';
   }

   /**
    * Gets the format type.
    *
    * @returns {string}
    */
   get type()
   {
      return 'visibility';
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Defines the default matrix list key accessed.
 * @type {{matrixList: string}}
 * @ignore
 */
const s_DEFAULT_KEYS =
{
   matrixList: 'visibilityList'
};

/**
 * Defines the default headers added to any output strings..
 * @type {{entryPrepend: string, entryWrapper: string, textHeader: string}}
 * @ignore
 */
const s_DEFAULT_HEADERS =
{
   entryPrepend: '',
   entryWrapper: '',
   textHeader: 'Visibility (reverse dependents / numerical indices correspond to ProjectReport modules):\n'
};
