# Prevent brute-force attacks against authorization

### One Paragraph Explainer

Leaving higher privileged routes such as `/login` or `/admin` exposed without rate limiting leaves an application at risk of brute force password dictionary attacks. Using a strategy to limit requests to such routes can prevent the success of this by limiting the number of allow attempts based on a request property such as ip, or a body parameter such as username/email address.

### Code example: count consecutive failed authorisation attempts by user name and IP pair and total fails by IP address.

Using [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) npm package.

Create two limiters: 
1. The first counts number of consecutive failed attempts and allows maximum 10 by username and IP pair. 
2. The second blocks IP address for a day on 100 failed attempts per day.

```javascript
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
```

See complete example on [rate-limiter-flexible package's Wiki](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### What other bloggers say

From the Essential Node.js Security book by [Liran Tal](https://leanpub.com/nodejssecurity):
> Brute-force attacks may be employed by an attacker to send a series of username/password pairs to your REST end-points over POST or another RESTful API that you have opened to implement them. Such a dictionary attack is very straight-forward and easy to execute and may be performed on any other parts of your API or page routing, unrelated to logins.
