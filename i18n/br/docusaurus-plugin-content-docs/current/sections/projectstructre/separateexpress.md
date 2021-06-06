# Separe 'app' e 'server' no Express

<br/><br/>

### Explicação em um Parágrafo

O gerador mais recente do Express vem com uma ótima prática que vale a pena manter - a declaração da API é separada da configuração relacionada à rede (porta, protocolo, etc). Isso permite testar a API durante o processo, sem realizar chamadas de rede, com todos os benefícios que ela traz para a mesa: execução rápida de testes e obtenção de métricas de cobertura do código. Ele também permite implantar a mesma API em condições de rede flexíveis e diferentes. Bônus: melhor separação de preocupações e código mais limpo.

<br/><br/>

### Exemplo de código: declaração de API, deve residir em app.js

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### Exemplo de código: declaração de rede do servidor, deve residir em /bin/www

```javascript
var app = require('../app');
var http = require('http');

/**
 * Obtenha porta do ambiente e armazene no Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Crie um servidor HTTP.
 */

var server = http.createServer(app);
```

### Exemplo: teste sua API em processo usando o superteste (pacote de teste popular)

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
