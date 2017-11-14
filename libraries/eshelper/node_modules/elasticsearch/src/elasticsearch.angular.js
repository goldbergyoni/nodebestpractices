/**
 * Wrapper for the elasticsearch.js client, which will register the client constructor
 * as a factory within angular that can be easily injected with Angular's awesome DI.
 *
 * It will also instruct the client to use Angular's $http service for it's ajax requests
 */
var AngularConnector = require('./lib/connectors/angular');
var Client = require('./lib/client');

process.angular_build = true;

/* global angular */
angular.module('elasticsearch', [])
  .factory('esFactory', ['$injector', '$q', function ($injector, $q) {

    var factory = function (config) {
      config = config || {};
      config.connectionClass = AngularConnector;
      config.$injector = $injector;
      config.defer = function () {
        return $q.defer();
      };
      config.serializer = config.serializer || 'angular';
      return new Client(config);
    };

    factory.errors = require('./lib/errors');
    factory.ConnectionPool = require('./lib/connection_pool');
    factory.Transport = require('./lib/transport');

    return factory;
  }]);
