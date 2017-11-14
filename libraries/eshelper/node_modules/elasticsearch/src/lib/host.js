/**
 * Class to wrap URLS, formatting them and maintaining their separate details
 * @type {[type]}
 */
module.exports = Host;

var url = require('url');
var qs = require('querystring');
var _ = require('./utils');

var startsWithProtocolRE = /^([a-z]+:)?\/\//;
var defaultProto = 'http:';
var btoa;

if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
  defaultProto = window.location.protocol;
  btoa = window.btoa;
}

btoa = btoa || function (data) {
  return (new Buffer(data, 'utf8')).toString('base64');
};

var urlParseFields = [
  'protocol', 'hostname', 'pathname', 'port', 'auth', 'query'
];

var simplify = ['host', 'path'];

var sslDefaults = {
  pfx: null,
  key: null,
  passphrase: null,
  cert: null,
  ca: null,
  ciphers: null,
  rejectUnauthorized: false,
  secureProtocol: null
};

// simple reference used when formatting as a url
// and defines when parsing from a string
Host.defaultPorts = {
  http: 80,
  https: 443
};

function Host(config, globalConfig) {
  config = _.clone(config || {});
  globalConfig = globalConfig || {};

  // defaults
  this.protocol = 'http';
  this.host = 'localhost';
  this.path = '';
  this.port = 9200;
  this.query = null;
  this.headers = null;
  this.suggestCompression = !!globalConfig.suggestCompression;

  this.ssl = _.defaults({}, config.ssl || {}, globalConfig.ssl || {}, sslDefaults);

  if (typeof config === 'string') {
    var firstColon = config.indexOf(':');
    var firstSlash = config.indexOf('/');
    var noSlash = firstSlash === -1;
    var portNoPath = firstColon > -1 && noSlash;
    var portWithPath = !portNoPath && firstColon < firstSlash;
    if ((noSlash || portNoPath || portWithPath) && !startsWithProtocolRE.test(config)) {
      config = defaultProto + '//' + config;
    }
    config = _.pick(url.parse(config, false, true), urlParseFields);
    // default logic for the port is to use 9200 for the default. When a string is specified though,
    // we will use the default from the protocol of the string.
    if (!config.port) {
      var proto = config.protocol || 'http';
      if (proto.charAt(proto.length - 1) === ':') {
        proto = proto.substring(0, proto.length - 1);
      }
      if (Host.defaultPorts[proto]) {
        config.port = Host.defaultPorts[proto];
      }
    }
  }

  if (_.isObject(config)) {
    // move hostname/portname to host/port semi-intelligently.
    _.each(simplify, function (to) {
      var from = to + 'name';
      if (config[from] && config[to]) {
        if (config[to].indexOf(config[from]) === 0) {
          config[to] = config[from];
        }
      } else if (config[from]) {
        config[to] = config[from];
      }
      delete config[from];
    });
  } else {
    config = {};
  }

  if (!config.auth && globalConfig.httpAuth) {
    config.auth = globalConfig.httpAuth
  }

  if (config.auth) {
    config.headers = config.headers || {};
    config.headers.Authorization = 'Basic ' + btoa(config.auth);
    delete config.auth;
  }

  _.forOwn(config, _.bind(function (val, prop) {
    if (val != null) this[prop] = _.clone(val);
  }, this));

  // make sure the query string is parsed
  if (this.query === null) {
    // majority case
    this.query = {};
  } else if (!_.isPlainObject(this.query)) {
    this.query = qs.parse(this.query);
  }

  // make sure that the port is a number
  if (_.isNumeric(this.port)) {
    this.port = parseInt(this.port, 10);
  } else {
    this.port = 9200;
  }

  // make sure the path starts with a leading slash
  if (this.path === '/') {
    this.path = '';
  } else if (this.path && this.path.charAt(0) !== '/') {
    this.path = '/' + (this.path || '');
  }

  // strip trailing ':' on the protocol (when config comes from url.parse)
  if (this.protocol.substr(-1) === ':') {
    this.protocol = this.protocol.substring(0, this.protocol.length - 1);
  }
}

Host.prototype.makeUrl = function (params) {
  params = params || {};
  // build the port
  var port = '';
  if (this.port !== Host.defaultPorts[this.protocol]) {
    // add an actual port
    port = ':' + this.port;
  }

  // build the path
  var path = '' + (this.path || '') + (params.path || '');

  // if path doesn't start with '/' add it.
  if (path.charAt(0) !== '/') {
    path = '/' + path;
  }

  // build the query string
  var query = qs.stringify(this.getQuery(params.query));

  if (this.host) {
    return this.protocol + '://' + this.host + port + path + (query ? '?' + query : '');
  } else {
    return path + (query ? '?' + query : '');
  }
};

function objectPropertyGetter(prop, preOverride) {
  return function (overrides) {
    if (preOverride) {
      overrides = preOverride.call(this, overrides);
    }

    var obj = this[prop];
    if (!obj && !overrides) {
      return null;
    }

    if (overrides) {
      obj = _.assign({}, obj, overrides);
    }

    return _.size(obj) ? obj : null;
  };
}

Host.prototype.getHeaders = objectPropertyGetter('headers', function (overrides) {
  if (!this.suggestCompression) {
    return overrides;
  }

  return _.defaults(overrides || {}, {
    'Accept-Encoding': 'gzip,deflate'
  });
});

Host.prototype.getQuery = objectPropertyGetter('query', function (query) {
  return typeof query === 'string' ? qs.parse(query) : query;
});

Host.prototype.toString = function () {
  return this.makeUrl();
};
