require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['machinelearning'] = {};
AWS.MachineLearning = Service.defineService('machinelearning', ['2014-12-12']);
require('../lib/services/machinelearning');
Object.defineProperty(apiLoader.services['machinelearning'], '2014-12-12', {
  get: function get() {
    var model = require('../apis/machinelearning-2014-12-12.min.json');
    model.paginators = require('../apis/machinelearning-2014-12-12.paginators.json').pagination;
    model.waiters = require('../apis/machinelearning-2014-12-12.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.MachineLearning;
