require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['mobileanalytics'] = {};
AWS.MobileAnalytics = Service.defineService('mobileanalytics', ['2014-06-05']);
Object.defineProperty(apiLoader.services['mobileanalytics'], '2014-06-05', {
  get: function get() {
    var model = require('../apis/mobileanalytics-2014-06-05.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MobileAnalytics;
