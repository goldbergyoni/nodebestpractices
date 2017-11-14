require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['marketplacecommerceanalytics'] = {};
AWS.MarketplaceCommerceAnalytics = Service.defineService('marketplacecommerceanalytics', ['2015-07-01']);
Object.defineProperty(apiLoader.services['marketplacecommerceanalytics'], '2015-07-01', {
  get: function get() {
    var model = require('../apis/marketplacecommerceanalytics-2015-07-01.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MarketplaceCommerceAnalytics;
