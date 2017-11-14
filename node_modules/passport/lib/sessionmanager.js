function SessionManager(options, serializeUser) {
  if (typeof options == 'function') {
    serializeUser = options;
    options = undefined;
  }
  options = options || {};
  
  this._key = options.key || 'passport';
  this._serializeUser = serializeUser;
}

SessionManager.prototype.logIn = function(req, user, cb) {
  var self = this;
  this._serializeUser(user, req, function(err, obj) {
    if (err) {
      return cb(err);
    }
    if (!req._passport.session) {
      req._passport.session = {};
    }
    req._passport.session.user = obj;
    if (!req.session) {
      req.session = {};
    }
    req.session[self._key] = req._passport.session;
    cb();
  });
}

SessionManager.prototype.logOut = function(req, cb) {
  if (req._passport && req._passport.session) {
    delete req._passport.session.user;
  }
  cb && cb();
}


module.exports = SessionManager;
