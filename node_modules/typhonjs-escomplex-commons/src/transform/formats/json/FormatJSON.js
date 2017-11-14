/**
 * Provides a format transform for ESComplex report instances converting them to a JSON string.
 */
export default class FormatJSON
{
   /**
    * Formats a report as a JSON string.
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
      return typeof options === 'object' && Number.isInteger(options.spacing) ?
       JSON.stringify(report, void 0, options.spacing) : JSON.stringify(report);
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
      return 'json';
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
    * @returns {boolean}
    */
   isSupported()
   {
      return true;
   }
}