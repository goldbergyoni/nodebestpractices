require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['stepfunctions'] = {};
AWS.StepFunctions = Service.defineService('stepfunctions', ['2016-11-23']);
Object.defineProperty(apiLoader.services['stepfunctions'], '2016-11-23', {
  get: function get() {
    var model = require('../apis/states-2016-11-23.min.json');
    model.paginators = require('../apis/states-2016-11-23.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.StepFunctions;
