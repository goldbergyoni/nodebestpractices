require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['iam'] = {};
AWS.IAM = Service.defineService('iam', ['2010-05-08']);
Object.defineProperty(apiLoader.services['iam'], '2010-05-08', {
  get: function get() {
    var model = require('../apis/iam-2010-05-08.min.json');
    model.paginators = require('../apis/iam-2010-05-08.paginators.json').pagination;
    model.waiters = require('../apis/iam-2010-05-08.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.IAM;
