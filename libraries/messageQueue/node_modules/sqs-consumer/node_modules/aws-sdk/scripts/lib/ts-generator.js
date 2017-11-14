var fs = require('fs');
var path = require('path');

var CUSTOM_CONFIG_ENUMS = {
    DUALSTACK: {
        FILE_NAME: 'config_use_dualstack',
        INTERFACE: 'UseDualstackConfigOptions'
    }
};

function TSGenerator(options) {
    this._sdkRootDir = options.SdkRootDirectory || process.cwd();
    this._apiRootDir = path.join(this._sdkRootDir, 'apis');
    this._metadataPath = path.join(this._apiRootDir, 'metadata.json');
    this._clientsDir = path.join(this._sdkRootDir, 'clients');
    this.metadata = null;
    this.typings = {};
    this.fillApiModelFileNames(this._apiRootDir);
    this.streamTypes = {};
}

/**
 * Loads the AWS SDK metadata.json file.
 */
TSGenerator.prototype.loadMetadata = function loadMetadata() {
    var metadataFile = fs.readFileSync(this._metadataPath);
    this.metadata = JSON.parse(metadataFile);
    return this.metadata;
};

/**
 * Modifies metadata to include api model filenames.
 */
TSGenerator.prototype.fillApiModelFileNames = function fillApiModelFileNames(apisPath) {
    var modelPaths = fs.readdirSync(apisPath);
    if (!this.metadata) {
        this.loadMetadata();
    }
    var metadata = this.metadata;

    // sort paths so latest versions appear first
    modelPaths = modelPaths.sort(function sort(a, b) {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    // Only get latest version of models
    var foundModels = Object.create(null);
    modelPaths.forEach(function(modelFileName) {
        var match = modelFileName.match(/^(.+)(-[\d]{4}-[\d]{2}-[\d]{2})\.normal\.json$/i);
        if (match) {
            var model = match[1];
            // add version
            var version = match[2].substring(1);
            if (!foundModels[model]) {
                foundModels[model] = {
                    latestFileName: modelFileName,
                    versions: [version]
                };
            } else {
                foundModels[model].versions.push(version);
            }
        }
    });

    // now update the metadata
    var keys = Object.keys(metadata);
    keys.forEach(function(key) {
        var modelName = metadata[key].prefix || key;
        var modelInfo = foundModels[modelName];
        metadata[key].api_path = modelInfo.latestFileName;
        // find waiters file
        var baseName = modelInfo.latestFileName.split('.')[0];
        if (modelPaths.indexOf(baseName + '.waiters2.json') >= 0) {
            metadata[key].waiters_path = baseName + '.waiters2.json';
        }
        // add versions
        if (!metadata[key].versions) {
            metadata[key].versions = [];
        }
        metadata[key].versions = [].concat(metadata[key].versions, modelInfo.versions);
    });
};

TSGenerator.prototype.updateDynamoDBDocumentClient = function updateDynamoDBDocumentClient() {
    // read in document client customization
    var docClientCustomCode = fs.readFileSync(path.join(this._sdkRootDir, 'lib', 'dynamodb', 'document_client.d.ts')).toString();
    var lines = docClientCustomCode.split('\n');
    var namespaceIndexStart = -1;
    var namespaceIndexEnd = -1;
    for (var i = 0, iLen = lines.length; i < iLen; i++) {
        var line = lines[i];
        // find exported namespace
        if (line.indexOf('//<!--auto-generated start-->') >= 0) {
            namespaceIndexStart = i;
        }
        if (line.indexOf('//<!--auto-generated end-->') >= 0) {
            namespaceIndexEnd = i;
            break;
        }
    }
    if (namespaceIndexStart >= 0 && namespaceIndexEnd >= 0) {
        // insert doc client interfaces
        lines.splice(namespaceIndexStart + 1, (namespaceIndexEnd - namespaceIndexStart - 1), this.generateDocumentClientInterfaces(1));
        var code = lines.join('\n');
        this.writeTypingsFile('document_client', path.join(this._sdkRootDir, 'lib', 'dynamodb'), code);
    }
};

/**
 * Generates the file containing DocumentClient interfaces.
 */
TSGenerator.prototype.generateDocumentClientInterfaces = function generateDocumentClientInterfaces(tabCount) {
    tabCount = tabCount || 0;
    var self = this;
    // get the dynamodb model
    var dynamodbModel = this.loadServiceApi('dynamodb');
    var code = '';
    // stub Blob interface
    code += this.tabs(tabCount) + 'interface Blob {}\n';
    // generate shapes
    var modelShapes = dynamodbModel.shapes;
    // iterate over each shape
    var shapeKeys = Object.keys(modelShapes);
    shapeKeys.forEach(function (shapeKey) {
        var modelShape = modelShapes[shapeKey];
        // ignore exceptions
        if (modelShape.exception) {
            return;
        }
        // overwrite AttributeValue
        if (shapeKey === 'AttributeValue') {
            code += self.generateDocString('A JavaScript object or native type.', tabCount);
            code += self.tabs(tabCount) + 'export type ' + shapeKey + ' = any;\n';
            return;
        }
        code += self.generateTypingsFromShape(shapeKey, modelShape, tabCount, []);
    });
    return code;
};

/**
 * Returns a service model based on the serviceIdentifier.
 */
TSGenerator.prototype.loadServiceApi = function loadServiceApi(serviceIdentifier) {
    // first, find the correct identifier
    var metadata = this.metadata;
    var serviceFilePath = path.join(this._apiRootDir, metadata[serviceIdentifier].api_path);
    var serviceModelFile = fs.readFileSync(serviceFilePath);
    var serviceModel = JSON.parse(serviceModelFile);
    // load waiters file if it exists
    var waiterFilePath;
    if (metadata[serviceIdentifier].waiters_path) {
        waiterFilePath = path.join(this._apiRootDir, metadata[serviceIdentifier].waiters_path);
        var waiterModelFile = fs.readFileSync(waiterFilePath);
        var waiterModel = JSON.parse(waiterModelFile);
        serviceModel.waiters = waiterModel.waiters;
    }

    return serviceModel;
};

/**
 * Determines if a member is required by checking for it in a list.
 */
TSGenerator.prototype.checkRequired = function checkRequired(list, member) {
    if (list.indexOf(member) >= 0) {
        return true;
    }
    return false;
};

/**
 * Generates whitespace based on the count.
 */
TSGenerator.prototype.tabs = function tabs(count) {
    var code = '';
    for (var i = 0; i < count; i++) {
        code += '  ';
    }
    return code;
};

/**
 * Transforms documentation string to a more readable format.
 */
TSGenerator.prototype.transformDocumentation = function transformDocumentation(documentation) {
    if (!documentation) {
        return '';
    }
    documentation = documentation.replace(/<(?:.|\n)*?>/gm, '');
    documentation = documentation.replace(/\*\//g, '*');
    return documentation;
};

/**
 * Returns a doc string based on the supplied documentation.
 * Also tabs the doc string if a count is provided.
 */
TSGenerator.prototype.generateDocString = function generateDocString(documentation, tabCount) {
    tabCount = tabCount || 0;
    var code = '';
    code += this.tabs(tabCount) + '/**\n';
    code += this.tabs(tabCount) + ' * ' + this.transformDocumentation(documentation) + '\n';
    code += this.tabs(tabCount) + ' */\n';
    return code;
};

/**
 * Returns an array of custom configuration options based on a service identiffier.
 * Custom configuration options are determined by checking the metadata.json file.
 */
TSGenerator.prototype.generateCustomConfigFromMetadata = function generateCustomConfigFromMetadata(serviceIdentifier) {
    // some services have additional configuration options that are defined in the metadata.json file
    // i.e. dualstackAvailable = useDualstack
    // create reference to custom options
    var customConfigurations = [];
    var serviceMetadata = this.metadata[serviceIdentifier];
    // loop through metadata members
    for (var memberName in serviceMetadata) {
        if (!serviceMetadata.hasOwnProperty(memberName)) {
            continue;
        }
        // check configs
        switch (memberName) {
            case 'dualstackAvailable':
                customConfigurations.push(CUSTOM_CONFIG_ENUMS.DUALSTACK);
                break;
        }
    }

    return customConfigurations;
};

TSGenerator.prototype.generateSafeShapeName = function generateSafeShapeName(name, blacklist) {
    blacklist = blacklist || [];
    if (blacklist.indexOf(name) >= 0) {
        return '_' + name;
    }
    return name;
};

TSGenerator.prototype.extractTypesDependOnStream = function extractTypesDependOnStream(shapeKey, modelShape) {
    var streamTypeList = [];
    if (typeof modelShape !== "object" || Object.keys(modelShape).length === 0) {
        return [];
    }
    if (modelShape.streaming) {
        streamTypeList.push(shapeKey);
        return streamTypeList;
    }
    for (var subModelKey in modelShape) {
        var subModel = modelShape[subModelKey];
        var subStreamTypeList = this.extractTypesDependOnStream(subModelKey, subModel);
        if (Object.keys(subStreamTypeList).length !== 0) {
            for (var streamType of subStreamTypeList) {
                streamTypeList.push(streamType);
            }
        }
    }
    return streamTypeList;
}

TSGenerator.prototype.addReadableType = function addReadableType(shapeKey) {
    var code = '';
    if (this.streamTypes[shapeKey]) {
        code += '|Readable';
    } else if (shapeKey[0] === '_' && this.streamTypes[shapeKey.slice(1)]) {
        code += '|Readable';
    }
    return code;
}

/**
 * Generates a type or interface based on the shape.
 */
TSGenerator.prototype.generateTypingsFromShape = function generateTypingsFromShape(shapeKey, shape, tabCount, customClassNames) {
    // some shapes shouldn't be generated if they are javascript primitives
    var jsPrimitives = ['string', 'boolean', 'number'];
    if (jsPrimitives.indexOf(shapeKey) >= 0) {
        return '';
    }

    if (['Date', 'Blob'].indexOf(shapeKey) >= 0) {
        shapeKey = '_' + shapeKey;
    }
    // In at least one (cloudfront.Signer) case, a class on a service namespace clashes with a shape
    shapeKey = this.generateSafeShapeName(shapeKey, customClassNames);

    var self = this;
    var code = '';
    tabCount = tabCount || 0;
    var tabs = this.tabs;
    var type = shape.type;
    if (type === 'structure') {
        code += tabs(tabCount) + 'export interface ' + shapeKey + ' {\n';
        var members = shape.members;
        // cycle through members
        var memberKeys = Object.keys(members);
        memberKeys.forEach(function(memberKey) {
            // docs
            var member = members[memberKey];
            if (member.documentation) {
                code += self.generateDocString(member.documentation, tabCount + 1);
            }
            var required = self.checkRequired(shape.required || [], memberKey) ? '' : '?';
            var memberType = member.shape;
            memberType = self.generateSafeShapeName(memberType, [].concat(customClassNames, ['Date', 'Blob']));
            code += tabs(tabCount + 1) + memberKey + required + ': ' + memberType + ';\n';
        });
        code += tabs(tabCount) + '}\n';
    } else if (type === 'list') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = ' + this.generateSafeShapeName(shape.member.shape, customClassNames) + '[];\n';
    } else if (type === 'map') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = {[key: string]: ' + this.generateSafeShapeName(shape.value.shape, customClassNames) + '};\n';
    } else if (type === 'string' || type === 'character') {
        var stringType = 'string';
        if (Array.isArray(shape.enum)) {
            stringType = shape.enum.map(function(s) {
                return '"' + s + '"';
            }).join('|') + '|' + stringType;
        }
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = ' + stringType + ';\n';
    } else if (['double', 'long', 'short', 'biginteger', 'bigdecimal', 'integer', 'float'].indexOf(type) >= 0) {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = number;\n';
    } else if (type === 'timestamp') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = Date;\n';
    } else if (type === 'boolean') {
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = boolean;\n';
    } else if (type === 'blob' || type === 'binary') {     
        code += tabs(tabCount) + 'export type ' + shapeKey + ' = Buffer|Uint8Array|Blob|string'
            + self.addReadableType(shapeKey)
            +';\n';
    }
    return code;
};

/**
 * Generates a class method type for an operation.
 */
TSGenerator.prototype.generateTypingsFromOperations = function generateTypingsFromOperations(className, operation, operationName, tabCount) {
    var code = '';
    tabCount = tabCount || 0;
    var tabs = this.tabs;

    var input = operation.input;
    var output = operation.output;
    operationName = operationName.charAt(0).toLowerCase() + operationName.substring(1);

    var inputShape = input ? className + '.Types.' + input.shape : '{}';
    var outputShape = output ? className + '.Types.' + output.shape : '{}';

    if (input) {
        code += this.generateDocString(operation.documentation, tabCount);
        code += tabs(tabCount) + operationName + '(params: ' + inputShape + ', callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';
    }
    code += this.generateDocString(operation.documentation, tabCount);
    code += tabs(tabCount) + operationName + '(callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';

    return code;
};

TSGenerator.prototype.generateConfigurationServicePlaceholders = function generateConfigurationServicePlaceholders() {
    /**
     * Should create a config service placeholder
     */
    var self = this;
    var metadata = this.metadata;
    // Iterate over every service
    var serviceIdentifiers = Object.keys(metadata);
    var code = '';
    var configCode = '';
    var versionsCode = '';
    code += 'import * as AWS from \'../clients/all\';\n';
    configCode +=  'export abstract class ConfigurationServicePlaceholders {\n';
    versionsCode +=  'export interface ConfigurationServiceApiVersions {\n';
    serviceIdentifiers.forEach(function(serviceIdentifier) {
        var className = self.metadata[serviceIdentifier].name;
        configCode += self.tabs(1) + serviceIdentifier + '?: AWS.' + className + '.Types.ClientConfiguration;\n';
        versionsCode += self.tabs(1) + serviceIdentifier + '?: AWS.' + className + '.Types.apiVersion;\n';
    });
    configCode += '}\n';
    versionsCode += '}\n';

    code += configCode + versionsCode;
    this.writeTypingsFile('config_service_placeholders', path.join(this._sdkRootDir, 'lib'), code);
};

TSGenerator.prototype.getServiceApiVersions = function generateServiceApiVersions(serviceIdentifier) {
    var metadata = this.metadata;
    var versions = metadata[serviceIdentifier].versions || [];
    // transform results (to get rid of '*' and sort
    versions = versions.map(function(version) {
        return version.replace('*', '');
    }).sort();
    return versions;
};

/**
 * Generates class method types for a waiter.
 */
TSGenerator.prototype.generateTypingsFromWaiters = function generateTypingsFromWaiters(className, waiterState, waiter, underlyingOperation, tabCount) {
    var code = '';
    tabCount = tabCount || 0;
    var operationName = waiter.operation.charAt(0).toLowerCase() + waiter.operation.substring(1);
    waiterState = waiterState.charAt(0).toLowerCase() + waiterState.substring(1);
    var docString = 'Waits for the ' + waiterState + ' state by periodically calling the underlying ' + className + '.' + operationName + 'operation every ' + waiter.delay + ' seconds (at most ' + waiter.maxAttempts + ' times).';
    if (waiter.description) {
        docString += ' ' + waiter.description;
    }

    // get input and output
    var inputShape = '{}';
    var outputShape = '{}';
    if (underlyingOperation.input) {
        inputShape = className + '.Types.' + underlyingOperation.input.shape;
    }
    if (underlyingOperation.output) {
        outputShape = className + '.Types.' + underlyingOperation.output.shape;
    }

    code += this.generateDocString(docString, tabCount);
    code += this.tabs(tabCount) + 'waitFor(state: "' + waiterState + '", params: ' + inputShape + ', callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';
    code += this.generateDocString(docString, tabCount);
    code += this.tabs(tabCount) + 'waitFor(state: "' + waiterState + '", callback?: (err: AWSError, data: ' + outputShape + ') => void): Request<' + outputShape + ', AWSError>;\n';

    return code;
};

/**
 * Returns whether a service has customizations to include.
 */
TSGenerator.prototype.includeCustomService = function includeCustomService(serviceIdentifier) {
    // check services directory
    var servicesDir = path.join(this._sdkRootDir, 'lib', 'services');
    var fileNames = fs.readdirSync(servicesDir);
    fileNames = fileNames.filter(function(fileName) {
        return fileName === serviceIdentifier + '.d.ts';
    });
    return !!fileNames.length;
};

/**
 * Generates typings for classes that live on a service client namespace.
 */
TSGenerator.prototype.generateCustomNamespaceTypes = function generateCustomNamespaceTypes(serviceIdentifier, className) {
    var self = this;
    var tsCustomizationsJson = require('./ts-customizations');
    var customClasses = [];
    var code = '';

    var serviceInfo = tsCustomizationsJson[serviceIdentifier] || null;
    // exit early if no customizations found
    if (!serviceInfo) {
        return null;
    }
    code += 'declare namespace ' + className + ' {\n';
    //generate import code
    var importCode = '';
    serviceInfo.forEach(function(data) {
        var aliases = [];
        var imports = data.imports || [];
        imports.forEach(function(pair) {
            aliases.push(pair.name + ' as ' + pair.alias);
            code += self.tabs(1) + 'export import ' + pair.name + ' = ' + pair.alias + ';\n';
            customClasses.push(pair.name);
        });
        if (aliases.length) {
            importCode += 'import {' + aliases.join(', ') + '} from \'../' + data.path + '\';\n';
        }
    });
    code += '}\n';
    return {
        importCode: importCode,
        namespaceCode: code,
        customClassNames: customClasses
    };
};

/**
 * Generates the typings for a service based on the serviceIdentifier.
 */
TSGenerator.prototype.processServiceModel = function processServiceModel(serviceIdentifier) {
    var model = this.loadServiceApi(serviceIdentifier);
    var self = this;
    var code = '';
    var className = this.metadata[serviceIdentifier].name;
    var customNamespaces = this.generateCustomNamespaceTypes(serviceIdentifier, className);
    var customClassNames = customNamespaces ? customNamespaces.customClassNames : [];
    // generate imports
    code += 'import {Request} from \'../lib/request\';\n';
    code += 'import {Response} from \'../lib/response\';\n';
    code += 'import {AWSError} from \'../lib/error\';\n';
    var hasCustomizations = this.includeCustomService(serviceIdentifier);
    var parentClass = hasCustomizations ? className + 'Customizations' : 'Service';
    if (hasCustomizations) {
        code += 'import {' + parentClass + '} from \'../lib/services/' + serviceIdentifier + '\';\n';
    } else {
        code += 'import {' + parentClass + '} from \'../lib/service\';\n';
    }
    code += 'import {ServiceConfigurationOptions} from \'../lib/service\';\n';
    // get any custom config options
    var customConfig = this.generateCustomConfigFromMetadata(serviceIdentifier);
    var hasCustomConfig = !!customConfig.length;
    var customConfigTypes = ['ServiceConfigurationOptions'];
    code += 'import {ConfigBase as Config} from \'../lib/config\';\n';
    if (hasCustomConfig) {
        // generate import statements and custom config type
        customConfig.forEach(function(config) {
            code += 'import {' + config.INTERFACE + '} from \'../lib/' + config.FILE_NAME + '\';\n';
            customConfigTypes.push(config.INTERFACE);
        });
    }
    // import custom namespaces
    if (customNamespaces) {
        code += customNamespaces.importCode;
    }
    code += 'interface Blob {}\n';
    // generate methods
    var modelOperations = model.operations;
    var operationKeys = Object.keys(modelOperations);
    code += 'declare class ' + className + ' extends ' + parentClass + ' {\n';
    // create constructor
    code += this.generateDocString('Constructs a service object. This object has one method for each API operation.', 1);
    code += this.tabs(1) + 'constructor(options?: ' + className + '.Types.ClientConfiguration' + ')\n';
    code += this.tabs(1) + 'config: Config & ' + className + '.Types.ClientConfiguration' + ';\n';

    operationKeys.forEach(function (operationKey) {
        code += self.generateTypingsFromOperations(className, modelOperations[operationKey], operationKey, 1);
    });

    // generate waitFor methods
    var waiters = model.waiters || Object.create(null);
    var waiterKeys = Object.keys(waiters);
    waiterKeys.forEach(function (waitersKey) {
        var waiter = waiters[waitersKey];
        var operation = modelOperations[waiter.operation];
        code += self.generateTypingsFromWaiters(className, waitersKey, waiter, operation, 1);
    });

    code += '}\n';
    // check for static classes on namespace
    if (customNamespaces) {
        code += customNamespaces.namespaceCode;
    }

    // shapes should map to interfaces
    var modelShapes = model.shapes;
    // iterate over each shape
    var shapeKeys = Object.keys(modelShapes);
    code += 'declare namespace ' + className + ' {\n';
    // preprocess shapes to fetch out needed dependency. e.g. "streaming": true
    shapeKeys.forEach(function (shapeKey) {
        var modelShape = modelShapes[shapeKey];
        var streamTypeList = self.extractTypesDependOnStream(shapeKey, modelShape);
        for (var streamType of streamTypeList) {
            self.streamTypes[streamType] = true;
        }
    });
    shapeKeys.forEach(function (shapeKey) {
        var modelShape = modelShapes[shapeKey];
        // ignore exceptions
        if (modelShape.exception) {
            return;
        }
        code += self.generateTypingsFromShape(shapeKey, modelShape, 1, customClassNames);
    });
    //add extra dependencies like 'streaming'
    if (Object.keys(self.streamTypes).length !== 0) {
        var insertPos = code.indexOf('interface Blob {}');
        code = code.slice(0, insertPos) + 'import {Readable} from \'stream\';\n' + code.slice(insertPos);
    }

    this.streamTypes = {};

    code += this.generateDocString('A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify \'latest\' to use the latest possible version.', 1);
    code += this.tabs(1) + 'export type apiVersion = "' + this.getServiceApiVersions(serviceIdentifier).join('"|"') + '"|"latest"|string;\n';
    code += this.tabs(1) + 'export interface ClientApiVersions {\n';
    code += this.generateDocString('A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify \'latest\' to use the latest possible version.', 2);
    code += this.tabs(2) + 'apiVersion?: apiVersion;\n';
    code += this.tabs(1) + '}\n';
    code += this.tabs(1) + 'export type ClientConfiguration = ' + customConfigTypes.join(' & ') + ' & ClientApiVersions;\n';
    // export interfaces under Types namespace for backwards-compatibility
    code += this.generateDocString('Contains interfaces for use with the ' + className + ' client.', 1);
    code += this.tabs(1) + 'export import Types = ' + className + ';\n';
    code += '}\n';

    code += 'export = ' + className + ';\n';
    return code;
};

/**
 * Write Typings file to the specified directory.
 */
TSGenerator.prototype.writeTypingsFile = function writeTypingsFile(name, directory, code) {
    fs.writeFileSync(path.join(directory, name + '.d.ts'), code);
};

/**
 * Create the typescript definition files for every service.
 */
TSGenerator.prototype.generateAllClientTypings = function generateAllClientTypings() {
    var self = this;
    var metadata = this.metadata;
    // Iterate over every service
    var serviceIdentifiers = Object.keys(metadata);
    serviceIdentifiers.forEach(function(serviceIdentifier) {
        var code = self.processServiceModel(serviceIdentifier);
        self.writeTypingsFile(serviceIdentifier, self._clientsDir, code);
    });
};

/**
 * Create the typescript definition files for the all and browser_default exports.
 */
TSGenerator.prototype.generateGroupedClients = function generateGroupedClients() {
    var metadata = this.metadata;
    var allCode = '';
    var browserCode = '';
    // Iterate over every service
    var serviceIdentifiers = Object.keys(metadata);
    serviceIdentifiers.forEach(function(serviceIdentifier) {
        var className = metadata[serviceIdentifier].name;
        var code = 'export import ' + className + ' = require(\'./' + serviceIdentifier + '\');\n';
        allCode += code;
        if (metadata[serviceIdentifier].cors) {
            browserCode += code;
        }
    });
    this.writeTypingsFile('all', this._clientsDir, allCode);
    this.writeTypingsFile('browser_default', this._clientsDir, browserCode);
};

module.exports = TSGenerator;