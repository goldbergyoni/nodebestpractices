require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elastictranscoder'] = {};
AWS.ElasticTranscoder = Service.defineService('elastictranscoder', ['2012-09-25']);
Object.defineProperty(apiLoader.services['elastictranscoder'], '2012-09-25', {
  get: function get() {
    var model = require('../apis/elastictranscoder-2012-09-25.min.json');
    model.paginators = require('../apis/elastictranscoder-2012-09-25.paginators.json').pagination;
    model.waiters = require('../apis/elastictranscoder-2012-09-25.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ElasticTranscoder;
