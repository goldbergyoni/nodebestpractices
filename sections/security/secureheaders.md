# Using security-related headers to secure your application against common attacks

<br/><br/>


### One Paragraph Explainer

There are security-related headers used to secure your application further. The most important headers are listed below. You can also visit the sites linked at the bottom of this page to get more information on this topic. You can easily set these headers using the [Helmet](https://www.npmjs.com/package/helmet) module for express ([Helmet for koa](https://www.npmjs.com/package/koa-helmet)).

<br/><br/>

### Table of Contents
- [HTTP Strict Transport Security (HSTS)](#http-strict-transport-security-hsts)
- [Public Key Pinning for HTTP (HPKP)](#public-key-pinning-for-http-hpkp)
- [X-Frame-Options](#x-frame-options)
- [X-XSS-Protection](#x-xss-protection)
- [X-Content-Type-Options](#x-content-type-options)
- [Referrer-Policy](#referrer-policy)
- [Expect-CT](#expect-ct)
- [Content-Security-Policy](#content-security-policy)
- [Additional Resource](#additional-resources)

<br/><br/>

### HTTP Strict Transport Security (HSTS)

HTTP Strict Transport Security (HSTS) is a web security policy mechanism to protect websites against [protocol downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack) and [cookie hijacking](https://www.owasp.org/index.php/Session_hijacking_attack). It allows web servers to declare that web browsers (or other complying user agents) should only interact with it using __secure HTTPS connections__, and __never__ via the insecure HTTP protocol. The HSTS policy is implemented by using the `Strict-Transport-Security` header over an existing HTTPS connection.

The Strict-Transport-Security Header accepts a `max-age` value in seconds, to notify the browser how long it should access the site using HTTPS only, and an `includeSubDomains` value to apply the Strict Transport Security rule to all of the site's subdomains.

Header Example - HSTS Policy enabled for one week, include subdomains
```
Strict-Transport-Security: max-age=2592000; includeSubDomains
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hsts)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

<br/><br/>

### Public Key Pinning for HTTP (HPKP)

HTTP Public Key Pinning (HPKP) is a security mechanism allowing HTTPS websites to resist impersonation by attackers using mis-issued or otherwise fraudulent SSL/TLS certificates.

The HTTPS web server serves a list of public key hashes, and on subsequent connections clients expect that server to use one or more of those public keys in its certificate chain. Using this feature carefully, you can greatly reduce the risk of man-in-the-middle (MITM) attacks and other false authentication problems for your application's users without incurring undue risk.

Before implementing you should have a look at the `Expect-CT` header first, due to its advanced flexibility for recovery from misconfiguration and other [advantages](https://groups.google.com/a/chromium.org/forum/m/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ).

The Public-Key-Pins header accepts 4 values, a `pin-sha256` value for adding the certificate public key, hashed using the SHA256 algorithm, which can be added multiple times for different public keys, a `max-age` value to tell the browser how long it should apply the rule, an `includeSubDomains` value to apply this rule to all subdomains and a `report-uri` value to report pin validation failures to the given URL.

Header Example - HPKP Policy enabled for one week, include subdomains , report failures to an example URL and allow two public keys
```
Public-Key-Pins: pin-sha256="d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM="; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g="; report-uri="http://example.com/pkp-report"; max-age=2592000; includeSubDomains
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hpkp)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)

<br/><br/>

### X-Frame-Options

The X-Frame-Options header secures the application against [Clickjacking](https://www.owasp.org/index.php/Clickjacking) attacks by declaring a policy whether your application may be embedded on other (external) pages using frames.

X-Frame-Options allows 3 parameters, a `deny` parameter to disallow embedding the resource in general, a `sameorigin` parameter to allow embedding the resource on the same host/origin and an `allow-from` parameter to specify a host where embedding of the resource is allowed.

Header Example - Deny embedding of your application
```
X-Frame-Options: deny
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

<br/><br/>

### X-XSS-Protection

This header enables the [Cross-site scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) filter in your browser.

It accepts 4 parameters, `0` for disabling the filter, `1` for enabling the filter and enable automatic sanitization of the page, `mode=block` to enable the filter and prevent the page from rendering if a XSS attack is detected (this parameter has to be added to `1` using a semicolon, and `report=<domainToReport>` to report the violation (this parameter has to be added to `1`).

Header Example - Enable XSS Protection and report violations to example URL
```
X-XSS-Protection: 1; report=http://example.com/xss-report
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)

🔗 [Read on OWASP Secure Headers Project](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

<br/><br/>

### X-Content-Type-Options

Setting this header will prevent the browser from [interpreting files as something else](https://en.wikipedia.org/wiki/Content_sniffing) than declared by the content type in the HTTP headers.

Header Example - Disallow Content sniffing
```
X-Content-Type-Options: nosniff
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)


<br/><br/>

### Referrer-Policy

The Referrer-Policy HTTP header governs which referrer information, sent in the `Referer` header, should be included with requests made.

It allows 8 parameters, a `no-referrer` parameter to remove the `Referer` header completely, a `no-referrer-when-downgrade` to remove the `Referer` header when downgraded for example HTTPS -> HTTP, an `origin` parameter to send the host origin (the host root) as referrer __only__, an `origin-when-cross-origin` parameter to send a full origin URL when staying on the same origin and send the host origin __only__ when otherwise, a `same-origin` parameter to send referrer information only for same-site origins and omit on cross-origin requests, a `strict-origin` parameter to keep the `Referer` header only on the same security-level (HTTPS -> HTTPS) and omit it on a less secure destination, a `strict-origin-when-cross-origin` parameter to send the full referrer URL to a same-origin destination, the origin __only__ to a cross-origin destination on the __same__ security level and no referrer on a less secure cross-origin destination, and an `unsafe-url` parameter to send the full referrer to same-origin or cross-origin destinations.

Header Example - Remove the `Referer` header completely
```
Referrer-Policy: no-referrer
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)


<br/><br/>

### Expect-CT

The Expect-CT header is used by a server to indicate that browsers should evaluate connections to the host emitting the header for [Certificate Transparency](https://www.certificate-transparency.org/) compliance.

This header accepts 3 parameters, a `report-uri` parameter to supply a URL to report Expect-CT failures to, a `enforce` parameter to signal the browser that Certificate Transparency should be enforced (rather than only reported) and refuse future connections violating the Certificate Transparency, and a `max-age` parameter to specify the number of seconds the browser regard the host as a known Expect-CT host.

Header Example - Enforce Certificate Transparency for a week and report to example URL
```
Expect-CT: max-age=2592000, enforce, report-uri="https://example.com/report-cert-transparency"
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#ect)


<br/><br/>

### Content-Security-Policy

The HTTP Content-Security-Policy response header allows to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints. This helps guard against [cross-site scripting attacks (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)).

Header Example - Enable CSP and only execute scripts from the same origin
```
Content-Security-Policy: script-src 'self'
```

There are many policies enabled with Content-Security-Policy that can be found on the sites linked below.

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#csp)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)


<br/><br/>

### Additional resources

🔗 [OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers)

🔗 [Node.js Security Checklist (RisingStack)](https://blog.risingstack.com/node-js-security-checklist/)


<br/><br/>
