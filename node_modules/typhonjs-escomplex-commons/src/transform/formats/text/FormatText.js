import AbstractFormatText  from './AbstractFormatText';

import ReportType          from '../../../types/ReportType';
import SU                  from '../../../utils/StringUtil';
import TransformFormat     from '../../TransformFormat';

/**
 * Provides a format transform for ModuleReport / ProjectReport instances converting them to plain text.
 */
export default class FormatText extends AbstractFormatText
{
   constructor(headers = {}, keys = {}, adjacencyFormatName = 'text-adjacency',
    visibilityFormatName = 'text-visibility')
   {
      super(Object.assign(Object.assign({}, s_DEFAULT_HEADERS), headers),
       Object.assign(Object.assign({}, s_DEFAULT_KEYS), keys));

      this._adjacencyFormatName = adjacencyFormatName;
      this._visibilityFormatName = visibilityFormatName;
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
      return 'text';
   }

   /**
    * Gets the format type.
    *
    * @returns {string}
    */
   get type()
   {
      return 'full';
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

   /**
    * Formats a project report as plain text.
    *
    * @param {ProjectReport}  projectReport - A project report.
    *
    * @param {object}         options - (Optional) One or more optional parameters passed to the formatter.
    * @property {string}      classReport - An entry key found in the class report to output.
    * @property {string}      methodReport - An entry key found in the method report to output.
    * @property {string}      moduleReport - An entry key found in the module report to output.
    *
    * @returns {string}
    */
   _formatProject(projectReport, options = {})
   {
      let output = super._formatProject(projectReport, options);

      let localOptions = Object.assign({}, this._keys);
      localOptions = Object.assign(localOptions, options);

      const adjacency = typeof localOptions.adjacency === 'boolean' ? localOptions.adjacency : true;
      const visibility = typeof localOptions.visibility === 'boolean' ? localOptions.visibility : true;

      // Add adjacency matrix output
      if (adjacency && TransformFormat.isFormat(this._adjacencyFormatName))
      {
         output += `\n\n${TransformFormat.format(projectReport, this._adjacencyFormatName, options)}`;
      }

      // Add visibility matrix output
      if (visibility && TransformFormat.isFormat(this._visibilityFormatName))
      {
         output += `\n\n${TransformFormat.format(projectReport, this._visibilityFormatName, options)}`;
      }

      return output;
   }

}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Provides shared method data.
 * @type {*[]}
 * @ignore
 */
const s_SHARED_METHOD_DATA =
[
   new SU.SafeEntry('Line start: ',                    'lineStart'),
   new SU.SafeEntry('Line end: ',                      'lineEnd'),
   new SU.SafeEntry('Physical LOC: ',                  'sloc.physical'),
   new SU.SafeEntry('Logical LOC: ',                   'sloc.logical'),
   new SU.SafeEntry('Cyclomatic complexity: ',         'cyclomatic'),
   new SU.SafeEntry('Cyclomatic complexity density: ', 'cyclomaticDensity', 1, '%'),
   new SU.SafeEntry('Halstead difficulty: ',           'halstead.difficulty'),
   new SU.SafeEntry('Halstead volume: ',               'halstead.volume'),
   new SU.SafeEntry('Halstead effort: ',               'halstead.effort'),
   new SU.SafeEntry('Parameter count: ',               'params'),
   new SU.SafeEntry('Error: ',                         'errors')
];

/**
 * Provides shared average method data.
 * @type {*[]}
 * @ignore
 */
const s_SHARED_METHOD_AVERAGE_DATA =
[
   new SU.SafeEntry('Average per-function physical LOC: ',          'methodAverage.sloc.physical'),
   new SU.SafeEntry('Average per-function logical LOC: ',           'methodAverage.sloc.logical'),
   new SU.SafeEntry('Average per-function cyclomatic complexity: ', 'methodAverage.cyclomatic'),
   new SU.SafeEntry('Average per-function cyclomatic density: ',    'methodAverage.cyclomaticDensity', 1, '%'),
   new SU.SafeEntry('Average per-function halstead difficulty: ',   'methodAverage.halstead.difficulty'),
   new SU.SafeEntry('Average per-function halstead volume: ',       'methodAverage.halstead.volume'),
   new SU.SafeEntry('Average per-function halstead effort: ',       'methodAverage.halstead.effort')
];

/**
 * Defines the default headers as text which are inserted via spread into `StringUtil.safeStringsObject`.
 * @type {{classMethod: Array, classReport: Array, methodReport: *[], moduleReport: *[], projectReport: *[]}}
 * @ignore
 */
const s_DEFAULT_KEYS =
{
   classMethod:
   [
      ...s_SHARED_METHOD_DATA
   ],

   classReport:
   [
      new SU.SafeEntry('Line start: ',  'lineStart'),
      new SU.SafeEntry('Line end: ',    'lineEnd'),
      ...s_SHARED_METHOD_AVERAGE_DATA,
      new SU.SafeEntry('Error: ',       'errors')
   ],

   methodReport:
   [
      ...s_SHARED_METHOD_DATA
   ],

   moduleReport:
   [
      new SU.SafeEntry('Total lines: ',                'lineEnd'),
      new SU.SafeEntry('Maintainability index: ',      'maintainability'),
      new SU.SafeEntry('Dependency count: ',           'dependencies.length'),
      ...s_SHARED_METHOD_AVERAGE_DATA,
      new SU.SafeEntry('Error: ',                      'errors')
   ],

   projectReport:
   [
      new SU.SafeEntry('First-order density: ',                        'firstOrderDensity', 1, '%'),
      new SU.SafeEntry('Change cost: ',                                'changeCost', 1, '%'),
      new SU.SafeEntry('Core size: ',                                  'coreSize', 1, '%'),
      new SU.SafeEntry('Average per-module maintainability index: ',   'moduleAverage.maintainability'),
      new SU.SafeEntry('Average per-function physical LOC: ',          'moduleAverage.methodAverage.sloc.physical'),
      new SU.SafeEntry('Average per-function logical LOC: ',           'moduleAverage.methodAverage.sloc.logical'),
      new SU.SafeEntry('Average per-function parameter count: ',       'moduleAverage.methodAverage.params'),
      new SU.SafeEntry('Average per-function cyclomatic complexity: ', 'moduleAverage.methodAverage.cyclomatic'),
      new SU.SafeEntry('Average per-function halstead difficulty: ',   'moduleAverage.methodAverage.halstead.difficulty'),
      new SU.SafeEntry('Average per-function halstead effort: ',       'moduleAverage.methodAverage.halstead.effort'),
      new SU.SafeEntry('Error: ',                                      'errors')
   ]
};

/**
 * Defines the default headers as text which are inserted via spread into `StringUtil.safeStringsObject`.
 * @type {{classMethod: *[], classReport: *[], entryPrepend: string, moduleMethod: *[], moduleReport: string[], projectReport: string[]}}
 * @ignore
 */
const s_DEFAULT_HEADERS =
{
   classMethod:
   [
      '\n',
      new SU.SafeEntry('Class method: ', 'name')
   ],

   classReport:
   [
      '\n',
      new SU.SafeEntry('Class: ', 'name')
   ],

   entryPrepend: '',

   moduleMethod:
   [
      '\n',
      new SU.SafeEntry('Module method: ', 'name')
   ],

   moduleReport:
   [
      '\n',
      new SU.SafeEntry('Module ',             '___modulecntrplus1___', 1, ':'),
      new SU.SafeEntry('   File path: ',      'filePath'),
      new SU.SafeEntry('   Source path: ',    'srcPath'),
      new SU.SafeEntry('   Source alias: ',   'srcPathAlias')
   ],

   projectReport:
   [
      'Project: \n'
   ]
};