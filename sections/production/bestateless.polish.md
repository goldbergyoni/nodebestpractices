# Bądź stateless, zabijaj serwery prawie codziennie

<br/><br/>

### Wyjaśnienie jednym akapitem

Czy kiedykolwiek napotkałeś poważny problem z produkcją, w którym na jednym serwerze brakowało jakiejś konfiguracji lub danych? Jest to prawdopodobnie spowodowane niepotrzebną zależnością od lokalnego zasobu, który nie jest częścią wdrożenia. Wiele udanych produktów traktuje serwery jak feniksa - umiera i odradza się okresowo bez żadnych uszkodzeń. Innymi słowy, serwer to tylko część sprzętu, która wykonuje twój kod przez pewien czas, a następnie jest wymieniana.
To podejście

- umożliwia skalowanie poprzez dynamiczne dodawanie i usuwanie serwerów bez żadnych skutków ubocznych.
- upraszcza konserwację, ponieważ uwalnia nasz umysł od oceny każdego stanu serwera.

<br/><br/>

### Przykład kodu: antywzorce

```javascript
// Typical mistake 1: saving uploaded files locally on a server
const multer = require('multer'); // express middleware for handling multipart uploads
const upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {});

// Typical mistake 2: storing authentication sessions (passport) in a local file or memory
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// Typical mistake 3: storing information on the global object
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### Co mówią inni blogerzy

Z bloga [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html):
> ...One day I had this fantasy of starting a certification service for operations. The certification assessment would consist of a colleague and I turning up at the corporate data center and setting about critical production servers with a baseball bat, a chainsaw, and a water pistol. The assessment would be based on how long it would take for the operations team to get all the applications up and running again. This may be a daft fantasy, but there’s a nugget of wisdom here. While you should forego the baseball bats, it is a good idea to virtually burn down your servers at regular intervals. A server should be like a phoenix, regularly rising from the ashes...

<br/><br/>
