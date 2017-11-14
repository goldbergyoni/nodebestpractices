import FormatJSON                from './formats/json/FormatJSON';
import FormatJSONCheckstyle      from './formats/json/FormatJSONCheckstyle';
import FormatJSONMinimal         from './formats/json/FormatJSONMinimal';
import FormatJSONModules         from './formats/json/FormatJSONModules';
import FormatMarkdown            from './formats/markdown/FormatMarkdown';
import FormatMarkdownAdjacency   from './formats/markdown/FormatMarkdownAdjacency';
import FormatMarkdownMinimal     from './formats/markdown/FormatMarkdownMinimal';
import FormatMarkdownModules     from './formats/markdown/FormatMarkdownModules';
import FormatMarkdownVisibility  from './formats/markdown/FormatMarkdownVisibility';
import FormatText                from './formats/text/FormatText';
import FormatTextAdjacency       from './formats/text/FormatTextAdjacency';
import FormatTextMinimal         from './formats/text/FormatTextMinimal';
import FormatTextModules         from './formats/text/FormatTextModules';
import FormatTextVisibility      from './formats/text/FormatTextVisibility';

import ReportType                from '../types/ReportType';

/**
 * Stores all transform formats.
 * @type {Map<string>, object}
 * @ignore
 */
const s_FORMATTERS = new Map();

export default class TransformFormat
{
   /**
    * Adds a formatter to the static Map by type: `format.type`.
    *
    * @param {object}   format - An instance of an object conforming to the module / project transform format API.
    */
   static addFormat(format)
   {
      if (typeof format !== 'object') { throw new TypeError(`addFormat error: 'format' is not an 'object'.`); }

      if (typeof format.name !== 'string')
      {
         throw new TypeError(`addFormat error: 'format.name' is not a 'string'.`);
      }

      if (typeof format.extension !== 'string')
      {
         throw new TypeError(`addFormat error: 'format.extension' is not a 'string' for '${format.name}'.`);
      }

      if (typeof format.type !== 'string')
      {
         throw new TypeError(`addFormat error: 'format.type' is not a 'string' for '${format.name}'.`);
      }

      if (typeof format.formatReport !== 'function')
      {
         throw new TypeError(`addFormat error: 'format.formatReport' is not a 'function' for '${format.name}'.`);
      }

      if (typeof format.isSupported !== 'function')
      {
         throw new TypeError(`addFormat error: 'format.isSupported' is not a 'function' for '${format.name}'.`);
      }

      s_FORMATTERS.set(format.name, format);
   }

   /**
    * Invokes the callback for each stored formatter.
    *
    * @param {function} callback - A callback function.
    * @param {object}   thisArg - (Optional) this context.
    */
   static forEach(callback, thisArg = void 0)
   {
      s_FORMATTERS.forEach(callback, thisArg);
   }

   /**
    * Provides a `forEach` variation that invokes the callback if the given extension matches that of a stored
    * formatter.
    *
    * @param {string}   extension - A format extension.
    * @param {function} callback - A callback function.
    * @param {object}   thisArg - (Optional) this context.
    */
   static forEachExt(extension, callback, thisArg = void 0)
   {
      for (const format of s_FORMATTERS.values())
      {
         if (format.extension === extension) { callback.call(thisArg, format, format.name); }
      }
   }

   /**
    * Provides a `forEach` variation that invokes the callback if the given type matches that of a stored
    * formatter.
    *
    * @param {string}   type - A format type.
    * @param {function} callback - A callback function.
    * @param {object}   thisArg - (Optional) this context.
    */
   static forEachType(type, callback, thisArg = void 0)
   {
      for (const format of s_FORMATTERS.values())
      {
         if (format.type === type) { callback.call(thisArg, format, format.name); }
      }
   }

   /**
    * Formats a given ModuleReport or ProjectReport via the formatter of the requested type.
    *
    * @param {ClassReport|MethodReport|ModuleReport|ProjectReport} report - A report to format.
    *
    * @param {string}                     name - The name of formatter to invoke.
    *
    * @param {object}                     options - (Optional) One or more optional parameters to pass to the formatter.
    *
    * @returns {string}
    */
   static format(report, name, options = void 0)
   {
      const formatter = s_FORMATTERS.get(name);

      if (typeof formatter === 'undefined') { throw new Error(`format error: unknown formatter name '${name}'.`); }

      switch (report.type)
      {
         case ReportType.CLASS:
         case ReportType.CLASS_METHOD:
         case ReportType.MODULE_METHOD:
         case ReportType.MODULE:
         case ReportType.PROJECT:
            return formatter.formatReport(report, options);

         default:
            throw new TypeError(`format error: unknown report type '${report.type}'.`);
      }
   }

   /**
    * Returns the supported format file extension types.
    *
    * @param {ReportType}  reportType - (Optional) A ReportType to filter supported formats.
    *
    * @returns {string[]}
    */
   static getFormats(reportType = void 0)
   {
      // Return all file extensions
      if (typeof reportType === 'undefined')
      {
         return Array.from(s_FORMATTERS.values());
      }

      if (!(reportType instanceof ReportType))
      {
         throw new TypeError(`getFormats error: 'reportType' is not an instance of 'ReportType'.`);
      }

      // Return a filtered array of formats that are supported by the given ReportType.
      return Array.from(s_FORMATTERS.values()).filter((format) => format.isSupported(reportType));
   }

   /**
    * Returns whether a given formatter by name is available.
    *
    * @param {string}   name - The name of the formatter: `format.name`.
    *
    * @returns {boolean}
    */
   static isFormat(name)
   {
      return s_FORMATTERS.has(name);
   }

   /**
    * Returns whether a given formatter by name is supports a given report.
    *
    * @param {string}      name - The name of the formatter: `format.name`.
    *
    * @param {ReportType}  reportType - A ReportType to check for support.
    *
    * @returns {boolean}
    */
   static isSupported(name, reportType)
   {
      if (!s_FORMATTERS.has(name)) { return false; }

      return s_FORMATTERS.get(name).isSupported(reportType);
   }

   /**
    * Removes a formatter from the static Map by name.
    *
    * @param {string}   name - The name of the formatter: `format.name`.
    */
   static removeFormat(name)
   {
      s_FORMATTERS.delete(name);
   }
}

/**
 * Load all integrated format transforms.
 */
TransformFormat.addFormat(new FormatJSON());
TransformFormat.addFormat(new FormatJSONCheckstyle());
TransformFormat.addFormat(new FormatJSONMinimal());
TransformFormat.addFormat(new FormatJSONModules());
TransformFormat.addFormat(new FormatMarkdown());
TransformFormat.addFormat(new FormatMarkdownAdjacency());
TransformFormat.addFormat(new FormatMarkdownMinimal());
TransformFormat.addFormat(new FormatMarkdownModules());
TransformFormat.addFormat(new FormatMarkdownVisibility());
TransformFormat.addFormat(new FormatText());
TransformFormat.addFormat(new FormatTextAdjacency());
TransformFormat.addFormat(new FormatTextMinimal());
TransformFormat.addFormat(new FormatTextModules());
TransformFormat.addFormat(new FormatTextVisibility());
