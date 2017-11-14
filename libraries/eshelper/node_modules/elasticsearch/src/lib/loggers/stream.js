/**
 * Logger that writes to a file
 *
 * @class Loggers.Stream
 * @extends LoggerAbstract
 * @constructor
 * @see LoggerAbstract
 * @param {Object} config - The configuration for the Logger (See LoggerAbstract for generic options)
 * @param {String} config.path - The location to write
 * @param {Log} bridge - The object that triggers logging events, which we will record
 */

module.exports = Stream;

var LoggerAbstract = require('../logger');
var _ = require('../utils');

function Stream(log, config) {
  LoggerAbstract.call(this, log, config);

  if (config.stream && config.stream.write && config.stream.end) {
    this.stream = config.stream;
  } else {
    throw new TypeError('Invalid stream, use an instance of stream.Writable');
  }

  process.once('exit', this.bound.onProcessExit);
}
_.inherits(Stream, LoggerAbstract);

Stream.prototype.cleanUpListeners = _.handler(function () {
  process.removeListener('exit', this.bound.onProcessExit);
  LoggerAbstract.prototype.cleanUpListeners.call(this);
});

// flush the write buffer to stderr synchronously
Stream.prototype.onProcessExit = _.handler(function () {
  // process is dying, lets manually flush the buffer synchronously to stderr.
  var unwritten = _.getUnwrittenFromStream(this.stream);
  if (unwritten) {
    console.error('Log stream did not get to finish writing. Flushing to stderr');
    console.error(unwritten);
  }
});

Stream.prototype.write = function (label, message) {
  this.stream.write(this.format(label, message), 'utf8');
};

Stream.prototype.close = function () {
  this.stream.end();
};
