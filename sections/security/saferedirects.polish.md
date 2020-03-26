# Zapobiegaj niebezpiecznym przekierowaniom

### Wyjaśnienie jednym akapitem

Gdy przekierowania są implementowane w Node.js i/lub Express, ważne jest, aby przeprowadzić weryfikację danych wejściowych po stronie serwera.
Jeśli osoba atakująca odkryje, że nie weryfikujesz danych zewnętrznych dostarczonych przez użytkownika, może wykorzystać tę lukę, publikując specjalnie spreparowane łącza na forach, w mediach społecznościowych i innych miejscach publicznych, aby użytkownicy mogli ją kliknąć.

Przykład: Unsafe express redirect using user input
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

Sugerowaną poprawką w celu uniknięcia niebezpiecznych przekierowań jest unikanie polegania na danych wejściowych użytkownika. Jeśli konieczne jest użycie danych wprowadzonych przez użytkownika, można użyć bezpiecznych białych list przekierowań, aby uniknąć ujawnienia luki.

Przykład: Safe redirect whitelist
```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // check if the url starts with a single slash 
  if (url.match(/^\/(?!\/)/)) { 
    // Prepend our domain to make sure 
    return 'https://example.com' + url; 
  } 
    // Otherwise check against a whitelist
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```


### Co mówią inni blogerzy

Z bloga od [NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db):
> Fortunately the mitigation methods for this vulnerability are quite straightforward — don’t use unvalidated user input as the basis for redirect. 

Z bloga od [Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/)
> However, if the server-side redirect logic does not validate data entering the url parameter, your users may end up on a site that looks exactly like yours (examp1e.com), but ultimately serves the needs of criminal hackers!


