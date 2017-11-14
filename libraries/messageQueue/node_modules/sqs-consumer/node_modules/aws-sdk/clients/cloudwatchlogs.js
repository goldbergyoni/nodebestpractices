require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cloudwatchlogs'] = {};
AWS.CloudWatchLogs = Service.defineService('cloudwatchlogs', ['2014-03-28']);
Object.defineProperty(apiLoader.services['cloudwatchlogs'], '2014-03-28', {
  get: function get() {
    var model = require('../apis/logs-2014-03-28.min.json');
    model.paginators = require('../apis/logs-2014-03-28.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudWatchLogs;
