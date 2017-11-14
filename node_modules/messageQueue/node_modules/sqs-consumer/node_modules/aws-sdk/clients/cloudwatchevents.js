require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cloudwatchevents'] = {};
AWS.CloudWatchEvents = Service.defineService('cloudwatchevents', ['2014-02-03*', '2015-10-07']);
Object.defineProperty(apiLoader.services['cloudwatchevents'], '2015-10-07', {
  get: function get() {
    var model = require('../apis/events-2015-10-07.min.json');
    model.paginators = require('../apis/events-2015-10-07.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudWatchEvents;
