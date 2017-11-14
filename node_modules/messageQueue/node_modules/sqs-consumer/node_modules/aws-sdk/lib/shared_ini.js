var AWS = require('./core');
var os = require('os');
var path = require('path');

/**
 * @api private
 */
module.exports = AWS.util.inherit({
  constructor: function SharedIniFile(options) {
    options = options || {};

    this.isConfig = options.isConfig === true;
    this.filename = options.filename || this.getDefaultFilepath();
  },

  ensureFileLoaded: function loadFile() {
    if (!this.parsedContents) {
      this.parsedContents = AWS.util.ini.parse(
        AWS.util.readFileSync(this.filename)
      );
    }
  },

  getDefaultFilepath: function getDefaultFilepath() {
    return path.join(
      this.getHomeDir(),
      '.aws',
      this.isConfig ? 'config' : 'credentials'
    );
  },

  getHomeDir: function getHomeDir() {
    var env = process.env;
    var home = env.HOME ||
      env.USERPROFILE ||
      (env.HOMEPATH ? ((env.HOMEDRIVE || 'C:/') + env.HOMEPATH) : null);

    if (home) {
      return home;
    }

    if (typeof os.homedir === 'function') {
      return os.homedir();
    }

    throw AWS.util.error(
      new Error('Cannot load credentials, HOME path not set')
    );
  },

  getProfile: function loadProfile(profile) {
    this.ensureFileLoaded();

    var profileIndex = profile !== AWS.util.defaultProfile && this.isConfig ?
      'profile ' + profile : profile;

    return this.parsedContents[profileIndex];
  },

  getProfiles: function loadProfileNames() {
    this.ensureFileLoaded();
    var isConfig = this.isConfig;

    return Object.keys(this.parsedContents).map(function(profileName) {
      if (isConfig) {
        return profileName.replace(/^profile\s/, '');
      }

      return profileName;
    });
  }
});
