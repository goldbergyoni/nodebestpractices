import AbstractFormatTest  from './AbstractFormatText';

import ReportType          from '../../../types/ReportType';
import SU                  from '../../../utils/StringUtil';

/**
 * Provides a format transform for ModuleReport / ProjectReport instances converting them to plain text with just
 * modules.
 */
export default class FormatTextMinimal extends AbstractFormatTest
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
      return 'text-minimal';
   }

   /**
    * Gets the format type.
    *
    * @returns {string}
    */
   get type()
   {
      return 'minimal';
   }

   /**
    * Returns whether a given ReportType is supported by this format transform.
    *
    * @param {ReportType}  reportType - A given report type.
    *
    * @returns {boolean}
    */
   isSupported(reportType)
   {
      switch (reportType)
      {
         case ReportType.CLASS:
         case ReportType.CLASS_METHOD:
         case ReportType.MODULE_METHOD:
         case ReportType.MODULE:
         case ReportType.PROJECT:
            return true;

         default:
            return false;
      }
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Defines the default keys to include in a minimal text representation of class, class method, module method, module,
 * project reports.
 * @type {{classReport: string[], methodReport: string[], moduleReport: string[], projectReport: string[]}}
 * @ignore
 */
const s_DEFAULT_KEYS =
{
   classReport: ['maintainability', 'errors'],
   methodReport: ['cyclomatic', 'halstead.difficulty', 'errors'],
   moduleReport: ['maintainability', 'errors'],
   projectReport: ['moduleAverage.maintainability', 'errors']
};

/**
 * Defines the default headers as text which are inserted via spread into `StringUtil.safeStringsObject`.
 * @type {{classMethod: *[], classReport: *[], entryPrepend: string, moduleMethod: *[], moduleReport: *[], projectReport: string[]}}
 * @ignore
 */
const s_DEFAULT_HEADERS =
{
   classMethod:
   [
      new SU.SafeEntry('Class method: ', 'name', 0),
      new SU.SafeEntry(' (', 'lineStart', 1, ')')
   ],

   classReport:
   [
      new SU.SafeEntry('Class: ', 'name', 0),
      new SU.SafeEntry(' (', 'lineStart', 1, ')')
   ],

   entryPrepend: '',

   moduleMethod:
   [
      new SU.SafeEntry('Module method: ', 'name', 0),
      new SU.SafeEntry(' (', 'lineStart', 1, ')')
   ],

   moduleReport:
   [
      '\n',
      new SU.SafeEntry('Module ', '___modulecntrplus1___', 1, ':'),
      new SU.SafeEntry('   filePath: ', 'filePath', 1),
      new SU.SafeEntry('   srcPath: ', 'srcPath', 1),
      new SU.SafeEntry('   srcPathAlias: ', 'srcPathAlias', 1)
   ],

   projectReport:
   [
      'Project:\n'
   ]
};
