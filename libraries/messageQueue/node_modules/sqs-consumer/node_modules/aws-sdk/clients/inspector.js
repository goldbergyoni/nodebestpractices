require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['inspector'] = {};
AWS.Inspector = Service.defineService('inspector', ['2015-08-18*', '2016-02-16']);
Object.defineProperty(apiLoader.services['inspector'], '2016-02-16', {
  get: function get() {
    var model = require('../apis/inspector-2016-02-16.min.json');
    model.paginators = require('../apis/inspector-2016-02-16.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Inspector;
