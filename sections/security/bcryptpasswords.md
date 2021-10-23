# Avoid using Crypto Library of Node.js for passwords, use Bcrypt

### Short description

When storing user passwords, it is recommended to use an adaptive hashing algorithm such as bcrypt provided by [bcrypt npm module](https://www.npmjs.com/package/bcrypt) as opposed to using the native Node.js cryptographic module. `Math.random()` should also never be used as part of password or token generation for predictability reasons.

The `bcrypt` module or similar should be used as opposed to the JavaScript implementation, because when using `bcrypt`, several "salt rounds" can be specified to provide a safety. It specifies the work factor, or number of "rounds" for which data is processed, and more hash rounds lead to a more secure hash (although at the expense of CPU time). The introduction of hash rounds means that the brute force factor is significantly reduced as password crackers are slowed down, which increases the time required to generate one sample.

### Code example

```javascript
try {
  // asynchronously generate a secure password using 10 hashing rounds
  const hash = await bcrypt.hash('myPassword', 10);
  // Store secure hash in user record

  // compare a provided password input with saved hash
  const match = await bcrypt.compare('somePassword', hash);
  if (match) {
   // Passwords match
  } else {
   // Passwords don't match
  }
} catch {
  logger.error('could not hash password.')
}
```

### What others say?

From [Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt) blog:
> ... it’s not just using the right hashing algorithm. I’ve talked extensively about how the right tool also includes the necessary ingredient of “time” as part of the password hashing algorithm and what it means for the attacker who’s trying to crack passwords through brute-force.
