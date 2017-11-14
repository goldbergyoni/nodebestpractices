import ReportType from '../../../types/ReportType';

/**
 * Provides a format transform for ESComplex ModuleReport / ProjectReport instances converting them to JSON that
 * includes only the `filePath`, `srcPath`, and / or `srcPathAlias` of module report entries.
 */
export default class FormatJSONModules
{
   /**
    * Formats a report as a JSON string with just module data.
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
      let output;

      switch (report.type)
      {
         case ReportType.MODULE:
            output = this._formatModule(report);
            break;

         case ReportType.PROJECT:
            output = this._formatProject(report);
            break;

         default:
            console.warn(`formatReport '${this.name}' warning: unsupported report type '${report.type}'.`);
            return '';
      }

      return typeof options === 'object' && Number.isInteger(options.spacing) ?
       JSON.stringify(output, void 0, options.spacing) : JSON.stringify(output);
   }

   /**
    * Gets the file extension.
    *
    * @returns {string}
    */
   get extension()
   {
      return 'json';
   }

   /**
    * Gets the format name.
    *
    * @returns {string}
    */
   get name()
   {
      return 'json-modules';
   }

   /**
    * Gets the format type.
    *
    * @returns {string}
    */
   get type()
   {
      return 'modules';
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
         case ReportType.MODULE:
         case ReportType.PROJECT:
            return true;

         default:
            return false;
      }
   }

   /**
    * Formats a module report as a JSON string. Please note that the exported JSON only contains data for ModuleReport
    * instances contained in a ProjectReport.
    *
    * @param {ModuleReport}   moduleReport - A module report.

    * @returns {object}
    */
   _formatModule(moduleReport)
   {
      const output = {};

      if (moduleReport.filePath) { output.filePath = moduleReport.filePath; }
      if (moduleReport.srcPath) { output.srcPath = moduleReport.srcPath; }
      if (moduleReport.srcPathAlias) { output.srcPathAlias = moduleReport.srcPathAlias; }

      return output;
   }

   /**
    * Formats a project report modules as a JSON string.
    *
    * @param {ProjectReport}  projectReport - A project report.
    *
    * @returns {object}
    */
   _formatProject(projectReport)
   {
      const output = { modules: [] };

      projectReport.modules.forEach((moduleReport) => { output.modules.push(this._formatModule(moduleReport)); });

      return output;
   }
}