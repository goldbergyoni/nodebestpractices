[✔]: ../../assets/images/checkbox-small-blue.png

# Common Node.js security best practices

The common security guidelines section contains best practices that are standardized in many frameworks and conventions, running an application with ssl/tls for example should be a common guideline and convention followed in every setup to achieve great security benefits.

## ![✔] Use SSL/TLS to encrypt the client-server connection

**TL;DR:** In the times of [free SSL/TLS certificates](https://letsencrypt.org/) and easy configuration of those, you do no longer have to weigh advantages and disadvantages of using a secure server because the advantages such as security, support of modern technology and trust clearly outweigh the disadvantages like minimal overhead compared to pure http.

**Otherwise:** Attackers could perform man-in-the-middle attacks, spy on your users' behaviour and perform even more malicious actions when the connection is unencrypted

🔗 [**Read More: Running a secure Node.js server**](secureserver.md)

<br/><br/>

## ![✔] Comparing secret values and hashes securely

**TL;DR:** When comparing secret values or hashes like HMAC digests, you should use the [`crypto.timingSafeEqual(a, b)`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) function Node provides out of the box since Node.js v6.6.0. This method compares two given objects and keeps comparing even if data does not match. The default equality comparison methods would simply return after a character mismatch, allowing timing attacks based on the operation length.

**Otherwise:** Using default equality comparison operators you might expose critical information based on the time taken to compare two objects

<br/><br/>

## ![✔] Generating random strings using Node.js

**TL;DR:** Using a custom-built function generating pseudo-random strings for tokens and other security-sensitive use cases might actually not be as random as you think, rendering your application vulnerable to cryptographic attacks. When you have to generate secure random strings, use the [`crypto.RandomBytes(size, [callback])`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback) function using available entropy provided by the system.

**Otherwise:** When generating pseudo-random strings without cryptographically secure methods, attackers might predict and reproduce the generated results, rendering your application insecure

<br/><br/>

Going on, below we've listed some important bits of advice from the OWASP project.

## ![✔] OWASP A2: Broken Authentication

- Require MFA/2FA for important services and accounts
- Rotate passwords and access keys frequently, including SSH keys
- Apply strong password policies, both for ops and in-application user management ([🔗 OWASP password recommendation](https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Implement_Proper_Password_Strength_Controls.22))
- Do not ship or deploy your application with any default credentials, particularly for admin users or external services you depend on
- Use only standard authentication methods like OAuth, OpenID, etc.  - **avoid** basic authentication
- Auth rate limiting: Disallow more than _X_ login attempts (including password recovery, etc.) in a period of _Y_
- On login failure, don't let the user know whether the username or password verification failed, just return a common auth error
- Consider using a centralized user management system to avoid managing multiple account per employee (e.g. GitHub, AWS, Jenkins, etc) and to benefit from a battle-tested user management system

## ![✔] OWASP A5:  Broken access control

- Respect the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)  -  every component and DevOps person should only have access to the necessary information and resources
- **Never** work with the console/root (full-privilege) account except for account management
- Run all instances/containers on behalf of a role/service account
- Assign permissions to groups and not to users. This should make permission management easier and more transparent for most cases


<br/><br/><br/>
