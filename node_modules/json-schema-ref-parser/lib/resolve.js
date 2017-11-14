'use strict';

var Promise = require('./promise'),
    $Ref    = require('./ref'),
    Pointer = require('./pointer'),
    read    = require('./read'),
    util    = require('./util'),
    url     = require('url'),
    ono     = require('ono');

module.exports = resolve;

/**
 * Crawls the JSON schema, finds all external JSON references, and resolves their values.
 * This method does not mutate the JSON schema. The resolved values are added to {@link $RefParser#$refs}.
 *
 * NOTE: We only care about EXTERNAL references here. INTERNAL references are only relevant when dereferencing.
 *
 * @param {$RefParser} parser
 * @param {$RefParserOptions} options
 *
 * @returns {Promise}
 * The promise resolves once all JSON references in the schema have been resolved,
 * including nested references that are contained in externally-referenced files.
 */
function resolve(parser, options) {
  try {
    if (!options.$refs.external) {
      // Nothing to resolve, so exit early
      return Promise.resolve();
    }

    util.debug('Resolving $ref pointers in %s', parser._basePath);
    var promises = crawl(parser.schema, parser._basePath + '#', '#', parser.$refs, options);
    return Promise.all(promises);
  }
  catch (e) {
    return Promise.reject(e);
  }
}

/**
 * Recursively crawls the given value, and resolves any external JSON references.
 *
 * @param {*} obj - The value to crawl. If it's not an object or array, it will be ignored.
 * @param {string} path - The file path or URL used to resolve relative JSON references.
 * @param {string} pathFromRoot - The path to this point from the schema root
 * @param {$Refs} $refs
 * @param {$RefParserOptions} options
 *
 * @returns {Promise[]}
 * Returns an array of promises. There will be one promise for each JSON reference in `obj`.
 * If `obj` does not contain any JSON references, then the array will be empty.
 * If any of the JSON references point to files that contain additional JSON references,
 * then the corresponding promise will internally reference an array of promises.
 */
function crawl(obj, path, pathFromRoot, $refs, options) {
  var promises = [];

  if (obj && typeof obj === 'object') {
    var keys = Object.keys(obj);

    // If there's a "definitions" property, then crawl it FIRST.
    // This is important when bundling, since the expected behavior
    // is to bundle everything into definitions if possible.
    var defs = keys.indexOf('definitions');
    if (defs > 0) {
      keys.splice(0, 0, keys.splice(defs, 1)[0]);
    }

    keys.forEach(function(key) {
      var keyPath = Pointer.join(path, key);
      var keyPathFromRoot = Pointer.join(pathFromRoot, key);
      var value = obj[key];

      if ($Ref.isExternal$Ref(value)) {
        // We found a $ref
        util.debug('Resolving $ref pointer "%s" at %s', value.$ref, keyPath);
        var $refPath = url.resolve(path, value.$ref);

        // Crawl the $referenced value
        var promise = crawl$Ref($refPath, keyPathFromRoot, $refs, options)
          .catch(function(err) {
            throw ono.syntax(err, 'Error at %s', keyPath);
          });
        promises.push(promise);
      }
      else {
        promises = promises.concat(crawl(value, keyPath, keyPathFromRoot, $refs, options));
      }
    });
  }
  return promises;
}

/**
 * Reads the file/URL at the given path, and then crawls the resulting value and resolves
 * any external JSON references.
 *
 * @param {string} path - The file path or URL to crawl
 * @param {string} pathFromRoot - The path to this point from the schema root
 * @param {$Refs} $refs
 * @param {$RefParserOptions} options
 *
 * @returns {Promise}
 * The promise resolves once all JSON references in the object have been resolved,
 * including nested references that are contained in externally-referenced files.
 */
function crawl$Ref(path, pathFromRoot, $refs, options) {
  return read(path, $refs, options)
    .then(function(cached$Ref) {
      // If a cached $ref is returned, then we DON'T need to crawl it
      if (!cached$Ref.cached) {
        var $ref = cached$Ref.$ref;

        // This is a new $ref, so store the path from the root of the JSON schema to this $ref
        $ref.pathFromRoot = pathFromRoot;

        // Crawl the new $ref
        util.debug('Resolving $ref pointers in %s', $ref.path);
        var promises = crawl($ref.value, $ref.path + '#', pathFromRoot, $refs, options);
        return Promise.all(promises);
      }
    });
}
