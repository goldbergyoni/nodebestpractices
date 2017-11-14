require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['lexruntime'] = {};
AWS.LexRuntime = Service.defineService('lexruntime', ['2016-11-28']);
Object.defineProperty(apiLoader.services['lexruntime'], '2016-11-28', {
  get: function get() {
    var model = require('../apis/runtime.lex-2016-11-28.min.json');
    model.paginators = require('../apis/runtime.lex-2016-11-28.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.LexRuntime;
