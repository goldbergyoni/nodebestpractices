[✔]: ../../assets/images/checkbox-small-blue.png

# 일반적인 Node.js 보안 모범 사례

일반적인 보안 가이드라인 섹션에는 많은 프레임워크들과 규칙들에서 표준화된 모범 사례들이 포함되어있다. 예를 들어, SSL/TLS로 애플리케이션을 실행할 때 보안 이점을 얻기 위해서는 모든 설정에서 공통 지침 및 규칙을 따라야만 한다.

## ![✔] Use SSL/TLS to encrypt the client-server connection
## ![✔] 클라이언트-서버 연결을 암호화하기 위해 SSL/TLS를 사용하라.

**핵심 요약:** [무료 SSL/TLS 인증서](https://letsencrypt.org/) 및 쉬운 구성의 시대이므로 당신은 더 이상 보안 서버 사용에 대한 장단점을 저울질 할 필요가 없다. 순수 HTTP에 비해 최소한의 오버헤드와 같은 단점보다 보안, 지원 등의 장점 및 현대 기술에 대한 신뢰가 훨씬 더 크다.

**그렇게 하지 않으면:** 공격자들이 메시지 가로채기(man-in-the-middle) 공격을 수행하거나 유저의 행동을 감시하고, 연결이 암호화되지 않은 경우에는 더욱 더 악의적인 작업을 수행할 수도 있다.

🔗 [**Read More: Running a secure Node.js server**](/sections/security/secureserver.md)

<br/><br/>

## ![✔] 기밀 값과 해시를 안전하게 비교하라.

**TL;DR:** When comparing secret values or hashes like HMAC digests, you should use the [`crypto.timingSafeEqual(a, b)`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) function Node provides out of the box since Node.js v6.6.0. This method compares two given objects and keeps comparing even if data does not match. The default equality comparison methods would simply return after a character mismatch, allowing timing attacks based on the operation length.

**핵심 요약:** HMAC digests 같은 해시와 기밀 값을 비교할 때, Node.js v6.6.0부터 제공되는 [`crypto.timingSafeEqual(a, b)`](https//nodejs.org/dist/latest-v9.x /docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) 기능을 사용하자. 이 방식은 주어진 두 객체를 비교하고, 데이터가 일치하지 않더라도 계속해서 비교한다. 기본적인 일치 비교 방식은 문자 불일치 후에 단순하게 값이 반환되기 때문에 작업 길이를 기반으로 한 시간 차 공격을 허용한다.

**그렇게 하지 않으면:** 기본적인 일치 비교 연산자를 사용하면, 두 개체를 비교할 때 걸린 시간을 기반으로하여 중요한 정보가 노출될 수 있다.

<br/><br/>

## ![✔] Node.js를 사용해 임의의 문자열을 생성하라.

**TL;DR:** Using a custom-built function generating pseudo-random strings for tokens and other security-sensitive use cases might actually not be as random as you think, rendering your application vulnerable to cryptographic attacks. When you have to generate secure random strings, use the [`crypto.RandomBytes(size, [callback])`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback) function using available entropy provided by the system.

**Otherwise:** When generating pseudo-random strings without cryptographically secure methods, attackers might predict and reproduce the generated results, rendering your application insecure

**핵심 요약:** 토큰과 여러 보안에 민감한 사용 사례에 대해서 의사 난수 문자열을 생성하는 사용자 정의 기능을 사용하면, 실제 결과가 당신의 생각만큼 무작위가 아닐 수 있기 때문에 애플리케이션이 암호화 공격에 취약해질 수 있다. 안전한 임의의 문자열을 생성해야 하는 경우 [`crypto.RandomBytes(size, [callback])`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html# crypto_crypto_randombytes_size_callback) 함수는 시스템에서 제공하는 사용 가능한 엔트로피를 사용합니다.

**그렇게 하지 않으면:** 암호학적으로 안전한 방법 없이 의사 난수 문자열을 생성할 때 공격자가 생성된 결과를 예측하고 재현하여 애플리케이션을 불안정하게 만들 수 있습니다.

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
- Consider using a centralized user management system to avoid managing multiple accounts per employee (e.g. GitHub, AWS, Jenkins, etc) and to benefit from a battle-tested user management system

## ![✔] OWASP A5:  Broken access control

- Respect the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)  -  every component and DevOps person should only have access to the necessary information and resources
- **Never** work with the console/root (full-privilege) account except for account management
- Run all instances/containers on behalf of a role/service account
- Assign permissions to groups and not to users. This should make permission management easier and more transparent for most cases

## ![✔] OWASP A6: Security Misconfiguration

- Access to production environment internals is done through the internal network only, use SSH or other ways, but _never_ expose internal services
- Restrict internal network access  - explicitly set which resource can access other resources (e.g. network policy or subnets)
- If using cookies, configure it to "secured" mode where it's being sent over SSL only
- If using cookies, configure it for "same site" only so only requests from same domain will get back the designated cookies
- If using cookies, prefer "HttpOnly" configuration that prevent client-side JavaScript code from accessing the cookies
- Protect each VPC with strict and restrictive access rules
- Prioritize threats using any standard security threat modeling like STRIDE or DREAD
- Protect against DDoS attacks using HTTP(S) and TCP load balancers
- Perform periodic penetration tests by specialized agencies

## ![✔] OWASP A3: Sensitive Data Exposure

- Only accept SSL/TLS connections, enforce Strict-Transport-Security using headers
- Separate the network into segments (i.e. subnets) and ensure each node has the least necessary networking access permissions
- Group all services/instances that need no internet access and explicitly disallow any outgoing connection (a.k.a private subnet)
- Store all secrets in a vault products like AWS KMS, HashiCorp Vault or Google Cloud KMS
- Lockdown sensitive instance metadata using metadata
- Encrypt data in transit when it leaves a physical boundary
- Don't include secrets in log statements
- Avoid showing plain passwords in the frontend, take necessary measures in the backend and never store sensitive information in plaintext

## ![✔] OWASP A9: Using Components With Known Security Vulneraibilities

- Scan docker images for known vulnerabilities (using Docker's and other vendors offer scanning services)
- Enable automatic instance (machine) patching and upgrades to avoid running old OS versions that lack security patches
- Provide the user with both 'id', 'access' and 'refresh' token so the access token is short-lived and renewed with the refresh token
- Log and audit each API call to cloud and management services (e.g who deleted the S3 bucket?) using services like AWS CloudTrail
- Run the security checker of your cloud provider (e.g. AWS security trust advisor)


## ![✔] OWASP A10: Insufficient Logging & Monitoring

- Alert on remarkable or suspicious auditing events like user login, new user creation, permission change, etc
- Alert on irregular amount of login failures (or equivelant actions like forgot password)
- Include the time and username that initiated the update in each DB record

## ![✔] OWASP A7: Cross-Site-Scripting (XSS)

- Use templating engines or frameworks that automatically escape XSS by design, such as EJS, Pug, React, or Angular. Learn the limitations of each mechanisms XSS protection and appropriately handle the use cases which are not covered
- Escaping untrusted HTTP request data based on the context in the HTML output (body, attribute, JavaScript, CSS, or URL) will resolve Reflected and Stored XSS vulnerabilities
- Applying context-sensitive encoding when modifying the browser document on the client-side acts against DOM XSS
- Enabling a Content-Security Policy (CSP) as a defense-in-depth mitigating control against XSS

## ![✔] Protect Personally Identifyable Information (PII Data)

- Personally identifiable information (PII) is any data that can be used to identify a specific individual
- Protect Personally Identifyable Information in the Applications by encrypting them
- Follow the data privacy laws of the land


- Reference laws:

- European Union: GDPR - https://ec.europa.eu/info/law/law-topic/data-protection_en
- India: https://meity.gov.in/writereaddata/files/Personal_Data_Protection_Bill,2018.pdf
- Singapore: https://www.pdpc.gov.sg/Legislation-and-Guidelines/Personal-Data-Protection-Act-Overview

<br/><br/><br/>
