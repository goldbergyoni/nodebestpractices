require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['importexport'] = {};
AWS.ImportExport = Service.defineService('importexport', ['2010-06-01']);
Object.defineProperty(apiLoader.services['importexport'], '2010-06-01', {
  get: function get() {
    var model = require('../apis/importexport-2010-06-01.min.json');
    model.paginators = require('../apis/importexport-2010-06-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ImportExport;
