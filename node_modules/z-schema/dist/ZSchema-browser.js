(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ZSchema = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = require('./lib/toDate');

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = require('./lib/toFloat');

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = require('./lib/toInt');

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = require('./lib/toBoolean');

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = require('./lib/equals');

var _equals2 = _interopRequireDefault(_equals);

var _contains = require('./lib/contains');

var _contains2 = _interopRequireDefault(_contains);

var _matches = require('./lib/matches');

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = require('./lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = require('./lib/isURL');

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = require('./lib/isMACAddress');

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = require('./lib/isIP');

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = require('./lib/isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = require('./lib/isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = require('./lib/isAlpha');

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = require('./lib/isAlphanumeric');

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = require('./lib/isNumeric');

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isLowercase = require('./lib/isLowercase');

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = require('./lib/isUppercase');

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = require('./lib/isAscii');

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = require('./lib/isFullWidth');

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = require('./lib/isHalfWidth');

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = require('./lib/isVariableWidth');

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = require('./lib/isMultibyte');

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = require('./lib/isSurrogatePair');

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = require('./lib/isInt');

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = require('./lib/isFloat');

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = require('./lib/isDecimal');

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = require('./lib/isHexadecimal');

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = require('./lib/isDivisibleBy');

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = require('./lib/isHexColor');

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = require('./lib/isISRC');

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = require('./lib/isMD5');

var _isMD2 = _interopRequireDefault(_isMD);

var _isHash = require('./lib/isHash');

var _isHash2 = _interopRequireDefault(_isHash);

var _isJSON = require('./lib/isJSON');

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = require('./lib/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = require('./lib/isLength');

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = require('./lib/isByteLength');

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = require('./lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = require('./lib/isMongoId');

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = require('./lib/isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = require('./lib/isBefore');

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = require('./lib/isIn');

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = require('./lib/isCreditCard');

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = require('./lib/isISIN');

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = require('./lib/isISBN');

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = require('./lib/isISSN');

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = require('./lib/isMobilePhone');

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = require('./lib/isCurrency');

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = require('./lib/isISO8601');

var _isISO2 = _interopRequireDefault(_isISO);

var _isBase = require('./lib/isBase64');

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = require('./lib/isDataURI');

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _isLatLong = require('./lib/isLatLong');

var _isLatLong2 = _interopRequireDefault(_isLatLong);

var _isPostalCode = require('./lib/isPostalCode');

var _isPostalCode2 = _interopRequireDefault(_isPostalCode);

var _ltrim = require('./lib/ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = require('./lib/rtrim');

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = require('./lib/trim');

var _trim2 = _interopRequireDefault(_trim);

var _escape = require('./lib/escape');

var _escape2 = _interopRequireDefault(_escape);

var _unescape = require('./lib/unescape');

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = require('./lib/stripLow');

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = require('./lib/whitelist');

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = require('./lib/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = require('./lib/isWhitelisted');

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = require('./lib/normalizeEmail');

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = require('./lib/util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '8.2.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isHash: _isHash2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isPostalCode: _isPostalCode2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  isLatLong: _isLatLong2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];
},{"./lib/blacklist":6,"./lib/contains":7,"./lib/equals":8,"./lib/escape":9,"./lib/isAfter":10,"./lib/isAlpha":11,"./lib/isAlphanumeric":12,"./lib/isAscii":13,"./lib/isBase64":14,"./lib/isBefore":15,"./lib/isBoolean":16,"./lib/isByteLength":17,"./lib/isCreditCard":18,"./lib/isCurrency":19,"./lib/isDataURI":20,"./lib/isDecimal":21,"./lib/isDivisibleBy":22,"./lib/isEmail":23,"./lib/isEmpty":24,"./lib/isFQDN":25,"./lib/isFloat":26,"./lib/isFullWidth":27,"./lib/isHalfWidth":28,"./lib/isHash":29,"./lib/isHexColor":30,"./lib/isHexadecimal":31,"./lib/isIP":32,"./lib/isISBN":33,"./lib/isISIN":34,"./lib/isISO8601":35,"./lib/isISRC":36,"./lib/isISSN":37,"./lib/isIn":38,"./lib/isInt":39,"./lib/isJSON":40,"./lib/isLatLong":41,"./lib/isLength":42,"./lib/isLowercase":43,"./lib/isMACAddress":44,"./lib/isMD5":45,"./lib/isMobilePhone":46,"./lib/isMongoId":47,"./lib/isMultibyte":48,"./lib/isNumeric":49,"./lib/isPostalCode":50,"./lib/isSurrogatePair":51,"./lib/isURL":52,"./lib/isUUID":53,"./lib/isUppercase":54,"./lib/isVariableWidth":55,"./lib/isWhitelisted":56,"./lib/ltrim":57,"./lib/matches":58,"./lib/normalizeEmail":59,"./lib/rtrim":60,"./lib/stripLow":61,"./lib/toBoolean":62,"./lib/toDate":63,"./lib/toFloat":64,"./lib/toInt":65,"./lib/trim":66,"./lib/unescape":67,"./lib/util/toString":70,"./lib/whitelist":71}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
}
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];
},{"./util/assertString":68}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = require('./util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];
},{"./util/assertString":68,"./util/toString":70}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];
},{"./util/assertString":68}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];
},{"./util/assertString":68}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = require('./toDate');

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];
},{"./toDate":63,"./util/assertString":68}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = require('./alpha');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];
},{"./alpha":5,"./util/assertString":68}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = require('./alpha');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];
},{"./alpha":5,"./util/assertString":68}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];
},{"./util/assertString":68}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = require('./toDate');

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];
},{"./toDate":63,"./util/assertString":68}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];
},{"./util/assertString":68}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
},{"./util/assertString":68}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];
},{"./util/assertString":68}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var decimal_digits = '\\d{' + options.digits_after_decimal[0] + '}';
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = decimal_digits + '|\\d{' + digit + '}';
  });
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '(' + decimal_digits + '))' + (options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68,"./util/merge":69}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
  (0, _assertString2.default)(str);
  return dataURI.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

function isDecimal(str) {
  (0, _assertString2.default)(str);
  return str !== '' && decimal.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = require('./toFloat');

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];
},{"./toFloat":64,"./util/assertString":68}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = require('./isByteLength');

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = require('./isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
},{"./isByteLength":17,"./isFQDN":25,"./util/assertString":68,"./util/merge":69}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];
},{"./util/assertString":68}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
},{"./util/assertString":68,"./util/merge":69}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var float = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  if (str === '' || str === '.') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}
module.exports = exports['default'];
},{"./util/assertString":68}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}
},{"./util/assertString":68}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}
},{"./util/assertString":68}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHash;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  (0, _assertString2.default)(str);
  var hash = new RegExp('^[a-f0-9]{' + lengths[algorithm] + '}$');
  return hash.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":68}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":68}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];
},{"./util/assertString":68}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISO8601;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

function isISO8601(str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString2.default)(str);
  return isrc.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assertString2.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var issnDigits = str.replace('-', '');
  var position = 8;
  var checksum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;

      var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
      checksum += digitValue * position;
      --position;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return checksum % 11 === 0;
}
module.exports = exports['default'];
},{"./util/assertString":68}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = require('./util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":68,"./util/toString":70}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports['default'];
},{"./util/assertString":68}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];
},{"./util/assertString":68}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  (0, _assertString2.default)(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
};

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

module.exports = exports['default'];
},{"./util/assertString":68}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];
},{"./util/assertString":68}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];
},{"./util/assertString":68}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'da-DK': /^(\+?45)?(\d{8})$/,
  'el-GR': /^(\+?30)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale) {
  (0, _assertString2.default)(str);
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];
},{"./util/assertString":68}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = require('./isHexadecimal');

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];
},{"./isHexadecimal":31,"./util/assertString":68}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locales = undefined;

exports.default = function (str, locale) {
  (0, _assertString2.default)(str);
  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];
        if (pattern.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
};

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;

var patterns = {
  AT: fourDigit,
  AU: sixDigit,
  BE: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}(\-\d{3})?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  TW: /^\d{3}(\d{2})?$/,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};

var locales = exports.locales = Object.keys(patterns);
},{"./util/assertString":68}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = require('./isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = require('./isIP');

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
},{"./isFQDN":25,"./isIP":32,"./util/assertString":68,"./util/merge":69}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];
},{"./util/assertString":68}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = require('./isFullWidth');

var _isHalfWidth = require('./isHalfWidth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];
},{"./isFullWidth":27,"./isHalfWidth":28,"./util/assertString":68}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
},{"./util/assertString":68}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];
},{"./util/assertString":68}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _isEmail = require('./isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _merge = require('./util/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);

  if (!(0, _isEmail2.default)(email)) {
    return false;
  }

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (~icloud_domains.indexOf(parts[1])) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~yahoo_domains.indexOf(parts[1])) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];
},{"./isEmail":23,"./util/merge":69}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];
},{"./util/assertString":68}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = require('./blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];
},{"./blacklist":6,"./util/assertString":68}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];
},{"./util/assertString":68}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];
},{"./util/assertString":68}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];
},{"./util/assertString":68}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];
},{"./util/assertString":68}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = require('./rtrim');

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = require('./ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];
},{"./ltrim":57,"./rtrim":60}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}
module.exports = exports['default'];
},{"./util/assertString":68}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
},{}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];
},{}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];
},{"./util/assertString":68}],72:[function(require,module,exports){
"use strict";

module.exports = {

    INVALID_TYPE:                           "Expected type {0} but found type {1}",
    INVALID_FORMAT:                         "Object didn't pass validation for format {0}: {1}",
    ENUM_MISMATCH:                          "No enum match for: {0}",
    ANY_OF_MISSING:                         "Data does not match any schemas from 'anyOf'",
    ONE_OF_MISSING:                         "Data does not match any schemas from 'oneOf'",
    ONE_OF_MULTIPLE:                        "Data is valid against more than one schema from 'oneOf'",
    NOT_PASSED:                             "Data matches schema from 'not'",

    // Array errors
    ARRAY_LENGTH_SHORT:                     "Array is too short ({0}), minimum {1}",
    ARRAY_LENGTH_LONG:                      "Array is too long ({0}), maximum {1}",
    ARRAY_UNIQUE:                           "Array items are not unique (indexes {0} and {1})",
    ARRAY_ADDITIONAL_ITEMS:                 "Additional items not allowed",

    // Numeric errors
    MULTIPLE_OF:                            "Value {0} is not a multiple of {1}",
    MINIMUM:                                "Value {0} is less than minimum {1}",
    MINIMUM_EXCLUSIVE:                      "Value {0} is equal or less than exclusive minimum {1}",
    MAXIMUM:                                "Value {0} is greater than maximum {1}",
    MAXIMUM_EXCLUSIVE:                      "Value {0} is equal or greater than exclusive maximum {1}",

    // Object errors
    OBJECT_PROPERTIES_MINIMUM:              "Too few properties defined ({0}), minimum {1}",
    OBJECT_PROPERTIES_MAXIMUM:              "Too many properties defined ({0}), maximum {1}",
    OBJECT_MISSING_REQUIRED_PROPERTY:       "Missing required property: {0}",
    OBJECT_ADDITIONAL_PROPERTIES:           "Additional properties not allowed: {0}",
    OBJECT_DEPENDENCY_KEY:                  "Dependency failed - key must exist: {0} (due to key: {1})",

    // String errors
    MIN_LENGTH:                             "String is too short ({0} chars), minimum {1}",
    MAX_LENGTH:                             "String is too long ({0} chars), maximum {1}",
    PATTERN:                                "String does not match pattern {0}: {1}",

    // Schema validation errors
    KEYWORD_TYPE_EXPECTED:                  "Keyword '{0}' is expected to be of type '{1}'",
    KEYWORD_UNDEFINED_STRICT:               "Keyword '{0}' must be defined in strict mode",
    KEYWORD_UNEXPECTED:                     "Keyword '{0}' is not expected to appear in the schema",
    KEYWORD_MUST_BE:                        "Keyword '{0}' must be {1}",
    KEYWORD_DEPENDENCY:                     "Keyword '{0}' requires keyword '{1}'",
    KEYWORD_PATTERN:                        "Keyword '{0}' is not a valid RegExp pattern: {1}",
    KEYWORD_VALUE_TYPE:                     "Each element of keyword '{0}' array must be a '{1}'",
    UNKNOWN_FORMAT:                         "There is no validation function for format '{0}'",
    CUSTOM_MODE_FORCE_PROPERTIES:           "{0} must define at least one property if present",

    // Remote errors
    REF_UNRESOLVED:                         "Reference has not been resolved during compilation: {0}",
    UNRESOLVABLE_REFERENCE:                 "Reference could not be resolved: {0}",
    SCHEMA_NOT_REACHABLE:                   "Validator was not able to read schema with uri: {0}",
    SCHEMA_TYPE_EXPECTED:                   "Schema is expected to be of type 'object'",
    SCHEMA_NOT_AN_OBJECT:                   "Schema is not an object: {0}",
    ASYNC_TIMEOUT:                          "{0} asynchronous task(s) have timed out after {1} ms",
    PARENT_SCHEMA_VALIDATION_FAILED:        "Schema failed to validate against its parent schema, see inner errors for details.",
    REMOTE_NOT_VALID:                       "Remote reference didn't compile successfully: {0}"

};

},{}],73:[function(require,module,exports){
/*jshint maxlen: false*/

var validator = require("validator");

var FormatValidators = {
    "date": function (date) {
        if (typeof date !== "string") {
            return true;
        }
        // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
        var matches = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(date);
        if (matches === null) {
            return false;
        }
        // var year = matches[1];
        // var month = matches[2];
        // var day = matches[3];
        if (matches[2] < "01" || matches[2] > "12" || matches[3] < "01" || matches[3] > "31") {
            return false;
        }
        return true;
    },
    "date-time": function (dateTime) {
        if (typeof dateTime !== "string") {
            return true;
        }
        // date-time from http://tools.ietf.org/html/rfc3339#section-5.6
        var s = dateTime.toLowerCase().split("t");
        if (!FormatValidators.date(s[0])) {
            return false;
        }
        var matches = /^([0-9]{2}):([0-9]{2}):([0-9]{2})(.[0-9]+)?(z|([+-][0-9]{2}:[0-9]{2}))$/.exec(s[1]);
        if (matches === null) {
            return false;
        }
        // var hour = matches[1];
        // var minute = matches[2];
        // var second = matches[3];
        // var fraction = matches[4];
        // var timezone = matches[5];
        if (matches[1] > "23" || matches[2] > "59" || matches[3] > "59") {
            return false;
        }
        return true;
    },
    "email": function (email) {
        if (typeof email !== "string") {
            return true;
        }
        return validator.isEmail(email, { "require_tld": true });
    },
    "hostname": function (hostname) {
        if (typeof hostname !== "string") {
            return true;
        }
        /*
            http://json-schema.org/latest/json-schema-validation.html#anchor114
            A string instance is valid against this attribute if it is a valid
            representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034].

            http://tools.ietf.org/html/rfc1034#section-3.5

            <digit> ::= any one of the ten digits 0 through 9
            var digit = /[0-9]/;

            <letter> ::= any one of the 52 alphabetic characters A through Z in upper case and a through z in lower case
            var letter = /[a-zA-Z]/;

            <let-dig> ::= <letter> | <digit>
            var letDig = /[0-9a-zA-Z]/;

            <let-dig-hyp> ::= <let-dig> | "-"
            var letDigHyp = /[-0-9a-zA-Z]/;

            <ldh-str> ::= <let-dig-hyp> | <let-dig-hyp> <ldh-str>
            var ldhStr = /[-0-9a-zA-Z]+/;

            <label> ::= <letter> [ [ <ldh-str> ] <let-dig> ]
            var label = /[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?/;

            <subdomain> ::= <label> | <subdomain> "." <label>
            var subdomain = /^[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?(\.[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?)*$/;

            <domain> ::= <subdomain> | " "
            var domain = null;
        */
        var valid = /^[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?(\.[a-zA-Z](([-0-9a-zA-Z]+)?[0-9a-zA-Z])?)*$/.test(hostname);
        if (valid) {
            // the sum of all label octets and label lengths is limited to 255.
            if (hostname.length > 255) { return false; }
            // Each node has a label, which is zero to 63 octets in length
            var labels = hostname.split(".");
            for (var i = 0; i < labels.length; i++) { if (labels[i].length > 63) { return false; } }
        }
        return valid;
    },
    "host-name": function (hostname) {
        return FormatValidators.hostname.call(this, hostname);
    },
    "ipv4": function (ipv4) {
        if (typeof ipv4 !== "string") { return true; }
        return validator.isIP(ipv4, 4);
    },
    "ipv6": function (ipv6) {
        if (typeof ipv6 !== "string") { return true; }
        return validator.isIP(ipv6, 6);
    },
    "regex": function (str) {
        try {
            RegExp(str);
            return true;
        } catch (e) {
            return false;
        }
    },
    "uri": function (uri) {
        if (this.options.strictUris) {
            return FormatValidators["strict-uri"].apply(this, arguments);
        }
        // https://github.com/zaggino/z-schema/issues/18
        // RegExp from http://tools.ietf.org/html/rfc3986#appendix-B
        return typeof uri !== "string" || RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?").test(uri);
    },
    "strict-uri": function (uri) {
        return typeof uri !== "string" || validator.isURL(uri);
    }
};

module.exports = FormatValidators;

},{"validator":4}],74:[function(require,module,exports){
"use strict";

var FormatValidators  = require("./FormatValidators"),
    Report            = require("./Report"),
    Utils             = require("./Utils");

var JsonValidators = {
    multipleOf: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.1.2
        if (typeof json !== "number") {
            return;
        }
        if (Utils.whatIs(json / schema.multipleOf) !== "integer") {
            report.addError("MULTIPLE_OF", [json, schema.multipleOf], null, schema.description);
        }
    },
    maximum: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2.2
        if (typeof json !== "number") {
            return;
        }
        if (schema.exclusiveMaximum !== true) {
            if (json > schema.maximum) {
                report.addError("MAXIMUM", [json, schema.maximum], null, schema.description);
            }
        } else {
            if (json >= schema.maximum) {
                report.addError("MAXIMUM_EXCLUSIVE", [json, schema.maximum], null, schema.description);
            }
        }
    },
    exclusiveMaximum: function () {
        // covered in maximum
    },
    minimum: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3.2
        if (typeof json !== "number") {
            return;
        }
        if (schema.exclusiveMinimum !== true) {
            if (json < schema.minimum) {
                report.addError("MINIMUM", [json, schema.minimum], null, schema.description);
            }
        } else {
            if (json <= schema.minimum) {
                report.addError("MINIMUM_EXCLUSIVE", [json, schema.minimum], null, schema.description);
            }
        }
    },
    exclusiveMinimum: function () {
        // covered in minimum
    },
    maxLength: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.1.2
        if (typeof json !== "string") {
            return;
        }
        if (Utils.ucs2decode(json).length > schema.maxLength) {
            report.addError("MAX_LENGTH", [json.length, schema.maxLength], null, schema.description);
        }
    },
    minLength: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.2.2
        if (typeof json !== "string") {
            return;
        }
        if (Utils.ucs2decode(json).length < schema.minLength) {
            report.addError("MIN_LENGTH", [json.length, schema.minLength], null, schema.description);
        }
    },
    pattern: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.3.2
        if (typeof json !== "string") {
            return;
        }
        if (RegExp(schema.pattern).test(json) === false) {
            report.addError("PATTERN", [schema.pattern, json], null, schema.description);
        }
    },
    additionalItems: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1.2
        if (!Array.isArray(json)) {
            return;
        }
        // if the value of "additionalItems" is boolean value false and the value of "items" is an array,
        // the json is valid if its size is less than, or equal to, the size of "items".
        if (schema.additionalItems === false && Array.isArray(schema.items)) {
            if (json.length > schema.items.length) {
                report.addError("ARRAY_ADDITIONAL_ITEMS", null, null, schema.description);
            }
        }
    },
    items: function () { /*report, schema, json*/
        // covered in additionalItems
    },
    maxItems: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.2.2
        if (!Array.isArray(json)) {
            return;
        }
        if (json.length > schema.maxItems) {
            report.addError("ARRAY_LENGTH_LONG", [json.length, schema.maxItems], null, schema.description);
        }
    },
    minItems: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.3.2
        if (!Array.isArray(json)) {
            return;
        }
        if (json.length < schema.minItems) {
            report.addError("ARRAY_LENGTH_SHORT", [json.length, schema.minItems], null, schema.description);
        }
    },
    uniqueItems: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.4.2
        if (!Array.isArray(json)) {
            return;
        }
        if (schema.uniqueItems === true) {
            var matches = [];
            if (Utils.isUniqueArray(json, matches) === false) {
                report.addError("ARRAY_UNIQUE", matches, null, schema.description);
            }
        }
    },
    maxProperties: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.1.2
        if (Utils.whatIs(json) !== "object") {
            return;
        }
        var keysCount = Object.keys(json).length;
        if (keysCount > schema.maxProperties) {
            report.addError("OBJECT_PROPERTIES_MAXIMUM", [keysCount, schema.maxProperties], null, schema.description);
        }
    },
    minProperties: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.2.2
        if (Utils.whatIs(json) !== "object") {
            return;
        }
        var keysCount = Object.keys(json).length;
        if (keysCount < schema.minProperties) {
            report.addError("OBJECT_PROPERTIES_MINIMUM", [keysCount, schema.minProperties], null, schema.description);
        }
    },
    required: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.3.2
        if (Utils.whatIs(json) !== "object") {
            return;
        }
        var idx = schema.required.length;
        while (idx--) {
            var requiredPropertyName = schema.required[idx];
            if (json[requiredPropertyName] === undefined) {
                report.addError("OBJECT_MISSING_REQUIRED_PROPERTY", [requiredPropertyName], null, schema.description);
            }
        }
    },
    additionalProperties: function (report, schema, json) {
        // covered in properties and patternProperties
        if (schema.properties === undefined && schema.patternProperties === undefined) {
            return JsonValidators.properties.call(this, report, schema, json);
        }
    },
    patternProperties: function (report, schema, json) {
        // covered in properties
        if (schema.properties === undefined) {
            return JsonValidators.properties.call(this, report, schema, json);
        }
    },
    properties: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.2
        if (Utils.whatIs(json) !== "object") {
            return;
        }
        var properties = schema.properties !== undefined ? schema.properties : {};
        var patternProperties = schema.patternProperties !== undefined ? schema.patternProperties : {};
        if (schema.additionalProperties === false) {
            // The property set of the json to validate.
            var s = Object.keys(json);
            // The property set from "properties".
            var p = Object.keys(properties);
            // The property set from "patternProperties".
            var pp = Object.keys(patternProperties);
            // remove from "s" all elements of "p", if any;
            s = Utils.difference(s, p);
            // for each regex in "pp", remove all elements of "s" which this regex matches.
            var idx = pp.length;
            while (idx--) {
                var regExp = RegExp(pp[idx]),
                    idx2 = s.length;
                while (idx2--) {
                    if (regExp.test(s[idx2]) === true) {
                        s.splice(idx2, 1);
                    }
                }
            }
            // Validation of the json succeeds if, after these two steps, set "s" is empty.
            if (s.length > 0) {
                // assumeAdditional can be an array of allowed properties
                var idx3 = this.options.assumeAdditional.length;
                if (idx3) {
                    while (idx3--) {
                        var io = s.indexOf(this.options.assumeAdditional[idx3]);
                        if (io !== -1) {
                            s.splice(io, 1);
                        }
                    }
                }
                if (s.length > 0) {
                    report.addError("OBJECT_ADDITIONAL_PROPERTIES", [s], null, schema.description);
                }
            }
        }
    },
    dependencies: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.5.2
        if (Utils.whatIs(json) !== "object") {
            return;
        }

        var keys = Object.keys(schema.dependencies),
            idx = keys.length;

        while (idx--) {
            // iterate all dependencies
            var dependencyName = keys[idx];
            if (json[dependencyName]) {
                var dependencyDefinition = schema.dependencies[dependencyName];
                if (Utils.whatIs(dependencyDefinition) === "object") {
                    // if dependency is a schema, validate against this schema
                    exports.validate.call(this, report, dependencyDefinition, json);
                } else { // Array
                    // if dependency is an array, object needs to have all properties in this array
                    var idx2 = dependencyDefinition.length;
                    while (idx2--) {
                        var requiredPropertyName = dependencyDefinition[idx2];
                        if (json[requiredPropertyName] === undefined) {
                            report.addError("OBJECT_DEPENDENCY_KEY", [requiredPropertyName, dependencyName], null, schema.description);
                        }
                    }
                }
            }
        }
    },
    enum: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.1.2
        var match = false,
            idx = schema.enum.length;
        while (idx--) {
            if (Utils.areEqual(json, schema.enum[idx])) {
                match = true;
                break;
            }
        }
        if (match === false) {
            report.addError("ENUM_MISMATCH", [json], null, schema.description);
        }
    },
    /*
    type: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2.2
        // type is handled before this is called so ignore
    },
    */
    allOf: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.3.2
        var idx = schema.allOf.length;
        while (idx--) {
            var validateResult = exports.validate.call(this, report, schema.allOf[idx], json);
            if (this.options.breakOnFirstError && validateResult === false) {
                break;
            }
        }
    },
    anyOf: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.4.2
        var subReports = [],
            passed = false,
            idx = schema.anyOf.length;

        while (idx-- && passed === false) {
            var subReport = new Report(report);
            subReports.push(subReport);
            passed = exports.validate.call(this, subReport, schema.anyOf[idx], json);
        }

        if (passed === false) {
            report.addError("ANY_OF_MISSING", undefined, subReports, schema.description);
        }
    },
    oneOf: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.5.2
        var passes = 0,
            subReports = [],
            idx = schema.oneOf.length;

        while (idx--) {
            var subReport = new Report(report, { maxErrors: 1 });
            subReports.push(subReport);
            if (exports.validate.call(this, subReport, schema.oneOf[idx], json) === true) {
                passes++;
            }
        }

        if (passes === 0) {
            report.addError("ONE_OF_MISSING", undefined, subReports, schema.description);
        } else if (passes > 1) {
            report.addError("ONE_OF_MULTIPLE", null, null, schema.description);
        }
    },
    not: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.6.2
        var subReport = new Report(report);
        if (exports.validate.call(this, subReport, schema.not, json) === true) {
            report.addError("NOT_PASSED", null, null, schema.description);
        }
    },
    definitions: function () { /*report, schema, json*/
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.7.2
        // nothing to do here
    },
    format: function (report, schema, json) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.2
        var formatValidatorFn = FormatValidators[schema.format];
        if (typeof formatValidatorFn === "function") {
            if (formatValidatorFn.length === 2) {
                // async
                report.addAsyncTask(formatValidatorFn, [json], function (result) {
                    if (result !== true) {
                        report.addError("INVALID_FORMAT", [schema.format, json], null, schema.description);
                    }
                });
            } else {
                // sync
                if (formatValidatorFn.call(this, json) !== true) {
                    report.addError("INVALID_FORMAT", [schema.format, json], null, schema.description);
                }
            }
        } else if (this.options.ignoreUnknownFormats !== true) {
            report.addError("UNKNOWN_FORMAT", [schema.format], null, schema.description);
        }
    }
};

var recurseArray = function (report, schema, json) {
    // http://json-schema.org/latest/json-schema-validation.html#rfc.section.8.2

    var idx = json.length;

    // If "items" is an array, this situation, the schema depends on the index:
    // if the index is less than, or equal to, the size of "items",
    // the child instance must be valid against the corresponding schema in the "items" array;
    // otherwise, it must be valid against the schema defined by "additionalItems".
    if (Array.isArray(schema.items)) {

        while (idx--) {
            // equal to doesnt make sense here
            if (idx < schema.items.length) {
                report.path.push(idx.toString());
                exports.validate.call(this, report, schema.items[idx], json[idx]);
                report.path.pop();
            } else {
                // might be boolean, so check that it's an object
                if (typeof schema.additionalItems === "object") {
                    report.path.push(idx.toString());
                    exports.validate.call(this, report, schema.additionalItems, json[idx]);
                    report.path.pop();
                }
            }
        }

    } else if (typeof schema.items === "object") {

        // If items is a schema, then the child instance must be valid against this schema,
        // regardless of its index, and regardless of the value of "additionalItems".
        while (idx--) {
            report.path.push(idx.toString());
            exports.validate.call(this, report, schema.items, json[idx]);
            report.path.pop();
        }

    }
};

var recurseObject = function (report, schema, json) {
    // http://json-schema.org/latest/json-schema-validation.html#rfc.section.8.3

    // If "additionalProperties" is absent, it is considered present with an empty schema as a value.
    // In addition, boolean value true is considered equivalent to an empty schema.
    var additionalProperties = schema.additionalProperties;
    if (additionalProperties === true || additionalProperties === undefined) {
        additionalProperties = {};
    }

    // p - The property set from "properties".
    var p = schema.properties ? Object.keys(schema.properties) : [];

    // pp - The property set from "patternProperties". Elements of this set will be called regexes for convenience.
    var pp = schema.patternProperties ? Object.keys(schema.patternProperties) : [];

    // m - The property name of the child.
    var keys = Object.keys(json),
        idx = keys.length;

    while (idx--) {
        var m = keys[idx],
            propertyValue = json[m];

        // s - The set of schemas for the child instance.
        var s = [];

        // 1. If set "p" contains value "m", then the corresponding schema in "properties" is added to "s".
        if (p.indexOf(m) !== -1) {
            s.push(schema.properties[m]);
        }

        // 2. For each regex in "pp", if it matches "m" successfully, the corresponding schema in "patternProperties" is added to "s".
        var idx2 = pp.length;
        while (idx2--) {
            var regexString = pp[idx2];
            if (RegExp(regexString).test(m) === true) {
                s.push(schema.patternProperties[regexString]);
            }
        }

        // 3. The schema defined by "additionalProperties" is added to "s" if and only if, at this stage, "s" is empty.
        if (s.length === 0 && additionalProperties !== false) {
            s.push(additionalProperties);
        }

        // we are passing tests even without this assert because this is covered by properties check
        // if s is empty in this stage, no additionalProperties are allowed
        // report.expect(s.length !== 0, 'E001', m);

        // Instance property value must pass all schemas from s
        idx2 = s.length;
        while (idx2--) {
            report.path.push(m);
            exports.validate.call(this, report, s[idx2], propertyValue);
            report.path.pop();
        }
    }
};

exports.validate = function (report, schema, json) {

    report.commonErrorMessage = "JSON_OBJECT_VALIDATION_FAILED";

    // check if schema is an object
    var to = Utils.whatIs(schema);
    if (to !== "object") {
        report.addError("SCHEMA_NOT_AN_OBJECT", [to], null, schema.description);
        return false;
    }

    // check if schema is empty, everything is valid against empty schema
    var keys = Object.keys(schema);
    if (keys.length === 0) {
        return true;
    }

    // this method can be called recursively, so we need to remember our root
    var isRoot = false;
    if (!report.rootSchema) {
        report.rootSchema = schema;
        isRoot = true;
    }

    // follow schema.$ref keys
    if (schema.$ref !== undefined) {
        // avoid infinite loop with maxRefs
        var maxRefs = 99;
        while (schema.$ref && maxRefs > 0) {
            if (!schema.__$refResolved) {
                report.addError("REF_UNRESOLVED", [schema.$ref], null, schema.description);
                break;
            } else if (schema.__$refResolved === schema) {
                break;
            } else {
                schema = schema.__$refResolved;
                keys = Object.keys(schema);
            }
            maxRefs--;
        }
        if (maxRefs === 0) {
            throw new Error("Circular dependency by $ref references!");
        }
    }

    // type checking first
    // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2.2
    var jsonType = Utils.whatIs(json);
    if (schema.type) {
        if (typeof schema.type === "string") {
            if (jsonType !== schema.type && (jsonType !== "integer" || schema.type !== "number")) {
                report.addError("INVALID_TYPE", [schema.type, jsonType], null, schema.description);
                if (this.options.breakOnFirstError) {
                    return false;
                }
            }
        } else {
            if (schema.type.indexOf(jsonType) === -1 && (jsonType !== "integer" || schema.type.indexOf("number") === -1)) {
                report.addError("INVALID_TYPE", [schema.type, jsonType], null, schema.description);
                if (this.options.breakOnFirstError) {
                    return false;
                }
            }
        }
    }

    // now iterate all the keys in schema and execute validation methods
    var idx = keys.length;
    while (idx--) {
        if (JsonValidators[keys[idx]]) {
            JsonValidators[keys[idx]].call(this, report, schema, json);
            if (report.errors.length && this.options.breakOnFirstError) { break; }
        }
    }

    if (report.errors.length === 0 || this.options.breakOnFirstError === false) {
        if (jsonType === "array") {
            recurseArray.call(this, report, schema, json);
        } else if (jsonType === "object") {
            recurseObject.call(this, report, schema, json);
        }
    }

    if (typeof this.options.customValidator === "function") {
        this.options.customValidator(report, schema, json);
    }

    // we don't need the root pointer anymore
    if (isRoot) {
        report.rootSchema = undefined;
    }

    // return valid just to be able to break at some code points
    return report.errors.length === 0;

};

},{"./FormatValidators":73,"./Report":76,"./Utils":80}],75:[function(require,module,exports){
// Number.isFinite polyfill
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite
if (typeof Number.isFinite !== "function") {
    Number.isFinite = function isFinite(value) {
        // 1. If Type(number) is not Number, return false.
        if (typeof value !== "number") {
            return false;
        }
        // 2. If number is NaN, +∞, or −∞, return false.
        if (value !== value || value === Infinity || value === -Infinity) {
            return false;
        }
        // 3. Otherwise, return true.
        return true;
    };
}

},{}],76:[function(require,module,exports){
(function (process){
"use strict";

var get    = require("lodash.get");
var Errors = require("./Errors");
var Utils  = require("./Utils");

function Report(parentOrOptions, reportOptions) {
    this.parentReport = parentOrOptions instanceof Report ?
                            parentOrOptions :
                            undefined;

    this.options = parentOrOptions instanceof Report ?
                       parentOrOptions.options :
                       parentOrOptions || {};

    this.reportOptions = reportOptions || {};

    this.errors = [];
    this.path = [];
    this.asyncTasks = [];
}

Report.prototype.isValid = function () {
    if (this.asyncTasks.length > 0) {
        throw new Error("Async tasks pending, can't answer isValid");
    }
    return this.errors.length === 0;
};

Report.prototype.addAsyncTask = function (fn, args, asyncTaskResultProcessFn) {
    this.asyncTasks.push([fn, args, asyncTaskResultProcessFn]);
};

Report.prototype.processAsyncTasks = function (timeout, callback) {

    var validationTimeout = timeout || 2000,
        tasksCount        = this.asyncTasks.length,
        idx               = tasksCount,
        timedOut          = false,
        self              = this;

    function finish() {
        process.nextTick(function () {
            var valid = self.errors.length === 0,
                err   = valid ? undefined : self.errors;
            callback(err, valid);
        });
    }

    function respond(asyncTaskResultProcessFn) {
        return function (asyncTaskResult) {
            if (timedOut) { return; }
            asyncTaskResultProcessFn(asyncTaskResult);
            if (--tasksCount === 0) {
                finish();
            }
        };
    }

    if (tasksCount === 0 || this.errors.length > 0) {
        finish();
        return;
    }

    while (idx--) {
        var task = this.asyncTasks[idx];
        task[0].apply(null, task[1].concat(respond(task[2])));
    }

    setTimeout(function () {
        if (tasksCount > 0) {
            timedOut = true;
            self.addError("ASYNC_TIMEOUT", [tasksCount, validationTimeout]);
            callback(self.errors, false);
        }
    }, validationTimeout);

};

Report.prototype.getPath = function (returnPathAsString) {
    var path = [];
    if (this.parentReport) {
        path = path.concat(this.parentReport.path);
    }
    path = path.concat(this.path);

    if (returnPathAsString !== true) {
        // Sanitize the path segments (http://tools.ietf.org/html/rfc6901#section-4)
        path = "#/" + path.map(function (segment) {

            if (Utils.isAbsoluteUri(segment)) {
                return "uri(" + segment + ")";
            }

            return segment.replace(/\~/g, "~0").replace(/\//g, "~1");
        }).join("/");
    }
    return path;
};

Report.prototype.getSchemaId = function () {

    if (!this.rootSchema) {
        return null;
    }

    // get the error path as an array
    var path = [];
    if (this.parentReport) {
        path = path.concat(this.parentReport.path);
    }
    path = path.concat(this.path);

    // try to find id in the error path
    while (path.length > 0) {
        var obj = get(this.rootSchema, path);
        if (obj && obj.id) { return obj.id; }
        path.pop();
    }

    // return id of the root
    return this.rootSchema.id;
};

Report.prototype.hasError = function (errorCode, params) {
    var idx = this.errors.length;
    while (idx--) {
        if (this.errors[idx].code === errorCode) {
            // assume match
            var match = true;

            // check the params too
            var idx2 = this.errors[idx].params.length;
            while (idx2--) {
                if (this.errors[idx].params[idx2] !== params[idx2]) {
                    match = false;
                }
            }

            // if match, return true
            if (match) { return match; }
        }
    }
    return false;
};

Report.prototype.addError = function (errorCode, params, subReports, schemaDescription) {
    if (!errorCode) { throw new Error("No errorCode passed into addError()"); }

    this.addCustomError(errorCode, Errors[errorCode], params, subReports, schemaDescription);
};

Report.prototype.addCustomError = function (errorCode, errorMessage, params, subReports, schemaDescription) {
    if (this.errors.length >= this.reportOptions.maxErrors) {
        return;
    }

    if (!errorMessage) { throw new Error("No errorMessage known for code " + errorCode); }

    params = params || [];

    var idx = params.length;
    while (idx--) {
        var whatIs = Utils.whatIs(params[idx]);
        var param = (whatIs === "object" || whatIs === "null") ? JSON.stringify(params[idx]) : params[idx];
        errorMessage = errorMessage.replace("{" + idx + "}", param);
    }

    var err = {
        code: errorCode,
        params: params,
        message: errorMessage,
        path: this.getPath(this.options.reportPathAsArray),
        schemaId: this.getSchemaId()
    };

    if (schemaDescription) {
        err.description = schemaDescription;
    }

    if (subReports != null) {
        if (!Array.isArray(subReports)) {
            subReports = [subReports];
        }
        err.inner = [];
        idx = subReports.length;
        while (idx--) {
            var subReport = subReports[idx],
                idx2 = subReport.errors.length;
            while (idx2--) {
                err.inner.push(subReport.errors[idx2]);
            }
        }
        if (err.inner.length === 0) {
            err.inner = undefined;
        }
    }

    this.errors.push(err);
};

module.exports = Report;

}).call(this,require('_process'))
},{"./Errors":72,"./Utils":80,"_process":3,"lodash.get":1}],77:[function(require,module,exports){
"use strict";

var isequal             = require("lodash.isequal");
var Report              = require("./Report");
var SchemaCompilation   = require("./SchemaCompilation");
var SchemaValidation    = require("./SchemaValidation");
var Utils               = require("./Utils");

function decodeJSONPointer(str) {
    // http://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-07#section-3
    return decodeURIComponent(str).replace(/~[0-1]/g, function (x) {
        return x === "~1" ? "/" : "~";
    });
}

function getRemotePath(uri) {
    var io = uri.indexOf("#");
    return io === -1 ? uri : uri.slice(0, io);
}

function getQueryPath(uri) {
    var io = uri.indexOf("#");
    var res = io === -1 ? undefined : uri.slice(io + 1);
    // WARN: do not slice slash, #/ means take root and go down from it
    // if (res && res[0] === "/") { res = res.slice(1); }
    return res;
}

function findId(schema, id) {
    // process only arrays and objects
    if (typeof schema !== "object" || schema === null) {
        return;
    }

    // no id means root so return itself
    if (!id) {
        return schema;
    }

    if (schema.id) {
        if (schema.id === id || schema.id[0] === "#" && schema.id.substring(1) === id) {
            return schema;
        }
    }

    var idx, result;
    if (Array.isArray(schema)) {
        idx = schema.length;
        while (idx--) {
            result = findId(schema[idx], id);
            if (result) { return result; }
        }
    } else {
        var keys = Object.keys(schema);
        idx = keys.length;
        while (idx--) {
            var k = keys[idx];
            if (k.indexOf("__$") === 0) {
                continue;
            }
            result = findId(schema[k], id);
            if (result) { return result; }
        }
    }
}

exports.cacheSchemaByUri = function (uri, schema) {
    var remotePath = getRemotePath(uri);
    if (remotePath) {
        this.cache[remotePath] = schema;
    }
};

exports.removeFromCacheByUri = function (uri) {
    var remotePath = getRemotePath(uri);
    if (remotePath) {
        delete this.cache[remotePath];
    }
};

exports.checkCacheForUri = function (uri) {
    var remotePath = getRemotePath(uri);
    return remotePath ? this.cache[remotePath] != null : false;
};

exports.getSchema = function (report, schema) {
    if (typeof schema === "object") {
        schema = exports.getSchemaByReference.call(this, report, schema);
    }
    if (typeof schema === "string") {
        schema = exports.getSchemaByUri.call(this, report, schema);
    }
    return schema;
};

exports.getSchemaByReference = function (report, key) {
    var i = this.referenceCache.length;
    while (i--) {
        if (isequal(this.referenceCache[i][0], key)) {
            return this.referenceCache[i][1];
        }
    }
    // not found
    var schema = Utils.cloneDeep(key);
    this.referenceCache.push([key, schema]);
    return schema;
};

exports.getSchemaByUri = function (report, uri, root) {
    var remotePath = getRemotePath(uri),
        queryPath = getQueryPath(uri),
        result = remotePath ? this.cache[remotePath] : root;

    if (result && remotePath) {
        // we need to avoid compiling schemas in a recursive loop
        var compileRemote = result !== root;
        // now we need to compile and validate resolved schema (in case it's not already)
        if (compileRemote) {

            report.path.push(remotePath);

            var remoteReport = new Report(report);
            if (SchemaCompilation.compileSchema.call(this, remoteReport, result)) {
                SchemaValidation.validateSchema.call(this, remoteReport, result);
            }
            var remoteReportIsValid = remoteReport.isValid();
            if (!remoteReportIsValid) {
                report.addError("REMOTE_NOT_VALID", [uri], remoteReport);
            }

            report.path.pop();

            if (!remoteReportIsValid) {
                return undefined;
            }
        }
    }

    if (result && queryPath) {
        var parts = queryPath.split("/");
        for (var idx = 0, lim = parts.length; result && idx < lim; idx++) {
            var key = decodeJSONPointer(parts[idx]);
            if (idx === 0) { // it's an id
                result = findId(result, key);
            } else { // it's a path behind id
                result = result[key];
            }
        }
    }

    return result;
};

exports.getRemotePath = getRemotePath;

},{"./Report":76,"./SchemaCompilation":78,"./SchemaValidation":79,"./Utils":80,"lodash.isequal":2}],78:[function(require,module,exports){
"use strict";

var Report      = require("./Report");
var SchemaCache = require("./SchemaCache");
var Utils       = require("./Utils");

function mergeReference(scope, ref) {
    if (Utils.isAbsoluteUri(ref)) {
        return ref;
    }

    var joinedScope = scope.join(""),
        isScopeAbsolute = Utils.isAbsoluteUri(joinedScope),
        isScopeRelative = Utils.isRelativeUri(joinedScope),
        isRefRelative = Utils.isRelativeUri(ref),
        toRemove;

    if (isScopeAbsolute && isRefRelative) {
        toRemove = joinedScope.match(/\/[^\/]*$/);
        if (toRemove) {
            joinedScope = joinedScope.slice(0, toRemove.index + 1);
        }
    } else if (isScopeRelative && isRefRelative) {
        joinedScope = "";
    } else {
        toRemove = joinedScope.match(/[^#/]+$/);
        if (toRemove) {
            joinedScope = joinedScope.slice(0, toRemove.index);
        }
    }

    var res = joinedScope + ref;
    res = res.replace(/##/, "#");
    return res;
}

function collectReferences(obj, results, scope, path) {
    results = results || [];
    scope = scope || [];
    path = path || [];

    if (typeof obj !== "object" || obj === null) {
        return results;
    }

    if (typeof obj.id === "string") {
        scope.push(obj.id);
    }

    if (typeof obj.$ref === "string" && typeof obj.__$refResolved === "undefined") {
        results.push({
            ref: mergeReference(scope, obj.$ref),
            key: "$ref",
            obj: obj,
            path: path.slice(0)
        });
    }
    if (typeof obj.$schema === "string" && typeof obj.__$schemaResolved === "undefined") {
        results.push({
            ref: mergeReference(scope, obj.$schema),
            key: "$schema",
            obj: obj,
            path: path.slice(0)
        });
    }

    var idx;
    if (Array.isArray(obj)) {
        idx = obj.length;
        while (idx--) {
            path.push(idx.toString());
            collectReferences(obj[idx], results, scope, path);
            path.pop();
        }
    } else {
        var keys = Object.keys(obj);
        idx = keys.length;
        while (idx--) {
            // do not recurse through resolved references and other z-schema props
            if (keys[idx].indexOf("__$") === 0) { continue; }
            path.push(keys[idx]);
            collectReferences(obj[keys[idx]], results, scope, path);
            path.pop();
        }
    }

    if (typeof obj.id === "string") {
        scope.pop();
    }

    return results;
}

var compileArrayOfSchemasLoop = function (mainReport, arr) {
    var idx = arr.length,
        compiledCount = 0;

    while (idx--) {

        // try to compile each schema separately
        var report = new Report(mainReport);
        var isValid = exports.compileSchema.call(this, report, arr[idx]);
        if (isValid) { compiledCount++; }

        // copy errors to report
        mainReport.errors = mainReport.errors.concat(report.errors);

    }

    return compiledCount;
};

function findId(arr, id) {
    var idx = arr.length;
    while (idx--) {
        if (arr[idx].id === id) {
            return arr[idx];
        }
    }
    return null;
}

var compileArrayOfSchemas = function (report, arr) {

    var compiled = 0,
        lastLoopCompiled;

    do {

        // remove all UNRESOLVABLE_REFERENCE errors before compiling array again
        var idx = report.errors.length;
        while (idx--) {
            if (report.errors[idx].code === "UNRESOLVABLE_REFERENCE") {
                report.errors.splice(idx, 1);
            }
        }

        // remember how many were compiled in the last loop
        lastLoopCompiled = compiled;

        // count how many are compiled now
        compiled = compileArrayOfSchemasLoop.call(this, report, arr);

        // fix __$missingReferences if possible
        idx = arr.length;
        while (idx--) {
            var sch = arr[idx];
            if (sch.__$missingReferences) {
                var idx2 = sch.__$missingReferences.length;
                while (idx2--) {
                    var refObj = sch.__$missingReferences[idx2];
                    var response = findId(arr, refObj.ref);
                    if (response) {
                        // this might create circular references
                        refObj.obj["__" + refObj.key + "Resolved"] = response;
                        // it's resolved now so delete it
                        sch.__$missingReferences.splice(idx2, 1);
                    }
                }
                if (sch.__$missingReferences.length === 0) {
                    delete sch.__$missingReferences;
                }
            }
        }

        // keep repeating if not all compiled and at least one more was compiled in the last loop
    } while (compiled !== arr.length && compiled !== lastLoopCompiled);

    return report.isValid();

};

exports.compileSchema = function (report, schema) {

    report.commonErrorMessage = "SCHEMA_COMPILATION_FAILED";

    // if schema is a string, assume it's a uri
    if (typeof schema === "string") {
        var loadedSchema = SchemaCache.getSchemaByUri.call(this, report, schema);
        if (!loadedSchema) {
            report.addError("SCHEMA_NOT_REACHABLE", [schema]);
            return false;
        }
        schema = loadedSchema;
    }

    // if schema is an array, assume it's an array of schemas
    if (Array.isArray(schema)) {
        return compileArrayOfSchemas.call(this, report, schema);
    }

    // if we have an id than it should be cached already (if this instance has compiled it)
    if (schema.__$compiled && schema.id && SchemaCache.checkCacheForUri.call(this, schema.id) === false) {
        schema.__$compiled = undefined;
    }

    // do not re-compile schemas
    if (schema.__$compiled) {
        return true;
    }

    if (schema.id && typeof schema.id === "string") {
        // add this to our schemaCache (before compilation in case we have references including id)
        SchemaCache.cacheSchemaByUri.call(this, schema.id, schema);
    }

    // this method can be called recursively, so we need to remember our root
    var isRoot = false;
    if (!report.rootSchema) {
        report.rootSchema = schema;
        isRoot = true;
    }

    // delete all __$missingReferences from previous compilation attempts
    var isValidExceptReferences = report.isValid();
    delete schema.__$missingReferences;

    // collect all references that need to be resolved - $ref and $schema
    var refs = collectReferences.call(this, schema),
        idx = refs.length;
    while (idx--) {
        // resolve all the collected references into __xxxResolved pointer
        var refObj = refs[idx];
        var response = SchemaCache.getSchemaByUri.call(this, report, refObj.ref, schema);

        // we can try to use custom schemaReader if available
        if (!response) {
            var schemaReader = this.getSchemaReader();
            if (schemaReader) {
                // it's supposed to return a valid schema
                var s = schemaReader(refObj.ref);
                if (s) {
                    // it needs to have the id
                    s.id = refObj.ref;
                    // try to compile the schema
                    var subreport = new Report(report);
                    if (!exports.compileSchema.call(this, subreport, s)) {
                        // copy errors to report
                        report.errors = report.errors.concat(subreport.errors);
                    } else {
                        response = SchemaCache.getSchemaByUri.call(this, report, refObj.ref, schema);
                    }
                }
            }
        }

        if (!response) {

            var hasNotValid = report.hasError("REMOTE_NOT_VALID", [refObj.ref]);
            var isAbsolute = Utils.isAbsoluteUri(refObj.ref);
            var isDownloaded = false;
            var ignoreUnresolvableRemotes = this.options.ignoreUnresolvableReferences === true;

            if (isAbsolute) {
                // we shouldn't add UNRESOLVABLE_REFERENCE for schemas we already have downloaded
                // and set through setRemoteReference method
                isDownloaded = SchemaCache.checkCacheForUri.call(this, refObj.ref);
            }

            if (hasNotValid) {
                // already has REMOTE_NOT_VALID error for this one
            } else if (ignoreUnresolvableRemotes && isAbsolute) {
                // ignoreUnresolvableRemotes is on and remote isAbsolute
            } else if (isDownloaded) {
                // remote is downloaded, so no UNRESOLVABLE_REFERENCE
            } else {
                Array.prototype.push.apply(report.path, refObj.path);
                report.addError("UNRESOLVABLE_REFERENCE", [refObj.ref]);
                report.path = report.path.slice(0, -refObj.path.length);

                // pusblish unresolved references out
                if (isValidExceptReferences) {
                    schema.__$missingReferences = schema.__$missingReferences || [];
                    schema.__$missingReferences.push(refObj);
                }
            }
        }
        // this might create circular references
        refObj.obj["__" + refObj.key + "Resolved"] = response;
    }

    var isValid = report.isValid();
    if (isValid) {
        schema.__$compiled = true;
    } else {
        if (schema.id && typeof schema.id === "string") {
            // remove this schema from schemaCache because it failed to compile
            SchemaCache.removeFromCacheByUri.call(this, schema.id);
        }
    }

    // we don't need the root pointer anymore
    if (isRoot) {
        report.rootSchema = undefined;
    }

    return isValid;

};

},{"./Report":76,"./SchemaCache":77,"./Utils":80}],79:[function(require,module,exports){
"use strict";

var FormatValidators = require("./FormatValidators"),
    JsonValidation   = require("./JsonValidation"),
    Report           = require("./Report"),
    Utils            = require("./Utils");

var SchemaValidators = {
    $ref: function (report, schema) {
        // http://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-07
        // http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03
        if (typeof schema.$ref !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["$ref", "string"]);
        }
    },
    $schema: function (report, schema) {
        // http://json-schema.org/latest/json-schema-core.html#rfc.section.6
        if (typeof schema.$schema !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["$schema", "string"]);
        }
    },
    multipleOf: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.1.1
        if (typeof schema.multipleOf !== "number") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["multipleOf", "number"]);
        } else if (schema.multipleOf <= 0) {
            report.addError("KEYWORD_MUST_BE", ["multipleOf", "strictly greater than 0"]);
        }
    },
    maximum: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2.1
        if (typeof schema.maximum !== "number") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["maximum", "number"]);
        }
    },
    exclusiveMaximum: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2.1
        if (typeof schema.exclusiveMaximum !== "boolean") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["exclusiveMaximum", "boolean"]);
        } else if (schema.maximum === undefined) {
            report.addError("KEYWORD_DEPENDENCY", ["exclusiveMaximum", "maximum"]);
        }
    },
    minimum: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3.1
        if (typeof schema.minimum !== "number") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["minimum", "number"]);
        }
    },
    exclusiveMinimum: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3.1
        if (typeof schema.exclusiveMinimum !== "boolean") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["exclusiveMinimum", "boolean"]);
        } else if (schema.minimum === undefined) {
            report.addError("KEYWORD_DEPENDENCY", ["exclusiveMinimum", "minimum"]);
        }
    },
    maxLength: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.1.1
        if (Utils.whatIs(schema.maxLength) !== "integer") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["maxLength", "integer"]);
        } else if (schema.maxLength < 0) {
            report.addError("KEYWORD_MUST_BE", ["maxLength", "greater than, or equal to 0"]);
        }
    },
    minLength: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.2.1
        if (Utils.whatIs(schema.minLength) !== "integer") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["minLength", "integer"]);
        } else if (schema.minLength < 0) {
            report.addError("KEYWORD_MUST_BE", ["minLength", "greater than, or equal to 0"]);
        }
    },
    pattern: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.3.1
        if (typeof schema.pattern !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["pattern", "string"]);
        } else {
            try {
                RegExp(schema.pattern);
            } catch (e) {
                report.addError("KEYWORD_PATTERN", ["pattern", schema.pattern]);
            }
        }
    },
    additionalItems: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1.1
        var type = Utils.whatIs(schema.additionalItems);
        if (type !== "boolean" && type !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["additionalItems", ["boolean", "object"]]);
        } else if (type === "object") {
            report.path.push("additionalItems");
            exports.validateSchema.call(this, report, schema.additionalItems);
            report.path.pop();
        }
    },
    items: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1.1
        var type = Utils.whatIs(schema.items);

        if (type === "object") {
            report.path.push("items");
            exports.validateSchema.call(this, report, schema.items);
            report.path.pop();
        } else if (type === "array") {
            var idx = schema.items.length;
            while (idx--) {
                report.path.push("items");
                report.path.push(idx.toString());
                exports.validateSchema.call(this, report, schema.items[idx]);
                report.path.pop();
                report.path.pop();
            }
        } else {
            report.addError("KEYWORD_TYPE_EXPECTED", ["items", ["array", "object"]]);
        }

        // custom - strict mode
        if (this.options.forceAdditional === true && schema.additionalItems === undefined && Array.isArray(schema.items)) {
            report.addError("KEYWORD_UNDEFINED_STRICT", ["additionalItems"]);
        }
        // custome - assume defined false mode
        if (this.options.assumeAdditional && schema.additionalItems === undefined && Array.isArray(schema.items)) {
            schema.additionalItems = false;
        }
    },
    maxItems: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.2.1
        if (typeof schema.maxItems !== "number") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["maxItems", "integer"]);
        } else if (schema.maxItems < 0) {
            report.addError("KEYWORD_MUST_BE", ["maxItems", "greater than, or equal to 0"]);
        }
    },
    minItems: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.3.1
        if (Utils.whatIs(schema.minItems) !== "integer") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["minItems", "integer"]);
        } else if (schema.minItems < 0) {
            report.addError("KEYWORD_MUST_BE", ["minItems", "greater than, or equal to 0"]);
        }
    },
    uniqueItems: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.4.1
        if (typeof schema.uniqueItems !== "boolean") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["uniqueItems", "boolean"]);
        }
    },
    maxProperties: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.1.1
        if (Utils.whatIs(schema.maxProperties) !== "integer") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["maxProperties", "integer"]);
        } else if (schema.maxProperties < 0) {
            report.addError("KEYWORD_MUST_BE", ["maxProperties", "greater than, or equal to 0"]);
        }
    },
    minProperties: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.2.1
        if (Utils.whatIs(schema.minProperties) !== "integer") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["minProperties", "integer"]);
        } else if (schema.minProperties < 0) {
            report.addError("KEYWORD_MUST_BE", ["minProperties", "greater than, or equal to 0"]);
        }
    },
    required: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.3.1
        if (Utils.whatIs(schema.required) !== "array") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["required", "array"]);
        } else if (schema.required.length === 0) {
            report.addError("KEYWORD_MUST_BE", ["required", "an array with at least one element"]);
        } else {
            var idx = schema.required.length;
            while (idx--) {
                if (typeof schema.required[idx] !== "string") {
                    report.addError("KEYWORD_VALUE_TYPE", ["required", "string"]);
                }
            }
            if (Utils.isUniqueArray(schema.required) === false) {
                report.addError("KEYWORD_MUST_BE", ["required", "an array with unique items"]);
            }
        }
    },
    additionalProperties: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.1
        var type = Utils.whatIs(schema.additionalProperties);
        if (type !== "boolean" && type !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["additionalProperties", ["boolean", "object"]]);
        } else if (type === "object") {
            report.path.push("additionalProperties");
            exports.validateSchema.call(this, report, schema.additionalProperties);
            report.path.pop();
        }
    },
    properties: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.1
        if (Utils.whatIs(schema.properties) !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["properties", "object"]);
            return;
        }

        var keys = Object.keys(schema.properties),
            idx = keys.length;
        while (idx--) {
            var key = keys[idx],
                val = schema.properties[key];
            report.path.push("properties");
            report.path.push(key);
            exports.validateSchema.call(this, report, val);
            report.path.pop();
            report.path.pop();
        }

        // custom - strict mode
        if (this.options.forceAdditional === true && schema.additionalProperties === undefined) {
            report.addError("KEYWORD_UNDEFINED_STRICT", ["additionalProperties"]);
        }
        // custome - assume defined false mode
        if (this.options.assumeAdditional && schema.additionalProperties === undefined) {
            schema.additionalProperties = false;
        }
        // custom - forceProperties
        if (this.options.forceProperties === true && keys.length === 0) {
            report.addError("CUSTOM_MODE_FORCE_PROPERTIES", ["properties"]);
        }
    },
    patternProperties: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4.1
        if (Utils.whatIs(schema.patternProperties) !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["patternProperties", "object"]);
            return;
        }

        var keys = Object.keys(schema.patternProperties),
            idx = keys.length;
        while (idx--) {
            var key = keys[idx],
                val = schema.patternProperties[key];
            try {
                RegExp(key);
            } catch (e) {
                report.addError("KEYWORD_PATTERN", ["patternProperties", key]);
            }
            report.path.push("patternProperties");
            report.path.push(key.toString());
            exports.validateSchema.call(this, report, val);
            report.path.pop();
            report.path.pop();
        }

        // custom - forceProperties
        if (this.options.forceProperties === true && keys.length === 0) {
            report.addError("CUSTOM_MODE_FORCE_PROPERTIES", ["patternProperties"]);
        }
    },
    dependencies: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.5.1
        if (Utils.whatIs(schema.dependencies) !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["dependencies", "object"]);
        } else {
            var keys = Object.keys(schema.dependencies),
                idx = keys.length;
            while (idx--) {
                var schemaKey = keys[idx],
                    schemaDependency = schema.dependencies[schemaKey],
                    type = Utils.whatIs(schemaDependency);

                if (type === "object") {
                    report.path.push("dependencies");
                    report.path.push(schemaKey);
                    exports.validateSchema.call(this, report, schemaDependency);
                    report.path.pop();
                    report.path.pop();
                } else if (type === "array") {
                    var idx2 = schemaDependency.length;
                    if (idx2 === 0) {
                        report.addError("KEYWORD_MUST_BE", ["dependencies", "not empty array"]);
                    }
                    while (idx2--) {
                        if (typeof schemaDependency[idx2] !== "string") {
                            report.addError("KEYWORD_VALUE_TYPE", ["dependensices", "string"]);
                        }
                    }
                    if (Utils.isUniqueArray(schemaDependency) === false) {
                        report.addError("KEYWORD_MUST_BE", ["dependencies", "an array with unique items"]);
                    }
                } else {
                    report.addError("KEYWORD_VALUE_TYPE", ["dependencies", "object or array"]);
                }
            }
        }
    },
    enum: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.1.1
        if (Array.isArray(schema.enum) === false) {
            report.addError("KEYWORD_TYPE_EXPECTED", ["enum", "array"]);
        } else if (schema.enum.length === 0) {
            report.addError("KEYWORD_MUST_BE", ["enum", "an array with at least one element"]);
        } else if (Utils.isUniqueArray(schema.enum) === false) {
            report.addError("KEYWORD_MUST_BE", ["enum", "an array with unique elements"]);
        }
    },
    type: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2.1
        var primitiveTypes = ["array", "boolean", "integer", "number", "null", "object", "string"],
            primitiveTypeStr = primitiveTypes.join(","),
            isArray = Array.isArray(schema.type);

        if (isArray) {
            var idx = schema.type.length;
            while (idx--) {
                if (primitiveTypes.indexOf(schema.type[idx]) === -1) {
                    report.addError("KEYWORD_TYPE_EXPECTED", ["type", primitiveTypeStr]);
                }
            }
            if (Utils.isUniqueArray(schema.type) === false) {
                report.addError("KEYWORD_MUST_BE", ["type", "an object with unique properties"]);
            }
        } else if (typeof schema.type === "string") {
            if (primitiveTypes.indexOf(schema.type) === -1) {
                report.addError("KEYWORD_TYPE_EXPECTED", ["type", primitiveTypeStr]);
            }
        } else {
            report.addError("KEYWORD_TYPE_EXPECTED", ["type", ["string", "array"]]);
        }

        if (this.options.noEmptyStrings === true) {
            if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
                if (schema.minLength === undefined &&
                    schema.enum === undefined &&
                    schema.format === undefined) {

                    schema.minLength = 1;
                }
            }
        }
        if (this.options.noEmptyArrays === true) {
            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
                if (schema.minItems === undefined) {
                    schema.minItems = 1;
                }
            }
        }
        if (this.options.forceProperties === true) {
            if (schema.type === "object" || isArray && schema.type.indexOf("object") !== -1) {
                if (schema.properties === undefined && schema.patternProperties === undefined) {
                    report.addError("KEYWORD_UNDEFINED_STRICT", ["properties"]);
                }
            }
        }
        if (this.options.forceItems === true) {
            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
                if (schema.items === undefined) {
                    report.addError("KEYWORD_UNDEFINED_STRICT", ["items"]);
                }
            }
        }
        if (this.options.forceMinItems === true) {
            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
                if (schema.minItems === undefined) {
                    report.addError("KEYWORD_UNDEFINED_STRICT", ["minItems"]);
                }
            }
        }
        if (this.options.forceMaxItems === true) {
            if (schema.type === "array" || isArray && schema.type.indexOf("array") !== -1) {
                if (schema.maxItems === undefined) {
                    report.addError("KEYWORD_UNDEFINED_STRICT", ["maxItems"]);
                }
            }
        }
        if (this.options.forceMinLength === true) {
            if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
                if (schema.minLength === undefined &&
                    schema.format === undefined &&
                    schema.enum === undefined &&
                    schema.pattern === undefined) {
                    report.addError("KEYWORD_UNDEFINED_STRICT", ["minLength"]);
                }
            }
        }
        if (this.options.forceMaxLength === true) {
            if (schema.type === "string" || isArray && schema.type.indexOf("string") !== -1) {
                if (schema.maxLength === undefined &&
                    schema.format === undefined &&
                    schema.enum === undefined &&
                    schema.pattern === undefined) {
                    report.addError("KEYWORD_UNDEFINED_STRICT", ["maxLength"]);
                }
            }
        }
    },
    allOf: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.3.1
        if (Array.isArray(schema.allOf) === false) {
            report.addError("KEYWORD_TYPE_EXPECTED", ["allOf", "array"]);
        } else if (schema.allOf.length === 0) {
            report.addError("KEYWORD_MUST_BE", ["allOf", "an array with at least one element"]);
        } else {
            var idx = schema.allOf.length;
            while (idx--) {
                report.path.push("allOf");
                report.path.push(idx.toString());
                exports.validateSchema.call(this, report, schema.allOf[idx]);
                report.path.pop();
                report.path.pop();
            }
        }
    },
    anyOf: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.4.1
        if (Array.isArray(schema.anyOf) === false) {
            report.addError("KEYWORD_TYPE_EXPECTED", ["anyOf", "array"]);
        } else if (schema.anyOf.length === 0) {
            report.addError("KEYWORD_MUST_BE", ["anyOf", "an array with at least one element"]);
        } else {
            var idx = schema.anyOf.length;
            while (idx--) {
                report.path.push("anyOf");
                report.path.push(idx.toString());
                exports.validateSchema.call(this, report, schema.anyOf[idx]);
                report.path.pop();
                report.path.pop();
            }
        }
    },
    oneOf: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.5.1
        if (Array.isArray(schema.oneOf) === false) {
            report.addError("KEYWORD_TYPE_EXPECTED", ["oneOf", "array"]);
        } else if (schema.oneOf.length === 0) {
            report.addError("KEYWORD_MUST_BE", ["oneOf", "an array with at least one element"]);
        } else {
            var idx = schema.oneOf.length;
            while (idx--) {
                report.path.push("oneOf");
                report.path.push(idx.toString());
                exports.validateSchema.call(this, report, schema.oneOf[idx]);
                report.path.pop();
                report.path.pop();
            }
        }
    },
    not: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.6.1
        if (Utils.whatIs(schema.not) !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["not", "object"]);
        } else {
            report.path.push("not");
            exports.validateSchema.call(this, report, schema.not);
            report.path.pop();
        }
    },
    definitions: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.7.1
        if (Utils.whatIs(schema.definitions) !== "object") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["definitions", "object"]);
        } else {
            var keys = Object.keys(schema.definitions),
                idx = keys.length;
            while (idx--) {
                var key = keys[idx],
                    val = schema.definitions[key];
                report.path.push("definitions");
                report.path.push(key);
                exports.validateSchema.call(this, report, val);
                report.path.pop();
                report.path.pop();
            }
        }
    },
    format: function (report, schema) {
        if (typeof schema.format !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["format", "string"]);
        } else {
            if (FormatValidators[schema.format] === undefined && this.options.ignoreUnknownFormats !== true) {
                report.addError("UNKNOWN_FORMAT", [schema.format]);
            }
        }
    },
    id: function (report, schema) {
        // http://json-schema.org/latest/json-schema-core.html#rfc.section.7.2
        if (typeof schema.id !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["id", "string"]);
        }
    },
    title: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1
        if (typeof schema.title !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["title", "string"]);
        }
    },
    description: function (report, schema) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1
        if (typeof schema.description !== "string") {
            report.addError("KEYWORD_TYPE_EXPECTED", ["description", "string"]);
        }
    },
    "default": function (/* report, schema */) {
        // http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.2
        // There are no restrictions placed on the value of this keyword.
    }
};

var validateArrayOfSchemas = function (report, arr) {
    var idx = arr.length;
    while (idx--) {
        exports.validateSchema.call(this, report, arr[idx]);
    }
    return report.isValid();
};

exports.validateSchema = function (report, schema) {

    report.commonErrorMessage = "SCHEMA_VALIDATION_FAILED";

    // if schema is an array, assume it's an array of schemas
    if (Array.isArray(schema)) {
        return validateArrayOfSchemas.call(this, report, schema);
    }

    // do not revalidate schema that has already been validated once
    if (schema.__$validated) {
        return true;
    }

    // if $schema is present, this schema should validate against that $schema
    var hasParentSchema = schema.$schema && schema.id !== schema.$schema;
    if (hasParentSchema) {
        if (schema.__$schemaResolved && schema.__$schemaResolved !== schema) {
            var subReport = new Report(report);
            var valid = JsonValidation.validate.call(this, subReport, schema.__$schemaResolved, schema);
            if (valid === false) {
                report.addError("PARENT_SCHEMA_VALIDATION_FAILED", null, subReport);
            }
        } else {
            if (this.options.ignoreUnresolvableReferences !== true) {
                report.addError("REF_UNRESOLVED", [schema.$schema]);
            }
        }
    }

    if (this.options.noTypeless === true) {
        // issue #36 - inherit type to anyOf, oneOf, allOf if noTypeless is defined
        if (schema.type !== undefined) {
            var schemas = [];
            if (Array.isArray(schema.anyOf)) { schemas = schemas.concat(schema.anyOf); }
            if (Array.isArray(schema.oneOf)) { schemas = schemas.concat(schema.oneOf); }
            if (Array.isArray(schema.allOf)) { schemas = schemas.concat(schema.allOf); }
            schemas.forEach(function (sch) {
                if (!sch.type) { sch.type = schema.type; }
            });
        }
        // end issue #36
        if (schema.enum === undefined &&
            schema.type === undefined &&
            schema.anyOf === undefined &&
            schema.oneOf === undefined &&
            schema.not === undefined &&
            schema.$ref === undefined) {
            report.addError("KEYWORD_UNDEFINED_STRICT", ["type"]);
        }
    }

    var keys = Object.keys(schema),
        idx = keys.length;
    while (idx--) {
        var key = keys[idx];
        if (key.indexOf("__") === 0) { continue; }
        if (SchemaValidators[key] !== undefined) {
            SchemaValidators[key].call(this, report, schema);
        } else if (!hasParentSchema) {
            if (this.options.noExtraKeywords === true) {
                report.addError("KEYWORD_UNEXPECTED", [key]);
            }
        }
    }

    if (this.options.pedanticCheck === true) {
        if (schema.enum) {
            // break recursion
            var tmpSchema = Utils.clone(schema);
            delete tmpSchema.enum;
            delete tmpSchema.default;

            report.path.push("enum");
            idx = schema.enum.length;
            while (idx--) {
                report.path.push(idx.toString());
                JsonValidation.validate.call(this, report, tmpSchema, schema.enum[idx]);
                report.path.pop();
            }
            report.path.pop();
        }

        if (schema.default) {
            report.path.push("default");
            JsonValidation.validate.call(this, report, schema, schema.default);
            report.path.pop();
        }
    }

    var isValid = report.isValid();
    if (isValid) {
        schema.__$validated = true;
    }
    return isValid;
};

},{"./FormatValidators":73,"./JsonValidation":74,"./Report":76,"./Utils":80}],80:[function(require,module,exports){
"use strict";

exports.isAbsoluteUri = function (uri) {
    return /^https?:\/\//.test(uri);
};

exports.isRelativeUri = function (uri) {
    // relative URIs that end with a hash sign, issue #56
    return /.+#/.test(uri);
};

exports.whatIs = function (what) {

    var to = typeof what;

    if (to === "object") {
        if (what === null) {
            return "null";
        }
        if (Array.isArray(what)) {
            return "array";
        }
        return "object"; // typeof what === 'object' && what === Object(what) && !Array.isArray(what);
    }

    if (to === "number") {
        if (Number.isFinite(what)) {
            if (what % 1 === 0) {
                return "integer";
            } else {
                return "number";
            }
        }
        if (Number.isNaN(what)) {
            return "not-a-number";
        }
        return "unknown-number";
    }

    return to; // undefined, boolean, string, function

};

exports.areEqual = function areEqual(json1, json2) {
    // http://json-schema.org/latest/json-schema-core.html#rfc.section.3.6

    // Two JSON values are said to be equal if and only if:
    // both are nulls; or
    // both are booleans, and have the same value; or
    // both are strings, and have the same value; or
    // both are numbers, and have the same mathematical value; or
    if (json1 === json2) {
        return true;
    }

    var i, len;

    // both are arrays, and:
    if (Array.isArray(json1) && Array.isArray(json2)) {
        // have the same number of items; and
        if (json1.length !== json2.length) {
            return false;
        }
        // items at the same index are equal according to this definition; or
        len = json1.length;
        for (i = 0; i < len; i++) {
            if (!areEqual(json1[i], json2[i])) {
                return false;
            }
        }
        return true;
    }

    // both are objects, and:
    if (exports.whatIs(json1) === "object" && exports.whatIs(json2) === "object") {
        // have the same set of property names; and
        var keys1 = Object.keys(json1);
        var keys2 = Object.keys(json2);
        if (!areEqual(keys1, keys2)) {
            return false;
        }
        // values for a same property name are equal according to this definition.
        len = keys1.length;
        for (i = 0; i < len; i++) {
            if (!areEqual(json1[keys1[i]], json2[keys1[i]])) {
                return false;
            }
        }
        return true;
    }

    return false;
};

exports.isUniqueArray = function (arr, indexes) {
    var i, j, l = arr.length;
    for (i = 0; i < l; i++) {
        for (j = i + 1; j < l; j++) {
            if (exports.areEqual(arr[i], arr[j])) {
                if (indexes) { indexes.push(i, j); }
                return false;
            }
        }
    }
    return true;
};

exports.difference = function (bigSet, subSet) {
    var arr = [],
        idx = bigSet.length;
    while (idx--) {
        if (subSet.indexOf(bigSet[idx]) === -1) {
            arr.push(bigSet[idx]);
        }
    }
    return arr;
};

// NOT a deep version of clone
exports.clone = function (src) {
    if (typeof src === "undefined") { return void 0; }
    if (typeof src !== "object" || src === null) { return src; }
    var res, idx;
    if (Array.isArray(src)) {
        res = [];
        idx = src.length;
        while (idx--) {
            res[idx] = src[idx];
        }
    } else {
        res = {};
        var keys = Object.keys(src);
        idx = keys.length;
        while (idx--) {
            var key = keys[idx];
            res[key] = src[key];
        }
    }
    return res;
};

exports.cloneDeep = function (src) {
    var visited = [], cloned = [];
    function cloneDeep(src) {
        if (typeof src !== "object" || src === null) { return src; }
        var res, idx, cidx;

        cidx = visited.indexOf(src);
        if (cidx !== -1) { return cloned[cidx]; }

        visited.push(src);
        if (Array.isArray(src)) {
            res = [];
            cloned.push(res);
            idx = src.length;
            while (idx--) {
                res[idx] = cloneDeep(src[idx]);
            }
        } else {
            res = {};
            cloned.push(res);
            var keys = Object.keys(src);
            idx = keys.length;
            while (idx--) {
                var key = keys[idx];
                res[key] = cloneDeep(src[key]);
            }
        }
        return res;
    }
    return cloneDeep(src);
};

/*
  following function comes from punycode.js library
  see: https://github.com/bestiejs/punycode.js
*/
/*jshint -W016*/
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
exports.ucs2decode = function (string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;
    while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // high surrogate, and there is a next character
            extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                // unmatched surrogate; only append this code unit, in case the next
                // code unit is the high surrogate of a surrogate pair
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
};
/*jshint +W016*/

},{}],81:[function(require,module,exports){
(function (process){
"use strict";

require("./Polyfills");
var get               = require("lodash.get");
var Report            = require("./Report");
var FormatValidators  = require("./FormatValidators");
var JsonValidation    = require("./JsonValidation");
var SchemaCache       = require("./SchemaCache");
var SchemaCompilation = require("./SchemaCompilation");
var SchemaValidation  = require("./SchemaValidation");
var Utils             = require("./Utils");
var Draft4Schema      = require("./schemas/schema.json");
var Draft4HyperSchema = require("./schemas/hyper-schema.json");

/*
    default options
*/
var defaultOptions = {
    // default timeout for all async tasks
    asyncTimeout: 2000,
    // force additionalProperties and additionalItems to be defined on "object" and "array" types
    forceAdditional: false,
    // assume additionalProperties and additionalItems are defined as "false" where appropriate
    assumeAdditional: false,
    // force items to be defined on "array" types
    forceItems: false,
    // force minItems to be defined on "array" types
    forceMinItems: false,
    // force maxItems to be defined on "array" types
    forceMaxItems: false,
    // force minLength to be defined on "string" types
    forceMinLength: false,
    // force maxLength to be defined on "string" types
    forceMaxLength: false,
    // force properties or patternProperties to be defined on "object" types
    forceProperties: false,
    // ignore references that cannot be resolved (remote schemas) // TODO: make sure this is only for remote schemas, not local ones
    ignoreUnresolvableReferences: false,
    // disallow usage of keywords that this validator can't handle
    noExtraKeywords: false,
    // disallow usage of schema's without "type" defined
    noTypeless: false,
    // disallow zero length strings in validated objects
    noEmptyStrings: false,
    // disallow zero length arrays in validated objects
    noEmptyArrays: false,
    // forces "uri" format to be in fully rfc3986 compliant
    strictUris: false,
    // turn on some of the above
    strictMode: false,
    // report error paths as an array of path segments to get to the offending node
    reportPathAsArray: false,
    // stops validation as soon as an error is found, true by default but can be turned off
    breakOnFirstError: true,
    // check if schema follow best practices and common sence
    pedanticCheck: false,
    // ignore unknown formats (do not report them as an error)
    ignoreUnknownFormats: false,
    // function to be called on every schema
    customValidator: null
};

/*
    constructor
*/
function ZSchema(options) {
    this.cache = {};
    this.referenceCache = [];

    this.setRemoteReference("http://json-schema.org/draft-04/schema", Draft4Schema);
    this.setRemoteReference("http://json-schema.org/draft-04/hyper-schema", Draft4HyperSchema);

    // options
    if (typeof options === "object") {
        var keys = Object.keys(options),
            idx = keys.length,
            key;

        // check that the options are correctly configured
        while (idx--) {
            key = keys[idx];
            if (defaultOptions[key] === undefined) {
                throw new Error("Unexpected option passed to constructor: " + key);
            }
        }

        // copy the default options into passed options
        keys = Object.keys(defaultOptions);
        idx = keys.length;
        while (idx--) {
            key = keys[idx];
            if (options[key] === undefined) {
                options[key] = Utils.clone(defaultOptions[key]);
            }
        }

        this.options = options;
    } else {
        this.options = Utils.clone(defaultOptions);
    }

    if (this.options.strictMode === true) {
        this.options.forceAdditional  = true;
        this.options.forceItems       = true;
        this.options.forceMaxLength   = true;
        this.options.forceProperties  = true;
        this.options.noExtraKeywords  = true;
        this.options.noTypeless       = true;
        this.options.noEmptyStrings   = true;
        this.options.noEmptyArrays    = true;
    }

}

/*
    instance methods
*/
ZSchema.prototype.compileSchema = function (schema) {
    var report = new Report(this.options);

    schema = SchemaCache.getSchema.call(this, report, schema);

    SchemaCompilation.compileSchema.call(this, report, schema);

    this.lastReport = report;
    return report.isValid();
};
ZSchema.prototype.validateSchema = function (schema) {
    if (Array.isArray(schema) && schema.length === 0) {
        throw new Error(".validateSchema was called with an empty array");
    }

    var report = new Report(this.options);

    schema = SchemaCache.getSchema.call(this, report, schema);

    var compiled = SchemaCompilation.compileSchema.call(this, report, schema);
    if (compiled) { SchemaValidation.validateSchema.call(this, report, schema); }

    this.lastReport = report;
    return report.isValid();
};
ZSchema.prototype.validate = function (json, schema, options, callback) {

    if (Utils.whatIs(options) === "function") {
        callback = options;
        options = {};
    }
    if (!options) { options = {}; }

    var whatIs = Utils.whatIs(schema);
    if (whatIs !== "string" && whatIs !== "object") {
        var e = new Error("Invalid .validate call - schema must be an string or object but " + whatIs + " was passed!");
        if (callback) {
            process.nextTick(function () {
                callback(e, false);
            });
            return;
        }
        throw e;
    }

    var foundError = false;
    var report = new Report(this.options);

    if (typeof schema === "string") {
        var schemaName = schema;
        schema = SchemaCache.getSchema.call(this, report, schemaName);
        if (!schema) {
            throw new Error("Schema with id '" + schemaName + "' wasn't found in the validator cache!");
        }
    } else {
        schema = SchemaCache.getSchema.call(this, report, schema);
    }

    var compiled = false;
    if (!foundError) {
        compiled = SchemaCompilation.compileSchema.call(this, report, schema);
    }
    if (!compiled) {
        this.lastReport = report;
        foundError = true;
    }

    var validated = false;
    if (!foundError) {
        validated = SchemaValidation.validateSchema.call(this, report, schema);
    }
    if (!validated) {
        this.lastReport = report;
        foundError = true;
    }

    if (options.schemaPath) {
        report.rootSchema = schema;
        schema = get(schema, options.schemaPath);
        if (!schema) {
            throw new Error("Schema path '" + options.schemaPath + "' wasn't found in the schema!");
        }
    }

    if (!foundError) {
        JsonValidation.validate.call(this, report, schema, json);
    }

    if (callback) {
        report.processAsyncTasks(this.options.asyncTimeout, callback);
        return;
    } else if (report.asyncTasks.length > 0) {
        throw new Error("This validation has async tasks and cannot be done in sync mode, please provide callback argument.");
    }

    // assign lastReport so errors are retrievable in sync mode
    this.lastReport = report;
    return report.isValid();
};
ZSchema.prototype.getLastError = function () {
    if (this.lastReport.errors.length === 0) {
        return null;
    }
    var e = new Error();
    e.name = "z-schema validation error";
    e.message = this.lastReport.commonErrorMessage;
    e.details = this.lastReport.errors;
    return e;
};
ZSchema.prototype.getLastErrors = function () {
    return this.lastReport && this.lastReport.errors.length > 0 ? this.lastReport.errors : undefined;
};
ZSchema.prototype.getMissingReferences = function (arr) {
    arr = arr || this.lastReport.errors;
    var res = [],
        idx = arr.length;
    while (idx--) {
        var error = arr[idx];
        if (error.code === "UNRESOLVABLE_REFERENCE") {
            var reference = error.params[0];
            if (res.indexOf(reference) === -1) {
                res.push(reference);
            }
        }
        if (error.inner) {
            res = res.concat(this.getMissingReferences(error.inner));
        }
    }
    return res;
};
ZSchema.prototype.getMissingRemoteReferences = function () {
    var missingReferences = this.getMissingReferences(),
        missingRemoteReferences = [],
        idx = missingReferences.length;
    while (idx--) {
        var remoteReference = SchemaCache.getRemotePath(missingReferences[idx]);
        if (remoteReference && missingRemoteReferences.indexOf(remoteReference) === -1) {
            missingRemoteReferences.push(remoteReference);
        }
    }
    return missingRemoteReferences;
};
ZSchema.prototype.setRemoteReference = function (uri, schema) {
    if (typeof schema === "string") {
        schema = JSON.parse(schema);
    } else {
        schema = Utils.cloneDeep(schema);
    }
    SchemaCache.cacheSchemaByUri.call(this, uri, schema);
};
ZSchema.prototype.getResolvedSchema = function (schema) {
    var report = new Report(this.options);
    schema = SchemaCache.getSchema.call(this, report, schema);

    // clone before making any modifications
    schema = Utils.cloneDeep(schema);

    var visited = [];

    // clean-up the schema and resolve references
    var cleanup = function (schema) {
        var key,
            typeOf = Utils.whatIs(schema);
        if (typeOf !== "object" && typeOf !== "array") {
            return;
        }

        if (schema.___$visited) {
            return;
        }

        schema.___$visited = true;
        visited.push(schema);

        if (schema.$ref && schema.__$refResolved) {
            var from = schema.__$refResolved;
            var to = schema;
            delete schema.$ref;
            delete schema.__$refResolved;
            for (key in from) {
                if (from.hasOwnProperty(key)) {
                    to[key] = from[key];
                }
            }
        }
        for (key in schema) {
            if (schema.hasOwnProperty(key)) {
                if (key.indexOf("__$") === 0) {
                    delete schema[key];
                } else {
                    cleanup(schema[key]);
                }
            }
        }
    };

    cleanup(schema);
    visited.forEach(function (s) {
        delete s.___$visited;
    });

    this.lastReport = report;
    if (report.isValid()) {
        return schema;
    } else {
        throw this.getLastError();
    }
};
ZSchema.prototype.setSchemaReader = function (schemaReader) {
    return ZSchema.setSchemaReader(schemaReader);
};
ZSchema.prototype.getSchemaReader = function () {
    return ZSchema.schemaReader;
};

/*
    static methods
*/
ZSchema.setSchemaReader = function (schemaReader) {
    ZSchema.schemaReader = schemaReader;
};
ZSchema.registerFormat = function (formatName, validatorFunction) {
    FormatValidators[formatName] = validatorFunction;
};
ZSchema.unregisterFormat = function (formatName) {
    delete FormatValidators[formatName];
};
ZSchema.getRegisteredFormats = function () {
    return Object.keys(FormatValidators);
};
ZSchema.getDefaultOptions = function () {
    return Utils.cloneDeep(defaultOptions);
};

module.exports = ZSchema;

}).call(this,require('_process'))
},{"./FormatValidators":73,"./JsonValidation":74,"./Polyfills":75,"./Report":76,"./SchemaCache":77,"./SchemaCompilation":78,"./SchemaValidation":79,"./Utils":80,"./schemas/hyper-schema.json":82,"./schemas/schema.json":83,"_process":3,"lodash.get":1}],82:[function(require,module,exports){
module.exports={
    "$schema": "http://json-schema.org/draft-04/hyper-schema#",
    "id": "http://json-schema.org/draft-04/hyper-schema#",
    "title": "JSON Hyper-Schema",
    "allOf": [
        {
            "$ref": "http://json-schema.org/draft-04/schema#"
        }
    ],
    "properties": {
        "additionalItems": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "$ref": "#"
                }
            ]
        },
        "additionalProperties": {
            "anyOf": [
                {
                    "type": "boolean"
                },
                {
                    "$ref": "#"
                }
            ]
        },
        "dependencies": {
            "additionalProperties": {
                "anyOf": [
                    {
                        "$ref": "#"
                    },
                    {
                        "type": "array"
                    }
                ]
            }
        },
        "items": {
            "anyOf": [
                {
                    "$ref": "#"
                },
                {
                    "$ref": "#/definitions/schemaArray"
                }
            ]
        },
        "definitions": {
            "additionalProperties": {
                "$ref": "#"
            }
        },
        "patternProperties": {
            "additionalProperties": {
                "$ref": "#"
            }
        },
        "properties": {
            "additionalProperties": {
                "$ref": "#"
            }
        },
        "allOf": {
            "$ref": "#/definitions/schemaArray"
        },
        "anyOf": {
            "$ref": "#/definitions/schemaArray"
        },
        "oneOf": {
            "$ref": "#/definitions/schemaArray"
        },
        "not": {
            "$ref": "#"
        },

        "links": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/linkDescription"
            }
        },
        "fragmentResolution": {
            "type": "string"
        },
        "media": {
            "type": "object",
            "properties": {
                "type": {
                    "description": "A media type, as described in RFC 2046",
                    "type": "string"
                },
                "binaryEncoding": {
                    "description": "A content encoding scheme, as described in RFC 2045",
                    "type": "string"
                }
            }
        },
        "pathStart": {
            "description": "Instances' URIs must start with this value for this schema to apply to them",
            "type": "string",
            "format": "uri"
        }
    },
    "definitions": {
        "schemaArray": {
            "type": "array",
            "items": {
                "$ref": "#"
            }
        },
        "linkDescription": {
            "title": "Link Description Object",
            "type": "object",
            "required": [ "href", "rel" ],
            "properties": {
                "href": {
                    "description": "a URI template, as defined by RFC 6570, with the addition of the $, ( and ) characters for pre-processing",
                    "type": "string"
                },
                "rel": {
                    "description": "relation to the target resource of the link",
                    "type": "string"
                },
                "title": {
                    "description": "a title for the link",
                    "type": "string"
                },
                "targetSchema": {
                    "description": "JSON Schema describing the link target",
                    "$ref": "#"
                },
                "mediaType": {
                    "description": "media type (as defined by RFC 2046) describing the link target",
                    "type": "string"
                },
                "method": {
                    "description": "method for requesting the target of the link (e.g. for HTTP this might be \"GET\" or \"DELETE\")",
                    "type": "string"
                },
                "encType": {
                    "description": "The media type in which to submit data along with the request",
                    "type": "string",
                    "default": "application/json"
                },
                "schema": {
                    "description": "Schema describing the data to submit along with the request",
                    "$ref": "#"
                }
            }
        }
    }
}


},{}],83:[function(require,module,exports){
module.exports={
    "id": "http://json-schema.org/draft-04/schema#",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "Core schema meta-schema",
    "definitions": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$ref": "#" }
        },
        "positiveInteger": {
            "type": "integer",
            "minimum": 0
        },
        "positiveIntegerDefault0": {
            "allOf": [ { "$ref": "#/definitions/positiveInteger" }, { "default": 0 } ]
        },
        "simpleTypes": {
            "enum": [ "array", "boolean", "integer", "null", "number", "object", "string" ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "minItems": 1,
            "uniqueItems": true
        }
    },
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "format": "uri"
        },
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": {},
        "multipleOf": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "boolean",
            "default": false
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "boolean",
            "default": false
        },
        "maxLength": { "$ref": "#/definitions/positiveInteger" },
        "minLength": { "$ref": "#/definitions/positiveIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "additionalItems": {
            "anyOf": [
                { "type": "boolean" },
                { "$ref": "#" }
            ],
            "default": {}
        },
        "items": {
            "anyOf": [
                { "$ref": "#" },
                { "$ref": "#/definitions/schemaArray" }
            ],
            "default": {}
        },
        "maxItems": { "$ref": "#/definitions/positiveInteger" },
        "minItems": { "$ref": "#/definitions/positiveIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "maxProperties": { "$ref": "#/definitions/positiveInteger" },
        "minProperties": { "$ref": "#/definitions/positiveIntegerDefault0" },
        "required": { "$ref": "#/definitions/stringArray" },
        "additionalProperties": {
            "anyOf": [
                { "type": "boolean" },
                { "$ref": "#" }
            ],
            "default": {}
        },
        "definitions": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "properties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "dependencies": {
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$ref": "#" },
                    { "$ref": "#/definitions/stringArray" }
                ]
            }
        },
        "enum": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/definitions/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/definitions/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        },
        "format": { "type": "string" },
        "allOf": { "$ref": "#/definitions/schemaArray" },
        "anyOf": { "$ref": "#/definitions/schemaArray" },
        "oneOf": { "$ref": "#/definitions/schemaArray" },
        "not": { "$ref": "#" }
    },
    "dependencies": {
        "exclusiveMaximum": [ "maximum" ],
        "exclusiveMinimum": [ "minimum" ]
    },
    "default": {}
}

},{}]},{},[72,73,74,75,76,77,78,79,80,81])(81)
});