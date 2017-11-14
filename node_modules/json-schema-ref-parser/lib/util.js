'use strict';

var debug               = require('debug'),
    isWindows           = /^win/.test(process.platform),
    forwardSlashPattern = /\//g,
    protocolPattern     = /^[a-z0-9.+-]+:\/\//i;

// RegExp patterns to URL-encode special characters in local filesystem paths
var urlEncodePatterns = [
  /\?/g, '%3F',
  /\#/g, '%23',
  isWindows ? /\\/g : /\//, '/'
];

// RegExp patterns to URL-decode special characters for local filesystem paths
var urlDecodePatterns = [
  /\%23/g, '#',
  /\%24/g, '$',
  /\%26/g, '&',
  /\%2C/g, ',',
  /\%40/g, '@'
];

/**
 * Writes messages to stdout.
 * Log messages are suppressed by default, but can be enabled by setting the DEBUG variable.
 * @type {function}
 */
exports.debug = debug('json-schema-ref-parser');

/**
 * Utility functions for working with paths and URLs.
 */
exports.path = {};

/**
 * Returns the current working directory (in Node) or the current page URL (in browsers).
 *
 * @returns {string}
 */
exports.path.cwd = function cwd() {
  return process.browser ? location.href : process.cwd() + '/';
};

/**
 * Determines whether the given path is a URL.
 *
 * @param   {string} path
 * @returns {boolean}
 */
exports.path.isUrl = function isUrl(path) {
  return protocolPattern.test(path);
};

/**
 * If the given path is a local filesystem path, it is converted to a URL.
 *
 * @param {string} path
 * @returns {string}
 */
exports.path.localPathToUrl = function localPathToUrl(path) {
  if (!process.browser && !exports.path.isUrl(path)) {
    // Manually encode characters that are not encoded by `encodeURI`
    for (var i = 0; i < urlEncodePatterns.length; i += 2) {
      path = path.replace(urlEncodePatterns[i], urlEncodePatterns[i + 1]);
    }
    path = encodeURI(path);
  }
  return path;
};

/**
 * Converts a URL to a local filesystem path
 *
 * @param {string} url
 * @returns {string}
 */
exports.path.urlToLocalPath = function urlToLocalPath(url) {
  url = decodeURI(url);
  // Manually decode characters that are not decoded by `decodeURI`
  for (var i = 0; i < urlDecodePatterns.length; i += 2) {
    url = url.replace(urlDecodePatterns[i], urlDecodePatterns[i + 1]);
  }
  if (isWindows) {
    url = url.replace(forwardSlashPattern, '\\');
  }
  return url;
};

/**
 * Returns the hash (URL fragment), if any, of the given path.
 *
 * @param   {string} path
 * @returns {string}
 */
exports.path.getHash = function getHash(path) {
  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    return path.substr(hashIndex);
  }
  return '';
};

/**
 * Removes the hash (URL fragment), if any, from the given path.
 *
 * @param   {string} path
 * @returns {string}
 */
exports.path.stripHash = function stripHash(path) {
  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    path = path.substr(0, hashIndex);
  }
  return path;
};

/**
 * Returns the file extension of the given path.
 *
 * @param   {string} path
 * @returns {string}
 */
exports.path.extname = function extname(path) {
  var lastDot = path.lastIndexOf('.');
  if (lastDot >= 0) {
    return path.substr(lastDot).toLowerCase();
  }
  return '';
};
