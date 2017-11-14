require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['dms'] = {};
AWS.DMS = Service.defineService('dms', ['2016-01-01']);
Object.defineProperty(apiLoader.services['dms'], '2016-01-01', {
  get: function get() {
    var model = require('../apis/dms-2016-01-01.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DMS;
