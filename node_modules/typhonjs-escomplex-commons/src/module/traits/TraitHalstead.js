/**
 * Provides a wrapper around a data object hash which should contain an `identifier` field and potentially a `filter`
 * field which is a function. The identifier can be a function or string or an array of functions / strings.
 */
export default class TraitHalstead
{
   /**
    * Initializes the Halstead trait.
    *
    * @param {string}   metric - The name of Halstead metric being stored.
    * @param {object}   data - The data field to be wrapped.
    */
   constructor(metric, data)
   {
      /* istanbul ignore if */
      if (typeof metric !== 'string') { throw new TypeError('ctor error: metric is not a `string`.'); }

      /* istanbul ignore if */
      if (typeof data !== 'object') { throw new TypeError('ctor error: data is not an `object`.'); }

      /* istanbul ignore if */
      if (Array.isArray(data.identifier))
      {
         data.identifier.forEach((element, index) =>
         {
            if (element !== 'function' && typeof element !== 'string')
            {
               throw new TypeError(
                `ctor error: data.identifier array is not a 'function' or 'string' at index: ${index}.`);
            }
         });
      }
      else
      {
         /* istanbul ignore if */
         if (typeof data.identifier !== 'function' && typeof data.identifier !== 'string')
         {
            throw new TypeError('ctor error: data.identifier is not a `function` or `string`.');
         }
      }

      /* istanbul ignore if */
      if (typeof data.filter !== 'undefined' && typeof data.filter !== 'function')
      {
         throw new TypeError('ctor error: data.filter is not a `function`.');
      }

      /**
       * Stores the data to wrap.
       * @type {*}
       * @private
       */
      this._data = data;

      /**
       * Stores the Halstead metric type.
       * @type {string}
       * @private
       */
      this._metric = metric;
   }

   /**
    * Returns the value of the `filter` field of the wrapped data. If the wrapped `filter` field is a function it
    * is invoked with the given `params` otherwise the data is returned directly. If `filter` is not defined then
    * `true` is returned.
    *
    * @param {*}  params - Provides parameters which are forwarded onto any data stored as a function. Normally
    *                      `params` should be the `current AST node, parent AST node, ... optional data`.
    *
    * @returns {boolean}
    */
   filter(...params)
   {
      return typeof this._data.filter === 'function' ? this._data.filter(...params) : true;
   }

   /**
    * Returns the associated metric type.
    *
    * @returns {string}
    */
   get metric() { return this._metric; }

   /**
    * Returns the typeof data being wrapped.
    *
    * @returns {string}
    */
   get type() { return typeof this._data; }

   /**
    * Returns the value of the `identifier` field of the wrapped data. If the wrapped `identifier` field is a function
    * it is invoked with the given `params` otherwise the data is returned directly.
    *
    * @param {*}  params - Provides parameters which are forwarded onto any data stored as a function.
    *
    * @returns {*|Array<*>}
    */
   valueOf(...params)
   {
      if (Array.isArray(this._data.identifier))
      {
         return this._data.identifier.map((entry) => typeof entry === 'function' ? entry(...params) : entry);
      }

      return typeof this._data.identifier === 'function' ? this._data.identifier(...params) : this._data.identifier;
   }
}
