var _ = require('./utils');
var errors = module.exports;

var canCapture = (typeof Error.captureStackTrace === 'function');
var canStack = !!(new Error()).stack;

function ErrorAbstract(msg, constructor, metadata) {
  this.message = msg;

  Error.call(this, this.message);

  if (canCapture) {
    Error.captureStackTrace(this, constructor);
  }
  else if (canStack) {
    this.stack = (new Error()).stack;
  }
  else {
    this.stack = '';
  }

  if (metadata) {
    _.assign(this, metadata);

    this.toString = function () {
      return msg + ' :: ' + JSON.stringify(metadata);
    };

    this.toJSON = function () {
      return _.assign({
        msg: msg
      }, metadata);
    };
  }
}
errors._Abstract = ErrorAbstract;
_.inherits(ErrorAbstract, Error);

/**
 * Connection Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.ConnectionFault = function ConnectionFault(msg) {
  ErrorAbstract.call(this, msg || 'Connection Failure', errors.ConnectionFault);
};
_.inherits(errors.ConnectionFault, ErrorAbstract);

/**
 * No Living Connections
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.NoConnections = function NoConnections(msg) {
  ErrorAbstract.call(this, msg || 'No Living connections', errors.NoConnections);
};
_.inherits(errors.NoConnections, ErrorAbstract);

/**
 * Generic Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.Generic = function Generic(msg, metadata) {
  ErrorAbstract.call(this, msg || 'Generic Error', errors.Generic, metadata);
};
_.inherits(errors.Generic, ErrorAbstract);

/**
 * Request Timeout Error
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.RequestTimeout = function RequestTimeout(msg) {
  ErrorAbstract.call(this, msg || 'Request Timeout', errors.RequestTimeout);
};
_.inherits(errors.RequestTimeout, ErrorAbstract);


/**
 * Request Body could not be parsed
 * @param {String} [msg] - An error message that will probably end up in a log.
 */
errors.Serialization = function Serialization(msg) {
  ErrorAbstract.call(this, msg || 'Unable to parse/serialize body', errors.Serialization);
};
_.inherits(errors.Serialization, ErrorAbstract);


/**
 * Thrown when a browser compatability issue is detected (cough, IE, cough)
 */
errors.RequestTypeError = function RequestTypeError(feature) {
  ErrorAbstract.call(this, 'Cross-domain AJAX requests ' + feature + ' are not supported', errors.RequestTypeError);
};
_.inherits(errors.RequestTypeError, ErrorAbstract);

var statusCodes = [
  [300, 'Multiple Choices'],
  [301, 'Moved Permanently'],
  [302, 'Found'],
  [303, 'See Other'],
  [304, 'Not Modified'],
  [305, 'Use Proxy'],
  [307, 'Temporary Redirect'],
  [308, 'Permanent Redirect'],
  [400, 'Bad Request'],
  [401, 'Authentication Exception'],
  [402, 'Payment Required'],
  [403, ['Authorization Exception', 'Forbidden']],
  [404, 'Not Found'],
  [405, 'Method Not Allowed'],
  [406, 'Not Acceptable'],
  [407, 'Proxy Authentication Required'],
  [408, 'Request Timeout'],
  [409, 'Conflict'],
  [410, 'Gone'],
  [411, 'Length Required'],
  [412, 'Precondition Failed'],
  [413, 'Request Entity Too Large'],
  [414, 'Request URIToo Long'],
  [415, 'Unsupported Media Type'],
  [416, 'Requested Range Not Satisfiable'],
  [417, 'Expectation Failed'],
  [418, 'Im ATeapot'],
  [421, 'Too Many Connections From This IP'],
  [426, 'Upgrade Required'],
  [429, 'Too Many Requests'],
  [450, 'Blocked By Windows Parental Controls'],
  [494, 'Request Header Too Large'],
  [497, 'HTTPTo HTTPS'],
  [499, 'Client Closed Request'],
  [500, 'Internal Server Error'],
  [501, 'Not Implemented'],
  [502, 'Bad Gateway'],
  [503, 'Service Unavailable'],
  [504, 'Gateway Timeout'],
  [505, 'HTTPVersion Not Supported'],
  [506, 'Variant Also Negotiates'],
  [510, 'Not Extended']
];

_.each(statusCodes, function createStatusCodeError(tuple) {
  var status = tuple[0];
  var names = tuple[1];
  var allNames = [].concat(names, status);
  var primaryName = allNames[0];
  var className = _.studlyCase(primaryName);
  allNames = _.uniq(allNames.concat(className));

  function StatusCodeError(msg, metadata) {
    this.status = status;
    this.displayName = className;

    var esErrObject = null;
    if (_.isPlainObject(msg)) {
      esErrObject = msg;
      msg = null;
    }

    if (!esErrObject) {
      // errors from es now come in two forms, an error string < 2.0 and
      // an object >= 2.0
      // TODO: remove after dropping support for < 2.0
      ErrorAbstract.call(this, msg || primaryName, StatusCodeError, metadata);
      return this;
    }

    msg = [].concat(esErrObject.root_cause || []).reduce(function (memo, cause) {
      if (memo) memo += ' (and) ';

      memo += '[' + cause.type + '] ' + cause.reason;

      var extraData = _.omit(cause, ['type', 'reason']);
      if (_.size(extraData)) {
        memo += ', with ' + prettyPrint(extraData);
      }

      return memo;
    }, '');

    if (!msg) {
      if (esErrObject.type) msg += '[' + esErrObject.type + '] ';
      if (esErrObject.reason) msg += esErrObject.reason;
    }

    ErrorAbstract.call(this, msg || primaryName, StatusCodeError, metadata);
    return this;
  }
  _.inherits(StatusCodeError, ErrorAbstract);

  allNames.forEach(function (name) {
    errors[name] = StatusCodeError;
  });
});


function prettyPrint(data) {
  const path = []
  return (function print(v) {
    if (typeof v === 'object') {
      if (path.indexOf(v) > -1) return '[circular]'
      path.push(v)
      try {
        return '{ ' + _.map(v, function (subv, name) {
          return name + '=' + print(subv)
        }).join(' & ') + ' }'
      } finally {
        path.pop()
      }
    } else {
      return JSON.stringify(v)
    }
  }(data))
}
