
"use strict";

module.exports = Logger;

function Logger(level) {
  this.level = level;
}

var levels = [
  'TRACE',
  'DEBUG',
  'INFO',
  'WARNING',
  'ERROR'
];

levels.forEach(function(level, i){
  Logger[level] = i;
  Logger.prototype[level.toLowerCase()] = function() {
    if (i >= this.level) console.log.apply(console,arguments);
  };
});
