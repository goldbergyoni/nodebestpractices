require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cur'] = {};
AWS.CUR = Service.defineService('cur', ['2017-01-06']);
Object.defineProperty(apiLoader.services['cur'], '2017-01-06', {
  get: function get() {
    var model = require('../apis/cur-2017-01-06.min.json');
    model.paginators = require('../apis/cur-2017-01-06.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CUR;
