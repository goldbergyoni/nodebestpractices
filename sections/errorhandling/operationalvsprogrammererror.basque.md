# Bereizi eragiketa erroreak eta programazio erroreak

### Azalpen paragrafoa

Ondorengo bi errore mota hauek bereizteak zure aplikazioaren matxura denbora gutxitu eta programazio errore eroak ekiditen lagunduko dizu. Batetik, eragiketa erroreak daude, gertatutako arazoa eta haren ondorioak ulertzen dituzunean (adibidez, HTTP zerbitzu bati egindako deiak huts egitea, konexio arazoak direla eta. Bestetik, errorea zergatik eta nondik etorri den ez dakizun egoerei programatze errore deritze (balio zehaztugabe bat irakurtzen saiatzen den kodea edo memoria ihes egiten dion datu basea izan daitezke). Eragiketa erroreak besteen aldean kudea errazak dira, eta normalean nahikoa izaten da errorea erregistratzea. Gauzak konplikatuagoak izan daitezke garatzaile errore bat tupustean agertzen denean, aplikazioa egoera aldakorrean aurki baitaiteke. Horrelakoetan, aplikazioa berrabiarazi baino irtenbide hoberik ez duzu

### Kode adibidea: erroreak eragiketa errore (konfiantzazko) bihurtu

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

### Blogeko aipua: "Programatzaileen erroreak programazio erroreak dira programan"

Joyent blogeko “Node.js errore kudeaketa" hitz gako bati esker sailkatua

> …Programatzaile erroreak gainditzeko modurik hoberena berehala huts eragitea da. Huts egiteren bat gertatzean automatikoki berrekingo dituen berrekite sistemaren bat erabiliz exekutatu beharko zenituzte zure programak. Berrekite sistemei esker, huts egitea da modurik azkarrena programatzaile errore iragankorrak gertatzean zerbitzua berreskuratzeko modu fidagarrian…

### Blogeko aipua: "Alde egiteko modu segururik ez dago zehaztugabeko egoera hauskorrik sortu gabe"

Node.js dokumentazio ofizialetik hartua

> …Throw-ek JavaScripten nola funtzionatzen duen kontuan izanda, ez dago ia inoiz ataza bati modu seguruan “bertan behera utzitako puntuan segida ematerik” erreferentziak galdu gabe edota bestelako egoera hauskor zehaztugaberik sortu gabe. Jaurtitako erroreei erantzuteko modurik seguruena prozesua gelditzea da. Jakina, web zerbitzari arruntetan, konexio ugari eduki ahal ditzakezu irekita, eta ez da zentzuzkoa tupustean haiek ixtea beste batek eragindako errore batengatik. Planteamendu hoberena da errorea bidali duen eskariari errore erantzun bat bidaltzea, besteei beren atazak bukatzeko denbora emanez, eta eskari berriei kasu egiteari utzi prozesu horretan.

### Blogeko aipua: "Bestela zure aplikazioaren egoera arriskuan jar dezakezu"

debugable.com blogetik, “Node.js harrapatu gabeko exzepzioa" 3 hitz gakori esker sailkatua

> …Beraz, baldin eta benetan egiten ari zarena jakiten baduzu, “uncaughtException” exzepzio ebentua jaso ostean zure zerbitzuaren berrekite dotorea egin beharko zenuke. Bestela, zure aplikazioaren egoera arriskuan jar dezakezu, edota haren liburutegiak aldakor bihurtuarazi, mota guztietako errore zoroak eraginez…

### Blogeko aipua: "Errore kudeaketaren inguruko hiru ideia eskola daude"

JS Recipes blogetik hartua

> …Errore kudeaketaren inguruko hiru ideia eskola daude:

1. Utzi aplikazioak huts egin dezan eta ondoren berrekin.
2. Kudeatu errore posible guztiak kudeatu eta inoiz ez huts egin.
3. Bien arteko planteamendu bat.
