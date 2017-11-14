
/**
 * Module dependencies.
 */

var methods = require('methods')
  , Test = require('./lib/test')
  , http = require('http');

/**
 * Test against the given `app`,
 * returning a new `Test`.
 *
 * @param {Function|Server} app
 * @return {Test}
 * @api public
 */

module.exports = function(app){
  if ('function' == typeof app) app = http.createServer(app);
  var obj = {};

  methods.forEach(function(method){
    obj[method] = function(url){
      return new Test(app, method, url);
    };
  });

  // Support previous use of del
  obj.del = obj['delete'];

  return obj;
};

/**
 * Expose `Test`
 */

module.exports.Test = Test;

/**
 * Expose the agent function
 */

module.exports.agent = require('./lib/agent');
