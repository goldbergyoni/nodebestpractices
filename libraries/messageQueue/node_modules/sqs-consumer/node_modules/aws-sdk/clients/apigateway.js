require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['apigateway'] = {};
AWS.APIGateway = Service.defineService('apigateway', ['2015-07-09']);
require('../lib/services/apigateway');
Object.defineProperty(apiLoader.services['apigateway'], '2015-07-09', {
  get: function get() {
    var model = require('../apis/apigateway-2015-07-09.min.json');
    model.paginators = require('../apis/apigateway-2015-07-09.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.APIGateway;
