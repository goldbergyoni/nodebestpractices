/**
 * Logger that writes to a file, but the file can be executed as a shell script,
 * meaning everything but the curl commands are commented out
 *
 * @class Loggers.Tracer
 * @extends StreamLogger
 * @constructor
 * @param {Object} config - The configuration for the Logger (See LoggerAbstract for generic options)
 * @param {String} config.path - The location to write
 * @param {Log} bridge - The object that triggers logging events, which we will record
 */

module.exports = Tracer;

var StreamLogger = require('./stream');
var fs = require('fs');
var _ = require('../utils');
var url = require('url');

function Tracer(log, config) {
  if (config.path === false) {
    config.stream = process.stderr;
  } else {
    config.stream = fs.createWriteStream(config.path || 'elasticsearch-tracer.log');
  }

  this.curlHost = config.curlHost || 'localhost';
  this.curlPort = config.curlPort || 9200;

  StreamLogger.call(this, log, config);
}
_.inherits(Tracer, StreamLogger);

var usefulUrlFields = ['protocol', 'slashes', 'port', 'hostname', 'pathname', 'query'];

Tracer.prototype._formatTraceMessage = function (req) {
  var reqUrl = _.pick(url.parse(req.url, true, false), usefulUrlFields);

  var originalHost = url.format(_.pick(reqUrl, 'protocol', 'hostname', 'port'));

  reqUrl.port = this.curlPort;
  reqUrl.hostname = this.curlHost;
  reqUrl.query = _.defaults(reqUrl.query || {}, { pretty: true });

  /* jshint quotmark: double */
  var curlCall =
    '# ' + originalHost + '\n' +
    "curl '" + url.format(reqUrl).replace(/'/g, "\\'") + "' -X" + req.method.toUpperCase() +
    (req.body ? " -d '" + this._prettyJson(req.body) + "'" : '');
  /* jshint quotmark: single */

  return {
    curl: curlCall,
    msg: '-> ' + req.status + '\n' + req.response
  };
};

function comment(str) {
  return _.map(str.split(/\r?\n/g), function (line) {
    return '# ' + line;
  }).join('\n');
}

Tracer.prototype.write = function (label, msg) {
  var lead = comment(label + ': ' + this.timestamp()) + '\n';
  if (typeof msg === 'string') {
    this.stream.write(lead + comment(msg) + '\n\n', 'utf8');
  } else {
    this.stream.write(lead + msg.curl + '\n' + comment(msg.msg) + '\n\n', 'utf8');
  }
};
