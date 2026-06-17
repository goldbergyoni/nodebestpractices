# Prevent Server-Side Request Forgery (SSRF)

<br/><br/>

### One Paragraph Explainer

Server-Side Request Forgery (SSRF) is an attack where an adversary tricks a Node.js server into making outbound HTTP requests to an unintended destination — typically an internal service that is not reachable from the public internet. Node.js applications are particularly exposed because outbound HTTP calls are common and easy to write: `fetch(userProvidedUrl)`, `axios.get(req.query.url)`, or `http.request(options)` can all become SSRF vectors when the URL is influenced by user input. A successful attack allows the adversary to scan the internal network, reach cloud metadata endpoints (e.g. `http://169.254.169.254` on AWS/GCP), bypass host-based authentication, or force the server to impersonate itself when calling third-party services. The defense has three layers: (1) never pass raw user input as a URL, (2) validate URLs against an explicit allowlist of trusted domains and enforce `https:` only, and (3) block requests that resolve to private or link-local IP ranges before the connection is opened. Always use the WHATWG `new URL()` parser — the legacy `url.parse()` is deprecated and its inconsistent parsing behavior has been exploited to bypass URL validation logic.

<br/><br/>

### Code Example — Attack vector (vulnerable)

```javascript
// VULNERABLE: user-supplied URL is fetched without validation
app.get('/preview', async (req, res) => {
  const { url } = req.query;

  // Attacker passes: http://169.254.169.254/latest/meta-data/iam/security-credentials/
  // or:              http://internal-admin.corp/api/users
  // or:              file:///etc/passwd
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});
```

<br/><br/>

### Code Example — Defence in depth (safe)

```javascript
import { ssrfFilter } from 'ssrf-req-filter'; // npm i ssrf-req-filter

// Explicit allowlist of domains your application is permitted to reach
const ALLOWED_HOSTNAMES = new Set(['api.example.com', 'cdn.example.com']);

app.get('/preview', async (req, res) => {
  const rawUrl = req.query.url;

  // 1. Parse first — reject anything that is not a valid URL.
  //    Use WHATWG new URL(), NOT the deprecated url.parse() which has
  //    inconsistent behaviour that attackers exploit to bypass validation.
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  // 2. Enforce protocol allowlist — only HTTPS, never file://, ftp://, gopher://, etc.
  if (parsed.protocol !== 'https:') {
    return res.status(400).json({ error: 'Only HTTPS URLs are permitted' });
  }

  // 3. Enforce domain allowlist — reject anything not explicitly trusted.
  //    An allowlist is strict by default; a blocklist of "bad" IPs is fragile
  //    against new internal ranges, IPv6 addresses, and DNS rebinding.
  if (!ALLOWED_HOSTNAMES.has(parsed.hostname)) {
    return res.status(403).json({ error: 'Domain not in allowlist' });
  }

  // 4. Block private / link-local / loopback IPs after DNS resolution.
  //    ssrf-req-filter resolves the hostname and rejects RFC-1918 ranges,
  //    loopback (127.x), link-local (169.254.x), and IPv6 equivalents.
  //    This also guards against DNS rebinding where a hostname initially
  //    resolves to a safe IP but later resolves to an internal address.
  const safeAgent = ssrfFilter(rawUrl);
  const response = await fetch(rawUrl, {
    agent: safeAgent,
    redirect: 'error', // 5. Disable redirects — a redirect from a trusted domain
                       //    to an internal address would bypass the allowlist above.
  });

  const body = await response.text();
  res.send(body);
});
```

<br/><br/>

### Runtime defence — Node.js Permission Model (Node 20+)

Node.js 20 introduced an experimental Permission Model that restricts which network addresses a process may contact at the runtime level. This is a defence-in-depth measure and does not replace application-level validation.

```bash
# Only allow outbound connections to api.example.com
node --experimental-permission --allow-net=api.example.com server.js
```

Any `fetch()` or `http.request()` call to a host not listed in `--allow-net` will throw an `ERR_ACCESS_DENIED` error at runtime, even if application-level validation is bypassed.

<br/><br/>

### Defence Checklist

- **Never trust user-supplied URLs.** If a URL must come from the user, validate every component: scheme, hostname, port, and path.
- **Allowlist over blocklist.** Maintaining a blocklist of "bad" IPs is fragile — new internal ranges, IPv6 addresses, and DNS rebinding can bypass it. An allowlist of trusted domains is strict by default.
- **Enforce `https:` only.** `file://`, `ftp://`, `gopher://`, and `dict://` are all legitimate URL schemes that SSRF payloads exploit. Reject everything that is not `https:`.
- **Resolve DNS before connecting.** A hostname may look safe but resolve to `127.0.0.1`. Libraries like [ssrf-req-filter](https://www.npmjs.com/package/ssrf-req-filter) or [ssrf-agent](https://www.npmjs.com/package/ssrf-agent) resolve the target address and abort the request if it falls within a private range.
- **Watch out for DNS rebinding.** A single validation check at request time is not sufficient if the attacker controls DNS TTL. Pin the resolved IP for the duration of the request.
- **Disable redirects, or re-validate after each hop.** A redirect from `https://trusted.com` → `http://169.254.169.254` bypasses an initial allowlist check. Set `redirect: 'error'` in fetch options or re-validate every redirect target.
- **Avoid deprecated `url.parse()`.** Use `new URL()` which throws on malformed input and is not susceptible to parser differential bugs that have historically been exploited to bypass URL guards.
- **Use ESLint to detect SSRF-prone patterns.** The [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) package flags `require` with variable paths and other dangerous patterns; pair it with manual code review for any call site that accepts a URL from external input.
- **Use Node 20+ `--experimental-permission --allow-net=` for runtime-level restriction.** This provides defence-in-depth at the engine level even if application logic is bypassed.

<br/><br/>

### What other bloggers say

From the [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html):
> The primary defense option is to use an allowlist. This approach allows you to define the URLs, IPs, and domains that your application can request. Any request that does not match this allowlist should be denied.

From [Snyk's guide on SSRF in Node.js](https://snyk.io/blog/security-best-practices-nodejs/):
> DNS rebinding is a particularly subtle form of SSRF where an attacker-controlled DNS entry initially resolves to an acceptable IP, but the TTL is set very low so that by the time the server connects, the IP has been swapped to an internal address. The only reliable fix is to resolve the DNS name, check the resolved IP, and then connect directly to that IP — not reconnect via hostname.
