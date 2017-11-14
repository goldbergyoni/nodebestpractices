require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudformation'] = {};
AWS.CloudFormation = Service.defineService('cloudformation', ['2010-05-15']);
Object.defineProperty(apiLoader.services['cloudformation'], '2010-05-15', {
  get: function get() {
    var model = require('../apis/cloudformation-2010-05-15.min.json');
    model.paginators = require('../apis/cloudformation-2010-05-15.paginators.json').pagination;
    model.waiters = require('../apis/cloudformation-2010-05-15.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudFormation;
