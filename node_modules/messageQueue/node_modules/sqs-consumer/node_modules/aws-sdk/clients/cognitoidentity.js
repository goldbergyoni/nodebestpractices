require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
require('../lib/services/cognitoidentity');
Object.defineProperty(apiLoader.services['cognitoidentity'], '2014-06-30', {
  get: function get() {
    var model = require('../apis/cognito-identity-2014-06-30.min.json');
    model.paginators = require('../apis/cognito-identity-2014-06-30.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CognitoIdentity;
