/*
 * common.js: Internal helper and utility functions for winston
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var util = require('util'),
    crypto = require('crypto'),
    cycle = require('cycle'),
    fs = require('fs'),
    StringDecoder = require('string_decoder').StringDecoder,
    Stream = require('stream').Stream,
    config = require('./config');

//
// ### function setLevels (target, past, current)
// #### @target {Object} Object on which to set levels.
// #### @past {Object} Previous levels set on target.
// #### @current {Object} Current levels to set on target.
// Create functions on the target objects for each level
// in current.levels. If past is defined, remove functions
// for each of those levels.
//
exports.setLevels = function (target, past, current, isDefault) {
  var self = this;
  if (past) {
    Object.keys(past).forEach(function (level) {
      delete target[level];
    });
  }

  target.levels = current || config.npm.levels;
  if (target.padLevels) {
    target.levelLength = exports.longestElement(Object.keys(target.levels));
  }

  //
  //  Define prototype methods for each log level
  //  e.g. target.log('info', msg) <=> target.info(msg)
  //
  Object.keys(target.levels).forEach(function (level) {

    // TODO Refactor logging methods into a different object to avoid name clashes
    if (level === 'log') {
      console.warn('Log level named "log" will clash with the method "log". Consider using a different name.');
      return;
    }

    target[level] = function (msg) {
      // build argument list (level, msg, ... [string interpolate], [{metadata}], [callback])
      var args = [level].concat(Array.prototype.slice.call(arguments));
      target.log.apply(target, args);
    };
  });

  return target;
};

//
// ### function longestElement
// #### @xs {Array} Array to calculate against
// Returns the longest element in the `xs` array.
//
exports.longestElement = function (xs) {
  return Math.max.apply(
    null,
    xs.map(function (x) { return x.length; })
  );
};

//
// ### function clone (obj)
// #### @obj {Object} Object to clone.
// Helper method for deep cloning pure JSON objects
// i.e. JSON objects that are either literals or objects (no Arrays, etc)
//
exports.clone = function (obj) {
  if (obj instanceof Error) {
    // With potential custom Error objects, this might not be exactly correct,
    // but probably close-enough for purposes of this lib.
    var copy = { message: obj.message };
    Object.getOwnPropertyNames(obj).forEach(function (key) {
      copy[key] = obj[key];
    });

    return copy;
  }
  else if (!(obj instanceof Object)) {
    return obj;
  }
  else if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  return clone(cycle.decycle(obj));
};

function clone(obj) {
  //
  // We only need to clone reference types (Object)
  //
  var copy = Array.isArray(obj) ? [] : {};

  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      copy[i] = obj[i].slice(0);
    }
    else if (obj[i] instanceof Buffer) {
        copy[i] = obj[i].slice(0);
    }
    else if (typeof obj[i] != 'function') {
      copy[i] = obj[i] instanceof Object ? exports.clone(obj[i]) : obj[i];
    }
    else if (typeof obj[i] === 'function') {
      copy[i] = obj[i];
    }
  }

  return copy;
}

//
// ### function log (options)
// #### @options {Object} All information about the log serialization.
// Generic logging function for returning timestamped strings
// with the following options:
//
//    {
//      level:     'level to add to serialized message',
//      message:   'message to serialize',
//      meta:      'additional logging metadata to serialize',
//      colorize:  false, // Colorizes output (only if `.json` is false)
//      align:     false  // Align message level.
//      timestamp: true   // Adds a timestamp to the serialized message
//      label:     'label to prepend the message'
//    }
//
exports.log = function (options) {
  var timestampFn = typeof options.timestamp === 'function'
        ? options.timestamp
        : exports.timestamp,
      timestamp   = options.timestamp ? timestampFn() : null,
      showLevel   = options.showLevel === undefined ? true : options.showLevel,
      meta        = options.meta !== null && options.meta !== undefined && !(options.meta instanceof Error)
        ? exports.clone(options.meta)
        : options.meta || null,
      output;

  //
  // raw mode is intended for outputing winston as streaming JSON to STDOUT
  //
  if (options.raw) {
    if (typeof meta !== 'object' && meta != null) {
      meta = { meta: meta };
    }
    output         = exports.clone(meta) || {};
    output.level   = options.level;
    //
    // Remark (jcrugzz): This used to be output.message = options.message.stripColors.
    // I do not know why this is, it does not make sense but im handling that
    // case here as well as handling the case that does make sense which is to
    // make the `output.message = options.message`
    //
    output.message = options.message.stripColors
      ? options.message.stripColors
      : options.message;

    return JSON.stringify(output);
  }

  //
  // json mode is intended for pretty printing multi-line json to the terminal
  //
  if (options.json || true === options.logstash) {
    if (typeof meta !== 'object' && meta != null) {
      meta = { meta: meta };
    }

    output         = exports.clone(meta) || {};
    output.level   = options.level;
    output.message = output.message || '';

    if (options.label) { output.label = options.label; }
    if (options.message) { output.message = options.message; }
    if (timestamp) { output.timestamp = timestamp; }

    if (options.logstash === true) {
      // use logstash format
      var logstashOutput = {};
      if (output.message !== undefined) {
        logstashOutput['@message'] = output.message;
        delete output.message;
      }

      if (output.timestamp !== undefined) {
        logstashOutput['@timestamp'] = output.timestamp;
        delete output.timestamp;
      }

      logstashOutput['@fields'] = exports.clone(output);
      output = logstashOutput;
    }

    if (typeof options.stringify === 'function') {
      return options.stringify(output);
    }

    return JSON.stringify(output, function (key, value) {
      return value instanceof Buffer
        ? value.toString('base64')
        : value;
    });
  }

  //
  // Remark: this should really be a call to `util.format`.
  //
  if (typeof options.formatter == 'function') {
    options.meta = meta || options.meta;
    return String(options.formatter(exports.clone(options)));
  }

  output = timestamp ? timestamp + ' - ' : '';
  if (showLevel) {
    output += options.colorize === 'all' || options.colorize === 'level' || options.colorize === true
      ? config.colorize(options.level)
      : options.level;
  }

  output += (options.align) ? '\t' : '';
  output += (timestamp || showLevel) ? ': ' : '';
  output += options.label ? ('[' + options.label + '] ') : '';
  output += options.colorize === 'all' || options.colorize === 'message'
    ? config.colorize(options.level, options.message)
    : options.message;

  if (meta !== null && meta !== undefined) {
    if (meta && meta instanceof Error && meta.stack) {
      meta = meta.stack;
    }

    if (typeof meta !== 'object') {
      output += ' ' + meta;
    }
    else if (Object.keys(meta).length > 0) {
      if (typeof options.prettyPrint === 'function') {
        output += ' ' + options.prettyPrint(meta);
      } else if (options.prettyPrint) {
        output += ' ' + '\n' + util.inspect(meta, false, options.depth || null, options.colorize);
      } else if (
        options.humanReadableUnhandledException
          && Object.keys(meta).length >= 5
          && meta.hasOwnProperty('date')
          && meta.hasOwnProperty('process')
          && meta.hasOwnProperty('os')
          && meta.hasOwnProperty('trace')
          && meta.hasOwnProperty('stack')) {

        //
        // If meta carries unhandled exception data serialize the stack nicely
        //
        var stack = meta.stack;
        delete meta.stack;
        delete meta.trace;
        output += ' ' + exports.serialize(meta);

        if (stack) {
          output += '\n' + stack.join('\n');
        }
      } else {
        output += ' ' + exports.serialize(meta);
      }
    }
  }

  return output;
};

exports.capitalize = function (str) {
  return str && str[0].toUpperCase() + str.slice(1);
};

//
// ### function hash (str)
// #### @str {string} String to hash.
// Utility function for creating unique ids
// e.g. Profiling incoming HTTP requests on the same tick
//
exports.hash = function (str) {
  return crypto.createHash('sha1').update(str).digest('hex');
};

//
// ### function pad (n)
// Returns a padded string if `n < 10`.
//
exports.pad = function (n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
};

//
// ### function timestamp ()
// Returns a timestamp string for the current time.
//
exports.timestamp = function () {
  return new Date().toISOString();
};

//
// ### function serialize (obj, key)
// #### @obj {Object|literal} Object to serialize
// #### @key {string} **Optional** Optional key represented by obj in a larger object
// Performs simple comma-separated, `key=value` serialization for Loggly when
// logging to non-JSON inputs.
//
exports.serialize = function (obj, key) {
  // symbols cannot be directly casted to strings
  if (typeof key === 'symbol') {
    key = key.toString()
  }
  if (typeof obj === 'symbol') {
    obj = obj.toString()
  }

  if (obj === null) {
    obj = 'null';
  }
  else if (obj === undefined) {
    obj = 'undefined';
  }
  else if (obj === false) {
    obj = 'false';
  }

  if (typeof obj !== 'object') {
    return key ? key + '=' + obj : obj;
  }

  if (obj instanceof Buffer) {
    return key ? key + '=' + obj.toString('base64') : obj.toString('base64');
  }

  var msg = '',
      keys = Object.keys(obj),
      length = keys.length;

  for (var i = 0; i < length; i++) {
    if (Array.isArray(obj[keys[i]])) {
      msg += keys[i] + '=[';

      for (var j = 0, l = obj[keys[i]].length; j < l; j++) {
        msg += exports.serialize(obj[keys[i]][j]);
        if (j < l - 1) {
          msg += ', ';
        }
      }

      msg += ']';
    }
    else if (obj[keys[i]] instanceof Date) {
      msg += keys[i] + '=' + obj[keys[i]];
    }
    else {
      msg += exports.serialize(obj[keys[i]], keys[i]);
    }

    if (i < length - 1) {
      msg += ', ';
    }
  }

  return msg;
};

//
// ### function tailFile (options, callback)
// #### @options {Object} Options for tail.
// #### @callback {function} Callback to execute on every line.
// `tail -f` a file. Options must include file.
//
exports.tailFile = function(options, callback) {
  var buffer = new Buffer(64 * 1024)
    , decode = new StringDecoder('utf8')
    , stream = new Stream
    , buff = ''
    , pos = 0
    , row = 0;

  if (options.start === -1) {
    delete options.start;
  }

  stream.readable = true;
  stream.destroy = function() {
    stream.destroyed = true;
    stream.emit('end');
    stream.emit('close');
  };

  fs.open(options.file, 'a+', '0644', function(err, fd) {
    if (err) {
      if (!callback) {
        stream.emit('error', err);
      } else {
        callback(err);
      }
      stream.destroy();
      return;
    }

    (function read() {
      if (stream.destroyed) {
        fs.close(fd);
        return;
      }

      return fs.read(fd, buffer, 0, buffer.length, pos, function(err, bytes) {
        if (err) {
          if (!callback) {
            stream.emit('error', err);
          } else {
            callback(err);
          }
          stream.destroy();
          return;
        }

        if (!bytes) {
          if (buff) {
            if (options.start == null || row > options.start) {
              if (!callback) {
                stream.emit('line', buff);
              } else {
                callback(null, buff);
              }
            }
            row++;
            buff = '';
          }
          return setTimeout(read, 1000);
        }

        var data = decode.write(buffer.slice(0, bytes));

        if (!callback) {
          stream.emit('data', data);
        }

        var data = (buff + data).split(/\n+/)
          , l = data.length - 1
          , i = 0;

        for (; i < l; i++) {
          if (options.start == null || row > options.start) {
            if (!callback) {
              stream.emit('line', data[i]);
            } else {
              callback(null, data[i]);
            }
          }
          row++;
        }

        buff = data[l];

        pos += bytes;

        return read();
      });
    })();
  });

  if (!callback) {
    return stream;
  }

  return stream.destroy;
};

//
// ### function stringArrayToSet (array)
// #### @strArray {Array} Array of Set-elements as strings.
// #### @errMsg {string} **Optional** Custom error message thrown on invalid input.
// Returns a Set-like object with strArray's elements as keys (each with the value true).
//
exports.stringArrayToSet = function (strArray, errMsg) {
  if (typeof errMsg === 'undefined') {
    errMsg = 'Cannot make set from Array with non-string elements';
  }
  return strArray.reduce(function (set, el) {
    if (!(typeof el === 'string' || el instanceof String)) {
      throw new Error(errMsg);
    }
    set[el] = true;
    return set;
  }, Object.create(null));
};
