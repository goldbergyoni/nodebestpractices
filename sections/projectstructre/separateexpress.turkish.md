# 'uygulama' ve 'server' birbirinden ayrı Express uygulaması

<br/><br/>

### Bir Paragraf Açıklama

En son Express üreteçi, tutmaya değer harika bir uygulama ile birlikte geliyor - API tanımlaması ağ ile ilgili konfigürasyondan (port, protokol, vb.) ayrılmıştır. Bu, API'yi ağ çağrıları yapmadan test etmeye olanak tanır; tabloya getirdiği tüm avantajlarla birlikte: hızlı test yürütme ve kodun kapsam metriklerini alma. Aynı zamanda esnek ve farklı ağ koşullarında aynı API'nin dağıtılmasına izin verir. Bonus: farklı kavramların daha iyi ayrılması ve daha temiz kod

<br/><br/>

### Kod örneği: API tanımlamaası, app.js içerisinde yer almalıdır

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### Kod örneği: Sunucu ağ tanımı, /bin/www içerisinde yer almalıdır

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

### Örnek: supertest (popüler test paketi) kullanarak API'nizi test edin

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
