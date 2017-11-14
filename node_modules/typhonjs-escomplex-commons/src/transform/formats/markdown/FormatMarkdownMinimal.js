import FormatTextMinimal   from '../text/FormatTextMinimal';

import SU                  from '../../../utils/StringUtil';

/**
 * Provides a format transform for ModuleReport / ProjectReport instances converting them to markdown with
 * minimal metrics.
 */
export default class FormatMarkdownMinimal extends FormatTextMinimal
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
      return 'markdown-minimal';
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Defines the default headers as markdown which are inserted via spread into `StringUtil.safeStringsObject`.
 * @type {{classMethod: *[], classReport: *[], entryPrepend: string, moduleMethod: *[], moduleReport: *[], projectReport: string[]}}
 * @ignore
 */
const s_DEFAULT_HEADERS =
{
   classMethod:
   [
      new SU.SafeEntry('* Class method: **', 'name', 0, '', SU.tagEscapeHTML),
      new SU.SafeEntry('** (', 'lineStart', 1, ')')
   ],

   classReport:
   [
      new SU.SafeEntry('* Class: **', 'name', 0, '', SU.tagEscapeHTML),
      new SU.SafeEntry('** (', 'lineStart', 1, ')')
   ],

   entryPrepend: '* ',

   entryTemplateTag: SU.tagEscapeHTML,

   moduleMethod:
   [
      new SU.SafeEntry('* Module method: **', 'name', 0, '', SU.tagEscapeHTML),
      new SU.SafeEntry('** (', 'lineStart', 1, ')')
   ],

   moduleReport:
   [
      '\n',
      new SU.SafeEntry('* Module ',             '___modulecntrplus1___', 1, ':'),
      new SU.SafeEntry('   * filePath: `',      'filePath', 1, '`'),
      new SU.SafeEntry('   * srcPath: `',       'srcPath', 1, '`'),
      new SU.SafeEntry('   * srcPathAlias: `',  'srcPathAlias', 1, '`')
   ],

   projectReport:
   [
      '* Project:\n'
   ]
};
