# Using HTTPS to encrypt the client-server connection

<br/><br/>


### One Paragraph Explainer

Using services such as [Let'sEncrypt](https://letsencrypt.org/), a certificate authority which provides __free__ SSL/TLS certificates, can help encrypt the communication of your applications. Node.js frameworks like [Express](http://expressjs.com/) (based on the core `https` module) support SSL/TLS, which can be implemented in a few lines of code.

You can also configure SSL/TLS on a reverse proxy, such as [NGINX](http://nginx.org/en/docs/http/configuring_https_servers.html) or HAProxy.

<br/><br/>

### Code Example – Enabling SSL/TLS using the Express framework

```javascript
const express = require('express');
const https = require('https');
const app = express();
const options = {
    // The path should be changed accordingly to your setup
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};
https.createServer(options, app).listen(443);
```

<br/><br/>
