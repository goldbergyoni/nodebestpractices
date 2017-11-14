'use strict';

module.exports = $Ref;

var Pointer = require('./pointer'),
    util    = require('./util');

/**
 * This class represents a single JSON reference and its resolved value.
 *
 * @param {$Refs} $refs
 * @param {string} path
 * @constructor
 */
function $Ref($refs, path) {
  path = util.path.stripHash(path);

  // Add this $ref to its parent collection
  $refs._$refs[path] = this;

  /**
   * The {@link $Refs} object that contains this {@link $Ref} object.
   * @type {$Refs}
   */
  this.$refs = $refs;

  /**
   * The file path or URL of the referenced file.
   * This path is relative to the path of the main JSON schema file.
   *
   * This path does NOT contain document fragments (JSON pointers). It always references an ENTIRE file.
   * Use methods such as {@link $Ref#get}, {@link $Ref#resolve}, and {@link $Ref#exists} to get
   * specific JSON pointers within the file.
   *
   * @type {string}
   */
  this.path = path;

  /**
   * Indicates the type of {@link $Ref#path} (e.g. "fs", "http", or "https")
   * @type {?string}
   */
  this.pathType = undefined;

  /**
   * The path TO this JSON reference from the root of the main JSON schema file.
   * If the same JSON reference occurs multiple times in the schema, then this is the pointer to the
   * FIRST occurrence.
   *
   * This property is used by the {@link $RefParser.bundle} method to re-map other JSON references.
   *
   * @type {string}
   */
  this.pathFromRoot = '#';

  /**
   * The resolved value of the JSON reference.
   * Can be any JSON type, not just objects. Unknown file types are represented as Buffers (byte arrays).
   * @type {?*}
   */
  this.value = undefined;

  /**
   * The date/time that the cached value will expire.
   * @type {?Date}
   */
  this.expires = undefined;
}

/**
 * Determines whether the {@link $Ref#value} has expired.
 *
 * @returns {boolean}
 */
$Ref.prototype.isExpired = function() {
  return !!(this.expires && this.expires <= new Date());
};

/**
 * Immediately expires the {@link $Ref#value}.
 */
$Ref.prototype.expire = function() {
  this.expires = new Date();
};

/**
 * Sets the {@link $Ref#value} and renews the cache expiration.
 *
 * @param {*} value
 * @param {$RefParserOptions} options
 */
$Ref.prototype.setValue = function(value, options) {
  this.value = value;

  // Extend the cache expiration
  var cacheDuration = options.cache[this.pathType];
  if (cacheDuration > 0) {
    var expires = Date.now() + (cacheDuration * 1000);
    this.expires = new Date(expires);
  }
};

/**
 * Determines whether the given JSON reference exists within this {@link $Ref#value}.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @returns {boolean}
 */
$Ref.prototype.exists = function(path) {
  try {
    this.resolve(path);
    return true;
  }
  catch (e) {
    return false;
  }
};

/**
 * Resolves the given JSON reference within this {@link $Ref#value} and returns the resolved value.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @param {$RefParserOptions} options
 * @returns {*} - Returns the resolved value
 */
$Ref.prototype.get = function(path, options) {
  return this.resolve(path, options).value;
};

/**
 * Resolves the given JSON reference within this {@link $Ref#value}.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @param {$RefParserOptions} options
 * @returns {Pointer}
 */
$Ref.prototype.resolve = function(path, options) {
  var pointer = new Pointer(this, path);
  return pointer.resolve(this.value, options);
};

/**
 * Sets the value of a nested property within this {@link $Ref#value}.
 * If the property, or any of its parents don't exist, they will be created.
 *
 * @param {string} path - The full path of the property to set, optionally with a JSON pointer in the hash
 * @param {*} value - The value to assign
 * @param {$RefParserOptions} options
 */
$Ref.prototype.set = function(path, value, options) {
  var pointer = new Pointer(this, path);
  this.value = pointer.set(this.value, value, options);
};

/**
 * Determines whether the given value is a JSON reference.
 *
 * @param {*} value - The value to inspect
 * @returns {boolean}
 */
$Ref.is$Ref = function(value) {
  return value && typeof value === 'object' && typeof value.$ref === 'string' && value.$ref.length > 0;
};

/**
 * Determines whether the given value is an external JSON reference.
 *
 * @param {*} value - The value to inspect
 * @returns {boolean}
 */
$Ref.isExternal$Ref = function(value) {
  return $Ref.is$Ref(value) && value.$ref[0] !== '#';
};

/**
 * Determines whether the given value is a JSON reference, and whether it is allowed by the options.
 * For example, if it references an external file, then options.$refs.external must be true.
 *
 * @param {*} value - The value to inspect
 * @param {$RefParserOptions} options
 * @returns {boolean}
 */
$Ref.isAllowed$Ref = function(value, options) {
  if ($Ref.is$Ref(value)) {
    if (value.$ref[0] === '#') {
      if (options.$refs.internal) {
        return true;
      }
    }
    else if (options.$refs.external) {
      return true;
    }
  }
};
