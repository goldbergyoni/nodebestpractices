require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['efs'] = {};
AWS.EFS = Service.defineService('efs', ['2015-02-01']);
Object.defineProperty(apiLoader.services['efs'], '2015-02-01', {
  get: function get() {
    var model = require('../apis/elasticfilesystem-2015-02-01.min.json');
    model.paginators = require('../apis/elasticfilesystem-2015-02-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EFS;
