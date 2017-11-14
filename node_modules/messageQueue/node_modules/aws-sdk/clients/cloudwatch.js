require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudwatch'] = {};
AWS.CloudWatch = Service.defineService('cloudwatch', ['2010-08-01']);
Object.defineProperty(apiLoader.services['cloudwatch'], '2010-08-01', {
  get: function get() {
    var model = require('../apis/monitoring-2010-08-01.min.json');
    model.paginators = require('../apis/monitoring-2010-08-01.paginators.json').pagination;
    model.waiters = require('../apis/monitoring-2010-08-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudWatch;
