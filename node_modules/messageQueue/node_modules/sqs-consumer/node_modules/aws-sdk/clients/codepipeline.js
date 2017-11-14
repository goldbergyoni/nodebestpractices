require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['codepipeline'] = {};
AWS.CodePipeline = Service.defineService('codepipeline', ['2015-07-09']);
Object.defineProperty(apiLoader.services['codepipeline'], '2015-07-09', {
  get: function get() {
    var model = require('../apis/codepipeline-2015-07-09.min.json');
    model.paginators = require('../apis/codepipeline-2015-07-09.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodePipeline;
