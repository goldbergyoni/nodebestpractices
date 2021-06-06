# Erabili erregistratze tresna heldu bat erroreen ikusgaitasuna handitzeko

### Azalpena

Gustuko dugu console.log, baina [Pino][pino] bezalako erregistratzaile tresna ospetsu eta iraunkorra (errendimenduan zentratutako aukera berriagoa) ezinbestekoa da proiektu serioetarako. Errendimendu handiko erregistratze tresnek erroreak eta arazo posibleak identifikatzen laguntzen dute. Erregistratze aholkuen artean:

1. Maiz erregistratu maila ezberdinak erabiliz (debug, info, error)
2. Erregistratzerako orduan, eman testuinguruaren informazioa JSON objektu eran
3. Monitorizatu erregistro kontsultak API batekin (erregistro sistema ezberdinetarako erabilgarria) edota erregistro ikustailearen software batekin
4. Erakutsi erregistroen informazioa [Splunk][splunk] bezalako operazio inteligentzia tresnekin

[pino]: https://www.npmjs.com/package/pino
[splunk]: https://www.splunk.com/

### Kode adibidea

```JavaScript
const pino = require('pino');

// zure erregistro objektu zentralizatua
const erregistratzailea = pino();

// erregistratzailea erabiltzen duen zure kode propioa
erregistratzailea.info({ anything: 'Hau metadatua da' }, 'Frogatu Erregistro Mezua %s parametroren batekin', 'parametroren bat');
```

### Blog aipua: "Erregistratzailearen betebeharrak"

StrongLoop bloga ("Winston eta Bunyanen Node.js Erregistratzaile sistemak konparatzen" Alex Corbatcheven eskutik, 2014ko ekainaren 24a):

> Identifika ditzagun betebehar gutxi batzuk (erregistratzaile batentzat):
>
> 1. Denboran seilatu erregistro ilara bakoitza. Nahiko argi dago, erregistroko sarrera bakoitza noiz gertatu den esateko gai izan behar duzu
> 2. Erregistro formatua ulergarria izan behar da bai gizakientzat eta baita makinentzat ere
> 3. Korronte ezberdin ugari onartu behar ditu. Adibidez, errore erregistroak fitxategi batean idazten ari den unean erroreren bat atzemanez gero, fitxategi beraren barruan idatzi, errorearen fitxategian ere idatzi, eta posta elektronikoa bidali, dena aldi berean, egiteko aukera eman behar du

### Non dago Winston?

Zergatik ohiko faboritoak (adibidez, Winston) ez dauden aholkatutako pratika onenen egungo zerrendan jakiteko, begiratu # [#684][#684]an

[#684]: https://github.com/goldbergyoni/nodebestpractices/issues/684
