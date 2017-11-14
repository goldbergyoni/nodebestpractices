var dummer, object, sanitizer,
  __hasProp = {}.hasOwnProperty;

object = require('utila').object;

sanitizer = require('./sanitizer');

module.exports = dummer = {
  toDom: function(o) {
    if (!Array.isArray(o)) {
      if (!object.isBareObject(o)) {
        throw Error("toDom() only accepts arrays and bare objects as input");
      }
    }
    o = sanitizer.sanitize(o);
    return dummer._children(o);
  },
  _children: function(a, parent) {
    var children, node, prev, v, _i, _len;
    if (parent == null) {
      parent = null;
    }
    children = [];
    prev = null;
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      v = a[_i];
      if (typeof v === 'string') {
        node = dummer._textNode(v);
      } else {
        node = dummer._objectToDom(v, parent);
        node.prev = null;
        node.next = null;
        node.parent = parent;
        if (prev != null) {
          node.prev = prev;
          prev.next = node;
        }
        prev = node;
      }
      children.push(node);
    }
    return children;
  },
  _objectToDom: function(o) {
    var attribs, children, i, k, key, name, node, v, val, _ref;
    i = 0;
    for (k in o) {
      if (!__hasProp.call(o, k)) continue;
      v = o[k];
      if (i > 0) {
        throw Error("_objectToDom() only accepts an object with one key/value");
      }
      key = k;
      val = v;
      i++;
    }
    node = {};
    if (typeof key !== 'string') {
      throw Error("_objectToDom()'s key must be a string of tag name and classes");
    }
    if (typeof val === 'string') {
      children = [dummer._textNode(val)];
    } else if (Array.isArray(val)) {
      children = dummer._children(val, node);
    } else {
      inspect(o);
      throw Error("_objectToDom()'s key's value must only be a string or an array");
    }
    node.type = 'tag';
    _ref = dummer._parseTag(key), name = _ref.name, attribs = _ref.attribs;
    node.name = name;
    node.attribs = attribs;
    node.children = children;
    return node;
  },
  _textNode: function(s) {
    return {
      type: 'text',
      data: s
    };
  },
  _nameRx: /^[a-zA-Z\-\_]{1}[a-zA-Z0-9\-\_]*$/,
  _parseTag: function(k) {
    var attribs, classes, cls, id, m, name, parts;
    if (!k.match(/^[a-zA-Z0-9\#\-\_\.\[\]\"\'\=\,\s]+$/) || k.match(/^[0-9]+/)) {
      throw Error("cannot parse tag `" + k + "`");
    }
    attribs = {};
    parts = {
      name: '',
      attribs: attribs
    };
    if (m = k.match(/^([^\.#]+)/)) {
      name = m[1];
      if (!name.match(dummer._nameRx)) {
        throw Error("tag name `" + name + "` is not valid");
      }
      parts.name = name;
      k = k.substr(name.length, k.length);
    }
    if (m = k.match(/^#([a-zA-Z0-9\-]+)/)) {
      id = m[1];
      if (!id.match(dummer._nameRx)) {
        throw Error("tag id `" + id + "` is not valid");
      }
      attribs.id = id;
      k = k.substr(id.length + 1, k.length);
    }
    classes = [];
    while (m = k.match(/\.([a-zA-Z0-9\-\_]+)/)) {
      cls = m[1];
      if (!cls.match(dummer._nameRx)) {
        throw Error("tag class `" + cls + "` is not valid");
      }
      classes.push(cls);
      k = k.replace('.' + cls, '');
    }
    if (classes.length) {
      attribs["class"] = classes.join(" ");
    }
    return parts;
  }
};
