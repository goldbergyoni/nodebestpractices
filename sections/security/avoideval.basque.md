# Saihestu JavaScript eval adierazpenak

### Azalpen paragrafoa

`eval()`, `setTimeout()`, `setInterval()`, eta `new Function()` Node.jsen maiz erabiliak dire funtzioak dira, JavaScript expresio bat, adierazpen bat edo adierazpen segida bat bezalako string motako parametroak onartzen dituztenak. Funtzio hauek erabiltzearen segurtasun kezka, fidagarria ez den erabiltzaile sarrera bat zerbitzarian exekutatuko den kodean sartu ahal izatea da, hau arriskuan jarriz, erabiltzaile kodea ebaluatzeak erasotzaile bati nahi duen ekintzak burutzea ahalbidetzen baitio. Gomendagarria da kodea garbitzea, funtzio hauek bukaerako funtzioari pasatzea eta exekutatuak izatea ekiditeko.

### Kodearen adibidea

```javascript
// erasotzailea sartzeko gai izan den kode maltzurraren adibidea
const erabiltzaileSarrera =
  "require('child_process').spawn('rm', ['-rf', '/'])";

// exekutatutako kode maltzurra
eval(erabiltzaileSarrera);
```

### Beste bloglari batzuk diotena

Essential Node.js Security liburutik, [Liran Tal](https://leanpub.com/nodejssecurity)ren eskutik:

> Berharbada, eval() funtzioa segurtasun ikuspuntutik, gaizkien ikusita dagoen JavaScripten ataletako bat da. JavaScriptaren analisi sintaktikoa egiten du, hau testutzat hartuz, eta berau exekutatzen du JavaScript kodea balitz bezala.
> Hau, eval() dei dezaken fidagarria ez den erabiltzaile sarrerarekin nahastuta, oso kaltegarria izan daiteke zerbitzariarentzat.
