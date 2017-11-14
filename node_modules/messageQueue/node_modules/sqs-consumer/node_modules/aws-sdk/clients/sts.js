require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['sts'] = {};
AWS.STS = Service.defineService('sts', ['2011-06-15']);
require('../lib/services/sts');
Object.defineProperty(apiLoader.services['sts'], '2011-06-15', {
  get: function get() {
    var model = require('../apis/sts-2011-06-15.min.json');
    model.paginators = require('../apis/sts-2011-06-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.STS;
