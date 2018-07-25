# Avoid using the Node.js Crypto library for passwords, use Bcrypt

### One Paragraph Explainer

When storing user passwords, using an adaptive hashing algorithm such as bcrypt, offered by the [bcrypt npm module](https://www.npmjs.com/package/bcrypt) is recommended as opposed to using the native Node.js crypto module. `Math.random()` should also never be used as part of any password or token generation due to it's predictability.

The `bcrypt` module or similar should be used as opposed to the JavaScript implementation, as when using `bcrypt`, a number of 'rounds' can be specified in order to provide a secure hash. This sets the work factor or the number of 'rounds' the data is processed for, and more hashing rounds leads to more secure hash (although this at the cost of CPU time). The introduction of hashing rounds means that the brute force factor is significantly reduced, as password crackers are slowed down increasing the time required to generate one attempt.

### Code example

```javascript
// asynchronously generate a secure password using 10 hashing rounds
bcrypt.hash('myPassword', 10, function(err, hash) {
  // Store secure hash in user record
});

// compare a provided password input with saved hash
bcrypt.compare('somePassword', hash, function(err, match) {
  if(match) {
   // Passwords match
  } else {
   // Passwords don't match
  } 
});
```

### What other bloggers say

From the blog by [Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt):
> ... it’s not just using the right hashing algorithm. I’ve talked extensively about how the right tool also includes the necessary ingredient of “time” as part of the password hashing algorithm and what it means for the attacker who’s trying to crack passwords through brute-force.
