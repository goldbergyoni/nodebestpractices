# Limit payload size using a reverse-proxy or a middleware

### One Paragraph Explainer

Parsing request bodies, for example JSON-encoded payloads, is a performance-heavy operation, especially with larger requests.
When handling incoming requests in your web application, you should limit the size of their respective payloads. Incoming requests with
unlimited body/payload sizes can lead to your application performing badly or crashing due to a denial-of-service outage or other unwanted side-effects.
Many popular middleware-solutions for parsing request bodies, such as the already-included `body-parser` package for express, expose
options to limit the sizes of request payloads, making it easy for developers to implement this functionality. You can also
integrate a request body size limit in your reverse-proxy/web server software if supported. Below are examples for limiting request sizes using
`express` and/or `nginx`.

### Example code for `express`

```javascript
const express = require('express');

const app = express();

app.use(express.json({ limit: '300kb' })); // body-parser defaults to a body size limit of 100kb

// Request with json body
app.post('/json', (req, res) => {

    // Check if request payload content-type matches json, because body-parser does not check for content types
    if (!req.is('json')) {
        return res.sendStatus(415); // -> Unsupported media type if request doesn't have JSON body
    }

    res.send('Hooray, it worked!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

🔗 [**Express docs for express.json()**](http://expressjs.com/en/4x/api.html#express.json)

### Example configuration for `nginx`

```nginx
http {
    ...
    # Limit the body size for ALL incoming requests to 1 MB
    client_max_body_size 1m;
}

server {
    ...
    # Limit the body size for incoming requests to this specific server block to 1 MB
    client_max_body_size 1m;
}

location /upload {
    ...
    # Limit the body size for incoming requests to this route to 1 MB
    client_max_body_size 1m;
}
```

🔗 [**Nginx docs for client_max_body_size**](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)