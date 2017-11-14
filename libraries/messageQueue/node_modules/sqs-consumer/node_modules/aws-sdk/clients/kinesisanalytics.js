require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['kinesisanalytics'] = {};
AWS.KinesisAnalytics = Service.defineService('kinesisanalytics', ['2015-08-14']);
Object.defineProperty(apiLoader.services['kinesisanalytics'], '2015-08-14', {
  get: function get() {
    var model = require('../apis/kinesisanalytics-2015-08-14.min.json');
    model.paginators = require('../apis/kinesisanalytics-2015-08-14.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.KinesisAnalytics;
