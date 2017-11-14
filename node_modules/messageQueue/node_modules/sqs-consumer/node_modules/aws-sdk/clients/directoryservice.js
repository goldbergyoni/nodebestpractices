require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['directoryservice'] = {};
AWS.DirectoryService = Service.defineService('directoryservice', ['2015-04-16']);
Object.defineProperty(apiLoader.services['directoryservice'], '2015-04-16', {
  get: function get() {
    var model = require('../apis/ds-2015-04-16.min.json');
    model.paginators = require('../apis/ds-2015-04-16.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DirectoryService;
