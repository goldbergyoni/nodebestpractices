# Erabili Async-Await edo errore asinkronoak kudeatzeko promesak

### Azalpen paragrafoa

Callbackak ez dira kudeaerrezak programatzaile gehienek ondo ezagutzen ez dituzte eta. Callbackek etengabeko errore egiaztatzea eskatzen dute, kode korapilotsua jasanaraziz eta kodigoaren fluxuaren ulergarritasuna zailduz. BlueBird, async, eta Q bezalako promesa liburutegiek kodigo estilo estandarra RETURN eta THROW erabiliaz paketatzen dute, programaren fluxua kontrolatzeko. Zehazki, kodigo nagusia funtzio bakoitzean erroreak kuadeatzetik askatzea ahalbidetzen duen try-catch errore kudeaketa estilo gogokoena onartzen dute

### Kodearen adibidea – promesen erabilera erroreak harrapatzeko

```javascript
return aFuntzioa()
  .then(bFuntzioa)
  .then(cFuntzioa)
  .then(dFuntzioa)
  .catch((errorea) => logger.error(errorea))
  .then(betiExekutatuFuntzioHau);
```

### Kodearen adibidea - async/awaiten erabilera erroreak harrapatzeko

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

### Anti ereduaren kodearen adibidea – callbackaren estiloko errore kudeaketa

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

### Blogeko Aipua: "Promesekin arazo bat dugu"

pouchdb.com blogetik

> ……Izatez, callbackek zerbait oraindik maltzurragoa egiten dute: pilaz gabetzen gaituzte, programazio lengoaietan sarri egintzat jotzen duguna. Kodea pila gabe idaztea kotxe bat freno pedalik gabe gidatzea bezala da: ez zara konturatzen zein punturarte behar duzun erabiltzen saiatu eta ez dagoela konturatzen zaren momenturarte. Promesen interes guztia asinkronoa (async) erabiltzean galdutako lengoaien oinarri guztiak berreskuratzea da: return, throw eta pila. Baina promesak modu egokian erabiltzen jakin beharra dago beraien probetxua ateratzeko.

### Blogeko Aipua: "Promesen metodoa askoz ere konpaktuagoa da"

gosquared.com blogetik

> ………Promesen metodoa askoz ere konpaktuagoa, argiagoa eta idatzeko azkarragoa da. Errore edo exzepzio bat gertatzen bada .catch() kudeatzaile bakar batek maneiatzen du. Errore guztiak kuadeatzeko leku bakar hau edukitzeak erroreen egiaztatzea lanaren fase bakoitzean idatzi beharrik ez dagoela adierazten du.

### Blogeko Aipua: "Promises are native ES6, can be used with generators"

StrongLoop blogetik

> ….Callbackek errore kudeaketa istorio kaskarra dute. Promesak hobeak dira. Promesekin, erabili Expressen errore kudeaketa kapsulatua eta horrela exzepzioren bat ez harrapatzeko aukerak murriztu. Promesak ES6ren berezkoak dira, generatzaileekin eta ES7ren async/await bezalako proposamenekin, Babel bezalako konpilatzaileetan, erabil daitezke.

### Blogeko Aipua: "Ohiko fluxu kontrol erregular egitura guzti horiek guztiz apurtuta daude"

Benno’s blogetik

> ……Asinkronoaren, callbacketan oinarritutako programazioaren, gauza hoberenetako bat, ohituta zauden fluxu kontrol erregular egitura guzti horiek guztiz apurtuta daudela da. Hala ere, exzepzioen kudeaketa da niretzat apurtuen dagoena. Javascriptek nahiko try…catch egitura ezaguna hornitzen du. Exzepzioen arazoa, erroreak pila batean ekiditeko aukera ona eman arren, errorea beste pila batean gertatzen bada guztiz alferrikakoak izaten bukatzen dutela da…
