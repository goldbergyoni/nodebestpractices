require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['dax'] = {};
AWS.DAX = Service.defineService('dax', ['2017-04-19']);
Object.defineProperty(apiLoader.services['dax'], '2017-04-19', {
  get: function get() {
    var model = require('../apis/dax-2017-04-19.min.json');
    model.paginators = require('../apis/dax-2017-04-19.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.DAX;
