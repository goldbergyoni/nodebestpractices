# Erabili erregistratze tresna heldu bat erroreen ikusgaitasuna handitzeko

### Azalpen Paragrafoa

Gustuko dugu console.log, baina [Pino][pino] (errendimenduan zentratutako aukera berriago bat)a newer option focused on performance) bezalako erregistratzaile tresna ospetsu eta iraunkor bat ezinbestekoa da proiektu serioetarako.
Errendimendu handiko erregistratze tresnek erroreak eta arazoa posibleak identifikatzen laguntzen dute. Erregistratze aholkuen artean:

1. Maila ezberdinak (debug, info, error) erabiliz erregistratze maistasuna
2. Erregistratzerako orduan, kontextuaren informazioa eman JSON objektu eran
3. Erregistro kontsulta API batekin (erregistro sistema ezberdinetarako erabilgarria) edota erregistro bistaratze software batekin monitorizatu eta filtratu erregistroak
4. Erregistroen informazioa [Splunk][splunk] bezalako operazio inteligentzia tresnekin erakutsi eta landu

[pino]: https://www.npmjs.com/package/pino
[splunk]: https://www.splunk.com/

### Kodearen adibidea

```JavaScript
const pino = require('pino');

// zure erregistro objektu zentralizatua
const erregistratzailea = pino();

// erregistratzailea erabiltzen duen zure kode propioa
erregistratzailea.info({ anything: 'Hau metadatua da' }, 'Frogatu Erregistro Mezua %s parametroren batekin', 'parametroren bat');
```

### Blogeko Aipua: "Erregistratzailearen Betebeharrak"

StrongLoop blogetik ("Winston eta Bunyanen Node.js Erregistratzaile sistemak konparatzen" Alex Corbatcheven eskutik, 2014ko ekainaren 24a):

> Identifika ditzagun betebehar gutxi batzuk (erregistratzaile batentzat):
>
> 1. Denboran seilatu erregistro ilara bakoitza. Nahiko argi dago, erregistroko sarrera bakoitza noiz gertatu den esateko gai izan behar duzu
> 2. Erregistro formatua ulergarria izan behar da bai gizakientzat eta baita makinentzat ere
> 3. Korronte ezberdin ugari onartu behar ditu. Adibidez, errore erregistroak fitxategi batean idazten egon zintezke eta momentu horretan errore bat antzematen bada, fitxategi beraren barruan idatzi, errorearen fitxategian ere idatzi, eta posta elektroniko bat bidali, dena aldi berean, egiteko aukera eman behar du

### Non dago Winston?

Zergatik ohizko gustukoak hemengo aholkatutako jarraibide hoberenen zerrendan agertu beharko ez liratekeela jakiteko, begiratu [#684][#684].

[#684]: https://github.com/goldbergyoni/nodebestpractices/issues/684
