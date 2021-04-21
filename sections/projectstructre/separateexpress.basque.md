# Banandu Express 'aplikazioa' eta 'zerbitzaria'

<br/><br/>

### Azalpena

Azken Express sorgailuak mantentzea merezi duen sekulako praktika bikaina du. Izan ere, APIaren deklarazioa sarearekin erlazionatutako ezarpenetatik (portua, protokoloa, etab.) banandua dago. Horrek ahalbidetzen du APIa egiaztatzea prozesua martxan den bitartean, sare deirik egin gabe eta horrek dakartzan onura guztiekin: egiaztatze azkarren exekuzioa eta estalduraren metrikak eskuratzea. API bera sare baldintza malgu eta ezberdinetan inplementatzea ere ahalbidetzen du. Gehigarria: arduren bereizte hobea eta kode garbiagoa

<br/><br/>

### Kode adibidea: APIaren deklarazioak app.js/app.ts-en barruan egon beharko luke

```javascript
const app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

### Kode adibidea: zerbitzari sarearen deklarazioak /bin/www-en barruan egon beharko luke

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const app = require("../app");
const http = require("http");

// Ingurunearen portua eskuratu eta Expressen gorde.
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Sortu HTTP zerbitzaria.
const server = http.createServer(app);
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
import app from "../app";
import http from "http";

// Ingurunearen portua eskuratu eta Expressen gorde.
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Sortu HTTP zerbitzaria.
const server = http.createServer(app);
```

</details>

### Kode adibidea: zure APIa prozesua martxan den bitartean probatu supertest (probentzako pakete ospetsua) erabiliz

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const request = require("supertest");
const app = express();

app.get("/user", (req, res) => {
  res.status(200).json({ name: "tobi" });
});

request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
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

app.get("/user", (req: Request, res: Response) => {
  res.status(200).json({ name: "tobi" });
});

request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
  .expect(200)
  .end((err: Error) => {
    if (err) throw err;
  });
```

</details>
