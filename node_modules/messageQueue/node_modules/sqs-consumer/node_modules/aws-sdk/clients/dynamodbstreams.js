require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['dynamodbstreams'] = {};
AWS.DynamoDBStreams = Service.defineService('dynamodbstreams', ['2012-08-10']);
Object.defineProperty(apiLoader.services['dynamodbstreams'], '2012-08-10', {
  get: function get() {
    var model = require('../apis/streams.dynamodb-2012-08-10.min.json');
    model.paginators = require('../apis/streams.dynamodb-2012-08-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DynamoDBStreams;
