# Garbitu zure Dockerfilea Linterra erabiliz

### Azalpen paragrafoa

Zure zuztar aplikazioa garbitua da jardunbide egokietara moldatzeko eta akatsak ezabatzeko arazo bihurtu aurretik, eta gure Dockerfileek berdin egin beharko lukete. Dockerfilea garbitzeak, aldez aurretik eta oso ahalegin gutxi eginda, ekoizpenean gerta litezkeen arazoak tratatzeko aukera gehiago izatea laguntzen du. Adibidez, zure Dockefilean zehaztutako logikarekin eta aginduekin inolako egitura arazorik ez dagoela ziurta dezake, esaterako, existitzen ez den etapa bat kopiatzea, urrutiko biltegi ezezagun batetik kopiak egitea, aplikazioa super erabiltzailearekin (SUDO) exekutatzea eta beste horrenbeste. Dockerfileren [Hadolint](https://github.com/hadolint/hadolint) linter irekia (Open Source) eskuz edota CI prozesuaren zati gisa erabil daiteke zure Dockerfilea(k) garbitzeko. Hadolint Dockerfile garbitzaile aurreratua da, [Dockerren jardunbide egokiak](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) bultzatzen dituena.


<br/>

### Kodearen adibidea: Dockerfilea arakatu hadolint erabiliz

```bash
hadolint production.Dockerfile
hadolint --ignore DL3003 --ignore DL3006 <Dockerfile> # arau zehatzak burutu
hadolint --trusted-registry my-company.com:500 <Dockerfile> # Erabiltzailea jakinarazi irudi fidaezinak erabiltzeagatik
```

### Beste bloglariek diotena

Blogetik, [Josh Reichardt](https://thepracticalsysadmin.com/lint-your-dockerfiles-with-hadolint/)en eskutik:
> Oraindik ez badaukazu zure Dockerfileak garbitzeko ohiturarik, ohitu zaitez egitera. Kode garbiketa software garapeneko praktika arrunta da, arazo eta akatsak aurkitu, identifikatu eta ezabatzen laguntzen duena benetako arazo bihurtu aurretik. Zure kodea garbitzearen abantaila handienetako bat, arazo bihurtu aurretik, akats txiki korapilasuak identifikatzen eta ezabatzen laguntzen duela da.

Blogetik, [Jamie Phillips](https://www.phillipsj.net/posts/hadolint-linting-your-dockerfile/)en eskutik:
> Linterrak garapenean sarri erabiliak dira, lan-taldeei programazio eta estilo erroreak antzematen laguntzeko. Hadolint Haskell erabiliz sortutako linterra da, Dockerfileentzat. Tresna honek zure Dockerfilea sintatikoki aztertzen du eta Dockerrek zehaztutako jarraibide egokiak kontutan hartu. Plataforma nagusi gehienetarako balio du, eta tutorial honek kontainerra garbiketa etsenplu Dockerfile batean berau erabiltzen bultzatuko du.
<br/>
