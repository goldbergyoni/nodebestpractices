/* eslint lines-around-comment: [2, {beforeBlockComment: false}] */
'use strict';

module.exports = $RefParserOptions;

/**
 * Options that determine how JSON schemas are parsed, dereferenced, and cached.
 *
 * @param {object|$RefParserOptions} [options] - Overridden options
 * @constructor
 */
function $RefParserOptions(options) {
  /**
   * Determines what types of files can be parsed
   */
  this.allow = {
    /**
     * Are JSON files allowed?
     * If false, then all schemas must be in YAML format.
     * @type {boolean}
     */
    json: true,

    /**
     * Are YAML files allowed?
     * If false, then all schemas must be in JSON format.
     * @type {boolean}
     */
    yaml: true,

    /**
     * Are zero-byte files allowed?
     * If false, then an error will be thrown if a file is empty.
     * @type {boolean}
     */
    empty: true,

    /**
     * Can unknown file types be $referenced?
     * If true, then they will be parsed as Buffers (byte arrays).
     * If false, then an error will be thrown.
     * @type {boolean}
     */
    unknown: true
  };

  /**
   * Determines the types of JSON references that are allowed.
   */
  this.$refs = {
    /**
     * Allow JSON references to other parts of the same file?
     * @type {boolean}
     */
    internal: true,

    /**
     * Allow JSON references to external files/URLs?
     * @type {boolean}
     */
    external: true,

    /**
     * Allow circular (recursive) JSON references?
     * If false, then a {@link ReferenceError} will be thrown if a circular reference is found.
     * If "ignore", then circular references will not be dereferenced.
     * @type {boolean|string}
     */
    circular: true
  };

  /**
   * How long to cache files (in seconds).
   */
  this.cache = {
    /**
     * How long to cache local files, in seconds.
     * @type {number}
     */
    fs: 60, // 1 minute

    /**
     * How long to cache files downloaded via HTTP, in seconds.
     * @type {number}
     */
    http: 5 * 60, // 5 minutes

    /**
     * How long to cache files downloaded via HTTPS, in seconds.
     * @type {number}
     */
    https: 5 * 60 // 5 minutes
  };

  merge(options, this);
}

/**
 * Fast, two-level object merge.
 *
 * @param {?object} src - The object to merge into dest
 * @param {object} dest - The object to be modified
 */
function merge(src, dest) {
  if (src) {
    var topKeys = Object.keys(src);
    for (var i = 0; i < topKeys.length; i++) {
      var topKey = topKeys[i];
      var srcChild = src[topKey];
      if (dest[topKey] === undefined) {
        dest[topKey] = srcChild;
      }
      else {
        var childKeys = Object.keys(srcChild);
        for (var j = 0; j < childKeys.length; j++) {
          var childKey = childKeys[j];
          var srcChildValue = srcChild[childKey];
          if (srcChildValue !== undefined) {
            dest[topKey][childKey] = srcChildValue;
          }
        }
      }
    }
  }
}
