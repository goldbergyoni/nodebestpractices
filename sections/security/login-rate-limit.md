# Implement express rate limiting for login routes

### One Paragraph Explainer

Leaving higher privileged routes such as `/login` or `/admin` exposed without rate limiting leaves an application at risk of brute force password dictionary attacks. Using a strategy to limit requests to such routes can prevent the success of this by limiting the number of allow attempts based on a request property such as ip, or a body parameter such as username/email address.

An in-memory store such as Redis or MongoDB should be used in production to enforce the shared limit across application clusters.

### Code example: Using [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)

Login endpoint should be rate limited, protected against brute force attack and implement a temporary block after some amount of wrong tries.

```javascript
const Redis = require('ioredis');
const redisClient = new Redis({ enableOfflineQueue: false });

// Maximum 10 requests per second
const rateLimiter = new RateLimiterRedis({
  redis: redisClient,
  points: 10,
  duration: 1,
});

const maxWrongAttemptsPerMinute = 5;
const rateLimiterBrute = new RateLimiterRedis({
  redis: redisClient,
  keyPrefix: 'rl_login_brute',
  points: maxWrongAttemptsPerMinute,
  duration: 60,
  blockDuration: 60 * 10, // Block for 10 minutes, if 5 wrong attempts per minute
});

app.post('/login', async (req, res, next) {
  try {
    const [getPointsBruteRes] = await Promise.all([
      rateLimiterBrute.get(req.connection.remoteAddress),
      rateLimiter.consume(req.connection.remoteAddress)
    ]);

    if (getPointsBruteRes !== null && getPointsBruteRes.remainingPoints <= 0) {
      // Blocked
      const secs = Math.round(getPointsBruteRes.msBeforeNext / 1000) || 1;
      res.set('Retry-After', String(secs));
      res.status(403).send('Forbidden');
    } else {
      const user = login(req.body.email, req.body.password);
      if (!user.isLoggedIn) {
        // Consume from brute limiter on wrong attempt
        await rateLimiterBrute.consume(req.connection.remoteAddress);
        res.end('email or password is wrong');
      } else {
        // If at least one wrong attempt, reset points
        if (getPointsBruteRes !== null && getPointsBruteRes.consumedPoints > 0) {
          await rateLimiterBrute.reward(req.connection.remoteAddress, getPointsBruteRes.consumedPoints);
        }
        res.end('authorized');
      }
    }
  } catch (rej) {
    // Two reasons to get here:
    // 1. Consumed more than 10 points per second
    // 2. Any Redis error, if it is not covered by `insuranceLimiter`
    if (rej instanceof Error) {
      res.status(500);
    } else {
      res.status(429).send('Too Many Requests');
    }
  }
});
```

### Code example: Using express-brute

```javascript
const ExpressBrute = require('express-brute');
const RedisStore = require('express-brute-redis');

const redisStore = new RedisStore({
  host: '127.0.0.1',
  port: 6379
});

// Start slowing requests after 5 failed attempts to login for the same user
const loginBruteforce = new ExpressBrute(redisStore, {
  freeRetries: 5,
  minWait: 5 * 60 * 1000, // 5 minutes
  maxWait: 60 * 60 * 1000, // 1 hour
  failCallback: failCallback,
  handleStoreError: handleStoreErrorCallback
});

app.post('/login',
  loginBruteforce.getMiddleware({
    key: function (req, res, next) {
      // prevent too many attempts for the same username
      next(req.body.username);
    }
  }), // error 403 if we hit this route too often
  function (req, res, next) {
    if (User.isValidLogin(req.body.username, req.body.password)) {
      // reset the failure counter for valid login
      req.brute.reset(function () {
        res.redirect('/'); // logged in
      });
    } else {
      // handle invalid user
    }
  }
);
```

### What other bloggers say

From the Essential Node.js Security book by [Liran Tal](https://leanpub.com/nodejssecurity):
> Brute-force attacks may be employed by an attacker to send a series of username/password pairs to your REST end-points over POST or another RESTful API that you have opened to implement them. Such a dictionary attack is very straight-forward and easy to execute and may be performed on any other parts of your API or page routing, unrelated to logins.
