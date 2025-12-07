# Instalatu npm ci paketeak ekoizpenean

<br/><br/>

### Azalpena

Zure menpekotasunak blokeatu dituzu [**Blokeatu menpekotasunak**](./lockdependencies.basque.md) jarraituz, baina orain ziurtatu behar duzu pakete bertsio zehatzak erabiltzen direla ekoizpenean.

Paketeak instalatzeko `npm ci` erabiltzen baduzu, hori eta gehiago lortuko duzu.

- Zure `package.json` eta `package-lock.json` bat ez badatoz (hala behar lukete) edo blokeo fitxategirik ez baduzu, huts egingo du instalazioak
- `node_modules` karpeta badago, automatikoki kenduko du instalatu aurretik
- Azkarragoa da! [Argitaratutako bloga](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)ren arabera, ia bi aldiz azkarragoa

### Noiz egon daiteke erabilgarri?

Ziur egon IE inguruneak edo QAk probatuko duzula zure softwarea geroago ekoizpenera bidaliko duzun pakete bertsio berarekin.
Gainera, arrazoiren batengatik norbaitek package.json eskuz aldatzen badu, ez cli komando baten bidez, baizik eta package.json zuzenean editatuz, tarte bat sortzen da package.json eta package-lock.jsonen artean, eta errore bat jaurtitzen da.

### npmek dioena

[npm ciren dokumentazio](https://docs.npmjs.com/cli/ci.html)tik hartua

> Komando hau npm-installen antzekoa da, salbu eta ingurune automatizatuetan erabiltzeko dela, hala nola, proba plataformetan, etengabeko integrazio eta inplementazioetan, edo zure menpekotasunen instalazio garbia egiten ari zarela ziurtatu nahi duzun edozein egoeratan.

[`ci` komandoaren jaregitea iragartzen duen blogeko mezua](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

> Komandoak hobekuntza handiak eskaintzen dizkie eraikuntzen errendimenduari eta fidagarritasunari etengabeko integrazio/ inplementazio prozesuetarako, esperientzia koherentea eta azkarra eskainiz CI/CD erabiltzen duten garatzaileei beren lan-fluxuan.

[npmjs: menpekotasunak versus garatze-menpekotasunak (npmjs: dependencies and devDepencies)](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

> "dependencies": zure aplikazioak ekoizpenean eskatzen dituen paketeak.
> "devDependencies": tokiko garapenerako eta probetarako soilik behar diren paketeak.

<br/><br/>
