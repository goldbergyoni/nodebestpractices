require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['opsworkscm'] = {};
AWS.OpsWorksCM = Service.defineService('opsworkscm', ['2016-11-01']);
Object.defineProperty(apiLoader.services['opsworkscm'], '2016-11-01', {
  get: function get() {
    var model = require('../apis/opsworkscm-2016-11-01.min.json');
    model.paginators = require('../apis/opsworkscm-2016-11-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.OpsWorksCM;
