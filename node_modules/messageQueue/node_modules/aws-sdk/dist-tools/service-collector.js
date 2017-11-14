var fs = require('fs');
var util = require('util');
var path = require('path');

var AWS = require('../');
var apis = require('../lib/api_loader');
var metadata = require('../apis/metadata');
var ClientCreator = require('./client-creator');

var clientCreator = new ClientCreator();
var defaultServices = clientCreator.getDefaultServices().join(',');
var sanitizeRegex = /[^a-zA-Z0-9,-]/;

var serviceClasses = {};
Object.keys(AWS).forEach(function(name) {
  if (AWS[name].serviceIdentifier) {
    serviceClasses[AWS[name].serviceIdentifier] = AWS[name];
  }
});

function getServiceHeader(service) {
  if (service === 'all') {
    return Object.keys(serviceClasses).map(function(name) {
      return getServiceHeader(name);
    }).join('\n');
  }

  if (!serviceClasses[service]) return null;
  var versions = serviceClasses[service].apiVersions.map(function(version) {
    return version.indexOf('*') >= 0 ? null : version;
  }).filter(function(c) { return c !== null; });

  var file = util.format(
    'if (!Object.prototype.hasOwnProperty.call(AWS, \'' + metadata[service].name + '\')) {\n' +
    '  AWS.apiLoader.services[\'%s\'] = {};\n' +
    '  AWS.%s = AWS.Service.defineService(\'%s\', %s);\n',
    service, metadata[service].name, service, util.inspect(versions));
  var svcPath = path.join(__dirname, '..', 'lib', 'services', service + '.js');
  if (fs.existsSync(svcPath)) {
    file += '  require(\'./services/' + service + '\');\n';
  }
  file += '}\n';

  return file;
}

function getService(service, version) {
  if (service === 'all') {
    return Object.keys(serviceClasses).map(function(name) {
      var out = serviceClasses[name].apiVersions.map(function(svcVersion) {
        if (svcVersion.indexOf('*') >= 0) return null;
        return getService(name, svcVersion);
      }).filter(function(c) { return c !== null; }).join('\n');

      return out;
    }).join('\n');
  }

  var svc, api;
  if (!serviceClasses[service]) {
    return null;
  }

  try {
    var ClassName = serviceClasses[service];
    svc = new ClassName({apiVersion: version, endpoint: 'localhost'});
    api = svc.api;
  } catch (e) {
    return null;
  }

  var serviceFileName = metadata[service].prefix || service;
  var lines = [];
  var line = util.format(
    'AWS.apiLoader.services[\'%s\'][\'%s\'] = %s;\n',
    service, svc.api.apiVersion, 'require(\'../apis/' + serviceFileName + '-' + svc.api.apiVersion + '.min\')');
  lines.push(line);
  if (Object.prototype.hasOwnProperty.call(api, 'paginators') && Object.keys(api.paginators).length) {
    line = util.format(
      'AWS.apiLoader.services[\'%s\'][\'%s\'].paginators = %s;\n',
      service, svc.api.apiVersion, 'require(\'../apis/' + serviceFileName + '-' + svc.api.apiVersion + '.paginators\').pagination');
    lines.push(line);
  }
  if (Object.prototype.hasOwnProperty.call(api, 'waiters') && Object.keys(api.waiters).length) {
    line = util.format(
      'AWS.apiLoader.services[\'%s\'][\'%s\'].waiters = %s;\n',
      service, svc.api.apiVersion, 'require(\'../apis/' + serviceFileName + '-' + svc.api.apiVersion + '.waiters2\').waiters');
    lines.push(line);
  }
  return lines.join('');
}

function ServiceCollector(services) {
  var builtServices = {};

  function buildService(name, usingDefaultServices) {
    var match = name.match(/^(.+?)(?:-(.+?))?$/);
    var service = match[1], version = match[2] || 'latest';
    var contents = [];
    var lines, err;

    if (!builtServices[service]) {
      builtServices[service] = {};

      lines = getServiceHeader(service);
      if (lines === null) {
        if (!usingDefaultServices) {
          err = new Error('Invalid module: ' + service);
          err.name = 'InvalidModuleError';
          throw err;
        }
      } else {
        contents.push(lines);
      }
    }

    if (!builtServices[service][version]) {
      builtServices[service][version] = true;

      lines = getService(service, version);
      if (lines === null) {
        if (!usingDefaultServices) {
          err = new Error('Invalid module: ' + service + '-' + version);
          err.name = 'InvalidModuleError';
          throw err;
        }
      } else {
        contents.push(lines);
      }
    }

    return contents.join('');
  }

  var serviceCode = '';
  var usingDefaultServicesToggle = false;
  if (!services) {
    usingDefaultServicesToggle = true;
    services = defaultServices;
  }
  if (services.match(sanitizeRegex)) {
    throw new Error('Incorrectly formatted service names');
  }

  var invalidModules = [];
  var stsIncluded = false;
  services.split(',').sort().forEach(function(name) {
    if (name.match(/^sts\b/) || name === 'all') stsIncluded = true;
    try {
      serviceCode += buildService(name, usingDefaultServicesToggle) + '\n';
    } catch (e) {
      if (e.name === 'InvalidModuleError') invalidModules.push(name);
      else throw e;
    }
  });

  if (!stsIncluded) {
    serviceCode += buildService('sts') + '\n';
  }

  if (invalidModules.length > 0) {
    throw new Error('Missing modules: ' + invalidModules.join(', '));
  }

  return serviceCode;
}

module.exports = ServiceCollector;