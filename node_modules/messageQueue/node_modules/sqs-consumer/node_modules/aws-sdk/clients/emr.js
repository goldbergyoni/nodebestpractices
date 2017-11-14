require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['emr'] = {};
AWS.EMR = Service.defineService('emr', ['2009-03-31']);
Object.defineProperty(apiLoader.services['emr'], '2009-03-31', {
  get: function get() {
    var model = require('../apis/elasticmapreduce-2009-03-31.min.json');
    model.paginators = require('../apis/elasticmapreduce-2009-03-31.paginators.json').pagination;
    model.waiters = require('../apis/elasticmapreduce-2009-03-31.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EMR;
