# Erabili HTTPS erabiltzaile zerbitzariaren konexioa enkriptatzeko

<br/><br/>

### Azalpena


[Let'sEncrypt](https://letsencrypt.org/) bezalako zerbitzuak erabiltzeak, **dohaineko** SSL/TLS ziurtagiriak hornitzen dituen autoritate ziurtagiri-emailea, zure aplikazioetan komunikazioa enkriptatzen lagun dezake. [Express](http://expressjs.com/) bezalako Node.jsren frameworkek (`https` moduluan oinarritua) SSL/TLS onartzen dute, kode ilara gutxi batzuetan egin daitekeena.

SSL/TLS ezarri zenezake alderantzizko proxy batean, esaterako [NGINX](http://nginx.org/en/docs/http/configuring_https_servers.html) edo HAProxy.

<br/><br/>

### Kode adibidea: gaitu Express frameworka erabiliz SSL/TLS

```javascript
const express = require("express");
const https = require("https");
const app = express();
const options = {
  // Zure ezarpenen arabera bidea aldatu beharko litzateke
  cert: fs.readFileSync("./sslcert/fullchain.pem"),
  key: fs.readFileSync("./sslcert/privkey.pem"),
};
https.createServer(options, app).listen(443);
```

<br/><br/>
