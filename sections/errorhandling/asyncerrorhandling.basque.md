# Erabili Async-Await edo errore asinkronoak kudeatzeko promesak

### Azalpena

Callbackak ez dira kudea errazak programatzaile gehienek ez dituzte ondo ezagutzen eta. Callbackek etengabeko errore egiaztatzea eskatzen dute, kode korapilotsua jasanaraziz eta kodigoaren fluxuaren ulergarritasuna zailduz. BlueBird, async, eta Q bezalako promesa liburutegiek kodigo estilo estandarra RETURN eta THROW erabiliz paketatzen dute, programaren fluxua kontrolatzeko. Zehazki, kodigo nagusia funtzio bakoitzean erroreak kudeatzetik askatzea ahalbidetzen duen try-catch errore kudeaketa estilo gogokoena onartzen dute

### Kode adibidea: promesen erabilera erroreak antzemateko

```javascript
return aFuntzioa()
  .then(bFuntzioa)
  .then(cFuntzioa)
  .then(dFuntzioa)
  .catch((errorea) => logger.error(errorea))
  .then(betiExekutatuFuntzioHau);
```

### Kode adibidea: async/awaiten erabilera erroreak antzemateko

```javascript
async function exekutatuAtazaAsinkronoBat() {
  try {
    const aBalioa = await aFuntzioa();
    const bBalioa = await bFuntzioa(aBalioa);
    const cBalioa = await cFuntzioa(bBalioa);
    return await dFuntzioa(cBalioa);
  } catch (errorea) {
    logger.error(errorea);
  } finally {
    await betiExekutatuFuntzioHau();
  }
}
```

### Anti ereduaren kode adibidea: callbackaren estiloko errore kudeaketa

<details>
<summary><strong>Javascript</strong></summary>

```javascript
datuakEskuratu(parametrorenBat, function (errorea, emaitza) {
  if (errorea !== null) {
    // bueltatutako callback funtzioa deitzea moduko zerbait egin eta errorea pasatu
    datuGehiagoEskuratu(a, function (errorea, emaitza) {
      if (errorea !== null) {
        // bueltatutako callback funtzioa deitzea moduko zerbait egin eta errorea pasatu
        datuGehiagoEskuratu(b, function (c) {
          datuGehiagoEskuratu(d, function (e) {
            if (errorea !== null) {
              // ulertu duzu ideia?
            }
          });
        });
      }
    });
  }
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
datuakEskuratu(
  parametrorenBat,
  function (errorea: Error | null, aEmaitza: ResultA) {
    if (errorea !== null) {
      // bueltatutako callback funtzioa deitzea moduko zerbait egin eta errorea pasatu
      datuGehiagoEskuratu(
        aEmaitza,
        function (errorea: Error | null, bEmaitza: ResultB) {
          if (errorea !== null) {
            // bueltatutako callback funtzioa deitzea moduko zerbait egin eta errorea pasatu
            datuGehiagoEskuratu(bEmaitza, function (cEmaitza: ResultC) {
              datuGehiagoEskuratu(
                cEmaitza,
                function (errorea: Error | null, d: ResultD) {
                  if (errorea !== null) {
                    // ulertu duzu ideia?
                  }
                }
              );
            });
          }
        }
      );
    }
  }
);
```

</details>

### Blog aipua: "Promesekin arazo bat dugu"

pouchdb.com bloga

> ……Izatez, callbackek zerbait oraindik maltzurragoa egiten dute: pilaz gabetzen gaituzte, programazio lengoaietan sarri egintzat jotzen duguna. Kodea pila gabe idaztea kotxe bat freno pedalik gabe gidatzea bezala da: ez zara konturatzen zein puntura arte behar duzun erabiltzen saiatu eta ez dagoela konturatzen zaren momentura arte. Promesen helburu nagusia da asinkronoa (async) erabiltzean galdutako lengoaien oinarri guztiak berreskuratzea: return, throw eta pila. Baina promesak modu egokian erabiltzen jakin beharra dago beraiei probetxua ateratzeko

### Blog aipua: "Promesen metodoa askoz ere trinkoagoa da"

gosquared.com bloga

> ………Promesen metodoa askoz ere trinkoagoa, argiagoa eta idazteko azkarragoa da. Errore edo salbuespen bat gertatzen bada, .catch() kudeatzaile bakar batek maneiatzen du. Errore guztiak kudeatzeko leku bakarra edukitzeak erroreen egiaztatzea lanaren fase bakoitzean idatzi beharrik ez dagoela adierazten du

### Blog aipua: "Promesak jatorrizko ES6 dira, eta sorgailuekin erabil daitezke"

StrongLoop bloga

> ……Callbackek erroreen kudeaketa istorio kaskarra dute. Promesak hobeak dira. Promesekin, erabili Expressen errore kudeaketa kapsulatua eta horrela salbuespenen bat ez antzemateko aukerak murriztuko dituzu. Promesak jatorriz ES6ak dira, eta  generatzaileekin eta ES7ren async/await bezalako proposamenekin erabil daitezke Babel bezalako konpilatzaileetan

### Blog aipua: "Ohiko fluxu kontrol erregularren egitura guzti horiek guztiz apurtuta daude"

Benno’s bloga

> ……Asinkronoaren, hau da, callbacketan oinarritutako programazioaren gauza hoberenetako bat da ohituta zauden fluxu kontrol erregularren egitura guzti horiek guztiz apurtuta daudela. Hala ere, salbuespenen kudeaketa da niretzat apurtuen dagoena. Javascriptek nahiko try…catch egitura ezaguna hornitzen du. Salbuespenen arazoa da, erroreak pila batean ekiditeko aukera ona eman arren, errorea beste pila batean gertatzen bada guztiz alferrikakoak izaten bukatzen dutela…
