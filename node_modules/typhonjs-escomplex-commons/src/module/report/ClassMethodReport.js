import MethodReport     from './MethodReport';

import ReportType       from '../../types/ReportType';
import TransformFormat  from '../../transform/TransformFormat';

/**
 * Provides the class method report object which stores data pertaining to a single method / function.
 */
export default class ClassMethodReport extends MethodReport
{
   /**
    * Returns the enum for the report type.
    * @returns {CLASS_METHOD}
    */
   get type() { return ReportType.CLASS_METHOD; }

   /**
    * Returns the supported transform formats.
    *
    * @returns {Object[]}
    */
   static getFormats()
   {
      return TransformFormat.getFormats(ReportType.CLASS_METHOD);
   }

   /**
    * Deserializes a JSON object representing a ClassMethodReport.
    *
    * @param {object}   object - A JSON object of a ClassMethodReport that was previously serialized.
    *
    * @returns {ClassMethodReport}
    */
   static parse(object) { return this._parse(new ClassMethodReport(), object); }
}
