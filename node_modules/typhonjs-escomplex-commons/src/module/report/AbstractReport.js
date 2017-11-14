import TransformFormat  from '../../transform/TransformFormat';

/**
 * Provides several helper methods to work with method oriented data stored as `this.methodAggregate` in `ClassReport` /
 * `ModuleReport` and directly in `ClassMethodReport` / `ModuleMethodReport`.
 */
export default class AbstractReport
{
   /**
    * If given assigns the method report to an internal variable. This is used by `ClassReport` and `ModuleReport`
    * which stores a `AggregateMethodReport` respectively in `this.methodAggregate`.
    *
    * @param {AggregateMethodReport}   aggregateMethodReport - An AggregateMethodReport to associate with this report.
    */
   constructor(aggregateMethodReport = void 0)
   {
      /**
       * Stores any associated `AggregateMethodReport`.
       * @type {AggregateMethodReport}
       */
      this.methodAggregate = aggregateMethodReport;
   }

   /**
    * Returns the associated `AggregateMethodReport` or `this`. Both ClassReport and ModuleReport have an
    * `methodAggregate` AggregateMethodReport.
    *
    * @returns {AggregateMethodReport}
    */
   get aggregateMethodReport() { return typeof this.methodAggregate !== 'undefined' ? this.methodAggregate : this; }

   /**
    * Increments the associated aggregate report HalsteadData for distinct identifiers.
    *
    * @param {string}   metric - A Halstead metric name.
    * @param {string}   identifier - A Halstead identifier name.
    */
   incrementDistinctHalsteadItems(metric, identifier)
   {
      if (this.isHalsteadMetricDistinct(metric, identifier))
      {
         this.aggregateMethodReport.halstead[metric].identifiers.push(identifier);

         this.incrementHalsteadMetric(metric, 'distinct');
      }
   }

   /**
    * Increments the associated aggregate report Halstead items including distinct and total counts.
    *
    * @param {string}   metric - A Halstead metric name.
    * @param {string}   identifier - A Halstead identifier name.
    */
   incrementHalsteadItems(metric, identifier)
   {
      this.incrementDistinctHalsteadItems(metric, identifier);

      // Increment total halstead items
      this.incrementHalsteadMetric(metric, 'total');
   }

   /**
    * Increments the associated aggregate report Halstead metric type.
    *
    * @param {string}   metric - A Halstead metric name.
    * @param {string}   type - A Halstead metric type.
    */
   incrementHalsteadMetric(metric, type)
   {
      this.aggregateMethodReport.halstead[metric][type] += 1;
   }

   /**
    * Increments the associated aggregate report parameter count.
    *
    * @param {number}   count - Value to increase params by.
    */
   incrementParams(count)
   {
      this.aggregateMethodReport.params += count;
   }

   /**
    * Returns true if a given HalsteadData metric / identifier is not found in the associated aggregate report.
    *
    * @param {string}   metric - A Halstead metric name.
    * @param {string}   identifier - A Halstead identifier name.
    *
    * @returns {boolean}
    */
   isHalsteadMetricDistinct(metric, identifier)
   {
      return this.aggregateMethodReport.halstead[metric].identifiers.indexOf(identifier) === -1;
   }

   /**
    * Formats this report given the type.
    *
    * @param {string}   name - The name of formatter to use.
    *
    * @param {object}   options - (Optional) One or more optional parameters to pass to the formatter.
    *
    * @returns {string}
    */
   toFormat(name, options = void 0)
   {
      return TransformFormat.format(this, name, options);
   }
}
