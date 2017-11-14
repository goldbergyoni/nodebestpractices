var opts = {
  xhr: require('./xhr'),
  jquery: require('./jquery'),
  angular: require('./angular')
};
var _ = require('../utils');

// remove modules that have been ignored by browserify
_.each(opts, function (conn, name) {
  if (typeof conn !== 'function') {
    delete opts[name];
  }
});

// custom _default specification
if (opts.xhr) {
  opts._default = 'xhr';
} else if (opts.angular) {
  opts._default = 'angular';
} else {
  opts._default = 'jquery';
}

module.exports = opts;
