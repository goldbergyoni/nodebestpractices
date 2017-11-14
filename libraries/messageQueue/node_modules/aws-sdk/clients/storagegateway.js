require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['storagegateway'] = {};
AWS.StorageGateway = Service.defineService('storagegateway', ['2013-06-30']);
Object.defineProperty(apiLoader.services['storagegateway'], '2013-06-30', {
  get: function get() {
    var model = require('../apis/storagegateway-2013-06-30.min.json');
    model.paginators = require('../apis/storagegateway-2013-06-30.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.StorageGateway;
