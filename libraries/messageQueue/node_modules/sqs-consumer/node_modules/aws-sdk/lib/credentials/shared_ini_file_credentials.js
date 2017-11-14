var AWS = require('../core');
var path = require('path');
var SharedIniFile = require('../shared_ini');
var STS = require('../../clients/sts');

/**
 * Represents credentials loaded from shared credentials file
 * (defaulting to ~/.aws/credentials or defined by the
 * `AWS_SHARED_CREDENTIALS_FILE` environment variable).
 *
 * ## Using the shared credentials file
 *
 * This provider is checked by default in the Node.js environment. To use the
 * credentials file provider, simply add your access and secret keys to the
 * ~/.aws/credentials file in the following format:
 *
 *     [default]
 *     aws_access_key_id = AKID...
 *     aws_secret_access_key = YOUR_SECRET_KEY
 *
 * ## Using custom profiles
 *
 * The SDK supports loading credentials for separate profiles. This can be done
 * in two ways:
 *
 * 1. Set the `AWS_PROFILE` environment variable in your process prior to
 *    loading the SDK.
 * 2. Directly load the AWS.SharedIniFileCredentials provider:
 *
 * ```javascript
 * var creds = new AWS.SharedIniFileCredentials({profile: 'myprofile'});
 * AWS.config.credentials = creds;
 * ```
 *
 * @!macro nobrowser
 */
AWS.SharedIniFileCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new SharedIniFileCredentials object.
   *
   * @param options [map] a set of options
   * @option options profile [String] (AWS_PROFILE env var or 'default')
   *   the name of the profile to load.
   * @option options filename [String] ('~/.aws/credentials' or defined by
   *   AWS_SHARED_CREDENTIALS_FILE process env var)
   *   the filename to use when loading credentials.
   * @option options disableAssumeRole [Boolean] (false) True to disable
   *   support for profiles that assume an IAM role. If true, and an assume
   *   role profile is selected, an error is raised.
   */
  constructor: function SharedIniFileCredentials(options) {
    AWS.Credentials.call(this);

    options = options || {};

    this.filename = options.filename;
    this.profile = options.profile || process.env.AWS_PROFILE || AWS.util.defaultProfile;
    this.disableAssumeRole = Boolean(options.disableAssumeRole);
    this.get(function() {});
  },

  /**
   * Loads the credentials from the shared credentials file
   *
   * @callback callback function(err)
   *   Called after the shared INI file on disk is read and parsed. When this
   *   callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    if (!callback) callback = function(err) { if (err) throw err; };
    try {
      var profiles = {};
      var i, availableProfiles;
      if (process.env[AWS.util.configOptInEnv]) {
        var config = new SharedIniFile({
          isConfig: true,
          filename: process.env[AWS.util.sharedConfigFileEnv]
        });
        for (i = 0, availableProfiles = config.getProfiles(); i < availableProfiles.length; i++) {
          profiles[availableProfiles[i]] = config.getProfile(availableProfiles[i]);
        }
      }
      var creds = new SharedIniFile({
        filename: this.filename ||
          (process.env[AWS.util.configOptInEnv] && process.env[AWS.util.sharedCredentialsFileEnv])
      });
      for (i = 0, availableProfiles = creds.getProfiles(); i < availableProfiles.length; i++) {
        profiles[availableProfiles[i]] = creds.getProfile(availableProfiles[i]);
      }
      var profile = profiles[this.profile] || {};

      if (Object.keys(profile).length === 0) {
        throw AWS.util.error(
          new Error('Profile ' + this.profile + ' not found'),
          { code: 'SharedIniFileCredentialsProviderFailure' }
        );
      }

      if (profile['role_arn']) {
        this.loadRoleProfile(profiles, profile, callback);
        return;
      }

      this.accessKeyId = profile['aws_access_key_id'];
      this.secretAccessKey = profile['aws_secret_access_key'];
      this.sessionToken = profile['aws_session_token'];

      if (!this.accessKeyId || !this.secretAccessKey) {
        throw AWS.util.error(
          new Error('Credentials not set for profile ' + this.profile),
          { code: 'SharedIniFileCredentialsProviderFailure' }
        );
      }
      this.expired = false;
      callback();
    } catch (err) {
      callback(err);
    }
  },

  /**
   * @api private
   */
  loadRoleProfile: function loadRoleProfile(creds, roleProfile, callback) {
    if (this.disableAssumeRole) {
      throw AWS.util.error(
        new Error('Role assumption profiles are disabled. ' +
                  'Failed to load profile ' + this.profile +
                  ' from ' + creds.filename),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    var self = this;
    var roleArn = roleProfile['role_arn'];
    var roleSessionName = roleProfile['role_session_name'];
    var externalId = roleProfile['external_id'];
    var sourceProfileName = roleProfile['source_profile'];

    if (!sourceProfileName) {
      throw AWS.util.error(
        new Error('source_profile is not set using profile ' + this.profile),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    var sourceProfile = creds[sourceProfileName];

    if (typeof sourceProfile !== 'object') {
      throw AWS.util.error(
        new Error('source_profile ' + sourceProfileName + ' using profile '
          + this.profile + ' does not exist'),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    this.roleArn = roleArn;

    var sourceCredentials = {
      accessKeyId: sourceProfile['aws_access_key_id'],
      secretAccessKey: sourceProfile['aws_secret_access_key'],
      sessionToken: sourceProfile['aws_session_token']
    };

    if (!sourceCredentials.accessKeyId || !sourceCredentials.secretAccessKey) {
      throw AWS.util.error(
        new Error('Credentials not set in source_profile ' +
                  sourceProfileName + ' using profile ' + this.profile),
        { code: 'SharedIniFileCredentialsProviderFailure' }
      );
    }

    var sts = new STS({
      credentials: new AWS.Credentials(sourceCredentials)
    });

    var roleParams = {
      RoleArn: roleArn,
      RoleSessionName: roleSessionName || 'aws-sdk-js-' + Date.now()
    };

    if (externalId) {
      roleParams.ExternalId = externalId;
    }

    sts.assumeRole(roleParams, function (err, data) {
      if (err) {
        callback(err);
        return;
      }

      self.accessKeyId = data.Credentials.AccessKeyId;
      self.secretAccessKey = data.Credentials.SecretAccessKey;
      self.sessionToken = data.Credentials.SessionToken;
      self.expireTime = data.Credentials.Expiration;
      callback();
    });
  }
});
