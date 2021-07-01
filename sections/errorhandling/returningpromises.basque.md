# Agintzak itzultzea

<br/>

### Azalpena

Errore bat gertatzen denean fluxu sinkrono edo asinkrono batetik abiatuta, derrigorrezkoa da errore fluxuaren pila aztarna osoa edukitzea. Harrigarria bada ere, funtzio asinkrono batek (adibidez beste funtzio asinkrono bat deitzen duena) itxaron gabe (await) promesak itzultzen dituenean, errore bat gertatuko litzateke eta jatorrizko funtzio horren izena ez litzateke pilaren aztarnan agertu beharko. Horrek informazio partziala emango dio errorea diagnostikatzen duenari, are gehiago errorearen zergatiak jatorrizko funtzioan badu oinarria. Badago "zero-kostuko pila aztarna asinkronoak" deitzen den v8 funtzionalitate bat, pila aztarnak azken gertatu berri den `await`ean moztuak ez izatea ahalbidetzen duena. Garrantzirik gabeko inplementazio xehetasunak direla eta, horrek ez du funtzionatuko funtzioak bueltatzen duen balioa (sinkronoa edo asinkronoa) promesa bat baldin bada. Promesak deuseztatzen direnean pilaren aztarnan zuloak egotea ekiditeko, promesak beti esplizituki ebatzi behar ditugu `await` erabiliz beraiek funtzioetatik bueltatu baino lehen

<br/>

### Anti ereduaren kode adibidea: funtzio asinkronoak deitu itxaron gabe

<details><summary>Javascript</summary>
<p>

```javascript
async function asyncJaurti(mezua) {
  await null // benetako asinkronoa den zerbaiti itxaron beharra (begiratu #2 puntua)
  throw Error(mezua)
}

async function bueltatuItxaronGabe () {
  return asyncJaurti('bueltatuItxaronGabe falta da pilaren aztarnan')
}

// 👎 EZ du edukiko bueltatuItxaronGabe pilaren aztarnan
bueltatuItxaronGabe().catch(console.log)
```

erregistratuko du

```
Errorea: bueltatuItxaronGabe falta da pilaren aztarnan
    asyncJaurti-ren barruan ([...])
```
</p>
</details>

### Kode adibidea: zuzenean deitu eta itxaron

<details><summary>Javascript</summary>
<p>

```javascript
async function asyncJaurti(mezua) {
  await null // benetako asinkronoa den zerbaiti itxaron beharra (begiratu #2 puntua)
  throw Error(mezua)
}

async function bueltatuItxaronda() {
  return await asyncJaurti('zati guztiak edukiz')
}

// 👍bueltatuItxaronda edukiko du pilaren aztarnan
bueltatuItxaronda().catch(console.log)
```

erregistratuko du

```
Error: zati guztiak edukiz
    asyncJaurti-ren barruan ([...])
    bueltatuItxaronda-ren barruan ([...])
```

</p>
</details>

<br/>

### Anti ereduaren kode adibidea: itzuli promesak funtzioak asinkronotzat etiketatu gabe

<details><summary>Javascript</summary>
<p>

```javascript
async function asyncJaurti () {
  await null // benetako asinkronoa den zerbaiti itxaron beharra (begiratu #2 puntua)
  throw Error('syncFn falta da pilaren aztarnan')
}

function syncFn () {
  return asyncJaurti()
}

async function asyncFn () {
  return await syncFn()
}

// 👎 ez dut edukiko syncFn pilaren aztarnan promesak itzultzen dituelako sinkronizatzen den ari den bitartean
asyncFn().catch(console.log)
```

erregistratuko du

```
Error: syncFn falta da pilaren aztarnan
    asyncJaurti-ren barruan ([...])
    async asyncFn-en barruan ([...])
```

</p>
</details>

### Kode adibidea: etiketatu promesak asinkrono gisa itzultzen dituen funtzioa

<details><summary>Javascript</summary>
<p>

```javascript
async function asyncJaurti () {
  await null // benetako asinkronoa den zerbaiti itxaron beharra (begiratu #2 puntua)
  throw Error('zati guztiak edukiz')
}

async function syncEtikAsyncFnraAldatua() {
  return await asyncJaurti()
}

async function asyncFn () {
  return await syncEtikAsyncFnraAldatua()
}

// 👍 orain syncEtikAsyncFnraAldatua pilaren aztarnan agertuko da
asyncFn().catch(console.log)
```

erregistratuko du

```
Error: zati guztiak edukiz
    asyncJaurti-ren barruan ([...])
    syncEtikAsyncFnraAldatua-ren barruan ([...])
    async asyncFn-en barruan ([...])
```

</p>
</details>

<br/>

### #3 anti ereduaren kode adibidea: callback asinkronoen erabilera zuzena callback sinkronoa espero zen lekuan

<details><summary>Javascript</summary>
<p>

```javascript
async function berreskuratuErabiltzailea (id) {
  await null
  if (!id) throw Error('pilaren aztarna falta da berreskuratuErabiltzailea deitu den lekuan')
  return {id}
}

const erabiltzaileIdak = [1, 2, 0, 3]

// 👎 pilaren aztarnak berreskuratuErabiltzailea funtzioa edukiko du baina ez du zehaztuko non izan den deitua
Promise.all(erabiltzaileIdak.map(berreskuratuErabiltzailea)).catch(console.log)
```

erregistratuko du

```
Error: pilaren aztarna falta da berreskuratuErabiltzailea deitu den lekuan
    berreskuratuErabiltzailea-en barruan ([...])
    async Promise.all-en barruan (index 2)
```

*Apunte bat*: pentsa liteke `Promise.all (index 2)`ek `berreskuratuErabiltzailea` deitua izan den lekua ulertzen lagundu dezakela, baina [guztiz ezberdina den v8ko akatsa](https://bugs.chromium.org/p/v8/issues/detail?id=9023) dela eta, `(index 2)` v8 barneko lerro bat da

</p>
</details>

### Kode adibidea: bildu callback asinkronoa funtzio asinkrono faltsu batean callback sinkrono gisa bidali aurretik

<details><summary>Javascript</summary>
<p>

*1.oharra*: callbacka deituko duen funtzioaren kodea kontrolatuz gero, soilik aldatu funtzio hau asinkronora eta gehitu `await` callback deiaren aurretik. Callbacka deitzen duen kodearen ardurandu ez zarela kontsideratu dut behean (edo honen aldaketa onartezina da adibidez atzeranzko-konpatibilitatea dela eta)

*2.oharra*: sarri, callback sinrkono bat espero den lekuetan callback asinkronoak erabiltzeak ez du inola ere funtzionatuko. Hau ez da funtzionatzen ez duen kodea nola konpontzeari buruz, kodea behar bezala funtzionatzen ari denean pilaren aztarna nola konpontzeari buruz baizik

```javascript
async function berreskuratuErabiltzailea (id) {
  await null
  if (!id) throw Error('zati guztiak edukiz')
  return {id}
}

const erabiltzaileIdak = [1, 2, 0, 3]

// 👍 orain azpiko lerroa pilaren aztarnan dago
Promise.all(erabiltzaileIdak.map(async id => await berreskuratuErabiltzailea(id))).catch(console.log)
```

erregistratuko du

```
Error: zati guztiak edukiz
    berreskuratuErabiltzailea-ren barruan ([...])
    async-en barruan ([...])
    async Promise.all-en barruan (index 2)
```

`map` barruko `await` explizituari esker, `async-ren barruan ([...])` lerroaren bukaerak `berreskuratuErabiltzailea` deitua izan den puntu zehatza adieraziko du

*Apunte bat*: `berreskuratuErabiltzailea` biltzen duen funtzio asinkrono batek `await` ahazten badu zerbait bueltatu aurretik (anti-eredua #1 + anti-eredua #3), zati bat bakarrik izango da mantendua pilaren aztarnan:


```javascript
[...]

// 👎 anti-pattern 1 + anti-pattern 3 - only one frame left in stacktrace
Promise.all(erabiltzaileIdak.map(async id => berreskuratuErabiltzailea(id))).catch(console.log)
```

erregistratuko du

```
Error: [...]
    berreskuratuErabiltzailea-ren barruan ([...])
```

</p>
</details>

<br/>

Zero kostuko pila aztarna asinkronoak" deitzen den v8 funtzionalitate bat

## Azalpen aurreratua

Oso ezberdinak dira funtzio sinkronoen pila aztarnen eta funtzio asinkronoen pila aztarnen mekanismoak v8ren ezarpenetan: pila aztarna asinkronoa oinarritua dago Node.js martxan dagoen sistema eragileak emandako **pila**n (programazio lengoaia gehienak bezala). Funtzio asinkrono bat exekutatzen ari denean, sistema eragileko **pila** agerian jartzen da funtzioa bere lehen `await`era iristen den momentuan. Beraz, pilaren aztarna nahasketa bat da, hain zuzen, sistema eragilearen pilaren eta baztertutako **promesa ebazpen katea**rena. Zero kostuko pila aztarna asinkronoen ezarpenak **promesaren ebazpen katea** luzatzen du bakarrik promesa `itxaroten` <span>[¹](#1)</span> ari den bitartean. Funtzio asinkronoek bakarrik (`async`) itxaron (`await`)  ahal dutenez, beti galduko da funtzio asinkronoa pilaren aztarna asinkrono batean, operazio asinkronoren bat izan bada funtzioa deitu eta gero <span>[²](#2)</span>

### Erdibidea

`await` bakoitzak mikro ataza berri bat sortzen du gertaeraren begiztan. Beraz, `await` gehiago gehitzeak errendimendu zigorra ekarriko luke. Hala ere, sareak edota datu baseak sortutako errendimendu isuna [ikaragarri handiagoa](https://colin-scott.github.io/personal_website/research/interactive_latency.html) da, eta, beraz, gehitutako `await`aren zigorra ez da zerbitzariak edo CLIak garatzeko orduan kontutan hartu beharreko zerbait, eskaera edo komando bakoitzeko oso kode beroa izan ezean behintzat. Orduan, `await`ak ezabatzeak `return await`etan errendimendu bultzada nabarmena bilatzeko azken lekua izan beharko luke eta, zalantzarik gabe, inoiz ez litzateke aldez aurretik egin beharko


### Zergatik jotzen zen await bueltatzea anti eredutzat iraganean

[Artikulu bikain](https://jakearchibald.com/2017/await-vs-return-vs-return-await/) ugari daude azaltzen dutenak zergatik `return await`ak ez diren inoiz `try` bloketik kanpo erabili behar, bai eta [ESLint arau](https://eslint.org/docs/rules/no-return-await) bat ere hori debekatzen duena. Horren arrazoia da async/await erabilgarri bihurtu izana Node.js 0.10ko transpilagailuekin (eta jatorrizko laguntza lortu dutela Node.js 7.6 bertsioan), eta "zero kostuko pila aztarna asinkronoak" Node.js 10era gehitua izana, eta ondoren Node.js 12tik kendua, `return await` eta `return` guztiz parekoak zirela, edozein `try` kode bloketik kanpo. Oraindik ere berdina izaten jarraituko du seguraski ES motoreentzat. Horregatik, Node.jsrentzat praktika onena da promesak kalkulatzea beraiek bueltatu aurretik. EcmaScriptentzat, ordea, hori ez praktika onena

### Oharrak:

1. Pila aztarna asinkronoak halako ezarpen korapilatsua izatearen beste arrazoi bat da pila aztarna beti modu sinkronoan eraiki behar dela, gertaeraren begiztaren <span id="a1">[¹](#1)</span> momentu berean

2. `throwAsync` barruan `await` gabe, gertaera begiztaren fase berean exekutatuko litzateke kodea. Hori, degeneratutako kasua da: sistema eragilearen **pila** ez litzateke hustuko, eta pila aztarna beteko litzateke funtzioaren emaitzari berariaz itxaron gabe ere. Normalean, promesen erabilerak operazio asinkrono batzuk edukitzen dituenez, pilaren aztarnaren zati batzuk galdu egingo lirateke

3. Zero kostuko pila aztarna asinkronoek ez lukete funtzionatuko promesa erabileren kasu korapilatsuetan: promesa bakar bati hainbat aldiz eta leku ezberdinetan itxaron beharra dagoenean, adibidez


### Erreferentziak:
  <span id="1">1. </span>[v8ko zero kostuko pila aztarna asinkronoak blog argitarapena](https://v8.dev/blog/fast-async)
  <br/>

  <span id="2">2. </span>[zero kostuko pila aztarna asinkronoei inguruko dokumentazioa ezarpen xehetasunekin hemen](
    https://docs.google.com/document/d/13Sy_kBIJGP0XT34V1CV3nkWya4TwYx9L3Yv45LdGB6Q/edit
  )
  <br/>
