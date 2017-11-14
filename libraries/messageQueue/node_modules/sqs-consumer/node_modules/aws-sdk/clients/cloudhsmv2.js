require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cloudhsmv2'] = {};
AWS.CloudHSMV2 = Service.defineService('cloudhsmv2', ['2017-04-28']);
Object.defineProperty(apiLoader.services['cloudhsmv2'], '2017-04-28', {
  get: function get() {
    var model = require('../apis/cloudhsmv2-2017-04-28.min.json');
    model.paginators = require('../apis/cloudhsmv2-2017-04-28.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudHSMV2;
