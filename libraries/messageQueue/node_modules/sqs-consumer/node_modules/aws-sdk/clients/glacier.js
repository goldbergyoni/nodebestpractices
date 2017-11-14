require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['glacier'] = {};
AWS.Glacier = Service.defineService('glacier', ['2012-06-01']);
require('../lib/services/glacier');
Object.defineProperty(apiLoader.services['glacier'], '2012-06-01', {
  get: function get() {
    var model = require('../apis/glacier-2012-06-01.min.json');
    model.paginators = require('../apis/glacier-2012-06-01.paginators.json').pagination;
    model.waiters = require('../apis/glacier-2012-06-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Glacier;
