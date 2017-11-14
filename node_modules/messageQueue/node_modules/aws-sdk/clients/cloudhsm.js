require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudhsm'] = {};
AWS.CloudHSM = Service.defineService('cloudhsm', ['2014-05-30']);
Object.defineProperty(apiLoader.services['cloudhsm'], '2014-05-30', {
  get: function get() {
    var model = require('../apis/cloudhsm-2014-05-30.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudHSM;
