/**
 * A Connection that operates using Node's http module
 *
 * @param client {Client} - The Client that this class belongs to
 * @param config {Object} - Configuration options
 * @param [config.protocol=http:] {String} - The HTTP protocol that this connection will use, can be set to https:
 * @class HttpConnector
 */
module.exports = HttpConnector;

var handles = {
  http: require('http'),
  https: require('https')
};
var _ = require('../utils');
var parseUrl = require('url').parse;
var qs = require('querystring');
var AgentKeepAlive = require('agentkeepalive');
var ConnectionAbstract = require('../connection');
var zlib = require('zlib');

/**
 * Connector used to talk to an elasticsearch node via HTTP
 *
 * @param {Host} host - The host object representing the elasticsearch node we will be talking to
 * @param {Object} [config] - Configuration options (extends the configuration options for ConnectionAbstract)
 * @param {Number} [config.concurrency=10] - the maximum number of sockets that will be opened to this node
 */
function HttpConnector(host, config) {
  ConnectionAbstract.call(this, host, config);

  this.hand = handles[this.host.protocol];
  if (!this.hand) {
    throw new TypeError('Invalid protocol "' + this.host.protocol +
      '", expected one of ' + _.keys(handles).join(', '));
  }

  this.useSsl = this.host.protocol === 'https';

  config = _.defaults(config || {}, {
    maxSockets: Infinity,
    keepAlive: true,
    keepAliveInterval: 1000,
    keepAliveMaxFreeSockets: 256,
    keepAliveFreeSocketTimeout: 60000
  });

  this.agent = config.createNodeAgent ? config.createNodeAgent(this, config) : this.createAgent(config);
}
_.inherits(HttpConnector, ConnectionAbstract);

HttpConnector.prototype.onStatusSet = _.handler(function (status) {
  if (status === 'closed') {
    var agent = this.agent;
    var toRemove = [];
    var collectSockets = function (sockets, host) {
      _.each(sockets, function (s) {
        if (s) toRemove.push([host, s]);
      });
    };

    agent.minSockets = agent.maxSockets = 0;
    agent.requests = {};

    _.each(agent.sockets, collectSockets);
    _.each(agent.freeSockets, collectSockets);
    _.each(toRemove, function (args) {
      var host = args[0], socket = args[1];
      agent.removeSocket(socket, parseUrl(host));
      socket.destroy();
    });
  }
});

HttpConnector.prototype.createAgent = function (config) {
  var Agent = this.hand.Agent; // the class

  if (config.forever) {
    config.keepAlive = config.forever;
  }

  if (config.keepAlive) {
    Agent = this.useSsl ? AgentKeepAlive.HttpsAgent : AgentKeepAlive;
    this.on('status set', this.bound.onStatusSet);
  }

  return new Agent(this.makeAgentConfig(config));
};

HttpConnector.prototype.makeAgentConfig = function (config) {
  var agentConfig = {
    keepAlive: config.keepAlive,
    keepAliveMsecs: config.keepAliveInterval,
    maxSockets: config.maxSockets,
    maxFreeSockets: config.keepAliveMaxFreeSockets,
    freeSocketKeepAliveTimeout: config.keepAliveFreeSocketTimeout
  };

  if (this.useSsl) {
    _.merge(agentConfig, this.host.ssl);
  }

  return agentConfig;
};

HttpConnector.prototype.makeReqParams = function (params) {
  params = params || {};
  var host = this.host;

  var reqParams = {
    method: params.method || 'GET',
    protocol: host.protocol + ':',
    hostname: host.host,
    port: host.port,
    path: (host.path || '') + (params.path || ''),
    headers: host.getHeaders(params.headers),
    agent: this.agent
  };

  if (!reqParams.path) {
    reqParams.path = '/';
  }

  var query = host.getQuery(params.query);
  if (query) {
    reqParams.path = reqParams.path + '?' + qs.stringify(query);
  }

  return reqParams;
};

HttpConnector.prototype.request = function (params, cb) {
  var incoming;
  var timeoutId;
  var request;
  var status = 0;
  var headers = {};
  var log = this.log;
  var response;

  var reqParams = this.makeReqParams(params);

  // general clean-up procedure to run after the request
  // completes, has an error, or is aborted.
  var cleanUp = _.bind(function (err) {
    clearTimeout(timeoutId);

    request && request.removeAllListeners();
    incoming && incoming.removeAllListeners();

    if ((err instanceof Error) === false) {
      err = void 0;
    }

    log.trace(params.method, reqParams, params.body, response, status);
    if (err) {
      cb(err);
    } else {
      cb(err, response, status, headers);
    }
  }, this);

  request = this.hand.request(reqParams, function (_incoming) {
    incoming = _incoming;
    status = incoming.statusCode;
    headers = incoming.headers;
    response = '';

    var encoding = (headers['content-encoding'] || '').toLowerCase();
    if (encoding === 'gzip' || encoding === 'deflate') {
      incoming = incoming.pipe(zlib.createUnzip());
    }

    incoming.setEncoding('utf8');
    incoming.on('data', function (d) {
      response += d;
    });

    incoming.on('error', cleanUp);
    incoming.on('end', cleanUp);
  });

  request.on('error', cleanUp);

  request.setNoDelay(true);
  request.setSocketKeepAlive(true);

  if (params.body) {
    request.setHeader('Content-Length', Buffer.byteLength(params.body, 'utf8'));
    request.end(params.body);
  } else {
    request.setHeader('Content-Length', 0);
    request.end();
  }

  return function () {
    request.abort();
  };
};
