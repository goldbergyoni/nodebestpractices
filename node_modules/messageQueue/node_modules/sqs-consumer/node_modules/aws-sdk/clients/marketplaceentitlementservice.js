require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['marketplaceentitlementservice'] = {};
AWS.MarketplaceEntitlementService = Service.defineService('marketplaceentitlementservice', ['2017-01-11']);
Object.defineProperty(apiLoader.services['marketplaceentitlementservice'], '2017-01-11', {
  get: function get() {
    var model = require('../apis/entitlement.marketplace-2017-01-11.min.json');
    model.paginators = require('../apis/entitlement.marketplace-2017-01-11.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MarketplaceEntitlementService;
