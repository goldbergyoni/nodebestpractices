# passport-cookie

[![Build Status](https://travis-ci.org/rojo2/passport-cookie.svg?branch=master)](https://travis-ci.org/rojo2/passport-cookie)
[![Coverage Status](https://coveralls.io/repos/github/rojo2/passport-cookie/badge.svg?branch=master)](https://coveralls.io/github/rojo2/passport-cookie?branch=master)

Cookie authentication strategy for [Passport](http://passportjs.org)

This module lets you authenticate HTTP requests using cookies, it only allows
you to recover the content of a cookie.

By plugging into Passport, bearer token support can be easily and unobtrusively
integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect)-style
middleware, including [Express](http://expressjs.com/)..

## Install

    $ npm install passport-cookie

## Usage

#### Configure Strategy

The cookie authentication strategy authenticates users using a cookie. The
strategy requires a verify callback, which accepts that credential and calls
done providing a user.

    passport.use(new CookieStrategy(
      function(token, done) {
        User.findByToken({ token: token }, function(err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user);
        });
      }
    ));

#### Authenticate Requests

Use passport.authenticate(), specifying the 'cookie' strategy, to authenticate
requests. Requests containing cookies do not require session support, so the
session option can be set to false.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get("/profile",
      passport.authenticate("cookie", { session: false }),
      function(req, res) {
        res.json(req.user);
      });

## Tests

    $ npm install
    $ npm test

## Thanks

Thanks to [Jared Hanson](https://github.com/jaredhanson) for his great [Passport](http://passportjs.org)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Made with ❤ by ROJO 2 (http://rojo2.com)
