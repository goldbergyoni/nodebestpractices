require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ecr'] = {};
AWS.ECR = Service.defineService('ecr', ['2015-09-21']);
Object.defineProperty(apiLoader.services['ecr'], '2015-09-21', {
  get: function get() {
    var model = require('../apis/ecr-2015-09-21.min.json');
    model.paginators = require('../apis/ecr-2015-09-21.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ECR;
