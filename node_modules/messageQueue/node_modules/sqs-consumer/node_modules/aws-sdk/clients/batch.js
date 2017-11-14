require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['batch'] = {};
AWS.Batch = Service.defineService('batch', ['2016-08-10']);
Object.defineProperty(apiLoader.services['batch'], '2016-08-10', {
  get: function get() {
    var model = require('../apis/batch-2016-08-10.min.json');
    model.paginators = require('../apis/batch-2016-08-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Batch;
