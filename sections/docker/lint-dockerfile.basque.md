# Garbitu zure Dockerfile fitxategia

### Azalpena

Gure oinarrizko aplikazioaren kodea praktika onen arabera lan egiteko eta arazo bihurtu aurretik arazoak eta akatsak ezabatzeko eratuta dago, eta gure Dockerfile fitxategiek ere hala beharko lukete. Dockerfile fitxategiak garbitzeak ekoizpen arazoak garaiz atzemateko aukerak handitzea dakar oso ahalegin txikiarekin. Adibidez, zure Dockefileetan zehaztutako logikarekin eta aginduekin inolako egiturazko arazorik ez dagoela ziurtatu dezake; esaterako, existitzen ez den etapa bat kopiatzea, onlineko biltegi ezezagun batetik kopiak egitea, aplikazioa super erabiltzailearekin (SUDO) exekutatzea eta beste hainbat. Dockerfile fitxategiren [Hadolint](https://github.com/hadolint/hadolint) linter irekia (Open Source) eskuz edota IE prozesuaren zati gisa erabil daiteke zure Dockerfile fitxategia(k) garbitzeko. Hadolint Dockerfile fitxategi garbitzaile aurreratua da, [Dockerren praktika onak](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) bultzatzen dituena.

<br/>

### Kode adibidea: arakatu Dockerfile fitxategia hadolint erabiliz

```bash
hadolint production.Dockerfile
hadolint --ignore DL3003 --ignore DL3006 <Dockerfile> # arau zehatzak burutu
hadolint --trusted-registry my-company.com:500 <Dockerfile> # Erabiltzailea jakinarazi irudi fidaezinak erabiltzeagatik
```

### Beste bloglariek diotena

[Josh Reichardt](https://thepracticalsysadmin.com/lint-your-dockerfiles-with-hadolint/)en bloga:

> Oraindik ez badaukazu zure Dockerfile fitxategiak garbitzeko ohiturarik, ohitu zaitez egiten. Kode garbiketa software garapeneko praktika arrunta da, arazo eta akatsak aurkitu, identifikatu eta ezabatzen laguntzen duena benetako arazo bihurtu aurretik. Zure kodea garbitzearen abantaila handienetako bat da akats txiki korapilasuak atzematen eta ezabatzen laguntzen duela, arazo bihurtu aurretik.

[Jamie Phillips](https://www.phillipsj.net/posts/hadolint-linting-your-dockerfile/)en bloga:

> Garbitzaileak edota linterrak sarri erabiltzen dira garapenean, lan taldeei programazio eta estilo erroreak atzematen laguntzeko. Hadolint Haskell erabiliz Dockerfile fitxategientzat sortutako garbitzailea (linterra) da. Tresna horrek zure Dockerfile fitxategiaren sintaxia aztertzen du eta Dockerek zehaztutako praktika onak kontutan hartu. Plataforma nagusi gehienetarako balio du, eta tutorial honek edukiontzia erabiliko du Dockerfile fitxategi batean garbiketa egiteko.
> <br/>
