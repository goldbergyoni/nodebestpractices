require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['es'] = {};
AWS.ES = Service.defineService('es', ['2015-01-01']);
Object.defineProperty(apiLoader.services['es'], '2015-01-01', {
  get: function get() {
    var model = require('../apis/es-2015-01-01.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ES;
