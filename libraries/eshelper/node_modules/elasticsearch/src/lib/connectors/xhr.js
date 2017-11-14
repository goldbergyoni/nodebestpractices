/**
 * Generic Transport for the browser, using the XmlHttpRequest object
 *
 * @class  connections.Xhr
 */
module.exports = XhrConnector;

/* jshint browser:true */

var _ = require('../utils');
var ConnectionAbstract = require('../connection');
var ConnectionFault = require('../errors').ConnectionFault;
var asyncDefault = !(navigator && /PhantomJS/i.test(navigator.userAgent));

function XhrConnector(host, config) {
  ConnectionAbstract.call(this, host, config);
}
_.inherits(XhrConnector, ConnectionAbstract);

/**
 * Simply returns an XHR object cross browser
 * @type {Function}
 */
var getXhr = _.noop;

if (typeof XMLHttpRequest !== 'undefined') {
  // rewrite the getXhr method to always return the native implementation
  getXhr = function () {
    return new XMLHttpRequest();
  };
} else {
  // find the first MS implementation available
  getXhr = _(['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'])
  .map(function (appName) {
    /* jshint unused: false */
    try {
      var test = new window.ActiveXObject(appName); // eslint-disable-line no-unused-vars
      return function () {
        return new window.ActiveXObject(appName);
      };
    } catch (e) {
      return false;
    }
  })
  .compact()
  .first();
}

if (!getXhr) {
  throw new Error('getXhr(): XMLHttpRequest not available');
}

XhrConnector.prototype.request = function (params, cb) {
  var xhr = getXhr();
  var timeoutId;
  var host = this.host;
  var log = this.log;

  var url = host.makeUrl(params);
  var headers = host.getHeaders(params.headers);
  var async = params.async === false ? false : asyncDefault;

  xhr.open(params.method || 'GET', url, async);

  if (headers) {
    for (var key in headers) {
      if (headers[key] !== void 0) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      clearTimeout(timeoutId);
      log.trace(params.method, url, params.body, xhr.responseText, xhr.status);
      var err = xhr.status ? void 0 : new ConnectionFault(xhr.statusText || 'Request failed to complete.');
      cb(err, xhr.responseText, xhr.status);
    }
  };

  xhr.send(params.body || void 0);

  return function () {
    xhr.abort();
  };
};
