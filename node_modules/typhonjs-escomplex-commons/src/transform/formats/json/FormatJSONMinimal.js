import ObjectUtil from '../../../utils/ObjectUtil';
import ReportType from '../../../types/ReportType';

/**
 * Provides a format transform for ESComplex ModuleReport / ProjectReport instances converting them to JSON with
 * minimal metrics.
 */
export default class FormatJSONMinimal
{
   constructor(keys = s_DEFAULT_KEYS)
   {
      this._keys = keys;
   }

   /**
    * Formats a report as a JSON string with minimal metrics.
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
      let localOptions = Object.assign({}, this._keys);
      localOptions = Object.assign(localOptions, options);

      let output;

      switch (report.type)
      {
         case ReportType.CLASS:
            output = this._formatClass(report, localOptions);
            break;

         case ReportType.CLASS_METHOD:
         case ReportType.MODULE_METHOD:
            output = this._formatMethod(report, localOptions);
            break;

         case ReportType.MODULE:
            output = this._formatModule(report, true, localOptions);
            break;

         case ReportType.PROJECT:
            output = this._formatProject(report, localOptions);
            break;

         default:
            console.warn(`formatReport '${this.name}' warning: unsupported report type '${report.type}'.`);
            return '';
      }

      return typeof localOptions === 'object' && Number.isInteger(localOptions.spacing) ?
       JSON.stringify(output, void 0, localOptions.spacing) : JSON.stringify(output);
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
      return 'json-minimal';
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

   /**
    * Formats a module reports methods array.
    *
    * @param {ClassReport} classReport - A ClassReport instance to format.
    *
    * @param {object}      options - (Optional) One or more optional parameters passed to the formatter.
    * @property {string}   classReport - An entry key found in the class report to output.
    * @property {string}   methodReport - An entry key found in the method report to output.
    *
    * @returns {object}
    */
   _formatClass(classReport, options)
   {
      const entry = {};

      if (classReport.name) { entry.name = classReport.name; }
      if (classReport.lineStart) { entry.lineStart = classReport.lineStart; }
      if (classReport.lineEnd) { entry.lineEnd = classReport.lineEnd; }

      if (Array.isArray(options.classReport))
      {
         options.classReport.forEach((classEntry) =>
         {
            const entryValue = ObjectUtil.safeAccess(classReport, classEntry);
            if (entryValue) { ObjectUtil.safeSet(entry, classEntry, entryValue); }
         });
      }

      entry.methods = classReport.methods.map((methodReport) => this._formatMethod(methodReport, options));

      return entry;
   }

   /**
    * Formats a module or class reports methods array.
    *
    * @param {MethodReport}   methodReport - A method report instance to format.
    *
    * @param {object}         options - (Optional) One or more optional parameters passed to the formatter.
    * @property {string}      methodReport - An entry key found in the method report to output.
    *
    * @returns {object}
    */
   _formatMethod(methodReport, options)
   {
      const entry = {};

      if (methodReport.name) { entry.name = methodReport.name; }
      if (methodReport.lineStart) { entry.lineStart = methodReport.lineStart; }
      if (methodReport.lineEnd) { entry.lineEnd = methodReport.lineEnd; }

      if (Array.isArray(options.methodReport))
      {
         options.methodReport.forEach((methodEntry) =>
         {
            const entryValue = ObjectUtil.safeAccess(methodReport, methodEntry);
            if (entryValue) { ObjectUtil.safeSet(entry, methodEntry, entryValue); }
         });
      }

      return entry;
   }

   /**
    * Formats a module report.
    *
    * @param {ModuleReport}   report - A module report.
    *
    * @param {boolean}        reportsAvailable - Indicates that the report metric data is available.
    *
    * @param {object}         options - (Optional) One or more optional parameters passed to the formatter.
    * @property {string}      classReport - An entry key found in the class report to output.
    * @property {string}      methodReport - An entry key found in the method report to output.
    * @property {string}      moduleReport - An entry key found in the module report to output.
    *
    * @returns {object}
    */
   _formatModule(report, reportsAvailable, options)
   {
      const output = {};

      if (reportsAvailable)
      {
         if (report.filePath) { output.filePath = report.filePath; }
         if (report.srcPath) { output.srcPath = report.srcPath; }
         if (report.srcPathAlias) { output.srcPathAlias = report.srcPathAlias; }
         if (report.lineStart) { output.lineStart = report.lineStart; }
         if (report.lineEnd) { output.lineEnd = report.lineEnd; }

         if (Array.isArray(options.moduleReport))
         {
            options.moduleReport.forEach((moduleEntry) =>
            {
               const entryValue = ObjectUtil.safeAccess(report, moduleEntry);
               if (entryValue) { ObjectUtil.safeSet(output, moduleEntry, entryValue); }
            });
         }

         output.classes = report.classes.map((classReport) => this._formatClass(classReport, options));
         output.methods = report.methods.map((methodReport) => this._formatMethod(methodReport, options));
      }
      else
      {
         if (report.filePath) { output.filePath = report.filePath; }
         if (report.srcPath) { output.srcPath = report.srcPath; }
         if (report.srcPathAlias) { output.srcPathAlias = report.srcPathAlias; }
         if (report.lineStart) { output.lineStart = report.lineStart; }
         if (report.lineEnd) { output.lineEnd = report.lineEnd; }

         output.classes = [];
         output.methods = [];
      }

      return output;
   }

   /**
    * Formats a project report with minimal metrics.
    *
    * @param {ProjectReport}     report - A project report.
    *
    * @param {object}            options - (Optional) One or more optional parameters passed to the formatter.
    * @property {Array<string>}  classReport - An array of entry keys found in the class report to output.
    * @property {Array<string>}  methodReport - An array of entry keys found in the method report to output.
    * @property {Array<string>}  moduleReport - An array of entry keys found in the module report to output.
    * @property {Array<string>}  projectReport - An array of entry keys found in the project report to output.
    *
    * @returns {object}
    */
   _formatProject(report, options)
   {
      const output = {};

      if (Array.isArray(options.projectReport))
      {
         options.projectReport.forEach((projectEntry) =>
         {
            const entryValue = ObjectUtil.safeAccess(report, projectEntry);
            if (entryValue) { ObjectUtil.safeSet(output, projectEntry, entryValue); }
         });
      }

      output.modules = [];

      const reportsAvailable = report.getSetting('serializeModules', false);

      report.modules.forEach((report) =>
      {
         output.modules.push(this._formatModule(report, reportsAvailable, options));
      });

      return output;
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Defines the default keys to include in a minimal JSON representation of class / class method/ module method /
 * module / project reports.
 * @type {{classReport: string[], methodReport: string[], moduleReport: string[]}}
 * @ignore
 */
const s_DEFAULT_KEYS =
{
   classReport: ['maintainability', 'errors'],
   methodReport: ['cyclomatic', 'halstead.difficulty', 'errors'],
   moduleReport: ['maintainability', 'errors'],
   projectReport: ['changeCost', 'errors']
};
