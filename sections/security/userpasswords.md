# Secure Your Users' Passwords

### One Paragraph Explainer

**Always** hash users' passwords as opposed to storing them as text; there are three options that depend on your use case for hashing user passwords. All the below functions need to be implemented properly to provide any security. (Reference the miminums or see the [IETF's recommendations](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) for what parameters to use for each) You should use the recommended properties as a minimum, using higher parameters and a combination that's unique to your program can help mitigate some of the damage if someone ever runs off with your password hashes. Also, always add a [salt](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) (reproducable data, unique to the user and your system) to your passwords before you hash.

  - For the majority of use cases, the popular library [`bcrypt`](https://www.npmjs.com/package/bcrypt) can be used. (minimum: `cost:12`, password lengths must be <64)
  - For a slightly harder native solution, or for unlimited size passwords, use the [`scrypt`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) function. (minimums: `N:32768, r:8, p:1`)
  - For FIPS/Government compliance use the older [`PBKDF2`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback) function included in the native crypto module. (minimums: `iterations: 10000, length:{salt: 16, password: 32}`)
  
(NOTE: `Math.random()` should **never** be used as part of any password or token generation due to its predictability. See [the advanced section](#randomness) for more info)

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

### Advanced & References

#### Algorithms

When storing user passwords, there are a few options to consider based on what the priority is.

All of the below algorithms/functions need to be implemented properly to provide any security. Please see the [IETF's recommendations](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) for what parameters to use for each. You should use the recommended properties as a minimum, using higher parameters and a combination that's unique to your program can differentiate the hash of the exact same password and salt from someone elses implementation to yours, mitigating some of the risk if someone ever runs off with your password hashes.

The external dependency, [`bcrypt`](https://www.npmjs.com/package/bcrypt) is the most widely supported and should be used when possible, as when using `bcrypt`, a number of 'rounds' can be specified in order to provide a secure hash. This sets the work factor or the number of 'rounds' the data is processed for, and more hashing rounds leads to more secure hash (although this at the cost of CPU time). The introduction of hashing rounds means that the brute force factor is significantly reduced, as password crackers are slowed down increasing the time required to generate one attempt.

The [`scrypt`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) function included in the native crypto module can be used as it is a slight improvement over `bcrypt`, allowing for unlimited length passwords, and does not add a dependency, though it needs more configuration and is newer and thus less scrutinized. `scrypt` uses cost (to increase CPU/memory cost), blockSize (to increase memory cost), and parallelization (to increase the cost of breaking it up into separate operations) together to define how secure it is, how long it will take, and what it's most secure against.

If FIPS or other compliance is absolutely necessary, the older [`PBKDF2`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback) function included in the native crypto module should be used. `PBKDF2` has a similar api to `bcrypt` in that it uses an iteration count to define the strength and time to spend.

On track to be added sometime in 2021 (Through addition to OpenSSL) the `Argon2` function is the winner of the [Password Hashing Competition](https://password-hashing.net/) and top recommended by [OWASP](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md#modern-algorithms) and the [IETF](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations). Once added to the native crypto module, `Argon2` should be stable and take precedence.

#### Salting

No matter what the algorithm/function, always inculde some string that's unquie to your system and the specific user. Some examples might be a combination of username/userid and your app name or the user's email and your business email. However this should also be considered when choosing your hashing algorithm/function since BCrypt limits you to 64 characters, whereas the more complicated SCrypt lets you use as much salt and password as you want.

#### Randomness

Whenever possible, leave the generation of randomness to the algorithms you choose. Notice, no mention of an alternative to `Math.random()` was provided, that's because you should even avoid using `crypto.random()` yourself, as *Randomness* is a special kind of limited resource on a computer, and abusing it can cause problems for your program and even other programs on the machine.

#### References

  - IETF - Password Storage Reccomendations: https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html
  - OWASP - Password Storage CheatSheet: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md
  - auth0 - What is Password Salt: https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/
  - Troy Hunt - What's the difference between Hashing and Encryption: https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/
  - Password Hashing Competition: https://password-hashing.net/
  
