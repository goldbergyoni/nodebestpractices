# Obsługa czarnych list JWT

### Wyjaśnienie jednym akapitem

Z założenia JWT (JSON Web Tokens) są całkowicie bezstanowe, więc po podpisaniu ważnego tokena przez wystawcę token może zostać zweryfikowany przez aplikację jako autentyczny. Problemem z tym związanym jest problem związany z bezpieczeństwem, w którym przeciekający token może być nadal używany i nie może zostać odwołany, ponieważ podpis pozostaje ważny, dopóki podpis dostarczony przez problemy odpowiada oczekiwaniom aplikacji.
Z tego powodu podczas korzystania z uwierzytelniania JWT aplikacja powinna zarządzać czarną listą wygasłych lub odwołanych tokenów, aby zachować bezpieczeństwo użytkownika na wypadek, gdyby token musiał zostać odwołany.

### `express-jwt-blacklist` przykład

Przykład uruchomienia `express-jwt-blacklist` w projekcie Node.js przy użyciu `express-jwt`. Należy pamiętać, że ważne jest, aby nie używać domyślnej pamięci podręcznej ustawień (w pamięci) cache `express-jwt-blacklist`, ale używać external store, takiej jak Redis, do odwoływania tokenów w wielu procesach Node.js.

```javascript
const jwt = require('express-jwt');
const blacklist = require('express-jwt-blacklist');

blacklist.configure({
  tokenId: 'jti',
  strict: true,
  store: {
    type: 'memcached',
    host: '127.0.0.1',
    port: 11211,
    keyPrefix: 'mywebapp:',
    options: {
      timeout: 1000
    }
  }
});
 
app.use(jwt({
  secret: 'my-secret',
  isRevoked: blacklist.isRevoked
}));
 
app.get('/logout', (req, res) => {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

### Co mówią inni blogerzy

Z bloga od [Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/):
> ...add a revocation layer on top of JWT, even if it implies losing its stateless nature.
