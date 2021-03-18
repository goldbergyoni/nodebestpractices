# npm erregistroan sekretuak argitaratzea sahiestu

### Azalpena

Arreta eduki behar da, npm erregistroetan sekretuak istripuz argitaratzeko arriskua baitago eta. `.npmignore` fitxategi bat erabil daiteke fitxategi eta karpeta zehatz batzuk zerrenda beltzean jartzeko, edota `files` zerrendak `package.json`en zerrenda txuri gisa joka dezake.

npmek benetan erregistroan argitaratzen duenaren ikuspegia edukitzeko, `--dry-run` gehi daiteke npm publish komandora sortutako paketearen ikuspegi esanguratsu bat edukitzeko.

Garrantzitsua da kontutan edukitzea proiektu batek `.npmignore` eta `.gitignore` fitxategiak erabiltzen baditu, `.npmignore`ren barruan dagoen dena erregistroan argitaratuko dela (esaterako, `.npmignore` fitxategiak `.gitignore` berridazten du). Baldintza hau nahasgarria izan daiteke eta sekretuak argitaratzeko arriskua ekar dezake. Programatzaileek `.gitignore` fitxategia egunera dezakete, baina `.npmignore` eguneratzea ahaztu, eta honek fitxategi garrantzitsuak iturburu kontrolera ez argitaratzea ekar dezake, npm paketean egon arren.

### Kode adibidea

.npmignore fitxategiaren adibidea

```
#probak
test
coverage

#eraikitze tresnak
.travis.yml
.jenkins.yml

#ingurunea
.env
.config

```

"files" zerrenda package.jsonen erabiltzearen adibidea

```
{
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### Beste blogari batzuek diotena

[Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/) blogetik:

> ... Erabili beharreko beste jarduera egoki bat package.json fitxategiko files ezaugarria erabiltzea da, zerrenda txuria bezala funtzionatzen duena eta paketearen barruan erabil daitezkeen sortu eta instalatu beharreko fitxategien zerrenda zehazten duena (aintzakotzat ez hartzeko (ignore) fitxategiak zerrenda beltz gisa funtzionatzen duelarik). files ezaugarriak eta aintzakotzat ez hartzeko fitxategiak, biak, batera erabil daitezke esplizituki zein fitxategi gehitu behar diren zehazteko, baita paketean baztertu beharrekoak ere. Biak erabiltzean, package.jsoneko aurreko files ezaugarriak lehentasuna hartzen du aintzakotzat ez hartzeko fitxategiaren parean.

[npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)etik:

> ... npm publish exekutatzean, npmek lekuko direktorioko fitxategi guztiak bateratzen ditu. Zer gehitu eta alde batera uztearen erabakiak hartzen ditu zure ordez. Erabaki hauek hartzeko, zure proiektuko direktorioko hainbat fitxategiren edukiak erabiltzen ditu. Fitxategi hauen artean, .gitignore, .npmingnore eta package.jsoneko files zerrenda aurkitzen dira. Gainera, beti gehitzen ditu fitxategi jakin batzuk, eta beste batzuk alde batera utzi.
