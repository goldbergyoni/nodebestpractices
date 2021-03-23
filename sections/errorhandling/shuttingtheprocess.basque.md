# Irten prozesutik elegantziarekin kanpoko norbait iristen denean hirira

### Azalpena

Zure kodearen lekuren batean, erroreren bat gertatzen denean erroreen kudeaketa objektuaren ardura da erabakitzea nola jokatu, eta, errorea konfiantzazkoa bada, nahikoa izango da erregistro fitxategian idaztea; errorea operazionala bada, berriz, irakurri azalpen osatuagoa #3 jarraibide egokian).  Gauzak okertzen dira errorea ezezaguna denean, horrek osagairen bat egoera txarrean dagoela eta hurrengo eskaera guztiek huts egiteko aukera handia dutela esan nahi du eta. Adibidez, eman dezagun, singleton bat edukita, token batek salbuespen bat igorri duela eta ondoren bere egoera galdu duen zerbitzu batekin arazoa duela; hortik aurrera ustekabean joka dezake eta eskaera guztiek huts egitea eragin. Egoera horren aurrean, prozesua gelditu eta 'Berrekite tresna' erabili (Forever, PM2, etab. bezalakoak) egoera garbi batekin berriz hasteko

### Kode adibidea: huts eragin ala ez erabakitzen

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

### Blog aipua: "Irtenbiderik hoberena huts eragitea da"

Joyent bloga

> …Programatzaileen erroreak konpontzeko modurik hoberena berehala krak egitea da. Programaren batek huts eginez gero, berrabiarazle bat erabiliz exekutatu beharko zenuke, automatikoki berrabiaraziko baitu. Berrabiarazlea dagoenean, huts egitea da programa fidagarria berreskuratzeko biderik azkarrena programatzailearen errore iragankor baten aurrean ...

### Blog aipua: "Errore kudeaketaren inguruko hiru ideia eskola daude"

JS Recipes bloga

> …Errore kudeaketaren inguruko hiru ideia eskola nagusi daude:
1. Utzi aplikazioari huts egiten eta ondoren berrabiarazi
2. Errore posible guztiak kudeatu eta inoiz ez huts egin
3. Bien arteko planteamendu bat

### Blog aipua: "Ez dago modu segururik irteteko zehaztugabeko egoera hauskorrik sortu gabe"

Node.js dokumentazio ofiziala

> …JavaScripten lanak nola exekutatzen diren kontuan izanda, ez dago ia inoiz lan bati ziurtasunez jarraipena emateko biderik utzitako puntuan hasita, erreferentziak galdu gabe edota bestelako zehaztugabeko egoera hauskorrik sortu gabe. Jaurtitako errore bati erantzuteko modurik seguruena prozesua itzaltzea da. Jakina, web zerbitzari arruntetan, konexio ugari eduki ahal dituzu irekita, eta ez da zentzuzkoa tupustean haiek ixtea beste batek eragindako errore batengatik. Planteamendu hoberena da bidaltzea errore erantzun bat errorea bidali duen eskariari, besteei beren atazak bukatzeko denbora utziz, eta eskari berriei kasu egiteari uztea prozesu horretan
