# Separar 'servidor' y 'aplicación' de express

<br/><br/>

### Un párrafo explicativo

El último generador de Express viene con una gran práctica que vale la pena mantener: la declaración del API está separada de la configuración relacionada con la red (puerto, protocolo, etc.). Esto permite probar el API en proceso, sin realizar llamadas de red, con todos los beneficios que trae a la mesa: ejecución de prueba rápida y obtención de métricas de cobertura del código. También permite implementar la misma API bajo condiciones de red flexibles y diferentes. Bonificación: mejor separación de conceptos y código más limpio

<br/><br/>

### Ejemplo de código: Declaración del API, debe residiir en app.js
```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);

```
<br/><br/>

### Ejemplo de código: Declaración de red del servidor, debe residir en /bin/www
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
### Ejemplo: prueba tu API en proceso usando supertest (paquete de testing popular)
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/supertestinprocess.PNG "In process testing with Supertest")
