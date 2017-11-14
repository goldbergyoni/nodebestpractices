var util = require('../core').util;

function typeOf(data) {
  if (data === null && typeof data === 'object') {
    return 'null';
  } else if (data !== undefined && isBinary(data)) {
    return 'Binary';
  } else if (data !== undefined && data.constructor) {
    return util.typeName(data.constructor);
  } else {
    return 'undefined';
  }
}

function isBinary(data) {
  var types = [
    'Buffer', 'File', 'Blob', 'ArrayBuffer', 'DataView',
    'Int8Array', 'Uint8Array', 'Uint8ClampedArray',
    'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array',
    'Float32Array', 'Float64Array'
  ];
  if (util.isNode()) {
    var Stream = util.stream.Stream;
    if (util.Buffer.isBuffer(data) || data instanceof Stream)
      return true;
  } else {
    for (var i = 0; i < types.length; i++) {
      if (data !== undefined && data.constructor) {
        if (util.isType(data, types[i])) return true;
        if (util.typeName(data.constructor) === types[i]) return true;
      }
    }
  }
  return false;
}

module.exports = {
  typeOf: typeOf,
  isBinary: isBinary
};
