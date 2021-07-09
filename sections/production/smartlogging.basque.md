# Gardentasuna handitu erregistratze plataforma adimendunak erabiliz

<br/><br/>

### Azalpena

Erregistroen adierazpenak inprimatzen dituzu eta, jakina, produkzioari buruzko informazioa biltzen duen interfazearen beharra duzu, erroreen eta oinarrizko metriken jarraipena egiteko (adibidez, zenbat errore gertatzen diren orduoro eta zein den APIaren amaierako puntu motelena). Hori horrela izanik, zergatik ez duzu ahalegin neurritsua egiten laukitxo guztiak markatuko dituen erregistro esparru sendo batean? Hori lortzeko, gogoeta egin eta erabakia hiru urratsetan hartu behar duzu:

**1. Erregistro adimenduna:** gutxi-gutxienez [Winston](https://github.com/winstonjs/winston), [Bunyan](https://github.com/trentm/node-bunyan) bezalako erregistro liburutegi entzutetsuren bat erabili behar duzu eta transakzio bakoitzaren hasieran eta amaieran informazio esanguratsua idatzi. Pentsatu ez ote den komeni, eragiketa taldeak eremu horietan jardun dezan, erregistro adierazpenak JSON gisa formateatzea eta testuinguruaren propietate guztiak eskaintzea (adibidez, erabiltzailearen IDa, eragiketa mota, etab.). Sartu transakzio ID bakarra erregistro lerro bakoitzean. Informazio gehiago nahi izanez gero, idatzi "Idatzi transakzio id-a erregistroan" azpian dagoen bulletean. Azkenik, kontuan hartu behar da ez ote den komeni sistemaren baliabideak erregistratuko dituen eragileren bat (memoria, adibidez) eta PUZa (Elastic Beat, esaterako) sartzea.

**2. Agregazio adimenduna:** zure zerbitzariaren fitxategi sisteman informazio zabala eskuratu duzunean, garaia da aldizka datu horiek agregatu, erraztu eta bistaratzen dituen sistema batera bultzatzeko. Pila elastikoa, adibidez, oso aukera popularra eta ezaguna da, datuak bildu eta bistaratzeko osagai guztiak eskaintzen dituena. Produktu komertzial askok antzeko funtzionalitatea eskaintzen dute, baina konfigurazio denbora asko murrizten dute eta ez dute ostatatu beharrik.

**3. Bistaratze adimenduna:** orain informazioa batu eta bila daiteke; bat pozik egon daiteke erregistroak erraz bilatzeko ahalmena duelako bakarrik; baina hori askoz ere gehiago lor daiteke kodetu beharrik izan gabe edo ahalegin handirik egin gabe. Orain metrika operatibo garrantzitsuak erakusteko moduan gaude: hala nola, errore tasa, batez besteko PUZa egunean zehar, zenbat erabiltzaile berri sartu diren azken orduan eta gure aplikazioa gobernatzen eta hobetzen laguntzen duen beste edozein metrika.

<br/><br/>

### Bistaratze adibidea: Kibana-k (Elastic stack-en zati bat) erregistroen edukian bilaketa aurreratua errazten du

![Kibana-k (Elastic stack-en zati bat) erregistroen edukian bilaketa aurreratua errazten du](/assets/images/smartlogging1.png "Kibana-k (Elastic stack-en zati bat) erregistroen edukian bilaketa aurreratua errazten du")

<br/><br/>

### Bistaratze adibidea: Kibana-k (Elastic stack-eko zati bat) erregistroetan oinarritutako datuak bistaratzen ditu

![Kibana-k (Elastic stack-eko zati bat) erregistroetan oinarritutako datuak bistaratzen ditu](/assets/images/smartlogging2.jpg "Kibana-k (Elastic stack-eko zati bat) erregistroetan oinarritutako datuak bistaratzen ditu")

<br/><br/>

### Blogeko aipua: erregistroaren eskakizunak

[Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/) bloga

> Hona hemen jarraibide batzuk (erregistratzaile batentzat):
>
> 1.  Erregistro lerro bakoitzeko denbora marka. Hau nahiko argia da, erregistro sarrera bakoitza noiz gertatu den jakin beharko zenuke.
> 2.  Gizakiek nahiz makinek erraz uler dezakete Erregistro formatua.
> 3.  Konfiguragarriak diren hainbat helmuga fluxu izateko aukera ematen du. Adibidez, erroreren bat gertatzen bada jarraipen erregistroak idazten ari zarenean fitxategi batean, lehenengo idatzi fitxategi horretan eta gero errore fitxategian, eta bidali mezu elektronikoa aldi berean ...

<br/><br/>

<br/><br/>
