'use strict';

const random = require('random-number');

function generateRandomNumber(min, max) {
	let options = {
		min: min || 0,
		max: max || 999,
		integer: true
	};
	return random(options);
}

const flagHelper = {
  hasFlag: function(value, flag) {
    return (value &= flag) == flag;
  },

  removeFlag: function(value, flag) {
    return value &= ~flag;
  },

  addFlag: function(value, flag) {
    return value |= flag;
  }
};

module.exports = {
  generateRandomNumber,
  flagHelper
};
