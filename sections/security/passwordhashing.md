# Use and Properly Configure Password Hashing

### One Paragraph Explainer

When storing user passwords, there are a few options to consider based on what the priority is. `Math.random()` should also never be used as part of any password or token generation due to its predictability.

All of the below algorithms/functions need to be implemented properly to provide any security. Please see the [IETF's recommendations](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) for what parameters to use for each. You should use the recommended properties as a minimum, using higher parameters and a combination that's unique to your program can differentiate the hash of the exact same password and salt from someone elses implementation to yours, mitigating some of the risk if someone ever runs off with your password hashes.

The external dependency, `bcrypt` is the most widely supported and should be used when possible, as when using `bcrypt`, a number of 'rounds' can be specified in order to provide a secure hash. This sets the work factor or the number of 'rounds' the data is processed for, and more hashing rounds leads to more secure hash (although this at the cost of CPU time). The introduction of hashing rounds means that the brute force factor is significantly reduced, as password crackers are slowed down increasing the time required to generate one attempt.

The `scrypt` function included in the native crypto module can be used as it is a slight improvement over `bcrypt`, allowing for unlimited length passwords, and does not add a dependency, though it needs more configuration and is newer and thus less scrutinized. `scrypt` uses cost (to increase CPU/memory cost), blockSize (to increase memory cost), and parallelization (to increase the cost of breaking it up into separate operations) together to define how secure it is, how long it will take, and what it's most secure against.

If FIPS or other compliance is absolutely necessary, the older `PBKDF2` function included in the native crypto module should be used. `PBKDF2` has a similar api to `bcrypt` in that it uses an iteration count to define the strength and time to spend.

On track to be added sometime in 2021 (Through addition to OpenSSL) the `Argon2` function is the winner of the [Password Hashing Competition](https://password-hashing.net/) and top recommended by [OWASP](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md#modern-algorithms) and the [IETF](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations). Once added to the native crypto module, `Argon2` should be stable and take precedence.

### Code example - Bcrypt

```javascript
const iterations = 12;
try {
// asynchronously generate a secure password
  const hash = await bcrypt.hash('myPassword', iterations);
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

### Code example - SCrypt

```javascript
  const outSize = 64;
  const hash = crypto.scryptSync('myUnlimitedPassword','someUniqueUserValueForSalt',outSize).toString('hex');

  // Store secure hash in user record

  // compare a provided password input with saved hash
  const match = hash === crypto.scryptSync('someUnlimitedPassword','derivedSalt',outSize).toString('hex');

  if (match) {
   // Passwords match
  } else {
   // Passwords don't match
  }
```

### Code example - PBKDF2 (Password-Based Cryptography Specification Version 2.1)

```javascript
try {
  const outSize = 64;
  const digest = 'blake2b512';
  const iterations = 12;
  const hash = crypto.pbkdf2Sync('myPassword','someUniqueUserValueForSalt', iterations * 1000, digest, outSize).toString('hex');

  // Store secure hash in user record

  // compare a provided password input with saved hash
  const match = hash === crypto.pbkdf2Sync('somePassword','derivedSalt', iterations * 1000, digest, outSize).toString('hex');

  if (match) {
   // Passwords match
  } else {
   // Passwords don't match
  }
} catch {
  logger.error('could not hash password.')
}
```

### What other bloggers say

From the blog by [Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt):
> ... it’s not just using the right hashing algorithm. I’ve talked extensively about how the right tool also includes the necessary ingredient of “time” as part of the password hashing algorithm and what it means for the attacker who’s trying to crack passwords through brute-force.

From the blog [Troy Hunt - Creator of HaveIBeenPwned.com](https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/):
> Saying that passwords are “encrypted” over and over again doesn’t make it so. They’re bcrypt hashes so good job there, but the fact they’re suggesting everyone changes their password illustrates that even good hashing has its risks.
