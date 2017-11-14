module.exports = ConnectionAbstract;

var _ = require('./utils');
var EventEmitter = require('events').EventEmitter;
var Log = require('./log');
var Host = require('./host');
var errors = require('./errors');

/**
 * Abstract class used for Connection classes
 * @class ConnectionAbstract
 * @constructor
 */
function ConnectionAbstract(host, config) {
  config = config || {};
  EventEmitter.call(this);

  this.log = config.log || new Log();
  this.pingTimeout = config.pingTimeout || 3000;

  if (!host) {
    throw new TypeError('Missing host');
  } else if (host instanceof Host) {
    this.host = host;
  } else {
    throw new TypeError('Invalid host');
  }

  _.makeBoundMethods(this);
}
_.inherits(ConnectionAbstract, EventEmitter);

/**
 * Make a request using this connection. Must be overridden by Connection classes, which can add whatever keys to
 * params that they like. These are just the basics.
 *
 * @param [params] {Object} - The parameters for the request
 * @param params.path {String} - The path for which you are requesting
 * @param params.method {String} - The HTTP method for the request (GET, HEAD, etc.)
 * @param params.requestTimeout {Integer} - The amount of time in milliseconds that this request should be allowed to run for.
 * @param cb {Function} - A callback to be called once with `cb(err, responseBody, responseStatus)`
 */
ConnectionAbstract.prototype.request = function () {
  throw new Error('Connection#request must be overwritten by the Connector');
};

ConnectionAbstract.prototype.ping = function (params, cb) {
  if (typeof params === 'function') {
    cb = params;
    params = null;
  } else {
    cb = typeof cb === 'function' ? cb : null;
  }

  var requestTimeout = this.pingTimeout;
  var requestTimeoutId;
  var aborted;
  var abort;

  if (params && params.hasOwnProperty('requestTimeout')) {
    requestTimeout = params.requestTimeout;
  }

  abort = this.request(_.defaults(params || {}, {
    path: '/',
    method: 'HEAD'
  }), function (err) {
    if (aborted) {
      return;
    }
    clearTimeout(requestTimeoutId);
    if (cb) {
      cb(err);
    }
  });

  if (requestTimeout) {
    requestTimeoutId = setTimeout(function () {
      if (abort) {
        abort();
      }
      aborted = true;
      if (cb) {
        cb(new errors.RequestTimeout('Ping Timeout after ' + requestTimeout + 'ms'));
      }
    }, requestTimeout);
  }
};

ConnectionAbstract.prototype.setStatus = function (status) {
  var origStatus = this.status;
  this.status = status;

  this.emit('status set', status, origStatus, this);

  if (status === 'closed') {
    this.removeAllListeners();
  }
};
