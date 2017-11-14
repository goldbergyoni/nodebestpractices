require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['codestar'] = {};
AWS.CodeStar = Service.defineService('codestar', ['2017-04-19']);
Object.defineProperty(apiLoader.services['codestar'], '2017-04-19', {
  get: function get() {
    var model = require('../apis/codestar-2017-04-19.min.json');
    model.paginators = require('../apis/codestar-2017-04-19.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodeStar;
