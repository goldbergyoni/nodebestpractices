require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['organizations'] = {};
AWS.Organizations = Service.defineService('organizations', ['2016-11-28']);
Object.defineProperty(apiLoader.services['organizations'], '2016-11-28', {
  get: function get() {
    var model = require('../apis/organizations-2016-11-28.min.json');
    model.paginators = require('../apis/organizations-2016-11-28.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Organizations;
