require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['lightsail'] = {};
AWS.Lightsail = Service.defineService('lightsail', ['2016-11-28']);
Object.defineProperty(apiLoader.services['lightsail'], '2016-11-28', {
  get: function get() {
    var model = require('../apis/lightsail-2016-11-28.min.json');
    model.paginators = require('../apis/lightsail-2016-11-28.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Lightsail;
