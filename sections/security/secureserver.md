# Using HTTPS to encrypt the client-server connection

<br/><br/>


### One Paragraph Explainer

Using services like the [Let'sEncrypt](https://letsencrypt.org/) certificate authority providing __free__ ssl/tls certificates, you can easily obtain a certificate to secure your application. Node.js frameworks like [Express](http://expressjs.com/) (based on the core `https` module) support ssl/tls based servers easily, so the configuration can be done in a few lines of additional code.

You can also configure ssl/tls on your reverse proxy pointing to your application for example using [nginx](http://nginx.org/en/docs/http/configuring_https_servers.html) or HAProxy.

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
