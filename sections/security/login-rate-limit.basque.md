# Saihestu baimenaren aurkako eraso basatiak

### Azalpena

`/login` edo `/admin` bezalako pribilegio handiko ibilbideak abiadura mugarik gabe utziz gero, aplikazioko pasahitzen hiztegiak eraso basatiak izateko arriskua sortzen da. Eskaerak ibilbide horietara mugatzeko estrategia erabiltzen baduzu, erasoek arrakasta izatea saihestu dezakezu, baimen saiakeren kopurua mugatuz, IP bezalako eskaera propietate edo erabiltzaile izena/helbide elektronikoa bezalako gorputz parametroan oinarrituta.

### Kode adibidea: zenbatu jarraian huts egin duten baimen saiakerak erabiltzaile izenaren eta IP bikotearen arabera, eta guztira izandako hutsegiteak IP helbidearen arabera.

Erabili [abiadura-mugatzaile-malgua](https://www.npmjs.com/package/rate-limiter-flexible) (rate-limiter-flexible) npm paketea.

Sortu bi mugatzaile:

1. Lehenengoak jarraian huts egindako saiakera kopurua zenbatzen du eta, gehienez, 10 saiakera baimentzen ditu erabiltzaile izenaren eta IP bikotearen arabera.
2. Bigarrenak eguneko IP helbidea blokeatzen du egunean 100 huts egin dituen saiakeretan.

```javascript
const gehienekoIPbakoitzekoEtaEgunekoSaiakeraOkerrak = 100;
const gehienekoIPbakoitzekoEtaErabiltzaileIzenekoJarraiekoSaiakeraOkerrak = 10;

const IPbakoitzekoMugatzaileAstiroa = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "erregistratu_eguneko_huts_egindako_ipak",
  points: gehienekoIPbakoitzekoEtaEgunekoSaiakeraOkerrak,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // Egun baterako blokeatu, baldin eta eguneko 100 saiakera oker
});

const IPbakoitzekoEtaErabiltzaileIzenekoJarraiekoSaiakeraOkerrenMugatzailea = new RateLimiterRedis(
  {
    storeClient: redisClient,
    keyPrefix: "erregistratu_jarraieko_huts_egindako_erabiltzaileizen_eta_ipak",
    points: gehienekoIPbakoitzekoEtaErabiltzaileIzenekoJarraiekoSaiakeraOkerrak,
    duration: 60 * 60 * 24 * 90, // Gorde kopurua 90 egunean zehar lehenengo huts egitetik
    blockDuration: 60 * 60, // Ordubeterako blokeatu
  }
);
```

Ikusi adibide osoa [rate-limiter-flexible npm package paketearen Wikian](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### Beste blogari batzuek diotena

[Liran Tal](https://leanpub.com/nodejssecurity)-en Essential Node.js segurtasun liburua:

> Erasotzaileek eraso basatiak egin ditzakete erabiltzaileen izen/pasahitz bikoteak zure REST amaierako puntuetara bidaltzeko, POST edo haiek inplementatzeko ireki duzun beste RESTful API baten bidez.
> Hiztegi eraso mota hori oso erraza da egikaritzen, eta zure APIaren edo orri bideraketaren beste edozein ataletan egin daiteke, saioa hastearekin zerikusirik izan gabe ere.
