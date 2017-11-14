require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['xray'] = {};
AWS.XRay = Service.defineService('xray', ['2016-04-12']);
Object.defineProperty(apiLoader.services['xray'], '2016-04-12', {
  get: function get() {
    var model = require('../apis/xray-2016-04-12.min.json');
    model.paginators = require('../apis/xray-2016-04-12.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.XRay;
