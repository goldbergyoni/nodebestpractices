# Saihestu modulua kargatzea aldagai bat erabiliz

### Azalpena

Bidea erabiltzailea sartu ondoren sortua ote den kezka baduzu eta horregatik parametro gisa ezarri baduzu, saihestu bide hori erabiltzea beste fitxategi bat deitzeko / inportatzeko. Arau hori, oro har, edozein fitxategitara sartzeko erabil daiteke (hau da, `fs.readFile()`) edo erabiltzailea sartu ondoren sortutako aldagai dinamikoak dituen babestu beharreko beste baliabide batzuetara sartzeko. Eslint-plugin-security garbitzaileak (linterrak) eredu horiek atzeman eta nahikoa goiz ohartaraz dezake.

### Kode adibidea

```javascript
// ez segurua, helperPath aldagaia erabiltzaile sarrera batek aldatua izan ahal baita eta
const kargatzekoTresnaLagungarriakEskuratzekoModuOkerra = require(helperPath);

// segurua
const kargatzekoTresnaLagungarriak = require("./helpers/upload");
```
