require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['kinesisanalytics'] = {};
AWS.KinesisAnalytics = Service.defineService('kinesisanalytics', ['2015-08-14']);
Object.defineProperty(apiLoader.services['kinesisanalytics'], '2015-08-14', {
  get: function get() {
    var model = require('../apis/kinesisanalytics-2015-08-14.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.KinesisAnalytics;
