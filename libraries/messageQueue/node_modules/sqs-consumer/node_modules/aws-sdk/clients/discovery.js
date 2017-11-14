require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['discovery'] = {};
AWS.Discovery = Service.defineService('discovery', ['2015-11-01']);
Object.defineProperty(apiLoader.services['discovery'], '2015-11-01', {
  get: function get() {
    var model = require('../apis/discovery-2015-11-01.min.json');
    model.paginators = require('../apis/discovery-2015-11-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Discovery;
