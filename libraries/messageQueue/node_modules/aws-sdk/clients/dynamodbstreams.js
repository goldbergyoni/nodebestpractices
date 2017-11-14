require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['dynamodbstreams'] = {};
AWS.DynamoDBStreams = Service.defineService('dynamodbstreams', ['2012-08-10']);
Object.defineProperty(apiLoader.services['dynamodbstreams'], '2012-08-10', {
  get: function get() {
    var model = require('../apis/streams.dynamodb-2012-08-10.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DynamoDBStreams;
