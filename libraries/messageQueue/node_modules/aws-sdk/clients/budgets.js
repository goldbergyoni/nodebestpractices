require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['budgets'] = {};
AWS.Budgets = Service.defineService('budgets', ['2016-10-20']);
Object.defineProperty(apiLoader.services['budgets'], '2016-10-20', {
  get: function get() {
    var model = require('../apis/budgets-2016-10-20.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Budgets;
