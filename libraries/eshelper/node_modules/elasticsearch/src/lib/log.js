var _ = require('./utils');
var url = require('url');
var EventEmitter = require('events').EventEmitter;

/**
 * Log bridge, which is an [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)
 * that sends events to one or more outputs/loggers. Setup these loggers by
 * specifying their config as the first argument, or by passing it to addOutput().
 *
 * @class Log
 * @uses Loggers.Stdio
 * @constructor
 * @param {object} config
 * @param {string|Object|ArrayOfStrings|ArrayOfObjects} config.log - Either the level
 *  to setup a single logger, a full config object for a logger, or an array of
 *  config objects to use for creating log outputs.
 * @param {string|array} config.log.level|config.log.levels - One or more keys in Log.levels (error, warning, etc.)
 * @param {string} config.log.type - The name of the logger to use for this output
 */
function Log(config) {
  config = config || {};
  if (!config.log) return;

  var i;
  var outputs;

  if (_.isArrayOfStrings(config.log)) {
    outputs = [{
      levels: config.log
    }];
  } else {
    outputs = _.createArray(config.log, function (val) {
      if (_.isPlainObject(val)) {
        return val;
      }
      if (typeof val === 'string') {
        return {
          level: val
        };
      }
    });
  }

  if (!outputs) {
    throw new TypeError('Invalid logging output config. Expected either a log level, array of log levels, ' +
      'a logger config object, or an array of logger config objects.');
  }

  for (i = 0; i < outputs.length; i++) {
    this.addOutput(outputs[i]);
  }
}
_.inherits(Log, EventEmitter);

Log.loggers = require('./loggers');

Log.prototype.close = function () {
  this.emit('closing');
  if (this.listenerCount()) {
    console.error('Something is still listening for log events, but the logger is closing.'); // eslint-disable-line no-console
    this.clearAllListeners();
  }
};

if (EventEmitter.prototype.listenerCount) {
  // If the event emitter implements it's own listenerCount method
  // we don't need to (newer nodes do this).
  Log.prototype.listenerCount = EventEmitter.prototype.listenerCount;
}
else if (EventEmitter.listenerCount) {
  // some versions of node expose EventEmitter::listenerCount
  // which is more efficient the getting all listeners of a
  // specific type
  Log.prototype.listenerCount = function (event) {
    return EventEmitter.listenerCount(this, event);
  };
}
else {
  // all other versions of node expose a #listeners() method, which returns
  // and array we have to count
  Log.prototype.listenerCount = function (event) {
    return this.listeners(event).length;
  };
}

/**
 * Levels observed by the loggers, ordered by rank
 *
 * @property levels
 * @type Array
 * @static
 */
Log.levels = [
  /**
   * Event fired for error level log entries
   * @event error
   * @param {Error} error - The error object to log
   */
  'error',
  /**
   * Event fired for "warning" level log entries, which usually represent things
   * like correctly formatted error responses from ES (400, ...) and recoverable
   * errors (one node unresponsive)
   *
   * @event warning
   * @param {String} message - A message to be logged
   */
  'warning',
  /**
   * Event fired for "info" level log entries, which usually describe what a
   * client is doing (sniffing etc)
   *
   * @event info
   * @param {String} message - A message to be logged
   */
  'info',
  /**
   * Event fired for "debug" level log entries, which will describe requests sent,
   * including their url (no data, response codes, or exec times)
   *
   * @event debug
   * @param {String} message - A message to be logged
   */
  'debug',
  /**
   * Event fired for "trace" level log entries, which provide detailed information
   * about each request made from a client, including reponse codes, execution times,
   * and a full curl command that can be copied and pasted into a terminal
   *
   * @event trace
   * @param {String} method method, , body, responseStatus, responseBody
   * @param {String} url - The url the request was made to
   * @param {String} body - The body of the request
   * @param {Integer} responseStatus - The status code returned from the response
   * @param {String} responseBody - The body of the response
   */
  'trace'
];

/**
 * Converts a log config value (string or array) to an array of level names which
 * it represents
 *
 * @method parseLevels
 * @static
 * @private
 * @param  {String|ArrayOfStrings} input - Cound be a string to specify the max
 *   level, or an array of exact levels
 * @return {Array} -
 */
Log.parseLevels = function (input) {
  switch (typeof input) {
    case 'string':
      var i = _.indexOf(Log.levels, input);
      if (i >= 0) {
        return Log.levels.slice(0, i + 1);
      }
    /* fall through */
    case 'object':
      if (_.isArray(input)) {
        var valid = _.intersection(input, Log.levels);
        if (valid.length === input.length) {
          return valid;
        }
      }
    /* fall through */
    default:
      throw new TypeError('invalid logging level ' + input + '. Expected zero or more of these options: ' +
      Log.levels.join(', '));
  }
};

/**
 * Combine the array-like param into a simple string
 *
 * @method join
 * @static
 * @private
 * @param  {*} arrayish - An array like object that can be itterated by _.each
 * @return {String} - The final string.
 */
Log.join = function (arrayish) {
  return _.map(arrayish, function (item) {
    if (_.isPlainObject(item)) {
      return JSON.stringify(item, null, 2) + '\n';
    } else {
      return item.toString();
    }
  }).join(' ');
};

/**
 * Create a new logger, based on the config.
 *
 * @method addOutput
 * @param {object} config - An object with config options for the logger.
 * @param {String} [config.type=stdio] - The name of an output/logger. Options
 *   can be found in the `src/loggers` directory.
 * @param {String|ArrayOfStrings} [config.level|config.levels=warning] - The levels to output
 *   to this logger, when an array is specified no levels other than the ones
 *   specified will be listened to. When a string is specified, that and all lower
 *   levels will be logged.
 * @return {Logger}
 */
Log.prototype.addOutput = function (config) {
  config = config || {};

  // force "levels" key
  config.levels = Log.parseLevels(config.levels || config.level || 'warning');
  delete config.level;

  var Logger = _.funcEnum(config, 'type', Log.loggers, process.browser ? 'console' : 'stdio');
  return new Logger(this, config);
};

/**
 * Log an error
 *
 * @method error
 * @param  {Error|String} error  The Error to log
 * @return {Boolean} - True if any outputs accepted the message
 */
Log.prototype.error = function (e) {
  if (this.listenerCount('error')) {
    return this.emit('error', e instanceof Error ? e : new Error(e));
  }
};


/**
 * Log a warning message
 *
 * @method warning
 * @param  {*} msg* - Any amount of messages that will be joined before logged
 * @return {Boolean} - True if any outputs accepted the message
 */
Log.prototype.warning = function (/* ...msg */) {
  if (this.listenerCount('warning')) {
    return this.emit('warning', Log.join(arguments));
  }
};


/**
 * Log useful info about what's going on
 *
 * @method info
 * @param  {*} msg* - Any amount of messages that will be joined before logged
 * @return {Boolean} - True if any outputs accepted the message
 */
Log.prototype.info = function (/* ...msg */) {
  if (this.listenerCount('info')) {
    return this.emit('info', Log.join(arguments));
  }
};

/**
 * Log a debug level message
 *
 * @method debug
 * @param  {*} msg* - Any amount of messages that will be joined before logged
 * @return {Boolean} - True if any outputs accepted the message
 */
Log.prototype.debug = function (/* ...msg */) {
  if (this.listenerCount('debug')) {
    return this.emit('debug', Log.join(arguments));
  }
};

/**
 * Log a trace level message
 *
 * @method trace
 * @param {String} method - HTTP request method
 * @param {String|Object} requestUrl - URL requested. If the value is an object,
 *   it is expected to be the return value of Node's url.parse()
 * @param {String} body - The request's body
 * @param {String} responseBody - body returned from ES
 * @param {String} responseStatus - HTTP status code
 * @return {Boolean} - True if any outputs accepted the message
 */
Log.prototype.trace = function (method, requestUrl, body, responseBody, responseStatus) {
  if (this.listenerCount('trace')) {
    return this.emit('trace', Log.normalizeTraceArgs(method, requestUrl, body, responseBody, responseStatus));
  }
};

Log.normalizeTraceArgs = function (method, requestUrl, body, responseBody, responseStatus) {
  if (typeof requestUrl === 'string') {
    requestUrl = url.parse(requestUrl, true, true);
  } else {
    requestUrl = _.clone(requestUrl);
    if (requestUrl.path) {
      requestUrl.query = url.parse(requestUrl.path, true, false).query;
    }
    if (!requestUrl.pathname && requestUrl.path) {
      requestUrl.pathname = requestUrl.path.split('?').shift();
    }
  }

  delete requestUrl.auth;

  return {
    method: method,
    url: url.format(requestUrl),
    body: body,
    status: responseStatus,
    response: responseBody
  };
};

module.exports = Log;
