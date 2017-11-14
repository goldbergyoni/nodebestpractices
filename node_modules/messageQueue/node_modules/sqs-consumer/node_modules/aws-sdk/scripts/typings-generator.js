var path = require('path');
var TSGenerator = require('./lib/ts-generator');


var tsGenerator = new TSGenerator({
    SdkRootDirectory: path.join(__dirname, '..')
});

tsGenerator.generateAllClientTypings();
tsGenerator.generateGroupedClients();
tsGenerator.updateDynamoDBDocumentClient();
tsGenerator.generateConfigurationServicePlaceholders();
console.log('TypeScript Definitions created.');


