/**
 * Simple JSON serializer
 * @type {[type]}
 */
module.exports = Json;

var _ = require('../utils');

function Json() {}

/**
 * Converts a value into a string, or an error
 * @param  {*} val - Any value, methods are stripped and
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify about other params
 * @return {String|Error} - A string is always returned, unless an error occured. then it will be that error.
 */
Json.prototype.serialize = function (val, replacer, spaces) {
  switch (typeof val) {
    case 'string':
      return val;
    case 'object':
      if (val) {
        return JSON.stringify(val, replacer, spaces);
      }
    /* falls through */
    default:
      return;
  }
};

Json.prototype.serialize.contentType = 'application/json';

/**
 * Parse a JSON string, if it is already parsed it is ignored
 * @param  {String} str - the string to parse
 * @return {[type]}
 */
Json.prototype.deserialize = function (str) {
  if (typeof str === 'string') {
    try {
      return JSON.parse(str);
    } catch (e) {}
  }
};

Json.prototype.bulkBody = function (val) {
  var body = '', i;

  if (_.isArray(val)) {
    for (i = 0; i < val.length; i++) {
      body += this.serialize(val[i]) + '\n';
    }
  } else if (typeof val === 'string') {
    // make sure the string ends in a new line
    body = val + (val[val.length - 1] === '\n' ? '' : '\n');
  } else {
    throw new TypeError('Bulk body should either be an Array of commands/string, or a String');
  }

  return body;
};

Json.prototype.bulkBody.contentType = 'application/x-ndjson';
