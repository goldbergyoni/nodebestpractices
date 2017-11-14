var jsonFile = require('./jsonfile')

jsonFile.outputJsonSync = require('./output-json-sync')
jsonFile.outputJson = require('./output-json')
// aliases
jsonFile.outputJSONSync = require('./output-json-sync')
jsonFile.outputJSON = require('./output-json')

module.exports = jsonFile
