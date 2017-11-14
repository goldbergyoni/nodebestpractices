/**
 * Plugin Event class.
 */
export default class PluginEvent
{
   /**
    * Initializes PluginEvent.
    *
    * @param {object}   data - event data.
    * @param {boolean}  copy - potentially copy data.
    */
   constructor(data = {}, copy = true)
   {
      /**
       * Stores the data provided to the event and potentially copying it via `Object.assign`.
       * @type {object}
       */
      this.data = copy ? Object.assign({}, data) : data;
   }
}
