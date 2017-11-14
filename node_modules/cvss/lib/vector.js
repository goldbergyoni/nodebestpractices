var keys = require('./keys');
var metrics = require('./metrics')

var cvssPrefix = /^CVSS:3\.0/;

function normalize(vector) {
  var payload = {};
  var key, value;
  for (key in vector) {
    if (!metrics.toScore[key]) continue;
    value = vector[key];
    payload[key] = (value in metrics.toScore[key]) ? value : metrics.defaults[key];
  }
  return payload;
}
exports.normalize = normalize;

function parse(input) {

  var parsed = {};
  input.split('/').slice(1).forEach(function (section) {
    if (!section) return;
    var parts = section.split(':');
    parsed[parts[0]] = parts[1];
  });

  return exports.normalize(parsed);
}
exports.parse = parse;

function toString() {
  var key, val;
  var string = '';

  for (key in this) {
    val = this[key];
    if (key in metrics.toScore && typeof val === 'string') {
      string += '/' + key + ':' + val;
    }
  }
  return string ? ('CVSS:3.0' + string) : string;
}
exports.toString = toString;

function validate(input) {
  var type = typeof input;
  var err, vector;
  if (type === 'object' && input !== null) {
    vector = exports.normalize(input);
  } else if (type !== 'string') {
    err = new TypeError('Vector must be an object or string but was a(n) ' + type + ' instead.');
  } else if (!input.match(cvssPrefix)) {
    err = Error('Invalid vector string: CVSS3 version prefix not found.');
  } else {
    vector = exports.parse(input);
  }

  if (vector) {
    keys.base.every(function (key) {
      if (!vector[key]) {
        err = new Error('Invalid CVSS3 vector: missing required metric (' + key + ')');
        return false;
      }
      return true;
    });
  }

  var hasTemporal, hasEnvironmental;
  if (!err) {
    hasTemporal = keys.temporal.some(function (key) {
      return key in vector;
    });
    hasEnvironmental = keys.environmental.some(function (key) {
      return key in vector;
    });
  }

  if (vector) {
    vector.toString = exports.toString;
  }

  return {
    vector: vector,
    type: type,
    error: err,
    hasTemporal: hasTemporal,
    hasEnvironmental: hasEnvironmental
  };
};
exports.validate = validate;
