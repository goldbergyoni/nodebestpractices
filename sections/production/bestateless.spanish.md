# Sin estado: reinicia tus servidores casi cada día

<br/><br/>

### Párrafo de explicación

¿Te has encontrado alguna vez un grave problema en producción en el que a un servidor le faltaba algo de configuración o información? Probablemente se deba a alguna dependencia innecesaria en algún recurso local que no es parte del deploy. Muchos productos de éxito tratan a los servidores como a un pájaro fénix: muere y renace periódicamente sin sufrir daños. En otras palabras, un servidor es solo una pieza de hardware que ejecuta tu código durante un tiempo y que después se reemplaza. De esta manera:

- Se puede escalar añadiendo y quitando servidores dinámicamente, sin efectos secundarios.
- Se simplifica el mantenimiento ya que libera nuestra mente de tener que evaluar el estado de cada servidor.

<br/><br/>

### Code example: anti-patterns

```javascript
// Typical mistake 1: saving uploaded files locally on a server
var multer = require('multer'); // express middleware for handling multipart uploads
var upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {});

// Typical mistake 2: storing authentication sessions (passport) in a local file or memory
var FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// Typical mistake 3: storing information on the global object
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### What Other Bloggers Say

From the blog [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html):
> ...One day I had this fantasy of starting a certification service for operations. The certification assessment would consist of a colleague and I turning up at the corporate data center and setting about critical production servers with a baseball bat, a chainsaw, and a water pistol. The assessment would be based on how long it would take for the operations team to get all the applications up and running again. This may be a daft fantasy, but there’s a nugget of wisdom here. While you should forego the baseball bats, it is a good idea to virtually burn down your servers at regular intervals. A server should be like a phoenix, regularly rising from the ashes...

<br/><br/>
