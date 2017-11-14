require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['health'] = {};
AWS.Health = Service.defineService('health', ['2016-08-04']);
Object.defineProperty(apiLoader.services['health'], '2016-08-04', {
  get: function get() {
    var model = require('../apis/health-2016-08-04.min.json');
    model.paginators = require('../apis/health-2016-08-04.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Health;
