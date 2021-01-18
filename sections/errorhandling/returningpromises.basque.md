# Agintzak itzultzea

<br/>

### Azalpen Paragrafoa

Errore bat gertatzen denean, fluxu sinkrono edo asinkrono bat dela, errore fluxuaren pila aztarna guztia edukitzea derrigorrezkoa da. Funtzio asinkrono batek (adibidez beste funtzio asinkrono bat deitzen duena) itxaron gabe (await) promesak itzultzen dituenean, errore bat gertatuko litzateke eta jatorrizko funtzio honen izena ez litzateke pilaren aztarnan agertu beharko. Honek, errorea diagnostikatzen duen pertsona informazio partzialarekin utziko luke, are gehiago errorearen zergatiak jatorrizko funtzioan badu oinarria. Badago "zero-kostuko pila aztarna asinkronoak" deitzen den v8 funtzionalitate bat, pila aztarnak azken gertatu berri den `await`ean moztuak ez izatea ahalbidetzen duena. Garrantzirik gabeko inplementazio xehetasunak direla eta, honek ez du funtzionatuko funtzioak bueltatzen duen balioa (sinkronoa edo asinkronoa), promesa bat baldin bada. Promesak deuseztuak izango direnean pilaren aztarnan zuloak egotea ekiditeoko, promesak beti explizituki ebatzi behar ditugu `await` erabiliaz berauek funtzioetatik bueltatu baino lehen

<br/>

### Kodearen adibidea Anti-Eredua: Funtzio asinkrono bat deitu itxaron gabe

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

### Kodearen adibidea: Zuzenki deitu eta itxaron

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

### Kodearen adibidea Anti-Eredua: Promesa bat bueltatu funtzio bat asinkronotzat etiketatu gabe

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

### Kodearen adibidea: Etiketatu promesak asinkrono gista bueltatzen dituen funtzioa

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

</br>

### Kodearen Adibidea Anti-eredua #3: callback asinkrono baten erabilera zuzena callback sinkrono bat espero zen lekuan

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

### Kodearen adibidea: callback asinkronoa funtzio asinkrono babo batekin bildu callback asinkrono gisa pasa aurretik

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

zero-kostuko pila aztarna asinkronoak" deitzen den v8 funtzionalitate bat

## Azalpen aurreratua

Funtzio sinkronoen pila aztarnen eta funtzio asinkronoen pila aztarnen meknismoak v8ren ezarpenetan oso ezberdinak dira:
pila aztarna asinkronoa Node.js martxan dagoen sistema eragileak emandako **pila**n oinarritua dago (programazio lengoaia gehienetan bezala). Funtzio asinkrono bat exekutatzen ari denean, sistema eragileko **pila** agerian jartzen da funtzioa bere lehen `await`era iristen den momentuan. Beraz, pilaren aztarna, sistema eragilearen **pila**ren eta baztertutako **promesa ebazpen katea**ren nahasketa bat da. Zero-kostuko pila aztarna asinkronoen ezarpenak **promesa ebazpen katea**ren du jatorria soilik promesa `itxaroten`  <span>[¹](#1)</span> ari den bitartean. Nola bakarrik funtzio `asinkrono`ek (`async`) `itxaron`go (`await`) duten, beti galduko da funtzio asinkronoa pilaren aztarna asinkrono batean, operazio asinkronoren bat egina izan bada funtzioa deitu eta gero <span>[²](#2)</span>

### The tradeoff (sektorea)

`await` bakoitzak mikro ataza berri bat sortzen du ebentuen begiztan, beraz `await` gehiago gehitzeak errendimendu isunak sortu ditzake. Hala ere, sareak edota datu baseak sortutako errendimendu isuna [ikaragarri handiagoa](https://colin-scott.github.io/personal_website/research/interactive_latency.html) da, beraz gehitutako `await`aren isuna ez da zerbitzariak edo CLIak garatzeko orduan kontutan hartu beharreko zerbait, eskaera edo komando zailen kodearentzat ez bada behintzat. Orduan, `await` ezabatzea `return await`etan errendimendu bultzada nabarmenak bilatzeko azken lekua izan beharko lukete eta, zalantzarik gabe, inoiz ez lirateke aldez aurretik eginak izan beharko

### Zergatik await bueltatazea anti-eredutzat jotzen zen iraganean

[Artikulu bikain](https://jakearchibald.com/2017/await-vs-return-vs-return-await/) ugari daude zergatik `return await`ak inoiz `try` bloke baten kanpoan erabili behar diren azaltzen dutenak, eta [ESLint arau](https://eslint.org/docs/rules/no-return-await) bat ere hau ezesten duena. Honen arrazoia async/await Node.js 0.10ko transpilatzaileekin (eta berezko sostengua lortu du Node.js 7.6n) erabilgarri bihurtu izana eta "zero kostuko pila aztarna asinkronoak" Node.js 10en gehitua izana eta ondoren Node.js 12n kenua, `return await` eta `return` guztiz parekoak ziren, edozein `try` kode bloketik kanpo. Oraindik ere berdina izaten jarraituko du seguraski ES motoreentzat. Honegatik, promesak kalkulatzea berauek bueltatu aurretik Node.jsentzat jarraibide egokiena da eta ez orokorrean EcmaScriptentzat


### Oharrak:

1. Pila aztarna asinkronoak halako ezarpen korapilatsua izatearen beste arrazoietako bat pila aztarna beti modu sinkronoan eraiki behar izanaren muga da, ebentuaren begiztaren <span id="a1">[¹](#1)</span> momentu berean
2. `throwAsync` barruan `await` gabe, kodea ebentu begiztaren fase berean exekutatuko litzateke. Hau, sistema eragilearen **pila** hustutzen ez deneko eta pila aztarna esplizituki funtzioaren emaitza itxaron gabe ere betetzen deneko kasu degeneratua da. Normalean, promesen erabilerak operazio asinkrono batzuk edukitzen ditu, non pilaren aztarnaren zati batzuk galduak izango diren
3. Zero-kostuko pila aztarna asinkronoek promesa erabilera kasu konplikatuentzat ez dute funtzionatuko, adibidez askotan eta leku ezberdinetan itxarondako promesa bakarra 

### Erreferentziak:
  <span id="1">1. </span>[v8ko zero-kostuko pila aztarna asinkronoak blog argitarapena](https://v8.dev/blog/fast-async)
  <br>

  <span id="2">2. </span>[zero-kostuko pila aztarna asinkronoei inguruko dokumentazioa ezarpen xehetasunekin hemen](
    https://docs.google.com/document/d/13Sy_kBIJGP0XT34V1CV3nkWya4TwYx9L3Yv45LdGB6Q/edit
  )
  <br>
