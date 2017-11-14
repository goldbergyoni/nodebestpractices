var object, sanitizer,
  __hasProp = {}.hasOwnProperty;

object = require('utila').object;

module.exports = sanitizer = {
  sanitize: function(val) {
    return sanitizer._sanitizeAsChildren(val);
  },
  _sanitizeAsChildren: function(val) {
    var _ref;
    if (object.isBareObject(val)) {
      return sanitizer._sanitizeObjectAsChildren(val);
    } else if (Array.isArray(val)) {
      return sanitizer._sanitizeArrayAsChildren(val);
    } else if (val === null || typeof val === 'undefined') {
      return [];
    } else if ((_ref = typeof val) === 'string' || _ref === 'number') {
      return [String(val)];
    } else {
      throw Error("not a valid child node: `" + val);
    }
  },
  _sanitizeObjectAsChildren: function(o) {
    var a, cur, key, val;
    a = [];
    for (key in o) {
      if (!__hasProp.call(o, key)) continue;
      val = o[key];
      cur = {};
      cur[key] = sanitizer.sanitize(val);
      a.push(cur);
    }
    return a;
  },
  _sanitizeArrayAsChildren: function(a) {
    var ret, v, _i, _len;
    ret = [];
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      v = a[_i];
      ret.push(sanitizer._sanitizeAsNode(v));
    }
    return ret;
  },
  _sanitizeAsNode: function(o) {
    var key, keys, obj, _ref;
    if ((_ref = typeof o) === 'string' || _ref === 'number') {
      return String(o);
    } else if (object.isBareObject(o)) {
      keys = Object.keys(o);
      if (keys.length !== 1) {
        throw Error("a node must only have one key as tag name");
      }
      key = keys[0];
      obj = {};
      obj[key] = sanitizer._sanitizeAsChildren(o[key]);
      return obj;
    } else {
      throw Error("not a valid node: `" + o + "`");
    }
  }
};
