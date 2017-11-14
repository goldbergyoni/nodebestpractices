/** !
 * JSON Schema $Ref Parser v1.4.1
 *
 * @link https://github.com/BigstickCarpet/json-schema-ref-parser
 * @license MIT
 */
'use strict';

var $Ref    = require('./ref'),
    Pointer = require('./pointer'),
    util    = require('./util'),
    url     = require('url');

module.exports = bundle;

/**
 * Bundles all external JSON references into the main JSON schema, thus resulting in a schema that
 * only has *internal* references, not any *external* references.
 * This method mutates the JSON schema object, adding new references and re-mapping existing ones.
 *
 * @param {$RefParser} parser
 * @param {$RefParserOptions} options
 */
function bundle(parser, options) {
  util.debug('Bundling $ref pointers in %s', parser._basePath);

  remap(parser.$refs, options);
  dereference(parser._basePath, parser.$refs, options);
}

/**
 * Re-maps all $ref pointers in the schema, so that they are relative to the root of the schema.
 *
 * @param {$Refs} $refs
 * @param {$RefParserOptions} options
 */
function remap($refs, options) {
  var remapped = [];

  // Crawl the schema and determine the re-mapped values for all $ref pointers.
  // NOTE: We don't actually APPLY the re-mappings them yet, since that can affect other re-mappings
  Object.keys($refs._$refs).forEach(function(key) {
    var $ref = $refs._$refs[key];
    crawl($ref.value, $ref.path + '#', $refs, remapped, options);
  });

  // Now APPLY all of the re-mappings
  for (var i = 0; i < remapped.length; i++) {
    var mapping = remapped[i];
    mapping.old$Ref.$ref = mapping.new$Ref.$ref;
  }
}

/**
 * Recursively crawls the given value, and re-maps any JSON references.
 *
 * @param {*} obj - The value to crawl. If it's not an object or array, it will be ignored.
 * @param {string} path - The path to use for resolving relative JSON references
 * @param {$Refs} $refs - The resolved JSON references
 * @param {object[]} remapped - An array of the re-mapped JSON references
 * @param {$RefParserOptions} options
 */
function crawl(obj, path, $refs, remapped, options) {
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(function(key) {
      var keyPath = Pointer.join(path, key);
      var value = obj[key];

      if ($Ref.is$Ref(value)) {
        // We found a $ref, so resolve it
        util.debug('Re-mapping $ref pointer "%s" at %s', value.$ref, keyPath);
        var $refPath = url.resolve(path, value.$ref);
        var pointer = $refs._resolve($refPath, options);

        // Re-map the value
        var new$RefPath = pointer.$ref.pathFromRoot + util.path.getHash(pointer.path).substr(1);
        util.debug('    new value: %s', new$RefPath);
        remapped.push({
          old$Ref: value,
          new$Ref: {$ref: new$RefPath}  // Note: DON'T name this property `new` (https://github.com/BigstickCarpet/json-schema-ref-parser/issues/3)
        });
      }
      else {
        crawl(value, keyPath, $refs, remapped, options);
      }
    });
  }
}

/**
 * Dereferences each external $ref pointer exactly ONCE.
 *
 * @param {string} basePath
 * @param {$Refs} $refs
 * @param {$RefParserOptions} options
 */
function dereference(basePath, $refs, options) {
  basePath = util.path.stripHash(basePath);

  Object.keys($refs._$refs).forEach(function(key) {
    var $ref = $refs._$refs[key];
    if ($ref.pathFromRoot !== '#') {
      $refs.set(basePath + $ref.pathFromRoot, $ref.value, options);
    }
  });
}
