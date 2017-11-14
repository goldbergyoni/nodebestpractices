require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['opsworks'] = {};
AWS.OpsWorks = Service.defineService('opsworks', ['2013-02-18']);
Object.defineProperty(apiLoader.services['opsworks'], '2013-02-18', {
  get: function get() {
    var model = require('../apis/opsworks-2013-02-18.min.json');
    model.paginators = require('../apis/opsworks-2013-02-18.paginators.json').pagination;
    model.waiters = require('../apis/opsworks-2013-02-18.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.OpsWorks;
