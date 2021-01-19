# Irten prozesutik elegantziarekin kanpoko norbait iristen denean hirira

### Azalpen Paragrafoa

Zure kodearen lekuren batean, errore kudeaketa objektua errore bat gertatzen denean nola jokatu erabakitzearen arduradun da, errorea konfiantzazkoa bada (adibidez operazio errorea, irakurri azalpen osatuagoa #3 jarraibide egokian) erregistro fitxategian idaztea nahikoa izango da. Gauzak okertzen dira errorea ezezaguna denean, honek osagairen bat egoera txarrean dagoela eta hurrengo eskaera guztiek huts egiteko aukera handia dutela esan nahi du eta. Adibidez, singleton bat edukiaz, token batek exzepzio bat jaurti eta ondoren bere egoera galdu duen zerbitzu batekin arazoa du, hemendik aurrera ustekabean joka dezake eta eskaera guztiek huts egitea eragin. Egoera honen aurrean, prozesua gelditu eta 'Berrekite tresna' erabili (Forever, PM2, etab. bezalakoak) egoera garbi batekin berriz hasteko.

### Kodearen adibidea: krak egin ala ez erabakitzen

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Garatzaileek operazio erroreak errorea.operazioErroreaDa=true zehazten dutela ziurtzat joz, irakur ezazu #3 jarraibide egokia
process.on('uncaughtException', (errorea) => {
  erroreKudeaketa.kudeatzailea.kudeatuErrorea(errorea);
  if(!erroreKudeaketa.kudeatzailea.erroreFidagarriaDa(errorea))
    process.exit(1)
});

// errore kudeatzaile zentralizatuak errore-kudeaketa logika kapsulatzen du
function erroreKudeatzailea() {
  this.kudeatuErrorea = (errorea) => {
    return logger.erroreaErregistratu(errorea)
      .then(kritikoaBadaAdministrariariPostaElektronikoaBidali)
      .then(kritikoaBadaOperazioZerrendanGorde)
      .then(erabakiIaOperazioErroreaDen);
  }

  this.erroreFidagarriaDa = (errorea) => {
    return errorea.operazioErroreaDa;
  }
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// Garatzaileek operazio erroreak errorea.operazioErroreaDa=true zehazten dutela ziurtzat joz, irakur ezazu #3 jarraibide egokia
process.on('uncaughtException', (errorea: Error) => {
  erroreKudeaketa.kudeatzailea.kudeatuErrorea(errorea);
  if(!erroreKudeaketa.kudeatzailea.erroreFidagarriaDa(errorea))
    process.exit(1)
});

// Nodeko Erroretik datorren errore objektu zentralizatua
export class AppErrorea extends Error {
  public readonly operazioErroreaDa: boolean;

  constructor(deskribapena: string, operazioErroreaDa: boolean) {
    super(deskribapena);
    Object.setPrototypeOf(this, new.target.prototype); // prototipo katea berreskuratu
    this.operazioErroreaDa = operazioErroreaDa;
    Error.captureStackTrace(this);
  }
}

// errore kudeatzaile zentralizatuak errore-kudeaketa logika kapsulatzen du
class ErroreKudeatzailea {
  public async kudeatuErrorea(errorea: Error): Promise<void> {
    await logger.erroreaErregistratu(errorea);
    await kritikoaBadaAdministrariariPostaElektronikoaBidali();
    await kritikoaBadaOperazioZerrendanGorde();
    await erabakiIaOperazioErroreaDen();
  };

  public erroreFidagarriaDa(errorea: Error) {
    if (errorea instanceof AppErrorea) {
      return errorea.operazioErroreaDa;
    }
    return false;
  }
}

export const kudeatzailea = new ErroreKudeatzailea();
```
</details>

### Blogeko Aipua: "Irtenbiderik hoberena krak egitea da"

Joyent blogetik

> …Programatzaile erroreetatik suspertzeko modurik hoberena berehala krak egitea da. Hutsegite gertaraki baten aurrean programa automatikoki berrekingo duen berrekite sistema bat erabili beharko zenuke zure programetan. Berrekite sistema baten erabileraz, programatzaile errore pasakor baten aurrean krak egitea zerbitzu fidagarri bat suspertzeko modurik azkarrena da…

### Blogeko Aipua: "Errore kudeaketaren inguruko hiru ideia-eskola daude"

JS Recipes blogetik

> …Errore kudeaketaren inguruko hiru ideia-eskola nagusi daude:
1. Utzi aplikazioak kraskadura izan dezan eta ondoren berrekin ezazu
2. Errore posible guztiak kudeatu eta inoiz ez eduki kraskadurarik
3. Bien arteko planteamendu bat

### Blogeko Aipua: "Alde egiteko modu segururik ez zehaztugabeko egoera hauskor bat sortu gabe"

Node.js dokumentazio ofizialetik

> …JavaScripten throwen funtsezko funtzionamenduan, ez dago ia inoiz "alde batera utzitakoa jasotzeko" modu seguruan egiteko biderik, erreferentziak galdu gabe edota bestelako zehaztugabeko egoera hauskorrak sortu gabe. Jaurtitako errore bati erantzuteko modurik seguruena prozesua itzaltzea da. Jakina, web zerbitzari arrunt batean, konekxio ugari eduki ahal ditzakezu irekita, eta ez da zentzuzkoa tupustean hauek ixtea beste batek eragindako errore batengatik. Planteamendu hoeberena, errorea bidali duen eskariari errore erantzun bat bidaltzea da, besteei beren atazak bukatzeko denbora utziz, eta eskari berriei kasu egiteari utzi prozesu horretan.
