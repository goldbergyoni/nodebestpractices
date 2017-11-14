var util = require('../core').util;
var typeOf = require('./types').typeOf;

var DynamoDBSet = util.inherit({

  constructor: function Set(list, options) {
    options = options || {};
    this.initialize(list, options.validate);
  },

  initialize: function(list, validate) {
    var self = this;
    self.values = [].concat(list);
    self.detectType();
    if (validate) {
      self.validate();
    }
  },

  detectType: function() {
    var self = this;
    var value = self.values[0];
    if (typeOf(value) === 'String') {
      self.type = 'String';
    } else if (typeOf(value) === 'Number') {
      self.type = 'Number';
    } else if (typeOf(value) === 'Binary') {
      self.type = 'Binary';
    } else {
      throw util.error(new Error(), {
        code: 'InvalidSetType',
        message: 'Sets can contain string, number, or binary values'
      });
    }
  },

  validate: function() {
    var self = this;
    var length = self.values.length;
    var values = self.values;
    for (var i = 0; i < length; i++) {
      if (typeOf(values[i]) !== self.type) {
        throw util.error(new Error(), {
          code: 'InvalidType',
          message: self.type + ' Set contains ' + typeOf(values[i]) + ' value'
        });
      }
    }
  }

});

module.exports = DynamoDBSet;
