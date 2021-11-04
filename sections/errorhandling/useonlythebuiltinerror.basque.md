# Erabili soilik “Errorea” objektu kapsulatua

### Azalpena

JavaScriptek berezko permisibitatea du, eta, bere kode fluxuaren aukera ugariarekin (adibidez EventEmitter, Callbackak, Promesak ...), garatzaileek erroreak kudeatzeko modu anitzak edukitzea eragiten du: batzuek stringak erabiltzen dituzte, besteek beren mota pertsonalizatuak zehazten dituzte. Node.jsren "Errorea" objektu kapsulatua erabiltzeak zure kodearen eta bestelako liburutegien arteko uniformetasuna gordetzen laguntzen du, eta gainera StracTracea bezalako informazio esanguratsua gordetzen du. Salbuespen bat jaurtitzean, jarraibide egokia da errorearen izena edo erlazionatutako HTTP errore kodea bezalako testuinguru ezaugarriekin osatzea. Uniformetasun eta praktika hau lortzeko, saiatu "Errorea" objektua beharrezko ezaugarriekin osatzen, baina kontu izan gehiegitan ez egiten. Orokorrean ideia ona da "Errorea" objektu kapsulatua behin bakarrik osatzea AppErrore batekin aplikazioaren maila guztietako erroreentzat, eta beharrezko duzun informazioa argumentu gisa pasatuz errore klase ezberdinak ezberdintzeko. Ez da beharrezkoa "Errorea" objektua askotan osatzea (errore kasu bakoitzerako behin, adibidez DbError, HttpError...). Begiratu ondorengo kode adibideak

### Kode adibidea: era zuzenean egin

```javascript
// ohizko funtzio batean Error objektua jaurti, sinkronoa dela edo asinkronoa dela (sync async)
if (!gehitzekoProduktua)
  throw new Error("Nola gehi dezaket produktu bat baliorik ez duenean?");

// Error objektua jaurti EventEmitteretik
const myEmitter = new MyEmitter();
nireEmitter.emit("error", new Error("whoops!"));

// Error objektua jaurti Promesa batetik
const gehituProduktua = async (gehitzekoProduktua) => {
  try {
    const existitzenDenProduktua = await DAL.eskuratuProduktua(
      gehitzekoProduktua.id
    );
    if (existitzenDenProduktua !== null) {
      throw new Error("Produktua iada existitzen da!");
    }
  } catch (err) {
    // ...
  }
};
```

### Anti jarraibidearen kode adibidea

```javascript
// string baten jaurtiketak edozein pila informazio eta datu ezaugarri garrantzitsu falta ditu
if (!gehitzekoProduktua)
  throw "Nola gehi dezaket produktu bat baliorik ez duenean?";
```

### Kode adibidea: oraindik ere era zuzenagoan egin

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Noderen Error objektutik eratortzen den errore objektu zentralizatua
function AppErrorea(izena, httpKodea, deskribapena, funtzionatzenDu) {
  Error.call(this);
  Error.captureStackTrace(this);
  this.izena = izena;
  //...hemen zehaztuta beste ezaugarri batzuk
}

AppErrorea.prototype = Object.create(Error.prototype);
AppErrorea.prototype.constructor = AppErrorea;

module.exports.AppErrorea = AppErrorea;

// erabiltzailea exzepzio bat jaurtitzen
if (erabiltzailea == null)
  throw new AppErrorea(
    commonErrors.resourceNotFound,
    commonHTTPErrors.notFound,
    "azalpen osatuagoa",
    true
  );
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// Noderen Error objektutik eratortzen den errore objektu zentralizatua
export class AppErrorea extends Error {
  public readonly izena: string;
  public readonly httpKodea: HttpCode;
  public readonly funtzionatzenDu: boolean;

  constructor(
    izena: string,
    httpKodea: HttpCode,
    deskribapena: string,
    funtzionatzenDu: boolean
  ) {
    super(deskribapena);

    Object.setPrototypeOf(this, new.target.prototype); // prototipo katea berrezarri

    this.izena = izena;
    this.httpKodea = httpKodea;
    this.funtzionatzenDu = funtzionatzenDu;

    Error.captureStackTrace(this);
  }
}

// erabiltzailea exzepzio bat jaurtitzen
if (erabiltzailea == null)
  throw new AppErrorea(
    commonErrors.resourceNotFound,
    commonHTTPErrors.notFound,
    "azalpen osatuagoa",
    true
  );
```

</details>

_`Object.setPrototypeOf`ri buruzko azalpena Typescripten: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget_

### Blogeko aipua: "Ez diot interesik ikusten mota ezberdin ugari edukitzeari"

Ben Nadel-en blogeko “Node.js errore objektua” 5 hitz gakori esker sailkatua

> …”Nik neuk, ez diot interesik ikusten errore objektu klase ezberdin ugari edukitzeari [bakarra edukitzearekin alderatuz]. Ez dirudi JavaScriptek, lengoaia gisa, eraikitzailez oinarritutako errore harrapaketa hornitzen duenik. Horrela, objektu baten ezaugarriak bereizteak Eraikitzaile klaseak bereiztea baino errazagoa dirudi…

### Blog aipua: "String bat ez da errore bat"

devthought.com blogeko “Node.js errore objektua” 6 hitz gakori esker sailkatua

> …String baten ordez errore bat pasatzeak moduluen arteko elkarreragintasuna murrizten du. instanceof errore egiaztapen arrakastatsuak izan litezkeen kontratuak apurtzen ditu APIekin. Ikusiko dugun bezala, errore objektuek, eraikitzaileari pasatutako mezua kontserbatzeaz gain, Javascript motore modernoetan ezaugarri interesgarriak dituzte…

### Blog aipua: "Erroretik jaraunsteak ez du balio askorik gehitzen"

machadogj bloga

> …Errore klasea jaraunsteko erraza ez izatea arazo bat da. Noski, klasea jaraunts dezakezu eta zure HttpError, DbError, etab. bezalako Error klase propioak sortu. Hala ere, horrek denbora eskatzen du, eta ez du balio askorik gehitzen [AppError batentzat behin bakarrik jaraunsteaz alderatuz], baldin eta klaseekin zerbait egiten ez bazabiltza. Batzuetan, soilik mezu bat gehitu nahi duzu eta barruko errorea mantendu; beste batzuetan, ordea, errorea parametroekin edo bestelako informazioekin osatu nahi zenezake…

### Blog aipua: "Node.jsk jaurtitako JavaScript eta System errore guztiak "Error" objektutik datoz"

Node.js dokumentazio ofiziala

> …Node.jsk jaurtitako JavaScript eta System errore guztiak JavaScripten "Error" klase estandarretik datoz edo "Error" objektuaren instantziak dira, eta gutxienez horrelako ezaugarri erabilgarriak hornitzea bermatzen dute. JavaScript Error objektu generiko bat da, errorea zergatik gertatu den inolako berariazko baldintzarik adierazten ez duena. Error objektuek "pila aztarna" bat atzematen dute, Error instantziatua izan den kodearen lekua zehaztuz, eta errorearen testu deskribapena eduki dezakete. Node.jsk sortutako errore guztiak, System eta JavaScript erroreak barne, Error klasetik eratorritakoak edo Error motaren instantziak izango dira…
