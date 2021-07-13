# Aplikazioaren kodeak ez luke erregistroen bideraketa kudeatu beharko

<br/><br/>

### Azalpena

Aplikazioaren kodeak ez luke erregistroen bideraketa kudeatu behar, baina erregistro tresnaren bat erabili beharko luke `stdout/stderr`-era idazteko. "Erregistroen bideratzeak" esan nahi du zure eskaerara edo eskaera prozesua ez den beste kokapen batera eraman eta bultzatzea erregistroak, adibidez, erregistroak fitxategi batean, datu basean eta abar idaztea. Bi dira, batez ere, horren arrazoiak: 1) kezkak bereiztea eta 2) [aplikazio modernoen 12 faktoreko praktika onak](https://12factor.net/logs).

"Kezkak bereiztea" esatean, askotan pentsatzen dugu zerbitzuen arteko kode zatiei eta zerbitzuen euren arteko loturei buruz ari garela, baina hori "azpiegitura" osagaiei ere aplikatzen zaie. Aplikazioaren kodeak ez luke kudeatu behar azpiegiturak/exekuzio inguruneak (egun gehienetan, edukiontziak) kudeatu beharko lukeen zerbait. Zer gertatzen da aplikazioko erregistroen kokapenak zehazten badituzu, baina geroago kokapen hori aldatu behar baduzu? Horrek kode aldaketa eta inplementazioa eragiten ditu. Edukiontzietan/hodeian oinarritutako plataformekin lan egiten denean, edukiontziak biratu eta itxi egin daitezke errendimendu eskaeretara eskalatzean, eta, beraz, ezin dugu ziurtatu non amaituko diren erregistroen fitxategiak. Exekuzio inguruneak (edukiontziak) erabaki beharko luke nora bideratuko diren erregistro fitxategiak. Aplikazioak zer behar duen erregistratu beharko luke `stdout` / `stderr`-en, eta exekuzio ingurunea konfiguratuta egon beharko litzateke erregistro fluxua han jaso eta joan behar duen lekura bideratzeko. Halaber, erregistroen helmugak zehaztu edo / eta aldatu behar dituzten taldeko kideak askotan ez dira aplikazioen garatzaileak, baizik eta DevOps-eko kideak, eta agian ez dute aplikazioaren kodea ezagutzen. Horrek eragozten die aldaketak erraz egitea.
Anti ereduaren kode adibidea: erregistroaren bideratzea aplikazioari hertsiki lotua

<br/><br/>

### Anti ereduaren kode adibidea: erregistroaren bideratzea aplikazioari hertsiki lotua

```javascript
const { createLogger, transports, winston } = require("winston");
/**
 * `winston-mongodb` eskatzeak
 * `winston.transports.MongoDB` agerian utziko du
 */
require("winston-mongodb");

// bi fitxategi ezberdin erregistratu, honela aplikazioa hauekin lotuta egongo da
const logger = createLogger({
  transports: [new transports.File({ filename: "combined.log" })],
  exceptionHandlers: [new transports.File({ filename: "exceptions.log" })],
});

// MongoDB-n erregistratu, honela aplikazioa hauekin lotuta egongo da
winston.add(winston.transports.MongoDB, options);
```

Horrela eginez gero, aplikazioak kudeatuko ditu bai aplikazio/ negozio logika, bai erregistroen bideratze logika!

<br/><br/>

### Kodea adibidea: erregistroen tratamendu onena + Docker adibidea

In the application:

```javascript
const logger = new winston.Logger({
  level: "info",
  transports: [new winston.transports.Console()],
});

logger.log(
  "info",
  "Test Log Message with some parameter %s",
  "some parameter",
  { anything: "This is metadata" }
);
```

Then, in the docker container `daemon.json`:

```json5
{
  "log-driver": "splunk", // Splunk erabiliaz, adibide gisa, beste gordetze mota bat izango genuke
  "log-opts": {
    "splunk-token": "",
    "splunk-url": "",
    //...
  },
}
```

Beraz adibide honek `log -> stdout -> Docker container -> Splunk`-en antza du

<br/><br/>

### Blogaren aipua: "O'Reilly"

[O'Reilly](https://www.oreilly.com/ideas/a-cloud-native-approach-to-logs) bloga,

> Zerbitzari kopuru konkretu batean instantzia kopuru finko bat duzunean, ematen du erregistroak diskoan gordetzea zentzuzkoa dela. Hala ere, zure aplikazioa dinamikoki exekutatzen ari den instantzia batetik 100era pasa daitekeenean eta instantzia horiek non exekutatzen diren ez dakizunean, zure hodei hornitzaileak erregistro horiek zure partez gehitu beharko ditu zure partez.

<br/><br/>

### Aipua: "12 faktorea"

[Saioa hasteko 12 faktoreko praktika onenak](https://12factor.net/logs) testutik hartua:

> Hamabi faktoreko aplikazio bat ez da inoiz bere irteera korrontea bideratzeaz edo biltegiratzeaz arduratzen. Ez luke saiatu behar erregistro fitxategietan idazten edo kudeatzen. Horren ordez, exekutatzen ari den prozesu bakoitzak bere gertaeren korrontea, bufferrik gabekoa, stdout-era idazten du.

> Proba edo produkzio inplementazioetan, exekuzio inguruneak harrapatuko du prozesu bakoitzeko korrontea, aplikazioko beste korronte guztiekin batera bildu eta azken helmuga batera edo gehiagora bideratuko ditu ikusteko eta epe luzerako artxibatzeko. Aplikazioak ezin ditu artxiboko helmuga horiek ikusi, ezta konfiguratu ere, eta exekuzio ingurunea da kudeatzen dituen bakarra.

<br/><br/>

### Adibidea: arkitekturaren ikuspegi orokorra Docker eta Splunk erabiliz adibide gisa

![alt text](../../assets/images/logging-overview.png "Arkitekturaren ikuspegi orokorra")

<br/><br/>
