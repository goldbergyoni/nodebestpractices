/**
 * Logger that writes to a file
 *
 * @class Loggers.File
 * @extends StreamLogger
 * @constructor
 * @param {Object} config - The configuration for the Logger (See LoggerAbstract for generic options)
 * @param {String} config.path - The location to write
 * @param {Log} bridge - The object that triggers logging events, which we will record
 */

module.exports = File;

var StreamLogger = require('./stream');
var _ = require('../utils');
var fs = require('fs');

function File(log, config) {
  config = config || {};

  // we should probably through an error if they don't support a path
  this.path = config.path || 'elasticsearch.log';

  // yahoo!
  config.stream = fs.createWriteStream(this.path, {
    flags: 'a',
    encoding: 'utf8'
  });

  StreamLogger.call(this, log, config);
}
_.inherits(File, StreamLogger);

File.prototype.onProcessExit = _.handler(function () {
  var toWrite = _.getUnwrittenFromStream(this.stream);
  if (toWrite) {
    fs.appendFileSync(this.path, toWrite);
  }
});
