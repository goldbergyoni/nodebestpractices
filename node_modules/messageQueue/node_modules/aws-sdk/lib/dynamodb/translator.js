var util = require('../core').util;
var convert = require('./converter');

var Translator = function(options) {
  options = options || {};
  this.attrValue = options.attrValue;
};

Translator.prototype.translateInput = function(value, shape) {
  this.mode = 'input';
  return this.translate(value, shape);
};

Translator.prototype.translateOutput = function(value, shape) {
  this.mode = 'output';
  return this.translate(value, shape);
};

Translator.prototype.translate = function(value, shape) {
  var self = this;
  if (!shape || value === undefined) return undefined;

  if (shape.shape === self.attrValue) {
    return convert[self.mode](value);
  }
  switch (shape.type) {
    case 'structure': return self.translateStructure(value, shape);
    case 'map': return self.translateMap(value, shape);
    case 'list': return self.translateList(value, shape);
    default: return self.translateScalar(value, shape);
  }
};

Translator.prototype.translateStructure = function(structure, shape) {
  var self = this;
  if (structure == null) return undefined;

  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      var result = self.translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
};

Translator.prototype.translateList = function(list, shape) {
  var self = this;
  if (list == null) return undefined;

  var out = [];
  util.arrayEach(list, function(value) {
    var result = self.translate(value, shape.member);
    if (result === undefined) out.push(null);
    else out.push(result);
  });
  return out;
};

Translator.prototype.translateMap = function(map, shape) {
  var self = this;
  if (map == null) return undefined;

  var out = {};
  util.each(map, function(key, value) {
    var result = self.translate(value, shape.value);
    if (result === undefined) out[key] = null;
    else out[key] = result;
  });
  return out;
};

Translator.prototype.translateScalar = function(value, shape) {
  return shape.toType(value);
};

module.exports = Translator;
