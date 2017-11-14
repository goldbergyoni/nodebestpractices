'use strict';

/** @type {Promise} **/
module.exports = typeof Promise === 'function' ? Promise : require('es6-promise').Promise;
