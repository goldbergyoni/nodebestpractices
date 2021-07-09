# Prevent unsafe redirects

### One Paragraph Explainer

When redirects are implemented in Node.js and/or Express, it's important to perform input validation on the server-side.
If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

Example: Unsafe express redirect using user input
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

The suggested fix to avoid unsafe redirects is to avoid relying on user input. If user input must be used, safe redirect whitelists can be used to avoid exposing the vulnerability.

Example: Safe redirect whitelist
```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // check if the url starts with a single slash 
  if (url.match(/^\/(?!\/)/)) { 
    // Prepend our domain to make sure 
    return 'https://example.com' + url; 
  } 
    // Otherwise check against a whitelist
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```


### What other bloggers say

From the blog by [NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db):
> Fortunately the mitigation methods for this vulnerability are quite straightforward — don’t use unvalidated user input as the basis for redirect. 

From the blog by [Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/)
> However, if the server-side redirect logic does not validate data entering the url parameter, your users may end up on a site that looks exactly like yours (examp1e.com), but ultimately serves the needs of criminal hackers!


