require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cognitosync'] = {};
AWS.CognitoSync = Service.defineService('cognitosync', ['2014-06-30']);
Object.defineProperty(apiLoader.services['cognitosync'], '2014-06-30', {
  get: function get() {
    var model = require('../apis/cognito-sync-2014-06-30.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CognitoSync;
