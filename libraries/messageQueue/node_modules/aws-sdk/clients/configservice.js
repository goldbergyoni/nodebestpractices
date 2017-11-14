require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['configservice'] = {};
AWS.ConfigService = Service.defineService('configservice', ['2014-11-12']);
Object.defineProperty(apiLoader.services['configservice'], '2014-11-12', {
  get: function get() {
    var model = require('../apis/config-2014-11-12.min.json');
    model.paginators = require('../apis/config-2014-11-12.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ConfigService;
