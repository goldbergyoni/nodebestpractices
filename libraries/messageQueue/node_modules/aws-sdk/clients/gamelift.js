require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['gamelift'] = {};
AWS.GameLift = Service.defineService('gamelift', ['2015-10-01']);
Object.defineProperty(apiLoader.services['gamelift'], '2015-10-01', {
  get: function get() {
    var model = require('../apis/gamelift-2015-10-01.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.GameLift;
