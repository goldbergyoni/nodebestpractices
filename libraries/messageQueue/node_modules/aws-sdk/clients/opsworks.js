require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

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
