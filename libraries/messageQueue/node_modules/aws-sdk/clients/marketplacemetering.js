require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['marketplacemetering'] = {};
AWS.MarketplaceMetering = Service.defineService('marketplacemetering', ['2016-01-14']);
Object.defineProperty(apiLoader.services['marketplacemetering'], '2016-01-14', {
  get: function get() {
    var model = require('../apis/meteringmarketplace-2016-01-14.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MarketplaceMetering;
