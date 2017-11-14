require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['greengrass'] = {};
AWS.Greengrass = Service.defineService('greengrass', ['2017-06-07']);
Object.defineProperty(apiLoader.services['greengrass'], '2017-06-07', {
  get: function get() {
    var model = require('../apis/greengrass-2017-06-07.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Greengrass;
