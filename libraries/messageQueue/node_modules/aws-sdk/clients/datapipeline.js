require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['datapipeline'] = {};
AWS.DataPipeline = Service.defineService('datapipeline', ['2012-10-29']);
Object.defineProperty(apiLoader.services['datapipeline'], '2012-10-29', {
  get: function get() {
    var model = require('../apis/datapipeline-2012-10-29.min.json');
    model.paginators = require('../apis/datapipeline-2012-10-29.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DataPipeline;
