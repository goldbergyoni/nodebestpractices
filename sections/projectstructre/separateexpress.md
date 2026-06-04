# Separate Express 'app' and 'server'

<br/><br/>

### One Paragraph Explainer

The latest Express generator comes with a great practice worth keeping — the API declaration is separated from the network-related configuration (port, protocol, etc.). This allows testing the API in-process, without performing network calls, bringing two benefits: faster test execution and getting code coverage metrics. It also allows deploying the same API under flexible and different network conditions. Bonus: better separation of concerns and cleaner code.

<br/><br/>

### Code Example: API declaration, should reside in app.js

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### Code Example: Server network declaration, should reside in /bin/www

```javascript
var app = require('../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
```

<br/><br/>

### Code Example: Test your app in-process using a fast and popular testing package

```javascript
const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
```
