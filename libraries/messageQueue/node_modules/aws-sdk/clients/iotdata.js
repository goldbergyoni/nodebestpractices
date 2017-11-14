require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['iotdata'] = {};
AWS.IotData = Service.defineService('iotdata', ['2015-05-28']);
require('../lib/services/iotdata');
Object.defineProperty(apiLoader.services['iotdata'], '2015-05-28', {
  get: function get() {
    var model = require('../apis/iot-data-2015-05-28.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.IotData;
