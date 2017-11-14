require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['es'] = {};
AWS.ES = Service.defineService('es', ['2015-01-01']);
Object.defineProperty(apiLoader.services['es'], '2015-01-01', {
  get: function get() {
    var model = require('../apis/es-2015-01-01.min.json');
    model.paginators = require('../apis/es-2015-01-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ES;
