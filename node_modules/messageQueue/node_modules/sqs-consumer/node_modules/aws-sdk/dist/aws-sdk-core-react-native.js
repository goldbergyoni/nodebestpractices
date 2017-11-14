(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AWS"] = factory();
	else
		root["AWS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * The main AWS namespace
	 */
	var AWS = { util: __webpack_require__(2) };

	/**
	 * @api private
	 * @!macro [new] nobrowser
	 *   @note This feature is not supported in the browser environment of the SDK.
	 */
	var _hidden = {}; _hidden.toString(); // hack to parse macro

	module.exports = AWS;

	AWS.util.update(AWS, {

	  /**
	   * @constant
	   */
	  VERSION: '2.141.0',

	  /**
	   * @api private
	   */
	  Signers: {},

	  /**
	   * @api private
	   */
	  Protocol: {
	    Json: __webpack_require__(13),
	    Query: __webpack_require__(16),
	    Rest: __webpack_require__(20),
	    RestJson: __webpack_require__(21),
	    RestXml: __webpack_require__(22)
	  },

	  /**
	   * @api private
	   */
	  XML: {
	    Builder: __webpack_require__(23),
	    Parser: null // conditionally set based on environment
	  },

	  /**
	   * @api private
	   */
	  JSON: {
	    Builder: __webpack_require__(14),
	    Parser: __webpack_require__(15)
	  },

	  /**
	   * @api private
	   */
	  Model: {
	    Api: __webpack_require__(182),
	    Operation: __webpack_require__(183),
	    Shape: __webpack_require__(18),
	    Paginator: __webpack_require__(184),
	    ResourceWaiter: __webpack_require__(185)
	  },

	  /**
	   * @api private
	   */
	  apiLoader: __webpack_require__(186)
	});

	__webpack_require__(187);
	__webpack_require__(190);

	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(199);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(212);

	/**
	 * @readonly
	 * @return [AWS.SequentialExecutor] a collection of global event listeners that
	 *   are attached to every sent request.
	 * @see AWS.Request AWS.Request for a list of events to listen for
	 * @example Logging the time taken to send a request
	 *   AWS.events.on('send', function startSend(resp) {
	 *     resp.startTime = new Date().getTime();
	 *   }).on('complete', function calculateTime(resp) {
	 *     var time = (new Date().getTime() - resp.startTime) / 1000;
	 *     console.log('Request took ' + time + ' seconds');
	 *   });
	 *
	 *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
	 */
	AWS.events = new AWS.SequentialExecutor();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {/* eslint guard-for-in:0 */
	var AWS;

	/**
	 * A set of utility methods for use with the AWS SDK.
	 *
	 * @!attribute abort
	 *   Return this value from an iterator function {each} or {arrayEach}
	 *   to break out of the iteration.
	 *   @example Breaking out of an iterator function
	 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
	 *       if (key == 'b') return AWS.util.abort;
	 *     });
	 *   @see each
	 *   @see arrayEach
	 * @api private
	 */
	var util = {
	  environment: 'nodejs',
	  engine: function engine() {
	    if (util.isBrowser() && typeof navigator !== 'undefined') {
	      return navigator.userAgent;
	    } else {
	      var engine = process.platform + '/' + process.version;
	      if (process.env.AWS_EXECUTION_ENV) {
	        engine += ' exec-env/' + process.env.AWS_EXECUTION_ENV;
	      }
	      return engine;
	    }
	  },

	  userAgent: function userAgent() {
	    var name = util.environment;
	    var agent = 'aws-sdk-' + name + '/' + __webpack_require__(1).VERSION;
	    if (name === 'nodejs') agent += ' ' + util.engine();
	    return agent;
	  },

	  isBrowser: function isBrowser() { return process && process.browser; },
	  isNode: function isNode() { return !util.isBrowser(); },
	  uriEscape: function uriEscape(string) {
	    var output = encodeURIComponent(string);
	    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

	    // AWS percent-encodes some extra non-standard characters in a URI
	    output = output.replace(/[*]/g, function(ch) {
	      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
	    });

	    return output;
	  },

	  uriEscapePath: function uriEscapePath(string) {
	    var parts = [];
	    util.arrayEach(string.split('/'), function (part) {
	      parts.push(util.uriEscape(part));
	    });
	    return parts.join('/');
	  },

	  urlParse: function urlParse(url) {
	    return util.url.parse(url);
	  },

	  urlFormat: function urlFormat(url) {
	    return util.url.format(url);
	  },

	  queryStringParse: function queryStringParse(qs) {
	    return util.querystring.parse(qs);
	  },

	  queryParamsToString: function queryParamsToString(params) {
	    var items = [];
	    var escape = util.uriEscape;
	    var sortedKeys = Object.keys(params).sort();

	    util.arrayEach(sortedKeys, function(name) {
	      var value = params[name];
	      var ename = escape(name);
	      var result = ename + '=';
	      if (Array.isArray(value)) {
	        var vals = [];
	        util.arrayEach(value, function(item) { vals.push(escape(item)); });
	        result = ename + '=' + vals.sort().join('&' + ename + '=');
	      } else if (value !== undefined && value !== null) {
	        result = ename + '=' + escape(value);
	      }
	      items.push(result);
	    });

	    return items.join('&');
	  },

	  readFileSync: function readFileSync(path) {
	    if (util.isBrowser()) return null;
	    return __webpack_require__(6).readFileSync(path, 'utf-8');
	  },

	  base64: {
	    encode: function encode64(string) {
	      if (typeof string === 'number') {
	        throw util.error(new Error('Cannot base64 encode number ' + string));
	      }
	      if (string === null || typeof string === 'undefined') {
	        return string;
	      }
	      var buf = (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string) : new util.Buffer(string);
	      return buf.toString('base64');
	    },

	    decode: function decode64(string) {
	      if (typeof string === 'number') {
	        throw util.error(new Error('Cannot base64 decode number ' + string));
	      }
	      if (string === null || typeof string === 'undefined') {
	        return string;
	      }
	      return (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string, 'base64') : new util.Buffer(string, 'base64');
	    }

	  },

	  buffer: {
	    toStream: function toStream(buffer) {
	      if (!util.Buffer.isBuffer(buffer)) buffer = new util.Buffer(buffer);

	      var readable = new (util.stream.Readable)();
	      var pos = 0;
	      readable._read = function(size) {
	        if (pos >= buffer.length) return readable.push(null);

	        var end = pos + size;
	        if (end > buffer.length) end = buffer.length;
	        readable.push(buffer.slice(pos, end));
	        pos = end;
	      };

	      return readable;
	    },

	    /**
	     * Concatenates a list of Buffer objects.
	     */
	    concat: function(buffers) {
	      var length = 0,
	          offset = 0,
	          buffer = null, i;

	      for (i = 0; i < buffers.length; i++) {
	        length += buffers[i].length;
	      }

	      buffer = new util.Buffer(length);

	      for (i = 0; i < buffers.length; i++) {
	        buffers[i].copy(buffer, offset);
	        offset += buffers[i].length;
	      }

	      return buffer;
	    }
	  },

	  string: {
	    byteLength: function byteLength(string) {
	      if (string === null || string === undefined) return 0;
	      if (typeof string === 'string') string = new util.Buffer(string);

	      if (typeof string.byteLength === 'number') {
	        return string.byteLength;
	      } else if (typeof string.length === 'number') {
	        return string.length;
	      } else if (typeof string.size === 'number') {
	        return string.size;
	      } else if (typeof string.path === 'string') {
	        return __webpack_require__(6).lstatSync(string.path).size;
	      } else {
	        throw util.error(new Error('Cannot determine length of ' + string),
	          { object: string });
	      }
	    },

	    upperFirst: function upperFirst(string) {
	      return string[0].toUpperCase() + string.substr(1);
	    },

	    lowerFirst: function lowerFirst(string) {
	      return string[0].toLowerCase() + string.substr(1);
	    }
	  },

	  ini: {
	    parse: function string(ini) {
	      var currentSection, map = {};
	      util.arrayEach(ini.split(/\r?\n/), function(line) {
	        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
	        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
	        if (section) {
	          currentSection = section[1];
	        } else if (currentSection) {
	          var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
	          if (item) {
	            map[currentSection] = map[currentSection] || {};
	            map[currentSection][item[1]] = item[2];
	          }
	        }
	      });

	      return map;
	    }
	  },

	  fn: {
	    noop: function() {},

	    /**
	     * Turn a synchronous function into as "async" function by making it call
	     * a callback. The underlying function is called with all but the last argument,
	     * which is treated as the callback. The callback is passed passed a first argument
	     * of null on success to mimick standard node callbacks.
	     */
	    makeAsync: function makeAsync(fn, expectedArgs) {
	      if (expectedArgs && expectedArgs <= fn.length) {
	        return fn;
	      }

	      return function() {
	        var args = Array.prototype.slice.call(arguments, 0);
	        var callback = args.pop();
	        var result = fn.apply(null, args);
	        callback(result);
	      };
	    }
	  },

	  /**
	   * Date and time utility functions.
	   */
	  date: {

	    /**
	     * @return [Date] the current JavaScript date object. Since all
	     *   AWS services rely on this date object, you can override
	     *   this function to provide a special time value to AWS service
	     *   requests.
	     */
	    getDate: function getDate() {
	      if (!AWS) AWS = __webpack_require__(1);
	      if (AWS.config.systemClockOffset) { // use offset when non-zero
	        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
	      } else {
	        return new Date();
	      }
	    },

	    /**
	     * @return [String] the date in ISO-8601 format
	     */
	    iso8601: function iso8601(date) {
	      if (date === undefined) { date = util.date.getDate(); }
	      return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
	    },

	    /**
	     * @return [String] the date in RFC 822 format
	     */
	    rfc822: function rfc822(date) {
	      if (date === undefined) { date = util.date.getDate(); }
	      return date.toUTCString();
	    },

	    /**
	     * @return [Integer] the UNIX timestamp value for the current time
	     */
	    unixTimestamp: function unixTimestamp(date) {
	      if (date === undefined) { date = util.date.getDate(); }
	      return date.getTime() / 1000;
	    },

	    /**
	     * @param [String,number,Date] date
	     * @return [Date]
	     */
	    from: function format(date) {
	      if (typeof date === 'number') {
	        return new Date(date * 1000); // unix timestamp
	      } else {
	        return new Date(date);
	      }
	    },

	    /**
	     * Given a Date or date-like value, this function formats the
	     * date into a string of the requested value.
	     * @param [String,number,Date] date
	     * @param [String] formatter Valid formats are:
	     #   * 'iso8601'
	     #   * 'rfc822'
	     #   * 'unixTimestamp'
	     * @return [String]
	     */
	    format: function format(date, formatter) {
	      if (!formatter) formatter = 'iso8601';
	      return util.date[formatter](util.date.from(date));
	    },

	    parseTimestamp: function parseTimestamp(value) {
	      if (typeof value === 'number') { // unix timestamp (number)
	        return new Date(value * 1000);
	      } else if (value.match(/^\d+$/)) { // unix timestamp
	        return new Date(value * 1000);
	      } else if (value.match(/^\d{4}/)) { // iso8601
	        return new Date(value);
	      } else if (value.match(/^\w{3},/)) { // rfc822
	        return new Date(value);
	      } else {
	        throw util.error(
	          new Error('unhandled timestamp format: ' + value),
	          {code: 'TimestampParserError'});
	      }
	    }

	  },

	  crypto: {
	    crc32Table: [
	     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
	     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
	     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
	     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
	     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
	     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
	     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
	     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
	     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
	     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
	     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
	     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
	     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
	     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
	     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
	     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
	     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
	     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
	     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
	     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
	     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
	     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
	     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
	     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
	     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
	     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
	     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
	     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
	     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
	     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
	     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
	     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
	     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
	     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
	     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
	     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
	     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
	     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
	     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
	     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
	     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
	     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
	     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
	     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
	     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
	     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
	     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
	     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
	     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
	     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
	     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
	     0x2D02EF8D],

	    crc32: function crc32(data) {
	      var tbl = util.crypto.crc32Table;
	      var crc = 0 ^ -1;

	      if (typeof data === 'string') {
	        data = new util.Buffer(data);
	      }

	      for (var i = 0; i < data.length; i++) {
	        var code = data.readUInt8(i);
	        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
	      }
	      return (crc ^ -1) >>> 0;
	    },

	    hmac: function hmac(key, string, digest, fn) {
	      if (!digest) digest = 'binary';
	      if (digest === 'buffer') { digest = undefined; }
	      if (!fn) fn = 'sha256';
	      if (typeof string === 'string') string = new util.Buffer(string);
	      return util.crypto.lib.createHmac(fn, key).update(string).digest(digest);
	    },

	    md5: function md5(data, digest, callback) {
	      return util.crypto.hash('md5', data, digest, callback);
	    },

	    sha256: function sha256(data, digest, callback) {
	      return util.crypto.hash('sha256', data, digest, callback);
	    },

	    hash: function(algorithm, data, digest, callback) {
	      var hash = util.crypto.createHash(algorithm);
	      if (!digest) { digest = 'binary'; }
	      if (digest === 'buffer') { digest = undefined; }
	      if (typeof data === 'string') data = new util.Buffer(data);
	      var sliceFn = util.arraySliceFn(data);
	      var isBuffer = util.Buffer.isBuffer(data);
	      //Identifying objects with an ArrayBuffer as buffers
	      if (util.isBrowser() && typeof ArrayBuffer !== 'undefined' && data && data.buffer instanceof ArrayBuffer) isBuffer = true;

	      if (callback && typeof data === 'object' &&
	          typeof data.on === 'function' && !isBuffer) {
	        data.on('data', function(chunk) { hash.update(chunk); });
	        data.on('error', function(err) { callback(err); });
	        data.on('end', function() { callback(null, hash.digest(digest)); });
	      } else if (callback && sliceFn && !isBuffer &&
	                 typeof FileReader !== 'undefined') {
	        // this might be a File/Blob
	        var index = 0, size = 1024 * 512;
	        var reader = new FileReader();
	        reader.onerror = function() {
	          callback(new Error('Failed to read data.'));
	        };
	        reader.onload = function() {
	          var buf = new util.Buffer(new Uint8Array(reader.result));
	          hash.update(buf);
	          index += buf.length;
	          reader._continueReading();
	        };
	        reader._continueReading = function() {
	          if (index >= data.size) {
	            callback(null, hash.digest(digest));
	            return;
	          }

	          var back = index + size;
	          if (back > data.size) back = data.size;
	          reader.readAsArrayBuffer(sliceFn.call(data, index, back));
	        };

	        reader._continueReading();
	      } else {
	        if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
	          data = new util.Buffer(new Uint8Array(data));
	        }
	        var out = hash.update(data).digest(digest);
	        if (callback) callback(null, out);
	        return out;
	      }
	    },

	    toHex: function toHex(data) {
	      var out = [];
	      for (var i = 0; i < data.length; i++) {
	        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
	      }
	      return out.join('');
	    },

	    createHash: function createHash(algorithm) {
	      return util.crypto.lib.createHash(algorithm);
	    }

	  },

	  /** @!ignore */

	  /* Abort constant */
	  abort: {},

	  each: function each(object, iterFunction) {
	    for (var key in object) {
	      if (Object.prototype.hasOwnProperty.call(object, key)) {
	        var ret = iterFunction.call(this, key, object[key]);
	        if (ret === util.abort) break;
	      }
	    }
	  },

	  arrayEach: function arrayEach(array, iterFunction) {
	    for (var idx in array) {
	      if (Object.prototype.hasOwnProperty.call(array, idx)) {
	        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
	        if (ret === util.abort) break;
	      }
	    }
	  },

	  update: function update(obj1, obj2) {
	    util.each(obj2, function iterator(key, item) {
	      obj1[key] = item;
	    });
	    return obj1;
	  },

	  merge: function merge(obj1, obj2) {
	    return util.update(util.copy(obj1), obj2);
	  },

	  copy: function copy(object) {
	    if (object === null || object === undefined) return object;
	    var dupe = {};
	    // jshint forin:false
	    for (var key in object) {
	      dupe[key] = object[key];
	    }
	    return dupe;
	  },

	  isEmpty: function isEmpty(obj) {
	    for (var prop in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
	        return false;
	      }
	    }
	    return true;
	  },

	  arraySliceFn: function arraySliceFn(obj) {
	    var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
	    return typeof fn === 'function' ? fn : null;
	  },

	  isType: function isType(obj, type) {
	    // handle cross-"frame" objects
	    if (typeof type === 'function') type = util.typeName(type);
	    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
	  },

	  typeName: function typeName(type) {
	    if (Object.prototype.hasOwnProperty.call(type, 'name')) return type.name;
	    var str = type.toString();
	    var match = str.match(/^\s*function (.+)\(/);
	    return match ? match[1] : str;
	  },

	  error: function error(err, options) {
	    var originalError = null;
	    if (typeof err.message === 'string' && err.message !== '') {
	      if (typeof options === 'string' || (options && options.message)) {
	        originalError = util.copy(err);
	        originalError.message = err.message;
	      }
	    }
	    err.message = err.message || null;

	    if (typeof options === 'string') {
	      err.message = options;
	    } else if (typeof options === 'object' && options !== null) {
	      util.update(err, options);
	      if (options.message)
	        err.message = options.message;
	      if (options.code || options.name)
	        err.code = options.code || options.name;
	      if (options.stack)
	        err.stack = options.stack;
	    }

	    if (typeof Object.defineProperty === 'function') {
	      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
	      Object.defineProperty(err, 'message', {enumerable: true});
	    }

	    err.name = options && options.name || err.name || err.code || 'Error';
	    err.time = new Date();

	    if (originalError) err.originalError = originalError;

	    return err;
	  },

	  /**
	   * @api private
	   */
	  inherit: function inherit(klass, features) {
	    var newObject = null;
	    if (features === undefined) {
	      features = klass;
	      klass = Object;
	      newObject = {};
	    } else {
	      var ctor = function ConstructorWrapper() {};
	      ctor.prototype = klass.prototype;
	      newObject = new ctor();
	    }

	    // constructor not supplied, create pass-through ctor
	    if (features.constructor === Object) {
	      features.constructor = function() {
	        if (klass !== Object) {
	          return klass.apply(this, arguments);
	        }
	      };
	    }

	    features.constructor.prototype = newObject;
	    util.update(features.constructor.prototype, features);
	    features.constructor.__super__ = klass;
	    return features.constructor;
	  },

	  /**
	   * @api private
	   */
	  mixin: function mixin() {
	    var klass = arguments[0];
	    for (var i = 1; i < arguments.length; i++) {
	      // jshint forin:false
	      for (var prop in arguments[i].prototype) {
	        var fn = arguments[i].prototype[prop];
	        if (prop !== 'constructor') {
	          klass.prototype[prop] = fn;
	        }
	      }
	    }
	    return klass;
	  },

	  /**
	   * @api private
	   */
	  hideProperties: function hideProperties(obj, props) {
	    if (typeof Object.defineProperty !== 'function') return;

	    util.arrayEach(props, function (key) {
	      Object.defineProperty(obj, key, {
	        enumerable: false, writable: true, configurable: true });
	    });
	  },

	  /**
	   * @api private
	   */
	  property: function property(obj, name, value, enumerable, isValue) {
	    var opts = {
	      configurable: true,
	      enumerable: enumerable !== undefined ? enumerable : true
	    };
	    if (typeof value === 'function' && !isValue) {
	      opts.get = value;
	    }
	    else {
	      opts.value = value; opts.writable = true;
	    }

	    Object.defineProperty(obj, name, opts);
	  },

	  /**
	   * @api private
	   */
	  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
	    var cachedValue = null;

	    // build enumerable attribute for each value with lazy accessor.
	    util.property(obj, name, function() {
	      if (cachedValue === null) {
	        cachedValue = get();
	      }
	      return cachedValue;
	    }, enumerable);
	  },

	  /**
	   * TODO Remove in major version revision
	   * This backfill populates response data without the
	   * top-level payload name.
	   *
	   * @api private
	   */
	  hoistPayloadMember: function hoistPayloadMember(resp) {
	    var req = resp.request;
	    var operation = req.operation;
	    var output = req.service.api.operations[operation].output;
	    if (output.payload) {
	      var payloadMember = output.members[output.payload];
	      var responsePayload = resp.data[output.payload];
	      if (payloadMember.type === 'structure') {
	        util.each(responsePayload, function(key, value) {
	          util.property(resp.data, key, value, false);
	        });
	      }
	    }
	  },

	  /**
	   * Compute SHA-256 checksums of streams
	   *
	   * @api private
	   */
	  computeSha256: function computeSha256(body, done) {
	    if (util.isNode()) {
	      var Stream = util.stream.Stream;
	      var fs = __webpack_require__(6);
	      if (body instanceof Stream) {
	        if (typeof body.path === 'string') { // assume file object
	          var settings = {};
	          if (typeof body.start === 'number') {
	            settings.start = body.start;
	          }
	          if (typeof body.end === 'number') {
	            settings.end = body.end;
	          }
	          body = fs.createReadStream(body.path, settings);
	        } else { // TODO support other stream types
	          return done(new Error('Non-file stream objects are ' +
	                                'not supported with SigV4'));
	        }
	      }
	    }

	    util.crypto.sha256(body, 'hex', function(err, sha) {
	      if (err) done(err);
	      else done(null, sha);
	    });
	  },

	  /**
	   * @api private
	   */
	  isClockSkewed: function isClockSkewed(serverTime) {
	    if (serverTime) {
	      util.property(AWS.config, 'isClockSkewed',
	        Math.abs(new Date().getTime() - serverTime) >= 300000, false);
	      return AWS.config.isClockSkewed;
	    }
	  },

	  applyClockOffset: function applyClockOffset(serverTime) {
	    if (serverTime)
	      AWS.config.systemClockOffset = serverTime - new Date().getTime();
	  },

	  /**
	   * @api private
	   */
	  extractRequestId: function extractRequestId(resp) {
	    var requestId = resp.httpResponse.headers['x-amz-request-id'] ||
	                     resp.httpResponse.headers['x-amzn-requestid'];

	    if (!requestId && resp.data && resp.data.ResponseMetadata) {
	      requestId = resp.data.ResponseMetadata.RequestId;
	    }

	    if (requestId) {
	      resp.requestId = requestId;
	    }

	    if (resp.error) {
	      resp.error.requestId = requestId;
	    }
	  },

	  /**
	   * @api private
	   */
	  addPromises: function addPromises(constructors, PromiseDependency) {
	    if (PromiseDependency === undefined && AWS && AWS.config) {
	      PromiseDependency = AWS.config.getPromisesDependency();
	    }
	    if (PromiseDependency === undefined && typeof Promise !== 'undefined') {
	      PromiseDependency = Promise;
	    }
	    if (typeof PromiseDependency !== 'function') var deletePromises = true;
	    if (!Array.isArray(constructors)) constructors = [constructors];

	    for (var ind = 0; ind < constructors.length; ind++) {
	      var constructor = constructors[ind];
	      if (deletePromises) {
	        if (constructor.deletePromisesFromClass) {
	          constructor.deletePromisesFromClass();
	        }
	      } else if (constructor.addPromisesToClass) {
	        constructor.addPromisesToClass(PromiseDependency);
	      }
	    }
	  },

	  /**
	   * @api private
	   */
	  promisifyMethod: function promisifyMethod(methodName, PromiseDependency) {
	    return function promise() {
	      var self = this;
	      return new PromiseDependency(function(resolve, reject) {
	        self[methodName](function(err, data) {
	          if (err) {
	            reject(err);
	          } else {
	            resolve(data);
	          }
	        });
	      });
	    };
	  },

	  /**
	   * @api private
	   */
	  isDualstackAvailable: function isDualstackAvailable(service) {
	    if (!service) return false;
	    var metadata = __webpack_require__(7);
	    if (typeof service !== 'string') service = service.serviceIdentifier;
	    if (typeof service !== 'string' || !metadata.hasOwnProperty(service)) return false;
	    return !!metadata[service].dualstackAvailable;
	  },

	  /**
	   * @api private
	   */
	  calculateRetryDelay: function calculateRetryDelay(retryCount, retryDelayOptions) {
	    if (!retryDelayOptions) retryDelayOptions = {};
	    var customBackoff = retryDelayOptions.customBackoff || null;
	    if (typeof customBackoff === 'function') {
	      return customBackoff(retryCount);
	    }
	    var base = typeof retryDelayOptions.base === 'number' ? retryDelayOptions.base : 100;
	    var delay = Math.random() * (Math.pow(2, retryCount) * base);
	    return delay;
	  },

	  /**
	   * @api private
	   */
	  handleRequestWithRetries: function handleRequestWithRetries(httpRequest, options, cb) {
	    if (!options) options = {};
	    var http = AWS.HttpClient.getInstance();
	    var httpOptions = options.httpOptions || {};
	    var retryCount = 0;

	    var errCallback = function(err) {
	      var maxRetries = options.maxRetries || 0;
	      if (err && err.code === 'TimeoutError') err.retryable = true;
	      if (err && err.retryable && retryCount < maxRetries) {
	        retryCount++;
	        var delay = util.calculateRetryDelay(retryCount, options.retryDelayOptions);
	        setTimeout(sendRequest, delay + (err.retryAfter || 0));
	      } else {
	        cb(err);
	      }
	    };

	    var sendRequest = function() {
	      var data = '';
	      http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
	        httpResponse.on('data', function(chunk) { data += chunk.toString(); });
	        httpResponse.on('end', function() {
	          var statusCode = httpResponse.statusCode;
	          if (statusCode < 300) {
	            cb(null, data);
	          } else {
	            var retryAfter = parseInt(httpResponse.headers['retry-after'], 10) * 1000 || 0;
	            var err = util.error(new Error(),
	              { retryable: statusCode >= 500 || statusCode === 429 }
	            );
	            if (retryAfter && err.retryable) err.retryAfter = retryAfter;
	            errCallback(err);
	          }
	        });
	      }, errCallback);
	    };

	    AWS.util.defer(sendRequest);
	  },

	  /**
	   * @api private
	   */
	  uuid: {
	    v4: function uuidV4() {
	      return __webpack_require__(8).v4();
	    }
	  },

	  /**
	   * @api private
	   */
	  convertPayloadToString: function convertPayloadToString(resp) {
	    var req = resp.request;
	    var operation = req.operation;
	    var rules = req.service.api.operations[operation].output || {};
	    if (rules.payload && resp.data[rules.payload]) {
	      resp.data[rules.payload] = resp.data[rules.payload].toString();
	    }
	  },

	  /**
	   * @api private
	   */
	  defer: function defer(callback) {
	    if (typeof process === 'object' && typeof process.nextTick === 'function') {
	      process.nextTick(callback);
	    } else if (typeof setImmediate === 'function') {
	      setImmediate(callback);
	    } else {
	      setTimeout(callback, 0);
	    }
	  },

	  /**
	   * @api private
	   */
	  defaultProfile: 'default',

	  /**
	   * @api private
	   */
	  configOptInEnv: 'AWS_SDK_LOAD_CONFIG',

	  /**
	   * @api private
	   */
	  sharedCredentialsFileEnv: 'AWS_SHARED_CREDENTIALS_FILE',

	  /**
	   * @api private
	   */
	  sharedConfigFileEnv: 'AWS_CONFIG_FILE'
	};

	module.exports = util;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(5);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = {"acm":{"name":"ACM","cors":true},"apigateway":{"name":"APIGateway","cors":true},"applicationautoscaling":{"prefix":"application-autoscaling","name":"ApplicationAutoScaling","cors":true},"appstream":{"name":"AppStream"},"autoscaling":{"name":"AutoScaling","cors":true},"batch":{"name":"Batch"},"budgets":{"name":"Budgets"},"clouddirectory":{"name":"CloudDirectory"},"cloudformation":{"name":"CloudFormation","cors":true},"cloudfront":{"name":"CloudFront","versions":["2013-05-12*","2013-11-11*","2014-05-31*","2014-10-21*","2014-11-06*","2015-04-17*","2015-07-27*","2015-09-17*","2016-01-13*","2016-01-28*","2016-08-01*","2016-08-20*","2016-09-07*","2016-09-29*","2016-11-25*"],"cors":true},"cloudhsm":{"name":"CloudHSM","cors":true},"cloudsearch":{"name":"CloudSearch"},"cloudsearchdomain":{"name":"CloudSearchDomain"},"cloudtrail":{"name":"CloudTrail","cors":true},"cloudwatch":{"prefix":"monitoring","name":"CloudWatch","cors":true},"cloudwatchevents":{"prefix":"events","name":"CloudWatchEvents","versions":["2014-02-03*"],"cors":true},"cloudwatchlogs":{"prefix":"logs","name":"CloudWatchLogs","cors":true},"codebuild":{"name":"CodeBuild"},"codecommit":{"name":"CodeCommit","cors":true},"codedeploy":{"name":"CodeDeploy","cors":true},"codepipeline":{"name":"CodePipeline","cors":true},"cognitoidentity":{"prefix":"cognito-identity","name":"CognitoIdentity","cors":true},"cognitoidentityserviceprovider":{"prefix":"cognito-idp","name":"CognitoIdentityServiceProvider","cors":true},"cognitosync":{"prefix":"cognito-sync","name":"CognitoSync","cors":true},"configservice":{"prefix":"config","name":"ConfigService","cors":true},"cur":{"name":"CUR","cors":true},"datapipeline":{"name":"DataPipeline"},"devicefarm":{"name":"DeviceFarm","cors":true},"directconnect":{"name":"DirectConnect","cors":true},"directoryservice":{"prefix":"ds","name":"DirectoryService"},"discovery":{"name":"Discovery"},"dms":{"name":"DMS"},"dynamodb":{"name":"DynamoDB","cors":true},"dynamodbstreams":{"prefix":"streams.dynamodb","name":"DynamoDBStreams","cors":true},"ec2":{"name":"EC2","versions":["2013-06-15*","2013-10-15*","2014-02-01*","2014-05-01*","2014-06-15*","2014-09-01*","2014-10-01*","2015-03-01*","2015-04-15*","2015-10-01*","2016-04-01*","2016-09-15*"],"cors":true},"ecr":{"name":"ECR","cors":true},"ecs":{"name":"ECS","cors":true},"efs":{"prefix":"elasticfilesystem","name":"EFS","cors":true},"elasticache":{"name":"ElastiCache","versions":["2012-11-15*","2014-03-24*","2014-07-15*","2014-09-30*"],"cors":true},"elasticbeanstalk":{"name":"ElasticBeanstalk","cors":true},"elb":{"prefix":"elasticloadbalancing","name":"ELB","cors":true},"elbv2":{"prefix":"elasticloadbalancingv2","name":"ELBv2","cors":true},"emr":{"prefix":"elasticmapreduce","name":"EMR","cors":true},"es":{"name":"ES"},"elastictranscoder":{"name":"ElasticTranscoder","cors":true},"firehose":{"name":"Firehose","cors":true},"gamelift":{"name":"GameLift","cors":true},"glacier":{"name":"Glacier"},"health":{"name":"Health"},"iam":{"name":"IAM"},"importexport":{"name":"ImportExport"},"inspector":{"name":"Inspector","versions":["2015-08-18*"],"cors":true},"iot":{"name":"Iot","cors":true},"iotdata":{"prefix":"iot-data","name":"IotData","cors":true},"kinesis":{"name":"Kinesis","cors":true},"kinesisanalytics":{"name":"KinesisAnalytics"},"kms":{"name":"KMS","cors":true},"lambda":{"name":"Lambda","cors":true},"lexruntime":{"prefix":"runtime.lex","name":"LexRuntime","cors":true},"lightsail":{"name":"Lightsail"},"machinelearning":{"name":"MachineLearning","cors":true},"marketplacecommerceanalytics":{"name":"MarketplaceCommerceAnalytics","cors":true},"marketplacemetering":{"prefix":"meteringmarketplace","name":"MarketplaceMetering"},"mturk":{"prefix":"mturk-requester","name":"MTurk","cors":true},"mobileanalytics":{"name":"MobileAnalytics","cors":true},"opsworks":{"name":"OpsWorks","cors":true},"opsworkscm":{"name":"OpsWorksCM"},"organizations":{"name":"Organizations"},"pinpoint":{"name":"Pinpoint"},"polly":{"name":"Polly","cors":true},"rds":{"name":"RDS","versions":["2014-09-01*"],"cors":true},"redshift":{"name":"Redshift","cors":true},"rekognition":{"name":"Rekognition","cors":true},"resourcegroupstaggingapi":{"name":"ResourceGroupsTaggingAPI"},"route53":{"name":"Route53","cors":true},"route53domains":{"name":"Route53Domains","cors":true},"s3":{"name":"S3","dualstackAvailable":true,"cors":true},"servicecatalog":{"name":"ServiceCatalog","cors":true},"ses":{"prefix":"email","name":"SES","cors":true},"shield":{"name":"Shield"},"simpledb":{"prefix":"sdb","name":"SimpleDB"},"sms":{"name":"SMS"},"snowball":{"name":"Snowball"},"sns":{"name":"SNS","cors":true},"sqs":{"name":"SQS","cors":true},"ssm":{"name":"SSM","cors":true},"storagegateway":{"name":"StorageGateway","cors":true},"stepfunctions":{"prefix":"states","name":"StepFunctions"},"sts":{"name":"STS","cors":true},"support":{"name":"Support"},"swf":{"name":"SWF"},"xray":{"name":"XRay"},"waf":{"name":"WAF","cors":true},"wafregional":{"prefix":"waf-regional","name":"WAFRegional"},"workdocs":{"name":"WorkDocs","cors":true},"workspaces":{"name":"WorkSpaces"},"codestar":{"name":"CodeStar"},"lexmodelbuildingservice":{"prefix":"lex-models","name":"LexModelBuildingService","cors":true},"marketplaceentitlementservice":{"prefix":"entitlement.marketplace","name":"MarketplaceEntitlementService"},"athena":{"name":"Athena"},"greengrass":{"name":"Greengrass"},"dax":{"name":"DAX"},"migrationhub":{"prefix":"AWSMigrationHub","name":"MigrationHub"},"cloudhsmv2":{"name":"CloudHSMV2"},"glue":{"name":"Glue"},"mobile":{"name":"Mobile"}}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var v1 = __webpack_require__(9);
	var v4 = __webpack_require__(12);

	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;

	module.exports = uuid;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(10);
	var bytesToUuid = __webpack_require__(11);

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; ++n) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : bytesToUuid(b);
	}

	module.exports = v1;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection
	var rng;

	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(rnds8);
	    return rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}

	module.exports = rng;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  return bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	module.exports = bytesToUuid;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(10);
	var bytesToUuid = __webpack_require__(11);

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || bytesToUuid(rnds);
	}

	module.exports = v4;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var JsonBuilder = __webpack_require__(14);
	var JsonParser = __webpack_require__(15);

	function buildRequest(req) {
	  var httpRequest = req.httpRequest;
	  var api = req.service.api;
	  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
	  var version = api.jsonVersion || '1.0';
	  var input = api.operations[req.operation].input;
	  var builder = new JsonBuilder();

	  if (version === 1) version = '1.0';
	  httpRequest.body = builder.build(req.params || {}, input);
	  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
	  httpRequest.headers['X-Amz-Target'] = target;
	}

	function extractError(resp) {
	  var error = {};
	  var httpResponse = resp.httpResponse;

	  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
	  if (typeof error.code === 'string') {
	    error.code = error.code.split(':')[0];
	  }

	  if (httpResponse.body.length > 0) {
	    try {
	      var e = JSON.parse(httpResponse.body.toString());
	      if (e.__type || e.code) {
	        error.code = (e.__type || e.code).split('#').pop();
	      }
	      if (error.code === 'RequestEntityTooLarge') {
	        error.message = 'Request body must be less than 1 MB';
	      } else {
	        error.message = (e.message || e.Message || null);
	      }
	    } catch (e) {
	      error.statusCode = httpResponse.statusCode;
	      error.message = httpResponse.statusMessage;
	    }
	  } else {
	    error.statusCode = httpResponse.statusCode;
	    error.message = httpResponse.statusCode.toString();
	  }

	  resp.error = util.error(new Error(), error);
	}

	function extractData(resp) {
	  var body = resp.httpResponse.body.toString() || '{}';
	  if (resp.request.service.config.convertResponseTypes === false) {
	    resp.data = JSON.parse(body);
	  } else {
	    var operation = resp.request.service.api.operations[resp.request.operation];
	    var shape = operation.output || {};
	    var parser = new JsonParser();
	    resp.data = parser.parse(body, shape);
	  }
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);

	function JsonBuilder() { }

	JsonBuilder.prototype.build = function(value, shape) {
	  return JSON.stringify(translate(value, shape));
	};

	function translate(value, shape) {
	  if (!shape || value === undefined || value === null) return undefined;

	  switch (shape.type) {
	    case 'structure': return translateStructure(value, shape);
	    case 'map': return translateMap(value, shape);
	    case 'list': return translateList(value, shape);
	    default: return translateScalar(value, shape);
	  }
	}

	function translateStructure(structure, shape) {
	  var struct = {};
	  util.each(structure, function(name, value) {
	    var memberShape = shape.members[name];
	    if (memberShape) {
	      if (memberShape.location !== 'body') return;
	      var locationName = memberShape.isLocationName ? memberShape.name : name;
	      var result = translate(value, memberShape);
	      if (result !== undefined) struct[locationName] = result;
	    }
	  });
	  return struct;
	}

	function translateList(list, shape) {
	  var out = [];
	  util.arrayEach(list, function(value) {
	    var result = translate(value, shape.member);
	    if (result !== undefined) out.push(result);
	  });
	  return out;
	}

	function translateMap(map, shape) {
	  var out = {};
	  util.each(map, function(key, value) {
	    var result = translate(value, shape.value);
	    if (result !== undefined) out[key] = result;
	  });
	  return out;
	}

	function translateScalar(value, shape) {
	  return shape.toWireFormat(value);
	}

	module.exports = JsonBuilder;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);

	function JsonParser() { }

	JsonParser.prototype.parse = function(value, shape) {
	  return translate(JSON.parse(value), shape);
	};

	function translate(value, shape) {
	  if (!shape || value === undefined) return undefined;

	  switch (shape.type) {
	    case 'structure': return translateStructure(value, shape);
	    case 'map': return translateMap(value, shape);
	    case 'list': return translateList(value, shape);
	    default: return translateScalar(value, shape);
	  }
	}

	function translateStructure(structure, shape) {
	  if (structure == null) return undefined;

	  var struct = {};
	  var shapeMembers = shape.members;
	  util.each(shapeMembers, function(name, memberShape) {
	    var locationName = memberShape.isLocationName ? memberShape.name : name;
	    if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
	      var value = structure[locationName];
	      var result = translate(value, memberShape);
	      if (result !== undefined) struct[name] = result;
	    }
	  });
	  return struct;
	}

	function translateList(list, shape) {
	  if (list == null) return undefined;

	  var out = [];
	  util.arrayEach(list, function(value) {
	    var result = translate(value, shape.member);
	    if (result === undefined) out.push(null);
	    else out.push(result);
	  });
	  return out;
	}

	function translateMap(map, shape) {
	  if (map == null) return undefined;

	  var out = {};
	  util.each(map, function(key, value) {
	    var result = translate(value, shape.value);
	    if (result === undefined) out[key] = null;
	    else out[key] = result;
	  });
	  return out;
	}

	function translateScalar(value, shape) {
	  return shape.toType(value);
	}

	module.exports = JsonParser;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var util = __webpack_require__(2);
	var QueryParamSerializer = __webpack_require__(17);
	var Shape = __webpack_require__(18);

	function buildRequest(req) {
	  var operation = req.service.api.operations[req.operation];
	  var httpRequest = req.httpRequest;
	  httpRequest.headers['Content-Type'] =
	    'application/x-www-form-urlencoded; charset=utf-8';
	  httpRequest.params = {
	    Version: req.service.api.apiVersion,
	    Action: operation.name
	  };

	  // convert the request parameters into a list of query params,
	  // e.g. Deeply.NestedParam.0.Name=value
	  var builder = new QueryParamSerializer();
	  builder.serialize(req.params, operation.input, function(name, value) {
	    httpRequest.params[name] = value;
	  });
	  httpRequest.body = util.queryParamsToString(httpRequest.params);
	}

	function extractError(resp) {
	  var data, body = resp.httpResponse.body.toString();
	  if (body.match('<UnknownOperationException')) {
	    data = {
	      Code: 'UnknownOperation',
	      Message: 'Unknown operation ' + resp.request.operation
	    };
	  } else {
	    try {
	      data = new AWS.XML.Parser().parse(body);
	    } catch (e) {
	      data = {
	        Code: resp.httpResponse.statusCode,
	        Message: resp.httpResponse.statusMessage
	      };
	    }
	  }

	  if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
	  if (data.Errors) data = data.Errors;
	  if (data.Error) data = data.Error;
	  if (data.Code) {
	    resp.error = util.error(new Error(), {
	      code: data.Code,
	      message: data.Message
	    });
	  } else {
	    resp.error = util.error(new Error(), {
	      code: resp.httpResponse.statusCode,
	      message: null
	    });
	  }
	}

	function extractData(resp) {
	  var req = resp.request;
	  var operation = req.service.api.operations[req.operation];
	  var shape = operation.output || {};
	  var origRules = shape;

	  if (origRules.resultWrapper) {
	    var tmp = Shape.create({type: 'structure'});
	    tmp.members[origRules.resultWrapper] = shape;
	    tmp.memberNames = [origRules.resultWrapper];
	    util.property(shape, 'name', shape.resultWrapper);
	    shape = tmp;
	  }

	  var parser = new AWS.XML.Parser();

	  // TODO: Refactor XML Parser to parse RequestId from response.
	  if (shape && shape.members && !shape.members._XAMZRequestId) {
	    var requestIdShape = Shape.create(
	      { type: 'string' },
	      { api: { protocol: 'query' } },
	      'requestId'
	    );
	    shape.members._XAMZRequestId = requestIdShape;
	  }

	  var data = parser.parse(resp.httpResponse.body.toString(), shape);
	  resp.requestId = data._XAMZRequestId || data.requestId;

	  if (data._XAMZRequestId) delete data._XAMZRequestId;

	  if (origRules.resultWrapper) {
	    if (data[origRules.resultWrapper]) {
	      util.update(data, data[origRules.resultWrapper]);
	      delete data[origRules.resultWrapper];
	    }
	  }

	  resp.data = data;
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);

	function QueryParamSerializer() {
	}

	QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
	  serializeStructure('', params, shape, fn);
	};

	function ucfirst(shape) {
	  if (shape.isQueryName || shape.api.protocol !== 'ec2') {
	    return shape.name;
	  } else {
	    return shape.name[0].toUpperCase() + shape.name.substr(1);
	  }
	}

	function serializeStructure(prefix, struct, rules, fn) {
	  util.each(rules.members, function(name, member) {
	    var value = struct[name];
	    if (value === null || value === undefined) return;

	    var memberName = ucfirst(member);
	    memberName = prefix ? prefix + '.' + memberName : memberName;
	    serializeMember(memberName, value, member, fn);
	  });
	}

	function serializeMap(name, map, rules, fn) {
	  var i = 1;
	  util.each(map, function (key, value) {
	    var prefix = rules.flattened ? '.' : '.entry.';
	    var position = prefix + (i++) + '.';
	    var keyName = position + (rules.key.name || 'key');
	    var valueName = position + (rules.value.name || 'value');
	    serializeMember(name + keyName, key, rules.key, fn);
	    serializeMember(name + valueName, value, rules.value, fn);
	  });
	}

	function serializeList(name, list, rules, fn) {
	  var memberRules = rules.member || {};

	  if (list.length === 0) {
	    fn.call(this, name, null);
	    return;
	  }

	  util.arrayEach(list, function (v, n) {
	    var suffix = '.' + (n + 1);
	    if (rules.api.protocol === 'ec2') {
	      // Do nothing for EC2
	      suffix = suffix + ''; // make linter happy
	    } else if (rules.flattened) {
	      if (memberRules.name) {
	        var parts = name.split('.');
	        parts.pop();
	        parts.push(ucfirst(memberRules));
	        name = parts.join('.');
	      }
	    } else {
	      suffix = '.' + (memberRules.name ? memberRules.name : 'member') + suffix;
	    }
	    serializeMember(name + suffix, v, memberRules, fn);
	  });
	}

	function serializeMember(name, value, rules, fn) {
	  if (value === null || value === undefined) return;
	  if (rules.type === 'structure') {
	    serializeStructure(name, value, rules, fn);
	  } else if (rules.type === 'list') {
	    serializeList(name, value, rules, fn);
	  } else if (rules.type === 'map') {
	    serializeMap(name, value, rules, fn);
	  } else {
	    fn(name, rules.toWireFormat(value).toString());
	  }
	}

	module.exports = QueryParamSerializer;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var Collection = __webpack_require__(19);

	var util = __webpack_require__(2);

	function property(obj, name, value) {
	  if (value !== null && value !== undefined) {
	    util.property.apply(this, arguments);
	  }
	}

	function memoizedProperty(obj, name) {
	  if (!obj.constructor.prototype[name]) {
	    util.memoizedProperty.apply(this, arguments);
	  }
	}

	function Shape(shape, options, memberName) {
	  options = options || {};

	  property(this, 'shape', shape.shape);
	  property(this, 'api', options.api, false);
	  property(this, 'type', shape.type);
	  property(this, 'enum', shape.enum);
	  property(this, 'min', shape.min);
	  property(this, 'max', shape.max);
	  property(this, 'pattern', shape.pattern);
	  property(this, 'location', shape.location || this.location || 'body');
	  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
	    shape.locationName || memberName);
	  property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
	  property(this, 'isComposite', shape.isComposite || false);
	  property(this, 'isShape', true, false);
	  property(this, 'isQueryName', Boolean(shape.queryName), false);
	  property(this, 'isLocationName', Boolean(shape.locationName), false);
	  property(this, 'isIdempotent', shape.idempotencyToken === true);
	  property(this, 'isJsonValue', shape.jsonvalue === true);

	  if (options.documentation) {
	    property(this, 'documentation', shape.documentation);
	    property(this, 'documentationUrl', shape.documentationUrl);
	  }

	  if (shape.xmlAttribute) {
	    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
	  }

	  // type conversion and parsing
	  property(this, 'defaultValue', null);
	  this.toWireFormat = function(value) {
	    if (value === null || value === undefined) return '';
	    return value;
	  };
	  this.toType = function(value) { return value; };
	}

	/**
	 * @api private
	 */
	Shape.normalizedTypes = {
	  character: 'string',
	  double: 'float',
	  long: 'integer',
	  short: 'integer',
	  biginteger: 'integer',
	  bigdecimal: 'float',
	  blob: 'binary'
	};

	/**
	 * @api private
	 */
	Shape.types = {
	  'structure': StructureShape,
	  'list': ListShape,
	  'map': MapShape,
	  'boolean': BooleanShape,
	  'timestamp': TimestampShape,
	  'float': FloatShape,
	  'integer': IntegerShape,
	  'string': StringShape,
	  'base64': Base64Shape,
	  'binary': BinaryShape
	};

	Shape.resolve = function resolve(shape, options) {
	  if (shape.shape) {
	    var refShape = options.api.shapes[shape.shape];
	    if (!refShape) {
	      throw new Error('Cannot find shape reference: ' + shape.shape);
	    }

	    return refShape;
	  } else {
	    return null;
	  }
	};

	Shape.create = function create(shape, options, memberName) {
	  if (shape.isShape) return shape;

	  var refShape = Shape.resolve(shape, options);
	  if (refShape) {
	    var filteredKeys = Object.keys(shape);
	    if (!options.documentation) {
	      filteredKeys = filteredKeys.filter(function(name) {
	        return !name.match(/documentation/);
	      });
	    }

	    // create an inline shape with extra members
	    var InlineShape = function() {
	      refShape.constructor.call(this, shape, options, memberName);
	    };
	    InlineShape.prototype = refShape;
	    return new InlineShape();
	  } else {
	    // set type if not set
	    if (!shape.type) {
	      if (shape.members) shape.type = 'structure';
	      else if (shape.member) shape.type = 'list';
	      else if (shape.key) shape.type = 'map';
	      else shape.type = 'string';
	    }

	    // normalize types
	    var origType = shape.type;
	    if (Shape.normalizedTypes[shape.type]) {
	      shape.type = Shape.normalizedTypes[shape.type];
	    }

	    if (Shape.types[shape.type]) {
	      return new Shape.types[shape.type](shape, options, memberName);
	    } else {
	      throw new Error('Unrecognized shape type: ' + origType);
	    }
	  }
	};

	function CompositeShape(shape) {
	  Shape.apply(this, arguments);
	  property(this, 'isComposite', true);

	  if (shape.flattened) {
	    property(this, 'flattened', shape.flattened || false);
	  }
	}

	function StructureShape(shape, options) {
	  var requiredMap = null, firstInit = !this.isShape;

	  CompositeShape.apply(this, arguments);

	  if (firstInit) {
	    property(this, 'defaultValue', function() { return {}; });
	    property(this, 'members', {});
	    property(this, 'memberNames', []);
	    property(this, 'required', []);
	    property(this, 'isRequired', function() { return false; });
	  }

	  if (shape.members) {
	    property(this, 'members', new Collection(shape.members, options, function(name, member) {
	      return Shape.create(member, options, name);
	    }));
	    memoizedProperty(this, 'memberNames', function() {
	      return shape.xmlOrder || Object.keys(shape.members);
	    });
	  }

	  if (shape.required) {
	    property(this, 'required', shape.required);
	    property(this, 'isRequired', function(name) {
	      if (!requiredMap) {
	        requiredMap = {};
	        for (var i = 0; i < shape.required.length; i++) {
	          requiredMap[shape.required[i]] = true;
	        }
	      }

	      return requiredMap[name];
	    }, false, true);
	  }

	  property(this, 'resultWrapper', shape.resultWrapper || null);

	  if (shape.payload) {
	    property(this, 'payload', shape.payload);
	  }

	  if (typeof shape.xmlNamespace === 'string') {
	    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
	  } else if (typeof shape.xmlNamespace === 'object') {
	    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
	    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
	  }
	}

	function ListShape(shape, options) {
	  var self = this, firstInit = !this.isShape;
	  CompositeShape.apply(this, arguments);

	  if (firstInit) {
	    property(this, 'defaultValue', function() { return []; });
	  }

	  if (shape.member) {
	    memoizedProperty(this, 'member', function() {
	      return Shape.create(shape.member, options);
	    });
	  }

	  if (this.flattened) {
	    var oldName = this.name;
	    memoizedProperty(this, 'name', function() {
	      return self.member.name || oldName;
	    });
	  }
	}

	function MapShape(shape, options) {
	  var firstInit = !this.isShape;
	  CompositeShape.apply(this, arguments);

	  if (firstInit) {
	    property(this, 'defaultValue', function() { return {}; });
	    property(this, 'key', Shape.create({type: 'string'}, options));
	    property(this, 'value', Shape.create({type: 'string'}, options));
	  }

	  if (shape.key) {
	    memoizedProperty(this, 'key', function() {
	      return Shape.create(shape.key, options);
	    });
	  }
	  if (shape.value) {
	    memoizedProperty(this, 'value', function() {
	      return Shape.create(shape.value, options);
	    });
	  }
	}

	function TimestampShape(shape) {
	  var self = this;
	  Shape.apply(this, arguments);

	  if (this.location === 'header') {
	    property(this, 'timestampFormat', 'rfc822');
	  } else if (shape.timestampFormat) {
	    property(this, 'timestampFormat', shape.timestampFormat);
	  } else if (!this.timestampFormat && this.api) {
	    if (this.api.timestampFormat) {
	      property(this, 'timestampFormat', this.api.timestampFormat);
	    } else {
	      switch (this.api.protocol) {
	        case 'json':
	        case 'rest-json':
	          property(this, 'timestampFormat', 'unixTimestamp');
	          break;
	        case 'rest-xml':
	        case 'query':
	        case 'ec2':
	          property(this, 'timestampFormat', 'iso8601');
	          break;
	      }
	    }
	  }

	  this.toType = function(value) {
	    if (value === null || value === undefined) return null;
	    if (typeof value.toUTCString === 'function') return value;
	    return typeof value === 'string' || typeof value === 'number' ?
	           util.date.parseTimestamp(value) : null;
	  };

	  this.toWireFormat = function(value) {
	    return util.date.format(value, self.timestampFormat);
	  };
	}

	function StringShape() {
	  Shape.apply(this, arguments);

	  var nullLessProtocols = ['rest-xml', 'query', 'ec2'];
	  this.toType = function(value) {
	    value = this.api && nullLessProtocols.indexOf(this.api.protocol) > -1 ?
	      value || '' : value;
	    if (this.isJsonValue) {
	      return JSON.parse(value);
	    }

	    return value && typeof value.toString === 'function' ?
	      value.toString() : value;
	  };

	  this.toWireFormat = function(value) {
	    return this.isJsonValue ? JSON.stringify(value) : value;
	  };
	}

	function FloatShape() {
	  Shape.apply(this, arguments);

	  this.toType = function(value) {
	    if (value === null || value === undefined) return null;
	    return parseFloat(value);
	  };
	  this.toWireFormat = this.toType;
	}

	function IntegerShape() {
	  Shape.apply(this, arguments);

	  this.toType = function(value) {
	    if (value === null || value === undefined) return null;
	    return parseInt(value, 10);
	  };
	  this.toWireFormat = this.toType;
	}

	function BinaryShape() {
	  Shape.apply(this, arguments);
	  this.toType = util.base64.decode;
	  this.toWireFormat = util.base64.encode;
	}

	function Base64Shape() {
	  BinaryShape.apply(this, arguments);
	}

	function BooleanShape() {
	  Shape.apply(this, arguments);

	  this.toType = function(value) {
	    if (typeof value === 'boolean') return value;
	    if (value === null || value === undefined) return null;
	    return value === 'true';
	  };
	}

	/**
	 * @api private
	 */
	Shape.shapes = {
	  StructureShape: StructureShape,
	  ListShape: ListShape,
	  MapShape: MapShape,
	  StringShape: StringShape,
	  BooleanShape: BooleanShape,
	  Base64Shape: Base64Shape
	};

	module.exports = Shape;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizedProperty = __webpack_require__(2).memoizedProperty;

	function memoize(name, value, fn, nameTr) {
	  memoizedProperty(this, nameTr(name), function() {
	    return fn(name, value);
	  });
	}

	function Collection(iterable, options, fn, nameTr) {
	  nameTr = nameTr || String;
	  var self = this;

	  for (var id in iterable) {
	    if (Object.prototype.hasOwnProperty.call(iterable, id)) {
	      memoize.call(self, id, iterable[id], fn, nameTr);
	    }
	  }
	}

	module.exports = Collection;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);

	function populateMethod(req) {
	  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
	}

	function generateURI(endpointPath, operationPath, input, params) {
	  var uri = [endpointPath, operationPath].join('/');
	  uri = uri.replace(/\/+/g, '/');

	  var queryString = {}, queryStringSet = false;
	  util.each(input.members, function (name, member) {
	    var paramValue = params[name];
	    if (paramValue === null || paramValue === undefined) return;
	    if (member.location === 'uri') {
	      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
	      uri = uri.replace(regex, function(_, plus) {
	        var fn = plus ? util.uriEscapePath : util.uriEscape;
	        return fn(String(paramValue));
	      });
	    } else if (member.location === 'querystring') {
	      queryStringSet = true;

	      if (member.type === 'list') {
	        queryString[member.name] = paramValue.map(function(val) {
	          return util.uriEscape(String(val));
	        });
	      } else if (member.type === 'map') {
	        util.each(paramValue, function(key, value) {
	          if (Array.isArray(value)) {
	            queryString[key] = value.map(function(val) {
	              return util.uriEscape(String(val));
	            });
	          } else {
	            queryString[key] = util.uriEscape(String(value));
	          }
	        });
	      } else {
	        queryString[member.name] = util.uriEscape(String(paramValue));
	      }
	    }
	  });

	  if (queryStringSet) {
	    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
	    var parts = [];
	    util.arrayEach(Object.keys(queryString).sort(), function(key) {
	      if (!Array.isArray(queryString[key])) {
	        queryString[key] = [queryString[key]];
	      }
	      for (var i = 0; i < queryString[key].length; i++) {
	        parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
	      }
	    });
	    uri += parts.join('&');
	  }

	  return uri;
	}

	function populateURI(req) {
	  var operation = req.service.api.operations[req.operation];
	  var input = operation.input;

	  var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
	  req.httpRequest.path = uri;
	}

	function populateHeaders(req) {
	  var operation = req.service.api.operations[req.operation];
	  util.each(operation.input.members, function (name, member) {
	    var value = req.params[name];
	    if (value === null || value === undefined) return;

	    if (member.location === 'headers' && member.type === 'map') {
	      util.each(value, function(key, memberValue) {
	        req.httpRequest.headers[member.name + key] = memberValue;
	      });
	    } else if (member.location === 'header') {
	      value = member.toWireFormat(value).toString();
	      if (member.isJsonValue) {
	        value = util.base64.encode(value);
	      }
	      req.httpRequest.headers[member.name] = value;
	    }
	  });
	}

	function buildRequest(req) {
	  populateMethod(req);
	  populateURI(req);
	  populateHeaders(req);
	}

	function extractError() {
	}

	function extractData(resp) {
	  var req = resp.request;
	  var data = {};
	  var r = resp.httpResponse;
	  var operation = req.service.api.operations[req.operation];
	  var output = operation.output;

	  // normalize headers names to lower-cased keys for matching
	  var headers = {};
	  util.each(r.headers, function (k, v) {
	    headers[k.toLowerCase()] = v;
	  });

	  util.each(output.members, function(name, member) {
	    var header = (member.name || name).toLowerCase();
	    if (member.location === 'headers' && member.type === 'map') {
	      data[name] = {};
	      var location = member.isLocationName ? member.name : '';
	      var pattern = new RegExp('^' + location + '(.+)', 'i');
	      util.each(r.headers, function (k, v) {
	        var result = k.match(pattern);
	        if (result !== null) {
	          data[name][result[1]] = v;
	        }
	      });
	    } else if (member.location === 'header') {
	      if (headers[header] !== undefined) {
	        var value = member.isJsonValue ?
	          util.base64.decode(headers[header]) :
	          headers[header];
	        data[name] = member.toType(value);
	      }
	    } else if (member.location === 'statusCode') {
	      data[name] = parseInt(r.statusCode, 10);
	    }
	  });

	  resp.data = data;
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData,
	  generateURI: generateURI
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var Rest = __webpack_require__(20);
	var Json = __webpack_require__(13);
	var JsonBuilder = __webpack_require__(14);
	var JsonParser = __webpack_require__(15);

	function populateBody(req) {
	  var builder = new JsonBuilder();
	  var input = req.service.api.operations[req.operation].input;

	  if (input.payload) {
	    var params = {};
	    var payloadShape = input.members[input.payload];
	    params = req.params[input.payload];
	    if (params === undefined) return;

	    if (payloadShape.type === 'structure') {
	      req.httpRequest.body = builder.build(params, payloadShape);
	      applyContentTypeHeader(req);
	    } else { // non-JSON payload
	      req.httpRequest.body = params;
	    }
	  } else {
	    req.httpRequest.body = builder.build(req.params, input);
	    applyContentTypeHeader(req);
	  }
	}

	function applyContentTypeHeader(req) {
	  if (!req.httpRequest.headers['Content-Type']) {
	    req.httpRequest.headers['Content-Type'] = 'application/json';
	  }
	}

	function buildRequest(req) {
	  Rest.buildRequest(req);

	  // never send body payload on GET/HEAD/DELETE
	  if (['GET', 'HEAD', 'DELETE'].indexOf(req.httpRequest.method) < 0) {
	    populateBody(req);
	  }
	}

	function extractError(resp) {
	  Json.extractError(resp);
	}

	function extractData(resp) {
	  Rest.extractData(resp);

	  var req = resp.request;
	  var rules = req.service.api.operations[req.operation].output || {};
	  if (rules.payload) {
	    var payloadMember = rules.members[rules.payload];
	    var body = resp.httpResponse.body;
	    if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
	      var parser = new JsonParser();
	      resp.data[rules.payload] = parser.parse(body, payloadMember);
	    } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
	      resp.data[rules.payload] = body;
	    } else {
	      resp.data[rules.payload] = payloadMember.toType(body);
	    }
	  } else {
	    var data = resp.data;
	    Json.extractData(resp);
	    resp.data = util.merge(data, resp.data);
	  }
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var util = __webpack_require__(2);
	var Rest = __webpack_require__(20);

	function populateBody(req) {
	  var input = req.service.api.operations[req.operation].input;
	  var builder = new AWS.XML.Builder();
	  var params = req.params;

	  var payload = input.payload;
	  if (payload) {
	    var payloadMember = input.members[payload];
	    params = params[payload];
	    if (params === undefined) return;

	    if (payloadMember.type === 'structure') {
	      var rootElement = payloadMember.name;
	      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
	    } else { // non-xml payload
	      req.httpRequest.body = params;
	    }
	  } else {
	    req.httpRequest.body = builder.toXML(params, input, input.name ||
	      input.shape || util.string.upperFirst(req.operation) + 'Request');
	  }
	}

	function buildRequest(req) {
	  Rest.buildRequest(req);

	  // never send body payload on GET/HEAD
	  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
	    populateBody(req);
	  }
	}

	function extractError(resp) {
	  Rest.extractError(resp);

	  var data;
	  try {
	    data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
	  } catch (e) {
	    data = {
	      Code: resp.httpResponse.statusCode,
	      Message: resp.httpResponse.statusMessage
	    };
	  }

	  if (data.Errors) data = data.Errors;
	  if (data.Error) data = data.Error;
	  if (data.Code) {
	    resp.error = util.error(new Error(), {
	      code: data.Code,
	      message: data.Message
	    });
	  } else {
	    resp.error = util.error(new Error(), {
	      code: resp.httpResponse.statusCode,
	      message: null
	    });
	  }
	}

	function extractData(resp) {
	  Rest.extractData(resp);

	  var parser;
	  var req = resp.request;
	  var body = resp.httpResponse.body;
	  var operation = req.service.api.operations[req.operation];
	  var output = operation.output;

	  var payload = output.payload;
	  if (payload) {
	    var payloadMember = output.members[payload];
	    if (payloadMember.type === 'structure') {
	      parser = new AWS.XML.Parser();
	      resp.data[payload] = parser.parse(body.toString(), payloadMember);
	    } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
	      resp.data[payload] = body;
	    } else {
	      resp.data[payload] = payloadMember.toType(body);
	    }
	  } else if (body.length > 0) {
	    parser = new AWS.XML.Parser();
	    var data = parser.parse(body.toString(), output);
	    util.update(resp.data, data);
	  }
	}

	module.exports = {
	  buildRequest: buildRequest,
	  extractError: extractError,
	  extractData: extractData
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var builder = __webpack_require__(24);

	function XmlBuilder() { }

	XmlBuilder.prototype.toXML = function(params, shape, rootElement, noEmpty) {
	  var xml = builder.create(rootElement);
	  applyNamespaces(xml, shape);
	  serialize(xml, params, shape);
	  return xml.children.length > 0 || noEmpty ? xml.root().toString() : '';
	};

	function serialize(xml, value, shape) {
	  switch (shape.type) {
	    case 'structure': return serializeStructure(xml, value, shape);
	    case 'map': return serializeMap(xml, value, shape);
	    case 'list': return serializeList(xml, value, shape);
	    default: return serializeScalar(xml, value, shape);
	  }
	}

	function serializeStructure(xml, params, shape) {
	  util.arrayEach(shape.memberNames, function(memberName) {
	    var memberShape = shape.members[memberName];
	    if (memberShape.location !== 'body') return;

	    var value = params[memberName];
	    var name = memberShape.name;
	    if (value !== undefined && value !== null) {
	      if (memberShape.isXmlAttribute) {
	        xml.att(name, value);
	      } else if (memberShape.flattened) {
	        serialize(xml, value, memberShape);
	      } else {
	        var element = xml.ele(name);
	        applyNamespaces(element, memberShape);
	        serialize(element, value, memberShape);
	      }
	    }
	  });
	}

	function serializeMap(xml, map, shape) {
	  var xmlKey = shape.key.name || 'key';
	  var xmlValue = shape.value.name || 'value';

	  util.each(map, function(key, value) {
	    var entry = xml.ele(shape.flattened ? shape.name : 'entry');
	    serialize(entry.ele(xmlKey), key, shape.key);
	    serialize(entry.ele(xmlValue), value, shape.value);
	  });
	}

	function serializeList(xml, list, shape) {
	  if (shape.flattened) {
	    util.arrayEach(list, function(value) {
	      var name = shape.member.name || shape.name;
	      var element = xml.ele(name);
	      serialize(element, value, shape.member);
	    });
	  } else {
	    util.arrayEach(list, function(value) {
	      var name = shape.member.name || 'member';
	      var element = xml.ele(name);
	      serialize(element, value, shape.member);
	    });
	  }
	}

	function serializeScalar(xml, value, shape) {
	  xml.txt(shape.toWireFormat(value));
	}

	function applyNamespaces(xml, shape) {
	  var uri, prefix = 'xmlns';
	  if (shape.xmlNamespaceUri) {
	    uri = shape.xmlNamespaceUri;
	    if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
	  } else if (xml.isRoot && shape.api.xmlNamespaceUri) {
	    uri = shape.api.xmlNamespaceUri;
	  }

	  if (uri) xml.att(prefix, uri);
	}

	module.exports = XmlBuilder;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, assign;

	  assign = __webpack_require__(25);

	  XMLBuilder = __webpack_require__(76);

	  module.exports.create = function(name, xmldec, doctype, options) {
	    options = assign({}, xmldec, doctype, options);
	    return new XMLBuilder(name, options).root();
	  };

	}).call(this);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(26),
	    copyObject = __webpack_require__(44),
	    createAssigner = __webpack_require__(45),
	    isArrayLike = __webpack_require__(55),
	    isPrototype = __webpack_require__(58),
	    keys = __webpack_require__(59);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(27),
	    eq = __webpack_require__(43);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(28);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(30),
	    getValue = __webpack_require__(42);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(31),
	    isMasked = __webpack_require__(39),
	    isObject = __webpack_require__(38),
	    toSource = __webpack_require__(41);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(32),
	    isObject = __webpack_require__(38);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    getRawTag = __webpack_require__(36),
	    objectToString = __webpack_require__(37);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(34);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(35);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(40);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(34);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(26),
	    baseAssignValue = __webpack_require__(27);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(46),
	    isIterateeCall = __webpack_require__(54);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(47),
	    overRest = __webpack_require__(48),
	    setToString = __webpack_require__(50);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(49);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(51),
	    shortOut = __webpack_require__(53);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(52),
	    defineProperty = __webpack_require__(28),
	    identity = __webpack_require__(47);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(43),
	    isArrayLike = __webpack_require__(55),
	    isIndex = __webpack_require__(57),
	    isObject = __webpack_require__(38);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(31),
	    isLength = __webpack_require__(56);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(60),
	    baseKeys = __webpack_require__(73),
	    isArrayLike = __webpack_require__(55);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(61),
	    isArguments = __webpack_require__(62),
	    isArray = __webpack_require__(65),
	    isBuffer = __webpack_require__(66),
	    isIndex = __webpack_require__(57),
	    isTypedArray = __webpack_require__(69);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(63),
	    isObjectLike = __webpack_require__(64);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(32),
	    isObjectLike = __webpack_require__(64);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(34),
	    stubFalse = __webpack_require__(68);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(70),
	    baseUnary = __webpack_require__(71),
	    nodeUtil = __webpack_require__(72);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(32),
	    isLength = __webpack_require__(56),
	    isObjectLike = __webpack_require__(64);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(35);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(58),
	    nativeKeys = __webpack_require__(74);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(75);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLBuilder, XMLDeclaration, XMLDocType, XMLElement, XMLStringifier;

	  XMLStringifier = __webpack_require__(77);

	  XMLDeclaration = __webpack_require__(78);

	  XMLDocType = __webpack_require__(175);

	  XMLElement = __webpack_require__(90);

	  module.exports = XMLBuilder = (function() {
	    function XMLBuilder(name, options) {
	      var root, temp;
	      if (name == null) {
	        throw new Error("Root element needs a name");
	      }
	      if (options == null) {
	        options = {};
	      }
	      this.options = options;
	      this.stringify = new XMLStringifier(options);
	      temp = new XMLElement(this, 'doc');
	      root = temp.element(name);
	      root.isRoot = true;
	      root.documentObject = this;
	      this.rootObject = root;
	      if (!options.headless) {
	        root.declaration(options);
	        if ((options.pubID != null) || (options.sysID != null)) {
	          root.doctype(options);
	        }
	      }
	    }

	    XMLBuilder.prototype.root = function() {
	      return this.rootObject;
	    };

	    XMLBuilder.prototype.end = function(options) {
	      return this.toString(options);
	    };

	    XMLBuilder.prototype.toString = function(options) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      r = '';
	      if (this.xmldec != null) {
	        r += this.xmldec.toString(options);
	      }
	      if (this.doctype != null) {
	        r += this.doctype.toString(options);
	      }
	      r += this.rootObject.toString(options);
	      if (pretty && r.slice(-newline.length) === newline) {
	        r = r.slice(0, -newline.length);
	      }
	      return r;
	    };

	    return XMLBuilder;

	  })();

	}).call(this);


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLStringifier,
	    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	    hasProp = {}.hasOwnProperty;

	  module.exports = XMLStringifier = (function() {
	    function XMLStringifier(options) {
	      this.assertLegalChar = bind(this.assertLegalChar, this);
	      var key, ref, value;
	      this.allowSurrogateChars = options != null ? options.allowSurrogateChars : void 0;
	      this.noDoubleEncoding = options != null ? options.noDoubleEncoding : void 0;
	      ref = (options != null ? options.stringify : void 0) || {};
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this[key] = value;
	      }
	    }

	    XMLStringifier.prototype.eleName = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.eleText = function(val) {
	      val = '' + val || '';
	      return this.assertLegalChar(this.elEscape(val));
	    };

	    XMLStringifier.prototype.cdata = function(val) {
	      val = '' + val || '';
	      if (val.match(/]]>/)) {
	        throw new Error("Invalid CDATA text: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.comment = function(val) {
	      val = '' + val || '';
	      if (val.match(/--/)) {
	        throw new Error("Comment text cannot contain double-hypen: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.raw = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attName = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attValue = function(val) {
	      val = '' + val || '';
	      return this.attEscape(val);
	    };

	    XMLStringifier.prototype.insTarget = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.insValue = function(val) {
	      val = '' + val || '';
	      if (val.match(/\?>/)) {
	        throw new Error("Invalid processing instruction value: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlVersion = function(val) {
	      val = '' + val || '';
	      if (!val.match(/1\.[0-9]+/)) {
	        throw new Error("Invalid version number: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlEncoding = function(val) {
	      val = '' + val || '';
	      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
	        throw new Error("Invalid encoding: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlStandalone = function(val) {
	      if (val) {
	        return "yes";
	      } else {
	        return "no";
	      }
	    };

	    XMLStringifier.prototype.dtdPubID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdSysID = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdElementValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttType = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttDefault = function(val) {
	      if (val != null) {
	        return '' + val || '';
	      } else {
	        return val;
	      }
	    };

	    XMLStringifier.prototype.dtdEntityValue = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdNData = function(val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.convertAttKey = '@';

	    XMLStringifier.prototype.convertPIKey = '?';

	    XMLStringifier.prototype.convertTextKey = '#text';

	    XMLStringifier.prototype.convertCDataKey = '#cdata';

	    XMLStringifier.prototype.convertCommentKey = '#comment';

	    XMLStringifier.prototype.convertRawKey = '#raw';

	    XMLStringifier.prototype.assertLegalChar = function(str) {
	      var chars, chr;
	      if (this.allowSurrogateChars) {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
	      } else {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
	      }
	      chr = str.match(chars);
	      if (chr) {
	        throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
	      }
	      return str;
	    };

	    XMLStringifier.prototype.elEscape = function(str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
	    };

	    XMLStringifier.prototype.attEscape = function(str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
	    };

	    return XMLStringifier;

	  })();

	}).call(this);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDeclaration, XMLNode, create, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(79);

	  isObject = __webpack_require__(38);

	  XMLNode = __webpack_require__(82);

	  module.exports = XMLDeclaration = (function(superClass) {
	    extend(XMLDeclaration, superClass);

	    function XMLDeclaration(parent, version, encoding, standalone) {
	      var ref;
	      XMLDeclaration.__super__.constructor.call(this, parent);
	      if (isObject(version)) {
	        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
	      }
	      if (!version) {
	        version = '1.0';
	      }
	      this.version = this.stringify.xmlVersion(version);
	      if (encoding != null) {
	        this.encoding = this.stringify.xmlEncoding(encoding);
	      }
	      if (standalone != null) {
	        this.standalone = this.stringify.xmlStandalone(standalone);
	      }
	    }

	    XMLDeclaration.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?xml';
	      r += ' version="' + this.version + '"';
	      if (this.encoding != null) {
	        r += ' encoding="' + this.encoding + '"';
	      }
	      if (this.standalone != null) {
	        r += ' standalone="' + this.standalone + '"';
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDeclaration;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssign = __webpack_require__(80),
	    baseCreate = __webpack_require__(81);

	/**
	 * Creates an object that inherits from the `prototype` object. If a
	 * `properties` object is given, its own enumerable string keyed properties
	 * are assigned to the created object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Object
	 * @param {Object} prototype The object to inherit from.
	 * @param {Object} [properties] The properties to assign to the object.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * function Shape() {
	 *   this.x = 0;
	 *   this.y = 0;
	 * }
	 *
	 * function Circle() {
	 *   Shape.call(this);
	 * }
	 *
	 * Circle.prototype = _.create(Shape.prototype, {
	 *   'constructor': Circle
	 * });
	 *
	 * var circle = new Circle;
	 * circle instanceof Circle;
	 * // => true
	 *
	 * circle instanceof Shape;
	 * // => true
	 */
	function create(prototype, properties) {
	  var result = baseCreate(prototype);
	  return properties == null ? result : baseAssign(result, properties);
	}

	module.exports = create;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(44),
	    keys = __webpack_require__(59);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLRaw, XMLText, isEmpty, isFunction, isObject,
	    hasProp = {}.hasOwnProperty;

	  isObject = __webpack_require__(38);

	  isFunction = __webpack_require__(31);

	  isEmpty = __webpack_require__(83);

	  XMLElement = null;

	  XMLCData = null;

	  XMLComment = null;

	  XMLDeclaration = null;

	  XMLDocType = null;

	  XMLRaw = null;

	  XMLText = null;

	  module.exports = XMLNode = (function() {
	    function XMLNode(parent) {
	      this.parent = parent;
	      this.options = this.parent.options;
	      this.stringify = this.parent.stringify;
	      if (XMLElement === null) {
	        XMLElement = __webpack_require__(90);
	        XMLCData = __webpack_require__(173);
	        XMLComment = __webpack_require__(174);
	        XMLDeclaration = __webpack_require__(78);
	        XMLDocType = __webpack_require__(175);
	        XMLRaw = __webpack_require__(180);
	        XMLText = __webpack_require__(181);
	      }
	    }

	    XMLNode.prototype.element = function(name, attributes, text) {
	      var childNode, item, j, k, key, lastChild, len, len1, ref, val;
	      lastChild = null;
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (Array.isArray(name)) {
	        for (j = 0, len = name.length; j < len; j++) {
	          item = name[j];
	          lastChild = this.element(item);
	        }
	      } else if (isFunction(name)) {
	        lastChild = this.element(name.apply());
	      } else if (isObject(name)) {
	        for (key in name) {
	          if (!hasProp.call(name, key)) continue;
	          val = name[key];
	          if (isFunction(val)) {
	            val = val.apply();
	          }
	          if ((isObject(val)) && (isEmpty(val))) {
	            val = null;
	          }
	          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
	            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
	          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
	            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
	          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
	            for (k = 0, len1 = val.length; k < len1; k++) {
	              item = val[k];
	              childNode = {};
	              childNode[key] = item;
	              lastChild = this.element(childNode);
	            }
	          } else if (isObject(val)) {
	            lastChild = this.element(key);
	            lastChild.element(val);
	          } else {
	            lastChild = this.element(key, val);
	          }
	        }
	      } else {
	        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
	          lastChild = this.text(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
	          lastChild = this.cdata(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
	          lastChild = this.comment(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
	          lastChild = this.raw(text);
	        } else {
	          lastChild = this.node(name, attributes, text);
	        }
	      }
	      if (lastChild == null) {
	        throw new Error("Could not create any elements with: " + name);
	      }
	      return lastChild;
	    };

	    XMLNode.prototype.insertBefore = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.insertAfter = function(name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i + 1);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.remove = function() {
	      var i, ref;
	      if (this.isRoot) {
	        throw new Error("Cannot remove the root element");
	      }
	      i = this.parent.children.indexOf(this);
	      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
	      return this.parent;
	    };

	    XMLNode.prototype.node = function(name, attributes, text) {
	      var child, ref;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      child = new XMLElement(this, name, attributes);
	      if (text != null) {
	        child.text(text);
	      }
	      this.children.push(child);
	      return child;
	    };

	    XMLNode.prototype.text = function(value) {
	      var child;
	      child = new XMLText(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.raw = function(value) {
	      var child;
	      child = new XMLRaw(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.declaration = function(version, encoding, standalone) {
	      var doc, xmldec;
	      doc = this.document();
	      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
	      doc.xmldec = xmldec;
	      return doc.root();
	    };

	    XMLNode.prototype.doctype = function(pubID, sysID) {
	      var doc, doctype;
	      doc = this.document();
	      doctype = new XMLDocType(doc, pubID, sysID);
	      doc.doctype = doctype;
	      return doctype;
	    };

	    XMLNode.prototype.up = function() {
	      if (this.isRoot) {
	        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
	      }
	      return this.parent;
	    };

	    XMLNode.prototype.root = function() {
	      var child;
	      if (this.isRoot) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isRoot) {
	        child = child.parent;
	      }
	      return child;
	    };

	    XMLNode.prototype.document = function() {
	      return this.root().documentObject;
	    };

	    XMLNode.prototype.end = function(options) {
	      return this.document().toString(options);
	    };

	    XMLNode.prototype.prev = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i < 1) {
	        throw new Error("Already at the first node");
	      }
	      return this.parent.children[i - 1];
	    };

	    XMLNode.prototype.next = function() {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i === -1 || i === this.parent.children.length - 1) {
	        throw new Error("Already at the last node");
	      }
	      return this.parent.children[i + 1];
	    };

	    XMLNode.prototype.importXMLBuilder = function(xmlbuilder) {
	      var clonedRoot;
	      clonedRoot = xmlbuilder.root().clone();
	      clonedRoot.parent = this;
	      clonedRoot.isRoot = false;
	      this.children.push(clonedRoot);
	      return this;
	    };

	    XMLNode.prototype.ele = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.nod = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.txt = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.doc = function() {
	      return this.document();
	    };

	    XMLNode.prototype.dec = function(version, encoding, standalone) {
	      return this.declaration(version, encoding, standalone);
	    };

	    XMLNode.prototype.dtd = function(pubID, sysID) {
	      return this.doctype(pubID, sysID);
	    };

	    XMLNode.prototype.e = function(name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.n = function(name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.t = function(value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.d = function(value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.c = function(value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.r = function(value) {
	      return this.raw(value);
	    };

	    XMLNode.prototype.u = function() {
	      return this.up();
	    };

	    return XMLNode;

	  })();

	}).call(this);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var baseKeys = __webpack_require__(73),
	    getTag = __webpack_require__(84),
	    isArguments = __webpack_require__(62),
	    isArray = __webpack_require__(65),
	    isArrayLike = __webpack_require__(55),
	    isBuffer = __webpack_require__(66),
	    isPrototype = __webpack_require__(58),
	    isTypedArray = __webpack_require__(69);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) &&
	      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(85),
	    Map = __webpack_require__(86),
	    Promise = __webpack_require__(87),
	    Set = __webpack_require__(88),
	    WeakMap = __webpack_require__(89),
	    baseGetTag = __webpack_require__(32),
	    toSource = __webpack_require__(41);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(34);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(34);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(34);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(34);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(34);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, XMLElement, XMLNode, XMLProcessingInstruction, create, every, isFunction, isObject,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(79);

	  isObject = __webpack_require__(38);

	  isFunction = __webpack_require__(31);

	  every = __webpack_require__(91);

	  XMLNode = __webpack_require__(82);

	  XMLAttribute = __webpack_require__(171);

	  XMLProcessingInstruction = __webpack_require__(172);

	  module.exports = XMLElement = (function(superClass) {
	    extend(XMLElement, superClass);

	    function XMLElement(parent, name, attributes) {
	      XMLElement.__super__.constructor.call(this, parent);
	      if (name == null) {
	        throw new Error("Missing element name");
	      }
	      this.name = this.stringify.eleName(name);
	      this.children = [];
	      this.instructions = [];
	      this.attributes = {};
	      if (attributes != null) {
	        this.attribute(attributes);
	      }
	    }

	    XMLElement.prototype.clone = function() {
	      var att, attName, clonedSelf, i, len, pi, ref, ref1;
	      clonedSelf = create(XMLElement.prototype, this);
	      if (clonedSelf.isRoot) {
	        clonedSelf.documentObject = null;
	      }
	      clonedSelf.attributes = {};
	      ref = this.attributes;
	      for (attName in ref) {
	        if (!hasProp.call(ref, attName)) continue;
	        att = ref[attName];
	        clonedSelf.attributes[attName] = att.clone();
	      }
	      clonedSelf.instructions = [];
	      ref1 = this.instructions;
	      for (i = 0, len = ref1.length; i < len; i++) {
	        pi = ref1[i];
	        clonedSelf.instructions.push(pi.clone());
	      }
	      clonedSelf.children = [];
	      this.children.forEach(function(child) {
	        var clonedChild;
	        clonedChild = child.clone();
	        clonedChild.parent = clonedSelf;
	        return clonedSelf.children.push(clonedChild);
	      });
	      return clonedSelf;
	    };

	    XMLElement.prototype.attribute = function(name, value) {
	      var attName, attValue;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (isObject(name)) {
	        for (attName in name) {
	          if (!hasProp.call(name, attName)) continue;
	          attValue = name[attName];
	          this.attribute(attName, attValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        if (!this.options.skipNullAttributes || (value != null)) {
	          this.attributes[name] = new XMLAttribute(this, name, value);
	        }
	      }
	      return this;
	    };

	    XMLElement.prototype.removeAttribute = function(name) {
	      var attName, i, len;
	      if (name == null) {
	        throw new Error("Missing attribute name");
	      }
	      name = name.valueOf();
	      if (Array.isArray(name)) {
	        for (i = 0, len = name.length; i < len; i++) {
	          attName = name[i];
	          delete this.attributes[attName];
	        }
	      } else {
	        delete this.attributes[name];
	      }
	      return this;
	    };

	    XMLElement.prototype.instruction = function(target, value) {
	      var i, insTarget, insValue, instruction, len;
	      if (target != null) {
	        target = target.valueOf();
	      }
	      if (value != null) {
	        value = value.valueOf();
	      }
	      if (Array.isArray(target)) {
	        for (i = 0, len = target.length; i < len; i++) {
	          insTarget = target[i];
	          this.instruction(insTarget);
	        }
	      } else if (isObject(target)) {
	        for (insTarget in target) {
	          if (!hasProp.call(target, insTarget)) continue;
	          insValue = target[insTarget];
	          this.instruction(insTarget, insValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        instruction = new XMLProcessingInstruction(this, target, value);
	        this.instructions.push(instruction);
	      }
	      return this;
	    };

	    XMLElement.prototype.toString = function(options, level) {
	      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      ref3 = this.instructions;
	      for (i = 0, len = ref3.length; i < len; i++) {
	        instruction = ref3[i];
	        r += instruction.toString(options, level);
	      }
	      if (pretty) {
	        r += space;
	      }
	      r += '<' + this.name;
	      ref4 = this.attributes;
	      for (name in ref4) {
	        if (!hasProp.call(ref4, name)) continue;
	        att = ref4[name];
	        r += att.toString(options);
	      }
	      if (this.children.length === 0 || every(this.children, function(e) {
	        return e.value === '';
	      })) {
	        r += '/>';
	        if (pretty) {
	          r += newline;
	        }
	      } else if (pretty && this.children.length === 1 && (this.children[0].value != null)) {
	        r += '>';
	        r += this.children[0].value;
	        r += '</' + this.name + '>';
	        r += newline;
	      } else {
	        r += '>';
	        if (pretty) {
	          r += newline;
	        }
	        ref5 = this.children;
	        for (j = 0, len1 = ref5.length; j < len1; j++) {
	          child = ref5[j];
	          r += child.toString(options, level + 1);
	        }
	        if (pretty) {
	          r += space;
	        }
	        r += '</' + this.name + '>';
	        if (pretty) {
	          r += newline;
	        }
	      }
	      return r;
	    };

	    XMLElement.prototype.att = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLElement.prototype.a = function(name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.i = function(target, value) {
	      return this.instruction(target, value);
	    };

	    return XMLElement;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayEvery = __webpack_require__(92),
	    baseEvery = __webpack_require__(93),
	    baseIteratee = __webpack_require__(99),
	    isArray = __webpack_require__(65),
	    isIterateeCall = __webpack_require__(54);

	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * Iteration is stopped once `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * **Note:** This method returns `true` for
	 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	 * elements of empty collections.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, guard) {
	  var func = isArray(collection) ? arrayEvery : baseEvery;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}

	module.exports = every;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.every` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = arrayEvery;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(94);

	/**
	 * The base implementation of `_.every` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  baseEach(collection, function(value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}

	module.exports = baseEvery;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(95),
	    createBaseEach = __webpack_require__(98);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(96),
	    keys = __webpack_require__(59);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(97);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(55);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(100),
	    baseMatchesProperty = __webpack_require__(152),
	    identity = __webpack_require__(47),
	    isArray = __webpack_require__(65),
	    property = __webpack_require__(168);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(101),
	    getMatchData = __webpack_require__(149),
	    matchesStrictComparable = __webpack_require__(151);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(102),
	    baseIsEqual = __webpack_require__(130);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(103),
	    stackClear = __webpack_require__(110),
	    stackDelete = __webpack_require__(111),
	    stackGet = __webpack_require__(112),
	    stackHas = __webpack_require__(113),
	    stackSet = __webpack_require__(114);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(104),
	    listCacheDelete = __webpack_require__(105),
	    listCacheGet = __webpack_require__(107),
	    listCacheHas = __webpack_require__(108),
	    listCacheSet = __webpack_require__(109);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(106);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(43);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(106);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(106);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(106);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(103);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(103),
	    Map = __webpack_require__(86),
	    MapCache = __webpack_require__(115);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(116),
	    mapCacheDelete = __webpack_require__(124),
	    mapCacheGet = __webpack_require__(127),
	    mapCacheHas = __webpack_require__(128),
	    mapCacheSet = __webpack_require__(129);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(117),
	    ListCache = __webpack_require__(103),
	    Map = __webpack_require__(86);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(118),
	    hashDelete = __webpack_require__(120),
	    hashGet = __webpack_require__(121),
	    hashHas = __webpack_require__(122),
	    hashSet = __webpack_require__(123);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(119);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(119);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(119);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(119);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(125);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(126);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(125);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(125);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(125);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(131),
	    isObjectLike = __webpack_require__(64);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(102),
	    equalArrays = __webpack_require__(132),
	    equalByTag = __webpack_require__(138),
	    equalObjects = __webpack_require__(142),
	    getTag = __webpack_require__(84),
	    isArray = __webpack_require__(65),
	    isBuffer = __webpack_require__(66),
	    isTypedArray = __webpack_require__(69);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(133),
	    arraySome = __webpack_require__(136),
	    cacheHas = __webpack_require__(137);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(115),
	    setCacheAdd = __webpack_require__(134),
	    setCacheHas = __webpack_require__(135);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    Uint8Array = __webpack_require__(139),
	    eq = __webpack_require__(43),
	    equalArrays = __webpack_require__(132),
	    mapToArray = __webpack_require__(140),
	    setToArray = __webpack_require__(141);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(34);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(143);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(144),
	    getSymbols = __webpack_require__(146),
	    keys = __webpack_require__(59);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(145),
	    isArray = __webpack_require__(65);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(147),
	    stubArray = __webpack_require__(148);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(150),
	    keys = __webpack_require__(59);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(38);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(130),
	    get = __webpack_require__(153),
	    hasIn = __webpack_require__(165),
	    isKey = __webpack_require__(156),
	    isStrictComparable = __webpack_require__(150),
	    matchesStrictComparable = __webpack_require__(151),
	    toKey = __webpack_require__(164);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(154);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(155),
	    toKey = __webpack_require__(164);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(65),
	    isKey = __webpack_require__(156),
	    stringToPath = __webpack_require__(158),
	    toString = __webpack_require__(161);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(65),
	    isSymbol = __webpack_require__(157);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(32),
	    isObjectLike = __webpack_require__(64);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(159);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(160);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(115);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(162);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    arrayMap = __webpack_require__(163),
	    isArray = __webpack_require__(65),
	    isSymbol = __webpack_require__(157);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(157);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(166),
	    hasPath = __webpack_require__(167);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(155),
	    isArguments = __webpack_require__(62),
	    isArray = __webpack_require__(65),
	    isIndex = __webpack_require__(57),
	    isLength = __webpack_require__(56),
	    toKey = __webpack_require__(164);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(169),
	    basePropertyDeep = __webpack_require__(170),
	    isKey = __webpack_require__(156),
	    toKey = __webpack_require__(164);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(154);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLAttribute, create;

	  create = __webpack_require__(79);

	  module.exports = XMLAttribute = (function() {
	    function XMLAttribute(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing attribute name of element " + parent.name);
	      }
	      if (value == null) {
	        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
	      }
	      this.name = this.stringify.attName(name);
	      this.value = this.stringify.attValue(value);
	    }

	    XMLAttribute.prototype.clone = function() {
	      return create(XMLAttribute.prototype, this);
	    };

	    XMLAttribute.prototype.toString = function(options, level) {
	      return ' ' + this.name + '="' + this.value + '"';
	    };

	    return XMLAttribute;

	  })();

	}).call(this);


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLProcessingInstruction, create;

	  create = __webpack_require__(79);

	  module.exports = XMLProcessingInstruction = (function() {
	    function XMLProcessingInstruction(parent, target, value) {
	      this.stringify = parent.stringify;
	      if (target == null) {
	        throw new Error("Missing instruction target");
	      }
	      this.target = this.stringify.insTarget(target);
	      if (value) {
	        this.value = this.stringify.insValue(value);
	      }
	    }

	    XMLProcessingInstruction.prototype.clone = function() {
	      return create(XMLProcessingInstruction.prototype, this);
	    };

	    XMLProcessingInstruction.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?';
	      r += this.target;
	      if (this.value) {
	        r += ' ' + this.value;
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLProcessingInstruction;

	  })();

	}).call(this);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(79);

	  XMLNode = __webpack_require__(82);

	  module.exports = XMLCData = (function(superClass) {
	    extend(XMLCData, superClass);

	    function XMLCData(parent, text) {
	      XMLCData.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing CDATA text");
	      }
	      this.text = this.stringify.cdata(text);
	    }

	    XMLCData.prototype.clone = function() {
	      return create(XMLCData.prototype, this);
	    };

	    XMLCData.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<![CDATA[' + this.text + ']]>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLCData;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLComment, XMLNode, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(79);

	  XMLNode = __webpack_require__(82);

	  module.exports = XMLComment = (function(superClass) {
	    extend(XMLComment, superClass);

	    function XMLComment(parent, text) {
	      XMLComment.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing comment text");
	      }
	      this.text = this.stringify.comment(text);
	    }

	    XMLComment.prototype.clone = function() {
	      return create(XMLComment.prototype, this);
	    };

	    XMLComment.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!-- ' + this.text + ' -->';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLComment;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

	  create = __webpack_require__(79);

	  isObject = __webpack_require__(38);

	  XMLCData = __webpack_require__(173);

	  XMLComment = __webpack_require__(174);

	  XMLDTDAttList = __webpack_require__(176);

	  XMLDTDEntity = __webpack_require__(177);

	  XMLDTDElement = __webpack_require__(178);

	  XMLDTDNotation = __webpack_require__(179);

	  XMLProcessingInstruction = __webpack_require__(172);

	  module.exports = XMLDocType = (function() {
	    function XMLDocType(parent, pubID, sysID) {
	      var ref, ref1;
	      this.documentObject = parent;
	      this.stringify = this.documentObject.stringify;
	      this.children = [];
	      if (isObject(pubID)) {
	        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
	      }
	      if (sysID == null) {
	        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
	      }
	      if (pubID != null) {
	        this.pubID = this.stringify.dtdPubID(pubID);
	      }
	      if (sysID != null) {
	        this.sysID = this.stringify.dtdSysID(sysID);
	      }
	    }

	    XMLDocType.prototype.element = function(name, value) {
	      var child;
	      child = new XMLDTDElement(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      var child;
	      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.entity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, false, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.pEntity = function(name, value) {
	      var child;
	      child = new XMLDTDEntity(this, true, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.notation = function(name, value) {
	      var child;
	      child = new XMLDTDNotation(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.cdata = function(value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.comment = function(value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.instruction = function(target, value) {
	      var child;
	      child = new XMLProcessingInstruction(this, target, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.root = function() {
	      return this.documentObject.root();
	    };

	    XMLDocType.prototype.document = function() {
	      return this.documentObject;
	    };

	    XMLDocType.prototype.toString = function(options, level) {
	      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!DOCTYPE ' + this.root().name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      if (this.children.length > 0) {
	        r += ' [';
	        if (pretty) {
	          r += newline;
	        }
	        ref3 = this.children;
	        for (i = 0, len = ref3.length; i < len; i++) {
	          child = ref3[i];
	          r += child.toString(options, level + 1);
	        }
	        r += ']';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    XMLDocType.prototype.ele = function(name, value) {
	      return this.element(name, value);
	    };

	    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
	    };

	    XMLDocType.prototype.ent = function(name, value) {
	      return this.entity(name, value);
	    };

	    XMLDocType.prototype.pent = function(name, value) {
	      return this.pEntity(name, value);
	    };

	    XMLDocType.prototype.not = function(name, value) {
	      return this.notation(name, value);
	    };

	    XMLDocType.prototype.dat = function(value) {
	      return this.cdata(value);
	    };

	    XMLDocType.prototype.com = function(value) {
	      return this.comment(value);
	    };

	    XMLDocType.prototype.ins = function(target, value) {
	      return this.instruction(target, value);
	    };

	    XMLDocType.prototype.up = function() {
	      return this.root();
	    };

	    XMLDocType.prototype.doc = function() {
	      return this.document();
	    };

	    return XMLDocType;

	  })();

	}).call(this);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDAttList, create;

	  create = __webpack_require__(79);

	  module.exports = XMLDTDAttList = (function() {
	    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      this.stringify = parent.stringify;
	      if (elementName == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (attributeName == null) {
	        throw new Error("Missing DTD attribute name");
	      }
	      if (!attributeType) {
	        throw new Error("Missing DTD attribute type");
	      }
	      if (!defaultValueType) {
	        throw new Error("Missing DTD attribute default");
	      }
	      if (defaultValueType.indexOf('#') !== 0) {
	        defaultValueType = '#' + defaultValueType;
	      }
	      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
	        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
	      }
	      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
	        throw new Error("Default value only applies to #FIXED or #DEFAULT");
	      }
	      this.elementName = this.stringify.eleName(elementName);
	      this.attributeName = this.stringify.attName(attributeName);
	      this.attributeType = this.stringify.dtdAttType(attributeType);
	      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
	      this.defaultValueType = defaultValueType;
	    }

	    XMLDTDAttList.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ATTLIST ' + this.elementName + ' ' + this.attributeName + ' ' + this.attributeType;
	      if (this.defaultValueType !== '#DEFAULT') {
	        r += ' ' + this.defaultValueType;
	      }
	      if (this.defaultValue) {
	        r += ' "' + this.defaultValue + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDAttList;

	  })();

	}).call(this);


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDEntity, create, isObject;

	  create = __webpack_require__(79);

	  isObject = __webpack_require__(38);

	  module.exports = XMLDTDEntity = (function() {
	    function XMLDTDEntity(parent, pe, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing entity name");
	      }
	      if (value == null) {
	        throw new Error("Missing entity value");
	      }
	      this.pe = !!pe;
	      this.name = this.stringify.eleName(name);
	      if (!isObject(value)) {
	        this.value = this.stringify.dtdEntityValue(value);
	      } else {
	        if (!value.pubID && !value.sysID) {
	          throw new Error("Public and/or system identifiers are required for an external entity");
	        }
	        if (value.pubID && !value.sysID) {
	          throw new Error("System identifier is required for a public external entity");
	        }
	        if (value.pubID != null) {
	          this.pubID = this.stringify.dtdPubID(value.pubID);
	        }
	        if (value.sysID != null) {
	          this.sysID = this.stringify.dtdSysID(value.sysID);
	        }
	        if (value.nData != null) {
	          this.nData = this.stringify.dtdNData(value.nData);
	        }
	        if (this.pe && this.nData) {
	          throw new Error("Notation declaration is not allowed in a parameter entity");
	        }
	      }
	    }

	    XMLDTDEntity.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ENTITY';
	      if (this.pe) {
	        r += ' %';
	      }
	      r += ' ' + this.name;
	      if (this.value) {
	        r += ' "' + this.value + '"';
	      } else {
	        if (this.pubID && this.sysID) {
	          r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	        } else if (this.sysID) {
	          r += ' SYSTEM "' + this.sysID + '"';
	        }
	        if (this.nData) {
	          r += ' NDATA ' + this.nData;
	        }
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDEntity;

	  })();

	}).call(this);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDElement, create;

	  create = __webpack_require__(79);

	  module.exports = XMLDTDElement = (function() {
	    function XMLDTDElement(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (!value) {
	        value = '(#PCDATA)';
	      }
	      if (Array.isArray(value)) {
	        value = '(' + value.join(',') + ')';
	      }
	      this.name = this.stringify.eleName(name);
	      this.value = this.stringify.dtdElementValue(value);
	    }

	    XMLDTDElement.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ELEMENT ' + this.name + ' ' + this.value + '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDElement;

	  })();

	}).call(this);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLDTDNotation, create;

	  create = __webpack_require__(79);

	  module.exports = XMLDTDNotation = (function() {
	    function XMLDTDNotation(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing notation name");
	      }
	      if (!value.pubID && !value.sysID) {
	        throw new Error("Public or system identifiers are required for an external entity");
	      }
	      this.name = this.stringify.eleName(name);
	      if (value.pubID != null) {
	        this.pubID = this.stringify.dtdPubID(value.pubID);
	      }
	      if (value.sysID != null) {
	        this.sysID = this.stringify.dtdSysID(value.sysID);
	      }
	    }

	    XMLDTDNotation.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!NOTATION ' + this.name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.pubID) {
	        r += ' PUBLIC "' + this.pubID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDNotation;

	  })();

	}).call(this);


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLRaw, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(79);

	  XMLNode = __webpack_require__(82);

	  module.exports = XMLRaw = (function(superClass) {
	    extend(XMLRaw, superClass);

	    function XMLRaw(parent, text) {
	      XMLRaw.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing raw text");
	      }
	      this.value = this.stringify.raw(text);
	    }

	    XMLRaw.prototype.clone = function() {
	      return create(XMLRaw.prototype, this);
	    };

	    XMLRaw.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLRaw;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.9.1
	(function() {
	  var XMLNode, XMLText, create,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(79);

	  XMLNode = __webpack_require__(82);

	  module.exports = XMLText = (function(superClass) {
	    extend(XMLText, superClass);

	    function XMLText(parent, text) {
	      XMLText.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing element text");
	      }
	      this.value = this.stringify.eleText(text);
	    }

	    XMLText.prototype.clone = function() {
	      return create(XMLText.prototype, this);
	    };

	    XMLText.prototype.toString = function(options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLText;

	  })(XMLNode);

	}).call(this);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	var Collection = __webpack_require__(19);
	var Operation = __webpack_require__(183);
	var Shape = __webpack_require__(18);
	var Paginator = __webpack_require__(184);
	var ResourceWaiter = __webpack_require__(185);

	var util = __webpack_require__(2);
	var property = util.property;
	var memoizedProperty = util.memoizedProperty;

	function Api(api, options) {
	  api = api || {};
	  options = options || {};
	  options.api = this;

	  api.metadata = api.metadata || {};

	  property(this, 'isApi', true, false);
	  property(this, 'apiVersion', api.metadata.apiVersion);
	  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
	  property(this, 'signingName', api.metadata.signingName);
	  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
	  property(this, 'signatureVersion', api.metadata.signatureVersion);
	  property(this, 'jsonVersion', api.metadata.jsonVersion);
	  property(this, 'targetPrefix', api.metadata.targetPrefix);
	  property(this, 'protocol', api.metadata.protocol);
	  property(this, 'timestampFormat', api.metadata.timestampFormat);
	  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
	  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
	  property(this, 'fullName', api.metadata.serviceFullName);

	  memoizedProperty(this, 'className', function() {
	    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
	    if (!name) return null;

	    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
	    if (name === 'ElasticLoadBalancing') name = 'ELB';
	    return name;
	  });

	  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
	    return new Operation(name, operation, options);
	  }, util.string.lowerFirst));

	  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
	    return Shape.create(shape, options);
	  }));

	  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
	    return new Paginator(name, paginator, options);
	  }));

	  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
	    return new ResourceWaiter(name, waiter, options);
	  }, util.string.lowerFirst));

	  if (options.documentation) {
	    property(this, 'documentation', api.documentation);
	    property(this, 'documentationUrl', api.documentationUrl);
	  }
	}

	module.exports = Api;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var Shape = __webpack_require__(18);

	var util = __webpack_require__(2);
	var property = util.property;
	var memoizedProperty = util.memoizedProperty;

	function Operation(name, operation, options) {
	  var self = this;
	  options = options || {};

	  property(this, 'name', operation.name || name);
	  property(this, 'api', options.api, false);

	  operation.http = operation.http || {};
	  property(this, 'httpMethod', operation.http.method || 'POST');
	  property(this, 'httpPath', operation.http.requestUri || '/');
	  property(this, 'authtype', operation.authtype || '');

	  memoizedProperty(this, 'input', function() {
	    if (!operation.input) {
	      return new Shape.create({type: 'structure'}, options);
	    }
	    return Shape.create(operation.input, options);
	  });

	  memoizedProperty(this, 'output', function() {
	    if (!operation.output) {
	      return new Shape.create({type: 'structure'}, options);
	    }
	    return Shape.create(operation.output, options);
	  });

	  memoizedProperty(this, 'errors', function() {
	    var list = [];
	    if (!operation.errors) return null;

	    for (var i = 0; i < operation.errors.length; i++) {
	      list.push(Shape.create(operation.errors[i], options));
	    }

	    return list;
	  });

	  memoizedProperty(this, 'paginator', function() {
	    return options.api.paginators[name];
	  });

	  if (options.documentation) {
	    property(this, 'documentation', operation.documentation);
	    property(this, 'documentationUrl', operation.documentationUrl);
	  }

	  // idempotentMembers only tracks top-level input shapes
	  memoizedProperty(this, 'idempotentMembers', function() {
	    var idempotentMembers = [];
	    var input = self.input;
	    var members = input.members;
	    if (!input.members) {
	      return idempotentMembers;
	    }
	    for (var name in members) {
	      if (!members.hasOwnProperty(name)) {
	        continue;
	      }
	      if (members[name].isIdempotent === true) {
	        idempotentMembers.push(name);
	      }
	    }
	    return idempotentMembers;
	  });

	}

	module.exports = Operation;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	var property = __webpack_require__(2).property;

	function Paginator(name, paginator) {
	  property(this, 'inputToken', paginator.input_token);
	  property(this, 'limitKey', paginator.limit_key);
	  property(this, 'moreResults', paginator.more_results);
	  property(this, 'outputToken', paginator.output_token);
	  property(this, 'resultKey', paginator.result_key);
	}

	module.exports = Paginator;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var property = util.property;

	function ResourceWaiter(name, waiter, options) {
	  options = options || {};
	  property(this, 'name', name);
	  property(this, 'api', options.api, false);

	  if (waiter.operation) {
	    property(this, 'operation', util.string.lowerFirst(waiter.operation));
	  }

	  var self = this;
	  var keys = [
	    'type',
	    'description',
	    'delay',
	    'maxAttempts',
	    'acceptors'
	  ];

	  keys.forEach(function(key) {
	    var value = waiter[key];
	    if (value) {
	      property(self, key, value);
	    }
	  });
	}

	module.exports = ResourceWaiter;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

	function apiLoader(svc, version) {
	  if (!apiLoader.services.hasOwnProperty(svc)) {
	    throw new Error('InvalidService: Failed to load api for ' + svc);
	  }
	  return apiLoader.services[svc][version];
	}

	/**
	 * This member of AWS.apiLoader is private, but changing it will necessitate a
	 * change to ../scripts/services-table-generator.ts
	 */
	apiLoader.services = {};
	module.exports = apiLoader;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var Api = __webpack_require__(182);
	var regionConfig = __webpack_require__(188);
	var inherit = AWS.util.inherit;
	var clientCount = 0;

	/**
	 * The service class representing an AWS service.
	 *
	 * @abstract
	 *
	 * @!attribute apiVersions
	 *   @return [Array<String>] the list of API versions supported by this service.
	 *   @readonly
	 */
	AWS.Service = inherit({
	  /**
	   * Create a new service object with a configuration object
	   *
	   * @param config [map] a map of configuration options
	   */
	  constructor: function Service(config) {
	    if (!this.loadServiceClass) {
	      throw AWS.util.error(new Error(),
	        'Service must be constructed with `new\' operator');
	    }
	    var ServiceClass = this.loadServiceClass(config || {});
	    if (ServiceClass) {
	      var originalConfig = AWS.util.copy(config);
	      var svc = new ServiceClass(config);
	      Object.defineProperty(svc, '_originalConfig', {
	        get: function() { return originalConfig; },
	        enumerable: false,
	        configurable: true
	      });
	      svc._clientId = ++clientCount;
	      return svc;
	    }
	    this.initialize(config);
	  },

	  /**
	   * @api private
	   */
	  initialize: function initialize(config) {
	    var svcConfig = AWS.config[this.serviceIdentifier];

	    this.config = new AWS.Config(AWS.config);
	    if (svcConfig) this.config.update(svcConfig, true);
	    if (config) this.config.update(config, true);

	    this.validateService();
	    if (!this.config.endpoint) regionConfig(this);

	    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
	    this.setEndpoint(this.config.endpoint);
	  },

	  /**
	   * @api private
	   */
	  validateService: function validateService() {
	  },

	  /**
	   * @api private
	   */
	  loadServiceClass: function loadServiceClass(serviceConfig) {
	    var config = serviceConfig;
	    if (!AWS.util.isEmpty(this.api)) {
	      return null;
	    } else if (config.apiConfig) {
	      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
	    } else if (!this.constructor.services) {
	      return null;
	    } else {
	      config = new AWS.Config(AWS.config);
	      config.update(serviceConfig, true);
	      var version = config.apiVersions[this.constructor.serviceIdentifier];
	      version = version || config.apiVersion;
	      return this.getLatestServiceClass(version);
	    }
	  },

	  /**
	   * @api private
	   */
	  getLatestServiceClass: function getLatestServiceClass(version) {
	    version = this.getLatestServiceVersion(version);
	    if (this.constructor.services[version] === null) {
	      AWS.Service.defineServiceApi(this.constructor, version);
	    }

	    return this.constructor.services[version];
	  },

	  /**
	   * @api private
	   */
	  getLatestServiceVersion: function getLatestServiceVersion(version) {
	    if (!this.constructor.services || this.constructor.services.length === 0) {
	      throw new Error('No services defined on ' +
	                      this.constructor.serviceIdentifier);
	    }

	    if (!version) {
	      version = 'latest';
	    } else if (AWS.util.isType(version, Date)) {
	      version = AWS.util.date.iso8601(version).split('T')[0];
	    }

	    if (Object.hasOwnProperty(this.constructor.services, version)) {
	      return version;
	    }

	    var keys = Object.keys(this.constructor.services).sort();
	    var selectedVersion = null;
	    for (var i = keys.length - 1; i >= 0; i--) {
	      // versions that end in "*" are not available on disk and can be
	      // skipped, so do not choose these as selectedVersions
	      if (keys[i][keys[i].length - 1] !== '*') {
	        selectedVersion = keys[i];
	      }
	      if (keys[i].substr(0, 10) <= version) {
	        return selectedVersion;
	      }
	    }

	    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
	                    ' API to satisfy version constraint `' + version + '\'');
	  },

	  /**
	   * @api private
	   */
	  api: {},

	  /**
	   * @api private
	   */
	  defaultRetryCount: 3,

	  /**
	   * @api private
	   */
	  customizeRequests: function customizeRequests(callback) {
	    if (!callback) {
	      this.customRequestHandler = null;
	    } else if (typeof callback === 'function') {
	      this.customRequestHandler = callback;
	    } else {
	      throw new Error('Invalid callback type \'' + typeof callback + '\' provided in customizeRequests');
	    }
	  },

	  /**
	   * Calls an operation on a service with the given input parameters.
	   *
	   * @param operation [String] the name of the operation to call on the service.
	   * @param params [map] a map of input options for the operation
	   * @callback callback function(err, data)
	   *   If a callback is supplied, it is called when a response is returned
	   *   from the service.
	   *   @param err [Error] the error object returned from the request.
	   *     Set to `null` if the request is successful.
	   *   @param data [Object] the de-serialized data returned from
	   *     the request. Set to `null` if a request error occurs.
	   */
	  makeRequest: function makeRequest(operation, params, callback) {
	    if (typeof params === 'function') {
	      callback = params;
	      params = null;
	    }

	    params = params || {};
	    if (this.config.params) { // copy only toplevel bound params
	      var rules = this.api.operations[operation];
	      if (rules) {
	        params = AWS.util.copy(params);
	        AWS.util.each(this.config.params, function(key, value) {
	          if (rules.input.members[key]) {
	            if (params[key] === undefined || params[key] === null) {
	              params[key] = value;
	            }
	          }
	        });
	      }
	    }

	    var request = new AWS.Request(this, operation, params);
	    this.addAllRequestListeners(request);

	    if (callback) request.send(callback);
	    return request;
	  },

	  /**
	   * Calls an operation on a service with the given input parameters, without
	   * any authentication data. This method is useful for "public" API operations.
	   *
	   * @param operation [String] the name of the operation to call on the service.
	   * @param params [map] a map of input options for the operation
	   * @callback callback function(err, data)
	   *   If a callback is supplied, it is called when a response is returned
	   *   from the service.
	   *   @param err [Error] the error object returned from the request.
	   *     Set to `null` if the request is successful.
	   *   @param data [Object] the de-serialized data returned from
	   *     the request. Set to `null` if a request error occurs.
	   */
	  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
	    if (typeof params === 'function') {
	      callback = params;
	      params = {};
	    }

	    var request = this.makeRequest(operation, params).toUnauthenticated();
	    return callback ? request.send(callback) : request;
	  },

	  /**
	   * Waits for a given state
	   *
	   * @param state [String] the state on the service to wait for
	   * @param params [map] a map of parameters to pass with each request
	   * @option params $waiter [map] a map of configuration options for the waiter
	   * @option params $waiter.delay [Number] The number of seconds to wait between
	   *                                       requests
	   * @option params $waiter.maxAttempts [Number] The maximum number of requests
	   *                                             to send while waiting
	   * @callback callback function(err, data)
	   *   If a callback is supplied, it is called when a response is returned
	   *   from the service.
	   *   @param err [Error] the error object returned from the request.
	   *     Set to `null` if the request is successful.
	   *   @param data [Object] the de-serialized data returned from
	   *     the request. Set to `null` if a request error occurs.
	   */
	  waitFor: function waitFor(state, params, callback) {
	    var waiter = new AWS.ResourceWaiter(this, state);
	    return waiter.wait(params, callback);
	  },

	  /**
	   * @api private
	   */
	  addAllRequestListeners: function addAllRequestListeners(request) {
	    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
	                AWS.EventListeners.CorePost];
	    for (var i = 0; i < list.length; i++) {
	      if (list[i]) request.addListeners(list[i]);
	    }

	    // disable parameter validation
	    if (!this.config.paramValidation) {
	      request.removeListener('validate',
	        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
	    }

	    if (this.config.logger) { // add logging events
	      request.addListeners(AWS.EventListeners.Logger);
	    }

	    this.setupRequestListeners(request);
	    // call prototype's customRequestHandler
	    if (typeof this.constructor.prototype.customRequestHandler === 'function') {
	      this.constructor.prototype.customRequestHandler(request);
	    }
	    // call instance's customRequestHandler
	    if (Object.prototype.hasOwnProperty.call(this, 'customRequestHandler') && typeof this.customRequestHandler === 'function') {
	      this.customRequestHandler(request);
	    }
	  },

	  /**
	   * Override this method to setup any custom request listeners for each
	   * new request to the service.
	   *
	   * @abstract
	   */
	  setupRequestListeners: function setupRequestListeners() {
	  },

	  /**
	   * Gets the signer class for a given request
	   * @api private
	   */
	  getSignerClass: function getSignerClass(request) {
	    var version;
	    // get operation authtype if present
	    var operation = null;
	    var authtype = '';
	    if (request) {
	      var operations = request.service.api.operations || {};
	      operation = operations[request.operation] || null;
	      authtype = operation ? operation.authtype : '';
	    }
	    if (this.config.signatureVersion) {
	      version = this.config.signatureVersion;
	    } else if (authtype === 'v4' || authtype === 'v4-unsigned-body') {
	      version = 'v4';
	    } else {
	      version = this.api.signatureVersion;
	    }
	    return AWS.Signers.RequestSigner.getVersion(version);
	  },

	  /**
	   * @api private
	   */
	  serviceInterface: function serviceInterface() {
	    switch (this.api.protocol) {
	      case 'ec2': return AWS.EventListeners.Query;
	      case 'query': return AWS.EventListeners.Query;
	      case 'json': return AWS.EventListeners.Json;
	      case 'rest-json': return AWS.EventListeners.RestJson;
	      case 'rest-xml': return AWS.EventListeners.RestXml;
	    }
	    if (this.api.protocol) {
	      throw new Error('Invalid service `protocol\' ' +
	        this.api.protocol + ' in API config');
	    }
	  },

	  /**
	   * @api private
	   */
	  successfulResponse: function successfulResponse(resp) {
	    return resp.httpResponse.statusCode < 300;
	  },

	  /**
	   * How many times a failed request should be retried before giving up.
	   * the defaultRetryCount can be overriden by service classes.
	   *
	   * @api private
	   */
	  numRetries: function numRetries() {
	    if (this.config.maxRetries !== undefined) {
	      return this.config.maxRetries;
	    } else {
	      return this.defaultRetryCount;
	    }
	  },

	  /**
	   * @api private
	   */
	  retryDelays: function retryDelays(retryCount) {
	    return AWS.util.calculateRetryDelay(retryCount, this.config.retryDelayOptions);
	  },

	  /**
	   * @api private
	   */
	  retryableError: function retryableError(error) {
	    if (this.timeoutError(error)) return true;
	    if (this.networkingError(error)) return true;
	    if (this.expiredCredentialsError(error)) return true;
	    if (this.throttledError(error)) return true;
	    if (error.statusCode >= 500) return true;
	    return false;
	  },

	  /**
	   * @api private
	   */
	  networkingError: function networkingError(error) {
	    return error.code === 'NetworkingError';
	  },

	  /**
	   * @api private
	   */
	  timeoutError: function timeoutError(error) {
	    return error.code === 'TimeoutError';
	  },

	  /**
	   * @api private
	   */
	  expiredCredentialsError: function expiredCredentialsError(error) {
	    // TODO : this only handles *one* of the expired credential codes
	    return (error.code === 'ExpiredTokenException');
	  },

	  /**
	   * @api private
	   */
	  clockSkewError: function clockSkewError(error) {
	    switch (error.code) {
	      case 'RequestTimeTooSkewed':
	      case 'RequestExpired':
	      case 'InvalidSignatureException':
	      case 'SignatureDoesNotMatch':
	      case 'AuthFailure':
	      case 'RequestInTheFuture':
	        return true;
	      default: return false;
	    }
	  },

	  /**
	   * @api private
	   */
	  getSkewCorrectedDate: function getSkewCorrectedDate() {
	    return new Date(Date.now() + this.config.systemClockOffset);
	  },

	  /**
	   * @api private
	   */
	  applyClockOffset: function applyClockOffset(newServerTime) {
	    if (newServerTime) {
	      this.config.systemClockOffset = newServerTime - Date.now();
	    }
	  },

	  /**
	   * @api private
	   */
	  isClockSkewed: function isClockSkewed(newServerTime) {
	    if (newServerTime) {
	      return Math.abs(this.getSkewCorrectedDate().getTime() - newServerTime) >= 30000;
	    }
	  },

	  /**
	   * @api private
	   */
	  throttledError: function throttledError(error) {
	    // this logic varies between services
	    switch (error.code) {
	      case 'ProvisionedThroughputExceededException':
	      case 'Throttling':
	      case 'ThrottlingException':
	      case 'RequestLimitExceeded':
	      case 'RequestThrottled':
	        return true;
	      default:
	        return false;
	    }
	  },

	  /**
	   * @api private
	   */
	  endpointFromTemplate: function endpointFromTemplate(endpoint) {
	    if (typeof endpoint !== 'string') return endpoint;

	    var e = endpoint;
	    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
	    e = e.replace(/\{region\}/g, this.config.region);
	    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
	    return e;
	  },

	  /**
	   * @api private
	   */
	  setEndpoint: function setEndpoint(endpoint) {
	    this.endpoint = new AWS.Endpoint(endpoint, this.config);
	  },

	  /**
	   * @api private
	   */
	  paginationConfig: function paginationConfig(operation, throwException) {
	    var paginator = this.api.operations[operation].paginator;
	    if (!paginator) {
	      if (throwException) {
	        var e = new Error();
	        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
	      }
	      return null;
	    }

	    return paginator;
	  }
	});

	AWS.util.update(AWS.Service, {

	  /**
	   * Adds one method for each operation described in the api configuration
	   *
	   * @api private
	   */
	  defineMethods: function defineMethods(svc) {
	    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
	      if (svc.prototype[method]) return;
	      var operation = svc.prototype.api.operations[method];
	      if (operation.authtype === 'none') {
	        svc.prototype[method] = function (params, callback) {
	          return this.makeUnauthenticatedRequest(method, params, callback);
	        };
	      } else {
	        svc.prototype[method] = function (params, callback) {
	          return this.makeRequest(method, params, callback);
	        };
	      }
	    });
	  },

	  /**
	   * Defines a new Service class using a service identifier and list of versions
	   * including an optional set of features (functions) to apply to the class
	   * prototype.
	   *
	   * @param serviceIdentifier [String] the identifier for the service
	   * @param versions [Array<String>] a list of versions that work with this
	   *   service
	   * @param features [Object] an object to attach to the prototype
	   * @return [Class<Service>] the service class defined by this function.
	   */
	  defineService: function defineService(serviceIdentifier, versions, features) {
	    AWS.Service._serviceMap[serviceIdentifier] = true;
	    if (!Array.isArray(versions)) {
	      features = versions;
	      versions = [];
	    }

	    var svc = inherit(AWS.Service, features || {});

	    if (typeof serviceIdentifier === 'string') {
	      AWS.Service.addVersions(svc, versions);

	      var identifier = svc.serviceIdentifier || serviceIdentifier;
	      svc.serviceIdentifier = identifier;
	    } else { // defineService called with an API
	      svc.prototype.api = serviceIdentifier;
	      AWS.Service.defineMethods(svc);
	    }

	    return svc;
	  },

	  /**
	   * @api private
	   */
	  addVersions: function addVersions(svc, versions) {
	    if (!Array.isArray(versions)) versions = [versions];

	    svc.services = svc.services || {};
	    for (var i = 0; i < versions.length; i++) {
	      if (svc.services[versions[i]] === undefined) {
	        svc.services[versions[i]] = null;
	      }
	    }

	    svc.apiVersions = Object.keys(svc.services).sort();
	  },

	  /**
	   * @api private
	   */
	  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
	    var svc = inherit(superclass, {
	      serviceIdentifier: superclass.serviceIdentifier
	    });

	    function setApi(api) {
	      if (api.isApi) {
	        svc.prototype.api = api;
	      } else {
	        svc.prototype.api = new Api(api);
	      }
	    }

	    if (typeof version === 'string') {
	      if (apiConfig) {
	        setApi(apiConfig);
	      } else {
	        try {
	          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
	        } catch (err) {
	          throw AWS.util.error(err, {
	            message: 'Could not find API configuration ' +
	              superclass.serviceIdentifier + '-' + version
	          });
	        }
	      }
	      if (!Object.prototype.hasOwnProperty.call(superclass.services, version)) {
	        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
	      }
	      superclass.services[version] = svc;
	    } else {
	      setApi(version);
	    }

	    AWS.Service.defineMethods(svc);
	    return svc;
	  },

	  /**
	   * @api private
	   */
	  hasService: function(identifier) {
	    return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap, identifier);
	  },

	  /**
	   * @api private
	   */
	  _serviceMap: {}
	});

	module.exports = AWS.Service;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var regionConfig = __webpack_require__(189);

	function generateRegionPrefix(region) {
	  if (!region) return null;

	  var parts = region.split('-');
	  if (parts.length < 3) return null;
	  return parts.slice(0, parts.length - 2).join('-') + '-*';
	}

	function derivedKeys(service) {
	  var region = service.config.region;
	  var regionPrefix = generateRegionPrefix(region);
	  var endpointPrefix = service.api.endpointPrefix;

	  return [
	    [region, endpointPrefix],
	    [regionPrefix, endpointPrefix],
	    [region, '*'],
	    [regionPrefix, '*'],
	    ['*', endpointPrefix],
	    ['*', '*']
	  ].map(function(item) {
	    return item[0] && item[1] ? item.join('/') : null;
	  });
	}

	function applyConfig(service, config) {
	  util.each(config, function(key, value) {
	    if (key === 'globalEndpoint') return;
	    if (service.config[key] === undefined || service.config[key] === null) {
	      service.config[key] = value;
	    }
	  });
	}

	function configureEndpoint(service) {
	  var keys = derivedKeys(service);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!key) continue;

	    if (Object.prototype.hasOwnProperty.call(regionConfig.rules, key)) {
	      var config = regionConfig.rules[key];
	      if (typeof config === 'string') {
	        config = regionConfig.patterns[config];
	      }

	      // set dualstack endpoint
	      if (service.config.useDualstack && util.isDualstackAvailable(service)) {
	        config = util.copy(config);
	        config.endpoint = '{service}.dualstack.{region}.amazonaws.com';
	      }

	      // set global endpoint
	      service.isGlobalEndpoint = !!config.globalEndpoint;

	      // signature version
	      if (!config.signatureVersion) config.signatureVersion = 'v4';

	      // merge config
	      applyConfig(service, config);
	      return;
	    }
	  }
	}

	module.exports = configureEndpoint;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = {"rules":{"*/*":{"endpoint":"{service}.{region}.amazonaws.com"},"cn-*/*":{"endpoint":"{service}.{region}.amazonaws.com.cn"},"*/budgets":"globalSSL","*/cloudfront":"globalSSL","*/iam":"globalSSL","*/sts":"globalSSL","*/importexport":{"endpoint":"{service}.amazonaws.com","signatureVersion":"v2","globalEndpoint":true},"*/route53":{"endpoint":"https://{service}.amazonaws.com","signatureVersion":"v3https","globalEndpoint":true},"*/waf":"globalSSL","us-gov-*/iam":"globalGovCloud","us-gov-*/sts":{"endpoint":"{service}.{region}.amazonaws.com"},"us-gov-west-1/s3":"s3dash","us-west-1/s3":"s3dash","us-west-2/s3":"s3dash","eu-west-1/s3":"s3dash","ap-southeast-1/s3":"s3dash","ap-southeast-2/s3":"s3dash","ap-northeast-1/s3":"s3dash","sa-east-1/s3":"s3dash","us-east-1/s3":{"endpoint":"{service}.amazonaws.com","signatureVersion":"s3"},"us-east-1/sdb":{"endpoint":"{service}.amazonaws.com","signatureVersion":"v2"},"*/sdb":{"endpoint":"{service}.{region}.amazonaws.com","signatureVersion":"v2"}},"patterns":{"globalSSL":{"endpoint":"https://{service}.amazonaws.com","globalEndpoint":true},"globalGovCloud":{"endpoint":"{service}.us-gov.amazonaws.com"},"s3dash":{"endpoint":"{service}-{region}.amazonaws.com","signatureVersion":"s3"}}}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	__webpack_require__(191);
	__webpack_require__(192);
	var PromisesDependency;

	/**
	 * The main configuration class used by all service objects to set
	 * the region, credentials, and other options for requests.
	 *
	 * By default, credentials and region settings are left unconfigured.
	 * This should be configured by the application before using any
	 * AWS service APIs.
	 *
	 * In order to set global configuration options, properties should
	 * be assigned to the global {AWS.config} object.
	 *
	 * @see AWS.config
	 *
	 * @!group General Configuration Options
	 *
	 * @!attribute credentials
	 *   @return [AWS.Credentials] the AWS credentials to sign requests with.
	 *
	 * @!attribute region
	 *   @example Set the global region setting to us-west-2
	 *     AWS.config.update({region: 'us-west-2'});
	 *   @return [AWS.Credentials] The region to send service requests to.
	 *   @see http://docs.amazonwebservices.com/general/latest/gr/rande.html
	 *     A list of available endpoints for each AWS service
	 *
	 * @!attribute maxRetries
	 *   @return [Integer] the maximum amount of retries to perform for a
	 *     service request. By default this value is calculated by the specific
	 *     service object that the request is being made to.
	 *
	 * @!attribute maxRedirects
	 *   @return [Integer] the maximum amount of redirects to follow for a
	 *     service request. Defaults to 10.
	 *
	 * @!attribute paramValidation
	 *   @return [Boolean|map] whether input parameters should be validated against
	 *     the operation description before sending the request. Defaults to true.
	 *     Pass a map to enable any of the following specific validation features:
	 *
	 *     * **min** [Boolean] &mdash; Validates that a value meets the min
	 *       constraint. This is enabled by default when paramValidation is set
	 *       to `true`.
	 *     * **max** [Boolean] &mdash; Validates that a value meets the max
	 *       constraint.
	 *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
	 *       regular expression.
	 *     * **enum** [Boolean] &mdash; Validates that a string value matches one
	 *       of the allowable enum values.
	 *
	 * @!attribute computeChecksums
	 *   @return [Boolean] whether to compute checksums for payload bodies when
	 *     the service accepts it (currently supported in S3 only).
	 *
	 * @!attribute convertResponseTypes
	 *   @return [Boolean] whether types are converted when parsing response data.
	 *     Currently only supported for JSON based services. Turning this off may
	 *     improve performance on large response payloads. Defaults to `true`.
	 *
	 * @!attribute correctClockSkew
	 *   @return [Boolean] whether to apply a clock skew correction and retry
	 *     requests that fail because of an skewed client clock. Defaults to
	 *     `false`.
	 *
	 * @!attribute sslEnabled
	 *   @return [Boolean] whether SSL is enabled for requests
	 *
	 * @!attribute s3ForcePathStyle
	 *   @return [Boolean] whether to force path style URLs for S3 objects
	 *
	 * @!attribute s3BucketEndpoint
	 *   @note Setting this configuration option requires an `endpoint` to be
	 *     provided explicitly to the service constructor.
	 *   @return [Boolean] whether the provided endpoint addresses an individual
	 *     bucket (false if it addresses the root API endpoint).
	 *
	 * @!attribute s3DisableBodySigning
	 *   @return [Boolean] whether to disable S3 body signing when using signature version `v4`.
	 *     Body signing can only be disabled when using https. Defaults to `true`.
	 *
	 * @!attribute useAccelerateEndpoint
	 *   @note This configuration option is only compatible with S3 while accessing
	 *     dns-compatible buckets.
	 *   @return [Boolean] Whether to use the Accelerate endpoint with the S3 service.
	 *     Defaults to `false`.
	 *
	 * @!attribute retryDelayOptions
	 *   @example Set the base retry delay for all services to 300 ms
	 *     AWS.config.update({retryDelayOptions: {base: 300}});
	 *     // Delays with maxRetries = 3: 300, 600, 1200
	 *   @example Set a custom backoff function to provide delay values on retries
	 *     AWS.config.update({retryDelayOptions: {customBackoff: function(retryCount) {
	 *       // returns delay in ms
	 *     }}});
	 *   @return [map] A set of options to configure the retry delay on retryable errors.
	 *     Currently supported options are:
	 *
	 *     * **base** [Integer] &mdash; The base number of milliseconds to use in the
	 *       exponential backoff for operation retries. Defaults to 100 ms for all services except
	 *       DynamoDB, where it defaults to 50ms.
	 *     * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
	 *       and returns the amount of time to delay in milliseconds. The `base` option will be
	 *       ignored if this option is supplied.
	 *
	 * @!attribute httpOptions
	 *   @return [map] A set of options to pass to the low-level HTTP request.
	 *     Currently supported options are:
	 *
	 *     * **proxy** [String] &mdash; the URL to proxy requests through
	 *     * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
	 *       HTTP requests with. Used for connection pooling. Defaults to the global
	 *       agent (`http.globalAgent`) for non-SSL connections. Note that for
	 *       SSL connections, a special Agent object is used in order to enable
	 *       peer certificate verification. This feature is only supported in the
	 *       Node.js environment.
	 *     * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
	 *       failing to establish a connection with the server after
	 *       `connectTimeout` milliseconds. This timeout has no effect once a socket
	 *       connection has been established.
	 *     * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
	 *       milliseconds of inactivity on the socket. Defaults to two minutes
	 *       (120000)
	 *     * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
	 *       HTTP requests. Used in the browser environment only. Set to false to
	 *       send requests synchronously. Defaults to true (async on).
	 *     * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
	 *       property of an XMLHttpRequest object. Used in the browser environment
	 *       only. Defaults to false.
	 * @!attribute logger
	 *   @return [#write,#log] an object that responds to .write() (like a stream)
	 *     or .log() (like the console object) in order to log information about
	 *     requests
	 *
	 * @!attribute systemClockOffset
	 *   @return [Number] an offset value in milliseconds to apply to all signing
	 *     times. Use this to compensate for clock skew when your system may be
	 *     out of sync with the service time. Note that this configuration option
	 *     can only be applied to the global `AWS.config` object and cannot be
	 *     overridden in service-specific configuration. Defaults to 0 milliseconds.
	 *
	 * @!attribute signatureVersion
	 *   @return [String] the signature version to sign requests with (overriding
	 *     the API configuration). Possible values are: 'v2', 'v3', 'v4'.
	 *
	 * @!attribute signatureCache
	 *   @return [Boolean] whether the signature to sign requests with (overriding
	 *     the API configuration) is cached. Only applies to the signature version 'v4'.
	 *     Defaults to `true`.
	 */
	AWS.Config = AWS.util.inherit({
	  /**
	   * @!endgroup
	   */

	  /**
	   * Creates a new configuration object. This is the object that passes
	   * option data along to service requests, including credentials, security,
	   * region information, and some service specific settings.
	   *
	   * @example Creating a new configuration object with credentials and region
	   *   var config = new AWS.Config({
	   *     accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
	   *   });
	   * @option options accessKeyId [String] your AWS access key ID.
	   * @option options secretAccessKey [String] your AWS secret access key.
	   * @option options sessionToken [AWS.Credentials] the optional AWS
	   *   session token to sign requests with.
	   * @option options credentials [AWS.Credentials] the AWS credentials
	   *   to sign requests with. You can either specify this object, or
	   *   specify the accessKeyId and secretAccessKey options directly.
	   * @option options credentialProvider [AWS.CredentialProviderChain] the
	   *   provider chain used to resolve credentials if no static `credentials`
	   *   property is set.
	   * @option options region [String] the region to send service requests to.
	   *   See {region} for more information.
	   * @option options maxRetries [Integer] the maximum amount of retries to
	   *   attempt with a request. See {maxRetries} for more information.
	   * @option options maxRedirects [Integer] the maximum amount of redirects to
	   *   follow with a request. See {maxRedirects} for more information.
	   * @option options sslEnabled [Boolean] whether to enable SSL for
	   *   requests.
	   * @option options paramValidation [Boolean|map] whether input parameters
	   *   should be validated against the operation description before sending
	   *   the request. Defaults to true. Pass a map to enable any of the
	   *   following specific validation features:
	   *
	   *   * **min** [Boolean] &mdash; Validates that a value meets the min
	   *     constraint. This is enabled by default when paramValidation is set
	   *     to `true`.
	   *   * **max** [Boolean] &mdash; Validates that a value meets the max
	   *     constraint.
	   *   * **pattern** [Boolean] &mdash; Validates that a string value matches a
	   *     regular expression.
	   *   * **enum** [Boolean] &mdash; Validates that a string value matches one
	   *     of the allowable enum values.
	   * @option options computeChecksums [Boolean] whether to compute checksums
	   *   for payload bodies when the service accepts it (currently supported
	   *   in S3 only)
	   * @option options convertResponseTypes [Boolean] whether types are converted
	   *     when parsing response data. Currently only supported for JSON based
	   *     services. Turning this off may improve performance on large response
	   *     payloads. Defaults to `true`.
	   * @option options correctClockSkew [Boolean] whether to apply a clock skew
	   *     correction and retry requests that fail because of an skewed client
	   *     clock. Defaults to `false`.
	   * @option options s3ForcePathStyle [Boolean] whether to force path
	   *   style URLs for S3 objects.
	   * @option options s3BucketEndpoint [Boolean] whether the provided endpoint
	   *   addresses an individual bucket (false if it addresses the root API
	   *   endpoint). Note that setting this configuration option requires an
	   *   `endpoint` to be provided explicitly to the service constructor.
	   * @option options s3DisableBodySigning [Boolean] whether S3 body signing
	   *   should be disabled when using signature version `v4`. Body signing
	   *   can only be disabled when using https. Defaults to `true`.
	   *
	   * @option options retryDelayOptions [map] A set of options to configure
	   *   the retry delay on retryable errors. Currently supported options are:
	   *
	   *   * **base** [Integer] &mdash; The base number of milliseconds to use in the
	   *     exponential backoff for operation retries. Defaults to 100 ms for all
	   *     services except DynamoDB, where it defaults to 50ms.
	   *   * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
	   *     and returns the amount of time to delay in milliseconds. The `base` option will be
	   *     ignored if this option is supplied.
	   * @option options httpOptions [map] A set of options to pass to the low-level
	   *   HTTP request. Currently supported options are:
	   *
	   *   * **proxy** [String] &mdash; the URL to proxy requests through
	   *   * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
	   *     HTTP requests with. Used for connection pooling. Defaults to the global
	   *     agent (`http.globalAgent`) for non-SSL connections. Note that for
	   *     SSL connections, a special Agent object is used in order to enable
	   *     peer certificate verification. This feature is only available in the
	   *     Node.js environment.
	   *   * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
	   *     failing to establish a connection with the server after
	   *     `connectTimeout` milliseconds. This timeout has no effect once a socket
	   *     connection has been established.
	   *   * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
	   *     milliseconds of inactivity on the socket. Defaults to two minutes
	   *     (120000).
	   *   * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
	   *     HTTP requests. Used in the browser environment only. Set to false to
	   *     send requests synchronously. Defaults to true (async on).
	   *   * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
	   *     property of an XMLHttpRequest object. Used in the browser environment
	   *     only. Defaults to false.
	   * @option options apiVersion [String, Date] a String in YYYY-MM-DD format
	   *   (or a date) that represents the latest possible API version that can be
	   *   used in all services (unless overridden by `apiVersions`). Specify
	   *   'latest' to use the latest possible version.
	   * @option options apiVersions [map<String, String|Date>] a map of service
	   *   identifiers (the lowercase service class name) with the API version to
	   *   use when instantiating a service. Specify 'latest' for each individual
	   *   that can use the latest available version.
	   * @option options logger [#write,#log] an object that responds to .write()
	   *   (like a stream) or .log() (like the console object) in order to log
	   *   information about requests
	   * @option options systemClockOffset [Number] an offset value in milliseconds
	   *   to apply to all signing times. Use this to compensate for clock skew
	   *   when your system may be out of sync with the service time. Note that
	   *   this configuration option can only be applied to the global `AWS.config`
	   *   object and cannot be overridden in service-specific configuration.
	   *   Defaults to 0 milliseconds.
	   * @option options signatureVersion [String] the signature version to sign
	   *   requests with (overriding the API configuration). Possible values are:
	   *   'v2', 'v3', 'v4'.
	   * @option options signatureCache [Boolean] whether the signature to sign
	   *   requests with (overriding the API configuration) is cached. Only applies
	   *   to the signature version 'v4'. Defaults to `true`.
	   * @option options dynamoDbCrc32 [Boolean] whether to validate the CRC32
	   *   checksum of HTTP response bodies returned by DynamoDB. Default: `true`.
	   */
	  constructor: function Config(options) {
	    if (options === undefined) options = {};
	    options = this.extractCredentials(options);

	    AWS.util.each.call(this, this.keys, function (key, value) {
	      this.set(key, options[key], value);
	    });
	  },

	  /**
	   * @!group Managing Credentials
	   */

	  /**
	   * Loads credentials from the configuration object. This is used internally
	   * by the SDK to ensure that refreshable {Credentials} objects are properly
	   * refreshed and loaded when sending a request. If you want to ensure that
	   * your credentials are loaded prior to a request, you can use this method
	   * directly to provide accurate credential data stored in the object.
	   *
	   * @note If you configure the SDK with static or environment credentials,
	   *   the credential data should already be present in {credentials} attribute.
	   *   This method is primarily necessary to load credentials from asynchronous
	   *   sources, or sources that can refresh credentials periodically.
	   * @example Getting your access key
	   *   AWS.config.getCredentials(function(err) {
	   *     if (err) console.log(err.stack); // credentials not loaded
	   *     else console.log("Access Key:", AWS.config.credentials.accessKeyId);
	   *   })
	   * @callback callback function(err)
	   *   Called when the {credentials} have been properly set on the configuration
	   *   object.
	   *
	   *   @param err [Error] if this is set, credentials were not successfully
	   *     loaded and this error provides information why.
	   * @see credentials
	   * @see Credentials
	   */
	  getCredentials: function getCredentials(callback) {
	    var self = this;

	    function finish(err) {
	      callback(err, err ? null : self.credentials);
	    }

	    function credError(msg, err) {
	      return new AWS.util.error(err || new Error(), {
	        code: 'CredentialsError',
	        message: msg,
	        name: 'CredentialsError'
	      });
	    }

	    function getAsyncCredentials() {
	      self.credentials.get(function(err) {
	        if (err) {
	          var msg = 'Could not load credentials from ' +
	            self.credentials.constructor.name;
	          err = credError(msg, err);
	        }
	        finish(err);
	      });
	    }

	    function getStaticCredentials() {
	      var err = null;
	      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
	        err = credError('Missing credentials');
	      }
	      finish(err);
	    }

	    if (self.credentials) {
	      if (typeof self.credentials.get === 'function') {
	        getAsyncCredentials();
	      } else { // static credentials
	        getStaticCredentials();
	      }
	    } else if (self.credentialProvider) {
	      self.credentialProvider.resolve(function(err, creds) {
	        if (err) {
	          err = credError('Could not load credentials from any providers', err);
	        }
	        self.credentials = creds;
	        finish(err);
	      });
	    } else {
	      finish(credError('No credentials to load'));
	    }
	  },

	  /**
	   * @!group Loading and Setting Configuration Options
	   */

	  /**
	   * @overload update(options, allowUnknownKeys = false)
	   *   Updates the current configuration object with new options.
	   *
	   *   @example Update maxRetries property of a configuration object
	   *     config.update({maxRetries: 10});
	   *   @param [Object] options a map of option keys and values.
	   *   @param [Boolean] allowUnknownKeys whether unknown keys can be set on
	   *     the configuration object. Defaults to `false`.
	   *   @see constructor
	   */
	  update: function update(options, allowUnknownKeys) {
	    allowUnknownKeys = allowUnknownKeys || false;
	    options = this.extractCredentials(options);
	    AWS.util.each.call(this, options, function (key, value) {
	      if (allowUnknownKeys || Object.prototype.hasOwnProperty.call(this.keys, key) ||
	          AWS.Service.hasService(key)) {
	        this.set(key, value);
	      }
	    });
	  },

	  /**
	   * Loads configuration data from a JSON file into this config object.
	   * @note Loading configuration will reset all existing configuration
	   *   on the object.
	   * @!macro nobrowser
	   * @param path [String] the path relative to your process's current
	   *    working directory to load configuration from.
	   * @return [AWS.Config] the same configuration object
	   */
	  loadFromPath: function loadFromPath(path) {
	    this.clear();

	    var options = JSON.parse(AWS.util.readFileSync(path));
	    var fileSystemCreds = new AWS.FileSystemCredentials(path);
	    var chain = new AWS.CredentialProviderChain();
	    chain.providers.unshift(fileSystemCreds);
	    chain.resolve(function (err, creds) {
	      if (err) throw err;
	      else options.credentials = creds;
	    });

	    this.constructor(options);

	    return this;
	  },

	  /**
	   * Clears configuration data on this object
	   *
	   * @api private
	   */
	  clear: function clear() {
	    /*jshint forin:false */
	    AWS.util.each.call(this, this.keys, function (key) {
	      delete this[key];
	    });

	    // reset credential provider
	    this.set('credentials', undefined);
	    this.set('credentialProvider', undefined);
	  },

	  /**
	   * Sets a property on the configuration object, allowing for a
	   * default value
	   * @api private
	   */
	  set: function set(property, value, defaultValue) {
	    if (value === undefined) {
	      if (defaultValue === undefined) {
	        defaultValue = this.keys[property];
	      }
	      if (typeof defaultValue === 'function') {
	        this[property] = defaultValue.call(this);
	      } else {
	        this[property] = defaultValue;
	      }
	    } else if (property === 'httpOptions' && this[property]) {
	      // deep merge httpOptions
	      this[property] = AWS.util.merge(this[property], value);
	    } else {
	      this[property] = value;
	    }
	  },

	  /**
	   * All of the keys with their default values.
	   *
	   * @constant
	   * @api private
	   */
	  keys: {
	    credentials: null,
	    credentialProvider: null,
	    region: null,
	    logger: null,
	    apiVersions: {},
	    apiVersion: null,
	    endpoint: undefined,
	    httpOptions: {
	      timeout: 120000
	    },
	    maxRetries: undefined,
	    maxRedirects: 10,
	    paramValidation: true,
	    sslEnabled: true,
	    s3ForcePathStyle: false,
	    s3BucketEndpoint: false,
	    s3DisableBodySigning: true,
	    computeChecksums: true,
	    convertResponseTypes: true,
	    correctClockSkew: false,
	    customUserAgent: null,
	    dynamoDbCrc32: true,
	    systemClockOffset: 0,
	    signatureVersion: null,
	    signatureCache: true,
	    retryDelayOptions: {},
	    useAccelerateEndpoint: false
	  },

	  /**
	   * Extracts accessKeyId, secretAccessKey and sessionToken
	   * from a configuration hash.
	   *
	   * @api private
	   */
	  extractCredentials: function extractCredentials(options) {
	    if (options.accessKeyId && options.secretAccessKey) {
	      options = AWS.util.copy(options);
	      options.credentials = new AWS.Credentials(options);
	    }
	    return options;
	  },

	  /**
	   * Sets the promise dependency the SDK will use wherever Promises are returned.
	   * Passing `null` will force the SDK to use native Promises if they are available.
	   * If native Promises are not available, passing `null` will have no effect.
	   * @param [Constructor] dep A reference to a Promise constructor
	   */
	  setPromisesDependency: function setPromisesDependency(dep) {
	    PromisesDependency = dep;
	    // if null was passed in, we should try to use native promises
	    if (dep === null && typeof Promise === 'function') {
	      PromisesDependency = Promise;
	    }
	    var constructors = [AWS.Request, AWS.Credentials, AWS.CredentialProviderChain];
	    if (AWS.S3 && AWS.S3.ManagedUpload) constructors.push(AWS.S3.ManagedUpload);
	    AWS.util.addPromises(constructors, PromisesDependency);
	  },

	  /**
	   * Gets the promise dependency set by `AWS.config.setPromisesDependency`.
	   */
	  getPromisesDependency: function getPromisesDependency() {
	    return PromisesDependency;
	  }
	});

	/**
	 * @return [AWS.Config] The global configuration object singleton instance
	 * @readonly
	 * @see AWS.Config
	 */
	AWS.config = new AWS.Config();


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);

	/**
	 * Represents your AWS security credentials, specifically the
	 * {accessKeyId}, {secretAccessKey}, and optional {sessionToken}.
	 * Creating a `Credentials` object allows you to pass around your
	 * security information to configuration and service objects.
	 *
	 * Note that this class typically does not need to be constructed manually,
	 * as the {AWS.Config} and {AWS.Service} classes both accept simple
	 * options hashes with the three keys. These structures will be converted
	 * into Credentials objects automatically.
	 *
	 * ## Expiring and Refreshing Credentials
	 *
	 * Occasionally credentials can expire in the middle of a long-running
	 * application. In this case, the SDK will automatically attempt to
	 * refresh the credentials from the storage location if the Credentials
	 * class implements the {refresh} method.
	 *
	 * If you are implementing a credential storage location, you
	 * will want to create a subclass of the `Credentials` class and
	 * override the {refresh} method. This method allows credentials to be
	 * retrieved from the backing store, be it a file system, database, or
	 * some network storage. The method should reset the credential attributes
	 * on the object.
	 *
	 * @!attribute expired
	 *   @return [Boolean] whether the credentials have been expired and
	 *     require a refresh. Used in conjunction with {expireTime}.
	 * @!attribute expireTime
	 *   @return [Date] a time when credentials should be considered expired. Used
	 *     in conjunction with {expired}.
	 * @!attribute accessKeyId
	 *   @return [String] the AWS access key ID
	 * @!attribute secretAccessKey
	 *   @return [String] the AWS secret access key
	 * @!attribute sessionToken
	 *   @return [String] an optional AWS session token
	 */
	AWS.Credentials = AWS.util.inherit({
	  /**
	   * A credentials object can be created using positional arguments or an options
	   * hash.
	   *
	   * @overload AWS.Credentials(accessKeyId, secretAccessKey, sessionToken=null)
	   *   Creates a Credentials object with a given set of credential information
	   *   as positional arguments.
	   *   @param accessKeyId [String] the AWS access key ID
	   *   @param secretAccessKey [String] the AWS secret access key
	   *   @param sessionToken [String] the optional AWS session token
	   *   @example Create a credentials object with AWS credentials
	   *     var creds = new AWS.Credentials('akid', 'secret', 'session');
	   * @overload AWS.Credentials(options)
	   *   Creates a Credentials object with a given set of credential information
	   *   as an options hash.
	   *   @option options accessKeyId [String] the AWS access key ID
	   *   @option options secretAccessKey [String] the AWS secret access key
	   *   @option options sessionToken [String] the optional AWS session token
	   *   @example Create a credentials object with AWS credentials
	   *     var creds = new AWS.Credentials({
	   *       accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
	   *     });
	   */
	  constructor: function Credentials() {
	    // hide secretAccessKey from being displayed with util.inspect
	    AWS.util.hideProperties(this, ['secretAccessKey']);

	    this.expired = false;
	    this.expireTime = null;
	    if (arguments.length === 1 && typeof arguments[0] === 'object') {
	      var creds = arguments[0].credentials || arguments[0];
	      this.accessKeyId = creds.accessKeyId;
	      this.secretAccessKey = creds.secretAccessKey;
	      this.sessionToken = creds.sessionToken;
	    } else {
	      this.accessKeyId = arguments[0];
	      this.secretAccessKey = arguments[1];
	      this.sessionToken = arguments[2];
	    }
	  },

	  /**
	   * @return [Integer] the number of seconds before {expireTime} during which
	   *   the credentials will be considered expired.
	   */
	  expiryWindow: 15,

	  /**
	   * @return [Boolean] whether the credentials object should call {refresh}
	   * @note Subclasses should override this method to provide custom refresh
	   *   logic.
	   */
	  needsRefresh: function needsRefresh() {
	    var currentTime = AWS.util.date.getDate().getTime();
	    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

	    if (this.expireTime && adjustedTime > this.expireTime) {
	      return true;
	    } else {
	      return this.expired || !this.accessKeyId || !this.secretAccessKey;
	    }
	  },

	  /**
	   * Gets the existing credentials, refreshing them if they are not yet loaded
	   * or have expired. Users should call this method before using {refresh},
	   * as this will not attempt to reload credentials when they are already
	   * loaded into the object.
	   *
	   * @callback callback function(err)
	   *   When this callback is called with no error, it means either credentials
	   *   do not need to be refreshed or refreshed credentials information has
	   *   been loaded into the object (as the `accessKeyId`, `secretAccessKey`,
	   *   and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   */
	  get: function get(callback) {
	    var self = this;
	    if (this.needsRefresh()) {
	      this.refresh(function(err) {
	        if (!err) self.expired = false; // reset expired flag
	        if (callback) callback(err);
	      });
	    } else if (callback) {
	      callback();
	    }
	  },

	  /**
	   * @!method  getPromise()
	   *   Returns a 'thenable' promise.
	   *   Gets the existing credentials, refreshing them if they are not yet loaded
	   *   or have expired. Users should call this method before using {refresh},
	   *   as this will not attempt to reload credentials when they are already
	   *   loaded into the object.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function()
	   *     Called if the promise is fulfilled. When this callback is called, it
	   *     means either credentials do not need to be refreshed or refreshed
	   *     credentials information has been loaded into the object (as the
	   *     `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
	   *   @callback rejectedCallback function(err)
	   *     Called if the promise is rejected.
	   *     @param err [Error] if an error occurred, this value will be filled
	   *   @return [Promise] A promise that represents the state of the `get` call.
	   *   @example Calling the `getPromise` method.
	   *     var promise = credProvider.getPromise();
	   *     promise.then(function() { ... }, function(err) { ... });
	   */

	  /**
	   * @!method  refreshPromise()
	   *   Returns a 'thenable' promise.
	   *   Refreshes the credentials. Users should call {get} before attempting
	   *   to forcibly refresh credentials.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function()
	   *     Called if the promise is fulfilled. When this callback is called, it
	   *     means refreshed credentials information has been loaded into the object
	   *     (as the `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
	   *   @callback rejectedCallback function(err)
	   *     Called if the promise is rejected.
	   *     @param err [Error] if an error occurred, this value will be filled
	   *   @return [Promise] A promise that represents the state of the `refresh` call.
	   *   @example Calling the `refreshPromise` method.
	   *     var promise = credProvider.refreshPromise();
	   *     promise.then(function() { ... }, function(err) { ... });
	   */

	  /**
	   * Refreshes the credentials. Users should call {get} before attempting
	   * to forcibly refresh credentials.
	   *
	   * @callback callback function(err)
	   *   When this callback is called with no error, it means refreshed
	   *   credentials information has been loaded into the object (as the
	   *   `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
	   *   @param err [Error] if an error occurred, this value will be filled
	   * @note Subclasses should override this class to reset the
	   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
	   *   on the credentials object and then call the callback with
	   *   any error information.
	   * @see get
	   */
	  refresh: function refresh(callback) {
	    this.expired = false;
	    callback();
	  }
	});

	/**
	 * @api private
	 */
	AWS.Credentials.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
	  this.prototype.getPromise = AWS.util.promisifyMethod('get', PromiseDependency);
	  this.prototype.refreshPromise = AWS.util.promisifyMethod('refresh', PromiseDependency);
	};

	/**
	 * @api private
	 */
	AWS.Credentials.deletePromisesFromClass = function deletePromisesFromClass() {
	  delete this.prototype.getPromise;
	  delete this.prototype.refreshPromise;
	};

	AWS.util.addPromises(AWS.Credentials);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);

	/**
	 * Creates a credential provider chain that searches for AWS credentials
	 * in a list of credential providers specified by the {providers} property.
	 *
	 * By default, the chain will use the {defaultProviders} to resolve credentials.
	 * These providers will look in the environment using the
	 * {AWS.EnvironmentCredentials} class with the 'AWS' and 'AMAZON' prefixes.
	 *
	 * ## Setting Providers
	 *
	 * Each provider in the {providers} list should be a function that returns
	 * a {AWS.Credentials} object, or a hardcoded credentials object. The function
	 * form allows for delayed execution of the credential construction.
	 *
	 * ## Resolving Credentials from a Chain
	 *
	 * Call {resolve} to return the first valid credential object that can be
	 * loaded by the provider chain.
	 *
	 * For example, to resolve a chain with a custom provider that checks a file
	 * on disk after the set of {defaultProviders}:
	 *
	 * ```javascript
	 * var diskProvider = new AWS.FileSystemCredentials('./creds.json');
	 * var chain = new AWS.CredentialProviderChain();
	 * chain.providers.push(diskProvider);
	 * chain.resolve();
	 * ```
	 *
	 * The above code will return the `diskProvider` object if the
	 * file contains credentials and the `defaultProviders` do not contain
	 * any credential settings.
	 *
	 * @!attribute providers
	 *   @return [Array<AWS.Credentials, Function>]
	 *     a list of credentials objects or functions that return credentials
	 *     objects. If the provider is a function, the function will be
	 *     executed lazily when the provider needs to be checked for valid
	 *     credentials. By default, this object will be set to the
	 *     {defaultProviders}.
	 *   @see defaultProviders
	 */
	AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {

	  /**
	   * Creates a new CredentialProviderChain with a default set of providers
	   * specified by {defaultProviders}.
	   */
	  constructor: function CredentialProviderChain(providers) {
	    if (providers) {
	      this.providers = providers;
	    } else {
	      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
	    }
	  },

	  /**
	   * @!method  resolvePromise()
	   *   Returns a 'thenable' promise.
	   *   Resolves the provider chain by searching for the first set of
	   *   credentials in {providers}.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function(credentials)
	   *     Called if the promise is fulfilled and the provider resolves the chain
	   *     to a credentials object
	   *     @param credentials [AWS.Credentials] the credentials object resolved
	   *       by the provider chain.
	   *   @callback rejectedCallback function(error)
	   *     Called if the promise is rejected.
	   *     @param err [Error] the error object returned if no credentials are found.
	   *   @return [Promise] A promise that represents the state of the `resolve` method call.
	   *   @example Calling the `resolvePromise` method.
	   *     var promise = chain.resolvePromise();
	   *     promise.then(function(credentials) { ... }, function(err) { ... });
	   */

	  /**
	   * Resolves the provider chain by searching for the first set of
	   * credentials in {providers}.
	   *
	   * @callback callback function(err, credentials)
	   *   Called when the provider resolves the chain to a credentials object
	   *   or null if no credentials can be found.
	   *
	   *   @param err [Error] the error object returned if no credentials are
	   *     found.
	   *   @param credentials [AWS.Credentials] the credentials object resolved
	   *     by the provider chain.
	   * @return [AWS.CredentialProviderChain] the provider, for chaining.
	   */
	  resolve: function resolve(callback) {
	    if (this.providers.length === 0) {
	      callback(new Error('No providers'));
	      return this;
	    }

	    var index = 0;
	    var providers = this.providers.slice(0);

	    function resolveNext(err, creds) {
	      if ((!err && creds) || index === providers.length) {
	        callback(err, creds);
	        return;
	      }

	      var provider = providers[index++];
	      if (typeof provider === 'function') {
	        creds = provider.call();
	      } else {
	        creds = provider;
	      }

	      if (creds.get) {
	        creds.get(function(getErr) {
	          resolveNext(getErr, getErr ? null : creds);
	        });
	      } else {
	        resolveNext(null, creds);
	      }
	    }

	    resolveNext();
	    return this;
	  }
	});

	/**
	 * The default set of providers used by a vanilla CredentialProviderChain.
	 *
	 * In the browser:
	 *
	 * ```javascript
	 * AWS.CredentialProviderChain.defaultProviders = []
	 * ```
	 *
	 * In Node.js:
	 *
	 * ```javascript
	 * AWS.CredentialProviderChain.defaultProviders = [
	 *   function () { return new AWS.EnvironmentCredentials('AWS'); },
	 *   function () { return new AWS.EnvironmentCredentials('AMAZON'); },
	 *   function () { return new AWS.SharedIniFileCredentials(); },
	 *   function () {
	 *     // if AWS_CONTAINER_CREDENTIALS_RELATIVE_URI is set
	 *       return new AWS.ECSCredentials();
	 *     // else
	 *       return new AWS.EC2MetadataCredentials();
	 *   }
	 * ]
	 * ```
	 */
	AWS.CredentialProviderChain.defaultProviders = [];

	/**
	 * @api private
	 */
	AWS.CredentialProviderChain.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
	  this.prototype.resolvePromise = AWS.util.promisifyMethod('resolve', PromiseDependency);
	};

	/**
	 * @api private
	 */
	AWS.CredentialProviderChain.deletePromisesFromClass = function deletePromisesFromClass() {
	  delete this.prototype.resolvePromise;
	};

	AWS.util.addPromises(AWS.CredentialProviderChain);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;

	/**
	 * The endpoint that a service will talk to, for example,
	 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
	 * you need to override an endpoint for a service, you can
	 * set the endpoint on a service by passing the endpoint
	 * object with the `endpoint` option key:
	 *
	 * ```javascript
	 * var ep = new AWS.Endpoint('awsproxy.example.com');
	 * var s3 = new AWS.S3({endpoint: ep});
	 * s3.service.endpoint.hostname == 'awsproxy.example.com'
	 * ```
	 *
	 * Note that if you do not specify a protocol, the protocol will
	 * be selected based on your current {AWS.config} configuration.
	 *
	 * @!attribute protocol
	 *   @return [String] the protocol (http or https) of the endpoint
	 *     URL
	 * @!attribute hostname
	 *   @return [String] the host portion of the endpoint, e.g.,
	 *     example.com
	 * @!attribute host
	 *   @return [String] the host portion of the endpoint including
	 *     the port, e.g., example.com:80
	 * @!attribute port
	 *   @return [Integer] the port of the endpoint
	 * @!attribute href
	 *   @return [String] the full URL of the endpoint
	 */
	AWS.Endpoint = inherit({

	  /**
	   * @overload Endpoint(endpoint)
	   *   Constructs a new endpoint given an endpoint URL. If the
	   *   URL omits a protocol (http or https), the default protocol
	   *   set in the global {AWS.config} will be used.
	   *   @param endpoint [String] the URL to construct an endpoint from
	   */
	  constructor: function Endpoint(endpoint, config) {
	    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

	    if (typeof endpoint === 'undefined' || endpoint === null) {
	      throw new Error('Invalid endpoint: ' + endpoint);
	    } else if (typeof endpoint !== 'string') {
	      return AWS.util.copy(endpoint);
	    }

	    if (!endpoint.match(/^http/)) {
	      var useSSL = config && config.sslEnabled !== undefined ?
	        config.sslEnabled : AWS.config.sslEnabled;
	      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
	    }

	    AWS.util.update(this, AWS.util.urlParse(endpoint));

	    // Ensure the port property is set as an integer
	    if (this.port) {
	      this.port = parseInt(this.port, 10);
	    } else {
	      this.port = this.protocol === 'https:' ? 443 : 80;
	    }
	  }

	});

	/**
	 * The low level HTTP request object, encapsulating all HTTP header
	 * and body data sent by a service request.
	 *
	 * @!attribute method
	 *   @return [String] the HTTP method of the request
	 * @!attribute path
	 *   @return [String] the path portion of the URI, e.g.,
	 *     "/list/?start=5&num=10"
	 * @!attribute headers
	 *   @return [map<String,String>]
	 *     a map of header keys and their respective values
	 * @!attribute body
	 *   @return [String] the request body payload
	 * @!attribute endpoint
	 *   @return [AWS.Endpoint] the endpoint for the request
	 * @!attribute region
	 *   @api private
	 *   @return [String] the region, for signing purposes only.
	 */
	AWS.HttpRequest = inherit({

	  /**
	   * @api private
	   */
	  constructor: function HttpRequest(endpoint, region) {
	    endpoint = new AWS.Endpoint(endpoint);
	    this.method = 'POST';
	    this.path = endpoint.path || '/';
	    this.headers = {};
	    this.body = '';
	    this.endpoint = endpoint;
	    this.region = region;
	    this._userAgent = '';
	    this.setUserAgent();
	  },

	  /**
	   * @api private
	   */
	  setUserAgent: function setUserAgent() {
	    this._userAgent = this.headers[this.getUserAgentHeaderName()] = AWS.util.userAgent();
	  },

	  getUserAgentHeaderName: function getUserAgentHeaderName() {
	    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
	    return prefix + 'User-Agent';
	  },

	  /**
	   * @api private
	   */
	  appendToUserAgent: function appendToUserAgent(agentPartial) {
	    if (typeof agentPartial === 'string' && agentPartial) {
	      this._userAgent += ' ' + agentPartial;
	    }
	    this.headers[this.getUserAgentHeaderName()] = this._userAgent;
	  },

	  /**
	   * @api private
	   */
	  getUserAgent: function getUserAgent() {
	    return this._userAgent;
	  },

	  /**
	   * @return [String] the part of the {path} excluding the
	   *   query string
	   */
	  pathname: function pathname() {
	    return this.path.split('?', 1)[0];
	  },

	  /**
	   * @return [String] the query string portion of the {path}
	   */
	  search: function search() {
	    var query = this.path.split('?', 2)[1];
	    if (query) {
	      query = AWS.util.queryStringParse(query);
	      return AWS.util.queryParamsToString(query);
	    }
	    return '';
	  }

	});

	/**
	 * The low level HTTP response object, encapsulating all HTTP header
	 * and body data returned from the request.
	 *
	 * @!attribute statusCode
	 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
	 * @!attribute headers
	 *   @return [map<String,String>]
	 *      a map of response header keys and their respective values
	 * @!attribute body
	 *   @return [String] the response body payload
	 * @!attribute [r] streaming
	 *   @return [Boolean] whether this response is being streamed at a low-level.
	 *     Defaults to `false` (buffered reads). Do not modify this manually, use
	 *     {createUnbufferedStream} to convert the stream to unbuffered mode
	 *     instead.
	 */
	AWS.HttpResponse = inherit({

	  /**
	   * @api private
	   */
	  constructor: function HttpResponse() {
	    this.statusCode = undefined;
	    this.headers = {};
	    this.body = undefined;
	    this.streaming = false;
	    this.stream = null;
	  },

	  /**
	   * Disables buffering on the HTTP response and returns the stream for reading.
	   * @return [Stream, XMLHttpRequest, null] the underlying stream object.
	   *   Use this object to directly read data off of the stream.
	   * @note This object is only available after the {AWS.Request~httpHeaders}
	   *   event has fired. This method must be called prior to
	   *   {AWS.Request~httpData}.
	   * @example Taking control of a stream
	   *   request.on('httpHeaders', function(statusCode, headers) {
	   *     if (statusCode < 300) {
	   *       if (headers.etag === 'xyz') {
	   *         // pipe the stream, disabling buffering
	   *         var stream = this.response.httpResponse.createUnbufferedStream();
	   *         stream.pipe(process.stdout);
	   *       } else { // abort this request and set a better error message
	   *         this.abort();
	   *         this.response.error = new Error('Invalid ETag');
	   *       }
	   *     }
	   *   }).send(console.log);
	   */
	  createUnbufferedStream: function createUnbufferedStream() {
	    this.streaming = true;
	    return this.stream;
	  }
	});


	AWS.HttpClient = inherit({});

	/**
	 * @api private
	 */
	AWS.HttpClient.getInstance = function getInstance() {
	  if (this.singleton === undefined) {
	    this.singleton = new this();
	  }
	  return this.singleton;
	};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);

	/**
	 * @api private
	 * @!method on(eventName, callback)
	 *   Registers an event listener callback for the event given by `eventName`.
	 *   Parameters passed to the callback function depend on the individual event
	 *   being triggered. See the event documentation for those parameters.
	 *
	 *   @param eventName [String] the event name to register the listener for
	 *   @param callback [Function] the listener callback function
	 *   @return [AWS.SequentialExecutor] the same object for chaining
	 */
	AWS.SequentialExecutor = AWS.util.inherit({

	  constructor: function SequentialExecutor() {
	    this._events = {};
	  },

	  /**
	   * @api private
	   */
	  listeners: function listeners(eventName) {
	    return this._events[eventName] ? this._events[eventName].slice(0) : [];
	  },

	  on: function on(eventName, listener) {
	    if (this._events[eventName]) {
	      this._events[eventName].push(listener);
	    } else {
	      this._events[eventName] = [listener];
	    }
	    return this;
	  },

	  /**
	   * @api private
	   */
	  onAsync: function onAsync(eventName, listener) {
	    listener._isAsync = true;
	    return this.on(eventName, listener);
	  },

	  removeListener: function removeListener(eventName, listener) {
	    var listeners = this._events[eventName];
	    if (listeners) {
	      var length = listeners.length;
	      var position = -1;
	      for (var i = 0; i < length; ++i) {
	        if (listeners[i] === listener) {
	          position = i;
	        }
	      }
	      if (position > -1) {
	        listeners.splice(position, 1);
	      }
	    }
	    return this;
	  },

	  removeAllListeners: function removeAllListeners(eventName) {
	    if (eventName) {
	      delete this._events[eventName];
	    } else {
	      this._events = {};
	    }
	    return this;
	  },

	  /**
	   * @api private
	   */
	  emit: function emit(eventName, eventArgs, doneCallback) {
	    if (!doneCallback) doneCallback = function() { };
	    var listeners = this.listeners(eventName);
	    var count = listeners.length;
	    this.callListeners(listeners, eventArgs, doneCallback);
	    return count > 0;
	  },

	  /**
	   * @api private
	   */
	  callListeners: function callListeners(listeners, args, doneCallback, prevError) {
	    var self = this;
	    var error = prevError || null;

	    function callNextListener(err) {
	      if (err) {
	        error = AWS.util.error(error || new Error(), err);
	        if (self._haltHandlersOnError) {
	          return doneCallback.call(self, error);
	        }
	      }
	      self.callListeners(listeners, args, doneCallback, error);
	    }

	    while (listeners.length > 0) {
	      var listener = listeners.shift();
	      if (listener._isAsync) { // asynchronous listener
	        listener.apply(self, args.concat([callNextListener]));
	        return; // stop here, callNextListener will continue
	      } else { // synchronous listener
	        try {
	          listener.apply(self, args);
	        } catch (err) {
	          error = AWS.util.error(error || new Error(), err);
	        }
	        if (error && self._haltHandlersOnError) {
	          doneCallback.call(self, error);
	          return;
	        }
	      }
	    }
	    doneCallback.call(self, error);
	  },

	  /**
	   * Adds or copies a set of listeners from another list of
	   * listeners or SequentialExecutor object.
	   *
	   * @param listeners [map<String,Array<Function>>, AWS.SequentialExecutor]
	   *   a list of events and callbacks, or an event emitter object
	   *   containing listeners to add to this emitter object.
	   * @return [AWS.SequentialExecutor] the emitter object, for chaining.
	   * @example Adding listeners from a map of listeners
	   *   emitter.addListeners({
	   *     event1: [function() { ... }, function() { ... }],
	   *     event2: [function() { ... }]
	   *   });
	   *   emitter.emit('event1'); // emitter has event1
	   *   emitter.emit('event2'); // emitter has event2
	   * @example Adding listeners from another emitter object
	   *   var emitter1 = new AWS.SequentialExecutor();
	   *   emitter1.on('event1', function() { ... });
	   *   emitter1.on('event2', function() { ... });
	   *   var emitter2 = new AWS.SequentialExecutor();
	   *   emitter2.addListeners(emitter1);
	   *   emitter2.emit('event1'); // emitter2 has event1
	   *   emitter2.emit('event2'); // emitter2 has event2
	   */
	  addListeners: function addListeners(listeners) {
	    var self = this;

	    // extract listeners if parameter is an SequentialExecutor object
	    if (listeners._events) listeners = listeners._events;

	    AWS.util.each(listeners, function(event, callbacks) {
	      if (typeof callbacks === 'function') callbacks = [callbacks];
	      AWS.util.arrayEach(callbacks, function(callback) {
	        self.on(event, callback);
	      });
	    });

	    return self;
	  },

	  /**
	   * Registers an event with {on} and saves the callback handle function
	   * as a property on the emitter object using a given `name`.
	   *
	   * @param name [String] the property name to set on this object containing
	   *   the callback function handle so that the listener can be removed in
	   *   the future.
	   * @param (see on)
	   * @return (see on)
	   * @example Adding a named listener DATA_CALLBACK
	   *   var listener = function() { doSomething(); };
	   *   emitter.addNamedListener('DATA_CALLBACK', 'data', listener);
	   *
	   *   // the following prints: true
	   *   console.log(emitter.DATA_CALLBACK == listener);
	   */
	  addNamedListener: function addNamedListener(name, eventName, callback) {
	    this[name] = callback;
	    this.addListener(eventName, callback);
	    return this;
	  },

	  /**
	   * @api private
	   */
	  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
	    callback._isAsync = true;
	    return this.addNamedListener(name, eventName, callback);
	  },

	  /**
	   * Helper method to add a set of named listeners using
	   * {addNamedListener}. The callback contains a parameter
	   * with a handle to the `addNamedListener` method.
	   *
	   * @callback callback function(add)
	   *   The callback function is called immediately in order to provide
	   *   the `add` function to the block. This simplifies the addition of
	   *   a large group of named listeners.
	   *   @param add [Function] the {addNamedListener} function to call
	   *     when registering listeners.
	   * @example Adding a set of named listeners
	   *   emitter.addNamedListeners(function(add) {
	   *     add('DATA_CALLBACK', 'data', function() { ... });
	   *     add('OTHER', 'otherEvent', function() { ... });
	   *     add('LAST', 'lastEvent', function() { ... });
	   *   });
	   *
	   *   // these properties are now set:
	   *   emitter.DATA_CALLBACK;
	   *   emitter.OTHER;
	   *   emitter.LAST;
	   */
	  addNamedListeners: function addNamedListeners(callback) {
	    var self = this;
	    callback(
	      function() {
	        self.addNamedListener.apply(self, arguments);
	      },
	      function() {
	        self.addNamedAsyncListener.apply(self, arguments);
	      }
	    );
	    return this;
	  }
	});

	/**
	 * {on} is the prefered method.
	 * @api private
	 */
	AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

	module.exports = AWS.SequentialExecutor;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var SequentialExecutor = __webpack_require__(194);
	/**
	 * The namespace used to register global event listeners for request building
	 * and sending.
	 */
	AWS.EventListeners = {
	  /**
	   * @!attribute VALIDATE_CREDENTIALS
	   *   A request listener that validates whether the request is being
	   *   sent with credentials.
	   *   Handles the {AWS.Request~validate 'validate' Request event}
	   *   @example Sending a request without validating credentials
	   *     var listener = AWS.EventListeners.Core.VALIDATE_CREDENTIALS;
	   *     request.removeListener('validate', listener);
	   *   @readonly
	   *   @return [Function]
	   * @!attribute VALIDATE_REGION
	   *   A request listener that validates whether the region is set
	   *   for a request.
	   *   Handles the {AWS.Request~validate 'validate' Request event}
	   *   @example Sending a request without validating region configuration
	   *     var listener = AWS.EventListeners.Core.VALIDATE_REGION;
	   *     request.removeListener('validate', listener);
	   *   @readonly
	   *   @return [Function]
	   * @!attribute VALIDATE_PARAMETERS
	   *   A request listener that validates input parameters in a request.
	   *   Handles the {AWS.Request~validate 'validate' Request event}
	   *   @example Sending a request without validating parameters
	   *     var listener = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
	   *     request.removeListener('validate', listener);
	   *   @example Disable parameter validation globally
	   *     AWS.EventListeners.Core.removeListener('validate',
	   *       AWS.EventListeners.Core.VALIDATE_REGION);
	   *   @readonly
	   *   @return [Function]
	   * @!attribute SEND
	   *   A request listener that initiates the HTTP connection for a
	   *   request being sent. Handles the {AWS.Request~send 'send' Request event}
	   *   @example Replacing the HTTP handler
	   *     var listener = AWS.EventListeners.Core.SEND;
	   *     request.removeListener('send', listener);
	   *     request.on('send', function(response) {
	   *       customHandler.send(response);
	   *     });
	   *   @return [Function]
	   *   @readonly
	   * @!attribute HTTP_DATA
	   *   A request listener that reads data from the HTTP connection in order
	   *   to build the response data.
	   *   Handles the {AWS.Request~httpData 'httpData' Request event}.
	   *   Remove this handler if you are overriding the 'httpData' event and
	   *   do not want extra data processing and buffering overhead.
	   *   @example Disabling default data processing
	   *     var listener = AWS.EventListeners.Core.HTTP_DATA;
	   *     request.removeListener('httpData', listener);
	   *   @return [Function]
	   *   @readonly
	   */
	  Core: {} /* doc hack */
	};

	/**
	 * @api private
	 */
	function getOperationAuthtype(req) {
	  if (!req.service.api.operations) {
	    return '';
	  }
	  var operation = req.service.api.operations[req.operation];
	  return operation ? operation.authtype : '';
	}

	AWS.EventListeners = {
	  Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
	    addAsync('VALIDATE_CREDENTIALS', 'validate',
	        function VALIDATE_CREDENTIALS(req, done) {
	      if (!req.service.api.signatureVersion) return done(); // none
	      req.service.config.getCredentials(function(err) {
	        if (err) {
	          req.response.error = AWS.util.error(err,
	            {code: 'CredentialsError', message: 'Missing credentials in config'});
	        }
	        done();
	      });
	    });

	    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
	      if (!req.service.config.region && !req.service.isGlobalEndpoint) {
	        req.response.error = AWS.util.error(new Error(),
	          {code: 'ConfigError', message: 'Missing region in config'});
	      }
	    });

	    add('BUILD_IDEMPOTENCY_TOKENS', 'validate', function BUILD_IDEMPOTENCY_TOKENS(req) {
	      if (!req.service.api.operations) {
	        return;
	      }
	      var operation = req.service.api.operations[req.operation];
	      if (!operation) {
	        return;
	      }
	      var idempotentMembers = operation.idempotentMembers;
	      if (!idempotentMembers.length) {
	        return;
	      }
	      // creates a copy of params so user's param object isn't mutated
	      var params = AWS.util.copy(req.params);
	      for (var i = 0, iLen = idempotentMembers.length; i < iLen; i++) {
	        if (!params[idempotentMembers[i]]) {
	          // add the member
	          params[idempotentMembers[i]] = AWS.util.uuid.v4();
	        }
	      }
	      req.params = params;
	    });

	    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
	      if (!req.service.api.operations) {
	        return;
	      }
	      var rules = req.service.api.operations[req.operation].input;
	      var validation = req.service.config.paramValidation;
	      new AWS.ParamValidator(validation).validate(rules, req.params);
	    });

	    addAsync('COMPUTE_SHA256', 'afterBuild', function COMPUTE_SHA256(req, done) {
	      req.haltHandlersOnError();
	      if (!req.service.api.operations) {
	        return;
	      }
	      var operation = req.service.api.operations[req.operation];
	      var authtype = operation ? operation.authtype : '';
	      if (!req.service.api.signatureVersion && !authtype) return done(); // none
	      if (req.service.getSignerClass(req) === AWS.Signers.V4) {
	        var body = req.httpRequest.body || '';
	        if (authtype.indexOf('unsigned-body') >= 0) {
	          req.httpRequest.headers['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
	          return done();
	        }
	        AWS.util.computeSha256(body, function(err, sha) {
	          if (err) {
	            done(err);
	          }
	          else {
	            req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
	            done();
	          }
	        });
	      } else {
	        done();
	      }
	    });

	    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
	      var authtype = getOperationAuthtype(req);
	      if (req.httpRequest.headers['Content-Length'] === undefined
	          && authtype.indexOf('unsigned-body') === -1) {
	        var length = AWS.util.string.byteLength(req.httpRequest.body);
	        req.httpRequest.headers['Content-Length'] = length;
	      }
	    });

	    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
	      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
	    });

	    add('RESTART', 'restart', function RESTART() {
	      var err = this.response.error;
	      if (!err || !err.retryable) return;

	      this.httpRequest = new AWS.HttpRequest(
	        this.service.endpoint,
	        this.service.region
	      );

	      if (this.response.retryCount < this.service.config.maxRetries) {
	        this.response.retryCount++;
	      } else {
	        this.response.error = null;
	      }
	    });

	    addAsync('SIGN', 'sign', function SIGN(req, done) {
	      var service = req.service;
	      var operations = req.service.api.operations || {};
	      var operation = operations[req.operation];
	      var authtype = operation ? operation.authtype : '';
	      if (!service.api.signatureVersion && !authtype) return done(); // none

	      service.config.getCredentials(function (err, credentials) {
	        if (err) {
	          req.response.error = err;
	          return done();
	        }

	        try {
	          var date = service.getSkewCorrectedDate();
	          var SignerClass = service.getSignerClass(req);
	          var signer = new SignerClass(req.httpRequest,
	            service.api.signingName || service.api.endpointPrefix,
	            {
	              signatureCache: service.config.signatureCache,
	              operation: operation
	            });
	          signer.setServiceClientId(service._clientId);

	          // clear old authorization headers
	          delete req.httpRequest.headers['Authorization'];
	          delete req.httpRequest.headers['Date'];
	          delete req.httpRequest.headers['X-Amz-Date'];

	          // add new authorization
	          signer.addAuthorization(credentials, date);
	          req.signedAt = date;
	        } catch (e) {
	          req.response.error = e;
	        }
	        done();
	      });
	    });

	    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
	      if (this.service.successfulResponse(resp, this)) {
	        resp.data = {};
	        resp.error = null;
	      } else {
	        resp.data = null;
	        resp.error = AWS.util.error(new Error(),
	          {code: 'UnknownError', message: 'An unknown error occurred.'});
	      }
	    });

	    addAsync('SEND', 'send', function SEND(resp, done) {
	      resp.httpResponse._abortCallback = done;
	      resp.error = null;
	      resp.data = null;

	      function callback(httpResp) {
	        resp.httpResponse.stream = httpResp;
	        var stream = resp.request.httpRequest.stream;

	        httpResp.on('headers', function onHeaders(statusCode, headers, statusMessage) {
	          resp.request.emit(
	            'httpHeaders',
	            [statusCode, headers, resp, statusMessage]
	          );

	          if (!resp.httpResponse.streaming) {
	            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
	              httpResp.on('readable', function onReadable() {
	                var data = httpResp.read();
	                if (data !== null) {
	                  resp.request.emit('httpData', [data, resp]);
	                }
	              });
	            } else { // legacy streams API
	              httpResp.on('data', function onData(data) {
	                resp.request.emit('httpData', [data, resp]);
	              });
	            }
	          }
	        });

	        httpResp.on('end', function onEnd() {
	          if (!stream || !stream.didCallback) {
	            resp.request.emit('httpDone');
	            done();
	          }
	        });
	      }

	      function progress(httpResp) {
	        httpResp.on('sendProgress', function onSendProgress(value) {
	          resp.request.emit('httpUploadProgress', [value, resp]);
	        });

	        httpResp.on('receiveProgress', function onReceiveProgress(value) {
	          resp.request.emit('httpDownloadProgress', [value, resp]);
	        });
	      }

	      function error(err) {
	        if (err.code !== 'RequestAbortedError') {
	          var errCode = err.code === 'TimeoutError' ? err.code : 'NetworkingError';
	          err = AWS.util.error(err, {
	            code: errCode,
	            region: resp.request.httpRequest.region,
	            hostname: resp.request.httpRequest.endpoint.hostname,
	            retryable: true
	          });
	        }
	        resp.error = err;
	        resp.request.emit('httpError', [resp.error, resp], function() {
	          done();
	        });
	      }

	      function executeSend() {
	        var http = AWS.HttpClient.getInstance();
	        var httpOptions = resp.request.service.config.httpOptions || {};
	        try {
	          var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
	                                          callback, error);
	          progress(stream);
	        } catch (err) {
	          error(err);
	        }
	      }
	      var timeDiff = (resp.request.service.getSkewCorrectedDate() - this.signedAt) / 1000;
	      if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
	        this.emit('sign', [this], function(err) {
	          if (err) done(err);
	          else executeSend();
	        });
	      } else {
	        executeSend();
	      }
	    });

	    add('HTTP_HEADERS', 'httpHeaders',
	        function HTTP_HEADERS(statusCode, headers, resp, statusMessage) {
	      resp.httpResponse.statusCode = statusCode;
	      resp.httpResponse.statusMessage = statusMessage;
	      resp.httpResponse.headers = headers;
	      resp.httpResponse.body = new AWS.util.Buffer('');
	      resp.httpResponse.buffers = [];
	      resp.httpResponse.numBytes = 0;
	      var dateHeader = headers.date || headers.Date;
	      var service = resp.request.service;
	      if (dateHeader) {
	        var serverTime = Date.parse(dateHeader);
	        if (service.config.correctClockSkew
	            && service.isClockSkewed(serverTime)) {
	          service.applyClockOffset(serverTime);
	        }
	      }
	    });

	    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
	      if (chunk) {
	        if (AWS.util.isNode()) {
	          resp.httpResponse.numBytes += chunk.length;

	          var total = resp.httpResponse.headers['content-length'];
	          var progress = { loaded: resp.httpResponse.numBytes, total: total };
	          resp.request.emit('httpDownloadProgress', [progress, resp]);
	        }

	        resp.httpResponse.buffers.push(new AWS.util.Buffer(chunk));
	      }
	    });

	    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
	      // convert buffers array into single buffer
	      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
	        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
	        resp.httpResponse.body = body;
	      }
	      delete resp.httpResponse.numBytes;
	      delete resp.httpResponse.buffers;
	    });

	    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
	      if (resp.httpResponse.statusCode) {
	        resp.error.statusCode = resp.httpResponse.statusCode;
	        if (resp.error.retryable === undefined) {
	          resp.error.retryable = this.service.retryableError(resp.error, this);
	        }
	      }
	    });

	    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
	      if (!resp.error) return;
	      switch (resp.error.code) {
	        case 'RequestExpired': // EC2 only
	        case 'ExpiredTokenException':
	        case 'ExpiredToken':
	          resp.error.retryable = true;
	          resp.request.service.config.credentials.expired = true;
	      }
	    });

	    add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
	      var err = resp.error;
	      if (!err) return;
	      if (typeof err.code === 'string' && typeof err.message === 'string') {
	        if (err.code.match(/Signature/) && err.message.match(/expired/)) {
	          resp.error.retryable = true;
	        }
	      }
	    });

	    add('CLOCK_SKEWED', 'retry', function CLOCK_SKEWED(resp) {
	      if (!resp.error) return;
	      if (this.service.clockSkewError(resp.error)
	          && this.service.config.correctClockSkew) {
	        resp.error.retryable = true;
	      }
	    });

	    add('REDIRECT', 'retry', function REDIRECT(resp) {
	      if (resp.error && resp.error.statusCode >= 300 &&
	          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
	        this.httpRequest.endpoint =
	          new AWS.Endpoint(resp.httpResponse.headers['location']);
	        this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
	        resp.error.redirect = true;
	        resp.error.retryable = true;
	      }
	    });

	    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
	      if (resp.error) {
	        if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
	          resp.error.retryDelay = 0;
	        } else if (resp.retryCount < resp.maxRetries) {
	          resp.error.retryDelay = this.service.retryDelays(resp.retryCount) || 0;
	        }
	      }
	    });

	    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
	      var delay, willRetry = false;

	      if (resp.error) {
	        delay = resp.error.retryDelay || 0;
	        if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
	          resp.retryCount++;
	          willRetry = true;
	        } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
	          resp.redirectCount++;
	          willRetry = true;
	        }
	      }

	      if (willRetry) {
	        resp.error = null;
	        setTimeout(done, delay);
	      } else {
	        done();
	      }
	    });
	  }),

	  CorePost: new SequentialExecutor().addNamedListeners(function(add) {
	    add('EXTRACT_REQUEST_ID', 'extractData', AWS.util.extractRequestId);
	    add('EXTRACT_REQUEST_ID', 'extractError', AWS.util.extractRequestId);

	    add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
	      if (err.code === 'NetworkingError' && err.errno === 'ENOTFOUND') {
	        var message = 'Inaccessible host: `' + err.hostname +
	          '\'. This service may not be available in the `' + err.region +
	          '\' region.';
	        this.response.error = AWS.util.error(new Error(message), {
	          code: 'UnknownEndpoint',
	          region: err.region,
	          hostname: err.hostname,
	          retryable: true,
	          originalError: err
	        });
	      }
	    });
	  }),

	  Logger: new SequentialExecutor().addNamedListeners(function(add) {
	    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
	      var req = resp.request;
	      var logger = req.service.config.logger;
	      if (!logger) return;

	      function buildMessage() {
	        var time = resp.request.service.getSkewCorrectedDate().getTime();
	        var delta = (time - req.startTime.getTime()) / 1000;
	        var ansi = logger.isTTY ? true : false;
	        var status = resp.httpResponse.statusCode;
	        var params = __webpack_require__(196).inspect(req.params, true, null);

	        var message = '';
	        if (ansi) message += '\x1B[33m';
	        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
	        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
	        if (ansi) message += '\x1B[0;1m';
	        message += ' ' + AWS.util.string.lowerFirst(req.operation);
	        message += '(' + params + ')';
	        if (ansi) message += '\x1B[0m';
	        return message;
	      }

	      var line = buildMessage();
	      if (typeof logger.log === 'function') {
	        logger.log(line);
	      } else if (typeof logger.write === 'function') {
	        logger.write(line + '\n');
	      }
	    });
	  }),

	  Json: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(13);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  Rest: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(20);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  RestJson: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(21);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  RestXml: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(22);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  }),

	  Query: new SequentialExecutor().addNamedListeners(function(add) {
	    var svc = __webpack_require__(16);
	    add('BUILD', 'build', svc.buildRequest);
	    add('EXTRACT_DATA', 'extractData', svc.extractData);
	    add('EXTRACT_ERROR', 'extractError', svc.extractError);
	  })
	};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(197);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(198);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ }),
/* 197 */
/***/ (function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ }),
/* 198 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var AWS = __webpack_require__(1);
	var AcceptorStateMachine = __webpack_require__(200);
	var inherit = AWS.util.inherit;
	var domain = AWS.util.domain;
	var jmespath = __webpack_require__(201);

	/**
	 * @api private
	 */
	var hardErrorStates = {success: 1, error: 1, complete: 1};

	function isTerminalState(machine) {
	  return Object.prototype.hasOwnProperty.call(hardErrorStates, machine._asm.currentState);
	}

	var fsm = new AcceptorStateMachine();
	fsm.setupStates = function() {
	  var transition = function(_, done) {
	    var self = this;
	    self._haltHandlersOnError = false;

	    self.emit(self._asm.currentState, function(err) {
	      if (err) {
	        if (isTerminalState(self)) {
	          if (domain && self.domain instanceof domain.Domain) {
	            err.domainEmitter = self;
	            err.domain = self.domain;
	            err.domainThrown = false;
	            self.domain.emit('error', err);
	          } else {
	            throw err;
	          }
	        } else {
	          self.response.error = err;
	          done(err);
	        }
	      } else {
	        done(self.response.error);
	      }
	    });

	  };

	  this.addState('validate', 'build', 'error', transition);
	  this.addState('build', 'afterBuild', 'restart', transition);
	  this.addState('afterBuild', 'sign', 'restart', transition);
	  this.addState('sign', 'send', 'retry', transition);
	  this.addState('retry', 'afterRetry', 'afterRetry', transition);
	  this.addState('afterRetry', 'sign', 'error', transition);
	  this.addState('send', 'validateResponse', 'retry', transition);
	  this.addState('validateResponse', 'extractData', 'extractError', transition);
	  this.addState('extractError', 'extractData', 'retry', transition);
	  this.addState('extractData', 'success', 'retry', transition);
	  this.addState('restart', 'build', 'error', transition);
	  this.addState('success', 'complete', 'complete', transition);
	  this.addState('error', 'complete', 'complete', transition);
	  this.addState('complete', null, null, transition);
	};
	fsm.setupStates();

	/**
	 * ## Asynchronous Requests
	 *
	 * All requests made through the SDK are asynchronous and use a
	 * callback interface. Each service method that kicks off a request
	 * returns an `AWS.Request` object that you can use to register
	 * callbacks.
	 *
	 * For example, the following service method returns the request
	 * object as "request", which can be used to register callbacks:
	 *
	 * ```javascript
	 * // request is an AWS.Request object
	 * var request = ec2.describeInstances();
	 *
	 * // register callbacks on request to retrieve response data
	 * request.on('success', function(response) {
	 *   console.log(response.data);
	 * });
	 * ```
	 *
	 * When a request is ready to be sent, the {send} method should
	 * be called:
	 *
	 * ```javascript
	 * request.send();
	 * ```
	 *
	 * Since registered callbacks may or may not be idempotent, requests should only
	 * be sent once. To perform the same operation multiple times, you will need to
	 * create multiple request objects, each with its own registered callbacks.
	 *
	 * ## Removing Default Listeners for Events
	 *
	 * Request objects are built with default listeners for the various events,
	 * depending on the service type. In some cases, you may want to remove
	 * some built-in listeners to customize behaviour. Doing this requires
	 * access to the built-in listener functions, which are exposed through
	 * the {AWS.EventListeners.Core} namespace. For instance, you may
	 * want to customize the HTTP handler used when sending a request. In this
	 * case, you can remove the built-in listener associated with the 'send'
	 * event, the {AWS.EventListeners.Core.SEND} listener and add your own.
	 *
	 * ## Multiple Callbacks and Chaining
	 *
	 * You can register multiple callbacks on any request object. The
	 * callbacks can be registered for different events, or all for the
	 * same event. In addition, you can chain callback registration, for
	 * example:
	 *
	 * ```javascript
	 * request.
	 *   on('success', function(response) {
	 *     console.log("Success!");
	 *   }).
	 *   on('error', function(response) {
	 *     console.log("Error!");
	 *   }).
	 *   on('complete', function(response) {
	 *     console.log("Always!");
	 *   }).
	 *   send();
	 * ```
	 *
	 * The above example will print either "Success! Always!", or "Error! Always!",
	 * depending on whether the request succeeded or not.
	 *
	 * @!attribute httpRequest
	 *   @readonly
	 *   @!group HTTP Properties
	 *   @return [AWS.HttpRequest] the raw HTTP request object
	 *     containing request headers and body information
	 *     sent by the service.
	 *
	 * @!attribute startTime
	 *   @readonly
	 *   @!group Operation Properties
	 *   @return [Date] the time that the request started
	 *
	 * @!group Request Building Events
	 *
	 * @!event validate(request)
	 *   Triggered when a request is being validated. Listeners
	 *   should throw an error if the request should not be sent.
	 *   @param request [Request] the request object being sent
	 *   @see AWS.EventListeners.Core.VALIDATE_CREDENTIALS
	 *   @see AWS.EventListeners.Core.VALIDATE_REGION
	 *   @example Ensuring that a certain parameter is set before sending a request
	 *     var req = s3.putObject(params);
	 *     req.on('validate', function() {
	 *       if (!req.params.Body.match(/^Hello\s/)) {
	 *         throw new Error('Body must start with "Hello "');
	 *       }
	 *     });
	 *     req.send(function(err, data) { ... });
	 *
	 * @!event build(request)
	 *   Triggered when the request payload is being built. Listeners
	 *   should fill the necessary information to send the request
	 *   over HTTP.
	 *   @param (see AWS.Request~validate)
	 *   @example Add a custom HTTP header to a request
	 *     var req = s3.putObject(params);
	 *     req.on('build', function() {
	 *       req.httpRequest.headers['Custom-Header'] = 'value';
	 *     });
	 *     req.send(function(err, data) { ... });
	 *
	 * @!event sign(request)
	 *   Triggered when the request is being signed. Listeners should
	 *   add the correct authentication headers and/or adjust the body,
	 *   depending on the authentication mechanism being used.
	 *   @param (see AWS.Request~validate)
	 *
	 * @!group Request Sending Events
	 *
	 * @!event send(response)
	 *   Triggered when the request is ready to be sent. Listeners
	 *   should call the underlying transport layer to initiate
	 *   the sending of the request.
	 *   @param response [Response] the response object
	 *   @context [Request] the request object that was sent
	 *   @see AWS.EventListeners.Core.SEND
	 *
	 * @!event retry(response)
	 *   Triggered when a request failed and might need to be retried or redirected.
	 *   If the response is retryable, the listener should set the
	 *   `response.error.retryable` property to `true`, and optionally set
	 *   `response.error.retryDelay` to the millisecond delay for the next attempt.
	 *   In the case of a redirect, `response.error.redirect` should be set to
	 *   `true` with `retryDelay` set to an optional delay on the next request.
	 *
	 *   If a listener decides that a request should not be retried,
	 *   it should set both `retryable` and `redirect` to false.
	 *
	 *   Note that a retryable error will be retried at most
	 *   {AWS.Config.maxRetries} times (based on the service object's config).
	 *   Similarly, a request that is redirected will only redirect at most
	 *   {AWS.Config.maxRedirects} times.
	 *
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @example Adding a custom retry for a 404 response
	 *     request.on('retry', function(response) {
	 *       // this resource is not yet available, wait 10 seconds to get it again
	 *       if (response.httpResponse.statusCode === 404 && response.error) {
	 *         response.error.retryable = true;   // retry this error
	 *         response.error.retryDelay = 10000; // wait 10 seconds
	 *       }
	 *     });
	 *
	 * @!group Data Parsing Events
	 *
	 * @!event extractError(response)
	 *   Triggered on all non-2xx requests so that listeners can extract
	 *   error details from the response body. Listeners to this event
	 *   should set the `response.error` property.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event extractData(response)
	 *   Triggered in successful requests to allow listeners to
	 *   de-serialize the response body into `response.data`.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!group Completion Events
	 *
	 * @!event success(response)
	 *   Triggered when the request completed successfully.
	 *   `response.data` will contain the response data and
	 *   `response.error` will be null.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event error(error, response)
	 *   Triggered when an error occurs at any point during the
	 *   request. `response.error` will contain details about the error
	 *   that occurred. `response.data` will be null.
	 *   @param error [Error] the error object containing details about
	 *     the error that occurred.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event complete(response)
	 *   Triggered whenever a request cycle completes. `response.error`
	 *   should be checked, since the request may have failed.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!group HTTP Events
	 *
	 * @!event httpHeaders(statusCode, headers, response, statusMessage)
	 *   Triggered when headers are sent by the remote server
	 *   @param statusCode [Integer] the HTTP response code
	 *   @param headers [map<String,String>] the response headers
	 *   @param (see AWS.Request~send)
	 *   @param statusMessage [String] A status message corresponding to the HTTP
	 *                                 response code
	 *   @context (see AWS.Request~send)
	 *
	 * @!event httpData(chunk, response)
	 *   Triggered when data is sent by the remote server
	 *   @param chunk [Buffer] the buffer data containing the next data chunk
	 *     from the server
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @see AWS.EventListeners.Core.HTTP_DATA
	 *
	 * @!event httpUploadProgress(progress, response)
	 *   Triggered when the HTTP request has uploaded more data
	 *   @param progress [map] An object containing the `loaded` and `total` bytes
	 *     of the request.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @note This event will not be emitted in Node.js 0.8.x.
	 *
	 * @!event httpDownloadProgress(progress, response)
	 *   Triggered when the HTTP request has downloaded more data
	 *   @param progress [map] An object containing the `loaded` and `total` bytes
	 *     of the request.
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *   @note This event will not be emitted in Node.js 0.8.x.
	 *
	 * @!event httpError(error, response)
	 *   Triggered when the HTTP request failed
	 *   @param error [Error] the error object that was thrown
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @!event httpDone(response)
	 *   Triggered when the server is finished sending data
	 *   @param (see AWS.Request~send)
	 *   @context (see AWS.Request~send)
	 *
	 * @see AWS.Response
	 */
	AWS.Request = inherit({

	  /**
	   * Creates a request for an operation on a given service with
	   * a set of input parameters.
	   *
	   * @param service [AWS.Service] the service to perform the operation on
	   * @param operation [String] the operation to perform on the service
	   * @param params [Object] parameters to send to the operation.
	   *   See the operation's documentation for the format of the
	   *   parameters.
	   */
	  constructor: function Request(service, operation, params) {
	    var endpoint = service.endpoint;
	    var region = service.config.region;
	    var customUserAgent = service.config.customUserAgent;

	    // global endpoints sign as us-east-1
	    if (service.isGlobalEndpoint) region = 'us-east-1';

	    this.domain = domain && domain.active;
	    this.service = service;
	    this.operation = operation;
	    this.params = params || {};
	    this.httpRequest = new AWS.HttpRequest(endpoint, region);
	    this.httpRequest.appendToUserAgent(customUserAgent);
	    this.startTime = service.getSkewCorrectedDate();

	    this.response = new AWS.Response(this);
	    this._asm = new AcceptorStateMachine(fsm.states, 'validate');
	    this._haltHandlersOnError = false;

	    AWS.SequentialExecutor.call(this);
	    this.emit = this.emitEvent;
	  },

	  /**
	   * @!group Sending a Request
	   */

	  /**
	   * @overload send(callback = null)
	   *   Sends the request object.
	   *
	   *   @callback callback function(err, data)
	   *     If a callback is supplied, it is called when a response is returned
	   *     from the service.
	   *     @context [AWS.Request] the request object being sent.
	   *     @param err [Error] the error object returned from the request.
	   *       Set to `null` if the request is successful.
	   *     @param data [Object] the de-serialized data returned from
	   *       the request. Set to `null` if a request error occurs.
	   *   @example Sending a request with a callback
	   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
	   *     request.send(function(err, data) { console.log(err, data); });
	   *   @example Sending a request with no callback (using event handlers)
	   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
	   *     request.on('complete', function(response) { ... }); // register a callback
	   *     request.send();
	   */
	  send: function send(callback) {
	    if (callback) {
	      // append to user agent
	      this.httpRequest.appendToUserAgent('callback');
	      this.on('complete', function (resp) {
	        callback.call(resp, resp.error, resp.data);
	      });
	    }
	    this.runTo();

	    return this.response;
	  },

	  /**
	   * @!method  promise()
	   *   Sends the request and returns a 'thenable' promise.
	   *
	   *   Two callbacks can be provided to the `then` method on the returned promise.
	   *   The first callback will be called if the promise is fulfilled, and the second
	   *   callback will be called if the promise is rejected.
	   *   @callback fulfilledCallback function(data)
	   *     Called if the promise is fulfilled.
	   *     @param data [Object] the de-serialized data returned from the request.
	   *   @callback rejectedCallback function(error)
	   *     Called if the promise is rejected.
	   *     @param error [Error] the error object returned from the request.
	   *   @return [Promise] A promise that represents the state of the request.
	   *   @example Sending a request using promises.
	   *     var request = s3.putObject({Bucket: 'bucket', Key: 'key'});
	   *     var result = request.promise();
	   *     result.then(function(data) { ... }, function(error) { ... });
	   */

	  /**
	   * @api private
	   */
	  build: function build(callback) {
	    return this.runTo('send', callback);
	  },

	  /**
	   * @api private
	   */
	  runTo: function runTo(state, done) {
	    this._asm.runTo(state, done, this);
	    return this;
	  },

	  /**
	   * Aborts a request, emitting the error and complete events.
	   *
	   * @!macro nobrowser
	   * @example Aborting a request after sending
	   *   var params = {
	   *     Bucket: 'bucket', Key: 'key',
	   *     Body: new Buffer(1024 * 1024 * 5) // 5MB payload
	   *   };
	   *   var request = s3.putObject(params);
	   *   request.send(function (err, data) {
	   *     if (err) console.log("Error:", err.code, err.message);
	   *     else console.log(data);
	   *   });
	   *
	   *   // abort request in 1 second
	   *   setTimeout(request.abort.bind(request), 1000);
	   *
	   *   // prints "Error: RequestAbortedError Request aborted by user"
	   * @return [AWS.Request] the same request object, for chaining.
	   * @since v1.4.0
	   */
	  abort: function abort() {
	    this.removeAllListeners('validateResponse');
	    this.removeAllListeners('extractError');
	    this.on('validateResponse', function addAbortedError(resp) {
	      resp.error = AWS.util.error(new Error('Request aborted by user'), {
	         code: 'RequestAbortedError', retryable: false
	      });
	    });

	    if (this.httpRequest.stream && !this.httpRequest.stream.didCallback) { // abort HTTP stream
	      this.httpRequest.stream.abort();
	      if (this.httpRequest._abortCallback) {
	         this.httpRequest._abortCallback();
	      } else {
	        this.removeAllListeners('send'); // haven't sent yet, so let's not
	      }
	    }

	    return this;
	  },

	  /**
	   * Iterates over each page of results given a pageable request, calling
	   * the provided callback with each page of data. After all pages have been
	   * retrieved, the callback is called with `null` data.
	   *
	   * @note This operation can generate multiple requests to a service.
	   * @example Iterating over multiple pages of objects in an S3 bucket
	   *   var pages = 1;
	   *   s3.listObjects().eachPage(function(err, data) {
	   *     if (err) return;
	   *     console.log("Page", pages++);
	   *     console.log(data);
	   *   });
	   * @example Iterating over multiple pages with an asynchronous callback
	   *   s3.listObjects(params).eachPage(function(err, data, done) {
	   *     doSomethingAsyncAndOrExpensive(function() {
	   *       // The next page of results isn't fetched until done is called
	   *       done();
	   *     });
	   *   });
	   * @callback callback function(err, data, [doneCallback])
	   *   Called with each page of resulting data from the request. If the
	   *   optional `doneCallback` is provided in the function, it must be called
	   *   when the callback is complete.
	   *
	   *   @param err [Error] an error object, if an error occurred.
	   *   @param data [Object] a single page of response data. If there is no
	   *     more data, this object will be `null`.
	   *   @param doneCallback [Function] an optional done callback. If this
	   *     argument is defined in the function declaration, it should be called
	   *     when the next page is ready to be retrieved. This is useful for
	   *     controlling serial pagination across asynchronous operations.
	   *   @return [Boolean] if the callback returns `false`, pagination will
	   *     stop.
	   *
	   * @see AWS.Request.eachItem
	   * @see AWS.Response.nextPage
	   * @since v1.4.0
	   */
	  eachPage: function eachPage(callback) {
	    // Make all callbacks async-ish
	    callback = AWS.util.fn.makeAsync(callback, 3);

	    function wrappedCallback(response) {
	      callback.call(response, response.error, response.data, function (result) {
	        if (result === false) return;

	        if (response.hasNextPage()) {
	          response.nextPage().on('complete', wrappedCallback).send();
	        } else {
	          callback.call(response, null, null, AWS.util.fn.noop);
	        }
	      });
	    }

	    this.on('complete', wrappedCallback).send();
	  },

	  /**
	   * Enumerates over individual items of a request, paging the responses if
	   * necessary.
	   *
	   * @api experimental
	   * @since v1.4.0
	   */
	  eachItem: function eachItem(callback) {
	    var self = this;
	    function wrappedCallback(err, data) {
	      if (err) return callback(err, null);
	      if (data === null) return callback(null, null);

	      var config = self.service.paginationConfig(self.operation);
	      var resultKey = config.resultKey;
	      if (Array.isArray(resultKey)) resultKey = resultKey[0];
	      var items = jmespath.search(data, resultKey);
	      var continueIteration = true;
	      AWS.util.arrayEach(items, function(item) {
	        continueIteration = callback(null, item);
	        if (continueIteration === false) {
	          return AWS.util.abort;
	        }
	      });
	      return continueIteration;
	    }

	    this.eachPage(wrappedCallback);
	  },

	  /**
	   * @return [Boolean] whether the operation can return multiple pages of
	   *   response data.
	   * @see AWS.Response.eachPage
	   * @since v1.4.0
	   */
	  isPageable: function isPageable() {
	    return this.service.paginationConfig(this.operation) ? true : false;
	  },

	  /**
	   * Sends the request and converts the request object into a readable stream
	   * that can be read from or piped into a writable stream.
	   *
	   * @note The data read from a readable stream contains only
	   *   the raw HTTP body contents.
	   * @example Manually reading from a stream
	   *   request.createReadStream().on('data', function(data) {
	   *     console.log("Got data:", data.toString());
	   *   });
	   * @example Piping a request body into a file
	   *   var out = fs.createWriteStream('/path/to/outfile.jpg');
	   *   s3.service.getObject(params).createReadStream().pipe(out);
	   * @return [Stream] the readable stream object that can be piped
	   *   or read from (by registering 'data' event listeners).
	   * @!macro nobrowser
	   */
	  createReadStream: function createReadStream() {
	    var streams = AWS.util.stream;
	    var req = this;
	    var stream = null;

	    if (AWS.HttpClient.streamsApiVersion === 2) {
	      stream = new streams.PassThrough();
	      process.nextTick(function() { req.send(); });
	    } else {
	      stream = new streams.Stream();
	      stream.readable = true;

	      stream.sent = false;
	      stream.on('newListener', function(event) {
	        if (!stream.sent && event === 'data') {
	          stream.sent = true;
	          process.nextTick(function() { req.send(); });
	        }
	      });
	    }

	    this.on('error', function(err) {
	      stream.emit('error', err);
	    });

	    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
	      if (statusCode < 300) {
	        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
	        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
	        req.on('httpError', function streamHttpError(error) {
	          resp.error = error;
	          resp.error.retryable = false;
	        });

	        var shouldCheckContentLength = false;
	        var expectedLen;
	        if (req.httpRequest.method !== 'HEAD') {
	          expectedLen = parseInt(headers['content-length'], 10);
	        }
	        if (expectedLen !== undefined && !isNaN(expectedLen) && expectedLen >= 0) {
	          shouldCheckContentLength = true;
	          var receivedLen = 0;
	        }

	        var checkContentLengthAndEmit = function checkContentLengthAndEmit() {
	          if (shouldCheckContentLength && receivedLen !== expectedLen) {
	            stream.emit('error', AWS.util.error(
	              new Error('Stream content length mismatch. Received ' +
	                receivedLen + ' of ' + expectedLen + ' bytes.'),
	              { code: 'StreamContentLengthMismatch' }
	            ));
	          } else if (AWS.HttpClient.streamsApiVersion === 2) {
	            stream.end();
	          } else {
	            stream.emit('end');
	          }
	        };

	        var httpStream = resp.httpResponse.createUnbufferedStream();

	        if (AWS.HttpClient.streamsApiVersion === 2) {
	          if (shouldCheckContentLength) {
	            var lengthAccumulator = new streams.PassThrough();
	            lengthAccumulator._write = function(chunk) {
	              if (chunk && chunk.length) {
	                receivedLen += chunk.length;
	              }
	              return streams.PassThrough.prototype._write.apply(this, arguments);
	            };

	            lengthAccumulator.on('end', checkContentLengthAndEmit);
	            stream.on('error', function(err) {
	              shouldCheckContentLength = false;
	              httpStream.unpipe(lengthAccumulator);
	              lengthAccumulator.emit('end');
	              lengthAccumulator.end();
	            });
	            httpStream.pipe(lengthAccumulator).pipe(stream, { end: false });
	          } else {
	            httpStream.pipe(stream);
	          }
	        } else {

	          if (shouldCheckContentLength) {
	            httpStream.on('data', function(arg) {
	              if (arg && arg.length) {
	                receivedLen += arg.length;
	              }
	            });
	          }

	          httpStream.on('data', function(arg) {
	            stream.emit('data', arg);
	          });
	          httpStream.on('end', checkContentLengthAndEmit);
	        }

	        httpStream.on('error', function(err) {
	          shouldCheckContentLength = false;
	          stream.emit('error', err);
	        });
	      }
	    });

	    return stream;
	  },

	  /**
	   * @param [Array,Response] args This should be the response object,
	   *   or an array of args to send to the event.
	   * @api private
	   */
	  emitEvent: function emit(eventName, args, done) {
	    if (typeof args === 'function') { done = args; args = null; }
	    if (!done) done = function() { };
	    if (!args) args = this.eventParameters(eventName, this.response);

	    var origEmit = AWS.SequentialExecutor.prototype.emit;
	    origEmit.call(this, eventName, args, function (err) {
	      if (err) this.response.error = err;
	      done.call(this, err);
	    });
	  },

	  /**
	   * @api private
	   */
	  eventParameters: function eventParameters(eventName) {
	    switch (eventName) {
	      case 'restart':
	      case 'validate':
	      case 'sign':
	      case 'build':
	      case 'afterValidate':
	      case 'afterBuild':
	        return [this];
	      case 'error':
	        return [this.response.error, this.response];
	      default:
	        return [this.response];
	    }
	  },

	  /**
	   * @api private
	   */
	  presign: function presign(expires, callback) {
	    if (!callback && typeof expires === 'function') {
	      callback = expires;
	      expires = null;
	    }
	    return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
	  },

	  /**
	   * @api private
	   */
	  isPresigned: function isPresigned() {
	    return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, 'presigned-expires');
	  },

	  /**
	   * @api private
	   */
	  toUnauthenticated: function toUnauthenticated() {
	    this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
	    this.removeListener('sign', AWS.EventListeners.Core.SIGN);
	    return this;
	  },

	  /**
	   * @api private
	   */
	  toGet: function toGet() {
	    if (this.service.api.protocol === 'query' ||
	        this.service.api.protocol === 'ec2') {
	      this.removeListener('build', this.buildAsGet);
	      this.addListener('build', this.buildAsGet);
	    }
	    return this;
	  },

	  /**
	   * @api private
	   */
	  buildAsGet: function buildAsGet(request) {
	    request.httpRequest.method = 'GET';
	    request.httpRequest.path = request.service.endpoint.path +
	                               '?' + request.httpRequest.body;
	    request.httpRequest.body = '';

	    // don't need these headers on a GET request
	    delete request.httpRequest.headers['Content-Length'];
	    delete request.httpRequest.headers['Content-Type'];
	  },

	  /**
	   * @api private
	   */
	  haltHandlersOnError: function haltHandlersOnError() {
	    this._haltHandlersOnError = true;
	  }
	});

	/**
	 * @api private
	 */
	AWS.Request.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
	  this.prototype.promise = function promise() {
	    var self = this;
	    // append to user agent
	    this.httpRequest.appendToUserAgent('promise');
	    return new PromiseDependency(function(resolve, reject) {
	      self.on('complete', function(resp) {
	        if (resp.error) {
	          reject(resp.error);
	        } else {
	          // define $response property so that it is not enumberable
	          // this prevents circular reference errors when stringifying the JSON object
	          resolve(Object.defineProperty(
	            resp.data || {},
	            '$response',
	            {value: resp}
	          ));
	        }
	      });
	      self.runTo();
	    });
	  };
	};

	/**
	 * @api private
	 */
	AWS.Request.deletePromisesFromClass = function deletePromisesFromClass() {
	  delete this.prototype.promise;
	};

	AWS.util.addPromises(AWS.Request);

	AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 200 */
/***/ (function(module, exports) {

	function AcceptorStateMachine(states, state) {
	  this.currentState = state || null;
	  this.states = states || {};
	}

	AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
	  if (typeof finalState === 'function') {
	    inputError = bindObject; bindObject = done;
	    done = finalState; finalState = null;
	  }

	  var self = this;
	  var state = self.states[self.currentState];
	  state.fn.call(bindObject || self, inputError, function(err) {
	    if (err) {
	      if (state.fail) self.currentState = state.fail;
	      else return done ? done.call(bindObject, err) : null;
	    } else {
	      if (state.accept) self.currentState = state.accept;
	      else return done ? done.call(bindObject) : null;
	    }
	    if (self.currentState === finalState) {
	      return done ? done.call(bindObject, err) : null;
	    }

	    self.runTo(finalState, done, bindObject, err);
	  });
	};

	AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
	  if (typeof acceptState === 'function') {
	    fn = acceptState; acceptState = null; failState = null;
	  } else if (typeof failState === 'function') {
	    fn = failState; failState = null;
	  }

	  if (!this.currentState) this.currentState = name;
	  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
	  return this;
	};

	module.exports = AcceptorStateMachine;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	(function(exports) {
	  "use strict";

	  function isArray(obj) {
	    if (obj !== null) {
	      return Object.prototype.toString.call(obj) === "[object Array]";
	    } else {
	      return false;
	    }
	  }

	  function isObject(obj) {
	    if (obj !== null) {
	      return Object.prototype.toString.call(obj) === "[object Object]";
	    } else {
	      return false;
	    }
	  }

	  function strictDeepEqual(first, second) {
	    // Check the scalar case first.
	    if (first === second) {
	      return true;
	    }

	    // Check if they are the same type.
	    var firstType = Object.prototype.toString.call(first);
	    if (firstType !== Object.prototype.toString.call(second)) {
	      return false;
	    }
	    // We know that first and second have the same type so we can just check the
	    // first type from now on.
	    if (isArray(first) === true) {
	      // Short circuit if they're not the same length;
	      if (first.length !== second.length) {
	        return false;
	      }
	      for (var i = 0; i < first.length; i++) {
	        if (strictDeepEqual(first[i], second[i]) === false) {
	          return false;
	        }
	      }
	      return true;
	    }
	    if (isObject(first) === true) {
	      // An object is equal if it has the same key/value pairs.
	      var keysSeen = {};
	      for (var key in first) {
	        if (hasOwnProperty.call(first, key)) {
	          if (strictDeepEqual(first[key], second[key]) === false) {
	            return false;
	          }
	          keysSeen[key] = true;
	        }
	      }
	      // Now check that there aren't any keys in second that weren't
	      // in first.
	      for (var key2 in second) {
	        if (hasOwnProperty.call(second, key2)) {
	          if (keysSeen[key2] !== true) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }
	    return false;
	  }

	  function isFalse(obj) {
	    // From the spec:
	    // A false value corresponds to the following values:
	    // Empty list
	    // Empty object
	    // Empty string
	    // False boolean
	    // null value

	    // First check the scalar values.
	    if (obj === "" || obj === false || obj === null) {
	        return true;
	    } else if (isArray(obj) && obj.length === 0) {
	        // Check for an empty array.
	        return true;
	    } else if (isObject(obj)) {
	        // Check for an empty object.
	        for (var key in obj) {
	            // If there are any keys, then
	            // the object is not empty so the object
	            // is not false.
	            if (obj.hasOwnProperty(key)) {
	              return false;
	            }
	        }
	        return true;
	    } else {
	        return false;
	    }
	  }

	  function objValues(obj) {
	    var keys = Object.keys(obj);
	    var values = [];
	    for (var i = 0; i < keys.length; i++) {
	      values.push(obj[keys[i]]);
	    }
	    return values;
	  }

	  function merge(a, b) {
	      var merged = {};
	      for (var key in a) {
	          merged[key] = a[key];
	      }
	      for (var key2 in b) {
	          merged[key2] = b[key2];
	      }
	      return merged;
	  }

	  var trimLeft;
	  if (typeof String.prototype.trimLeft === "function") {
	    trimLeft = function(str) {
	      return str.trimLeft();
	    };
	  } else {
	    trimLeft = function(str) {
	      return str.match(/^\s*(.*)/)[1];
	    };
	  }

	  // Type constants used to define functions.
	  var TYPE_NUMBER = 0;
	  var TYPE_ANY = 1;
	  var TYPE_STRING = 2;
	  var TYPE_ARRAY = 3;
	  var TYPE_OBJECT = 4;
	  var TYPE_BOOLEAN = 5;
	  var TYPE_EXPREF = 6;
	  var TYPE_NULL = 7;
	  var TYPE_ARRAY_NUMBER = 8;
	  var TYPE_ARRAY_STRING = 9;

	  var TOK_EOF = "EOF";
	  var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
	  var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
	  var TOK_RBRACKET = "Rbracket";
	  var TOK_RPAREN = "Rparen";
	  var TOK_COMMA = "Comma";
	  var TOK_COLON = "Colon";
	  var TOK_RBRACE = "Rbrace";
	  var TOK_NUMBER = "Number";
	  var TOK_CURRENT = "Current";
	  var TOK_EXPREF = "Expref";
	  var TOK_PIPE = "Pipe";
	  var TOK_OR = "Or";
	  var TOK_AND = "And";
	  var TOK_EQ = "EQ";
	  var TOK_GT = "GT";
	  var TOK_LT = "LT";
	  var TOK_GTE = "GTE";
	  var TOK_LTE = "LTE";
	  var TOK_NE = "NE";
	  var TOK_FLATTEN = "Flatten";
	  var TOK_STAR = "Star";
	  var TOK_FILTER = "Filter";
	  var TOK_DOT = "Dot";
	  var TOK_NOT = "Not";
	  var TOK_LBRACE = "Lbrace";
	  var TOK_LBRACKET = "Lbracket";
	  var TOK_LPAREN= "Lparen";
	  var TOK_LITERAL= "Literal";

	  // The "&", "[", "<", ">" tokens
	  // are not in basicToken because
	  // there are two token variants
	  // ("&&", "[?", "<=", ">=").  This is specially handled
	  // below.

	  var basicTokens = {
	    ".": TOK_DOT,
	    "*": TOK_STAR,
	    ",": TOK_COMMA,
	    ":": TOK_COLON,
	    "{": TOK_LBRACE,
	    "}": TOK_RBRACE,
	    "]": TOK_RBRACKET,
	    "(": TOK_LPAREN,
	    ")": TOK_RPAREN,
	    "@": TOK_CURRENT
	  };

	  var operatorStartToken = {
	      "<": true,
	      ">": true,
	      "=": true,
	      "!": true
	  };

	  var skipChars = {
	      " ": true,
	      "\t": true,
	      "\n": true
	  };


	  function isAlpha(ch) {
	      return (ch >= "a" && ch <= "z") ||
	             (ch >= "A" && ch <= "Z") ||
	             ch === "_";
	  }

	  function isNum(ch) {
	      return (ch >= "0" && ch <= "9") ||
	             ch === "-";
	  }
	  function isAlphaNum(ch) {
	      return (ch >= "a" && ch <= "z") ||
	             (ch >= "A" && ch <= "Z") ||
	             (ch >= "0" && ch <= "9") ||
	             ch === "_";
	  }

	  function Lexer() {
	  }
	  Lexer.prototype = {
	      tokenize: function(stream) {
	          var tokens = [];
	          this._current = 0;
	          var start;
	          var identifier;
	          var token;
	          while (this._current < stream.length) {
	              if (isAlpha(stream[this._current])) {
	                  start = this._current;
	                  identifier = this._consumeUnquotedIdentifier(stream);
	                  tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
	                               value: identifier,
	                               start: start});
	              } else if (basicTokens[stream[this._current]] !== undefined) {
	                  tokens.push({type: basicTokens[stream[this._current]],
	                              value: stream[this._current],
	                              start: this._current});
	                  this._current++;
	              } else if (isNum(stream[this._current])) {
	                  token = this._consumeNumber(stream);
	                  tokens.push(token);
	              } else if (stream[this._current] === "[") {
	                  // No need to increment this._current.  This happens
	                  // in _consumeLBracket
	                  token = this._consumeLBracket(stream);
	                  tokens.push(token);
	              } else if (stream[this._current] === "\"") {
	                  start = this._current;
	                  identifier = this._consumeQuotedIdentifier(stream);
	                  tokens.push({type: TOK_QUOTEDIDENTIFIER,
	                               value: identifier,
	                               start: start});
	              } else if (stream[this._current] === "'") {
	                  start = this._current;
	                  identifier = this._consumeRawStringLiteral(stream);
	                  tokens.push({type: TOK_LITERAL,
	                               value: identifier,
	                               start: start});
	              } else if (stream[this._current] === "`") {
	                  start = this._current;
	                  var literal = this._consumeLiteral(stream);
	                  tokens.push({type: TOK_LITERAL,
	                               value: literal,
	                               start: start});
	              } else if (operatorStartToken[stream[this._current]] !== undefined) {
	                  tokens.push(this._consumeOperator(stream));
	              } else if (skipChars[stream[this._current]] !== undefined) {
	                  // Ignore whitespace.
	                  this._current++;
	              } else if (stream[this._current] === "&") {
	                  start = this._current;
	                  this._current++;
	                  if (stream[this._current] === "&") {
	                      this._current++;
	                      tokens.push({type: TOK_AND, value: "&&", start: start});
	                  } else {
	                      tokens.push({type: TOK_EXPREF, value: "&", start: start});
	                  }
	              } else if (stream[this._current] === "|") {
	                  start = this._current;
	                  this._current++;
	                  if (stream[this._current] === "|") {
	                      this._current++;
	                      tokens.push({type: TOK_OR, value: "||", start: start});
	                  } else {
	                      tokens.push({type: TOK_PIPE, value: "|", start: start});
	                  }
	              } else {
	                  var error = new Error("Unknown character:" + stream[this._current]);
	                  error.name = "LexerError";
	                  throw error;
	              }
	          }
	          return tokens;
	      },

	      _consumeUnquotedIdentifier: function(stream) {
	          var start = this._current;
	          this._current++;
	          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
	              this._current++;
	          }
	          return stream.slice(start, this._current);
	      },

	      _consumeQuotedIdentifier: function(stream) {
	          var start = this._current;
	          this._current++;
	          var maxLength = stream.length;
	          while (stream[this._current] !== "\"" && this._current < maxLength) {
	              // You can escape a double quote and you can escape an escape.
	              var current = this._current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "\"")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this._current = current;
	          }
	          this._current++;
	          return JSON.parse(stream.slice(start, this._current));
	      },

	      _consumeRawStringLiteral: function(stream) {
	          var start = this._current;
	          this._current++;
	          var maxLength = stream.length;
	          while (stream[this._current] !== "'" && this._current < maxLength) {
	              // You can escape a single quote and you can escape an escape.
	              var current = this._current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "'")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this._current = current;
	          }
	          this._current++;
	          var literal = stream.slice(start + 1, this._current - 1);
	          return literal.replace("\\'", "'");
	      },

	      _consumeNumber: function(stream) {
	          var start = this._current;
	          this._current++;
	          var maxLength = stream.length;
	          while (isNum(stream[this._current]) && this._current < maxLength) {
	              this._current++;
	          }
	          var value = parseInt(stream.slice(start, this._current));
	          return {type: TOK_NUMBER, value: value, start: start};
	      },

	      _consumeLBracket: function(stream) {
	          var start = this._current;
	          this._current++;
	          if (stream[this._current] === "?") {
	              this._current++;
	              return {type: TOK_FILTER, value: "[?", start: start};
	          } else if (stream[this._current] === "]") {
	              this._current++;
	              return {type: TOK_FLATTEN, value: "[]", start: start};
	          } else {
	              return {type: TOK_LBRACKET, value: "[", start: start};
	          }
	      },

	      _consumeOperator: function(stream) {
	          var start = this._current;
	          var startingChar = stream[start];
	          this._current++;
	          if (startingChar === "!") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_NE, value: "!=", start: start};
	              } else {
	                return {type: TOK_NOT, value: "!", start: start};
	              }
	          } else if (startingChar === "<") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_LTE, value: "<=", start: start};
	              } else {
	                  return {type: TOK_LT, value: "<", start: start};
	              }
	          } else if (startingChar === ">") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_GTE, value: ">=", start: start};
	              } else {
	                  return {type: TOK_GT, value: ">", start: start};
	              }
	          } else if (startingChar === "=") {
	              if (stream[this._current] === "=") {
	                  this._current++;
	                  return {type: TOK_EQ, value: "==", start: start};
	              }
	          }
	      },

	      _consumeLiteral: function(stream) {
	          this._current++;
	          var start = this._current;
	          var maxLength = stream.length;
	          var literal;
	          while(stream[this._current] !== "`" && this._current < maxLength) {
	              // You can escape a literal char or you can escape the escape.
	              var current = this._current;
	              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
	                                               stream[current + 1] === "`")) {
	                  current += 2;
	              } else {
	                  current++;
	              }
	              this._current = current;
	          }
	          var literalString = trimLeft(stream.slice(start, this._current));
	          literalString = literalString.replace("\\`", "`");
	          if (this._looksLikeJSON(literalString)) {
	              literal = JSON.parse(literalString);
	          } else {
	              // Try to JSON parse it as "<literal>"
	              literal = JSON.parse("\"" + literalString + "\"");
	          }
	          // +1 gets us to the ending "`", +1 to move on to the next char.
	          this._current++;
	          return literal;
	      },

	      _looksLikeJSON: function(literalString) {
	          var startingChars = "[{\"";
	          var jsonLiterals = ["true", "false", "null"];
	          var numberLooking = "-0123456789";

	          if (literalString === "") {
	              return false;
	          } else if (startingChars.indexOf(literalString[0]) >= 0) {
	              return true;
	          } else if (jsonLiterals.indexOf(literalString) >= 0) {
	              return true;
	          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
	              try {
	                  JSON.parse(literalString);
	                  return true;
	              } catch (ex) {
	                  return false;
	              }
	          } else {
	              return false;
	          }
	      }
	  };

	      var bindingPower = {};
	      bindingPower[TOK_EOF] = 0;
	      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
	      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
	      bindingPower[TOK_RBRACKET] = 0;
	      bindingPower[TOK_RPAREN] = 0;
	      bindingPower[TOK_COMMA] = 0;
	      bindingPower[TOK_RBRACE] = 0;
	      bindingPower[TOK_NUMBER] = 0;
	      bindingPower[TOK_CURRENT] = 0;
	      bindingPower[TOK_EXPREF] = 0;
	      bindingPower[TOK_PIPE] = 1;
	      bindingPower[TOK_OR] = 2;
	      bindingPower[TOK_AND] = 3;
	      bindingPower[TOK_EQ] = 5;
	      bindingPower[TOK_GT] = 5;
	      bindingPower[TOK_LT] = 5;
	      bindingPower[TOK_GTE] = 5;
	      bindingPower[TOK_LTE] = 5;
	      bindingPower[TOK_NE] = 5;
	      bindingPower[TOK_FLATTEN] = 9;
	      bindingPower[TOK_STAR] = 20;
	      bindingPower[TOK_FILTER] = 21;
	      bindingPower[TOK_DOT] = 40;
	      bindingPower[TOK_NOT] = 45;
	      bindingPower[TOK_LBRACE] = 50;
	      bindingPower[TOK_LBRACKET] = 55;
	      bindingPower[TOK_LPAREN] = 60;

	  function Parser() {
	  }

	  Parser.prototype = {
	      parse: function(expression) {
	          this._loadTokens(expression);
	          this.index = 0;
	          var ast = this.expression(0);
	          if (this._lookahead(0) !== TOK_EOF) {
	              var t = this._lookaheadToken(0);
	              var error = new Error(
	                  "Unexpected token type: " + t.type + ", value: " + t.value);
	              error.name = "ParserError";
	              throw error;
	          }
	          return ast;
	      },

	      _loadTokens: function(expression) {
	          var lexer = new Lexer();
	          var tokens = lexer.tokenize(expression);
	          tokens.push({type: TOK_EOF, value: "", start: expression.length});
	          this.tokens = tokens;
	      },

	      expression: function(rbp) {
	          var leftToken = this._lookaheadToken(0);
	          this._advance();
	          var left = this.nud(leftToken);
	          var currentToken = this._lookahead(0);
	          while (rbp < bindingPower[currentToken]) {
	              this._advance();
	              left = this.led(currentToken, left);
	              currentToken = this._lookahead(0);
	          }
	          return left;
	      },

	      _lookahead: function(number) {
	          return this.tokens[this.index + number].type;
	      },

	      _lookaheadToken: function(number) {
	          return this.tokens[this.index + number];
	      },

	      _advance: function() {
	          this.index++;
	      },

	      nud: function(token) {
	        var left;
	        var right;
	        var expression;
	        switch (token.type) {
	          case TOK_LITERAL:
	            return {type: "Literal", value: token.value};
	          case TOK_UNQUOTEDIDENTIFIER:
	            return {type: "Field", name: token.value};
	          case TOK_QUOTEDIDENTIFIER:
	            var node = {type: "Field", name: token.value};
	            if (this._lookahead(0) === TOK_LPAREN) {
	                throw new Error("Quoted identifier not allowed for function names.");
	            } else {
	                return node;
	            }
	            break;
	          case TOK_NOT:
	            right = this.expression(bindingPower.Not);
	            return {type: "NotExpression", children: [right]};
	          case TOK_STAR:
	            left = {type: "Identity"};
	            right = null;
	            if (this._lookahead(0) === TOK_RBRACKET) {
	                // This can happen in a multiselect,
	                // [a, b, *]
	                right = {type: "Identity"};
	            } else {
	                right = this._parseProjectionRHS(bindingPower.Star);
	            }
	            return {type: "ValueProjection", children: [left, right]};
	          case TOK_FILTER:
	            return this.led(token.type, {type: "Identity"});
	          case TOK_LBRACE:
	            return this._parseMultiselectHash();
	          case TOK_FLATTEN:
	            left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
	            right = this._parseProjectionRHS(bindingPower.Flatten);
	            return {type: "Projection", children: [left, right]};
	          case TOK_LBRACKET:
	            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
	                right = this._parseIndexExpression();
	                return this._projectIfSlice({type: "Identity"}, right);
	            } else if (this._lookahead(0) === TOK_STAR &&
	                       this._lookahead(1) === TOK_RBRACKET) {
	                this._advance();
	                this._advance();
	                right = this._parseProjectionRHS(bindingPower.Star);
	                return {type: "Projection",
	                        children: [{type: "Identity"}, right]};
	            } else {
	                return this._parseMultiselectList();
	            }
	            break;
	          case TOK_CURRENT:
	            return {type: TOK_CURRENT};
	          case TOK_EXPREF:
	            expression = this.expression(bindingPower.Expref);
	            return {type: "ExpressionReference", children: [expression]};
	          case TOK_LPAREN:
	            var args = [];
	            while (this._lookahead(0) !== TOK_RPAREN) {
	              if (this._lookahead(0) === TOK_CURRENT) {
	                expression = {type: TOK_CURRENT};
	                this._advance();
	              } else {
	                expression = this.expression(0);
	              }
	              args.push(expression);
	            }
	            this._match(TOK_RPAREN);
	            return args[0];
	          default:
	            this._errorToken(token);
	        }
	      },

	      led: function(tokenName, left) {
	        var right;
	        switch(tokenName) {
	          case TOK_DOT:
	            var rbp = bindingPower.Dot;
	            if (this._lookahead(0) !== TOK_STAR) {
	                right = this._parseDotRHS(rbp);
	                return {type: "Subexpression", children: [left, right]};
	            } else {
	                // Creating a projection.
	                this._advance();
	                right = this._parseProjectionRHS(rbp);
	                return {type: "ValueProjection", children: [left, right]};
	            }
	            break;
	          case TOK_PIPE:
	            right = this.expression(bindingPower.Pipe);
	            return {type: TOK_PIPE, children: [left, right]};
	          case TOK_OR:
	            right = this.expression(bindingPower.Or);
	            return {type: "OrExpression", children: [left, right]};
	          case TOK_AND:
	            right = this.expression(bindingPower.And);
	            return {type: "AndExpression", children: [left, right]};
	          case TOK_LPAREN:
	            var name = left.name;
	            var args = [];
	            var expression, node;
	            while (this._lookahead(0) !== TOK_RPAREN) {
	              if (this._lookahead(0) === TOK_CURRENT) {
	                expression = {type: TOK_CURRENT};
	                this._advance();
	              } else {
	                expression = this.expression(0);
	              }
	              if (this._lookahead(0) === TOK_COMMA) {
	                this._match(TOK_COMMA);
	              }
	              args.push(expression);
	            }
	            this._match(TOK_RPAREN);
	            node = {type: "Function", name: name, children: args};
	            return node;
	          case TOK_FILTER:
	            var condition = this.expression(0);
	            this._match(TOK_RBRACKET);
	            if (this._lookahead(0) === TOK_FLATTEN) {
	              right = {type: "Identity"};
	            } else {
	              right = this._parseProjectionRHS(bindingPower.Filter);
	            }
	            return {type: "FilterProjection", children: [left, right, condition]};
	          case TOK_FLATTEN:
	            var leftNode = {type: TOK_FLATTEN, children: [left]};
	            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
	            return {type: "Projection", children: [leftNode, rightNode]};
	          case TOK_EQ:
	          case TOK_NE:
	          case TOK_GT:
	          case TOK_GTE:
	          case TOK_LT:
	          case TOK_LTE:
	            return this._parseComparator(left, tokenName);
	          case TOK_LBRACKET:
	            var token = this._lookaheadToken(0);
	            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
	                right = this._parseIndexExpression();
	                return this._projectIfSlice(left, right);
	            } else {
	                this._match(TOK_STAR);
	                this._match(TOK_RBRACKET);
	                right = this._parseProjectionRHS(bindingPower.Star);
	                return {type: "Projection", children: [left, right]};
	            }
	            break;
	          default:
	            this._errorToken(this._lookaheadToken(0));
	        }
	      },

	      _match: function(tokenType) {
	          if (this._lookahead(0) === tokenType) {
	              this._advance();
	          } else {
	              var t = this._lookaheadToken(0);
	              var error = new Error("Expected " + tokenType + ", got: " + t.type);
	              error.name = "ParserError";
	              throw error;
	          }
	      },

	      _errorToken: function(token) {
	          var error = new Error("Invalid token (" +
	                                token.type + "): \"" +
	                                token.value + "\"");
	          error.name = "ParserError";
	          throw error;
	      },


	      _parseIndexExpression: function() {
	          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
	              return this._parseSliceExpression();
	          } else {
	              var node = {
	                  type: "Index",
	                  value: this._lookaheadToken(0).value};
	              this._advance();
	              this._match(TOK_RBRACKET);
	              return node;
	          }
	      },

	      _projectIfSlice: function(left, right) {
	          var indexExpr = {type: "IndexExpression", children: [left, right]};
	          if (right.type === "Slice") {
	              return {
	                  type: "Projection",
	                  children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
	              };
	          } else {
	              return indexExpr;
	          }
	      },

	      _parseSliceExpression: function() {
	          // [start:end:step] where each part is optional, as well as the last
	          // colon.
	          var parts = [null, null, null];
	          var index = 0;
	          var currentToken = this._lookahead(0);
	          while (currentToken !== TOK_RBRACKET && index < 3) {
	              if (currentToken === TOK_COLON) {
	                  index++;
	                  this._advance();
	              } else if (currentToken === TOK_NUMBER) {
	                  parts[index] = this._lookaheadToken(0).value;
	                  this._advance();
	              } else {
	                  var t = this._lookahead(0);
	                  var error = new Error("Syntax error, unexpected token: " +
	                                        t.value + "(" + t.type + ")");
	                  error.name = "Parsererror";
	                  throw error;
	              }
	              currentToken = this._lookahead(0);
	          }
	          this._match(TOK_RBRACKET);
	          return {
	              type: "Slice",
	              children: parts
	          };
	      },

	      _parseComparator: function(left, comparator) {
	        var right = this.expression(bindingPower[comparator]);
	        return {type: "Comparator", name: comparator, children: [left, right]};
	      },

	      _parseDotRHS: function(rbp) {
	          var lookahead = this._lookahead(0);
	          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
	          if (exprTokens.indexOf(lookahead) >= 0) {
	              return this.expression(rbp);
	          } else if (lookahead === TOK_LBRACKET) {
	              this._match(TOK_LBRACKET);
	              return this._parseMultiselectList();
	          } else if (lookahead === TOK_LBRACE) {
	              this._match(TOK_LBRACE);
	              return this._parseMultiselectHash();
	          }
	      },

	      _parseProjectionRHS: function(rbp) {
	          var right;
	          if (bindingPower[this._lookahead(0)] < 10) {
	              right = {type: "Identity"};
	          } else if (this._lookahead(0) === TOK_LBRACKET) {
	              right = this.expression(rbp);
	          } else if (this._lookahead(0) === TOK_FILTER) {
	              right = this.expression(rbp);
	          } else if (this._lookahead(0) === TOK_DOT) {
	              this._match(TOK_DOT);
	              right = this._parseDotRHS(rbp);
	          } else {
	              var t = this._lookaheadToken(0);
	              var error = new Error("Sytanx error, unexpected token: " +
	                                    t.value + "(" + t.type + ")");
	              error.name = "ParserError";
	              throw error;
	          }
	          return right;
	      },

	      _parseMultiselectList: function() {
	          var expressions = [];
	          while (this._lookahead(0) !== TOK_RBRACKET) {
	              var expression = this.expression(0);
	              expressions.push(expression);
	              if (this._lookahead(0) === TOK_COMMA) {
	                  this._match(TOK_COMMA);
	                  if (this._lookahead(0) === TOK_RBRACKET) {
	                    throw new Error("Unexpected token Rbracket");
	                  }
	              }
	          }
	          this._match(TOK_RBRACKET);
	          return {type: "MultiSelectList", children: expressions};
	      },

	      _parseMultiselectHash: function() {
	        var pairs = [];
	        var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
	        var keyToken, keyName, value, node;
	        for (;;) {
	          keyToken = this._lookaheadToken(0);
	          if (identifierTypes.indexOf(keyToken.type) < 0) {
	            throw new Error("Expecting an identifier token, got: " +
	                            keyToken.type);
	          }
	          keyName = keyToken.value;
	          this._advance();
	          this._match(TOK_COLON);
	          value = this.expression(0);
	          node = {type: "KeyValuePair", name: keyName, value: value};
	          pairs.push(node);
	          if (this._lookahead(0) === TOK_COMMA) {
	            this._match(TOK_COMMA);
	          } else if (this._lookahead(0) === TOK_RBRACE) {
	            this._match(TOK_RBRACE);
	            break;
	          }
	        }
	        return {type: "MultiSelectHash", children: pairs};
	      }
	  };


	  function TreeInterpreter(runtime) {
	    this.runtime = runtime;
	  }

	  TreeInterpreter.prototype = {
	      search: function(node, value) {
	          return this.visit(node, value);
	      },

	      visit: function(node, value) {
	          var matched, current, result, first, second, field, left, right, collected, i;
	          switch (node.type) {
	            case "Field":
	              if (value === null ) {
	                  return null;
	              } else if (isObject(value)) {
	                  field = value[node.name];
	                  if (field === undefined) {
	                      return null;
	                  } else {
	                      return field;
	                  }
	              } else {
	                return null;
	              }
	              break;
	            case "Subexpression":
	              result = this.visit(node.children[0], value);
	              for (i = 1; i < node.children.length; i++) {
	                  result = this.visit(node.children[1], result);
	                  if (result === null) {
	                      return null;
	                  }
	              }
	              return result;
	            case "IndexExpression":
	              left = this.visit(node.children[0], value);
	              right = this.visit(node.children[1], left);
	              return right;
	            case "Index":
	              if (!isArray(value)) {
	                return null;
	              }
	              var index = node.value;
	              if (index < 0) {
	                index = value.length + index;
	              }
	              result = value[index];
	              if (result === undefined) {
	                result = null;
	              }
	              return result;
	            case "Slice":
	              if (!isArray(value)) {
	                return null;
	              }
	              var sliceParams = node.children.slice(0);
	              var computed = this.computeSliceParams(value.length, sliceParams);
	              var start = computed[0];
	              var stop = computed[1];
	              var step = computed[2];
	              result = [];
	              if (step > 0) {
	                  for (i = start; i < stop; i += step) {
	                      result.push(value[i]);
	                  }
	              } else {
	                  for (i = start; i > stop; i += step) {
	                      result.push(value[i]);
	                  }
	              }
	              return result;
	            case "Projection":
	              // Evaluate left child.
	              var base = this.visit(node.children[0], value);
	              if (!isArray(base)) {
	                return null;
	              }
	              collected = [];
	              for (i = 0; i < base.length; i++) {
	                current = this.visit(node.children[1], base[i]);
	                if (current !== null) {
	                  collected.push(current);
	                }
	              }
	              return collected;
	            case "ValueProjection":
	              // Evaluate left child.
	              base = this.visit(node.children[0], value);
	              if (!isObject(base)) {
	                return null;
	              }
	              collected = [];
	              var values = objValues(base);
	              for (i = 0; i < values.length; i++) {
	                current = this.visit(node.children[1], values[i]);
	                if (current !== null) {
	                  collected.push(current);
	                }
	              }
	              return collected;
	            case "FilterProjection":
	              base = this.visit(node.children[0], value);
	              if (!isArray(base)) {
	                return null;
	              }
	              var filtered = [];
	              var finalResults = [];
	              for (i = 0; i < base.length; i++) {
	                matched = this.visit(node.children[2], base[i]);
	                if (!isFalse(matched)) {
	                  filtered.push(base[i]);
	                }
	              }
	              for (var j = 0; j < filtered.length; j++) {
	                current = this.visit(node.children[1], filtered[j]);
	                if (current !== null) {
	                  finalResults.push(current);
	                }
	              }
	              return finalResults;
	            case "Comparator":
	              first = this.visit(node.children[0], value);
	              second = this.visit(node.children[1], value);
	              switch(node.name) {
	                case TOK_EQ:
	                  result = strictDeepEqual(first, second);
	                  break;
	                case TOK_NE:
	                  result = !strictDeepEqual(first, second);
	                  break;
	                case TOK_GT:
	                  result = first > second;
	                  break;
	                case TOK_GTE:
	                  result = first >= second;
	                  break;
	                case TOK_LT:
	                  result = first < second;
	                  break;
	                case TOK_LTE:
	                  result = first <= second;
	                  break;
	                default:
	                  throw new Error("Unknown comparator: " + node.name);
	              }
	              return result;
	            case TOK_FLATTEN:
	              var original = this.visit(node.children[0], value);
	              if (!isArray(original)) {
	                return null;
	              }
	              var merged = [];
	              for (i = 0; i < original.length; i++) {
	                current = original[i];
	                if (isArray(current)) {
	                  merged.push.apply(merged, current);
	                } else {
	                  merged.push(current);
	                }
	              }
	              return merged;
	            case "Identity":
	              return value;
	            case "MultiSelectList":
	              if (value === null) {
	                return null;
	              }
	              collected = [];
	              for (i = 0; i < node.children.length; i++) {
	                  collected.push(this.visit(node.children[i], value));
	              }
	              return collected;
	            case "MultiSelectHash":
	              if (value === null) {
	                return null;
	              }
	              collected = {};
	              var child;
	              for (i = 0; i < node.children.length; i++) {
	                child = node.children[i];
	                collected[child.name] = this.visit(child.value, value);
	              }
	              return collected;
	            case "OrExpression":
	              matched = this.visit(node.children[0], value);
	              if (isFalse(matched)) {
	                  matched = this.visit(node.children[1], value);
	              }
	              return matched;
	            case "AndExpression":
	              first = this.visit(node.children[0], value);

	              if (isFalse(first) === true) {
	                return first;
	              }
	              return this.visit(node.children[1], value);
	            case "NotExpression":
	              first = this.visit(node.children[0], value);
	              return isFalse(first);
	            case "Literal":
	              return node.value;
	            case TOK_PIPE:
	              left = this.visit(node.children[0], value);
	              return this.visit(node.children[1], left);
	            case TOK_CURRENT:
	              return value;
	            case "Function":
	              var resolvedArgs = [];
	              for (i = 0; i < node.children.length; i++) {
	                  resolvedArgs.push(this.visit(node.children[i], value));
	              }
	              return this.runtime.callFunction(node.name, resolvedArgs);
	            case "ExpressionReference":
	              var refNode = node.children[0];
	              // Tag the node with a specific attribute so the type
	              // checker verify the type.
	              refNode.jmespathType = TOK_EXPREF;
	              return refNode;
	            default:
	              throw new Error("Unknown node type: " + node.type);
	          }
	      },

	      computeSliceParams: function(arrayLength, sliceParams) {
	        var start = sliceParams[0];
	        var stop = sliceParams[1];
	        var step = sliceParams[2];
	        var computed = [null, null, null];
	        if (step === null) {
	          step = 1;
	        } else if (step === 0) {
	          var error = new Error("Invalid slice, step cannot be 0");
	          error.name = "RuntimeError";
	          throw error;
	        }
	        var stepValueNegative = step < 0 ? true : false;

	        if (start === null) {
	            start = stepValueNegative ? arrayLength - 1 : 0;
	        } else {
	            start = this.capSliceRange(arrayLength, start, step);
	        }

	        if (stop === null) {
	            stop = stepValueNegative ? -1 : arrayLength;
	        } else {
	            stop = this.capSliceRange(arrayLength, stop, step);
	        }
	        computed[0] = start;
	        computed[1] = stop;
	        computed[2] = step;
	        return computed;
	      },

	      capSliceRange: function(arrayLength, actualValue, step) {
	          if (actualValue < 0) {
	              actualValue += arrayLength;
	              if (actualValue < 0) {
	                  actualValue = step < 0 ? -1 : 0;
	              }
	          } else if (actualValue >= arrayLength) {
	              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
	          }
	          return actualValue;
	      }

	  };

	  function Runtime(interpreter) {
	    this._interpreter = interpreter;
	    this.functionTable = {
	        // name: [function, <signature>]
	        // The <signature> can be:
	        //
	        // {
	        //   args: [[type1, type2], [type1, type2]],
	        //   variadic: true|false
	        // }
	        //
	        // Each arg in the arg list is a list of valid types
	        // (if the function is overloaded and supports multiple
	        // types.  If the type is "any" then no type checking
	        // occurs on the argument.  Variadic is optional
	        // and if not provided is assumed to be false.
	        abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
	        avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
	        ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
	        contains: {
	            _func: this._functionContains,
	            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
	                        {types: [TYPE_ANY]}]},
	        "ends_with": {
	            _func: this._functionEndsWith,
	            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
	        floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
	        length: {
	            _func: this._functionLength,
	            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
	        map: {
	            _func: this._functionMap,
	            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
	        max: {
	            _func: this._functionMax,
	            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
	        "merge": {
	            _func: this._functionMerge,
	            _signature: [{types: [TYPE_OBJECT], variadic: true}]
	        },
	        "max_by": {
	          _func: this._functionMaxBy,
	          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
	        },
	        sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
	        "starts_with": {
	            _func: this._functionStartsWith,
	            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
	        min: {
	            _func: this._functionMin,
	            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
	        "min_by": {
	          _func: this._functionMinBy,
	          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
	        },
	        type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
	        keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
	        values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
	        sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
	        "sort_by": {
	          _func: this._functionSortBy,
	          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
	        },
	        join: {
	            _func: this._functionJoin,
	            _signature: [
	                {types: [TYPE_STRING]},
	                {types: [TYPE_ARRAY_STRING]}
	            ]
	        },
	        reverse: {
	            _func: this._functionReverse,
	            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
	        "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
	        "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
	        "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
	        "not_null": {
	            _func: this._functionNotNull,
	            _signature: [{types: [TYPE_ANY], variadic: true}]
	        }
	    };
	  }

	  Runtime.prototype = {
	    callFunction: function(name, resolvedArgs) {
	      var functionEntry = this.functionTable[name];
	      if (functionEntry === undefined) {
	          throw new Error("Unknown function: " + name + "()");
	      }
	      this._validateArgs(name, resolvedArgs, functionEntry._signature);
	      return functionEntry._func.call(this, resolvedArgs);
	    },

	    _validateArgs: function(name, args, signature) {
	        // Validating the args requires validating
	        // the correct arity and the correct type of each arg.
	        // If the last argument is declared as variadic, then we need
	        // a minimum number of args to be required.  Otherwise it has to
	        // be an exact amount.
	        var pluralized;
	        if (signature[signature.length - 1].variadic) {
	            if (args.length < signature.length) {
	                pluralized = signature.length === 1 ? " argument" : " arguments";
	                throw new Error("ArgumentError: " + name + "() " +
	                                "takes at least" + signature.length + pluralized +
	                                " but received " + args.length);
	            }
	        } else if (args.length !== signature.length) {
	            pluralized = signature.length === 1 ? " argument" : " arguments";
	            throw new Error("ArgumentError: " + name + "() " +
	                            "takes " + signature.length + pluralized +
	                            " but received " + args.length);
	        }
	        var currentSpec;
	        var actualType;
	        var typeMatched;
	        for (var i = 0; i < signature.length; i++) {
	            typeMatched = false;
	            currentSpec = signature[i].types;
	            actualType = this._getTypeName(args[i]);
	            for (var j = 0; j < currentSpec.length; j++) {
	                if (this._typeMatches(actualType, currentSpec[j], args[i])) {
	                    typeMatched = true;
	                    break;
	                }
	            }
	            if (!typeMatched) {
	                throw new Error("TypeError: " + name + "() " +
	                                "expected argument " + (i + 1) +
	                                " to be type " + currentSpec +
	                                " but received type " + actualType +
	                                " instead.");
	            }
	        }
	    },

	    _typeMatches: function(actual, expected, argValue) {
	        if (expected === TYPE_ANY) {
	            return true;
	        }
	        if (expected === TYPE_ARRAY_STRING ||
	            expected === TYPE_ARRAY_NUMBER ||
	            expected === TYPE_ARRAY) {
	            // The expected type can either just be array,
	            // or it can require a specific subtype (array of numbers).
	            //
	            // The simplest case is if "array" with no subtype is specified.
	            if (expected === TYPE_ARRAY) {
	                return actual === TYPE_ARRAY;
	            } else if (actual === TYPE_ARRAY) {
	                // Otherwise we need to check subtypes.
	                // I think this has potential to be improved.
	                var subtype;
	                if (expected === TYPE_ARRAY_NUMBER) {
	                  subtype = TYPE_NUMBER;
	                } else if (expected === TYPE_ARRAY_STRING) {
	                  subtype = TYPE_STRING;
	                }
	                for (var i = 0; i < argValue.length; i++) {
	                    if (!this._typeMatches(
	                            this._getTypeName(argValue[i]), subtype,
	                                             argValue[i])) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	        } else {
	            return actual === expected;
	        }
	    },
	    _getTypeName: function(obj) {
	        switch (Object.prototype.toString.call(obj)) {
	            case "[object String]":
	              return TYPE_STRING;
	            case "[object Number]":
	              return TYPE_NUMBER;
	            case "[object Array]":
	              return TYPE_ARRAY;
	            case "[object Boolean]":
	              return TYPE_BOOLEAN;
	            case "[object Null]":
	              return TYPE_NULL;
	            case "[object Object]":
	              // Check if it's an expref.  If it has, it's been
	              // tagged with a jmespathType attr of 'Expref';
	              if (obj.jmespathType === TOK_EXPREF) {
	                return TYPE_EXPREF;
	              } else {
	                return TYPE_OBJECT;
	              }
	        }
	    },

	    _functionStartsWith: function(resolvedArgs) {
	        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
	    },

	    _functionEndsWith: function(resolvedArgs) {
	        var searchStr = resolvedArgs[0];
	        var suffix = resolvedArgs[1];
	        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
	    },

	    _functionReverse: function(resolvedArgs) {
	        var typeName = this._getTypeName(resolvedArgs[0]);
	        if (typeName === TYPE_STRING) {
	          var originalStr = resolvedArgs[0];
	          var reversedStr = "";
	          for (var i = originalStr.length - 1; i >= 0; i--) {
	              reversedStr += originalStr[i];
	          }
	          return reversedStr;
	        } else {
	          var reversedArray = resolvedArgs[0].slice(0);
	          reversedArray.reverse();
	          return reversedArray;
	        }
	    },

	    _functionAbs: function(resolvedArgs) {
	      return Math.abs(resolvedArgs[0]);
	    },

	    _functionCeil: function(resolvedArgs) {
	        return Math.ceil(resolvedArgs[0]);
	    },

	    _functionAvg: function(resolvedArgs) {
	        var sum = 0;
	        var inputArray = resolvedArgs[0];
	        for (var i = 0; i < inputArray.length; i++) {
	            sum += inputArray[i];
	        }
	        return sum / inputArray.length;
	    },

	    _functionContains: function(resolvedArgs) {
	        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
	    },

	    _functionFloor: function(resolvedArgs) {
	        return Math.floor(resolvedArgs[0]);
	    },

	    _functionLength: function(resolvedArgs) {
	       if (!isObject(resolvedArgs[0])) {
	         return resolvedArgs[0].length;
	       } else {
	         // As far as I can tell, there's no way to get the length
	         // of an object without O(n) iteration through the object.
	         return Object.keys(resolvedArgs[0]).length;
	       }
	    },

	    _functionMap: function(resolvedArgs) {
	      var mapped = [];
	      var interpreter = this._interpreter;
	      var exprefNode = resolvedArgs[0];
	      var elements = resolvedArgs[1];
	      for (var i = 0; i < elements.length; i++) {
	          mapped.push(interpreter.visit(exprefNode, elements[i]));
	      }
	      return mapped;
	    },

	    _functionMerge: function(resolvedArgs) {
	      var merged = {};
	      for (var i = 0; i < resolvedArgs.length; i++) {
	        var current = resolvedArgs[i];
	        for (var key in current) {
	          merged[key] = current[key];
	        }
	      }
	      return merged;
	    },

	    _functionMax: function(resolvedArgs) {
	      if (resolvedArgs[0].length > 0) {
	        var typeName = this._getTypeName(resolvedArgs[0][0]);
	        if (typeName === TYPE_NUMBER) {
	          return Math.max.apply(Math, resolvedArgs[0]);
	        } else {
	          var elements = resolvedArgs[0];
	          var maxElement = elements[0];
	          for (var i = 1; i < elements.length; i++) {
	              if (maxElement.localeCompare(elements[i]) < 0) {
	                  maxElement = elements[i];
	              }
	          }
	          return maxElement;
	        }
	      } else {
	          return null;
	      }
	    },

	    _functionMin: function(resolvedArgs) {
	      if (resolvedArgs[0].length > 0) {
	        var typeName = this._getTypeName(resolvedArgs[0][0]);
	        if (typeName === TYPE_NUMBER) {
	          return Math.min.apply(Math, resolvedArgs[0]);
	        } else {
	          var elements = resolvedArgs[0];
	          var minElement = elements[0];
	          for (var i = 1; i < elements.length; i++) {
	              if (elements[i].localeCompare(minElement) < 0) {
	                  minElement = elements[i];
	              }
	          }
	          return minElement;
	        }
	      } else {
	        return null;
	      }
	    },

	    _functionSum: function(resolvedArgs) {
	      var sum = 0;
	      var listToSum = resolvedArgs[0];
	      for (var i = 0; i < listToSum.length; i++) {
	        sum += listToSum[i];
	      }
	      return sum;
	    },

	    _functionType: function(resolvedArgs) {
	        switch (this._getTypeName(resolvedArgs[0])) {
	          case TYPE_NUMBER:
	            return "number";
	          case TYPE_STRING:
	            return "string";
	          case TYPE_ARRAY:
	            return "array";
	          case TYPE_OBJECT:
	            return "object";
	          case TYPE_BOOLEAN:
	            return "boolean";
	          case TYPE_EXPREF:
	            return "expref";
	          case TYPE_NULL:
	            return "null";
	        }
	    },

	    _functionKeys: function(resolvedArgs) {
	        return Object.keys(resolvedArgs[0]);
	    },

	    _functionValues: function(resolvedArgs) {
	        var obj = resolvedArgs[0];
	        var keys = Object.keys(obj);
	        var values = [];
	        for (var i = 0; i < keys.length; i++) {
	            values.push(obj[keys[i]]);
	        }
	        return values;
	    },

	    _functionJoin: function(resolvedArgs) {
	        var joinChar = resolvedArgs[0];
	        var listJoin = resolvedArgs[1];
	        return listJoin.join(joinChar);
	    },

	    _functionToArray: function(resolvedArgs) {
	        if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
	            return resolvedArgs[0];
	        } else {
	            return [resolvedArgs[0]];
	        }
	    },

	    _functionToString: function(resolvedArgs) {
	        if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
	            return resolvedArgs[0];
	        } else {
	            return JSON.stringify(resolvedArgs[0]);
	        }
	    },

	    _functionToNumber: function(resolvedArgs) {
	        var typeName = this._getTypeName(resolvedArgs[0]);
	        var convertedValue;
	        if (typeName === TYPE_NUMBER) {
	            return resolvedArgs[0];
	        } else if (typeName === TYPE_STRING) {
	            convertedValue = +resolvedArgs[0];
	            if (!isNaN(convertedValue)) {
	                return convertedValue;
	            }
	        }
	        return null;
	    },

	    _functionNotNull: function(resolvedArgs) {
	        for (var i = 0; i < resolvedArgs.length; i++) {
	            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
	                return resolvedArgs[i];
	            }
	        }
	        return null;
	    },

	    _functionSort: function(resolvedArgs) {
	        var sortedArray = resolvedArgs[0].slice(0);
	        sortedArray.sort();
	        return sortedArray;
	    },

	    _functionSortBy: function(resolvedArgs) {
	        var sortedArray = resolvedArgs[0].slice(0);
	        if (sortedArray.length === 0) {
	            return sortedArray;
	        }
	        var interpreter = this._interpreter;
	        var exprefNode = resolvedArgs[1];
	        var requiredType = this._getTypeName(
	            interpreter.visit(exprefNode, sortedArray[0]));
	        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
	            throw new Error("TypeError");
	        }
	        var that = this;
	        // In order to get a stable sort out of an unstable
	        // sort algorithm, we decorate/sort/undecorate (DSU)
	        // by creating a new list of [index, element] pairs.
	        // In the cmp function, if the evaluated elements are
	        // equal, then the index will be used as the tiebreaker.
	        // After the decorated list has been sorted, it will be
	        // undecorated to extract the original elements.
	        var decorated = [];
	        for (var i = 0; i < sortedArray.length; i++) {
	          decorated.push([i, sortedArray[i]]);
	        }
	        decorated.sort(function(a, b) {
	          var exprA = interpreter.visit(exprefNode, a[1]);
	          var exprB = interpreter.visit(exprefNode, b[1]);
	          if (that._getTypeName(exprA) !== requiredType) {
	              throw new Error(
	                  "TypeError: expected " + requiredType + ", received " +
	                  that._getTypeName(exprA));
	          } else if (that._getTypeName(exprB) !== requiredType) {
	              throw new Error(
	                  "TypeError: expected " + requiredType + ", received " +
	                  that._getTypeName(exprB));
	          }
	          if (exprA > exprB) {
	            return 1;
	          } else if (exprA < exprB) {
	            return -1;
	          } else {
	            // If they're equal compare the items by their
	            // order to maintain relative order of equal keys
	            // (i.e. to get a stable sort).
	            return a[0] - b[0];
	          }
	        });
	        // Undecorate: extract out the original list elements.
	        for (var j = 0; j < decorated.length; j++) {
	          sortedArray[j] = decorated[j][1];
	        }
	        return sortedArray;
	    },

	    _functionMaxBy: function(resolvedArgs) {
	      var exprefNode = resolvedArgs[1];
	      var resolvedArray = resolvedArgs[0];
	      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
	      var maxNumber = -Infinity;
	      var maxRecord;
	      var current;
	      for (var i = 0; i < resolvedArray.length; i++) {
	        current = keyFunction(resolvedArray[i]);
	        if (current > maxNumber) {
	          maxNumber = current;
	          maxRecord = resolvedArray[i];
	        }
	      }
	      return maxRecord;
	    },

	    _functionMinBy: function(resolvedArgs) {
	      var exprefNode = resolvedArgs[1];
	      var resolvedArray = resolvedArgs[0];
	      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
	      var minNumber = Infinity;
	      var minRecord;
	      var current;
	      for (var i = 0; i < resolvedArray.length; i++) {
	        current = keyFunction(resolvedArray[i]);
	        if (current < minNumber) {
	          minNumber = current;
	          minRecord = resolvedArray[i];
	        }
	      }
	      return minRecord;
	    },

	    createKeyFunction: function(exprefNode, allowedTypes) {
	      var that = this;
	      var interpreter = this._interpreter;
	      var keyFunc = function(x) {
	        var current = interpreter.visit(exprefNode, x);
	        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
	          var msg = "TypeError: expected one of " + allowedTypes +
	                    ", received " + that._getTypeName(current);
	          throw new Error(msg);
	        }
	        return current;
	      };
	      return keyFunc;
	    }

	  };

	  function compile(stream) {
	    var parser = new Parser();
	    var ast = parser.parse(stream);
	    return ast;
	  }

	  function tokenize(stream) {
	      var lexer = new Lexer();
	      return lexer.tokenize(stream);
	  }

	  function search(data, expression) {
	      var parser = new Parser();
	      // This needs to be improved.  Both the interpreter and runtime depend on
	      // each other.  The runtime needs the interpreter to support exprefs.
	      // There's likely a clean way to avoid the cyclic dependency.
	      var runtime = new Runtime();
	      var interpreter = new TreeInterpreter(runtime);
	      runtime._interpreter = interpreter;
	      var node = parser.parse(expression);
	      return interpreter.search(node, data);
	  }

	  exports.tokenize = tokenize;
	  exports.compile = compile;
	  exports.search = search;
	  exports.strictDeepEqual = strictDeepEqual;
	})( false ? this.jmespath = {} : exports);


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;
	var jmespath = __webpack_require__(201);

	/**
	 * This class encapsulates the response information
	 * from a service request operation sent through {AWS.Request}.
	 * The response object has two main properties for getting information
	 * back from a request:
	 *
	 * ## The `data` property
	 *
	 * The `response.data` property contains the serialized object data
	 * retrieved from the service request. For instance, for an
	 * Amazon DynamoDB `listTables` method call, the response data might
	 * look like:
	 *
	 * ```
	 * > resp.data
	 * { TableNames:
	 *    [ 'table1', 'table2', ... ] }
	 * ```
	 *
	 * The `data` property can be null if an error occurs (see below).
	 *
	 * ## The `error` property
	 *
	 * In the event of a service error (or transfer error), the
	 * `response.error` property will be filled with the given
	 * error data in the form:
	 *
	 * ```
	 * { code: 'SHORT_UNIQUE_ERROR_CODE',
	 *   message: 'Some human readable error message' }
	 * ```
	 *
	 * In the case of an error, the `data` property will be `null`.
	 * Note that if you handle events that can be in a failure state,
	 * you should always check whether `response.error` is set
	 * before attempting to access the `response.data` property.
	 *
	 * @!attribute data
	 *   @readonly
	 *   @!group Data Properties
	 *   @note Inside of a {AWS.Request~httpData} event, this
	 *     property contains a single raw packet instead of the
	 *     full de-serialized service response.
	 *   @return [Object] the de-serialized response data
	 *     from the service.
	 *
	 * @!attribute error
	 *   An structure containing information about a service
	 *   or networking error.
	 *   @readonly
	 *   @!group Data Properties
	 *   @note This attribute is only filled if a service or
	 *     networking error occurs.
	 *   @return [Error]
	 *     * code [String] a unique short code representing the
	 *       error that was emitted.
	 *     * message [String] a longer human readable error message
	 *     * retryable [Boolean] whether the error message is
	 *       retryable.
	 *     * statusCode [Numeric] in the case of a request that reached the service,
	 *       this value contains the response status code.
	 *     * time [Date] the date time object when the error occurred.
	 *     * hostname [String] set when a networking error occurs to easily
	 *       identify the endpoint of the request.
	 *     * region [String] set when a networking error occurs to easily
	 *       identify the region of the request.
	 *
	 * @!attribute requestId
	 *   @readonly
	 *   @!group Data Properties
	 *   @return [String] the unique request ID associated with the response.
	 *     Log this value when debugging requests for AWS support.
	 *
	 * @!attribute retryCount
	 *   @readonly
	 *   @!group Operation Properties
	 *   @return [Integer] the number of retries that were
	 *     attempted before the request was completed.
	 *
	 * @!attribute redirectCount
	 *   @readonly
	 *   @!group Operation Properties
	 *   @return [Integer] the number of redirects that were
	 *     followed before the request was completed.
	 *
	 * @!attribute httpResponse
	 *   @readonly
	 *   @!group HTTP Properties
	 *   @return [AWS.HttpResponse] the raw HTTP response object
	 *     containing the response headers and body information
	 *     from the server.
	 *
	 * @see AWS.Request
	 */
	AWS.Response = inherit({

	  /**
	   * @api private
	   */
	  constructor: function Response(request) {
	    this.request = request;
	    this.data = null;
	    this.error = null;
	    this.retryCount = 0;
	    this.redirectCount = 0;
	    this.httpResponse = new AWS.HttpResponse();
	    if (request) {
	      this.maxRetries = request.service.numRetries();
	      this.maxRedirects = request.service.config.maxRedirects;
	    }
	  },

	  /**
	   * Creates a new request for the next page of response data, calling the
	   * callback with the page data if a callback is provided.
	   *
	   * @callback callback function(err, data)
	   *   Called when a page of data is returned from the next request.
	   *
	   *   @param err [Error] an error object, if an error occurred in the request
	   *   @param data [Object] the next page of data, or null, if there are no
	   *     more pages left.
	   * @return [AWS.Request] the request object for the next page of data
	   * @return [null] if no callback is provided and there are no pages left
	   *   to retrieve.
	   * @since v1.4.0
	   */
	  nextPage: function nextPage(callback) {
	    var config;
	    var service = this.request.service;
	    var operation = this.request.operation;
	    try {
	      config = service.paginationConfig(operation, true);
	    } catch (e) { this.error = e; }

	    if (!this.hasNextPage()) {
	      if (callback) callback(this.error, null);
	      else if (this.error) throw this.error;
	      return null;
	    }

	    var params = AWS.util.copy(this.request.params);
	    if (!this.nextPageTokens) {
	      return callback ? callback(null, null) : null;
	    } else {
	      var inputTokens = config.inputToken;
	      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
	      for (var i = 0; i < inputTokens.length; i++) {
	        params[inputTokens[i]] = this.nextPageTokens[i];
	      }
	      return service.makeRequest(this.request.operation, params, callback);
	    }
	  },

	  /**
	   * @return [Boolean] whether more pages of data can be returned by further
	   *   requests
	   * @since v1.4.0
	   */
	  hasNextPage: function hasNextPage() {
	    this.cacheNextPageTokens();
	    if (this.nextPageTokens) return true;
	    if (this.nextPageTokens === undefined) return undefined;
	    else return false;
	  },

	  /**
	   * @api private
	   */
	  cacheNextPageTokens: function cacheNextPageTokens() {
	    if (Object.prototype.hasOwnProperty.call(this, 'nextPageTokens')) return this.nextPageTokens;
	    this.nextPageTokens = undefined;

	    var config = this.request.service.paginationConfig(this.request.operation);
	    if (!config) return this.nextPageTokens;

	    this.nextPageTokens = null;
	    if (config.moreResults) {
	      if (!jmespath.search(this.data, config.moreResults)) {
	        return this.nextPageTokens;
	      }
	    }

	    var exprs = config.outputToken;
	    if (typeof exprs === 'string') exprs = [exprs];
	    AWS.util.arrayEach.call(this, exprs, function (expr) {
	      var output = jmespath.search(this.data, expr);
	      if (output) {
	        this.nextPageTokens = this.nextPageTokens || [];
	        this.nextPageTokens.push(output);
	      }
	    });

	    return this.nextPageTokens;
	  }

	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License"). You
	 * may not use this file except in compliance with the License. A copy of
	 * the License is located at
	 *
	 *     http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file. This file is
	 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
	 * ANY KIND, either express or implied. See the License for the specific
	 * language governing permissions and limitations under the License.
	 */

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;
	var jmespath = __webpack_require__(201);

	/**
	 * @api private
	 */
	function CHECK_ACCEPTORS(resp) {
	  var waiter = resp.request._waiter;
	  var acceptors = waiter.config.acceptors;
	  var acceptorMatched = false;
	  var state = 'retry';

	  acceptors.forEach(function(acceptor) {
	    if (!acceptorMatched) {
	      var matcher = waiter.matchers[acceptor.matcher];
	      if (matcher && matcher(resp, acceptor.expected, acceptor.argument)) {
	        acceptorMatched = true;
	        state = acceptor.state;
	      }
	    }
	  });

	  if (!acceptorMatched && resp.error) state = 'failure';

	  if (state === 'success') {
	    waiter.setSuccess(resp);
	  } else {
	    waiter.setError(resp, state === 'retry');
	  }
	}

	/**
	 * @api private
	 */
	AWS.ResourceWaiter = inherit({
	  /**
	   * Waits for a given state on a service object
	   * @param service [Service] the service object to wait on
	   * @param state [String] the state (defined in waiter configuration) to wait
	   *   for.
	   * @example Create a waiter for running EC2 instances
	   *   var ec2 = new AWS.EC2;
	   *   var waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning');
	   */
	  constructor: function constructor(service, state) {
	    this.service = service;
	    this.state = state;
	    this.loadWaiterConfig(this.state);
	  },

	  service: null,

	  state: null,

	  config: null,

	  matchers: {
	    path: function(resp, expected, argument) {
	      try {
	        var result = jmespath.search(resp.data, argument);
	      } catch (err) {
	        return false;
	      }

	      return jmespath.strictDeepEqual(result,expected);
	    },

	    pathAll: function(resp, expected, argument) {
	      try {
	        var results = jmespath.search(resp.data, argument);
	      } catch (err) {
	        return false;
	      }

	      if (!Array.isArray(results)) results = [results];
	      var numResults = results.length;
	      if (!numResults) return false;
	      for (var ind = 0 ; ind < numResults; ind++) {
	        if (!jmespath.strictDeepEqual(results[ind], expected)) {
	          return false;
	        }
	      }
	      return true;
	    },

	    pathAny: function(resp, expected, argument) {
	      try {
	        var results = jmespath.search(resp.data, argument);
	      } catch (err) {
	        return false;
	      }

	      if (!Array.isArray(results)) results = [results];
	      var numResults = results.length;
	      for (var ind = 0 ; ind < numResults; ind++) {
	        if (jmespath.strictDeepEqual(results[ind], expected)) {
	          return true;
	        }
	      }
	      return false;
	    },

	    status: function(resp, expected) {
	      var statusCode = resp.httpResponse.statusCode;
	      return (typeof statusCode === 'number') && (statusCode === expected);
	    },

	    error: function(resp, expected) {
	      if (typeof expected === 'string' && resp.error) {
	        return expected === resp.error.code;
	      }
	      // if expected is not string, can be boolean indicating presence of error
	      return expected === !!resp.error;
	    }
	  },

	  listeners: new AWS.SequentialExecutor().addNamedListeners(function(add) {
	    add('RETRY_CHECK', 'retry', function(resp) {
	      var waiter = resp.request._waiter;
	      if (resp.error && resp.error.code === 'ResourceNotReady') {
	        resp.error.retryDelay = (waiter.config.delay || 0) * 1000;
	      }
	    });

	    add('CHECK_OUTPUT', 'extractData', CHECK_ACCEPTORS);

	    add('CHECK_ERROR', 'extractError', CHECK_ACCEPTORS);
	  }),

	  /**
	   * @return [AWS.Request]
	   */
	  wait: function wait(params, callback) {
	    if (typeof params === 'function') {
	      callback = params; params = undefined;
	    }

	    if (params && params.$waiter) {
	      params = AWS.util.copy(params);
	      if (typeof params.$waiter.delay === 'number') {
	        this.config.delay = params.$waiter.delay;
	      }
	      if (typeof params.$waiter.maxAttempts === 'number') {
	        this.config.maxAttempts = params.$waiter.maxAttempts;
	      }
	      delete params.$waiter;
	    }

	    var request = this.service.makeRequest(this.config.operation, params);
	    request._waiter = this;
	    request.response.maxRetries = this.config.maxAttempts;
	    request.addListeners(this.listeners);

	    if (callback) request.send(callback);
	    return request;
	  },

	  setSuccess: function setSuccess(resp) {
	    resp.error = null;
	    resp.data = resp.data || {};
	    resp.request.removeAllListeners('extractData');
	  },

	  setError: function setError(resp, retryable) {
	    resp.data = null;
	    resp.error = AWS.util.error(resp.error || new Error(), {
	      code: 'ResourceNotReady',
	      message: 'Resource is not in the state ' + this.state,
	      retryable: retryable
	    });
	  },

	  /**
	   * Loads waiter configuration from API configuration
	   *
	   * @api private
	   */
	  loadWaiterConfig: function loadWaiterConfig(state) {
	    if (!this.service.api.waiters[state]) {
	      throw new AWS.util.error(new Error(), {
	        code: 'StateNotFoundError',
	        message: 'State ' + state + ' not found.'
	      });
	    }

	    this.config = AWS.util.copy(this.service.api.waiters[state]);
	  }
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);

	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.RequestSigner = inherit({
	  constructor: function RequestSigner(request) {
	    this.request = request;
	  },

	  setServiceClientId: function setServiceClientId(id) {
	    this.serviceClientId = id;
	  },

	  getServiceClientId: function getServiceClientId() {
	    return this.serviceClientId;
	  }
	});

	AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
	  switch (version) {
	    case 'v2': return AWS.Signers.V2;
	    case 'v3': return AWS.Signers.V3;
	    case 'v4': return AWS.Signers.V4;
	    case 's3': return AWS.Signers.S3;
	    case 'v3https': return AWS.Signers.V3Https;
	  }
	  throw new Error('Unknown signing version ' + version);
	};

	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(210);
	__webpack_require__(211);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
	  addAuthorization: function addAuthorization(credentials, date) {

	    if (!date) date = AWS.util.date.getDate();

	    var r = this.request;

	    r.params.Timestamp = AWS.util.date.iso8601(date);
	    r.params.SignatureVersion = '2';
	    r.params.SignatureMethod = 'HmacSHA256';
	    r.params.AWSAccessKeyId = credentials.accessKeyId;

	    if (credentials.sessionToken) {
	      r.params.SecurityToken = credentials.sessionToken;
	    }

	    delete r.params.Signature; // delete old Signature for re-signing
	    r.params.Signature = this.signature(credentials);

	    r.body = AWS.util.queryParamsToString(r.params);
	    r.headers['Content-Length'] = r.body.length;
	  },

	  signature: function signature(credentials) {
	    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
	  },

	  stringToSign: function stringToSign() {
	    var parts = [];
	    parts.push(this.request.method);
	    parts.push(this.request.endpoint.host.toLowerCase());
	    parts.push(this.request.pathname());
	    parts.push(AWS.util.queryParamsToString(this.request.params));
	    return parts.join('\n');
	  }

	});

	module.exports = AWS.Signers.V2;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
	  addAuthorization: function addAuthorization(credentials, date) {

	    var datetime = AWS.util.date.rfc822(date);

	    this.request.headers['X-Amz-Date'] = datetime;

	    if (credentials.sessionToken) {
	      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
	    }

	    this.request.headers['X-Amzn-Authorization'] =
	      this.authorization(credentials, datetime);

	  },

	  authorization: function authorization(credentials) {
	    return 'AWS3 ' +
	      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
	      'Algorithm=HmacSHA256,' +
	      'SignedHeaders=' + this.signedHeaders() + ',' +
	      'Signature=' + this.signature(credentials);
	  },

	  signedHeaders: function signedHeaders() {
	    var headers = [];
	    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
	      headers.push(h.toLowerCase());
	    });
	    return headers.sort().join(';');
	  },

	  canonicalHeaders: function canonicalHeaders() {
	    var headers = this.request.headers;
	    var parts = [];
	    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
	      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
	    });
	    return parts.sort().join('\n') + '\n';
	  },

	  headersToSign: function headersToSign() {
	    var headers = [];
	    AWS.util.each(this.request.headers, function iterator(k) {
	      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
	        headers.push(k);
	      }
	    });
	    return headers;
	  },

	  signature: function signature(credentials) {
	    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
	  },

	  stringToSign: function stringToSign() {
	    var parts = [];
	    parts.push(this.request.method);
	    parts.push('/');
	    parts.push('');
	    parts.push(this.canonicalHeaders());
	    parts.push(this.request.body);
	    return AWS.util.crypto.sha256(parts.join('\n'));
	  }

	});

	module.exports = AWS.Signers.V3;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;

	__webpack_require__(206);

	/**
	 * @api private
	 */
	AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
	  authorization: function authorization(credentials) {
	    return 'AWS3-HTTPS ' +
	      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
	      'Algorithm=HmacSHA256,' +
	      'Signature=' + this.signature(credentials);
	  },

	  stringToSign: function stringToSign() {
	    return this.request.headers['X-Amz-Date'];
	  }
	});

	module.exports = AWS.Signers.V3Https;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var v4Credentials = __webpack_require__(209);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	var expiresHeader = 'presigned-expires';

	/**
	 * @api private
	 */
	AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
	  constructor: function V4(request, serviceName, options) {
	    AWS.Signers.RequestSigner.call(this, request);
	    this.serviceName = serviceName;
	    options = options || {};
	    this.signatureCache = typeof options.signatureCache === 'boolean' ? options.signatureCache : true;
	    this.operation = options.operation;
	  },

	  algorithm: 'AWS4-HMAC-SHA256',

	  addAuthorization: function addAuthorization(credentials, date) {
	    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');

	    if (this.isPresigned()) {
	      this.updateForPresigned(credentials, datetime);
	    } else {
	      this.addHeaders(credentials, datetime);
	    }

	    this.request.headers['Authorization'] =
	      this.authorization(credentials, datetime);
	  },

	  addHeaders: function addHeaders(credentials, datetime) {
	    this.request.headers['X-Amz-Date'] = datetime;
	    if (credentials.sessionToken) {
	      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
	    }
	  },

	  updateForPresigned: function updateForPresigned(credentials, datetime) {
	    var credString = this.credentialString(datetime);
	    var qs = {
	      'X-Amz-Date': datetime,
	      'X-Amz-Algorithm': this.algorithm,
	      'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
	      'X-Amz-Expires': this.request.headers[expiresHeader],
	      'X-Amz-SignedHeaders': this.signedHeaders()
	    };

	    if (credentials.sessionToken) {
	      qs['X-Amz-Security-Token'] = credentials.sessionToken;
	    }

	    if (this.request.headers['Content-Type']) {
	      qs['Content-Type'] = this.request.headers['Content-Type'];
	    }
	    if (this.request.headers['Content-MD5']) {
	      qs['Content-MD5'] = this.request.headers['Content-MD5'];
	    }
	    if (this.request.headers['Cache-Control']) {
	      qs['Cache-Control'] = this.request.headers['Cache-Control'];
	    }

	    // need to pull in any other X-Amz-* headers
	    AWS.util.each.call(this, this.request.headers, function(key, value) {
	      if (key === expiresHeader) return;
	      if (this.isSignableHeader(key)) {
	        var lowerKey = key.toLowerCase();
	        // Metadata should be normalized
	        if (lowerKey.indexOf('x-amz-meta-') === 0) {
	          qs[lowerKey] = value;
	        } else if (lowerKey.indexOf('x-amz-') === 0) {
	          qs[key] = value;
	        }
	      }
	    });

	    var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
	    this.request.path += sep + AWS.util.queryParamsToString(qs);
	  },

	  authorization: function authorization(credentials, datetime) {
	    var parts = [];
	    var credString = this.credentialString(datetime);
	    parts.push(this.algorithm + ' Credential=' +
	      credentials.accessKeyId + '/' + credString);
	    parts.push('SignedHeaders=' + this.signedHeaders());
	    parts.push('Signature=' + this.signature(credentials, datetime));
	    return parts.join(', ');
	  },

	  signature: function signature(credentials, datetime) {
	    var signingKey = v4Credentials.getSigningKey(
	      credentials,
	      datetime.substr(0, 8),
	      this.request.region,
	      this.serviceName,
	      this.signatureCache
	    );
	    return AWS.util.crypto.hmac(signingKey, this.stringToSign(datetime), 'hex');
	  },

	  stringToSign: function stringToSign(datetime) {
	    var parts = [];
	    parts.push('AWS4-HMAC-SHA256');
	    parts.push(datetime);
	    parts.push(this.credentialString(datetime));
	    parts.push(this.hexEncodedHash(this.canonicalString()));
	    return parts.join('\n');
	  },

	  canonicalString: function canonicalString() {
	    var parts = [], pathname = this.request.pathname();
	    if (this.serviceName !== 's3') pathname = AWS.util.uriEscapePath(pathname);

	    parts.push(this.request.method);
	    parts.push(pathname);
	    parts.push(this.request.search());
	    parts.push(this.canonicalHeaders() + '\n');
	    parts.push(this.signedHeaders());
	    parts.push(this.hexEncodedBodyHash());
	    return parts.join('\n');
	  },

	  canonicalHeaders: function canonicalHeaders() {
	    var headers = [];
	    AWS.util.each.call(this, this.request.headers, function (key, item) {
	      headers.push([key, item]);
	    });
	    headers.sort(function (a, b) {
	      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
	    });
	    var parts = [];
	    AWS.util.arrayEach.call(this, headers, function (item) {
	      var key = item[0].toLowerCase();
	      if (this.isSignableHeader(key)) {
	        var value = item[1];
	        if (typeof value === 'undefined' || value === null || typeof value.toString !== 'function') {
	          throw AWS.util.error(new Error('Header ' + key + ' contains invalid value'), {
	            code: 'InvalidHeader'
	          });
	        }
	        parts.push(key + ':' +
	          this.canonicalHeaderValues(value.toString()));
	      }
	    });
	    return parts.join('\n');
	  },

	  canonicalHeaderValues: function canonicalHeaderValues(values) {
	    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
	  },

	  signedHeaders: function signedHeaders() {
	    var keys = [];
	    AWS.util.each.call(this, this.request.headers, function (key) {
	      key = key.toLowerCase();
	      if (this.isSignableHeader(key)) keys.push(key);
	    });
	    return keys.sort().join(';');
	  },

	  credentialString: function credentialString(datetime) {
	    return v4Credentials.createScope(
	      datetime.substr(0, 8),
	      this.request.region,
	      this.serviceName
	    );
	  },

	  hexEncodedHash: function hash(string) {
	    return AWS.util.crypto.sha256(string, 'hex');
	  },

	  hexEncodedBodyHash: function hexEncodedBodyHash() {
	    var request = this.request;
	    if (this.isPresigned() && this.serviceName === 's3' && !request.body) {
	      return 'UNSIGNED-PAYLOAD';
	    } else if (request.headers['X-Amz-Content-Sha256']) {
	      return request.headers['X-Amz-Content-Sha256'];
	    } else {
	      return this.hexEncodedHash(this.request.body || '');
	    }
	  },

	  unsignableHeaders: [
	    'authorization',
	    'content-type',
	    'content-length',
	    'user-agent',
	    expiresHeader,
	    'expect',
	    'x-amzn-trace-id'
	  ],

	  isSignableHeader: function isSignableHeader(key) {
	    if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
	    return this.unsignableHeaders.indexOf(key) < 0;
	  },

	  isPresigned: function isPresigned() {
	    return this.request.headers[expiresHeader] ? true : false;
	  }

	});

	module.exports = AWS.Signers.V4;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);

	/**
	 * @api private
	 */
	var cachedSecret = {};

	/**
	 * @api private
	 */
	var cacheQueue = [];

	/**
	 * @api private
	 */
	var maxCacheEntries = 50;

	/**
	 * @api private
	 */
	var v4Identifier = 'aws4_request';

	module.exports = {
	  /**
	   * @api private
	   *
	   * @param date [String]
	   * @param region [String]
	   * @param serviceName [String]
	   * @return [String]
	   */
	  createScope: function createScope(date, region, serviceName) {
	    return [
	      date.substr(0, 8),
	      region,
	      serviceName,
	      v4Identifier
	    ].join('/');
	  },

	  /**
	   * @api private
	   *
	   * @param credentials [Credentials]
	   * @param date [String]
	   * @param region [String]
	   * @param service [String]
	   * @param shouldCache [Boolean]
	   * @return [String]
	   */
	  getSigningKey: function getSigningKey(
	    credentials,
	    date,
	    region,
	    service,
	    shouldCache
	  ) {
	    var credsIdentifier = AWS.util.crypto
	      .hmac(credentials.secretAccessKey, credentials.accessKeyId, 'base64');
	    var cacheKey = [credsIdentifier, date, region, service].join('_');
	    shouldCache = shouldCache !== false;
	    if (shouldCache && (cacheKey in cachedSecret)) {
	      return cachedSecret[cacheKey];
	    }

	    var kDate = AWS.util.crypto.hmac(
	      'AWS4' + credentials.secretAccessKey,
	      date,
	      'buffer'
	    );
	    var kRegion = AWS.util.crypto.hmac(kDate, region, 'buffer');
	    var kService = AWS.util.crypto.hmac(kRegion, service, 'buffer');

	    var signingKey = AWS.util.crypto.hmac(kService, v4Identifier, 'buffer');
	    if (shouldCache) {
	      cachedSecret[cacheKey] = signingKey;
	      cacheQueue.push(cacheKey);
	      if (cacheQueue.length > maxCacheEntries) {
	        // remove the oldest entry (not the least recently used)
	        delete cachedSecret[cacheQueue.shift()];
	      }
	    }

	    return signingKey;
	  },

	  /**
	   * @api private
	   *
	   * Empties the derived signing key cache. Made available for testing purposes
	   * only.
	   */
	  emptyCache: function emptyCache() {
	    cachedSecret = {};
	    cacheQueue = [];
	  }
	};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {
	  /**
	   * When building the stringToSign, these sub resource params should be
	   * part of the canonical resource string with their NON-decoded values
	   */
	  subResources: {
	    'acl': 1,
	    'accelerate': 1,
	    'analytics': 1,
	    'cors': 1,
	    'lifecycle': 1,
	    'delete': 1,
	    'inventory': 1,
	    'location': 1,
	    'logging': 1,
	    'metrics': 1,
	    'notification': 1,
	    'partNumber': 1,
	    'policy': 1,
	    'requestPayment': 1,
	    'replication': 1,
	    'restore': 1,
	    'tagging': 1,
	    'torrent': 1,
	    'uploadId': 1,
	    'uploads': 1,
	    'versionId': 1,
	    'versioning': 1,
	    'versions': 1,
	    'website': 1
	  },

	  // when building the stringToSign, these querystring params should be
	  // part of the canonical resource string with their NON-encoded values
	  responseHeaders: {
	    'response-content-type': 1,
	    'response-content-language': 1,
	    'response-expires': 1,
	    'response-cache-control': 1,
	    'response-content-disposition': 1,
	    'response-content-encoding': 1
	  },

	  addAuthorization: function addAuthorization(credentials, date) {
	    if (!this.request.headers['presigned-expires']) {
	      this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
	    }

	    if (credentials.sessionToken) {
	      // presigned URLs require this header to be lowercased
	      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
	    }

	    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
	    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

	    this.request.headers['Authorization'] = auth;
	  },

	  stringToSign: function stringToSign() {
	    var r = this.request;

	    var parts = [];
	    parts.push(r.method);
	    parts.push(r.headers['Content-MD5'] || '');
	    parts.push(r.headers['Content-Type'] || '');

	    // This is the "Date" header, but we use X-Amz-Date.
	    // The S3 signing mechanism requires us to pass an empty
	    // string for this Date header regardless.
	    parts.push(r.headers['presigned-expires'] || '');

	    var headers = this.canonicalizedAmzHeaders();
	    if (headers) parts.push(headers);
	    parts.push(this.canonicalizedResource());

	    return parts.join('\n');

	  },

	  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

	    var amzHeaders = [];

	    AWS.util.each(this.request.headers, function (name) {
	      if (name.match(/^x-amz-/i))
	        amzHeaders.push(name);
	    });

	    amzHeaders.sort(function (a, b) {
	      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
	    });

	    var parts = [];
	    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
	      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
	    });

	    return parts.join('\n');

	  },

	  canonicalizedResource: function canonicalizedResource() {

	    var r = this.request;

	    var parts = r.path.split('?');
	    var path = parts[0];
	    var querystring = parts[1];

	    var resource = '';

	    if (r.virtualHostedBucket)
	      resource += '/' + r.virtualHostedBucket;

	    resource += path;

	    if (querystring) {

	      // collect a list of sub resources and query params that need to be signed
	      var resources = [];

	      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
	        var name = param.split('=')[0];
	        var value = param.split('=')[1];
	        if (this.subResources[name] || this.responseHeaders[name]) {
	          var subresource = { name: name };
	          if (value !== undefined) {
	            if (this.subResources[name]) {
	              subresource.value = value;
	            } else {
	              subresource.value = decodeURIComponent(value);
	            }
	          }
	          resources.push(subresource);
	        }
	      });

	      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

	      if (resources.length) {

	        querystring = [];
	        AWS.util.arrayEach(resources, function (res) {
	          if (res.value === undefined) {
	            querystring.push(res.name);
	          } else {
	            querystring.push(res.name + '=' + res.value);
	          }
	        });

	        resource += '?' + querystring.join('&');
	      }

	    }

	    return resource;

	  },

	  sign: function sign(secret, string) {
	    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
	  }
	});

	module.exports = AWS.Signers.S3;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);
	var inherit = AWS.util.inherit;

	/**
	 * @api private
	 */
	var expiresHeader = 'presigned-expires';

	/**
	 * @api private
	 */
	function signedUrlBuilder(request) {
	  var expires = request.httpRequest.headers[expiresHeader];
	  var signerClass = request.service.getSignerClass(request);

	  delete request.httpRequest.headers['User-Agent'];
	  delete request.httpRequest.headers['X-Amz-User-Agent'];

	  if (signerClass === AWS.Signers.V4) {
	    if (expires > 604800) { // one week expiry is invalid
	      var message = 'Presigning does not support expiry time greater ' +
	                    'than a week with SigV4 signing.';
	      throw AWS.util.error(new Error(), {
	        code: 'InvalidExpiryTime', message: message, retryable: false
	      });
	    }
	    request.httpRequest.headers[expiresHeader] = expires;
	  } else if (signerClass === AWS.Signers.S3) {
	    var now = request.service ? request.service.getSkewCorrectedDate() : AWS.util.date.getDate();
	    request.httpRequest.headers[expiresHeader] = parseInt(
	      AWS.util.date.unixTimestamp(now) + expires, 10).toString();
	  } else {
	    throw AWS.util.error(new Error(), {
	      message: 'Presigning only supports S3 or SigV4 signing.',
	      code: 'UnsupportedSigner', retryable: false
	    });
	  }
	}

	/**
	 * @api private
	 */
	function signedUrlSigner(request) {
	  var endpoint = request.httpRequest.endpoint;
	  var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
	  var queryParams = {};

	  if (parsedUrl.search) {
	    queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
	  }

	  AWS.util.each(request.httpRequest.headers, function (key, value) {
	    if (key === expiresHeader) key = 'Expires';
	    if (key.indexOf('x-amz-meta-') === 0) {
	      // Delete existing, potentially not normalized key
	      delete queryParams[key];
	      key = key.toLowerCase();
	    }
	    queryParams[key] = value;
	  });
	  delete request.httpRequest.headers[expiresHeader];

	  var auth = queryParams['Authorization'].split(' ');
	  if (auth[0] === 'AWS') {
	    auth = auth[1].split(':');
	    queryParams['AWSAccessKeyId'] = auth[0];
	    queryParams['Signature'] = auth[1];
	  } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
	    auth.shift();
	    var rest = auth.join(' ');
	    var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
	    queryParams['X-Amz-Signature'] = signature;
	    delete queryParams['Expires'];
	  }
	  delete queryParams['Authorization'];
	  delete queryParams['Host'];

	  // build URL
	  endpoint.pathname = parsedUrl.pathname;
	  endpoint.search = AWS.util.queryParamsToString(queryParams);
	}

	/**
	 * @api private
	 */
	AWS.Signers.Presign = inherit({
	  /**
	   * @api private
	   */
	  sign: function sign(request, expireTime, callback) {
	    request.httpRequest.headers[expiresHeader] = expireTime || 3600;
	    request.on('build', signedUrlBuilder);
	    request.on('sign', signedUrlSigner);
	    request.removeListener('afterBuild',
	      AWS.EventListeners.Core.SET_CONTENT_LENGTH);
	    request.removeListener('afterBuild',
	      AWS.EventListeners.Core.COMPUTE_SHA256);

	    request.emit('beforePresign', [request]);

	    if (callback) {
	      request.build(function() {
	        if (this.response.error) callback(this.response.error);
	        else {
	          callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
	        }
	      });
	    } else {
	      request.build();
	      if (request.response.error) throw request.response.error;
	      return AWS.util.urlFormat(request.httpRequest.endpoint);
	    }
	  }
	});

	module.exports = AWS.Signers.Presign;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var AWS = __webpack_require__(1);

	/**
	 * @api private
	 */
	AWS.ParamValidator = AWS.util.inherit({
	  /**
	   * Create a new validator object.
	   *
	   * @param validation [Boolean|map] whether input parameters should be
	   *     validated against the operation description before sending the
	   *     request. Pass a map to enable any of the following specific
	   *     validation features:
	   *
	   *     * **min** [Boolean] &mdash; Validates that a value meets the min
	   *       constraint. This is enabled by default when paramValidation is set
	   *       to `true`.
	   *     * **max** [Boolean] &mdash; Validates that a value meets the max
	   *       constraint.
	   *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
	   *       regular expression.
	   *     * **enum** [Boolean] &mdash; Validates that a string value matches one
	   *       of the allowable enum values.
	   */
	  constructor: function ParamValidator(validation) {
	    if (validation === true || validation === undefined) {
	      validation = {'min': true};
	    }
	    this.validation = validation;
	  },

	  validate: function validate(shape, params, context) {
	    this.errors = [];
	    this.validateMember(shape, params || {}, context || 'params');

	    if (this.errors.length > 1) {
	      var msg = this.errors.join('\n* ');
	      msg = 'There were ' + this.errors.length +
	        ' validation errors:\n* ' + msg;
	      throw AWS.util.error(new Error(msg),
	        {code: 'MultipleValidationErrors', errors: this.errors});
	    } else if (this.errors.length === 1) {
	      throw this.errors[0];
	    } else {
	      return true;
	    }
	  },

	  fail: function fail(code, message) {
	    this.errors.push(AWS.util.error(new Error(message), {code: code}));
	  },

	  validateStructure: function validateStructure(shape, params, context) {
	    this.validateType(params, context, ['object'], 'structure');

	    var paramName;
	    for (var i = 0; shape.required && i < shape.required.length; i++) {
	      paramName = shape.required[i];
	      var value = params[paramName];
	      if (value === undefined || value === null) {
	        this.fail('MissingRequiredParameter',
	          'Missing required key \'' + paramName + '\' in ' + context);
	      }
	    }

	    // validate hash members
	    for (paramName in params) {
	      if (!Object.prototype.hasOwnProperty.call(params, paramName)) continue;

	      var paramValue = params[paramName],
	          memberShape = shape.members[paramName];

	      if (memberShape !== undefined) {
	        var memberContext = [context, paramName].join('.');
	        this.validateMember(memberShape, paramValue, memberContext);
	      } else {
	        this.fail('UnexpectedParameter',
	          'Unexpected key \'' + paramName + '\' found in ' + context);
	      }
	    }

	    return true;
	  },

	  validateMember: function validateMember(shape, param, context) {
	    switch (shape.type) {
	      case 'structure':
	        return this.validateStructure(shape, param, context);
	      case 'list':
	        return this.validateList(shape, param, context);
	      case 'map':
	        return this.validateMap(shape, param, context);
	      default:
	        return this.validateScalar(shape, param, context);
	    }
	  },

	  validateList: function validateList(shape, params, context) {
	    if (this.validateType(params, context, [Array])) {
	      this.validateRange(shape, params.length, context, 'list member count');
	      // validate array members
	      for (var i = 0; i < params.length; i++) {
	        this.validateMember(shape.member, params[i], context + '[' + i + ']');
	      }
	    }
	  },

	  validateMap: function validateMap(shape, params, context) {
	    if (this.validateType(params, context, ['object'], 'map')) {
	      // Build up a count of map members to validate range traits.
	      var mapCount = 0;
	      for (var param in params) {
	        if (!Object.prototype.hasOwnProperty.call(params, param)) continue;
	        // Validate any map key trait constraints
	        this.validateMember(shape.key, param,
	                            context + '[key=\'' + param + '\']')
	        this.validateMember(shape.value, params[param],
	                            context + '[\'' + param + '\']');
	        mapCount++;
	      }
	      this.validateRange(shape, mapCount, context, 'map member count');
	    }
	  },

	  validateScalar: function validateScalar(shape, value, context) {
	    switch (shape.type) {
	      case null:
	      case undefined:
	      case 'string':
	        return this.validateString(shape, value, context);
	      case 'base64':
	      case 'binary':
	        return this.validatePayload(value, context);
	      case 'integer':
	      case 'float':
	        return this.validateNumber(shape, value, context);
	      case 'boolean':
	        return this.validateType(value, context, ['boolean']);
	      case 'timestamp':
	        return this.validateType(value, context, [Date,
	          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
	          'Date object, ISO-8601 string, or a UNIX timestamp');
	      default:
	        return this.fail('UnkownType', 'Unhandled type ' +
	                         shape.type + ' for ' + context);
	    }
	  },

	  validateString: function validateString(shape, value, context) {
	    var validTypes = ['string'];
	    if (shape.isJsonValue) {
	      validTypes = validTypes.concat(['number', 'object', 'boolean']);
	    }
	    if (value !== null && this.validateType(value, context, validTypes)) {
	      this.validateEnum(shape, value, context);
	      this.validateRange(shape, value.length, context, 'string length');
	      this.validatePattern(shape, value, context);
	    }
	  },

	  validatePattern: function validatePattern(shape, value, context) {
	    if (this.validation['pattern'] && shape['pattern'] !== undefined) {
	      if (!(new RegExp(shape['pattern'])).test(value)) {
	        this.fail('PatternMatchError', 'Provided value "' + value + '" '
	          + 'does not match regex pattern /' + shape['pattern'] + '/ for '
	          + context);
	      }
	    }
	  },

	  validateRange: function validateRange(shape, value, context, descriptor) {
	    if (this.validation['min']) {
	      if (shape['min'] !== undefined && value < shape['min']) {
	        this.fail('MinRangeError', 'Expected ' + descriptor + ' >= '
	          + shape['min'] + ', but found ' + value + ' for ' + context);
	      }
	    }
	    if (this.validation['max']) {
	      if (shape['max'] !== undefined && value > shape['max']) {
	        this.fail('MaxRangeError', 'Expected ' + descriptor + ' <= '
	          + shape['max'] + ', but found ' + value + ' for ' + context);
	      }
	    }
	  },

	  validateEnum: function validateRange(shape, value, context) {
	    if (this.validation['enum'] && shape['enum'] !== undefined) {
	      // Fail if the string value is not present in the enum list
	      if (shape['enum'].indexOf(value) === -1) {
	        this.fail('EnumError', 'Found string value of ' + value + ', but '
	          + 'expected ' + shape['enum'].join('|') + ' for ' + context);
	      }
	    }
	  },

	  validateType: function validateType(value, context, acceptedTypes, type) {
	    // We will not log an error for null or undefined, but we will return
	    // false so that callers know that the expected type was not strictly met.
	    if (value === null || value === undefined) return false;

	    var foundInvalidType = false;
	    for (var i = 0; i < acceptedTypes.length; i++) {
	      if (typeof acceptedTypes[i] === 'string') {
	        if (typeof value === acceptedTypes[i]) return true;
	      } else if (acceptedTypes[i] instanceof RegExp) {
	        if ((value || '').toString().match(acceptedTypes[i])) return true;
	      } else {
	        if (value instanceof acceptedTypes[i]) return true;
	        if (AWS.util.isType(value, acceptedTypes[i])) return true;
	        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
	        acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
	      }
	      foundInvalidType = true;
	    }

	    var acceptedType = type;
	    if (!acceptedType) {
	      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
	    }

	    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
	    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
	              vowel + ' ' + acceptedType);
	    return false;
	  },

	  validateNumber: function validateNumber(shape, value, context) {
	    if (value === null || value === undefined) return;
	    if (typeof value === 'string') {
	      var castedValue = parseFloat(value);
	      if (castedValue.toString() === value) value = castedValue;
	    }
	    if (this.validateType(value, context, ['number'])) {
	      this.validateRange(shape, value, context, 'numeric value');
	    }
	  },

	  validatePayload: function validatePayload(value, context) {
	    if (value === null || value === undefined) return;
	    if (typeof value === 'string') return;
	    if (value && typeof value.byteLength === 'number') return; // typed arrays
	    if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
	      var Stream = AWS.util.stream.Stream;
	      if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
	    }

	    var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
	    if (value) {
	      for (var i = 0; i < types.length; i++) {
	        if (AWS.util.isType(value, types[i])) return;
	        if (AWS.util.typeName(value.constructor) === types[i]) return;
	      }
	    }

	    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
	      'string, Buffer, Stream, Blob, or typed array object');
	  }
	});


/***/ })
/******/ ])
});
;