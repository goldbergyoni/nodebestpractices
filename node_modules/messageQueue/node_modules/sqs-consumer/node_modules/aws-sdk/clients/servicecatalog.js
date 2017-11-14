require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['servicecatalog'] = {};
AWS.ServiceCatalog = Service.defineService('servicecatalog', ['2015-12-10']);
Object.defineProperty(apiLoader.services['servicecatalog'], '2015-12-10', {
  get: function get() {
    var model = require('../apis/servicecatalog-2015-12-10.min.json');
    model.paginators = require('../apis/servicecatalog-2015-12-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ServiceCatalog;
