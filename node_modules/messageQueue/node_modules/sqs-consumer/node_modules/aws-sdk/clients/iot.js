require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['iot'] = {};
AWS.Iot = Service.defineService('iot', ['2015-05-28']);
Object.defineProperty(apiLoader.services['iot'], '2015-05-28', {
  get: function get() {
    var model = require('../apis/iot-2015-05-28.min.json');
    model.paginators = require('../apis/iot-2015-05-28.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Iot;
