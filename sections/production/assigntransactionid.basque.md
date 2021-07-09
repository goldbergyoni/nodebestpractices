# Esleitu transakzio identifikazio bana adierazpen erregistro bakoitzari

<br/><br/>

### Azalpena

Ohiko erregistroa osagai eta eskaera guztien sarreren biltegia da. Lerro edo errore susmagarriren bat atzeman ondoren, zaila izaten da fluxu bereko beste lerro batzuekin bat etortzea (adibidez, "John" erabiltzailea zerbait erosten saiatu zen). Hori are kritikoagoa eta zailagoa bihurtzen da mikrozerbitzu ingurune batean eskaera/transakzio bat ordenagailu askotan zehar sor daitekeenean. Esleitu eskaera bateko sarrera guztiei transakzio identifikatzaile balio bakarra, eta, horrela, lerro bat atzematean, IDa/identifikazioa kopiatu eta antzeko transakzio IDa/identifikazioa duen lerro bakoitza bilatu ahal izango da eta. Hala ere, In Node hori lortzea ez da erraza, hari bakarra erabiltzen baita eskaera guztiei erantzuteko. Aztertu ez ote zaizun komeni liburutegi bat erabiltzea datuak bil ditzakeena eskaera mailan. Ikusi hurrengo diapositibako kode adibidea. Beste mikrozerbitzu batzuk deitzean, igorri transakzioaren IDa "x-transaction-id" bezalako HTTP goiburua erabiliz testuinguru bera mantentzeko.

<br/><br/>

### Kode adibidea: Express konfigurazio tipikoa

```javascript
// eskaera berria jasotzean, kontextu isolatu berria hasi eta transakzio identifikazioa ezarri. Hurrengo adibideak continuation-local-storage npm liburutegia erabiltzen du eskaerak isolatzeko

const { createNamespace } = require("continuation-local-storage");
const session = createNamespace("my session");

router.get("/:id", (req, res, next) => {
  session.set("transactionId", "some unique GUID");
  someService.getById(req.params.id);
  logger.info("Starting now to get something by id");
});

// Orain, beste edozein zerbitzu edo osagarrik kotextuko datuak eskura ditzake
class someService {
  getById(id) {
    logger.info("Starting to get something by id");
    // beste logika hemen dator
  }
}

// Erregistroak transakzio identifikazioa gehi diezaieke sarrera bakoitzari, horrela eskaera bereko sarrerek balio bera edukiko dute
class logger {
  info(message) {
    console.log(`${message} ${session.get("transactionId")}`);
  }
}
```
