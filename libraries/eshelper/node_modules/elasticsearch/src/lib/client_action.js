
var _ = require('./utils');

/**
 * Constructs a client action factory that uses specific defaults
 * @type {Function}
 */
exports.makeFactoryWithModifier = makeFactoryWithModifier;

/**
 * Constructs a function that can be called to make a request to ES
 * @type {Function}
 */
exports.factory = makeFactoryWithModifier();

/**
 * Constructs a proxy to another api method
 * @type {Function}
 */
exports.proxyFactory = exports.factory.proxy;

// export so that we can test this
exports._resolveUrl = resolveUrl;

exports.ApiNamespace = function () {};
exports.namespaceFactory = function () {
  function ClientNamespace(transport, client) {
    this.transport = transport;
    this.client = client;
  }

  ClientNamespace.prototype = new exports.ApiNamespace();

  return ClientNamespace;
};

function makeFactoryWithModifier(modifier) {
  modifier = modifier || _.identity;

  var factory = function (spec) {
    spec = modifier(spec);

    if (!_.isPlainObject(spec.params)) {
      spec.params = {};
    }

    if (!spec.method) {
      spec.method = 'GET';
    }

    function action(params, cb) {
      if (typeof params === 'function') {
        cb = params;
        params = {};
      } else {
        params = params || {};
        cb = typeof cb === 'function' ? cb : null;
      }

      try {
        return exec(this.transport, spec, _.clone(params), cb);
      } catch (e) {
        if (typeof cb === 'function') {
          _.nextTick(cb, e);
        } else {
          var def = this.transport.defer();
          def.reject(e);
          return def.promise;
        }
      }
    }

    action.spec = spec;

    return action;
  };

  factory.proxy = function (fn, spec) {
    return function (params, cb) {
      if (typeof params === 'function') {
        cb = params;
        params = {};
      } else {
        params = params || {};
        cb = typeof cb === 'function' ? cb : null;
      }

      if (spec.transform) {
        spec.transform(params);
      }

      return fn.call(this, params, cb);
    };
  };

  return factory;
}

var castType = {
  'enum': function validSelection(param, val, name) {
    if (_.isString(val) && val.indexOf(',') > -1) {
      val = commaSepList(val);
    }

    if (_.isArray(val)) {
      return val.map(function (v) {
        return validSelection(param, v, name);
      }).join(',');
    }

    for (var i = 0; i < param.options.length; i++) {
      if (param.options[i] === String(val)) {
        return param.options[i];
      }
    }
    throw new TypeError('Invalid ' + name + ': expected ' + (
      param.options.length > 1
      ? 'one of ' + param.options.join(',')
      : param.options[0]
    ));
  },
  duration: function (param, val, name) {
    if (_.isNumeric(val) || _.isInterval(val)) {
      return val;
    } else {
      throw new TypeError(
        'Invalid ' + name + ': expected a number or interval ' +
        '(an integer followed by one of M, w, d, h, m, s, y or ms).'
      );
    }
  },
  list: function (param, val, name) {
    switch (typeof val) {
      case 'number':
      case 'boolean':
        return '' + val;
      case 'string':
        val = commaSepList(val);
      /* falls through */
      case 'object':
        if (_.isArray(val)) {
          return val.join(',');
        }
      /* falls through */
      default:
        throw new TypeError('Invalid ' + name + ': expected be a comma separated list, array, number or string.');
    }
  },
  'boolean': function (param, val) {
    val = _.isString(val) ? val.toLowerCase() : val;
    return (val === 'no' || val === 'off') ? false : !!val;
  },
  number: function (param, val, name) {
    if (_.isNumeric(val)) {
      return val * 1;
    } else {
      throw new TypeError('Invalid ' + name + ': expected a number.');
    }
  },
  string: function (param, val, name) {
    switch (typeof val) {
      case 'number':
      case 'string':
        return '' + val;
      default:
        throw new TypeError('Invalid ' + name + ': expected a string.');
    }
  },
  time: function (param, val, name) {
    if (typeof val === 'string') {
      return val;
    }
    else if (_.isNumeric(val)) {
      return '' + val;
    }
    else if (val instanceof Date) {
      return '' + val.getTime();
    }
    else {
      throw new TypeError('Invalid ' + name + ': expected some sort of time.');
    }
  }
};

function resolveUrl(url, params) {
  var vars = {}, i, key;

  if (url.req) {
    // url has required params
    if (!url.reqParamKeys) {
      // create cached key list on demand
      url.reqParamKeys = _.keys(url.req);
    }

    for (i = 0; i < url.reqParamKeys.length; i ++) {
      key = url.reqParamKeys[i];
      if (!params.hasOwnProperty(key) || params[key] == null) {
        // missing a required param
        return false;
      } else {
        // cast of copy required param
        if (castType[url.req[key].type]) {
          vars[key] = castType[url.req[key].type](url.req[key], params[key], key);
        } else {
          vars[key] = params[key];
        }
      }
    }
  }

  if (url.opt) {
    // url has optional params
    if (!url.optParamKeys) {
      url.optParamKeys = _.keys(url.opt);
    }

    for (i = 0; i < url.optParamKeys.length; i ++) {
      key = url.optParamKeys[i];
      if (params[key]) {
        if (castType[url.opt[key].type] || params[key] == null) {
          vars[key] = castType[url.opt[key].type](url.opt[key], params[key], key);
        } else {
          vars[key] = params[key];
        }
      } else {
        vars[key] = url.opt[key]['default'];
      }
    }
  }

  if (!url.template) {
    // compile the template on demand
    url.template = _.template(url.fmt);
  }

  return url.template(_.transform(vars, function (note, val, name) {
    // encode each value
    note[name] = encodeURIComponent(val);
    // remove it from the params so that it isn't sent to the final request
    delete params[name];
  }, {}));
}


function exec(transport, spec, params, cb) {
  var request = {
    method: spec.method
  };
  var query = {};
  var i;

  // pass the timeout from the spec
  if (spec.requestTimeout) {
    request.requestTimeout = spec.requestTimeout;
  }

  if (!params.body && spec.paramAsBody) {
    if (typeof spec.paramAsBody === 'object') {
      params.body = {};
      if (spec.paramAsBody.castToArray) {
        params.body[spec.paramAsBody.body] = [].concat(params[spec.paramAsBody.param]);
      } else {
        params.body[spec.paramAsBody.body] = params[spec.paramAsBody.param];
      }
      delete params[spec.paramAsBody.param];
    } else {
      params.body = params[spec.paramAsBody];
      delete params[spec.paramAsBody];
    }
  }

  // verify that we have the body if needed
  if (spec.needsBody && !params.body) {
    throw new TypeError('A request body is required.');
  }

  // control params
  if (spec.bulkBody) {
    request.bulkBody = true;
  }

  if (spec.method === 'HEAD') {
    request.castExists = true;
  }

  // pick the url
  if (spec.url) {
    // only one url option
    request.path = resolveUrl(spec.url, params);
  } else {
    for (i = 0; i < spec.urls.length; i++) {
      if (request.path = resolveUrl(spec.urls[i], params)) {
        break;
      }
    }
  }

  if (!request.path) {
    // there must have been some mimimun requirements that were not met
    var minUrl = spec.url || spec.urls[spec.urls.length - 1];
    throw new TypeError('Unable to build a path with those params. Supply at least ' + _.keys(minUrl.req).join(', '));
  }

  // build the query string
  if (!spec.paramKeys) {
    // build a key list on demand
    spec.paramKeys = _.keys(spec.params);
    spec.requireParamKeys = _.transform(spec.params, function (req, param, key) {
      if (param.required) {
        req.push(key);
      }
    }, []);
  }

  for (var key in params) {
    if (params.hasOwnProperty(key) && params[key] != null) {
      switch (key) {
        case 'body':
        case 'headers':
        case 'requestTimeout':
        case 'maxRetries':
          request[key] = params[key];
          break;
        case 'ignore':
          request.ignore = _.isArray(params[key]) ? params[key] : [params[key]];
          break;
        case 'method':
          request.method = _.toUpperString(params[key]);
          break;
        default:
          var paramSpec = spec.params[key];
          if (paramSpec) {
          // param keys don't always match the param name, in those cases it's stored in the param def as "name"
            paramSpec.name = paramSpec.name || key;
            if (params[key] != null) {
              if (castType[paramSpec.type]) {
                query[paramSpec.name] = castType[paramSpec.type](paramSpec, params[key], key);
              } else {
                query[paramSpec.name] = params[key];
              }

              if (paramSpec['default'] && query[paramSpec.name] === paramSpec['default']) {
                delete query[paramSpec.name];
              }
            }
          } else {
            query[key] = params[key];
          }
      }
    }
  }

  for (i = 0; i < spec.requireParamKeys.length; i ++) {
    if (!query.hasOwnProperty(spec.requireParamKeys[i])) {
      throw new TypeError('Missing required parameter ' + spec.requireParamKeys[i]);
    }
  }

  request.query = query;

  return transport.request(request, cb);
}

function commaSepList(str) {
  return str.split(',').map(function (i) {
    return i.trim();
  });
}
