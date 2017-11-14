require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['kms'] = {};
AWS.KMS = Service.defineService('kms', ['2014-11-01']);
Object.defineProperty(apiLoader.services['kms'], '2014-11-01', {
  get: function get() {
    var model = require('../apis/kms-2014-11-01.min.json');
    model.paginators = require('../apis/kms-2014-11-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.KMS;
