import MethodAverage from './MethodAverage';

/**
 * Provides all the averaged module metric data.
 */
export default class ModuleAverage
{
   /**
    * Initializes the default averaged module data.
    */
   constructor()
   {
      this.methodAverage = new MethodAverage();

      /**
       * Measures the average method maintainability index for the module / file.
       * @type {number}
       */
      this.maintainability = 0;
   }
}
