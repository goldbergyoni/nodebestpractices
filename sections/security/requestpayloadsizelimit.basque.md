# Mugatu kargaren tamaina alderantzizko proxy edo middlewareak erabiliz

### Azalpena

Eskaeren gorputzak aztertzea -adibidez, JSONen kodetutako kargak- errendimendu handiko eragiketa da, batez ere eskaera handienekin. Zure web aplikazioan jasotako eskaerak kudeatzean, dagozkien karga handienen tamaina mugatu beharko zenieke.
Sarrerako eskaeren gorputz/karga erabilgarria mugagabea izateak zure aplikazioak gaizki funtzionatzea edo blokeatuta geratzea eragin dezake zerbitzuaren ukoa jasotzearen ondorioz izandako hutsegiteagatik edo gertatutako beste albo ondorio maltzurren batek sortutako etenaldiagatik.
Badira eskaeren gorputzak aztertzeko erabiltzen diren middleware soluzio ezagun asko -esaterako, dagoeneko expressekin erabilgarria den `body-parser` paketeak, eskaera kargaren tamainak mugatzeko aukera dituztenak, eta garatzaileek funtzionaltasun hori ezartzea errazten dutenak. Nahi izanez gero, eskaeraren gorputzaren tamaina muga alda dezakezu zure alderantzizko proxy / web zerbitzariaren softwarean. Jarraian eskaera tamainak `express` eta / edo `nginx` erabiliz mugatzeko adibideak dituzu.

### `express`en kode adibidea

```javascript
const express = require("express");

const app = express();

app.use(express.json({ limit: "300kb" })); // body-parser-ek berez 100kb-eko gorputz tamaina zehazten du

// Eskaera json gorputzarekin
app.post("/json", (req, res) => {
  // Egiaztatu eskaeraren informazioaren content-type json-arekin bat datorren, body-parser-ek ez baititu content-type-ak egiaztatzen eta
  if (!req.is("json")) {
    return res.sendStatus(415); // -> Sostengu gabeko media mota eskaerak ez badauka JSON gorputzik
  }

  res.send("Iepa hi, funtzionatu du!");
});

app.listen(3000, () =>
  console.log("Adibidea, aplikazioa 3000 portua entzuten!")
);
```

🔗 [**Expressen dokumentuak express.json()-entzat**](http://expressjs.com/en/4x/api.html#express.json)

### `nginx`en konfigurazio adibidea

```nginx
http {
    ...
    # Mugatu gorputzaren tamaina 1MB-ra sartzen diren eskaera guztientzat
    client_max_body_size 1m;
}

server {
    ...
    # Mugatu gorputzaren tamaina 1MB-ra zehazki zerbitzari honen blokera sartzen diren eskaera guztientzat
    client_max_body_size 1m;
}

location /upload {
    ...
    # Mugatu gorputzaren tamaina 1MB-ra bide honetara sartzen diren eskaera guztientzat
    client_max_body_size 1m;
}
```

🔗 [**Nginx dokumentuak client_max_body_size-rako**](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)
