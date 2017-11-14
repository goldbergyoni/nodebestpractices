require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['lexmodelbuildingservice'] = {};
AWS.LexModelBuildingService = Service.defineService('lexmodelbuildingservice', ['2017-04-19']);
Object.defineProperty(apiLoader.services['lexmodelbuildingservice'], '2017-04-19', {
  get: function get() {
    var model = require('../apis/lex-models-2017-04-19.min.json');
    model.paginators = require('../apis/lex-models-2017-04-19.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.LexModelBuildingService;
