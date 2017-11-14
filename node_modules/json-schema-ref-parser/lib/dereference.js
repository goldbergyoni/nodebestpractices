'use strict';

var $Ref    = require('./ref'),
    Pointer = require('./pointer'),
    util    = require('./util'),
    ono     = require('ono'),
    url     = require('url');

module.exports = dereference;

/**
 * Crawls the JSON schema, finds all JSON references, and dereferences them.
 * This method mutates the JSON schema object, replacing JSON references with their resolved value.
 *
 * @param {$RefParser} parser
 * @param {$RefParserOptions} options
 */
function dereference(parser, options) {
  util.debug('Dereferencing $ref pointers in %s', parser._basePath);
  parser.$refs.circular = false;
  crawl(parser.schema, parser._basePath, [], parser.$refs, options);
}

/**
 * Recursively crawls the given value, and dereferences any JSON references.
 *
 * @param {*} obj - The value to crawl. If it's not an object or array, it will be ignored.
 * @param {string} path - The path to use for resolving relative JSON references
 * @param {object[]} parents - An array of the parent objects that have already been dereferenced
 * @param {$Refs} $refs - The resolved JSON references
 * @param {$RefParserOptions} options
 * @returns {boolean} - Returns true if a circular reference was found
 */
function crawl(obj, path, parents, $refs, options) {
  var isCircular = false;

  if (obj && typeof obj === 'object') {
    parents.push(obj);

    Object.keys(obj).forEach(function(key) {
      var keyPath = Pointer.join(path, key);
      var value = obj[key];
      var circular = false;

      if ($Ref.isAllowed$Ref(value, options)) {
        // We found a $ref, so resolve it
        util.debug('Dereferencing $ref pointer "%s" at %s', value.$ref, keyPath);
        var $refPath = url.resolve(path, value.$ref);
        var pointer = $refs._resolve($refPath, options);

        // Check for circular references
        circular = pointer.circular || parents.indexOf(pointer.value) !== -1;
        circular && foundCircularReference(keyPath, $refs, options);

        // Dereference the JSON reference
        var dereferencedValue = getDereferencedValue(value, pointer.value);

        // Crawl the dereferenced value (unless it's circular)
        if (!circular) {
          // If the `crawl` method returns true, then dereferenced value is circular
          circular = crawl(dereferencedValue, pointer.path, parents, $refs, options);
        }

        // Replace the JSON reference with the dereferenced value
        if (!circular || options.$refs.circular === true) {
          obj[key] = dereferencedValue;
        }
      }
      else {
        if (parents.indexOf(value) === -1) {
          circular = crawl(value, keyPath, parents, $refs, options);
        }
        else {
          circular = foundCircularReference(keyPath, $refs, options);
        }
      }

      // Set the "isCircular" flag if this or any other property is circular
      isCircular = isCircular || circular;
    });

    parents.pop();
  }
  return isCircular;
}

/**
 * Returns the dereferenced value of the given JSON reference.
 *
 * @param {object} currentValue - the current value, which contains a JSON reference ("$ref" property)
 * @param {*} resolvedValue - the resolved value, which can be any type
 * @returns {*} - Returns the dereferenced value
 */
function getDereferencedValue(currentValue, resolvedValue) {
  if (resolvedValue && typeof resolvedValue === 'object' && Object.keys(currentValue).length > 1) {
    // The current value has additional properties (other than "$ref"),
    // so merge the resolved value rather than completely replacing the reference
    var merged = {};
    Object.keys(currentValue).forEach(function(key) {
      if (key !== '$ref') {
        merged[key] = currentValue[key];
      }
    });
    Object.keys(resolvedValue).forEach(function(key) {
      if (!(key in merged)) {
        merged[key] = resolvedValue[key];
      }
    });
    return merged;
  }
  else {
    // Completely replace the original reference with the resolved value
    return resolvedValue;
  }
}

/**
 * Called when a circular reference is found.
 * It sets the {@link $Refs#circular} flag, and throws an error if options.$refs.circular is false.
 *
 * @param {string} keyPath - The JSON Reference path of the circular reference
 * @param {$Refs} $refs
 * @param {$RefParserOptions} options
 * @returns {boolean} - always returns true, to indicate that a circular reference was found
 */
function foundCircularReference(keyPath, $refs, options) {
  $refs.circular = true;
  if (!options.$refs.circular) {
    throw ono.reference('Circular $ref pointer found at %s', keyPath);
  }
  return true;
}
