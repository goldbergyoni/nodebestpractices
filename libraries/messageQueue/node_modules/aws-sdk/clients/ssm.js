require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ssm'] = {};
AWS.SSM = Service.defineService('ssm', ['2014-11-06']);
Object.defineProperty(apiLoader.services['ssm'], '2014-11-06', {
  get: function get() {
    var model = require('../apis/ssm-2014-11-06.min.json');
    model.paginators = require('../apis/ssm-2014-11-06.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SSM;
