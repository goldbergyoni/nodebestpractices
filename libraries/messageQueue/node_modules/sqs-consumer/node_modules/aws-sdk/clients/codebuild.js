require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['codebuild'] = {};
AWS.CodeBuild = Service.defineService('codebuild', ['2016-10-06']);
Object.defineProperty(apiLoader.services['codebuild'], '2016-10-06', {
  get: function get() {
    var model = require('../apis/codebuild-2016-10-06.min.json');
    model.paginators = require('../apis/codebuild-2016-10-06.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodeBuild;
