require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['gamelift'] = {};
AWS.GameLift = Service.defineService('gamelift', ['2015-10-01']);
Object.defineProperty(apiLoader.services['gamelift'], '2015-10-01', {
  get: function get() {
    var model = require('../apis/gamelift-2015-10-01.min.json');
    model.paginators = require('../apis/gamelift-2015-10-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.GameLift;
