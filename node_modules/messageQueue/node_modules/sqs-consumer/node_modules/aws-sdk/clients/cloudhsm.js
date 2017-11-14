require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cloudhsm'] = {};
AWS.CloudHSM = Service.defineService('cloudhsm', ['2014-05-30']);
Object.defineProperty(apiLoader.services['cloudhsm'], '2014-05-30', {
  get: function get() {
    var model = require('../apis/cloudhsm-2014-05-30.min.json');
    model.paginators = require('../apis/cloudhsm-2014-05-30.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudHSM;
