var util = require('./util');

// node.js specific modules
util.crypto.lib = require('crypto');
util.Buffer = require('buffer').Buffer;
util.domain = require('domain');
util.stream = require('stream');
util.url = require('url');
util.querystring = require('querystring');

var AWS = require('./core');

// Use default API loader function
require('./api_loader');

// Load the xml2js XML parser
AWS.XML.Parser = require('./xml/node_parser');

// Load Node HTTP client
require('./http/node');

// Load custom credential providers
require('./credentials/ec2_metadata_credentials');
require('./credentials/ecs_credentials');
require('./credentials/environment_credentials');
require('./credentials/file_system_credentials');
require('./credentials/shared_ini_file_credentials');

// Setup default chain providers
// If this changes, please update documentation for
// AWS.CredentialProviderChain.defaultProviders in
// credentials/credential_provider_chain.js
AWS.CredentialProviderChain.defaultProviders = [
  function () { return new AWS.EnvironmentCredentials('AWS'); },
  function () { return new AWS.EnvironmentCredentials('AMAZON'); },
  function () { return new AWS.SharedIniFileCredentials(); },
  function () {
    if (AWS.ECSCredentials.prototype.getECSRelativeUri() !== undefined) {
      return new AWS.ECSCredentials();
    }
    return new AWS.EC2MetadataCredentials();
  }
];

// Update configuration keys
AWS.util.update(AWS.Config.prototype.keys, {
  credentials: function () {
    var credentials = null;
    new AWS.CredentialProviderChain([
      function () { return new AWS.EnvironmentCredentials('AWS'); },
      function () { return new AWS.EnvironmentCredentials('AMAZON'); },
      function () { return new AWS.SharedIniFileCredentials({ disableAssumeRole: true }); }
    ]).resolve(function(err, creds) {
      if (!err) credentials = creds;
    });
    return credentials;
  },
  credentialProvider: function() {
    return new AWS.CredentialProviderChain();
  },
  region: function() {
    return process.env.AWS_REGION || process.env.AMAZON_REGION;
  }
});

// Reset configuration
AWS.config = new AWS.Config();
