/**
 * This is an abstract class that is not intended to be used directly. Extend it to turn your class into an enum
 * (initialization is performed via `MyClass.initEnum()`).
 *
 * Modified from source provided by enumify (license unlisted / public domain)
 * @see https://github.com/rauschma/enumify
 */
export default class Enum
{
   /**
    * `initEnum()` closes the class. Then calling this constructor throws an exception.
    *
    * If your subclass has a constructor then you can control what properties are added to `this` via the argument you
    * pass to `super()`. No arguments are fine, too.
    *
    * @param {object}   instanceProperties - Provides initial properties.
    */
   constructor(instanceProperties = void 0)
   {
      // new.target would be better than this.constructor, but isn’t supported by Babel
      if ({}.hasOwnProperty.call(this.constructor, INITIALIZED))
      {
         throw new Error('Enum classes can’t be instantiated');
      }

      if (typeof instanceProperties === 'object' && instanceProperties !== null)
      {
         s_COPY_PROPERTIES(this, instanceProperties);
      }
   }

   /**
    * Set up the enum, close the class.
    *
    * @param {Array|object}   arg - Either an object whose properties provide the names and values (which must be
    * mutable objects) of the enum constants. Or an Array whose elements are used as the names of the enum constants.
    * The values are create by instantiating the current class.
    *
    * @returns {Enum}
    */
   static initEnum(arg)
   {
      Object.defineProperty(this, 'enumValues',
      {
         value: [],
         configurable: false,
         writable: false,
         enumerable: true
      });

      if (Array.isArray(arg))
      {
         this._enumValuesFromArray(arg);
      }
      else
      {
         this._enumValuesFromObject(arg);
      }

      Object.freeze(this.enumValues);
      this[INITIALIZED] = true;

      return this;
   }

   static _enumValuesFromArray(arr)
   {
      for (const key of arr) { this._pushEnumValue(new this(), key); }
   }

   static _enumValuesFromObject(obj)
   {
      for (const key of Object.keys(obj))
      {
         const value = new this(obj[key]);
         this._pushEnumValue(value, key);
      }
   }

   static _pushEnumValue(enumValue, name)
   {
      enumValue.name = name;
      enumValue.ordinal = this.enumValues.length;

      Object.defineProperty(this, name,
      {
         value: enumValue,
         configurable: false,
         writable: false,
         enumerable: true
      });

      this.enumValues.push(enumValue);
   }

   /**
    * Given the name of an enum constant, return its value.
    *
    * @param {string}   name - An enum name.
    *
    * @returns {T}
    */
   static enumValueOf(name)
   {
      return this.enumValues.find((x) => x.name === name);
   }

   /**
    * Make enum classes iterable
    *
    * @returns {Symbol.iterator}
    */
   static [Symbol.iterator]()
   {
      return this.enumValues[Symbol.iterator]();
   }

   /**
    * Default `toString()` method for enum constant.
    *
    * @returns {string}
    */
   toString()
   {
      return `${this.constructor.name}.${this.name}`;
   }
}

// Module private ---------------------------------------------------------------------------------------------------

/**
 * Provides a Symbol to track initialized state.
 * @type {Symbol}
 * @ignore
 */
const INITIALIZED = Symbol();

/**
 * Copies an objects properties.
 *
 * @param {object}   target - Target object.
 * @param {object}   source - Source object.
 *
 * @returns {object}
 * @ignore
 */
function s_COPY_PROPERTIES(target, source)
{
   // Ideally, we’d use Reflect.ownKeys() here, but I don’t want to depend on a polyfill.
   for (const key of Object.getOwnPropertyNames(source))
   {
      const desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
   }

   return target;
}