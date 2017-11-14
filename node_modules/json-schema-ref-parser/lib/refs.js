'use strict';

var Options = require('./options'),
    util    = require('./util'),
    ono     = require('ono');

module.exports = $Refs;

/**
 * This class is a map of JSON references and their resolved values.
 */
function $Refs() {
  /**
   * Indicates whether the schema contains any circular references.
   *
   * @type {boolean}
   */
  this.circular = false;

  /**
   * A map of paths/urls to {@link $Ref} objects
   *
   * @type {object}
   * @protected
   */
  this._$refs = {};
}

/**
 * Returns the paths of all the files/URLs that are referenced by the JSON schema,
 * including the schema itself.
 *
 * @param {...string|string[]} [types] - Only return paths of the given types ("fs", "http", "https")
 * @returns {string[]}
 */
$Refs.prototype.paths = function(types) {
  var paths = getPaths(this._$refs, arguments);
  return paths.map(function(path) {
    return path.decoded;
  });
};

/**
 * Returns the map of JSON references and their resolved values.
 *
 * @param {...string|string[]} [types] - Only return references of the given types ("fs", "http", "https")
 * @returns {object}
 */
$Refs.prototype.values = function(types) {
  var $refs = this._$refs;
  var paths = getPaths($refs, arguments);
  return paths.reduce(function(obj, path) {
    obj[path.decoded] = $refs[path.encoded].value;
    return obj;
  }, {});
};

/**
 * Returns a POJO (plain old JavaScript object) for serialization as JSON.
 *
 * @returns {object}
 */
$Refs.prototype.toJSON = $Refs.prototype.values;

/**
 * Determines whether the given JSON reference has expired.
 * Returns true if the reference does not exist.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @returns {boolean}
 */
$Refs.prototype.isExpired = function(path) {
  var $ref = this._get$Ref(path);
  return $ref === undefined || $ref.isExpired();
};

/**
 * Immediately expires the given JSON reference.
 * If the reference does not exist, nothing happens.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 */
$Refs.prototype.expire = function(path) {
  var $ref = this._get$Ref(path);
  if ($ref) {
    $ref.expire();
  }
};

/**
 * Determines whether the given JSON reference exists.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @returns {boolean}
 */
$Refs.prototype.exists = function(path) {
  try {
    this._resolve(path);
    return true;
  }
  catch (e) {
    return false;
  }
};

/**
 * Resolves the given JSON reference and returns the resolved value.
 *
 * @param {string} path - The full path being resolved, with a JSON pointer in the hash
 * @param {$RefParserOptions} options
 * @returns {*} - Returns the resolved value
 */
$Refs.prototype.get = function(path, options) {
  return this._resolve(path, options).value;
};

/**
 * Sets the value of a nested property within this {@link $Ref#value}.
 * If the property, or any of its parents don't exist, they will be created.
 *
 * @param {string} path - The full path of the property to set, optionally with a JSON pointer in the hash
 * @param {*} value - The value to assign
 * @param {$RefParserOptions} options
 */
$Refs.prototype.set = function(path, value, options) {
  var withoutHash = util.path.stripHash(path);
  var $ref = this._$refs[withoutHash];

  if (!$ref) {
    throw ono('Error resolving $ref pointer "%s". \n"%s" not found.', path, withoutHash);
  }

  options = new Options(options);
  $ref.set(path, value, options);
};

/**
 * Resolves the given JSON reference.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @param {$RefParserOptions} options
 * @returns {Pointer}
 * @protected
 */
$Refs.prototype._resolve = function(path, options) {
  var withoutHash = util.path.stripHash(path);
  var $ref = this._$refs[withoutHash];

  if (!$ref) {
    throw ono('Error resolving $ref pointer "%s". \n"%s" not found.', path, withoutHash);
  }

  options = new Options(options);
  return $ref.resolve(path, options);
};

/**
 * Returns the specified {@link $Ref} object, or undefined.
 *
 * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
 * @returns {$Ref|undefined}
 * @protected
 */
$Refs.prototype._get$Ref = function(path) {
  var withoutHash = util.path.stripHash(path);
  return this._$refs[withoutHash];
};

/**
 * Returns the encoded and decoded paths keys of the given object.
 *
 * @param {object} $refs - The object whose keys are URL-encoded paths
 * @param {...string|string[]} [types] - Only return paths of the given types ("fs", "http", "https")
 * @returns {object[]}
 */
function getPaths($refs, types) {
  var paths = Object.keys($refs);

  // Filter the paths by type
  types = Array.isArray(types[0]) ? types[0] : Array.prototype.slice.call(types);
  if (types.length > 0 && types[0]) {
    paths = paths.filter(function(key) {
      return types.indexOf($refs[key].pathType) !== -1;
    });
  }

  // Decode local filesystem paths
  return paths.map(function(path) {
    return {
      encoded: path,
      decoded: $refs[path].pathType === 'fs' ? util.path.urlToLocalPath(path) : path
    };
  });
}
