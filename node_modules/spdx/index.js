var parser = require('./parser.generated.js').parser;

exports.parse = function(argument) {
  return parser.parse(argument);
};

var containsRepeatedSpace = /\s{2,}/;

exports.valid = function(argument) {
  if (
    argument.trim() !== argument ||
    containsRepeatedSpace.test(argument)
  ) {
    return false;
  }
  try {
    parser.parse(argument);
    return true;
  } catch (e) {
    // jison generates parsers that throw errors, while this function
    // mimics `semver.valid` by returning null.
    return null;
  }
};

// Require the same license and exception data used by the parser.
exports.licenses = require('spdx-license-ids');
exports.exceptions = require('spdx-exceptions');

// The License Expression Syntax version
exports.specificationVersion = '2.0';
