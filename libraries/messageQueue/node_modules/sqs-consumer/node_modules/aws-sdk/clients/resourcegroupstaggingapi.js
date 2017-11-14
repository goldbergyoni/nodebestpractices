require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['resourcegroupstaggingapi'] = {};
AWS.ResourceGroupsTaggingAPI = Service.defineService('resourcegroupstaggingapi', ['2017-01-26']);
Object.defineProperty(apiLoader.services['resourcegroupstaggingapi'], '2017-01-26', {
  get: function get() {
    var model = require('../apis/resourcegroupstaggingapi-2017-01-26.min.json');
    model.paginators = require('../apis/resourcegroupstaggingapi-2017-01-26.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ResourceGroupsTaggingAPI;
