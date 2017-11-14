import HalsteadAverage  from './HalsteadAverage';

/**
 * Provides all the averaged method metric data.
 */
export default class MethodAverage
{
   /**
    * Initializes the default averaged method data.
    */
   constructor()
   {
      /**
       * Measures the average method cyclomatic complexity of the module / class.
       * @type {number}
       */
      this.cyclomatic = 0;

      /**
       * Measures the average method cyclomatic density of the module / class.
       * @type {number}
       */
      this.cyclomaticDensity = 0;

      /**
       * Stores the averaged Halstead metric data.
       * @type {HalsteadData}
       */
      this.halstead = new HalsteadAverage();

      /**
       * Measures the average number of method parameters for the module / class.
       * @type {number}
       */
      this.params = 0;

      /**
       * Measures the average source lines of code for the module / class.
       * @type {{logical: number, physical: number}}
       */
      this.sloc = { logical: 0, physical: 0 };
   }
}
