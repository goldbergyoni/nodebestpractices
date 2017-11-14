
'use strict';

var _ = require('lodash');

module.exports = History;

function History(data) {
  this.length = 0;
  if (data && data.length) {
    // using lodash to catch array-like objects
    _.each(data, function(record, index){
      this[index] = _.cloneDeep(record);
    }.bind(this));
    this.length = data.length;
  }
}

History.prototype.push = function(obj) {
  this[this.length] = obj;
  this.length++;
};

History.prototype.toJSON = function() {
  var obj = [];
  _.each(this, function(val,index){
    obj[index] = _.cloneDeep(val);
  }.bind(this));
  return obj;
};
