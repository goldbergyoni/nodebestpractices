# Separate Express 'app' and 'server'

<br/><br/>

### One Paragraph Explainer

El último generador de Express viene con una gran práctica que vale la pena mantener. La declaración API separada de la configuración relacionada con la red (puerto, protocolo, etc). Esto permite testear la API sin realizar llamadas de red, con todos los beneficios que ello conlleva: una ejecución rápida de los tests y la obtención de métricas de coverage. También permite desplegar la misma API bajo diferentes condiciones de red. Y otro plus: una mejor división de responsabilidades y un código más limpio.

<br/><br/>

### Code example: API declaration, should reside in app.js

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### Code example: Server network declaration, should reside in /bin/www

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

### Example: test your API in-process using supertest (popular testing package)

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
````
