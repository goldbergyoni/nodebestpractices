# Secure Your Users' Passwords

### One Paragraph Explainer

**Always** hash users' passwords as opposed to storing them as text; there are three options that depend on your use case for hashing user passwords. All the below functions need to be implemented properly to provide any security. (Reference the minimums or see the [IETF's recommendations](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) for what parameters to use for each) You should use the recommended properties as a minimum, using higher parameters and a combination that's unique to your program can help mitigate some of the damage if someone ever runs off with your password hashes. Also, always add a [salt](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) (reproducible data, unique to the user and your system) to your passwords before you hash.

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

### Code example - PBKDF2 (Password-Based Key Derivation Function, Crypto Spec v2.1)

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

No matter what the algorithm/function, always include some string that's unique to your system and the specific user. Some examples might be a combination of username/userID and your app name or the user's email and your business email. However this should also be considered when choosing your hashing algorithm/function since BCrypt limits you to 64 characters, whereas the more complicated SCrypt lets you use as much salt and password as you want.

##### Why use salt?

Adding salt changes the hash and thus makes it different from a hash of the same password in someone elses system. If someone uses the same password for multiple sites, and a hash of their password is obtained from someone elses data breach, they won't be able to match it to the hash in your database. When everyone uses hashes, it becomes nearly impossible for attackers to identify patterns of password reuse.

#### Password Length

If your password plus salt has to come in under a limit, and if you use good salt, your users passwords will be even more limited. One way around this, which can be also be good generally, is to pre-hash the passwords. It can create administrative burden, but if you can commit to consistently using a single, simple, hash on the front-end you can set the pre-hash to generate hex strings of an exact length from the password before transmitting it to your server. This means you can have strong checks on your API; for example, only allowing hex characters of exactly 256 characters in length, but still giving users the ability to use passwords of any length with any characters. (You still need to use a good enough hashing that you don't accidentally create collisions where two different passwords create the same hash, it doesn't hurt to use more secure hashing for this, it just takes longer)

Example Browser code would be `const hash = crypto.subtle.digest('sha-256', password)`;

#### Randomness

Whenever possible, leave the generation of randomness to the algorithms you choose. Notice, no mention of an alternative to `Math.random()` was provided, that's because you should even avoid using `crypto.random()` yourself, as *Randomness* is a special kind of limited resource on a computer, and abusing it can cause problems for your program and even other programs on the machine.

#### How BCrypt/SCrypt Work

Both BCrypt/SCrypt use iterations since their premise is that if it takes you X amount of time and resources to hash once, and the attacker X^some-big-number to break the hash with brute force, then if you hash the hash of a hash etc. then you're greatly increasing the magnitude of resources an attacker would have to expend to break your hash. SCrypt also has parameters for block/chunk size and parallelism to try and add "hardness" for attackers that try to assume they only need a certain amount of RAM or CPU cores, though the effectiveness of these parameters is hotly debated.

#### References

  - IETF - Password Storage Reccomendations: https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html
  - OWASP - Password Storage CheatSheet: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md
  - auth0 - What is Password Salt: https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/
  - Troy Hunt - What's the difference between Hashing and Encryption: https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/
  - Password Hashing Competition: https://password-hashing.net/
