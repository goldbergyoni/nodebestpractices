/*
 * transport.js: Base Transport object for all Winston transports.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var events = require('events'),
    util = require('util');

//
// ### function Transport (options)
// #### @options {Object} Options for this instance.
// Constructor function for the Tranport object responsible
// base functionality for all winston transports.
//
var Transport = exports.Transport = function (options) {
  events.EventEmitter.call(this);

  options        = options        || {};
  this.silent    = options.silent || false;
  this.raw       = options.raw    || false;
  this.name      = options.name   || this.name;
  this.formatter = options.formatter;

  //
  // Do not set a default level. When `level` is falsey on any
  // `Transport` instance, any `Logger` instance uses the
  // configured level (instead of the Transport level)
  //
  this.level = options.level;

  this.handleExceptions = options.handleExceptions || false;
  this.exceptionsLevel  = options.exceptionsLevel || 'error';
  this.humanReadableUnhandledException = options.humanReadableUnhandledException || false;
};

//
// Inherit from `events.EventEmitter`.
//
util.inherits(Transport, events.EventEmitter);

//
// ### function formatQuery (query)
// #### @query {string|Object} Query to format
// Formats the specified `query` Object (or string) to conform
// with the underlying implementation of this transport.
//
Transport.prototype.formatQuery = function (query) {
  return query;
};

//
// ### function normalizeQuery (query)
// #### @options {string|Object} Query to normalize
// Normalize options for query
//
Transport.prototype.normalizeQuery = function (options) {
  //
  // Use options similar to loggly.
  // [See Loggly Search API](http://wiki.loggly.com/retrieve_events#optional)
  //

  options = options || {};

  // limit
  options.rows = options.rows || options.limit || 10;

  // starting row offset
  options.start = options.start || 0;

  // now
  options.until = options.until || new Date;
  if (typeof options.until !== 'object') {
    options.until = new Date(options.until);
  }

  // now - 24
  options.from = options.from || (options.until - (24 * 60 * 60 * 1000));
  if (typeof options.from !== 'object') {
    options.from = new Date(options.from);
  }


  // 'asc' or 'desc'
  options.order = options.order || 'desc';

  // which fields to select
  options.fields = options.fields;

  return options;
};

//
// ### function formatResults (results, options)
// #### @results {Object|Array} Results returned from `.query`.
// #### @options {Object} **Optional** Formatting options
// Formats the specified `results` with the given `options` accordinging
// to the implementation of this transport.
//
Transport.prototype.formatResults = function (results, options) {
  return results;
};

//
// ### function logException (msg, meta, callback)
// #### @msg {string} Message to log
// #### @meta {Object} **Optional** Additional metadata to attach
// #### @callback {function} Continuation to respond to when complete.
// Logs the specified `msg`, `meta` and responds to the callback once the log
// operation is complete to ensure that the event loop will not exit before
// all logging has completed.
//
Transport.prototype.logException = function (msg, meta, callback) {
  var self = this,
      called;

  if (this.silent) {
    return callback();
  }

  function onComplete () {
    if (!called) {
      called = true;
      self.removeListener('logged', onComplete);
      self.removeListener('error', onComplete);
      callback();
    }
  }

  this.once('logged', onComplete);
  this.once('error', onComplete);
  this.log(self.exceptionsLevel, msg, meta, function () { });
};
