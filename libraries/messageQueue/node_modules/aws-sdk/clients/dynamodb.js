require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['dynamodb'] = {};
AWS.DynamoDB = Service.defineService('dynamodb', ['2011-12-05', '2012-08-10']);
require('../lib/services/dynamodb');
Object.defineProperty(apiLoader.services['dynamodb'], '2011-12-05', {
  get: function get() {
    var model = require('../apis/dynamodb-2011-12-05.min.json');
    model.paginators = require('../apis/dynamodb-2011-12-05.paginators.json').pagination;
    model.waiters = require('../apis/dynamodb-2011-12-05.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(apiLoader.services['dynamodb'], '2012-08-10', {
  get: function get() {
    var model = require('../apis/dynamodb-2012-08-10.min.json');
    model.paginators = require('../apis/dynamodb-2012-08-10.paginators.json').pagination;
    model.waiters = require('../apis/dynamodb-2012-08-10.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DynamoDB;
