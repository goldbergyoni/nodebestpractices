require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['sqs'] = {};
AWS.SQS = Service.defineService('sqs', ['2012-11-05']);
require('../lib/services/sqs');
Object.defineProperty(apiLoader.services['sqs'], '2012-11-05', {
  get: function get() {
    var model = require('../apis/sqs-2012-11-05.min.json');
    model.paginators = require('../apis/sqs-2012-11-05.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SQS;
