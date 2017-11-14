require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['elasticache'] = {};
AWS.ElastiCache = Service.defineService('elasticache', ['2012-11-15*', '2014-03-24*', '2014-07-15*', '2014-09-30*', '2015-02-02']);
Object.defineProperty(apiLoader.services['elasticache'], '2015-02-02', {
  get: function get() {
    var model = require('../apis/elasticache-2015-02-02.min.json');
    model.paginators = require('../apis/elasticache-2015-02-02.paginators.json').pagination;
    model.waiters = require('../apis/elasticache-2015-02-02.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ElastiCache;
