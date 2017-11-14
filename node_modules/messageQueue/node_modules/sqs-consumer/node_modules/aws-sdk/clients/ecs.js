require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['ecs'] = {};
AWS.ECS = Service.defineService('ecs', ['2014-11-13']);
Object.defineProperty(apiLoader.services['ecs'], '2014-11-13', {
  get: function get() {
    var model = require('../apis/ecs-2014-11-13.min.json');
    model.paginators = require('../apis/ecs-2014-11-13.paginators.json').pagination;
    model.waiters = require('../apis/ecs-2014-11-13.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ECS;
