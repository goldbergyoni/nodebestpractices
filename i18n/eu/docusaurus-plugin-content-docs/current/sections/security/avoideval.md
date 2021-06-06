# Saihestu JavaScript eval adierazpenak

### Azalpena

`eval()`, `setTimeout()`, `setInterval()`, eta `new Function()` funtzio globalak dira, Node.jsen maiz erabiltzen direnak, eta JavaScript expresio bat, adierazpen bat edo adierazpen segida bat jasotzen dituen kate parametroak onartzen dituztenak. Funtzio horiek erabiltzeak segurtasun arazoak sortzen ditu. Izan ere, fidagarria ez den erabiltzaileren bat sartzen bada zerbitzarian kodea exekutatu eta zerbitzaria arriskuan jarri ahal izango du, erabiltzaile kodearen ebaluazioa gainditzeak ahalmena ematen baitie erasotzaileei nahi dituzten ekintzak burutzeko. Gomendagarria da kodea garbitzea, funtzio horiek bukaerako funtzioari pasatu eta exekutatuak izatea ekiditeko.

### Kode adibidea

```javascript
// erasotzailea sartzeko gai izan den kode maltzurraren adibidea
const erabiltzaileSarrera =
  "require('child_process').spawn('rm', ['-rf', '/'])";

// exekutatutako kode maltzurra
eval(erabiltzaileSarrera);
```

### Beste bloglari batzuk diotena

[Liran Tal](https://leanpub.com/nodejssecurity)-en Essential Node.js Security liburua:

> Berharbada, segurtasunaren ikuspuntutik, eval() funtzioa gaizkien ikusita dagoen JavaScripten ataletako bat da. JavaScript kateak testu moduan aztertzen ditu eta JavaScript kodea balitz bezala exekutatzen ditu.
> Horrekin batera, fidagarria ez den erabiltzaileren bat sartzen bada kodearen egiaztapena gaindituz, hondamendirako bide arriskutsua da, zerbitzariaren funtzionamendua larriki kaltetu dezakeena.
