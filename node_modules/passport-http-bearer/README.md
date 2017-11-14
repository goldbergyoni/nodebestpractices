# passport-http-bearer

[![Build](https://travis-ci.org/jaredhanson/passport-http-bearer.png)](http://travis-ci.org/jaredhanson/passport-http-bearer)
[![Coverage](https://coveralls.io/repos/jaredhanson/passport-http-bearer/badge.png)](https://coveralls.io/r/jaredhanson/passport-http-bearer)
[![Dependencies](https://david-dm.org/jaredhanson/passport-http-bearer.png)](http://david-dm.org/jaredhanson/passport-http-bearer)


HTTP Bearer authentication strategy for [Passport](http://passportjs.org/).

This module lets you authenticate HTTP requests using bearer tokens, as
specified by [RFC 6750](http://tools.ietf.org/html/rfc6750), in your Node.js
applications.  Bearer tokens are typically used protect API endpoints, and are
often issued using OAuth 2.0.

By plugging into Passport, bearer token support can be easily and unobtrusively
integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-http-bearer

## Usage

#### Configure Strategy

The HTTP Bearer authentication strategy authenticates users using a bearer
token.  The strategy requires a `verify` callback, which accepts that
credential and calls `done` providing a user.  Optional `info` can be passed,
typically including associated scope, which will be set by Passport at
`req.authInfo` to be used by later middleware for authorization and access
control.

    passport.use(new BearerStrategy(
      function(token, done) {
        User.findOne({ token: token }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user, { scope: 'all' });
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'bearer'` strategy, to
authenticate requests.  Requests containing bearer tokens do not require session
support, so the `session` option can be set to `false`.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/profile', 
      passport.authenticate('bearer', { session: false }),
      function(req, res) {
        res.json(req.user);
      });

#### Issuing Tokens

Bearer tokens are typically issued using OAuth 2.0.  [OAuth2orize](https://github.com/jaredhanson/oauth2orize)
is a toolkit for implementing OAuth 2.0 servers and issuing bearer tokens.  Once
issued, this module can be used to authenticate tokens as described above.

## Examples

For a complete, working example, refer to the [Bearer example](https://github.com/jaredhanson/passport-http-bearer/tree/master/examples/bearer).

## Related Modules

- [OAuth2orize](https://github.com/jaredhanson/oauth2orize) — OAuth 2.0 authorization server toolkit

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
