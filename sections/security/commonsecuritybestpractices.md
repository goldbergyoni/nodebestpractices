[✔]: ../../assets/images/checkbox-small-blue.png

# Common Node.js security best practices

The common security guidelines section contains best practices that are standardized in many frameworks and conventions, running an application with ssl/tls for example should be a common guideline and convention followed in every setup to achieve great security benefits.

## ![✔] Use SSL/TLS to encrypt the client-server connection

**TL;DR:** In the times of [free SSL/TLS certificates](https://letsencrypt.org/) and easy configuration of those, you do no longer have to weigh advantages and disadvantages of using a secure server because the advantages such as security, support of modern technology and trust clearly outweigh the disadvantages like minimal overhead compared to pure http.

**Otherwise:** Attackers could perform man-in-the-middle attacks, spy on your users' behaviour and perform even more malicious actions when the connection is unencrypted


🔗 [**Read More: Running a secure Node.js server**](secureserver.md)


<br/><br/>


## ![✔] Comparing secret values and hashes securely

**TL;DR:** When comparing secret values or hashes like HMAC digests, you should use the [```crypto.timingSafeEqual(a, b)```](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) function Node provides out of the box since Node.js v6.6.0. This method compares two given objects and keeps comparing even if data does not match. The default equality comparison methods would simply return after a character mismatch, allowing timing attacks based on the operation length.

**Otherwise:** Using default equality comparison operators you might expose critical information based on the time taken to compare two objects


<br/><br/>


## ![✔] Generating random strings using Node.js

**TL;DR:** Using a custom-built function generating pseudo-random strings for tokens and other security-sensitive use cases might actually not be as random as you think, rendering your application vulnerable to cryptographic attacks. When you have to generate secure random strings, use the [```crypto.RandomBytes(size, [callback])```](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback) function using available entropy provided by the system.

**Otherwise:** When generating pseudo-random strings without cryptographically secure methods, attackers might predict and reproduce the generated results, rendering your application insecure


<br/><br/><br/>