# Prevent brute-force attacks against authorization

### One Paragraph Explainer

Leaving higher privileged routes such as `/login` or `/admin` exposed without rate limiting leaves an application at risk of brute force password dictionary attacks. Using a strategy to limit requests to such routes can prevent the success of this by limiting the number of allow attempts based on a request property such as ip, or a body parameter such as username/email address.

### Code example: count consecutive failed authorisation attempts by user name and IP pair and total fails by IP address.

Using [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) npm package.

Create two limiters: 
1. The first counts number of consecutive failed attempts and allows maximum 10 by username and IP pair. 
2. The second blocks IP address for a day on 100 failed attempts per day.

```javascript
const http = require('http');
const express = require('express');
const Redis = require('ioredis');
const { RateLimiterRedis } = require('rate-limiter-flexible');

const redisClient = new Redis({ enableOfflineQueue: false });

const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // Block for 1 day, if 100 wrong attempts per day
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_username_and_ip',
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // Store number for 90 days since first fail
  blockDuration: 60 * 60, // Block for 1 hour
});

const getUsernameIPkey = (username, ip) => `${username}_${ip}`;

async function loginRoute(req, res) {
  const ipAddr = req.ip;
  const usernameIPkey = getUsernameIPkey(req.body.email, ipAddr);

  const [resUsernameAndIP, resSlowByIP] = await Promise.all([
    limiterConsecutiveFailsByUsernameAndIP.get(usernameIPkey),
    limiterSlowBruteByIP.get(ipAddr),
  ]);

  let retrySecs = 0;

  // Check if IP or Username + IP is already blocked
  if (resSlowByIP !== null && resSlowByIP.remainingPoints <= 0) {
    retrySecs = Math.round(resSlowByIP.msBeforeNext / 1000) || 1;
  } else if (resUsernameAndIP !== null && resUsernameAndIP.remainingPoints <= 0) {
    retrySecs = Math.round(resUsernameAndIP.msBeforeNext / 1000) || 1;
  }

  if (retrySecs > 0) {
    res.set('Retry-After', String(retrySecs));
    res.status(429).send('Too Many Requests');
  } else {
    const user = authorise(req.body.email, req.body.password);
    if (!user.isLoggedIn) {
      // Consume 1 point from limiters on wrong attempt and block if limits reached
      try {
        const promises = [limiterSlowBruteByIP.consume(ipAddr)];
        if (user.exists) {
          // Count failed attempts by Username + IP only for registered users
          promises.push(limiterConsecutiveFailsByUsernameAndIP.consume(usernameIPkey));
        }

        await promises;

        res.status(400).end('email or password is wrong');
      } catch (rlRejected) {
        if (rlRejected instanceof Error) {
          throw rlRejected;
        } else {
          res.set('Retry-After', String(Math.round(rlRejected.msBeforeNext / 1000)) || 1);
          res.status(429).send('Too Many Requests');
        }
      }
    }

    if (user.isLoggedIn) {
      if (resUsernameAndIP !== null && resUsernameAndIP.consumedPoints > 0) {
        // Reset on successful authorisation
        await limiterConsecutiveFailsByUsernameAndIP.delete(usernameIPkey);
      }

      res.end('authorized');
    }
  }
}

const app = express();

app.post('/login', async (req, res) => {
  try {
    await loginRoute(req, res);
  } catch (err) {
    res.status(500).end();
  }
});
```

### What other bloggers say

From the Essential Node.js Security book by [Liran Tal](https://leanpub.com/nodejssecurity):
> Brute-force attacks may be employed by an attacker to send a series of username/password pairs to your REST end-points over POST or another RESTful API that you have opened to implement them. Such a dictionary attack is very straight-forward and easy to execute and may be performed on any other parts of your API or page routing, unrelated to logins.
