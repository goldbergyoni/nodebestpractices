require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['migrationhub'] = {};
AWS.MigrationHub = Service.defineService('migrationhub', ['2017-05-31']);
Object.defineProperty(apiLoader.services['migrationhub'], '2017-05-31', {
  get: function get() {
    var model = require('../apis/AWSMigrationHub-2017-05-31.min.json');
    model.paginators = require('../apis/AWSMigrationHub-2017-05-31.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MigrationHub;
