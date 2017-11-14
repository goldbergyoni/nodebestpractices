require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['firehose'] = {};
AWS.Firehose = Service.defineService('firehose', ['2015-08-04']);
Object.defineProperty(apiLoader.services['firehose'], '2015-08-04', {
  get: function get() {
    var model = require('../apis/firehose-2015-08-04.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Firehose;
