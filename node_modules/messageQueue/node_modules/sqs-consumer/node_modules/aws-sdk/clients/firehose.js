require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['firehose'] = {};
AWS.Firehose = Service.defineService('firehose', ['2015-08-04']);
Object.defineProperty(apiLoader.services['firehose'], '2015-08-04', {
  get: function get() {
    var model = require('../apis/firehose-2015-08-04.min.json');
    model.paginators = require('../apis/firehose-2015-08-04.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Firehose;
