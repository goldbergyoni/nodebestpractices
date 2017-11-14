require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['directconnect'] = {};
AWS.DirectConnect = Service.defineService('directconnect', ['2012-10-25']);
Object.defineProperty(apiLoader.services['directconnect'], '2012-10-25', {
  get: function get() {
    var model = require('../apis/directconnect-2012-10-25.min.json');
    model.paginators = require('../apis/directconnect-2012-10-25.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DirectConnect;
