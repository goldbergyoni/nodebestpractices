var AWS = require('../core');

/**
 * Represents credentials received from relative URI specified in the ECS container.
 *
 * This class will request refreshable credentials from the relative URI
 * specified by the AWS_CONTAINER_CREDENTIALS_RELATIVE_URI environment variable
 * in the container. If valid credentials are returned in the response, these
 * will be used with zero configuration.
 *
 * This credentials class will by default timeout after 1 second of inactivity
 * and retry 3 times.
 * If your requests to the relative URI are timing out, you can increase
 * the value by configuring them directly:
 *
 * ```javascript
 * AWS.config.credentials = new AWS.ECSCredentials({
 *   httpOptions: { timeout: 5000 }, // 5 second timeout
 *   maxRetries: 10, // retry 10 times
 *   retryDelayOptions: { base: 200 } // see AWS.Config for information
 * });
 * ```
 *
 * @see AWS.Config.retryDelayOptions
 *
 * @!macro nobrowser
 */
AWS.ECSCredentials = AWS.util.inherit(AWS.Credentials, {
  constructor: function ECSCredentials(options) {
    AWS.Credentials.call(this);
    options = options ? AWS.util.copy(options) : {};
    if (!options.httpOptions) options.httpOptions = {};
    options.httpOptions = AWS.util.merge(
      this.httpOptions, options.httpOptions);
    AWS.util.update(this, options);
  },

  /**
   * @api private
   */
  httpOptions: { timeout: 1000 },

  /**
   * @api private
   */
  host: '169.254.170.2',

  /**
   * @api private
   */
  maxRetries: 3,

  /**
   * Sets the name of the ECS environment variable to check for relative URI
   * If changed, please change the name in the documentation for defaultProvider
   * in credential_provider_chain.js and in all tests in test/credentials.spec.coffee
   *
   * @api private
   */
  environmentVar: 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',

  /**
   * @api private
   */
  getECSRelativeUri: function getECSRelativeUri() {
    if (process && process.env) return process.env[this.environmentVar];
  },

  /**
   * @api private
   */
  credsFormatIsValid: function credsFormatIsValid(credData) {
    return (!!credData.AccessKeyId && !!credData.SecretAccessKey &&
      !!credData.Token && !!credData.Expiration);
  },

  /**
   * @api private
   */
  request: function request(path, callback) {
    path = path || '/';
    var httpRequest = new AWS.HttpRequest('http://' + this.host + path);
    httpRequest.method = 'GET';
    httpRequest.headers.Accept = 'application/json';
    AWS.util.handleRequestWithRetries(httpRequest, this, callback);
  },

  /**
   * @api private
   */
  refreshQueue: [],

  /**
   * Loads the credentials from the relative URI specified by container
   *
   * @callback callback function(err)
   *   Called when the request to the relative URI responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, `sessionToken`, and `expireTime` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    var self = this;
    var refreshQueue = self.refreshQueue;
    if (!callback) callback = function(err) { if (err) throw err; };
    refreshQueue.push({
      provider: self,
      errCallback: callback
    });
    if (refreshQueue.length > 1) { return; }

    function callbacks(err, creds) {
      var call, cb;
      while ((call = refreshQueue.shift()) !== undefined) {
        cb = call.errCallback;
        if (!err) AWS.util.update(call.provider, creds);
        cb(err);
      }
    }

    if (process === undefined) {
      callbacks(AWS.util.error(
        new Error('No process info available'),
        { code: 'ECSCredentialsProviderFailure' }
      ));
      return;
    }
    var relativeUri = this.getECSRelativeUri();
    if (relativeUri === undefined) {
      callbacks(AWS.util.error(
        new Error('Variable ' + this.environmentVar + ' not set.'),
        { code: 'ECSCredentialsProviderFailure' }
      ));
      return;
    }

    this.request(relativeUri, function(err, data) {
      if (!err) {
        try {
          data = JSON.parse(data);
          if (self.credsFormatIsValid(data)) {
            var creds = {
              expired: false,
              accessKeyId: data.AccessKeyId,
              secretAccessKey: data.SecretAccessKey,
              sessionToken: data.Token,
              expireTime: new Date(data.Expiration)
            };
          } else {
            throw AWS.util.error(
              new Error('Response data is not in valid format'),
              { code: 'ECSCredentialsProviderFailure' }
            );
          }
        } catch (dataError) {
          err = dataError;
        }
      }
      callbacks(err, creds);
    });
  }
});
