require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['rekognition'] = {};
AWS.Rekognition = Service.defineService('rekognition', ['2016-06-27']);
Object.defineProperty(apiLoader.services['rekognition'], '2016-06-27', {
  get: function get() {
    var model = require('../apis/rekognition-2016-06-27.min.json');
    model.paginators = require('../apis/rekognition-2016-06-27.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Rekognition;
