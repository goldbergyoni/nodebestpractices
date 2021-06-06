# Saihestu birbideratze ez seguruak

### Azalpena

Node.js eta/edo Expressen birbideratzeak inplementatzen direnean, garrantzitsua da zerbitzariak sarrera balioztatzea. Erasotzailea konturatzen bada ez dela ari erabiltzaileak emandako kanpoko sarrera balioztatzen, ahultasun hori balia dezake foroetan, sare sozialetan eta beste toki publiko batzuetan berariaz horretarako sortutako estekak argitaratzeko, erabiltzaileek esteka horietan klik egin dezaten.

Adibidez: erabiltzaileen sarrera erabiliz egindako express birbideratzea ez da segurua

```javascript
const express = require("express");
const app = express();

app.get("/login", (req, res, next) => {
  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }
});
```

Berbideratze ez seguruak ekiditeko proposatutako konponbideak erabiltzailearen sarreran oinarritzean datza. Erabiltzailaren sarrera erabili behar bada, berbideratze seguruen zerrena txuriak erabil daitezke ahuleziak azalean jartzeko.

Adibidea: Berbideratze seguruaren zerrenda txuria

```javascript
const whitelist = {
  "https://google.com": 1,
};

function getValidRedirect(url) {
  // egiaztatu ia url-a '/' bakarrarekin hasten den
  if (url.match(/^\/(?!\/)/)) {
    // Atzean gehitu gure domeinua ziur egoteko
    return "https://example.com" + url;
  }
  // Bestela, egiaztatu zerrenda txurian
  return whitelist[url] ? url : "/";
}

app.get("/login", (req, res, next) => {
  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }
});
```

### Beste blogari batzuek diotena

[NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db)-en bloga:

> Zorionez ahultasun hori arintzeko metodoak nahiko zuzenak dira; ez erabili erabiltzaileen sarrera balioztaturik birbideratzearen oinarri gisa.

[Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/)-ren bloga:

> Hala ere, zerbitzariaren birbideratze logikak balioztatzen ez baditu URL parametroan sartzen diren datuak, baliteke erabiltzaileek zurea bezalako itxura duen gune batean amaitzea (examp1e.com), azkenean hacker kriminalei bere helburuak betetzeko aukera ematen diena!
