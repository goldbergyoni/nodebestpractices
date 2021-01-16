# Erabili soilik “Errorea” objektu kapsulatua

### Azalpen paragrafoa

JavaScripten permisibitate naturalak, bere kode fluxuaren aukera guztiekin (adibidez EventEmitter, Callbackak, Promesak ...) garatzaileek erroreak kudeatzeko modu anitzak edukitzea eragiten du: batzuek stringak erabiltzen dituzte, besteek beren mota pertsonalizatuak zehazten dituzte. Node.jsen "Errorea" objektu kapsulatua erabiltzeak zure kodearen eta bestelako liburutegien arteko uniformetasuna gordetzen laguntzen du, eta gainera StracTracea bezalako informazio esanguratsua gordetzen du. Exzepzio bat jaurtitzean, errorearen izena edo erlazionatutako HTTP errore kodea bezalako kontextu ezaugarriekin osatzeza jarraibide egokia da. Uniformetasun eta praktika hau lortzeko, saiatu "Errorea" objektua beharrezko ezaugarriekin osatzen, baina kontu izan gehiegitan ez egitearekin. Orokorrean ideia ona da "Errorea" objektu kapsulatua behin bakarrik osatzea AppErrore batekin aplikazioaren maila guztietako erroreentzat, eta beharrezko duzun informazioa argumentu gisa pasatuz errore mota ezberdinak ezberdintzeko. Ez da beharrezkoa "Errorea" objektua askotan osatzea (errore kasu bakoitzerako behin, adibidez DbError, HttpError...). Begiratu ondorengo kode adibideak

### Kodearen adibidea – era zuzenean egin

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

### Kodearen adibidea – Anti Jarraibidea

```javascript
// string baten jaurtiketak edozein pila informazio eta datu ezaugarri garrantzitsu falta ditu
if (!gehitzekoProduktua)
  throw "Nola gehi dezaket produktu bat baliorik ez duenean?";
```

### Kodearen adibidea – oraindik ere era zuzenagoan egin

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

### Blogeko Aipua: "Ez dut mota ezberdin ugari edukitzean interesik ikusten"

Ben Nadel blogetik, “Node.js errore objektua” 5 hitz gakori esker sailkatua

> …”Modu pertsonalean, ez dut mota ezberdin ugari edukitzean interesik ikusten [bakarra edukitzearekin alderatuz] - Ez dirudi JavaScriptek, lengoaia gisa, eraikitzailez-oinarritutako errore-harrapaketa hornitzerik. Horrela, objektu baten ezaugarriak bereizteak Eraikitzaile motak bereiztea baino errazagoa dirudi…

### Blogeko Aipua: "String bat ez da errore bat"

devthought.com blogetik, “Node.js errore objektua” 6 hitz gakori esker sailkatua

> …String baten ordez errore bat pasatzeak moduluen arteko elkarreragintasuna murrizten du. `instanceof` errore egiaztapen arrakastatsuak izan litezken kontratuak apurtzen ditu APIekin. Errore objektuek, ikusiko dugun bezala, Javascript motore modernoetan ezaugarri interesgarriak dituzte eraikitzaileari pasatutako mezua kontserbatzeaz gain…

### Blogeko Aipua: "Erroretik jaraunsteak ez du balio askorik gehitzen"

machadogj blogetik

> …Error klasearekin daukadan arazo bat jaraunsteko erraza ez izatea da. Noski, klasea jarauntsi dezakezu eta zure HttpError, DbError, etab. bezalako Error klase propioak sortu. Hala ere, horrek denbora eskatzen du eta ez du balio askorik gehitzen[AppError batentzat behin bakarrik jaraunsteaz alderatuz] baldin eta motekin zerbait egiten ez bazabiltza. Batzuetan, soilik mezu bat gehitu nahi duzu eta barruko errorea mantendu, beste batzuetan ordea, errorea parametro edo bestelako informazioekin osatu nahi zenezake…

### Blogeko Aipua: "Node.jsek jaurtitako JavaScript eta System errore guztiak "Error" objektutik datoz"

Node.js dokumentazio ofizialetik

> …Node.jsek jaurtitako JavaScript eta System errore guztiak JavaScripten "Error" klase estandarretik datoz edo "Error" objektuaren instantziak dira eta gutxienez klase horretako ezaugarri erabilgarriak hornitzea bermatzen dute. Errorea zergatik gertatu den inolako berariazko baldintzarik adierazten ez duen JavaScript Error objektu generikoa. Error objektuek "pila aztarna" bat atzematen dute, Error instantziatua izan den kodearen lekua zehaztuz, eta errorearen testu deskribapena eduki dezakete. Node.jsek sortutako errore guztiak, System eta JavaScript erroreak barne, Error klasetik eratorritakoak edo Error klasearen instantziak izango dira…
