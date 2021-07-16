# Ogranicz rozmiar payloada przy użyciu odwrotnego proxy lub oprogramowania pośredniego

### Wyjaśnienie jednym akapitem

Analizowanie treści żądań, na przykład payloadów zakodowanych w JSON, jest operacją wymagającą dużej wydajności, szczególnie w przypadku większych żądań.
Podczas obsługi żądań przychodzących w aplikacji internetowej należy ograniczyć rozmiar odpowiednich payloadów. Przychodzące requesty z
nieograniczonym rozmiarem body/payloada mogą prowadzić do nieprawidłowego działania aplikacji lub awarii z powodu awarii usługi odmowy usługi lub innych niepożądanych efektów ubocznych.
Wiele popularnych rozwiązań oprogramowania pośredniego do analizowania treści żądań, takich jak już dołączony pakiet `body-parser` do ekspresowego, eksponowania
opcji ograniczenia rozmiarów ładunków żądań, ułatwiające programistom wdrożenie tej funkcjonalności. Możesz także
zintegrować limit requestu rozmiaru body z oprogramowaniem odwrotnego proxy / serwera WWW, jeśli jest obsługiwane. Poniżej znajdują się przykłady ograniczania rozmiarów żądań za pomocą
`express` i/lub `nginx`.

### Przykład kodu dla `express`

```javascript
const express = require('express');

const app = express();

app.use(express.json({ limit: '300kb' })); // body-parser defaults to a body size limit of 100kb

// Request with json body
app.post('/json', (req, res) => {

    // Check if request payload content-type matches json, because body-parser does not check for content types
    if (!req.is('json')) {
        return res.sendStatus(415); // -> Unsupported media type if request doesn't have JSON body
    }

    res.send('Hooray, it worked!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

🔗 [**Express docs for express.json()**](http://expressjs.com/en/4x/api.html#express.json)

### Przykład konfiguracji dla `nginx`

```nginx
http {
    ...
    # Limit the body size for ALL incoming requests to 1 MB
    client_max_body_size 1m;
}

server {
    ...
    # Limit the body size for incoming requests to this specific server block to 1 MB
    client_max_body_size 1m;
}

location /upload {
    ...
    # Limit the body size for incoming requests to this route to 1 MB
    client_max_body_size 1m;
}
```

🔗 [**Nginx docs for client_max_body_size**](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)
