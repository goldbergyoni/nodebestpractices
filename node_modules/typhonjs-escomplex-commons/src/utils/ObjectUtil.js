/**
 * Provides common object manipulation utilities.
 */
export default class ObjectUtil
{
   /**
    * Performs a naive depth traversal of an object / array. The data structure _must not_ have circular references.
    * The result of the callback function is used to modify in place the given data.
    *
    * @param {object|Array}   data - An object or array.
    * @param {function}       func - A callback function to process leaf values in children arrays or object members.
    *
    * @returns {*}
    */
   static depthTraverse(data, func)
   {
      /* istanbul ignore if */
      if (typeof data !== 'object') { throw new TypeError('depthTraverse error: \'data\' is not an \'object\'.'); }

      /* istanbul ignore if */
      if (typeof func !== 'function') { throw new TypeError('depthTraverse error: \'func\' is not a \'function\'.'); }

      return _depthTraverse(data, func);
   }

   /**
    * Returns a list of accessor keys by traversing the given object.
    *
    * @param {object}   data - An object to traverse for accessor keys.
    *
    * @returns {Array}
    */
   static getAccessorList(data)
   {
      if (typeof data !== 'object') { throw new TypeError(`getAccessorList error: 'data' is not an 'object'.`); }

      return _getAccessorList(data);
   }

   /**
    * Provides a way to safely access an objects data / entries given an accessor string which describes the
    * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
    * to walk.
    *
    * @param {object}   data - An object to access entry data.
    * @param {string}   accessor - A string describing the entries to access.
    * @param {*}        defaultValue - (Optional) A default value to return if an entry for accessor is not found.
    *
    * @returns {*}
    */
   static safeAccess(data, accessor, defaultValue = void 0)
   {
      if (typeof data !== 'object') { return defaultValue; }
      if (typeof accessor !== 'string') { return defaultValue; }

      const access = accessor.split('.');

      // Walk through the given object by the accessor indexes.
      for (let cntr = 0; cntr < access.length; cntr++)
      {
         // If the next level of object access is undefined or null then return the empty string.
         if (typeof data[access[cntr]] === 'undefined' || data[access[cntr]] === null) { return defaultValue; }

         data = data[access[cntr]];
      }

      return data;
   }

   /**
    * Compares a source object and values of entries against a target object. If the entries in the source object match
    * the target object then `true` is returned otherwise `false`. If either object is undefined or null then false
    * is returned.
    *
    * @param {object}   source - Source object.
    * @param {object}   target - Target object.
    *
    * @returns {boolean}
    */
   static safeEqual(source, target)
   {
      if (typeof source === 'undefined' || source === null || typeof target === 'undefined' || target === null)
      {
         return false;
      }

      const sourceAccessors = ObjectUtil.getAccessorList(source);

      for (let cntr = 0; cntr < sourceAccessors.length; cntr++)
      {
         const accessor = sourceAccessors[cntr];

         const sourceObjectValue = ObjectUtil.safeAccess(source, accessor);
         const targetObjectValue = ObjectUtil.safeAccess(target, accessor);

         if (sourceObjectValue !== targetObjectValue) { return false; }
      }

      return true;
   }

   /**
    * Provides a way to safely set an objects data / entries given an accessor string which describes the
    * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
    * to walk.
    *
    * @param {object}   data - An object to access entry data.
    * @param {string}   accessor - A string describing the entries to access.
    * @param {*}        value - A new value to set if an entry for accessor is found.
    * @param {string}   operation - (Optional) Operation to perform including: 'add', 'div', 'mult', 'set', 'sub';
    *                               default (`set`).
    *
    * @returns {boolean} True if successful.
    */
   static safeSet(data, accessor, value, operation = 'set')
   {
      if (typeof data !== 'object') { throw new TypeError(`safeSet Error: 'data' is not an 'object'.`); }
      if (typeof accessor !== 'string') { throw new TypeError(`safeSet Error: 'accessor' is not a 'string'.`); }

      const access = accessor.split('.');

      // Walk through the given object by the accessor indexes.
      for (let cntr = 0; cntr < access.length; cntr++)
      {
         // If the next level of object access is undefined then create a new object entry.
         if (typeof data[access[cntr]] === 'undefined') { data[access[cntr]] = {}; }

         if (cntr === access.length - 1)
         {
            switch (operation)
            {
               case 'add':
                  data[access[cntr]] += value;
                  break;

               case 'div':
                  data[access[cntr]] /= value;
                  break;

               case 'mult':
                  data[access[cntr]] *= value;
                  break;

               case 'set':
                  data[access[cntr]] = value;
                  break;

               case 'sub':
                  data[access[cntr]] -= value;
                  break;
            }
         }
         else
         {
            // Abort if the next level is null or not an object and containing a value.
            if (data[access[cntr]] === null || typeof data[access[cntr]] !== 'object') { return false; }

            data = data[access[cntr]];
         }
      }

      return true;
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Private implementation of depth traversal.
 *
 * @param {object|Array}   data - An object or array.
 * @param {function}       func - A callback function to process leaf values in children arrays or object members.
 *
 * @returns {*}
 * @ignore
 * @private
 */
function _depthTraverse(data, func)
{
   if (Array.isArray(data))
   {
      for (let cntr = 0; cntr < data.length; cntr++) { data[cntr] = _depthTraverse(data[cntr], func); }
   }
   else if (typeof data === 'object')
   {
      for (const key in data) { if (data.hasOwnProperty(key)) { data[key] = _depthTraverse(data[key], func); } }
   }
   else
   {
      data = func(data);
   }

   return data;
}

/**
 * Private implementation of `getAccessorList`.
 *
 * @param {object}   data - An object to traverse.
 *
 * @returns {Array}
 * @ignore
 * @private
 */
function _getAccessorList(data)
{
   const accessors = [];

   for (const key in data)
   {
      if (data.hasOwnProperty(key))
      {
         if (typeof data[key] === 'object')
         {
            const childKeys = _getAccessorList(data[key]);

            childKeys.forEach((childKey) =>
            {
               accessors.push(Array.isArray(childKey) ? `${key}.${childKey.join('.')}` : `${key}.${childKey}`);
            });
         }
         else
         {
            accessors.push(key);
         }
      }
   }

   return accessors;
}
