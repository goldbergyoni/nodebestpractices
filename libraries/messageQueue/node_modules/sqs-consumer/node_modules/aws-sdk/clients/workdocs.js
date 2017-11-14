require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['workdocs'] = {};
AWS.WorkDocs = Service.defineService('workdocs', ['2016-05-01']);
Object.defineProperty(apiLoader.services['workdocs'], '2016-05-01', {
  get: function get() {
    var model = require('../apis/workdocs-2016-05-01.min.json');
    model.paginators = require('../apis/workdocs-2016-05-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.WorkDocs;
