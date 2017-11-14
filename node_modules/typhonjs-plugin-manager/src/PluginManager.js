import PluginEvent   from './PluginEvent.js';

/**
 * Provides a generic plugin manager and dispatch mechanism.
 */
export default class PluginManager
{
   /**
    * Initializes plugin manager.
    */
   constructor()
   {
      this._plugins = [];
   }

   /**
    * Adds a plugin to the manager.
    *
    * @param {object}   plugin - A plugin.
    */
   addPlugin(plugin)
   {
      if (typeof plugin !== 'object') { throw new TypeError('addPlugin error: plugin is not an object'); }

      this._plugins.push(plugin);
   }

   /**
    * Iterates through all loaded plugins and if methodName is found as a function then invokes it with the given data.
    *
    * @param {string}   methodName -
    * @param {object}   data -
    * @param {boolean}  copy -
    *
    * @returns {Array<PluginEvent>}
    */
   invoke(methodName, data = {}, copy = true)
   {
      if (typeof methodName !== 'string') { throw new TypeError('invoke error: `methodName` is not a `string`.'); }

      let event = null;
      let hasMethod = false;

      // Verify that at least one plugin has the requested invocation method.
      for (let cntr = 0; cntr < this._plugins.length; cntr++)
      {
         const plugin = this._plugins[cntr];
         if (typeof plugin[methodName] === 'function') { hasMethod = true; break; }
      }

      if (hasMethod)
      {
         event = new PluginEvent(data, copy);

         for (let cntr = 0; cntr < this._plugins.length; cntr++)
         {
            const plugin = this._plugins[cntr];

            // Invoke plugin method if it exists.
            if (typeof plugin[methodName] === 'function') { plugin[methodName](event); }
         }

         return event;
      }

      return null;
   }
}
