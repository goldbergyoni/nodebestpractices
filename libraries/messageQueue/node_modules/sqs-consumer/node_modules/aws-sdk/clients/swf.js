require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['swf'] = {};
AWS.SWF = Service.defineService('swf', ['2012-01-25']);
require('../lib/services/swf');
Object.defineProperty(apiLoader.services['swf'], '2012-01-25', {
  get: function get() {
    var model = require('../apis/swf-2012-01-25.min.json');
    model.paginators = require('../apis/swf-2012-01-25.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SWF;
