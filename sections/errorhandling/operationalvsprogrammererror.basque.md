# Bereizi eragiketa erroreak eta programatze erroreak

### Azalpen paragrafoa

Ondorengo bi errore mota hauek bereizteak zure aplikazioaren matxura-denbora gutxitu eta programazio-errore eroak ekiditen lagunduko du: eragiketa erroreek, gertatu dena eta honen ondorioak (adibidez, HTTP zerbitzu bati egindako deiak huts egitea konekxio arazo bat dela eta) ulertzen dituzun egoerei deritze. Aldiz, programazio erroreek, errorea zergatik eta nonkik etorri den (balio zehaztugabe bat irakurtzen saiatzen den kodea edo memoria ihes egiten dion datu-basea izan daitezke) ez dakizun egoerei deritze. Eragiketa erroreak erlatiboki kudeaerrezak dira, normalean errorea erregistratzea nahikoa da. Gauzak konplikatuagoak izan daitezke garatzaile errore bat tupustean agertzen denean, aplikazioa egoera inkontsekuente batean aurki daiteke eta dotoreki aplikazioa berrekitea baino hoberik ez duzu

### Kodearen Adibidea – errore bat eragiketa errore (konfiantzazko) bihurtu

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// errore objektu bat eragiketa errore bihurtu
const nireErrorea = new Error(
  "Nola gehi dezaket produktu bat baliorik ez duenean?"
);
nireErrorea.funtzionatzenDu = true;

// edota errore eraikitzaile zentralizaturen bat erabiltzen baduzu (begiratu beste adibide batzuk "Erabili soilik “Errorea” objektu kapsulatua", 2.2, atalean)
class AppErrorea {
  constructor(ohikoMota, deskribapena, funtzionatzenDu) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.ohikoMota = ohikoMota;
    this.deskribapena = deskribapena;
    this.funtzionatzenDu = funtzionatzenDu;
  }
}

throw new AppErrorea(
  erroreKudeatzailea.ohikoErroreak.SarreraOkerra,
  "Deskribatu hemen gertatutakoa",
  true
);
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// errore eraikitzaile zentralizatu batzuk (begiratu beste adibide batzuk "Erabili soilik “Errorea” objektu kapsulatua", 2.2, atalean)
export class AppErrorea extends Error {
  public readonly ohikoMota: string;
  public readonly funtzionatzenDu: boolean;

  constructor(
    ohikoMota: string,
    description: string,
    funtzionatzenDu: boolean
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.ohikoMota = ohikoMota;
    this.funtzionatzenDu = funtzionatzenDu;

    Error.atzemanErrorePila(this);
  }
}

// errore objektu bat eragiketa errore bihurtu (true)
throw new AppErrorea(
  erroreKudeatzailea.ohikoErroreak.SarreraOkerra,
  "Deskribatu hemen gertatutakoa",
  true
);
```

</details>

### Blogeko Aipua: "Programatzaileen erroreak programan programazio-erroreak dira"

Joyent blogetik, “Node.js errore kudeaketa" hitz gako bati esker sailkatua

> …Programatzaile erroreetatik suspertzeko modurik hoberena berehala kraskadura eragitea da. Kraskadura baten aurrean automatikoki berrekingo dituen berrekite sistema bat erabiliaz exekutatu beharko zenituzte zure programak. Berrekite sistema bati esker, kraskadura da programatzaile errore pasakor baten aurrean zerbitzu fidagarri bat berreskuratzeko modurik azkarrena…

### Blogeko Aipua: "Alde egiteko modu segururik ez zehaztugabeko egoera hauskor bat sortu gabe"

Node.js dokumentazio ofizialetik

> …JavaScripten throwen funtsezko funtzionamenduan, ez dago ia inoiz "alde batera utzitakoa jasotzeko" modu seguruan egiteko biderik, erreferentziak galdu gabe edota bestelako zehaztugabeko egoera hauskorrak sortu gabe. Jaurtitako errore bati erantzuteko modurik seguruena prozesua itzaltzea da. Jakina, web zerbitzari arrunt batean, konekxio ugari eduki ahal ditzakezu irekita, eta ez da zentzuzkoa tupustean hauek ixtea beste batek eragindako errore batengatik. Planteamendu hoeberena, errorea bidali duen eskariari errore erantzun bat bidaltzea da, besteei beren atazak bukatzeko denbora utziz, eta eskari berriei kasu egiteari utzi prozesu horretan.

### Blogeko Aipua: "Bestela zure aplikazioaren egoera arriskatu dezakezu"

debugable.com blogetik, “Node.js harrapatu gabeko exzepzioa" 3 hitz gakori esker sailkatua

> …Beraz, baldin eta benetan egiten ari zarena jakiten baduzu, “uncaughtException” exzepzio ebentua jaso ostean zure zerbitzuaren berrekite dotorea egin beharko zenuke. Bestela, zure aplikazioaren egoera arriskuan jar dezakezu, edota bere liburutegiak inkontsekuenteak bihurtuarazi, mota guztietako errore zoroak eraginez…

### Blogeko Aipua: "Errore kudeaketaren inguruko hiru ideia-eskola daude"

JS Recipes blogetik

> …Errore kudeaketaren inguruko hiru ideia-eskola daude:

1. Utzi aplikazioak kraskadura izan dezan eta ondoren berrekin ezazu.
2. Errore posible guztiak kudeatu eta inoiz ez eduki kraskadurarik.
3. Bien arteko planteamendu bat
