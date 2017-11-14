import ObjectUtil from '../../../utils/ObjectUtil';
import ReportType from '../../../types/ReportType';

/**
 * Provides the base text format transform for ProjectReport matrix list entries.
 */
export default class AbstractTextMatrix
{
   /**
    * Initializes instance storing default headers / keys.
    *
    * @param {object}      headers - An object hash containing the following entries.
    * @property {string}   entryPrepend - A string to prepend all entries.
    * @property {string}   entryWrapper - A string to wrap output entries between.
    * @property {string}   textHeader - A string to prepend output providing a leading header.
    *
    * @param {object}      keys - An object hash containing the following entries.
    * @property {boolean}  matrixFilePath - If true the module `filePath` is serialized.
    * @property {string}   matrixList - An entry key to lookup a given matrix list in a ProjectReport.
    * @property {boolean}  zeroIndex - If true module report indexes are zero indexed.
    */
   constructor(headers = {}, keys = {})
   {
      this._headers = headers;
      this._keys = keys;
   }

   /**
    * Formats a report as plain text.
    *
    * @param {ClassReport|MethodReport|ModuleReport|ProjectReport} report - A report to format.
    *
    * @param {object}         options - (Optional) One or more optional parameters passed to the formatter.
    * @property {number}      spacing - (Optional) An integer defining the JSON output spacing.
    *
    * @returns {string}
    */
   formatReport(report, options = {})
   {
      switch (report.type)
      {
         case ReportType.PROJECT:
            return this._formatProject(report, options);

         default:
            console.warn(`formatReport '${this.name}' warning: unsupported report type '${report.type}'.`);
            return '';
      }
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
         case ReportType.PROJECT:
            return true;

         default:
            return false;
      }
   }

   /**
    * Formats a matrix list stored in a ProjectReport.
    *
    * @param {ProjectReport}  projectReport - A project report.
    *
    * @param {object}      options - (Optional) An object hash containing the following entries.
    * @property {boolean}  matrixFilePath - If true the module `filePath` is serialized.
    * @property {string}   matrixList - An entry key to lookup a given matrix list in a ProjectReport.
    * @property {boolean}  zeroIndex - If true module report indexes are zero indexed.
    *
    * @returns {string}
    * @private
    */
   _formatProject(projectReport, options = {})
   {
      let localOptions = Object.assign({}, this._keys);
      localOptions = Object.assign(localOptions, options);

      const matrixList = ObjectUtil.safeAccess(projectReport, localOptions.matrixList);

      /* istanbul ignore if */
      if (!Array.isArray(matrixList))
      {
         throw new TypeError(`formatProject error: could not locate matrixList '${localOptions.matrixList}'.`);
      }

      /* istanbul ignore if */
      if (!Array.isArray(projectReport.modules))
      {
         throw new TypeError(`formatProject error: could not locate 'projectReport.modules'.`);
      }

      /* istanbul ignore if */
      if (typeof this._headers.entryPrepend !== 'string')
      {
         throw new TypeError(`formatProject error: 'this._headers.entryPrepend' is not a 'string'.`);
      }

      /* istanbul ignore if */
      if (typeof this._headers.entryWrapper !== 'string')
      {
         throw new TypeError(`formatProject error: 'this._headers.entryWrapper' is not a 'string'.`);
      }

      let output = '';

      // Add any defined text header.
      if (typeof this._headers.textHeader === 'string') { output += this._headers.textHeader; }

      output += this._formatMatrixList(projectReport, matrixList, localOptions);

      return output;
   }

   /**
    * Returns a string representing the adjacency relationships by printing out the report index followed by
    * dependent ModuleReport indices / `srcPaths`.
    *
    * @param {ProjectReport}                          projectReport - A project report containing the matrix list.
    *
    * @param {Array<{row: number, cols: number[]}>}   matrixList - The matrix list to be serialized.
    *
    * @param {object}                                 options - (Optional) An object hash of options.
    * @property {boolean}                             zeroIndex - If true module report indexes are zero indexed.
    * @property {boolean}                             matrixFilePath - If true the module `filePath` is serialized.
    *
    * @returns {string}
    * @private
    */
   _formatMatrixList(projectReport, matrixList, options)
   {
      let output = '';

      const plus1 = typeof options.zeroIndex === 'boolean' && options.zeroIndex ? 0 : 1;
      const path = typeof options.matrixFilePath === 'boolean' && options.matrixFilePath ? 'filePath' : 'srcPath';

      const entryPrepend = this._headers.entryPrepend;
      const entryWrapper = this._headers.entryWrapper;

      matrixList.forEach((entry) =>
      {
         output += `${entryPrepend}${entry.row + plus1}:\t${entryWrapper}${ObjectUtil.safeAccess(
          projectReport.modules[entry.row], path, 'unknown')}${entryWrapper}\n`;

         entry.cols.forEach((colIndex) =>
         {
            output += `\t${entryPrepend}${colIndex + plus1}:\t${entryWrapper}${ObjectUtil.safeAccess(
             projectReport.modules[colIndex], path, 'unknown')}${entryWrapper}\n`;
         });

         output += '\n';
      });

      return output;
   }
}