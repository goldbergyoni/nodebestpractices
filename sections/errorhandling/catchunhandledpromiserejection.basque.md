# Atzeman kudeatu gabeko agintzen arbuioak

<br/><br/>

### Azalpena

Normalean, Node.js/Express aplikazio kode moderno gehienek promesen barruan funtzionatzen dute, .then kudeatzailearen, callback funtzio baten edota catch bloke baten barruan. Harrigarria bada ere, garatzaile batek .catch klausula bat gehitu zuela gogoratu ezean, leku hauetan jaurtitako erroreak ez dira uncaughtException ebentu kudeatzaileaz kudeatuak izaten, eta desagertu egiten dira. Noderen bertsio berrienek ohartarazpen mezu bat gehitu dute tratatu gabeko errefusa agertzen denean; egia da horrek, gauzak ondo ez doazenean, ohartzen lagun dezakeela, baina argi dago ez dela erroreak kudeatzeko modu egokia. Konponbide samurrena da ez ahaztea promesa kateko dei bakoitzaren barruan .catch klausula erabiltzen eta errore kudeatzaile zentralizatu batera desbideratzea. Hala ere, hauskorra da erroreak kudeatzeko estrategia garatzailearen diziplinan soilik  oinarritzea. Ondorioz, oso gomendagarria da  atzera egite dotorea erabiltzea eta `process.on('unhandledRejection', callback)`-ra harpidetzea, horrek  ziurtatuko baitu promesa erroreek, bere tratamendua izango dutela, lokalki kudeatzen ez badira

<br/><br/>

### Kode adibidea: errore hauek ez ditu inolako errore kudeatzailek atzemango (unhandledRejection-ek izan ezik)

```javascript
DAL.berreskuratuErabiltzaileaIdBidez(1).then((johnSnow) => {
  // errore hau desagertu egingo da
  if (johnSnow.bizirikDago === false) throw new Error("ahhhh");
});
```

<br/><br/>

### Kode adibidea: kudeatu gabeko eta baztertutako promesak atzematen

<details>
<summary><strong>Javascript</strong></summary>

```javascript
process.on("unhandledRejection", (arrazoia, p) => {
  // Kudeatu gabeko baztertutako promesa bat harrapatu dut,
  // iada kudeatu gabeko erroreentzat atzera-egite kudeatzailea dugunez (begiratu beherago),
  // utzi jaurtitzen eta utzi berari hori kudeatzen
  throw arrazoia;
});

process.on("uncaughtException", (errorea) => {
  // Aurretik inoiz kudeatu gabeko errorea jaso berri dut, hau kudeatzeko eta berrekite bat beharrezkoa den erabakitzeko garaia da
  erroreKudeaketa.kudeatzailea.erroreaKudeatu(errorea);
  if (!erroreKudeaketa.kudeatzailea.erroreFidagarriaDa(errorea))
    process.exit(1);
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
process.on("unhandledRejection", (arrazioa: string, p: Promise<any>) => {
  // Kudeatu gabeko baztertutako promesa bat harrapatu dut,
  // iada kudeatu gabeko erroreentzat atzera-egite kudeatzailea dugunez (begiratu beherago),
  // utzi jaurtitzen eta utzi berari hori kudeatzen
  throw arrazoia;
});

process.on("uncaughtException", (errorea: Error) => {
  // Aurretik inoiz kudeatu gabeko errorea jaso berri dut, hau kudeatzeko eta berrekite bat beharrezkoa den erabakitzeko garaia da
  erroreKudeaketa.kudeatzailea.erroreaKudeatu(errorea);
  if (!erroreKudeaketa.kudeatzailea.erroreFidagarriaDa(errorea))
    process.exit(1);
});
```

</details>

<br/><br/>

### Blog aipua: "Erroreren bat egiteko gai bazara, momenturen batean egin egingo duzu"

James Nelson bloga

> Proba dezagun zure ulermena. Hauetako zeinek uste duzu erakutsiko duela errore bat kontsolan?

```javascript
Promise.resolve("agindutako balioa").then(() => {
  throw new Error("errorea");
});

Promise.reject("errore balioa").catch(() => {
  throw new Error("errorea");
});

new Promise((resolve, reject) => {
  throw new Error("errorea");
});
```

> Ez dakit zer pentsatzen duzun, baina nire erantzuna da guztietan bistaratuko dela erroreren bat, eta errealitatea da JavaScript ingurune moderno gehienek kasu hauetako batentzat ere ez dituztela erroreak bistaratuko. Gizakien arazoa da, erroreen bat egiteko gai bazara, momenturen batean egingo duzula. Hori argi edukita, begibistakoa dirudi gauzak diseinatu behar direla erroreen erruz ahalik eta gutxien hondatzeko, eta horrek erroreak beti kudeatu beharra dagoela esan nahi du, alde batera utzi beharrean.
