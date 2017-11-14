var _ = require('./utils');

/**
 * Abstract class providing common functionality to loggers
 * @param {[type]} log [description]
 * @param {[type]} config [description]
 */
function LoggerAbstract(log, config) {
  this.log = log;
  this.listeningLevels = [];

  _.makeBoundMethods(this);

  // when the log closes, remove our event listeners
  this.log.once('closing', this.bound.cleanUpListeners);

  this.setupListeners(config.levels);
}

function padNumToTen(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

/**
 * Create a timestamp string used in the format function. Defers to Log.timestamp if it is defined,
 * Also, feel free to override this at the logger level.
 * @return {String} - Timestamp in ISO 8601 UTC
 */
LoggerAbstract.prototype.timestamp = function () {
  var d = new Date();
  return d.getUTCFullYear() + '-' +
    padNumToTen(d.getUTCMonth() + 1) + '-' +
    padNumToTen(d.getUTCDate()) + 'T' +
    padNumToTen(d.getUTCHours()) + ':' +
    padNumToTen(d.getUTCMinutes()) + ':' +
    padNumToTen(d.getUTCSeconds()) + 'Z';
};

function indent(text, spaces) {
  var space = _.repeat(' ', spaces || 2);
  return (text || '').split(/\r?\n/).map(function (line) {
    return space + line;
  }).join('\n');
}

LoggerAbstract.prototype.format = function (label, message) {
  return label + ': ' + this.timestamp() + '\n' + indent(message) + '\n\n';
};

LoggerAbstract.prototype.write = function () {
  throw new Error('This should be overwritten by the logger');
};

/**
 * Clear the current event listeners and then re-listen for events based on the level specified
 *
 * @method setupListeners
 * @private
 * @param  {Integer} level - The max log level that this logger should listen to
 * @return {undefined}
 */
LoggerAbstract.prototype.setupListeners = function (levels) {
  this.cleanUpListeners();

  this.listeningLevels = [];

  _.each(levels, _.bind(function (level) {
    var fnName = 'on' + _.ucfirst(level);
    if (this.bound[fnName]) {
      this.listeningLevels.push(level);
      this.log.on(level, this.bound[fnName]);
    } else {
      throw new Error('Unable to listen for level "' + level + '"');
    }
  }, this));
};

/**
 * Clear the current event listeners
 *
 * @method cleanUpListeners
 * @private
 * @return {undefined}
 */
LoggerAbstract.prototype.cleanUpListeners = _.handler(function () {
  _.each(this.listeningLevels, _.bind(function (level) {
    this.log.removeListener(level, this.bound['on' + _.ucfirst(level)]);
  }, this));
});

/**
 * Handler for the logs "error" event
 *
 * @method onError
 * @private
 * @param  {Error} e - The Error object to log
 * @return {undefined}
 */
LoggerAbstract.prototype.onError = _.handler(function (e) {
  this.write((e.name === 'Error' ? 'ERROR' : e.name), e.stack);
});

/**
 * Handler for the logs "warning" event
 *
 * @method onWarning
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
LoggerAbstract.prototype.onWarning = _.handler(function (msg) {
  this.write('WARNING', msg);
});

/**
 * Handler for the logs "info" event
 *
 * @method onInfo
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
LoggerAbstract.prototype.onInfo = _.handler(function (msg) {
  this.write('INFO', msg);
});

/**
 * Handler for the logs "debug" event
 *
 * @method onDebug
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
LoggerAbstract.prototype.onDebug = _.handler(function (msg) {
  this.write('DEBUG', msg);
});

/**
 * Handler for the logs "trace" event
 *
 * @method onTrace
 * @private
 * @param  {String} msg - The message to be logged
 * @return {undefined}
 */
LoggerAbstract.prototype.onTrace = _.handler(function (requestDetails) {
  this.write('TRACE', this._formatTraceMessage(requestDetails));
});

LoggerAbstract.prototype._formatTraceMessage = function (req) {
  return '-> ' + req.method + ' ' + req.url + '\n' +
    this._prettyJson(req.body) + '\n' +
    '<- ' + req.status + '\n' +
    this._prettyJson(req.response);
/*
-> GET https://sldfkjsdlfksjdf:9200/slsdkfjlxckvxhclks?sdlkj=sdlfkje
{
  asdflksjdf
}

<- 502
{
  sldfksjdlf
}
*/
};

LoggerAbstract.prototype._prettyJson = function (body) {
  try {
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }
    return JSON.stringify(body, null, '  ').replace(/'/g, '\\u0027');
  } catch (e) {
    return typeof body === 'string' ? body : '';
  }
};

module.exports = LoggerAbstract;
