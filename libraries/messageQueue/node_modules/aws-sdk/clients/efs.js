require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['efs'] = {};
AWS.EFS = Service.defineService('efs', ['2015-02-01']);
Object.defineProperty(apiLoader.services['efs'], '2015-02-01', {
  get: function get() {
    var model = require('../apis/elasticfilesystem-2015-02-01.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EFS;
