require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['snowball'] = {};
AWS.Snowball = Service.defineService('snowball', ['2016-06-30']);
Object.defineProperty(apiLoader.services['snowball'], '2016-06-30', {
  get: function get() {
    var model = require('../apis/snowball-2016-06-30.min.json');
    model.paginators = require('../apis/snowball-2016-06-30.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Snowball;
