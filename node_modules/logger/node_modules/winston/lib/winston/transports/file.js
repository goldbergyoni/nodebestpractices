/*
 * file.js: Transport for outputting to a local log file
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var events = require('events'),
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    async = require('async'),
    zlib = require('zlib'),
    common = require('../common'),
    Transport = require('./transport').Transport,
    isWritable = require('isstream').isWritable,
    Stream = require('stream').Stream,
    os = require('os');

//
// ### function File (options)
// #### @options {Object} Options for this instance.
// Constructor function for the File transport object responsible
// for persisting log messages and metadata to one or more files.
//
var File = exports.File = function (options) {
  var self = this;
  Transport.call(this, options);

  //
  // Helper function which throws an `Error` in the event
  // that any of the rest of the arguments is present in `options`.
  //
  function throwIf (target /*, illegal... */) {
    Array.prototype.slice.call(arguments, 1).forEach(function (name) {
      if (options[name]) {
        throw new Error('Cannot set ' + name + ' and ' + target + 'together');
      }
    });
  }

  if (options.filename || options.dirname) {
    throwIf('filename or dirname', 'stream');
    this._basename = this.filename = options.filename
      ? path.basename(options.filename)
      : 'winston.log';

    this.dirname = options.dirname || path.dirname(options.filename);
    this.options = options.options || { flags: 'a' };

    //
    // "24 bytes" is maybe a good value for logging lines.
    //
    this.options.highWaterMark = this.options.highWaterMark || 24;
  }
  else if (options.stream) {
    throwIf('stream', 'filename', 'maxsize');
    this._stream = options.stream;
    this._isStreams2 = isWritable(this._stream);
    this._stream.on('error', function(error){
      self.emit('error', error);
    });
    //
    // We need to listen for drain events when
    // write() returns false. This can make node
    // mad at times.
    //
    this._stream.setMaxListeners(Infinity);
  }
  else {
    throw new Error('Cannot log to file without filename or stream.');
  }

  this.json        = options.json !== false;
  this.logstash    = options.logstash    || false;
  this.colorize    = options.colorize    || false;
  this.maxsize     = options.maxsize     || null;
  this.rotationFormat = options.rotationFormat || false;
  this.zippedArchive = options.zippedArchive || false;
  this.maxFiles    = options.maxFiles    || null;
  this.prettyPrint = options.prettyPrint || false;
  this.label       = options.label       || null;
  this.timestamp   = options.timestamp != null ? options.timestamp : true;
  this.eol         = options.eol || os.EOL;
  this.tailable    = options.tailable    || false;
  this.depth       = options.depth       || null;
  this.showLevel   = options.showLevel === undefined ? true : options.showLevel;
  this.maxRetries  = options.maxRetries || 2;

  if (this.json) {
    this.stringify = options.stringify;
  }

  //
  // Internal state variables representing the number
  // of files this instance has created and the current
  // size (in bytes) of the current logfile.
  //
  this._size     = 0;
  this._created  = 0;
  this._buffer   = [];
  this._draining = false;
  this._opening  = false;
  this._failures = 0;
  this._archive = null;
};

//
// Inherit from `winston.Transport`.
//
util.inherits(File, Transport);

//
// Expose the name of this Transport on the prototype
//
File.prototype.name = 'file';

//
// ### function log (level, msg, [meta], callback)
// #### @level {string} Level at which to log the message.
// #### @msg {string} Message to log
// #### @meta {Object} **Optional** Additional metadata to attach
// #### @callback {function} Continuation to respond to when complete.
// Core logging method exposed to Winston. Metadata is optional.
//
File.prototype.log = function (level, msg, meta, callback) {
  if (this.silent) {
    return callback(null, true);
  }

  //
  // If failures exceeds maxRetries then we can't access the
  // stream. In this case we need to perform a noop and return
  // an error.
  //
  if (this._failures >= this.maxRetries) {
    return callback(new Error('Transport is in a failed state.'));
  }

  var self = this;

  if (typeof msg !== 'string') {
    msg = '' + msg;
  }

  var output = common.log({
    level:       level,
    message:     msg,
    meta:        meta,
    json:        this.json,
    logstash:    this.logstash,
    colorize:    this.colorize,
    prettyPrint: this.prettyPrint,
    timestamp:   this.timestamp,
    showLevel:   this.showLevel,
    stringify:   this.stringify,
    label:       this.label,
    depth:       this.depth,
    formatter:   this.formatter,
    humanReadableUnhandledException: this.humanReadableUnhandledException
  });

  if (typeof output === 'string') {
    output += this.eol;
  }

  if (!this.filename) {
    //
    // If there is no `filename` on this instance then it was configured
    // with a raw `WriteableStream` instance and we should not perform any
    // size restrictions.
    //
    this._write(output, callback);
    this._size += output.length;
    this._lazyDrain();
  }
  else {
    this.open(function (err) {
      if (err) {
        //
        // If there was an error enqueue the message
        //
        return self._buffer.push([output, callback]);
      }

      self._write(output, callback);
      self._size += output.length;
      self._lazyDrain();
    });
  }
};

//
// ### function _write (data, cb)
// #### @data {String|Buffer} Data to write to the instance's stream.
// #### @cb {function} Continuation to respond to when complete.
// Write to the stream, ensure execution of a callback on completion.
//
File.prototype._write = function(data, callback) {
  if (this._isStreams2) {
    this._stream.write(data);
    return callback && process.nextTick(function () {
      callback(null, true);
    });
  }

  // If this is a file write stream, we could use the builtin
  // callback functionality, however, the stream is not guaranteed
  // to be an fs.WriteStream.
  var ret = this._stream.write(data);
  if (!callback) return;
  if (ret === false) {
    return this._stream.once('drain', function() {
      callback(null, true);
    });
  }
  process.nextTick(function () {
    callback(null, true);
  });
};

//
// ### function query (options, callback)
// #### @options {Object} Loggly-like query options for this instance.
// #### @callback {function} Continuation to respond to when complete.
// Query the transport. Options object is optional.
//
File.prototype.query = function (options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  var file = path.join(this.dirname, this.filename),
      options = this.normalizeQuery(options),
      buff = '',
      results = [],
      row = 0;

  var stream = fs.createReadStream(file, {
    encoding: 'utf8'
  });

  stream.on('error', function (err) {
    if (stream.readable) {
      stream.destroy();
    }
    if (!callback) return;
    return err.code !== 'ENOENT'
      ? callback(err)
      : callback(null, results);
  });

  stream.on('data', function (data) {
    var data = (buff + data).split(/\n+/),
        l = data.length - 1,
        i = 0;

    for (; i < l; i++) {
      if (!options.start || row >= options.start) {
        add(data[i]);
      }
      row++;
    }

    buff = data[l];
  });

  stream.on('close', function () {
    if (buff) add(buff, true);
    if (options.order === 'desc') {
      results = results.reverse();
    }
    if (callback) callback(null, results);
  });

  function add(buff, attempt) {
    try {
      var log = JSON.parse(buff);
      if (check(log)) push(log);
    } catch (e) {
      if (!attempt) {
        stream.emit('error', e);
      }
    }
  }

  function push(log) {
    if (options.rows && results.length >= options.rows
        && options.order != 'desc') {
      if (stream.readable) {
        stream.destroy();
      }
      return;
    }

    if (options.fields) {
      var obj = {};
      options.fields.forEach(function (key) {
        obj[key] = log[key];
      });
      log = obj;
    }

    if (options.order === 'desc') {
      if (results.length >= options.rows) {
        results.shift();
      }
    }
    results.push(log);
  }

  function check(log) {
    if (!log) return;

    if (typeof log !== 'object') return;

    var time = new Date(log.timestamp);
    if ((options.from && time < options.from)
        || (options.until && time > options.until)
        || (options.level && options.level !== log.level)) {
      return;
    }

    return true;
  }
};

//
// ### function stream (options)
// #### @options {Object} Stream options for this instance.
// Returns a log stream for this transport. Options object is optional.
//
File.prototype.stream = function (options) {
  var file = path.join(this.dirname, this.filename),
      options = options || {},
      stream = new Stream;

  var tail = {
    file: file,
    start: options.start
  };

  stream.destroy = common.tailFile(tail, function (err, line) {

    if(err){
      return stream.emit('error',err);
    }

    try {
      stream.emit('data', line);
      line = JSON.parse(line);
      stream.emit('log', line);
    } catch (e) {
      stream.emit('error', e);
    }
  });

  return stream;
};

//
// ### function open (callback)
// #### @callback {function} Continuation to respond to when complete
// Checks to see if a new file needs to be created based on the `maxsize`
// (if any) and the current size of the file used.
//
File.prototype.open = function (callback) {
  if (this.opening) {
    //
    // If we are already attempting to open the next
    // available file then respond with a value indicating
    // that the message should be buffered.
    //
    return callback(true);
  }
  else if (!this._stream || (this.maxsize && this._size >= this.maxsize)) {
    //
    // If we dont have a stream or have exceeded our size, then create
    // the next stream and respond with a value indicating that
    // the message should be buffered.
    //
    callback(true);
    return this._createStream();
  }

  this._archive = this.zippedArchive ? this._stream.path : null;

  //
  // Otherwise we have a valid (and ready) stream.
  //
  callback();
};

//
// ### function close ()
// Closes the stream associated with this instance.
//
File.prototype.close = function () {
  var self = this;

  if (this._stream) {
    this._stream.end();
    this._stream.destroySoon();

    this._stream.once('finish', function () {
      self.emit('flush');
      self.emit('closed');
    });
  }
};

//
// ### function flush ()
// Flushes any buffered messages to the current `stream`
// used by this instance.
//
File.prototype.flush = function () {
  var self = this;

  // If nothing to flush, there will be no "flush" event from native stream
  // Thus, the "open" event will never be fired (see _createStream.createAndFlush function)
  // That means, self.opening will never set to false and no logs will be written to disk
  if (!this._buffer.length) {
    return self.emit('flush');
  }

  //
  // Iterate over the `_buffer` of enqueued messaged
  // and then write them to the newly created stream.
  //
  this._buffer.forEach(function (item) {
    var str = item[0],
        callback = item[1];

    process.nextTick(function () {
      self._write(str, callback);
      self._size += str.length;
    });
  });

  //
  // Quickly truncate the `_buffer` once the write operations
  // have been started
  //
  self._buffer.length = 0;

  //
  // When the stream has drained we have flushed
  // our buffer.
  //
  self._stream.once('drain', function () {
    self.emit('flush');
    self.emit('logged');
  });
};

//
// ### @private function _createStream ()
// Attempts to open the next appropriate file for this instance
// based on the common state (such as `maxsize` and `_basename`).
//
File.prototype._createStream = function () {
  var self = this;
  this.opening = true;

  (function checkFile (target) {
    var fullname = path.join(self.dirname, target);

    //
    // Creates the `WriteStream` and then flushes any
    // buffered messages.
    //
    function createAndFlush (size) {
      if (self._stream) {
        self._stream.end();
        self._stream.destroySoon();
      }

      self._size = size;
      self.filename = target;
      self._stream = fs.createWriteStream(fullname, self.options);
      self._isStreams2 = isWritable(self._stream);
      self._stream.on('error', function(error){
        if (self._failures < self.maxRetries) {
          self._createStream();
          self._failures++;
        }
        else {
          self.emit('error', error);
        }
      });
      //
      // We need to listen for drain events when
      // write() returns false. This can make node
      // mad at times.
      //
      self._stream.setMaxListeners(Infinity);

      //
      // When the current stream has finished flushing
      // then we can be sure we have finished opening
      // and thus can emit the `open` event.
      //
      self.once('flush', function () {
        // Because "flush" event is based on native stream "drain" event,
        // logs could be written inbetween "self.flush()" and here
        // Therefore, we need to flush again to make sure everything is flushed
        self.flush();

        self.opening = false;
        self.emit('open', fullname);
      });
      //
      // Remark: It is possible that in the time it has taken to find the
      // next logfile to be written more data than `maxsize` has been buffered,
      // but for sensible limits (10s - 100s of MB) this seems unlikely in less
      // than one second.
      //
      self.flush();
      compressFile();
    }

    function compressFile() {
      if (self._archive) {
        var gzip = zlib.createGzip();

        var inp = fs.createReadStream(String(self._archive));
        var out = fs.createWriteStream(self._archive + '.gz');

        inp.pipe(gzip).pipe(out);

        fs.unlink(String(self._archive), function () {});
        self._archive = '';
      }
    }

    fs.stat(fullname, function (err, stats) {
      if (err) {
        if (err.code !== 'ENOENT') {
          return self.emit('error', err);
        }
        return createAndFlush(0);
      }

      if (!stats || (self.maxsize && stats.size >= self.maxsize)) {
        //
        // If `stats.size` is greater than the `maxsize` for
        // this instance then try again
        //
        return self._incFile(function() {
          checkFile(self._getFile());
        });
      }

      createAndFlush(stats.size);
    });
  })(this._getFile());
};


File.prototype._incFile = function (callback) {
  var ext = path.extname(this._basename),
      basename = path.basename(this._basename, ext),
      oldest,
      target;

  if (!this.tailable) {
    this._created += 1;
    this._checkMaxFilesIncrementing(ext, basename, callback);
  }
  else {
    this._checkMaxFilesTailable(ext, basename, callback);
  }
};

//
// ### @private function _getFile ()
// Gets the next filename to use for this instance
// in the case that log filesizes are being capped.
//
File.prototype._getFile = function () {
  var ext = path.extname(this._basename),
      basename = path.basename(this._basename, ext);

  //
  // Caveat emptor (indexzero): rotationFormat() was broken by design
  // when combined with max files because the set of files to unlink
  // is never stored.
  //
  return !this.tailable && this._created
    ? basename + (this.rotationFormat ? this.rotationFormat() : this._created) + ext
    : basename + ext;
};

//
// ### @private function _checkMaxFilesIncrementing ()
// Increment the number of files created or
// checked by this instance.
//
File.prototype._checkMaxFilesIncrementing = function (ext, basename, callback) {
  var oldest, target,
    self = this;

  if (self.zippedArchive) {
    self._archive = path.join(self.dirname, basename +
        ((self._created === 1) ? '' : self._created-1) +
        ext);
  }


  // Check for maxFiles option and delete file
  if (!self.maxFiles || self._created < self.maxFiles) {
    return callback();
  }

  oldest = self._created - self.maxFiles;
  target = path.join(self.dirname, basename + (oldest !== 0 ? oldest : '') + ext +
    (self.zippedArchive ? '.gz' : ''));
  fs.unlink(target, callback);
};

//
// ### @private function _checkMaxFilesTailable ()
//
// Roll files forward based on integer, up to maxFiles.
// e.g. if base if file.log and it becomes oversized, roll
//    to file1.log, and allow file.log to be re-used. If
//    file is oversized again, roll file1.log to file2.log,
//    roll file.log to file1.log, and so on.
File.prototype._checkMaxFilesTailable = function (ext, basename, callback) {
  var tasks = [],
      self = this;

  if (!this.maxFiles)
    return;

  for (var x = this.maxFiles - 1; x > 0; x--) {
    tasks.push(function (i) {
      return function (cb) {
        var tmppath = path.join(self.dirname, basename + (i - 1) + ext +
          (self.zippedArchive ? '.gz' : ''));
        fs.exists(tmppath, function (exists) {
          if (!exists) {
            return cb(null);
          }

          fs.rename(tmppath, path.join(self.dirname, basename + i + ext +
            (self.zippedArchive ? '.gz' : '')), cb);
        });
      };
    }(x));
  }

  if (self.zippedArchive) {
    self._archive = path.join(self.dirname, basename + 1 + ext);
  }
  async.series(tasks, function (err) {
    fs.rename(
      path.join(self.dirname, basename + ext),
      path.join(self.dirname, basename + 1 + ext),
      callback
    );
  });
};

//
// ### @private function _lazyDrain ()
// Lazily attempts to emit the `logged` event when `this.stream` has
// drained. This is really just a simple mutex that only works because
// Node.js is single-threaded.
//
File.prototype._lazyDrain = function () {
  var self = this;

  if (!this._draining && this._stream) {
    this._draining = true;

    this._stream.once('drain', function () {
      self._draining = false;
      self.emit('logged');
    });
  }
};
