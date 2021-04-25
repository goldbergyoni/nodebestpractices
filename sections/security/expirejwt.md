# Support blacklisting JWTs

### One Paragraph Explainer

By design, JWTs (JSON Web Tokens) are completely stateless, so once a valid token is signed by an issuer, the token may be verified as authentic by the application. The problem this leads to is the security concern where a leaked token could still be used and be unable to be revoked, due to the signature remaining valid as long as the signature provided by the issues matches what the application is expecting.
Due to this, when using JWT authentication, an application should manage a denylist of expired or revoked tokens to retain user's security in the case a token needs to be revoked.

### redis  example

An example of using Nodejs and a Redis store containing your denylist. Keeping your denylist in an array or object is not recommended since if you restart, you'd lose it, and other instances wouldn't know if someone was explicitly logged out. So this assumes you have a running instance of Redis or some persistent key-value store and middleware handling login/JWT creation, and JWT verification since this is also not an extensive example of JWT implementation.

```javascript
const redis = require("redis");
const redisClient = redis.createClient();

// Make sure you handle the creation and verification of the JWT before checking its logout status

// Check for logout middleware
app.use((req,res,next)=>{
   const { userId, tokenIssuedAt } = req;

  // Using the token itself as the matching key is not reliable, so use the content of the JWT
  redisClient.get(userId + tokenIssuedAt, (error, data) => {
    if (error) {
      return res.status(400).send({ error });
    }
    if (data !== null) {
      return res.send({
        message: 'You have to login!',
      });
    }
    return next();
  })
});

app.get('/logout', (req, res) => {
   const { userId, tokenExpiresAt, tokenIssuedAt } = req;
      // Redis lets you set an expiration,
      // so we'll use that to keep it clean of expired JWTs 
      redisClient.set(userId + tokenIssuedAt, tokenExp, true);

      return res.send({
        status: 'success',
        message: 'Logout successful',
      });
});
```

### What other bloggers say

From the blog by [Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/):
> ...add a revocation layer on top of JWT, even if it implies losing its stateless nature.

### References

See the [blog post by Tosin Moronfolu](https://dev.to/chukwutosin_/how-to-invalidate-a-jwt-using-a-blacklist-28dl) for a more detailed implementation guide.
