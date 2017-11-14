/**
 * Special version of the Stream logger, which logs errors and warnings to stderr and all other
 * levels to stdout.
 *
 * @class Loggers.Stdio
 * @extends LoggerAbstract
 * @constructor
 * @param {Object} config - The configuration for the Logger
 * @param {string} config.level - The highest log level for this logger to output.
 * @param {Log} bridge - The object that triggers logging events, which we will record
 */

module.exports = Stdio;

var chalk = require('chalk');
// let the user define if they want color in the client config.
chalk.enabled = true;

var LoggerAbstract = require('../logger');
var _ = require('../utils');

var defaultColors = {
  error: chalk.red.bold,
  warning: chalk.yellow.bold,
  info: chalk.cyan.bold,
  debug: chalk.magenta.bold,
  trace: chalk.white.bold
};

function Stdio(log, config) {
  LoggerAbstract.call(this, log, config);

  // config/state
  this.color = !!(_.has(config, 'color') ? config.color : chalk.supportsColor);

  this.colors = _.defaults(config.colors || {}, defaultColors);
}

_.inherits(Stdio, LoggerAbstract);

/**
 * Sends output to a stream, does some formatting first
 *
 * @method write
 * @private
 * @param  {WritableStream} to - The stream that should receive this message
 * @param  {String} label - The text that should be used at the beginning the message
 * @param  {function} colorize - A function that receives a string and returned a colored version of it
 * @param  {*} what - The message to log
 * @return {undefined}
 */
Stdio.prototype.write = function (label, message, to, colorize) {
  label = 'Elasticsearch ' + label;
  if (this.color) {
    label = colorize(label);
  }
  to.write(this.format(label, message));
};

/**
 * Handler for the bridges "error" event
 *
 * @method onError
 * @private
 * @param  {Error} e - The Error object to log
 * @return {undefined}
 */
Stdio.prototype.onError = _.handler(function (e) {
  this.write(e.name === 'Error' ? 'ERROR' : e.name, e.stack, process.stderr, this.colors.error);
});

/**
 * Handler for the bridges "warning" event
 *
 * @method onWarning
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
Stdio.prototype.onWarning = _.handler(function (msg) {
  this.write('WARNING', msg, process.stderr, this.colors.warning);
});

/**
 * Handler for the bridges "info" event
 *
 * @method onInfo
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
Stdio.prototype.onInfo = _.handler(function (msg) {
  this.write('INFO', msg, process.stdout, this.colors.info);
});

/**
 * Handler for the bridges "debug" event
 *
 * @method onDebug
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
Stdio.prototype.onDebug = _.handler(function (msg) {
  this.write('DEBUG', msg, process.stdout, this.colors.debug);
});

/**
 * Handler for the bridges "trace" event
 *
 * @method onTrace
 * @private
 * @return {undefined}
 */
Stdio.prototype.onTrace = _.handler(function (message) {
  this.write('TRACE', this._formatTraceMessage(message), process.stdout, this.colors.trace);
});
