require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['workspaces'] = {};
AWS.WorkSpaces = Service.defineService('workspaces', ['2015-04-08']);
Object.defineProperty(apiLoader.services['workspaces'], '2015-04-08', {
  get: function get() {
    var model = require('../apis/workspaces-2015-04-08.min.json');
    model.paginators = require('../apis/workspaces-2015-04-08.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.WorkSpaces;
