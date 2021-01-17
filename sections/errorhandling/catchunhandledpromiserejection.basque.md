# Atzeman kudeatu gabeko agintzen arbuioak

<br/><br/>

### Azalpen Paragrafoa

Normalean, Node.js/Express aplikazio kode moderno gehienen promesen barruan funtzionatzen dute, .then kudeatzailearen, callback funtzio baten edota catch bloke baten barruan. Modu harrigarrian, garatzaileak .catch klausula gogoratu ezean, leku hauetan jaurtitako erroreak ez dira uncaughtException ebentu-kudeatzaileaz kudeatuak izaten eta desagertu egiten dira. Noderen bertsio berrienek ohartarazpen mezu bat gehitu dute kudeatu gabeko errefus bat agertzean, egia da honek gauzak ondo ez doazenean jakinarazten lagundu dezakela, baina argi dago ez dela erroreak kudeatzeko modu zuzena. Konponbide samurrena, promesa dei kate bakoitzaren barruan .catch klausula erabiltzen ez ahaztea eta errore kudeatzaile zentralizatu batera desbideratzea da. Hala ere, zure errore kudeaketa estrategia soilik garatzaile diziplinan oinarritua apurkorra da. Ondorioz, atzera-egite dotorea erabiltzea eta `process.on('unhandledRejection', callback)`-ra harpidetzea oso gomendatua dago, honek, promesa errore bakoitzak, lokalki kudeatuta egon ezean, bere tratamendua izango duela ziurtatuko du.

<br/><br/>

### Kodearen adibidea: errore hauek ez ditu inolako errore kudeatzailek harrapatuko (unhandledRejection-ek izan ezik)

```javascript
DAL.berreskuratuErabiltzaileaIdBidez(1).then((johnSnow) => {
  // errore hau desagertu egingo da
  if (johnSnow.bizirikDago === false) throw new Error("ahhhh");
});
```

<br/><br/>

### Kodearen adibidea: Kudeatu gabeko eta baztertutako promesak harrapatzen

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

### Blogeko Aipua: "Akatsen bat egiteko gai bazara, momenturen batean egingo duzu"

James Nelson blogetik

> Froga dezagun zure ulermena. Hauetako zeinek uste duzu erakutsiko duela errore bat konsolan?

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

> Ez dakit zer pentsatzen duzun, baina nire erantzuna guztietan errore bat bistaratuko dela da, eta errealitatea, JavaScript ingurune moderno gehienek kasu hauetako batentzat ere ez dituztela erroreak bistaratuko da. Gizakien arazoa, akatsen bat egiteko gai bazara, momenturen batean egingo duzula da. Hau argi edukita, begibistakoa dirudi gauzak akatsen erruz ahalik eta gutxien hondatzeko diseinatu behar direla da, eta honek erroreak beti kudeatzea esan nahi du, alde batera utzi beharrean.
