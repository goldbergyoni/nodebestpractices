var Strategy = require("../strategy");
var chai = require("chai");
var expect = chai.expect;
var passportStrategy = require("chai-passport-strategy");
chai.use(passportStrategy);

describe("Strategy", function() {

  it("should be named cookie", function() {
    var strategy = new Strategy(function(){});
    expect(strategy.name).to.equal("cookie");
  });

  it("should throw if constructed without a verify callback", function() {
    expect(function() {
      new Strategy();
    }).to.throw(TypeError, "CookieStrategy requires a verify callback");
  });

  it("should create a strategy with empty `cookieName` and set it to default value", function() {
    var strategy = new Strategy({ cookieName: "" }, function() {});
    expect(strategy._cookieName).to.equal("token");
  });

  it("should create a strategy with non-empty `cookieName`", function() {
    var strategy = new Strategy({ cookieName: "cookie" }, function() {});
    expect(strategy._cookieName).to.equal("cookie");
  });

  it("should throw an error if req.cookies is undefined", function() {
    var strategy = new Strategy(function() {});
    expect(function() {
      strategy.authenticate({});
    }).to.throw(TypeError, "Maybe you forgot to use cookie-parser?");
  });

  it("should call the verify callback with the token value", function(done) {
    var strategy = new Strategy(function(token) {
      expect(token).to.equal("abc");
      return done();
    });
    strategy.authenticate({ cookies: { token: "abc" }});
  });

  it("should call the verify callback and call fail because the token is empty", function(done) {
    var strategy = new Strategy(function(token, next) {
      expect(token).to.equal("");
      return next();
    });

    chai.passport.use(strategy)
    .fail(function(err) {
      expect(err).to.equal(401);
      return done();
    })
    .success(function() {
      return done(new Error("It should not call this"));
    })
    .req(function(req) {
      req.cookies = {
        token: ""
      };
    }).authenticate();
  });

  it("should call the verify callback and call fail because the user is not found", function(done) {
    var strategy = new Strategy(function(token, next) {
      expect(token).to.equal("abc");
      return next(null, false);
    });

    chai.passport.use(strategy)
    .fail(function(err) {
      expect(err).to.equal(401);
      return done();
    })
    .success(function() {
      return done(new Error("It should not call this"));
    })
    .req(function(req) {
      req.cookies = { token: "abc" };
    }).authenticate();

  });

  it("should call the verify callback and call next with an error", function(done) {
    var strategy = new Strategy(function(token, next) {
      expect(token).to.equal("abc");
      return next(new Error("Failed"));
    });

    chai.passport.use(strategy)
    .error(function(err) {
      expect(err.message).to.equal("Failed");
      return done();
    })
    .success(function() {
      return done(new Error("It should not call this"));
    })
    .req(function(req) {
      req.cookies = {
        token: "abc"
      };
    }).authenticate();
  });

  it("should call the verify callback and call next with success", function(done) {
    var strategy = new Strategy(function(token, next) {
      expect(token).to.equal("abc");
      return next(null, {
        id: "userid"
      });
    });

    chai.passport.use(strategy)
    .error(function(err) {
      return done(new Error("It should not call this"));
    })
    .success(function() {
      return done();
    })
    .req(function(req) {
      req.cookies = {
        token: "abc"
      };
    }).authenticate();
  });

});
