require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['marketplacecommerceanalytics'] = {};
AWS.MarketplaceCommerceAnalytics = Service.defineService('marketplacecommerceanalytics', ['2015-07-01']);
Object.defineProperty(apiLoader.services['marketplacecommerceanalytics'], '2015-07-01', {
  get: function get() {
    var model = require('../apis/marketplacecommerceanalytics-2015-07-01.min.json');
    model.paginators = require('../apis/marketplacecommerceanalytics-2015-07-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MarketplaceCommerceAnalytics;
