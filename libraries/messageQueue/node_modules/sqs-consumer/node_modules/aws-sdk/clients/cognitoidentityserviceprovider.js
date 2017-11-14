require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cognitoidentityserviceprovider'] = {};
AWS.CognitoIdentityServiceProvider = Service.defineService('cognitoidentityserviceprovider', ['2016-04-18']);
Object.defineProperty(apiLoader.services['cognitoidentityserviceprovider'], '2016-04-18', {
  get: function get() {
    var model = require('../apis/cognito-idp-2016-04-18.min.json');
    model.paginators = require('../apis/cognito-idp-2016-04-18.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CognitoIdentityServiceProvider;
