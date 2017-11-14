/**
 * A client that makes requests to Elasticsearch via a {{#crossLink "Transport"}}Transport{{/crossLink}}
 *
 * Initializing a client might look something like:
 *
 * ```
 * var client = new es.Client({
 *   hosts: [
 *     'es1.net:9200',
 *     {
 *       host: 'es2.net',
 *       port: 9200
 *     }
 *   ],
 *   sniffOnStart: true,
 *   log: {
 *     type: 'file',
 *     level: 'warning'
 *   }
 * });
 * ```
 *
 * @class Client
 * @constructor
 */

module.exports = Client;

var Transport = require('./transport');
var clientAction = require('./client_action');
var _ = require('./utils');

function Client(config) {
  config = config || {};

  if (config.__reused) {
    throw new Error('Do not reuse objects to configure the elasticsearch Client class: ' +
      'https://github.com/elasticsearch/elasticsearch-js/issues/33');
  } else {
    config.__reused = true;
  }

  function EsApiClient() {
    // our client will log minimally by default
    if (!config.hasOwnProperty('log')) {
      config.log = 'warning';
    }

    if (!config.hosts && !config.host) {
      config.host = 'http://localhost:9200';
    }

    this.close = function () {
      this.transport.close();
    };

    this.transport = new Transport(config);

    _.each(EsApiClient.prototype, _.bind(function (Fn, prop) {
      if (Fn.prototype instanceof clientAction.ApiNamespace) {
        this[prop] = new Fn(this.transport, this);
      }
    }, this));

    delete this._namespaces;
  }


  EsApiClient.prototype = _.funcEnum(config, 'apiVersion', Client.apis, '_default');
  if (!config.sniffEndpoint && EsApiClient.prototype === Client.apis['0.90']) {
    config.sniffEndpoint = '/_cluster/nodes';
  }

  var Constructor = EsApiClient;

  if (config.plugins) {
    Constructor.prototype = _.cloneDeep(Constructor.prototype);

    _.each(config.plugins, function (setup) {
      Constructor = setup(Constructor, config, {
        apis: require('./apis'),
        connectors: require('./connectors'),
        loggers: require('./loggers'),
        selectors: require('./selectors'),
        serializers: require('./serializers'),
        Client: require('./client'),
        clientAction: clientAction,
        Connection: require('./connection'),
        ConnectionPool: require('./connection_pool'),
        Errors: require('./errors'),
        Host: require('./host'),
        Log: require('./log'),
        Logger: require('./logger'),
        NodesToHost: require('./nodes_to_host'),
        Transport: require('./transport'),
        utils: require('./utils')
      }) || Constructor;
    });
  }

  return new Constructor();
}

Client.apis = require('./apis');
