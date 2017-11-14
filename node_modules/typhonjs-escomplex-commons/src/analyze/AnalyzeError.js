import ReportType    from '../types/ReportType';

/**
 * Provides a wrapper for analysis errors stored in the `errors` array for each report type.
 */
export default class AnalyzeError
{
   /**
    * Initializes an instance.
    *
    * @param {string}   severity - Provides the severity level.
    * @param {string}   message - Provides the error message.
    * @param {ClassMethodReport|ClassReport|ModuleMethodReport|ModuleReport|ProjectReport} sourceReport -
    *                   The source report of the error.
    */
   constructor(severity = '<unknown>', message = '', sourceReport = void 0)
   {
      /**
       * Provides the line number where the error starts.
       * @type {number}
       */
      this.lineStart = typeof sourceReport === 'object' ? sourceReport.lineStart : 0;

      /**
       * Provides the line number where the error starts.
       * @type {number}
       */
      this.lineEnd = typeof sourceReport === 'object' ? sourceReport.lineEnd : 0;

      /**
       * Provides the severity level.
       * @type {string}
       */
      this.severity = severity;

      /**
       * Provides the error message.
       * @type {string}
       */
      this.message = message;

      /**
       * Attempt to find the `name` then try `srcPath` for modules.
       */
      this.name = typeof sourceReport === 'object' ? sourceReport.getName() : '';

      /**
       * Provides a type of report where the error is found.
       * @type {string}
       */
      this.type = typeof sourceReport === 'object' ? sourceReport.type : void 0;
   }

   /**
    * Deserializes a JSON object representing a AnalyzeError.
    *
    * @param {object}   object - A JSON object of a AnalyzeError that was previously serialized.
    *
    * @returns {AnalyzeError}
    */
   static parse(object)
   {
      /* istanbul ignore if */
      if (typeof object !== 'object') { throw new TypeError(`parse error: 'object' is not an 'object'.`); }

      const error = Object.assign(new AnalyzeError(), object);

      // Deserialize the associated enum type.
      error.type = ReportType.enumValueOf(object.type.name);

      return error;
   }

   /**
    * Returns a verbose string about the error.
    * @returns {string}
    */
   toString()
   {
      return `(${this.severity}) ${this.message} @ ${this.type.description} ${this.name !== '' ? `- ${this.name} ` :
       ''}(${this.lineStart} - ${this.lineEnd})`;
   }
}