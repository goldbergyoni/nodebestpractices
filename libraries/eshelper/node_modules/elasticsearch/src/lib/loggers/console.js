/**
 * Special version of the Stream logger, which logs errors and warnings to stderr and all other
 * levels to stdout.
 *
 * @class Loggers.Console
 * @extends LoggerAbstract
 * @constructor
 * @param {Object} config - The configuration for the Logger
 * @param {string} config.level - The highest log level for this logger to output.
 * @param {Log} bridge - The object that triggers logging events, which we will record
 */

module.exports = Console;

var LoggerAbstract = require('../logger');
var _ = require('../utils');

function Console(log, config) {
  LoggerAbstract.call(this, log, config);

  // config/state
  this.color = _.has(config, 'color') ? !!config.color : true;
}
_.inherits(Console, LoggerAbstract);

/**
 * Override the LoggerAbstract's setup listeners to do a little extra setup
 *
 * @param  {Array} levels - The levels that we should be listeneing for
 */
Console.prototype.setupListeners = function (levels) {
  // call the super method
  LoggerAbstract.prototype.setupListeners.call(this, levels);
};

Console.prototype.write = function (label, message, to) {
  if (console[to]) {
    console[to](this.format(label, message));
  }
};

/**
 * Handler for the bridges "error" event
 *
 * @method onError
 * @private
 * @param  {Error} e - The Error object to log
 * @return {undefined}
 */
Console.prototype.onError = _.handler(function (e) {
  var to = console.error ? 'error' : 'log';
  this.write(e.name === 'Error' ? 'ERROR' : e.name, e.stack || e.message, to);
});

/**
 * Handler for the bridges "warning" event
 *
 * @method onWarning
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
Console.prototype.onWarning = _.handler(function (msg) {
  this.write('WARNING', msg, console.warn ? 'warn' : 'log');
});

/**
 * Handler for the bridges "info" event
 *
 * @method onInfo
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
Console.prototype.onInfo = _.handler(function (msg) {
  this.write('INFO', msg, console.info ? 'info' : 'log');
});

/**
 * Handler for the bridges "debug" event
 *
 * @method onDebug
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
Console.prototype.onDebug = _.handler(function (msg) {
  this.write('DEBUG', msg, console.debug ? 'debug' : 'log');
});
/**
 * Handler for the bridges "trace" event
 *
 * @method onTrace
 * @private
 * @return {undefined}
 */
Console.prototype.onTrace = _.handler(function (msg) {
  this.write('TRACE', this._formatTraceMessage(msg), 'log');
});
