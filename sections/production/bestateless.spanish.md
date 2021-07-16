# Sin estado: reinicia tus servidores casi cada día

<br/><br/>

### Párrafo de explicación

¿Te has encontrado alguna vez un grave problema en producción en el que a un servidor le faltaba algo de configuración o información? Probablemente se deba a alguna dependencia innecesaria en algún recurso local que no es parte del despliegue. Muchos productos de éxito tratan a los servidores como a un pájaro fénix: muere y renace periódicamente sin sufrir daños. En otras palabras, un servidor es solo una pieza de hardware que ejecuta tu código durante un tiempo y que después se reemplaza. De esta manera:

- Se puede escalar añadiendo y quitando servidores dinámicamente, sin efectos secundarios.
- Se simplifica el mantenimiento ya que libera nuestra mente de tener que evaluar el estado de cada servidor.

<br/><br/>

### Código de ejemplo anti-patrón

```javascript
// Error común #1: guardando archivos subidos de manera local en el servidor
var multer = require('multer'); // middleware de express para el manejo de cargas multi-partes
var upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {});

// Error común #2: guardando sesiones de autenticación (passport) en un archivo local o en memoria
var FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// Error común #3: almacenando información en un objeto global
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### Cita de blog: "Un servidor debería ser como un fénix, naciendo de entre las cenizas regularmente".

Del blog [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html)

> ...One day I had this fantasy of starting a certification service for operations. The certification assessment would consist of a colleague and I turning up at the corporate data center and setting about critical production servers with a baseball bat, a chainsaw, and a water pistol. The assessment would be based on how long it would take for the operations team to get all the applications up and running again. This may be a daft fantasy, but there’s a nugget of wisdom here. While you should forego the baseball bats, it is a good idea to virtually burn down your servers at regular intervals. A server should be like a phoenix, regularly rising from the ashes...

> ... Un día tuve esta fantasía de empezar una certificación de servicio de operaciones. La prueba de la certificación consistía en que un colega y yo llegáramos a un data center corporativo y dejar en estado crítico los servidores de producción con un bate de béisbol, una motosierra, y una pistola de agua. La prueba estaría basada en que tan rápido el equipo de operaciones tenga todas las aplicaciónes de nuevo en línea. Está puede haber sido una fantasía, pero hay un aprendizaje aquí. Si bien debes descartar los bates de béisbol, es buena idean el quemar virtualmente los servidores en interválos regulares. Un servidor debería ser como un fénix, naciendo de entre las cenizas regularmente.

<br/><br/>
