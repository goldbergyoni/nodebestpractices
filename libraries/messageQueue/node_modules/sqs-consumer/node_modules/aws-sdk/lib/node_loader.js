var util = require('./util');

// node.js specific modules
util.crypto.lib = require('crypto');
util.Buffer = require('buffer').Buffer;
util.domain = require('domain');
util.stream = require('stream');
util.url = require('url');
util.querystring = require('querystring');
util.environment = 'nodejs';
var AWS;
module.exports = AWS = require('./core');

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

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

var SharedIniFile = require('./shared_ini');

// Setup default chain providers
// If this changes, please update documentation for
// AWS.CredentialProviderChain.defaultProviders in
// credentials/credential_provider_chain.js
AWS.CredentialProviderChain.defaultProviders = [
  function () { return new AWS.EnvironmentCredentials('AWS'); },
  function () { return new AWS.EnvironmentCredentials('AMAZON'); },
  function () { return new AWS.SharedIniFileCredentials(); },
  function () {
    if (AWS.ECSCredentials.prototype.isConfiguredForEcsCredentials()) {
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
    var env = process.env;
    var region = env.AWS_REGION || env.AMAZON_REGION;
    if (env[AWS.util.configOptInEnv]) {
      var toCheck = [
        {filename: env[AWS.util.sharedCredentialsFileEnv]},
        {isConfig: true, filename: env[AWS.util.sharedConfigFileEnv]}
      ];
      while (!region && toCheck.length) {
        var configFile = new SharedIniFile(toCheck.shift());
        var profile = configFile.getProfile(
          env.AWS_PROFILE || AWS.util.defaultProfile
        );
        region = profile && profile.region;
      }
    }
    return region;
  }
});

// Reset configuration
AWS.config = new AWS.Config();
