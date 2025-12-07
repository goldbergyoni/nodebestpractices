# Onartu JWT zerrenda beltza

### Azalpena

Diseinuz, JWTak (JSON Web Tokens) guztiz aberrigabeak (stateless) dira; beraz, igorle batek baliozko giltza (token) bat sinatzen duenean, giltza hori benetakoa dela egiaztatu ahal izango du aplikazioak. Horrek dakarren segurtasun arazoa da ihes egindako (leaked) giltza oraindik erabilgarria izango litzatekeela eta ezin daitekeela baliogabetu, sinadurak baliozkoa izaten jarraitzen duelako arazoak eragindako sinadura aplikazioak espero duenarekin bat datorren bitartean.
Hori dela eta, JWT autentifikazioa erabiltzean, iraungitako edo baliogabetutako giltzen (tokenen) zerrenda beltza kudeatu beharko luke aplikazioak, giltzaren bat baliogabetu behar den kasuetan, erabiltzailearen segurtasuna bermatzeko.

### `express-jwt-blacklist` adibidea

Node.js proiektu batean Express-jwt zerrenda beltza (`express-jwt-blacklist`) egikaritzeko adibidea `express-jwt` erabiliz. Kontuan izan garrantzitsua ez dela express-jwt-zerrenda beltzaren biltegirako ezarpen lehenetsiak (memorian) erabiltzea, baizik eta Redis bezalako kanpoko biltegiren bat erabiltzea Node.js prozesu askotan giltzak baliogabetzeko.

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
    keyPrefix: 'nirewebaplikazioa:',
    options: {
      timeout: 1000
    }
  }
});

app.use(jwt({
  secret: 'nire-sekretua',
  isRevoked: blacklist.isRevoked
}));

app.get('/logout', (req, res) => {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

### Beste blogari batzuek diotena

[Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/)-ren bloga:
> ...gehitu baliogabetze geruza bat JWTri, izaera apatrida galtzea suposatzen badu ere.
