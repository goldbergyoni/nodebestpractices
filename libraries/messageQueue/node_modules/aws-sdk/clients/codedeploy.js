require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['codedeploy'] = {};
AWS.CodeDeploy = Service.defineService('codedeploy', ['2014-10-06']);
Object.defineProperty(apiLoader.services['codedeploy'], '2014-10-06', {
  get: function get() {
    var model = require('../apis/codedeploy-2014-10-06.min.json');
    model.paginators = require('../apis/codedeploy-2014-10-06.paginators.json').pagination;
    model.waiters = require('../apis/codedeploy-2014-10-06.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodeDeploy;
