/*
 * console.js: Transport for outputting to the console
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var events = require('events'),
    os = require('os'),
    util = require('util'),
    common = require('../common'),
    Transport = require('./transport').Transport;

//
// ### function Console (options)
// #### @options {Object} Options for this instance.
// Constructor function for the Console transport object responsible
// for persisting log messages and metadata to a terminal or TTY.
//
var Console = exports.Console = function (options) {
  Transport.call(this, options);
  options = options || {};

  this.json         = options.json        || false;
  this.colorize     = options.colorize    || false;
  this.prettyPrint  = options.prettyPrint || false;
  this.timestamp    = typeof options.timestamp !== 'undefined' ? options.timestamp : false;
  this.showLevel    = options.showLevel === undefined ? true : options.showLevel;
  this.label        = options.label       || null;
  this.logstash     = options.logstash    || false;
  this.depth        = options.depth       || null;
  this.align        = options.align       || false;
  this.stderrLevels = setStderrLevels(options.stderrLevels, options.debugStdout);
  this.eol          = options.eol   || os.EOL;

  if (this.json) {
    this.stringify = options.stringify || function (obj) {
      return JSON.stringify(obj, null, 2);
    };
  }

  //
  // Convert stderrLevels into an Object for faster key-lookup times than an Array.
  //
  // For backwards compatibility, stderrLevels defaults to ['error', 'debug']
  // or ['error'] depending on whether options.debugStdout is true.
  //
  function setStderrLevels (levels, debugStdout) {
    var defaultMsg = 'Cannot have non-string elements in stderrLevels Array';
    if (debugStdout) {
      if (levels) {
        //
        // Don't allow setting both debugStdout and stderrLevels together,
        // since this could cause behaviour a programmer might not expect.
        //
        throw new Error('Cannot set debugStdout and stderrLevels together');
      }

      return common.stringArrayToSet(['error'], defaultMsg);
    }

    if (!levels) {
      return common.stringArrayToSet(['error', 'debug'], defaultMsg);
    } else if (!(Array.isArray(levels))) {
      throw new Error('Cannot set stderrLevels to type other than Array');
    }

    return common.stringArrayToSet(levels, defaultMsg);
  };
};

//
// Inherit from `winston.Transport`.
//
util.inherits(Console, Transport);

//
// Expose the name of this Transport on the prototype
//
Console.prototype.name = 'console';

//
// ### function log (level, msg, [meta], callback)
// #### @level {string} Level at which to log the message.
// #### @msg {string} Message to log
// #### @meta {Object} **Optional** Additional metadata to attach
// #### @callback {function} Continuation to respond to when complete.
// Core logging method exposed to Winston. Metadata is optional.
//
Console.prototype.log = function (level, msg, meta, callback) {
  if (this.silent) {
    return callback(null, true);
  }

  var self = this,
      output;

  output = common.log({
    colorize:    this.colorize,
    json:        this.json,
    level:       level,
    message:     msg,
    meta:        meta,
    stringify:   this.stringify,
    timestamp:   this.timestamp,
    showLevel:   this.showLevel,
    prettyPrint: this.prettyPrint,
    raw:         this.raw,
    label:       this.label,
    logstash:    this.logstash,
    depth:       this.depth,
    formatter:   this.formatter,
    align:       this.align,
    humanReadableUnhandledException: this.humanReadableUnhandledException
  });

  if (this.stderrLevels[level]) {
    process.stderr.write(output + this.eol);
  } else {
    process.stdout.write(output + this.eol);
  }

  //
  // Emit the `logged` event immediately because the event loop
  // will not exit until `process.stdout` has drained anyway.
  //
  self.emit('logged');
  callback(null, true);
};
