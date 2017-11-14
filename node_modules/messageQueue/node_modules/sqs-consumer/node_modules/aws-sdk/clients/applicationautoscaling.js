require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['applicationautoscaling'] = {};
AWS.ApplicationAutoScaling = Service.defineService('applicationautoscaling', ['2016-02-06']);
Object.defineProperty(apiLoader.services['applicationautoscaling'], '2016-02-06', {
  get: function get() {
    var model = require('../apis/application-autoscaling-2016-02-06.min.json');
    model.paginators = require('../apis/application-autoscaling-2016-02-06.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ApplicationAutoScaling;
