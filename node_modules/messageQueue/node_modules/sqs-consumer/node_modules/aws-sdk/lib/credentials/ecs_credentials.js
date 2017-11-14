var AWS = require('../core'),
  ENV_RELATIVE_URI = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',
  ENV_FULL_URI = 'AWS_CONTAINER_CREDENTIALS_FULL_URI',
  ENV_AUTH_TOKEN = 'AWS_CONTAINER_AUTHORIZATION_TOKEN',
  FULL_URI_ALLOWED_PROTOCOLS = ['http:', 'https:'],
  FULL_URI_ALLOWED_HOSTNAMES = ['localhost', '127.0.0.1'],
  RELATIVE_URI_HOST = '169.254.170.2';

/**
 * Represents credentials received from relative URI specified in the ECS container.
 *
 * This class will request refreshable credentials from the relative URI
 * specified by the AWS_CONTAINER_CREDENTIALS_RELATIVE_URI or the
 * AWS_CONTAINER_CREDENTIALS_FULL_URI environment variable. If valid credentials
 * are returned in the response, these will be used with zero configuration.
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
  maxRetries: 3,

  /**
   * @api private
   */
  isConfiguredForEcsCredentials: function isConfiguredForEcsCredentials() {
    return Boolean(
        process &&
        process.env &&
        (process.env[ENV_RELATIVE_URI] || process.env[ENV_FULL_URI])
    );
  },

  /**
   * @api private
   */
  getECSFullUri: function getECSFullUri() {
    if (process && process.env) {
      var relative = process.env[ENV_RELATIVE_URI],
          full = process.env[ENV_FULL_URI];
      if (relative) {
        return 'http://' + RELATIVE_URI_HOST + relative;
      } else if (full) {
        var parsed = AWS.util.urlParse(full);
        if (FULL_URI_ALLOWED_PROTOCOLS.indexOf(parsed.protocol) < 0) {
          throw AWS.util.error(
            new Error('Unsupported protocol:  AWS.ECSCredentials supports '
              + FULL_URI_ALLOWED_PROTOCOLS.join(',') + ' only; '
              + parsed.protocol + ' requested.'),
            { code: 'ECSCredentialsProviderFailure' }
          );
        }

        if (FULL_URI_ALLOWED_HOSTNAMES.indexOf(parsed.hostname) < 0) {
          throw AWS.util.error(
            new Error('Unsupported hostname: AWS.ECSCredentials supports '
              + FULL_URI_ALLOWED_HOSTNAMES.join(',') + ' only; '
              + parsed.hostname + ' requested.'),
            { code: 'ECSCredentialsProviderFailure' }
          );
        }

        return full;
      }
    }
  },

  /**
   * @api private
   */
  getECSAuthToken: function getECSAuthToken() {
    if (process && process.env && process.env[ENV_FULL_URI]) {
      return process.env[ENV_AUTH_TOKEN];
    }
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
  request: function request(url, callback) {
    var httpRequest = new AWS.HttpRequest(url);
    httpRequest.method = 'GET';
    httpRequest.headers.Accept = 'application/json';
    var token = this.getECSAuthToken();
    if (token) {
      httpRequest.headers.Authorization = token;
    }
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
    var fullUri = this.getECSFullUri();
    if (fullUri === undefined) {
      callbacks(AWS.util.error(
        new Error('Variable ' + ENV_RELATIVE_URI + ' or ' + ENV_FULL_URI +
          ' must be set to use AWS.ECSCredentials.'),
        { code: 'ECSCredentialsProviderFailure' }
      ));
      return;
    }

    this.request(fullUri, function(err, data) {
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
