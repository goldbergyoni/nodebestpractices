# Kudeatu erroreak gune bakar batean, Express middlewarea erabili partez

### Azalpen paragrafoa

Errore kudeaketarako ardura bakarreko objektu bat ez izateak, errore garrantzitsuak ezkutatzeko aukerak ugaritzen ditu kudeaketa ezegoki baten eraginpean. Errore kudeaketarako objektua, errorea begibistako bihurtzearen arduradun da, adibidez, egoki formateatutako erregistro batean idatziz, ebentuak [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), edota [Raygun](https://raygun.com/) bezalako monitorizazio sistemaren batera bidaliz. [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers) bezalako web framework gehienak, errore kudeaketa middleware mekanismo bat proposatzen dute. Errore kudeaketa fluxu tipiko bat hau izan daiteke: moduluren batek errore bat jaurtitzen du -> API routerrak errorea harrapatzen du -> errorea middlewarera hedatzen du, (adibidez Express edo KOA), zeinek erroreak harrapatzeko ardura duen -> errore kudeatzaile zentralizatu bati deitzen zaio -> middlewareari esaten zaio ia errore hau konfiantzazkoa den (ez operazio errorea) aplikazioa dotoreki berrekiteko. Kontutan izan Express midelwarean erroreak kudeatzea praktika arrunta dela, okerra izan arren. Hau egiteak ez ditu kontutan hartzen weba ez diren bestelako interfazeetako erroreak.

### Kode adibidea: ohiko errore fluxua

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// DAL (Data Access Layer) geruza, ez ditugu erroreak hemen kudeatzen
DB.gehituDokumentua(bezeroBerria, (errorea, emaitza) => {
  if (errorea)
    throw new Error('Errore azalpen bikaina dator hemen', bestelako parametro erabilgarri batzuk)
});

// API bide kodea, errore sinkrono eta asinkronoak harrapatu eta middlewarera desbideratzen ditugu hemen
try {
  bezeroZerbitzua.gehituBerria(req.body).then((emaitza) => {
    res.status(200).json(emaitza);
  }).catch((errorea) => {
    next(errorea)
  });
}
catch (errorea) {
  next(errorea);
}

// Errore-kudeaketa middlewarea, errore kudeatzaile zentralizatuari uzten diogu errore kudeaketa
app.use(async (errorea, req, res, next) => {
  const operazioErroreaDa = await erroreKudeatzailea.kudeatuErrorea(errorea);
  if (!operazioErroreaDa) {
    next(errorea);
  }
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// DAL (Data Access Layer) geruza, ez ditugu erroreak hemen kudeatzen
DB.gehituDokumentua(bezeroBerria, (errorea: Error, emaitza: Result) => {
  if (errorea)
    throw new Error('Errore azalpen bikaina dator hemen', bestelako parametro erabilgarri batzuk)
});

// API bide kodea, errore sinkrono eta asinkronoak harrapatu eta middlewarera desbideratzen ditugu hemen
try {
  bezeroZerbitzua.gehituBerria(req.body).then((emaitza: Result) => {
    res.status(200).json(emaitza);
  }).catch((errorea: Error) => {
    next(errorea)
  });
}
catch (errorea) {
  next(errorea);
}

// Errore-kudeaketa middlewarea, errore kudeatzaile zentralizatuari uzten diogu errore kudeaketa
app.use(async (errorea: Error, req: Request, res: Response, next: NextFunction) => {
  const operazioErroreaDa = await erroreKudeatzailea.kudeatuErrorea(errorea);
  if (!operazioErroreaDa) {
    next(errorea);
  }
});
```

</details>

### Kode adibidea: erroreen kudeaketa ardura bakarreko objektuekin

<details>
<summary><strong>Javascript</strong></summary>

```javascript
module.exports.kudeatzailea = new erroreKudeatzailea();

function erroreKudeatzailea() {
  this.erroreaKudeatu = async (errorea) => {
    await logger.erroreaErregistratu(errorea);
    await kritikoaBadaAdministrariariPostaElektronikoaBidali;
    await kritikoaBadaOperazioZerrendanGorde;
    await erabakiIaOperazioErroreaDen;
  };
}
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
class ErroreKudeatzailea {
  public async erroreaKudeatu(errorea: Error): Promise<void> {
    await logger.erroreaErregistratu(errorea);
    await kritikoaBadaAdministrariariPostaElektronikoaBidali();
    await kritikoaBadaOperazioZerrendanGorde();
    await erabakiIaOperazioErroreaDen();
  }
}

export const kudeatzailea = new ErroreKudeatzailea();
```

</details>

### Anti ereduaren kode adibidea: kudeatu erroreak middleware barruan

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// zuzeneko errore kudeaketa middlewarean, Cron atazak eta frogatze erroreak kudeatuko dituena?
app.use((errorea, req, res, next) => {
  logger.erroreaErregistratu(errorea);
  if (errorea.larritasuna == erroreak.altua) {
    posta.postaElektronikoaBidali(
      konfigurazioa.administrariPostaElektronikoa,
      "Errore kritikoa gertatu da",
      errorea
    );
  }
  if (!errorea.operazioErroreaDa) {
    next(errorea);
  }
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// zuzeneko errore kudeaketa middlewarean, Cron atazak eta frogatze erroreak kudeatuko dituena?
app.use((errorea: Error, req: Request, res: Response, next: NextFunction) => {
  logger.erroreaErregistratu(errorea);
  if (errorea.larritasuna == erroreak.altua) {
    posta.postaElektronikoaBidali(
      konfigurazioa.administrariPostaElektronikoa,
      "Errore kritikoa gertatu da",
      errorea
    );
  }
  if (!errorea.operazioErroreaDa) {
    next(errorea);
  }
});
```

</details>

### Blogeko aipua: "Batzuetan maila baxuagoek beren deitzaileari errorea bidaltzea baino ezer praktikoagorik ezin dute egin"

Joyent blogeko “Node.js errore kudeaketa" hitz gako bati esker sailkatua

> …Errore bera pilaren maila askotan kudeatzen bukatuko duzu. Hau gertatzen da maila baxuenek beren deitzaileei (eta beste haiek beren deitzaileei, etab.) errorea bidaltzea baino beste ezer egokiagorik ezin dutenean egin. Askotan, soilik goi mailako deitzaileak daki zein den erantzun zuzena, ia ahalegin operazio berria den, erabiltzaileari errorearen berri eman behar dion, edo beste edozer. Baina horrek ez du esan nahi errore guztiak goi mailako callback bakar bati jakinarazi behar dizkiozunik, callback horrek ere errorea zein testuingurutan gertatu den ez daki eta…

### Blogeko aipua: "Errore bakoitza bakarka kudeatzea bikoizte galanta izan daiteke"

JS Recipes blogeko “Node.js errore kudeaketa" 17 hitz gakori esker sailkatua

> ……Hackathoneko Starter api.js kontrolatzaile bakarrean, 79 errore objektu inguru daude. Errore bakoitza bakarka kudeatzeak kodea ikaragarri bikoiztea eragin dezake. Hurrengo egin dezakezun gauza hoberena da errore kudeaketa logika Express middleware bati uztea…

### Blogeko aipua: "HTTP erroreak ezin dira zure datu basearen kodean egon"

Daily JS blogeko “Node.js errore kudeaketa" 14 hitz gakori esker sailkatua

> ……Errore objektuetan ezaugarri erabilgarriak zehaztu beharko zenituzke, baina ezaugarri horiek tinko erabiliz. Eta, ez gurutzatu korronteak: HTTP erroreak ezin dira zure datu basearen kodean egon. Edota, nabigatzaile garatzaileentzat, Ajax erroreak zerbitzariarekin hitz egiten duten kodean egon daitezke, baina Mustache txantiloiak prozesatzen dituen koderik ez…
