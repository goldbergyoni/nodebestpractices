# Implement express rate limiting for login routes

### One Paragraph Explainer
Leaving higher privileged routes such as `/login` or `/admin` exposed without rate limiting leaves an application at risk of brute force password dictionary attacks. Using a strategy to limit requests to such routes can prevent the success of this by limiting the number of allow attempts based on a request property such as ip, or a body parameter such as username/email address.

An out of memory store such as Redis or MongoDB should be used in production to enforce the shared limit across application clusters.

### Code example: Using express-brute
```javascript
const ExpressBrute = require('express-brute');
const RedisStore = require('express-brute-redis');

const redis = new RedisStore({
	host: '127.0.0.1',
	port: 6379
});

const bruteforce = new ExpressBrute(redis);
// Start slowing requests after 5 failed attempts to login for the same user
const loginBruteforce = new ExpressBrute(store, {
    freeRetries: 5,
    minWait: 5*60*1000, // 5 minutes
    maxWait: 60*60*1000, // 1 hour,
    failCallback: failCallback,
    handleStoreError: handleStoreError
    }
});

app.post('/login',
  userBruteforce.getMiddleware({
    key: function(req, res, next) {
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
    //handle invalid user
    }
  }
);
```

### What other bloggers say
From the Essential Node.js Security book by [Liran Tal](https://leanpub.com/nodejssecurity):
> Brute-force attacks may be employed by an attacker to send a series of username/password pairs to your REST end-points over POST or another RESTful API that you have opened to implement them. Such a dictionary attack is very straight-forward and easy to execute and may be performed on any other parts of your API or page routing, unrelated to logins.