require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['iot'] = {};
AWS.Iot = Service.defineService('iot', ['2015-05-28']);
Object.defineProperty(apiLoader.services['iot'], '2015-05-28', {
  get: function get() {
    var model = require('../apis/iot-2015-05-28.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Iot;
