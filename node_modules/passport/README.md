[![passport banner](http://cdn.auth0.com/img/passport-banner-github.png)](http://passportjs.org)

# Passport

[![Build](https://travis-ci.org/jaredhanson/passport.svg?branch=master)](https://travis-ci.org/jaredhanson/passport)
[![Coverage](https://coveralls.io/repos/jaredhanson/passport/badge.svg?branch=master)](https://coveralls.io/r/jaredhanson/passport)
[![Quality](https://codeclimate.com/github/jaredhanson/passport/badges/gpa.svg)](https://codeclimate.com/github/jaredhanson/passport)
[![Dependencies](https://david-dm.org/jaredhanson/passport.svg)](https://david-dm.org/jaredhanson/passport)
[![Tips](https://img.shields.io/gratipay/jaredhanson.svg)](https://gratipay.com/jaredhanson/)


Passport is [Express](http://expressjs.com/)-compatible authentication
middleware for [Node.js](http://nodejs.org/).

Passport's sole purpose is to authenticate requests, which it does through an
extensible set of plugins known as _strategies_.  Passport does not mount
routes or assume any particular database schema, which maximizes flexibility and
allows application-level decisions to be made by the developer.  The API is
simple: you provide Passport a request to authenticate, and Passport provides
hooks for controlling what occurs when authentication succeeds or fails.

## Install

```
$ npm install passport
```

## Usage

#### Strategies

Passport uses the concept of strategies to authenticate requests.  Strategies
can range from verifying username and password credentials, delegated
authentication using [OAuth](http://oauth.net/) (for example, via [Facebook](http://www.facebook.com/)
or [Twitter](http://twitter.com/)), or federated authentication using [OpenID](http://openid.net/).

Before authenticating requests, the strategy (or strategies) used by an
application must be configured.

```javascript
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

There are 300+ strategies. Find the ones you want at: [passportjs.org](http://passportjs.org)

#### Sessions

Passport will maintain persistent login sessions.  In order for persistent
sessions to work, the authenticated user must be serialized to the session, and
deserialized when subsequent requests are made.

Passport does not impose any restrictions on how your user records are stored.
Instead, you provide functions to Passport which implements the necessary
serialization and deserialization logic.  In a typical application, this will be
as simple as serializing the user ID, and finding the user by ID when
deserializing.

```javascript
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
```

#### Middleware

To use Passport in an [Express](http://expressjs.com/) or
[Connect](http://senchalabs.github.com/connect/)-based application, configure it
with the required `passport.initialize()` middleware.  If your application uses
persistent login sessions (recommended, but not required), `passport.session()`
middleware must also be used.

```javascript
var app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
```

#### Authenticate Requests

Passport provides an `authenticate()` function, which is used as route
middleware to authenticate requests.

```javascript
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
```

## Strategies

Passport has a comprehensive set of **over 300** authentication strategies
covering social networking, enterprise integration, API services, and more.

## Search all strategies

There is a **Strategy Search** at [passportjs.org](http://passportjs.org)

The following table lists commonly used strategies:

|Strategy                                                       | Protocol                 |Developer                                       |
|---------------------------------------------------------------|--------------------------|------------------------------------------------|
|[Local](https://github.com/jaredhanson/passport-local)         | HTML form                |[Jared Hanson](https://github.com/jaredhanson)  |
|[OpenID](https://github.com/jaredhanson/passport-openid)       | OpenID                   |[Jared Hanson](https://github.com/jaredhanson)  |
|[BrowserID](https://github.com/jaredhanson/passport-browserid) | BrowserID                |[Jared Hanson](https://github.com/jaredhanson)  |
|[Facebook](https://github.com/jaredhanson/passport-facebook)   | OAuth 2.0                |[Jared Hanson](https://github.com/jaredhanson)  |
|[Google](https://github.com/jaredhanson/passport-google)       | OpenID                   |[Jared Hanson](https://github.com/jaredhanson)  |
|[Google](https://github.com/jaredhanson/passport-google-oauth) | OAuth / OAuth 2.0        |[Jared Hanson](https://github.com/jaredhanson)  |
|[Twitter](https://github.com/jaredhanson/passport-twitter)     | OAuth                    |[Jared Hanson](https://github.com/jaredhanson)  |
|[Azure Active Directory](https://github.com/AzureAD/passport-azure-ad)     | OAuth 2.0 / OpenID / SAML  |[Azure](https://github.com/azuread)  |

## Examples

- For a complete, working example, refer to the [example](https://github.com/passport/express-4.x-local-example)
that uses [passport-local](https://github.com/jaredhanson/passport-local).
- **Local Strategy**: Refer to the following tutorials for setting up user authentication via LocalStrategy (`passport-local`):
    - Mongo
      - Express v3x - [Tutorial](http://mherman.org/blog/2016/09/25/node-passport-and-postgres/#.V-govpMrJE5) / [working example](https://github.com/mjhea0/passport-local-knex)
      - Express v4x - [Tutorial](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/) / [working example](https://github.com/mjhea0/passport-local-express4)
    - Postgres
      - [Tutorial](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/) / [working example](https://github.com/mjhea0/passport-local-express4)
- **Social Authentication**: Refer to the following tutorials for setting up various social authentication strategies:
    - Express v3x - [Tutorial](http://mherman.org/blog/2013/11/10/social-authentication-with-passport-dot-js/) / [working example](https://github.com/mjhea0/passport-examples)
    - Express v4x - [Tutorial](http://mherman.org/blog/2015/09/26/social-authentication-in-node-dot-js-with-passport) / [working example](https://github.com/mjhea0/passport-social-auth)

## Related Modules

- [Locomotive](https://github.com/jaredhanson/locomotive) — Powerful MVC web framework
- [OAuthorize](https://github.com/jaredhanson/oauthorize) — OAuth service provider toolkit
- [OAuth2orize](https://github.com/jaredhanson/oauth2orize) — OAuth 2.0 authorization server toolkit
- [connect-ensure-login](https://github.com/jaredhanson/connect-ensure-login)  — middleware to ensure login sessions

The [modules](https://github.com/jaredhanson/passport/wiki/Modules) page on the
[wiki](https://github.com/jaredhanson/passport/wiki) lists other useful modules
that build upon or integrate with Passport.

## Tests

```
$ npm install
$ make test
```

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## Supporters

This project is supported by ![](http://passportjs.org/images/supported_logo.svg) [Auth0](https://auth0.com) 

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2015 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

