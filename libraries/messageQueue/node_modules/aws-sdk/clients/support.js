require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['support'] = {};
AWS.Support = Service.defineService('support', ['2013-04-15']);
Object.defineProperty(apiLoader.services['support'], '2013-04-15', {
  get: function get() {
    var model = require('../apis/support-2013-04-15.min.json');
    model.paginators = require('../apis/support-2013-04-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Support;
