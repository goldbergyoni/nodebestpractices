var fs = require('fs');
var path = require('path');

// Generate service clients
function ClientCreator() {
  this._metadata = require('../apis/metadata');
  this._apisFolderPath = path.join(__dirname, '..', 'apis');
  this._clientFolderPath = path.join(__dirname, '..', 'clients');
  this._serviceCustomizationsFolderPath = path.join(__dirname, '..', 'lib', 'services');
  this._packageJsonPath = path.join(__dirname, '..', 'package.json');
  this._apiFileNames = null;
}

ClientCreator.prototype.getAllApiFilenames = function getAllApiFilenames() {
    if (this._apiFileNames) {
        return this._apiFileNames;
    }
    var apiFileNames = fs.readdirSync(this._apisFolderPath);
    // filter out metadata
    this._apiFileNames = apiFileNames.filter(function(name) {
        return name !== 'metadata.json';
    });
    return this._apiFileNames;
};

ClientCreator.prototype.getAllApiFilenamesForService = function getAllApiFilenamesForService(modelName) {
    var serviceRegex = new RegExp('(^' + modelName + '-([\\d]{4}-[\\d]{2}-[\\d]{2})\\.([\\w]+))\\.json$');
    var modelRegex = /(([\d]{4}-[\d]{2}-[\d]{2})\.([\w]+))\.json$/;

    var models = {};
    var versions = {};
    this.getAllApiFilenames().filter(function(name) {
        return name.search(serviceRegex) === 0;
    }).forEach(function(name) {
        var matches = name.match(serviceRegex);
        if (!matches) {
            return;
        }
        var model = matches[1];
        var version = matches[2];
        var modelType = matches[3];
        if (!versions.hasOwnProperty(version)) {
            versions[version] = {};
        }
        var versionInfo = versions[version];
        switch (modelType) {
            case 'min':
                versionInfo.api = model;
                break;
            case 'paginators':
                versionInfo.paginators = model;
                break;
            case 'waiters2':
                versionInfo.waiters = model;
                break;
            default:
                return;
        }
    });
    models.versions = versions;
    return models;
};

ClientCreator.prototype.customizationsExist = function customizationsExist(serviceName) {
    var customizationsFolder = this._serviceCustomizationsFolderPath;
    return fs.existsSync(path.join(customizationsFolder, serviceName + '.js'));
};

ClientCreator.prototype.generateClientFileSource = function generateClientFileSource(serviceMetadata, specifiedVersion) {
  var clientFolderPath = this._clientFolderPath;
  var className = serviceMetadata.name;
  var serviceName = className.toLowerCase();
  var modelName = serviceMetadata.prefix || serviceName;
  specifiedVersion = specifiedVersion || '*';

  // get models for the service
  var models = this.getAllApiFilenamesForService(modelName);

  var modelVersions = models && models.versions;
  if (!modelVersions) {
      throw new Error('Unable to get models for ' + modelName);
  }
  var obsoleteVersions = serviceMetadata.versions || [];
  var versionNumbers = Object.keys(modelVersions);
  var tab = '  ';
  var code = '';
  code += 'require(\'../lib/node_loader\');\n';
  code += 'var AWS = require(\'../lib/core\');\n';
  code += 'var Service = require(\'../lib/service\');\n';
  code += 'var apiLoader = require(\'../lib/api_loader\');\n\n';
  code += 'apiLoader.services[\'' + serviceName +'\'] = {};\n';
  code += 'AWS.' + className + ' = Service.defineService(\'' + serviceName + '\', [\'' + [].concat(obsoleteVersions, versionNumbers).sort().join('\', \'') + '\']);\n';
  // pull in service customizations
  if (this.customizationsExist(serviceName)) {
    code += 'require(\'../lib/services/' + serviceName + '\');\n';
  }
  versionNumbers.forEach(function(version) {
    // check version
    if (specifiedVersion !== '*' && specifiedVersion !== version) {
        return;
    }
    var versionInfo = modelVersions[version];
    if (!versionInfo.hasOwnProperty('api')) {
        throw new Error('No API model for ' + serviceName + '-' + version);
    }
    code += 'Object.defineProperty(apiLoader.services[\'' + serviceName +'\'], \'' + version + '\', {\n';
    code += tab + 'get: function get() {\n';
    code += tab + tab + 'var model = require(\'../apis/' + versionInfo.api + '.json\');\n'
    if (versionInfo.hasOwnProperty('paginators')) {
        code += tab + tab + 'model.paginators = require(\'../apis/' + versionInfo.paginators + '.json\').pagination;\n';
    }
    if (versionInfo.hasOwnProperty('waiters')) {
        code += tab + tab + 'model.waiters = require(\'../apis/' + versionInfo.waiters + '.json\').waiters;\n';
    }
    code += tab + tab + 'return model;\n';
    code += tab + '},\n';
    code += tab + 'enumerable: true,\n';
    code += tab + 'configurable: true\n';
    code += '});\n';
  });

  code += '\n';
  code += 'module.exports = AWS.' + className + ';\n';
  return {
      code: code,
      path: path.join(clientFolderPath, serviceName + '.js'),
      service: serviceName,
  }
};

ClientCreator.prototype.tabs = function tabs(count) {
  var tab = '';
  for (var i = 0; i < count; i++) {
      tab += '  ';
  }
  return tab;
}

ClientCreator.prototype.generateDefinePropertySource = function generateDefinePropertySource(objName, serviceName, className) {
  var tabs = this.tabs;
  var code = '';
  code += 'var ' + serviceName + ' = null;\n';
  code += 'Object.defineProperty(' + objName + ', \'' + className + '\', {\n';
  code += tabs(1) + 'get: function get() {\n';
  code += tabs(2) + 'return ' + serviceName + ' || require(\'./' + serviceName + '\');\n';
  code += tabs(1) + '},\n';
  code += tabs(1) + 'set: function set(svc) {\n';
  code += tabs(2) + serviceName + ' = svc;\n';
  code += tabs(1) + '},\n';
  code += tabs(1) + 'enumerable: true,\n';
  code += tabs(1) + 'configurable: true\n';
  code += '});\n';

  return code;
};

ClientCreator.prototype.generateAllServicesSource = function generateAllServicesSource(services, fileName) {
  var metadata = this._metadata;
  var self = this;
  var code = '';
  code += 'require(\'../lib/node_loader\');\n';
  code += 'var AWS = require(\'../lib/core\');\n\n';
  code += 'module.exports = {\n';

  services.forEach(function(service, idx) {
    var className = metadata[service].name;
    var tab = '  ';
    var isLast = idx === services.length - 1;
    //code += self.generateDefinePropertySource('AWS', service, className);
    code += self.tabs(1) + className + ': require(\'./' + service + '\')' + (isLast ? '' : ',') + '\n';
  });
  code += '};';
  return {
    code: code,
    path: path.join(this._clientFolderPath, fileName + '.js'),
    service: fileName
  };
};

ClientCreator.prototype.getDefaultServices = function getDefaultServices() {
  var metadata = this._metadata;
  var services = [];
  for (var key in metadata) {
    if (!metadata.hasOwnProperty(key)) {
      continue;
    }
    var className = metadata[key].name;
    var serviceName = className.toLowerCase();
    services.push(serviceName);
  }
  return services;
};

ClientCreator.prototype.writeClientServices = function writeClientServices() {
  var metadata = this._metadata;
  var services = [];
  var corsServices = [];
  for (var key in metadata) {
    if (!metadata.hasOwnProperty(key)) {
      continue;
    }
    var clientInfo = this.generateClientFileSource(metadata[key]);
    fs.writeFileSync(clientInfo.path, clientInfo.code);
    services.push(clientInfo.service);
    // check if service supports CORS
    if (metadata[key].cors === true) {
      corsServices.push(clientInfo.service);
    }
  }
  var allClientInfo = this.generateAllServicesSource(services, 'all');
  fs.writeFileSync(allClientInfo.path, allClientInfo.code);
  var browserClientInfo = this.generateAllServicesSource(corsServices, 'browser_default');
  fs.writeFileSync(browserClientInfo.path, browserClientInfo.code);
};

module.exports = ClientCreator;