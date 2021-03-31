# Saihestu npm erregistroan sekretuak argitaratzea

### Azalpena

Arreta eduki behar da npm erregistroetan sekretuak istripuz argitaratzeko arriskua dago eta. `.npmignore` fitxategia erabil daiteke fitxategi eta karpeta zehatz batzuk zerrenda beltzean jartzeko, edota `files` zerrendak `package.json`en zerrenda txuri gisa joka dezake.

npmek erregistroan benetan argitaratzen duenaren ikuspegia edukitzeko, `--dry-run` gehi daiteke npm publish komandora sortutako paketearen ikuspegi esanguratsua edukitzeko.

Garrantzitsua da kontutan edukitzea, proiektu batek `.npmignore` eta `.gitignore` fitxategiak erabiltzen baditu, `.npmignore`ren barruan dagoena erregistroan argitaratuko dela (esaterako, `.npmignore` fitxategiak `.gitignore` berridazten du). Baldintza hori nahasgarria izan daiteke eta sekretuak argitaratzeko arriskua ekar dezake. Programatzaileek `.gitignore` fitxategia egunera dezakete, baina `.npmignore` eguneratzea ahaztu, eta horrek fitxategi garrantzitsuak iturburu kontrolean ez argitaratzea ekar dezake, npm paketean egon arren

### Kode adibidea

.npmignore fitxategiaren adibidea

```
# Probak
test
coverage

# Eraikitze tresnak
.travis.yml
.jenkins.yml

# Ingurunea
.env
.config

```

"files" zerrenda package.jsonen erabiltzearen adibidea

```json
{
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### Beste blogari batzuek diotena

[Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/) bloga:

> ... Erabil beharreko beste jarduera egoki bat package.json fitxategiko files ezaugarria da, zerrenda zuri bezala funtzionatzen duena eta sortu eta instalatu beharreko paketean fitxategien multzoa zehazten duena (aintzakotzat ez hartzeko (ignore) fitxategiak zerrenda beltz gisa funtzionatzen duelarik). Filesen ezaugarria eta aintzakotzat ez hartzeko fitxategiak batera erabil daitezke esplizituki zein fitxategi gehitu edo baztertu behar diren zehazteko. Biak erabiltzean, package.jsoneko aurreko filesen ezagugarriak lehentasuna hartzen du aintzakotzat ez hartzeko fitxategiaren parean.

[npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)a:

> ... npm publish exekutatzean, npmek lekuko direktorioko fitxategi guztiak bateratzen ditu. Zer gehitu eta alde batera zer utzi erabakitzen du zure ordez. Erabaki horiek hartzeko zure proiektuko direktorioko hainbat fitxategiren edukiak erabiltzen ditu. Fitxategi horien artean, .gitignore, .npmingnore eta package.jsoneko files zerrenda aurkitzen dira. Gainera, beti gehitzen ditu fitxategi jakin batzuk, eta beste batzuk alde batera utzi.
