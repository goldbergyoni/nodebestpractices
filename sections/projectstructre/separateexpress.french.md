# Séparez Express 'app' et 'server'

<br/><br/>

### Un paragraphe d'explication

Le dernier générateur Express est livré avec une excellente pratique qui vaut la peine d'être conservée - la déclaration de l'API est séparée de la configuration liée au réseau (port, protocole, etc.). Cela permet de tester l'API en cours de traitement, sans effectuer d'appels réseau, avec tous les avantages qu'elle apporte : exécution rapide des tests et obtention des mesures de couverture du code. Il permet également de déployer la même API dans des conditions de réseau flexibles et différentes. Bonus : une meilleure séparation des préoccupations et un code plus propre.

<br/><br/>

### Exemple de code : la déclaration de l'API doit résider dans app.js/app.ts

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms);
```

### Exemple de code : la déclaration du réseau du serveur doit résider dans /bin/www

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const app = require('../app');
const http = require('http');

// Obtenir le port de l'environnement et le stockez dans Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Créer un serveur HTTP.
const server = http.createServer(app);
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
import app from '../app';
import http from 'http';

// Obtenir le port de l'environnement et le stockez dans Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Créer un serveur HTTP.
const server = http.createServer(app);
```
</details>

### Exemple : testez votre API en cours de traitement à l'aide de supertest (package de test populaire)

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const request = require('supertest');
const app = express();

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
  });
```
</details>


<details>
<summary><strong>Typescript</strong></summary>

```typescript
import * as request from "supertest";
const app = express();

app.get('/user', (req: Request, res: Response) => {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end((err: Error) => {
    if (err) throw err;
  });

```
</details>