require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['servicecatalog'] = {};
AWS.ServiceCatalog = Service.defineService('servicecatalog', ['2015-12-10']);
Object.defineProperty(apiLoader.services['servicecatalog'], '2015-12-10', {
  get: function get() {
    var model = require('../apis/servicecatalog-2015-12-10.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ServiceCatalog;
