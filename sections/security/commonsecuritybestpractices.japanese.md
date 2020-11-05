[✔]: ../../assets/images/checkbox-small-blue.png

# 一般的な Node.js セキュリティベストプラクティス

この一般的なセキュリティガイドラインのセクションには、多くのフレームワークや慣習において標準となっているベストプラクティスが含まれています。例えば、SSL/TLS を使用してアプリケーションを実行するということは、優れたセキュリティ上の利点を享受するためにあらゆる環境において従われる、よくあるガイドラインや慣習です。

## ![✔] クライアント・サーバー間の通信を暗号化するために SSL/TLS を使用する

**TL;DR:** In the times of [free SSL/TLS certificates](https://letsencrypt.org/) and easy configuration of those, you do no longer have to weigh advantages and disadvantages of using a secure server because the advantages such as security, support of modern technology and trust clearly outweigh the disadvantages like minimal overhead compared to pure HTTP.

**Otherwise:** Attackers could perform man-in-the-middle attacks, spy on your users' behaviour and perform even more malicious actions when the connection is unencrypted

🔗 [**Read More: Running a secure Node.js server**](/sections/security/secureserver.md)

<br/><br/>

## ![✔] シークレット値とハッシュ値をセキュアに比較する

**TL;DR:** When comparing secret values or hashes like HMAC digests, you should use the [`crypto.timingSafeEqual(a, b)`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) function Node provides out of the box since Node.js v6.6.0. This method compares two given objects and keeps comparing even if data does not match. The default equality comparison methods would simply return after a character mismatch, allowing timing attacks based on the operation length.

**Otherwise:** Using default equality comparison operators you might expose critical information based on the time taken to compare two objects

<br/><br/>

## ![✔] Node.js を用いてランダムな文字列を生成する

**TL;DR:** Using a custom-built function generating pseudo-random strings for tokens and other security-sensitive use cases might actually not be as random as you think, rendering your application vulnerable to cryptographic attacks. When you have to generate secure random strings, use the [`crypto.RandomBytes(size, [callback])`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback) function using available entropy provided by the system.

**Otherwise:** When generating pseudo-random strings without cryptographically secure methods, attackers might predict and reproduce the generated results, rendering your application insecure

<br/><br/>

Going on, below we've listed some important bits of advice from the OWASP project.

## ![✔] OWASP A2: 壊れた認証

- Require MFA/2FA for important services and accounts
- Rotate passwords and access keys frequently, including SSH keys
- Apply strong password policies, both for ops and in-application user management ([🔗 OWASP password recommendation](https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Implement_Proper_Password_Strength_Controls.22))
- Do not ship or deploy your application with any default credentials, particularly for admin users or external services you depend on
- Use only standard authentication methods like OAuth, OpenID, etc.  - **avoid** basic authentication
- Auth rate limiting: Disallow more than _X_ login attempts (including password recovery, etc.) in a period of _Y_
- On login failure, don't let the user know whether the username or password verification failed, just return a common auth error
- Consider using a centralized user management system to avoid managing multiple accounts per employee (e.g. GitHub, AWS, Jenkins, etc) and to benefit from a battle-tested user management system

## ![✔] OWASP A5: 壊れたアクセスコントロール

- Respect the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)  -  every component and DevOps person should only have access to the necessary information and resources
- **Never** work with the console/root (full-privilege) account except for account management
- Run all instances/containers on behalf of a role/service account
- Assign permissions to groups and not to users. This should make permission management easier and more transparent for most cases

## ![✔] OWASP A6: セキュリティの設定ミス

- Access to production environment internals is done through the internal network only, use SSH or other ways, but _never_ expose internal services
- Restrict internal network access  - explicitly set which resource can access other resources (e.g. network policy or subnets)
- If using cookies, configure it to "secured" mode where it's being sent over SSL only
- If using cookies, configure it for "same site" only so only requests from same domain will get back the designated cookies
- If using cookies, prefer "HttpOnly" configuration that prevent client-side JavaScript code from accessing the cookies
- Protect each VPC with strict and restrictive access rules
- Prioritize threats using any standard security threat modeling like STRIDE or DREAD
- Protect against DDoS attacks using HTTP(S) and TCP load balancers
- Perform periodic penetration tests by specialized agencies

## ![✔] OWASP A3: センシティブなデータの露出

- Only accept SSL/TLS connections, enforce Strict-Transport-Security using headers
- Separate the network into segments (i.e. subnets) and ensure each node has the least necessary networking access permissions
- Group all services/instances that need no internet access and explicitly disallow any outgoing connection (a.k.a private subnet)
- Store all secrets in a vault products like AWS KMS, HashiCorp Vault or Google Cloud KMS
- Lockdown sensitive instance metadata using metadata
- Encrypt data in transit when it leaves a physical boundary
- Don't include secrets in log statements
- Avoid showing plain passwords in the frontend, take necessary measures in the backend and never store sensitive information in plaintext

## ![✔] OWASP A9: 既知のセキュリティ脆弱性を持つコンポーネントの使用

- Scan docker images for known vulnerabilities (using Docker's and other vendors' scanning services)
- Enable automatic instance (machine) patching and upgrades to avoid running old OS versions that lack security patches
- Provide the user with both 'id', 'access' and 'refresh' token so the access token is short-lived and renewed with the refresh token
- Log and audit each API call to cloud and management services (e.g who deleted the S3 bucket?) using services like AWS CloudTrail
- Run the security checker of your cloud provider (e.g. AWS security trust advisor)


## ![✔] OWASP A10: ロギングとモニタリングの不足

- Alert on remarkable or suspicious auditing events like user login, new user creation, permission change, etc
- Alert on irregular amount of login failures (or equivelant actions like forgot password)
- Include the time and username that initiated the update in each DB record

## ![✔] OWASP A7: クロスサイトスクリプティング（XSS）

- Use templating engines or frameworks that automatically escape XSS by design, such as EJS, Pug, React, or Angular. Learn the limitations of each mechanisms XSS protection and appropriately handle the use cases which are not covered
- Escaping untrusted HTTP request data based on the context in the HTML output (body, attribute, JavaScript, CSS, or URL) will resolve Reflected and Stored XSS vulnerabilities
- Applying context-sensitive encoding when modifying the browser document on the client-side acts against DOM XSS
- Enabling a Content-Security Policy (CSP) as a defense-in-depth mitigating control against XSS

## ![✔] 個人識別可能な情報（PIIデータ）の保護

- Personally identifiable information (PII) is any data that can be used to identify a specific individual
- Protect Personally Identifyable Information in the Applications by encrypting them
- Follow the data privacy laws of the land


- Reference laws:

- European Union: GDPR - https://ec.europa.eu/info/law/law-topic/data-protection_en
- India: https://meity.gov.in/writereaddata/files/Personal_Data_Protection_Bill,2018.pdf
- Singapore: https://www.pdpc.gov.sg/Legislation-and-Guidelines/Personal-Data-Protection-Act-Overview

## ![✔] security.txt ファイルを配置する［プロダクション］

**TL;DR:** Have a text file called ```security.txt``` under ```/.well-known```  directory (/.well-known/security.txt) or in the root directory (/security.txt) of your website or your web application in production. ```security.txt``` file should contain details using which security researchers can report vulnerabilities and also the contact details of the responsible person/group (email id and/or phone numbers) to whom the reports have to be sent. 

**Otherwise:** You may not be notified about the vulnerabilities. You will miss the opportunity to act on the vulnerabilities in time.

🔗 [**Read More: security.txt**](https://securitytxt.org/)
<br/><br/><br/>

## ![✔] SECURITY.md ファイルを配置する［オープンソース］

**TL;DR:** To give people instructions for responsibly reporting security vulnerabilities in your project, you can add a SECURITY.md file to your repository's root, docs, or .github folder. SECURITY.md file should contain details using which security researchers can report vulnerabilities and also the contact details of the responsible person/group (email id and/or phone numbers) to whom the reports have to be sent. 

**Otherwise:** You may not be notified about the vulnerabilities. You will miss the opportunity to act on the vulnerabilities in time.

🔗 [**Read More: SECURITY.md**](https://help.github.com/en/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)

<br/><br/><br/>


<br/><br/><br/>
