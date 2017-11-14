require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['devicefarm'] = {};
AWS.DeviceFarm = Service.defineService('devicefarm', ['2015-06-23']);
Object.defineProperty(apiLoader.services['devicefarm'], '2015-06-23', {
  get: function get() {
    var model = require('../apis/devicefarm-2015-06-23.min.json');
    model.paginators = require('../apis/devicefarm-2015-06-23.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DeviceFarm;
