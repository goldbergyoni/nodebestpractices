var AWS = require('./core');
// react-native specific modules
AWS.util.crypto.lib = require('crypto-browserify');
AWS.util.Buffer = require('buffer/').Buffer;
AWS.util.url = require('url/');
AWS.util.querystring = require('querystring/');
AWS.util.environment = 'js-react-native';

module.exports = AWS;

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/node_parser');

// Load the XHR HttpClient
require('./http/xhr');

// add custom request event handlers
var addContentType = require('./react-native/add-content-type').addContentType;
AWS.EventListeners.Core.addNamedListeners(function(add) {
  add('ADD_CONTENT_TYPE', 'afterBuild', addContentType);
});

if (typeof process === 'undefined') {
  process = {};
}
process.browser = true;