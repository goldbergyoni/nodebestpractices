require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['codecommit'] = {};
AWS.CodeCommit = Service.defineService('codecommit', ['2015-04-13']);
Object.defineProperty(apiLoader.services['codecommit'], '2015-04-13', {
  get: function get() {
    var model = require('../apis/codecommit-2015-04-13.min.json');
    model.paginators = require('../apis/codecommit-2015-04-13.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodeCommit;
