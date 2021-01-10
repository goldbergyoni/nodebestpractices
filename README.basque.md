[✔]: assets/images/checkbox-small-blue.png

# Node.js-ren jardunbide egokiak

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js-ren jardunbide egokiak">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20December%2012%202020-green.svg" alt="Azken eguneratzea: 2020ko azaroa"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Node 14.0.0rako eguneratua">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Hemen ere bagaude!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Irakurri beste hizkuntza batzuetan: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md), [![RU](/assets/flags/RU.png)**RU**](/README.russian.md), [![PL](/assets/flags/PL.png)**PL**](/README.polish.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR** eta ![TR](/assets/flags/TR.png)**TR** aribidean!)](#translations)

<br/>

###### Gure [Zuzendaritza Batzordeak ](#steering-committee) eta [laguntzaileek](#collaborators) eraiki eta mantentzen dute webgune hau

# Azken jardunbide egokiak eta albisteak

- **✅ Jardunbide egoki berria:** [Alexsey](https://github.com/Alexsey)-ren 2.12 bulletak erakusten du funtzio pila aztarnak uzten dituela. Hor arazo handia izan liteke salbuespenek eragindako arazoak konpontzean exekuzio fotogrametako batzuk ez dituzten produkzioetan

- **✅ Jardunbide egoki berria:** Josh Hemphill-en 6.8 bulletak &quot;Erabiltzaileen pasahitzak / sekretuak BCrypt edo Script erabiliz&quot; babestea gomendatzen du. Azalpen sakona ematen du aukera bakoitza proiektu zehatz batera noiz eta zergatik egokitzen den jakiteko. Ez galdu gida labur hau hash-en aukeren azalpen labur bat eskaintzen duena

- **:whale: Node.js + Docker-en jardunbide egokiak:** Atal berri bat argitaratu berri dugu, 15 jardunbide egoki jasotze
  dituena Dockerrekin erabili beharreko kodetze teknikei buruzkoak

<br/><br/>

# Ongi etorri! Hasi aurretik jakin beharreko 3 gauza:

**1. Hemen dozenaka artikulu dauzkazu, onenetarikoak Node.jsri buruz egindakoetan:** alegia, bilduma honek Node.jsren jardunbide egokienak jasotzen ditu, edukien arabera sailkatuta

**2. Dagoen bildumarik handiena da, eta astetik astera handiagoa da:** une honetan 80tik gora jardunbide, estilo eskuliburu eta arkitektura aholku dauzkagu bilduta. Gustura asko jasoko genituzte zure ekarpenak bilduma hau eguneratuta edukitzeko, bai kode akatsak konponduz, bai itzulpenak eginez, bai ideia berriak proposatuz egin ditzakezunak: izan zaitez Node.jsren jardunbide egokienen liburuko partaide. Ikusi gure [idazketa jarraibideak](/.operations/writing-guidelines.md)

**3. Jarraibide gehienek informazio gehigarria dute.** Jarraibideko puntu bakoitzaren ondoan **🔗Informazio gehiago** esteka aurkituko duzu, jarraibidea osatzen duena kode adibideekin, blogetako aipu hautatuekin eta informazio osagarri gehiagorekin

<br/><br/>

## Edukien aurkibidea

1. [Proiektuaren egitura (5)](#1-project-structure-practices)
2. [Akatsen kudeaketa (11) ](#2-error-handling-practices)
3. [Kodearen estiloa (12) ](#3-code-style-practices)
4. [Probak eta kalitate orokorra (13) ](#4-testing-and-overall-quality-practices)
5. [Ekoizpena (19) ](#5-going-to-production-practices)
6. [Segurtasuna (25)](#6-security-best-practices)
7. [Errendimendua (2) (Aribidean ✍️)](#7-draft-performance-best-practices)
8. [Docker (15)](#8-docker-best-practices)

<br/><br/>

# `1. Proiektuaren egitura`

## ![✔] 1.1 Antolatu zure proiektua atal eta osagai txikiagotan

**TL;PL:** aplikazio handien oztoporik handiena kode base erraldoi bat mantendu beharra da, ehundaka lotura eta menpekotasun dituena. Horrelako lan monolitikoek programatzaileen lana motelarazten dute, funtzionalitate berriak gehitzen saiatzen dira eta. Hori gerta ez dadin, zatitu zure kodea osagai txikiagoetan, bakoitza bere datuekin karpeta banatan, eta bermatu osagai bakoitza laburra eta sinplea izatea. Bisitatu hemen behean dagoen “Informazio gehiago” esteka, proiektu egoki baten egitura zuzenaren adibideak ikusteko

**Bestela:** Bestela: funtzionalitate berriak programatzean, garatzaileek zailtasun handiak izaten dituzte aldaketa horien eragina antzemateko, eta beldur izaten dira funtzionalitateon menpeko osagaiak hautsiko ote dituzten. Ondorioz, inplementazioak motelagoak eta arriskutsuagoak izaten dira. Oro har, zailagoa izaten da aplikazio baten kodea luzatzea negozio unitateak banatuta ez daudenean

🔗 [**Informazio gehiago: antolatu zure proiektua osagai txikiagotan**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Antolatu zure aplikazioa geruzatan eta mantendu webaren geruza bere esparruaren barruan

**TL;PL:** osagai bakoitzak «geruzak» izan beharko lituzke: hau da, berariaz weberako egindako objektu bat,; beste bat, logikarako; eta beste bat, datuen sarbidearen koderako. Horrek, zati bakoitzaren funtzioak ondo bereizteko aukera eskaintzeaz gainera, sistema errazago simulatu eta testatzea ahalbidetzen du. Modelo hau oso ohikoa bada ere, APIen garatzaileek joera izaten dute geruzak nahasteko, webeko objektu espezifikoa (Express req, res) logika operatiboaren eta datuen geruzetara pasatuz, eta, ondorioz, bai aplikazioa bai sarbidea Expressen menpeko bihurtzen dira

**Bestela:** aplikazio batean webeko objektuak beste geruzekin nahastuta badaude, ezingo da bertara sartu testak, CRON atazak eta Express middleware-ak baino erabiliz

🔗 [**Informazio gehiago: antolatu zure aplikazioa geruzatan**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Kokatu baliabide komunak NPM paketetan

**TL;PL:** data base askok osatzen duten aplikazio handi bat prestatzen dugunean, geruza guztietan lan egiten duten zeharkako tresna bakoitzak –erregistragailuak, zifragailuak eta beste– bere kodearen barruan egon behar du, NPM pakete pribatu moduan, tresna horiek hainbat proiektutan partekatu ahal izatea ahalbidetzen duena

**Bestela:** zuk zeuk asmatu beharko duzu zeure inplementazioa eta menpekotasun gurpila

🔗 [**Informazio gehiago: antolatu funtzioen arabera**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Banandu Express 'aplikazioa' eta 'zerbitzaria'

**TL;PL:** ekidin [Express](https://expressjs.com/) aplikazioa artxibo handi batean oso-osorik definitzeko ohitura desegokia. Banandu Express aplikazioaren definizioa bi artxibotan gutxienez: batetik, APIaren definizioa (app.js); eta, bestetik, sarearen ezaugarriak (WWW). Are gehiago, egitura egokiagoa izan dadin, jarri APIaren definizioa osagaiekin batera

**Bestela:** probak egiteko, HTTP deien bidez baino ezingo da zure APIra sartu. Sarbide hori motelagoa da eta asko zailtzen du estaldura txostenak egitea. Gainera, ziur aski, ez da bat ere atsegina izango ehundaka lerro dituen kodea mantentzea

🔗 [**Informazio gehiago: banandu Express 'aplikazioa' eta 'zerbitzaria'**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Erabili ingurunea errespetatzen duen konfigurazio seguru eta hierarkiko bat

**TL;PL:** akatsik gabeko konfigurazio perfektu batek bermatu behar du (a) giltzak fitxategietatik eta inguruneko aldagaietatik irakurri ahal izatea, (b) sekretuak iturri kodetik kanpo gordeta egotea, eta, (c), bilaketak errazte aldera, konfigurazioa hierarkikoa izatea. Hori dena lortzeko badira paketeak, hala nola, rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config) eta [convict](https://www.npmjs.com/package/convict).

**Bestela:** konfiguazioa egitean baldintza horietarikoren bat betetzen ez baduzu, lana moteldu egingo da, bai garapen taldearena, bai devops taldearena

🔗 [**Informazio gehiago: konfigurazio jardunbide egokiak**](/sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `2. Akatsen kudeaketa`

## ![✔] 2.1 Erabili Async-Await edo errore asinkronoak kudeatzeko promesak

**TL;PL:** errore asinkronoak callback erabiliz kudeatzen badituzu, infernurako biderik azkarrena hartuko duzu edo, galbiderako piramidean sartuko zara. Zure kodeari opari on bat egin nahi badiozu, erabili agintzen biblioteka ezagun bat edo async-await, try-catch erakoa adibidez,kode sintaxis askoz trinkoago eta ohikoago bat eskaintzen duena

**Bestela:** Node.js-en callback teknika (“err, response” prozedura) erabiltzen baduzu, kode ez jasangarriak sortuko dituzu, batera suertatuko baitira kode arrunta duten erroreen kudeaketa, habiaratze sarriegiak eta kodetze eredu ez erosoak

🔗 [**Informazio gehiago: ekidin callback prozedurak**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Erabili soilik “Errorea” objektu kapsulatua

**TL;PL:** maiz, erroreak kate gisa edo modu pertsonalizatuan agertzen dira, erroreak kudeatzeko logika zaildu eta moduluen arteko elkarreragingarritasuna oztopatzen duena. Agintza bat baztertu zein salbuespen bat ezarri edo errore ohar bat argitaratzen duzunean, soilik “Errorea” objektu kapsulatua –edo “Errore txertatua“ objektua zabaltzen duen objektua– erabiliz lortuko duzu bermatzea bateratasuna handitu eta informazioa ez galtzea

**Bestela:** osagairen bati deitzean erroreak zein motatakoak diren jakin gabe, askoz zailagoa da eurak kontrolatzea. Are okerrago, erroreak deskribatzeko modu pertsonalizatuak erabiltzeak errore kritikoen informazioa galtzea ekar dezake, pilaren aztarna, besteak beste

🔗 [**Informazio gehiago: erabili soilik “Errorea” objektu kapsulatua**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Bereizi eragiketa erroreak eta programatze erroreak

**TL; DR:** errore operazionalek (adibidez, APIak balio gabeko sarrera jasotzea) agerian jartzen dituzten arazoak ezagunak izaten dira, eta, haien eragina guztiz ulertu eta kontuz kudeatzeko modukoak izaten dira. Bestetik, programatzaileen erroreak (adibidez, zehaztu gabeko aldagaia irakurtzen saiatzea) aplikazioa berrabiarazteko agindua ematen duten kode hutsegite ezezagunak izaten dira

**Bestela:** eti berrabiaraz dezakezu aplikazioa errore bat agertzen denean. Baina zergatik utzi 5.000 erabiltzaile offline iragarri daitekeen errore funtzional txiki batengatik? Kontrakoa ere ez da egokia: arazo ezezagun bat gertatzen denean -programatzailearen errore bat, esaterako- aplikazioa martxan mantentzeak ezusteko jokaerak eragin ditzake. Biak bereizteak aukera ematen du kontuz jokatzeko eta ikuspegi orekatu bat aplikatzeko testuinguruan oinarrituz

🔗 [**Informazio gehiago: eragiketa erroreak vs programazio erroreak**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Kudeatu erroreak gune bakar batean, Express middleware erabili partez

**TL;PL:** erroreak kudeatzeko logika -hala nola, haien erregistroa eramatea eta administratzaileari mezuak bidaltzea- objektu dedikatu zentralizatu batean kapsulatu behar da, erroreren bat gertatzen denean helmuga guztiek (adibidez, Express middleware, cron atazak, atalkako egiaztatzeak) hara deitu dezaten

**Bestela:** erroreak toki bakarrean ez kudeatzeak kodea bikoiztea eragiten du eta, ziur aski, erroreak gaizki kudeatzea ere bai

🔗 [**Informazio gehiago: kudeatu erroreak gune bakar batean**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Dokumentatu aplikazioaren erroreak Swagger edo GraphQL-ren laguntzarekin

**TL;PL:** jakinaren gainean jarri aplikazioaren deitzaileak erroreak berriro gerta daitezkeela, errore horiek behar bezala konpondu ahal izateko hutsik egin gabe. RESTful aplikazioetan Swagger bezalako dokumentazio esparruak erabiltzen dira. GraphQL erabiltzen baduzu, zeure eskema eta azalpenak erabil ditzakezu

**Bestela:** aplikazio baten bezeroak erabaki dezake aplikazioa itxi eta berrabiaraztea, ulertzen ez duen errore baten abisua jaso duelako soil-soilik. Oharra: zu zeu izan zaitezke zure aplikaziotik deitzen duena (oso ohikoa mikrozerbitzu inguruneetan)

🔗 [**Informazio gehiago: dokumentatu aplikazioaren akatsak Swagger edo GraphQLren laguntzarekin**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Irten prozesutik elegantziarekin kanpoko norbait iristen denean hirira

**TL;PL:** errore ezezagun bat gertatzen denean (programazio errore bat, ikusi 2.3 jardunbide egokia), zalantza izaten da era egokian lanean ote dabilen aplikazioa. Kasu horietan, oso ohikoa izaten da prozesuak kudeatzeko tresna bat erabiltzea [Forever](https://www.npmjs.com/package/forever), [PM2](http://pm2.keymetrics.io/) edo antzekoren bat– prozesua berriro hasteko

**Bestela:** ezagutzen ez duzun zerbait gertatzen denean, izan daiteke objekturen batzuk egoera txarrean daudelako (esaterako, globalki erabiltzen den gertaera igorle bat, barneko erroreren batengatik ondo ez dabilena) eta gerta daiteke aurrerantzean abisuek huts egitea edo modu ero samarrean funtzionatzea

🔗 [**Informazio gehiago: gelditu prozesua**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Erabili erregistratze tresna heldu bat erroreen ikusgaitasuna handitzeko

**TL;PL:** erregistratze tresna helduen sortak erabiltzen badituzu –[Pino](https://github.com/pinojs/pino) edo [Log4js](https://www.npmjs.com/package/log4js), adibidez–, erroreak lehenago antzeman eta ulertuko dituzu. Beraz, utzi alde batera console.log

**Bestela:** console.log-ak arakatu behar badituzu edo testua desordenatua duen artxibo batean erroreak eskuz, kontsulta tresnarik gabe edo erregistratze bisore ganorazkorik gabe bilatu behar badituzu, ordu asko emango dituzu lanean gaueko ordu txikiak arte

🔗 [**Informazio gehiago: erabili erregistratze tresna helduak**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Testeatu erroreen fluxua zure lan esparruko test gustukoena erabiliz

**TL;PL:** kalitate profesionaleko kontrol tresna automatizatu bat izan zein programatzaileentzako eskuzko test soil bat izan, bermatu zure kodeak ez duela egoera positiboetan bakarrik lan egiten, baizik eta errore zuzenak ere kudeatu eta birbidaltzen dituela. Mocha & Chai bezalako egiaztatze plataformako testek erraz egin dezakete lan hori (ikusi “Gist leiho”ko kode adibideak)

**Bestela:** automatikoki zein eskuz probarik egin gabe ezin duzu konfiantzarik izan zure kodeak benetako erroreak antzemango dituen. Errore adierazgarririk gabe ez dago erroreak kudeatzerik

🔗 [**Informazio gehiago: testeatu erroreen fluxua**](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Aurkitu erroreak eta jardunik gabeko uneak APM produktuak erabiliz

**TL;PL:** monitorizazio eta errendimendu produktuek (APM, ingelesezko siglen arabera) modu proaktiboan ebaluatzen dute zure kode basea edo aplikazioa automatikoki aurkitu ahal izan d n erroreak, blokeoak eta atzeman ezin dituzun eraginkortasun txikiko atalak

**Bestela:** denbora asko pasa zenezake zure aplikazioaren errendimendua eta jardunik gabeko uneak neurtzen, eta, hala ere, ez zenuke aurkituko zeintzuk diren zure kodearen zatirik motelenak egoera errealetan eta ez zenuke inoiz jakingo nola eragiten dioten erabiltzailearen lanari

🔗 [**Informazio gehiago: APM produktuen erabilera**](/sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Atzeman kudeatu gabeko agintzen arbuioak

**TL;PL:** agintza baten barruan dauden salbuespenak xurgatuak eta baztertuak izango dira programatzaileak modu esplizituan kudeatzen ez baditu, haren kodea `process.uncaughtException`-ari atxikia egonda ere. Ekidin hori `process.unhandledRejection` erabiliz

**Bestela:** zure erroreak xurgatuak izango dira eta ez da haien arrastorik geratuko. Ez duzu zertaz kezkatu

🔗 [**Informazio gehiago: atzeman kudeatu gabeko aginduen arbuioak**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Huts egin azkar, balidatu argudioak liburutegi dedikatu baten laguntzarekin

**TL;PL:** Express erabiltzen duzunean, zure jardunbide egokietako bat izan beharko litzateke aplikazioaren sarbidea kontrolatzea, ustegabeko erroreak ekiditeko, aurrerago erroreak atzematea askoz zailagoa izaten da eta. Balidazio kodea gogaikarria izan ohi da, [ajv](https://www.npmjs.com/package/ajv) eta [Joi](https://www.npmjs.com/package/joi) bezalako laguntza liburutegi moderno bat erabili ezean

**Bestela:** pentsatu zure funtzioa agintza numeriko baten zain dagoela, adibidez «deskontua», eskatzaileak bidaltzea ahaztu duena; geroago, haren kodeak baieztatzen du « deskontua! = 0 (baimendutako deskontua zero baino handiagoa da)», eta horrek ahalmena ematen dio erabiltzaileari deskontua izateko. Ene, nolako errore arriskutsua! Konturatzen zara?

🔗 [**Informazio gehiago: huts egin azkar**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

## ![✔] 2.12 Agintzen zain egon beti itzuli aurretik, pilak arrastorik uztea saihesteko

**TL; DR:** beti egin `return await` promesa bat itzultzean, pila osoaren jarraipena egin ahal izateko. Funtzio batek promesa bat itzultzen badu, funtzio hori `async`, hau da, asinkronotzat jo behar da, eta esplizituki `await`, itxaron agintza, itzuli aurretik

**Bestela:** itxaron gabe agintza itzultzen duen funtzioa ez da pilaren arrastoan agertuko. Galdutako fotograma horiek akatsa eragingo duen fluxua ulertzea zailduko lukete, batez ere portaera anormalaren zergatia falta den funtzioaren barruan baldin badago

🔗 [**Gehiago irakurri: agintzak itzultzea**](/sections/errorhandling/returningpromises.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `3. Kodearen estiloa`

## ![✔] 3.1 Erabili ESLint

**TL;PL:** [ESLint](https://eslint.org) da gerta daitezkeen kode erroreak egiaztatzeko eta kodearen estiloa zuzentzeko estandarra. Ez da soilik erabiltzen tarteen arazoak identifikatzeko, baizik eta kodearen antipatroi kritikoak atzemateko ere, hala nola garatzaileen errore ez-sailkatuak. ESLint kode estiloak automatikoki zuzentzeko gai bada ere, badira beste tresna batzuk eraginkorragoak direnak zuzenketak egiten –esaterako, [prettier](https://www.npmjs.com/package/prettier) eta [beautify](https://www.npmjs.com/package/js-beautify)– eta, gainera, ESLintekin batera egiten dute lan

**Bestela:** garatzaileek arreta jarriko dute hain gogaikarriak diren arazo batzuk konpontzen –kodearen tarteak eta lerroaren luzera–, eta denbora gehiegi gal dezakete proiektuaren kode estiloa aztertzen

🔗 [**Informazio gehiago: erabili ESLint eta Prettier**](/sections/codestylepractices/eslint_prettier.md)

<br/><br/>

## ![✔] 3.2 Node.jsentzako plugin espezifikoak

**TL;PL:** ESLintek JavaScript vainilla babesteko dituen arau estandarretatik aparte, komeni da Node.jsen osagai espeziko batzuk erabiltzea, hala nola [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) eta [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Bestela:** Node.jsen arau akastun batzuek radarraren kontrolari ihes egin ahal diote. Esaterako, garatzaileek sarbide moduan aldagai jakin baten beharra izan dezakete (require(variableCommeChemin)), edozein script JS erabiltzeko aukera ematen diena erasotzaileei. Node.jsen lintersek patroi horiek antzeman ditzakete eta garaiz jo alarma

<br/><br/>

## ![✔] 3.3 Jarri kode multzo baten giltzak lerro bakar batean

**TL;PL:** kode bloke baten hasierako parentesiak irekiera instrukzioaren lerroan egon behar du

### Kodearen adibidea

```javascript
// Egin
function edozeinFuntzio() {
  // kode blokea
}

// Baztertu
function edozeinFuntzio() {
  // kode blokea
}
```

**Bestela:** jardunbide egoki hau ez erabiltzeak ustekabeko emaitzak eragin ditzake, behean dagoen StackOverflow-en eztabaida-harian ikus daitekeen bezala:

🔗 [**Informazio gehiago:** “Zergatik aldatzen dira emaitzak giltzen kokapenaren arabera?” (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Bereizi instrukzioak modu egokian

Ez dio axola instrukzioak bereizteko puntu eta koma erabiltzen duzun edo ez, ohiko lerro jauzi okerrak edo koma txertatze automatikoak ezagutzeak lagundu egingo dizu ohiko errore sintaktikoak ez egiten

**TL;PL:** erabili ESLint bereizketetan izaten diren erroreez jabetzeko. [Prettier](https://prettier.io/) edo [Standardjs](https://standardjs.com/) erabiliz automatikoki konpon ditzakezu arazo horiek

**Bestela:** aurreko atalean esan bezala, JavaScripteko interpreteak automatikoki “puntu eta koma” gehitzen du instrukzio baten amaieran “punto eta koma”rik ez badago edo instrukzioa behar den tokian ez dela amaitu eta horrek okerreko emaitzak eragin ditzakeela pentsatzen badu. Ustekabeko errore gehienak ekiditeko, esleipenak erabil ditzakezu eta, horrela, berehala deitutako funtzio adierazpenak erabiltzea saihestuko duzu

### Kodearen adibidea

```javascript
// Egin
function eginZerbait() {
    // ...
}

eginZerbait()

// Egin

const items = [1, 2, 3]
items.forEach(console.log)

// Baztertu — exception bat jaurtitzen du
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// egin zerbait — exception bat jaurtitzen du
const count = 2 // 2() burutzen saiatzen da, baina 2() ez da funtzio bat
(function egin zerbait() {
  // egin zerbait paregabea
}())
// jarri puntu eta koma berehala deitutako funtzioa baino lehen, const definizioaren ostean, funtzio anonimoak bueltatutako balioa aldagarri batean gorde edo baztertu IIFE guztiak
```

🔗 [**Informazio gehiago:** "Semi ESLint araua"](https://eslint.org/docs/rules/semi)
🔗 [**Informazio gehiago:** "stekabeko ESLint arau lerroaniztunik ez"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Izendatu funtzio guztiak

**TL;PL:** izendatu funtzio guztiak, itxierak eta deiak. Saihestu funtzio anonimoak. Hau bereziki erabilgarria da nodo aplikazio bat profilatzerakoan. Funtzio guztiak izendatzeak memoria argazkia egiaztatzean aukera emango dizu zer bilatzen ari zaren ulertzen

**Bestela:** zaila izan liteke produkzio arazoak araztea memoria erregistroak erabiliz (memoria argazkia), funtzio anonimoetako memoria kontsumoa handia denean

<br/><br/>

## ![✔] 3.6 Erabili izen deskriptiboak aldagaiak, konstanteak, funtzioak eta klaseak izendatzeko

**TL;PL:** Erabili **_lowerCamelCase_** konstanteak, aldagaiak eta funtzioak izendatzean eta **_UpperCamelCase_** (maiuskulazko lehen letra ere) klaseak izendatzean. Horrek lagunduko dizu aldagai/funtzio arruntak eta instantziazioa behar duten klaseak erraz bereizten. Erabili izen deskriptiboak, baina saiatu laburrak izan daitezen

**Bestela:** Javascript munduko hizkuntza bakarra da eraikitzailea ("Klasea") zuzenean deitzea ahalbidetzen duena aurretik eskatu/instantziatu gabe. Horrenbestez, klaseak eta funtzio eraikitzaileak bereizten dira UpperCamelCase-tik hasita

### 3.6 Kode eredua

```javascript
// funtzioa izendatzeko UpperCamelCase erabiltzen dugu
class KlaseBatenAdibidea {}

// konstanteak izendatzeko const hitz gakoa eta lowerCamelCase erabiltzen ditugu
const config = {
  key: "balioa",
};

// aldagaiak eta funtzioak izendatzeko lowerCamelCase erabiltzen dugu
let aldagaiBatenAdibidea = "balioa";
function eginZerbait() {}
```

<br/><br/>

## ![✔] 3.7 Aukeratu const, let ordez. Ez erabili var

**TL;PL:** `const` erabiltzeak esan nahi du behin aldagai bat esleituta ezin dela berriro esleitu. Beraz, erabilera desberdinetarako aldagai bakarra erabiltzeko joera baztertzen lagunduko dizu `const` erabiltzeak, bai eta kodea garbitzen ere. Aldagai bat behin baino gehiagotan esleitu behar baduzu –for begizta batean, adibidez– erabili `let`, garbiagoa da eta. Leten beste alderdi garrantzitsu bat da definitu duzun blokearen eremuan bakarrik eskura dezakezula deklaratutako aldagia. `var` funtzioen eremukoa da, ez blokearena, eta [ez da ES6n erabili behar](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70), `const` eta `let` erabiltzeko aukera duzu eta

**Bestela:** arazketa askoz ere astunagoa da, maiz aldatzen den aldagai baten jarraipena egitean

🔗 [**Informazio gehiago: JavaScript ES6 +: var, let, edo const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Erabili moduluak lehenengo, barne-funtzioen partez

**TL;PL:** moduluak fitxategi bakoitzaren hasieran erabili behar dira, edozein funtzioren aurretik eta kanpo. Jardunbide on eta sinple honek lagunduko dizu fitxategiaren menpekotasunak erraz eta azkar antzematen haren eskuineko goi aldean, baita arazo posible batzuk ekiditen ere

**Bestela:** Node.js.k aldi berean exekutatzen ditu require-ak. Funtzio batek dei egiten badie, egoera kritikoago batean dauden beste eskaera batzuk blokea daitezke. Gainera, deitutako moduluetako batek edo haren menpeko ataza batek errore bat izanez gero, komeni da lehenbailehen haren berri jakitea, eta agian ezingo da hori egin, modulu horri funtzio batek deitzen badio

<br/><br/>

## ![✔] 3.9 Inportatu moduluak karpetaka eta ez artxiboak zuzenean

**TL;PL:** modulua/liburutegia karpeta batean garatzean, sartu index.js fitxategia, moduluaren barruko osagarriak agerian jarri eta erabiltzaile guztiek bertara joko dute eta. Hori eginez gero, moduluaren 'interfaze' gisa lan egiten du, eta geroago egin beharreko aldaketak errazten ditu kontratua hautsi gabe

**Bestela:** fitxategien barne egitura edo sinadura aldatzeak erabiltzaileen interfazea apur dezake

### 3.9 Kodearen adibidea

```javascript
// Egin
module.exports.SMSProvider = require("./SMSProvider");
module.exports.SMSNumberResolver = require("./SMSNumberResolver");

// Baztertu
module.exports.SMSProvider = require("./SMSProvider/SMSProvider.js");
module.exports.SMSNumberResolver = require("./SMSNumberResolver/SMSNumberResolver.js");
```

<br/><br/>

## ![✔] 3.10 Erabili `===` eragilea

**TL;PL:** hobetsi berdintasunaren eragile zorrotza `===` berdintasun abstraktuaren eragile ahulagoa baino `==`. `==` eragileak bi aldagai alderatuko ditu, behin aldagai arrunt bihurtu ondoren. `===` eragileak ez du aldagai-motaren bihurketarik egiten, eta bi aldagaiek mota berekoak izan behar dute berdinak izateko

**Bestela:** `==`eragileak, berdinak ez diren aldagaiak alderatuz gero, berdinak direlako mezua helaraz dezake

### 3.10 Kodearen adibidea

```javascript
"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

" \t\r\n " == 0; // true
```

Aurreko azalpen guztiak faltsuak izango lirateke `===` eragilea erabili izan balitz

<br/><br/>

## ![✔] 3.11 Erabili Async Await, ekidin callbackak

**TL;PL:** Node 8 LTS erabat bateragarria da orain Async-waitekin, eta, horrela kode asinkronikoa kudeatzeko aukera ematen du, callbackik eta agintzarik erabili gabe. Async-waitek ez du blokeorik eragiten, eta kode asinkronikoak sinkroniko bihurtzen ditu. Zure kodeari egin ahal diozun oparirik onena async-wait erabiltzea da, eskaintzen duen kode sintaxia askoz ere trinkoagoa eta ezagunagoa da eta

**Bestela:** gaizki pasatu eta infernura joateko biderik azkarrena hartu nahi baduzu, erabili callbackak errore asinkronoak kudeatzeko, seguruenik, infernura joateko biderik azkarrena aukeratuko duzu. Estilo honek gune guztietako erroreak egiaztatzera behartzen du, eta, gainera, kode habiaratze beti deserosoaren kudeaketa eta kode fluxua ulertzea zailtzen du

🔗[**Informazio gehiago:** async wait 1.0ren gida](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Erabili gezi funtzioak (=>)

**TL;PL:** agintzak eta callbackak onartzen dituzten API zaharrekin async-wait erabiltzea eta funtzio parametroak ekiditea gomendarria bada ere, gezi funtzioek kodearen egitura trinkotu egiten dute eta erro funtzioaren testuinguru lexikoa bermatu (hau da, `this` )

**Bestela:** (ES5 funtzioetan) kode luzeek erroreak izateko joera handiagoa dute, eta, gainera, irakurtzeko astunak dira

🔗 [**Informazio gehiago: gezi funtzioak erabiltzeko garaia da**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `4. Probak eta kalitate orokorra`

## ![✔] 4.1 Idatzi APIaren probak (osagaia), gutxienez

**TL;PL:** proiektu gehienei ez zaie proba automatikorik egiten denbora gutxian egiten direlako edo, maiz, 'proba proiektua' kontroletik kanpo geratu eta bertan behera uzten direlako. Hori dela eta, lehentasuna eman API probei eta hasi beraiek egiten; izan ere, hori da idazteko erarik errazena eta, gainera, proba unitarioek baino estaldura handiagoa eskaintzen dute; are gehiago, API probak sor ditzakezu, [Postman](https://www.getpostman.com/) bezalako tresnak erabiliz. Ondoren, baliabide eta denbora gehiago edukiz gero, jarraitu proba aurreratuak egiten, hala nola proba unitarioak, datu baseen probak, errendimendu probak, etab.

**Bestela:** luzaroan aritu zintezke proba unitarioak idazten, azkenean soilik %20ko estaldura lortu duzula jakiteko

<br/><br/>

## ![✔] 4.2 Erabili 3 zati proba izen bakoitzean

**TL;PL:** proba adierazgarria izan behar da eskakizunen mailan, barne kodearekin lan egiten ohituta ez dauden QAko ingeniariek eta garatzaileek berez eta erraz uler dezaten. Probaren izenean adierazi zer ari den probatzen (probatzen ari den unitatea), zer egoeratan eta zer emaitza espero den

**Bestela:** inplementazio batek huts egin du, “Gehitu produktua“ izeneko proba batek huts egin du. Esaten dizu horrek zehazki zer dabilen gaizki?

🔗 [**Informazio gehiago: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Egitura proba k AAA ereduaren arabera

**TL;PL:** egituratu zure probak ondo bereizitako 3 ataletan: antolatu, aritu eta baieztatu (AAA). Lehenengo atalean probaren konfigurazioa egin behar da; ondoren proba egikaritu behar da; eta, azkenik, baieztapen fasea dator. Egitura horri jarraitzeak bermatzen du irakurleak garuneko PUZik ez gastatzea proba plana ulertzen

**Bestela:** kode nagusia ulertzen egunero orduak eta orduak pasatzeaz gainera, orain zure garuna trebatzen pasatzen duzu bestela eguneko zatirik lasaiena izan behar zuena (probak)

🔗 [**Informazio gehiago: egitura probak AAA ereduaren arabera**](/sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Antzeman kodeko arazoak linter bat erabiliz

**TL;PL:** erabili kode linterra oinarrizko kalitatea egiaztatzeko eta antiereduak garaiz antzemateko. Exekutatu edozein proba baino lehen eta gehitu aurre-commit-a git kako moduan, edozein arazo berrikusteko eta zuzentzeko behar den denbora minimizatu ahal izateko. Era berean, egiaztatu [3. atala](#3-code-style-practices), kodearen estilo praktikei dagokienez

**Bestela:** kode antiereduren bat zuzendu gabe utz dezakezu, zure produkzio ingurunean ahula izan litekeena

<br/><br/>

## ![✔] 4.5 Saihestu datu globalak, gehitu datu pertsonalizatuak proba bakoitzean

**TL;PL:** probak akopla daitezen ekiditeko eta proben fluxuari buruz erraz arrazoitzeko, proba bakoitzak bere datu baseko lerroen multzoan lan egin beharko luke. Proba batek datu baseko datu batzuk ba ote diren jakin nahi duenean edo haien beharra duen bakoitzean, berariaz erantsi behar dira datu horiek eta eragotzi beste erregistroren bat mutatzea

**Bestela:** probek huts egin dutela eta, inplementazioa bertan behera utzi beharra izan duzula pentsatu. Egoera horretan, lan taldeak denbora asko pasatuko du porrotaren zergatiak aztertzen, azkenean, ondorio tamalgarri honetara iristeko: sistema ondo dabil; probek, ordea, elkarri eragiten diote eta egitura hausten dute

🔗 [**Informazio gehiago: saihestu datu globalak**](/sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Etengabe ikuskatu menpekotasun ahulak

**TL;PL:** Express bezalako menpekotasun ospetsuenek ere ahultasun ezagunak dituzte, erraz gaindi daitezkeenak tresna komunitarioak eta komertzialak erabiliz, esaterako 🔗 [npm auditoria](https://docs.npmjs.com/cli/audit) eta 🔗 [snyk.io](https://snyk.io), zure CItik dei ditzakezunak konpilazio bakoitzean

**Bestela:** zure kodeak ahultasunik ez izatea lortzeko tresna dedikaturik erabili gabe, etengabe begiratu beharko duzu mehatxu berriei buruz onlinen zer argitaratzen den eta haren jarraipena egin

<br/><br/>

## ![✔] 4.7 Etiketatu zure probak

**TL;PL:** egin beharreko probak desberdinak dira eszenatokiaren arabera; ke lasterrak, input-output gabekoak, garatzaileek artxibo bat gorde edo commit egiten dutenean erabiltzen diren testak, hasieratik amaierarainoko test erabatekoak presio eskaera berri bat bidaltzen denean egikaritzen direnak, etab. Hori lor daiteke #cold #api #sanity bezalako gako hitzak erabiliz probak etiketatzean, aukera izan dezazun zure proba tresnak erabiltzeko eta behar duzun azpimultzoari deitzeko. Adibidez, honela deitu ahal izango zenioke zentzutasun proba multzoari [Mocha](https://mochajs.org/) erabiliz: mocha --grep 'sanity'

**Bestela:** garatzaile batek aldaketa txiki bat egiten duen bakoitzean oso motela izan daiteke proba guztiak exekutatzea, datu baseak kontsultatzen dituzten probak barne. Horrelako kasuetan, garatzaileei etsigarria gertatuko zaie probak egitea

<br/><br/>


## ![✔] 4.8 Egiaztatu zure proben estaldura, proba eredu okerrak identifikatzen laguntzen du eta

**TL;PL:** [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) bezalako estaldura tresnak oso aproposak dira 3 arrazoirengatik: dohainik dira, hau da, ez da lanik egin behar txostenak lortzeko; proben estaldura gutxitu den identifikatzen laguntzen dute; eta, azkenik, baina ez garrantzi txikiagokoa, proben desdoikuntzak agerian jartzen dituzte. Koloretako kode estalduraren txostenak aztertzean, baliteke harrapaketa kapsula moduan sekula testatzen ez diren kode arloak ikustea, adibidez. Horrek esan nahi du probek bide arrakastatsuak besterik ez dituztela antzematen eta ez aplikazioak nola jokatzen duen erroreak gertatzen direnean. Konfiguratu zure probak estaldura maila batetik behera jaisten denean erroreak eragiteko

**Bestela:** ez da inolako neurgailu automatizaturik egongo zure kodearen zati handi bat proben estalduratik kanpo dagoela esango dizuna

<br/><br/>

## ![✔] 4.9 Ikuskatu pakete zaharkituak

**TL;PL:** erabili zure tresnarik gogokoena (adibidez, 'npm outdated' edo [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) zaharkituta dauden paketeak antzemateko, ezarri kontrol hau zure IEren bideetan eta, are gehiago, eragin konpilazio batek huts egitea ingurune kritikoetan. Adibidez, agertoki kritikoa izan daiteke instalatutako pakete batek 5 adabaki baieztatuak dituenean (adibidez, bertsio lokala 1.3.1 da eta biltegi bertsioa 1.3.8) edo haren egileak zaharkitu etiketa jarri dionean. Kasu horretan, ezabatu konpilazioa eta ekidin bertsio hori erabiltzea

**Bestela:** modu esplizituan arriskutsutzat etiketatuta dauden paketeak egikarituko ditu zure produkzioak

<br/><br/>

## ![✔] 4.10 Erabili production bezalako inguruneak e2e probetarako

**TL;PL:** zuzeneko datuak erabiltzen dituen hasieratik amaierarainoko proba(e2e) lehen CIren prozesuko katebegirik ahulena izaten zen, datu baseak bezalako zerbitzu astun askoren menpean dago eta. Erabili zure ekoizpen errealetik ahalik eta hurbilen dagoen ingurunea

**Bestela:** docker-compose erabili ezean, taldeek ingurune bakoitzeko proben datu baseak mantendu behar izaten dituzte, garatzaileen makinak barne. Mantendu beti datu base horiek sinkronizatuta, proben emaitzak alda ez daitezen ingurune batetik bestera

<br/><br/>

## ![✔] 4.11 Eguneratu probak aldizka analisi estatikoko tresnak erabiliz

**TL;PL:** analisi estatikoko tresnak erabiltzeak lagundu egiten dizu kodearen kalitatea hobetzeko modu objektiboak lortzen eta zure kodea jasangarri izaten. Analisirako tresna estatikoak gehitu ahal dizkiozu zure IE konpilazioari, huts egingo duen susmoa duzuenean. Estaldurari dagokionean, bere aldeko puntu nagusiak dira kalitatea ikuskatzeko gaitasuna dutela fitxategi anitzen testuinguruan (adibidez, bikoizketak antzematea), azterketa aurreratuak egitea (adibidez, kodearen konplexutasuna hautematea), eta kode arazoen historiaren eta aurrerapenaren jarraipena egitea. Horretarako, bi tresna hauek erabil ditzakezu: [Sonarqube](https://www.sonarqube.org/) (2.600+ [izar](https://github.com/SonarSource/sonarqube)) eta [Code Climate](https://codeclimate.com/) (1.500+ [izar](https://github.com/codeclimate/codeclimate))

**Bestela:** kodearen kalitatea txarra denean, erroreek eta errendimenduak beti emango dituzte arazoak, azken belaunaldiko ezaugarriak dituen liburutegi berri distiratsu batek ere konpontzerik izango ez dituenak

🔗 [**Informazio gehiago: Berregituratu!**](/sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Aukeratu arretaz zure IE plataforma (Jenkins vs CircleCI vs Travis vs gainerako mundua)

**TL;PL:** zure integrazio jarraituaren plataformak (CICD) kalitateko tresna guztiak (adib. testak, lintak) ostatatu behar ditu, eta, beraz, indartsua izan beharko du pluginen ekosistema. Aspaldian [Jenkins](https://jenkins.io/) proiektu askoren balio lehenetsia izan ohi zen, komunitaterik handiena eta oso plataforma indartsua baititu, ordainetan konfigurazio konplexu samarra eta ikaste kurba pikoa baditu ere. Gaur egun, askoz errazagoa da IE irtenbide bat sortzea [CircleCI](https://circleci.com) eta haren antzeko SaaS tresnak erabiliz. Tresna horiek IE hodi malgu bat sortzea ahalbidetzen dute azpiegitura osoa kudeatzeko zama hartu beharra izan gabe. Azken batean, sendotasuna eta abiaduraren arteko oreka lortzea da kontua. Egin zure aukera arretaz

**Bestela:** hornitzaile espezializatu bat aukeratzeak blokeatu zaitzake, pertsonalizazio aurreratu bat behar duzunean. Bestalde, Jenkins erabiltzeak denbora asko eska dezake azpiegitura konfiguratzean

🔗 [**Irakurri gehiago: IC plataforma aukeratzea**](/sections/testingandquality/citools.md)

## ![✔] 4.13 Probatu zure middlewareak eurak bakarrik

**TL;PL:** middlewareak eskaera askori erantzuten dion logika sendo bat duenean, merezi du middlewarea probatzea bera bakarrik, web esparru osoa aktibatu gabe. Hori erraz lor daiteke {req, res, next} objektuak antzemanez eta behatuz

**Bestela:** middleware Expressean === errorea izanez gero, errorea gertatuko zaizu eskaera guztietan edo gehienetan

🔗 [**Irakurri gehiago: probatu zure middlewareak eurak bakarrik**](/sections/testingandquality/test-middlewares.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `5. Ekoizpena`

## ![✔] 5.1. Monitorizazioa

**TL;PL:** bezeroek baino lehenago arazoak aurkitzeko joku bat da monitorizazioa. Jakina, garrantzi handia eman behar zaio. Merkatua eskaintzez gainezka dago, eta, beraz, komeni zaizu zehazten hastea zeintzuk diren hartu behar dituzun oinarrizko neurriak (hemen dituzu nire iradokizunak); ondoren, pentsatu zer neurri osagarri ezarri behar dituzun; eta, azkenik, aukeratu hipotesi guztiak kontuan hartzen dituen soluzioa. Egin klik hemen behean dagoen ‘Oinarrizkoa‘ estekan soluzioen ikuspegi orokorra izateko

**Bestela:** hutsegitea === bezero zapuztuak

🔗 [**Irakurri gehiago: monitorizazioa!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Gardentasuna handitu erregistratze plataforma adimendunak erabiliz

**TL;PL:** erregistroak arazketa adierazpen hutsalen biltegia izan daitezke edo zure aplikazioaren historia kontatzen duen aginte mahai praktikoa. Planifikatu zure erregistratze plataforma lehenengo egunetik: hau da, nola bildu, gorde eta aztertuko dituzun erregistroak, nahi duzun informazioa benetan eskura daitekeela bermatzeko (adibidez, zein den errore tasa, zerbitzu eta zerbitzarien bidez transakzio oso bat egin ondoren, eta abar)

**Bestela:** kutxa beltz batekin amaituko duzu, eta zaila izango zaizu han jasotako ezarpenen zergatia aurkitzea. Azkenean, erregistro adierazpen guztiak idazten hasiko zara informazio osagarria gehitzeko

🔗 [**Gehiago irakurri: gardentasuna handitu erregistratze plataforma adimendunak erabiliz**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Utzi ahal den guztia alderantzizko proxy batean (adibidez, gzip, SSL)

**TL;PL:** Node izugarri txarra da PUZen zeregin intentsiboak egiten, esate baterako, gzipping, SSL termination. Haien partez benetako middleware erabili behar dituzu zerbitzuak –hala nola nginx eta Haproxy– edo hornitzaileen lainoko zerbitzuak

**Bestela:** zure hari bakarra lanpetuta egongo da azpiegitura lanak egiten, zure aplikazioaren guneari kasu egin beharrean, eta, ondorioz, haren errendimenduak behera egingo du

🔗 [**Irakurri gehiago: utzi ahal den guztia alderantzizko proxy batean (adibidez, gzip, SSL)**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Blokeatu menpekotasunak

**TL;PL:** zure kodeak berdin-berdina izan behar du ingurune guztietan, baina harrigarria bada ere npm lehenetsita dago menpekotasunei ingurune batetik bestera pasatzen uzteko. Instalatzen dituzunean paketeak hainbat ingurunetan, paketeen azken bertsioa eskuratzen saiatzen da. Hori saihesteko, erabili npm edo .npmrc konfigurazio artxiboak, ingurune bakoitzean dagokion paketearen zein bertsio zehatz (eta ez derrigorrez berriena) komeni zaizun adieraziko dizu eta. Bestela, kontrola fintze aldera, erabili `npm shrinkwrap`. \*Eguneratzea: NPM5 bertsiotik aurrera, menpekotasunak defektuz blokeatzeko konfiguratuta dator. Yarn pakete kudeatzaile berria ere lehenetsita dago horrela lan egiteko

**Bestela:** QAk kodea xeheki probatuko du eta onartuko duen bertsioak desberdin jokatuko du produkzioan. Are okerrago, produkzio talde bereko zerbitzarien kodeak desberdinak izan litezke

🔗 [**Informazio gehiago: blokeatu menpekotasunak**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Babestu prozesuaren erabilgarritasuna tresna egokiak erabiliz

**TL;PL:** prozesuak huts eginez gero, aurrera egin eta berrabiarazi beharra dago. Egoera arruntetan, nahikoak izan daitezke PM2 bezalako prozesuak kudeatzeko tresnak, baina gaur egungo mundu ”docker”-izatuan, taldeak kudeatzeko tresnak ere kontuan hartu behar dira

**Bestela:** estrategia argirik gabe dozenaka eskaera exekutatzeak DevOpsa nahaste-borrastera eraman dezake, hartarako aldi berean tresna gehiegi (talde kudeaketa, dockerra, PM2) erabiliz gero

🔗 [**Irakurri gehiago: babestu prozesuaren erabilgarritasuna tresna egokiak erabiliz**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Erabili PUZeko nukleo guztiak

**TL;PL:** Noderen oinarrizko bertsioa PUZeko nukleo bakar batean exekutatzen da, eta beste nukleo guztiak geldi geratzen dira. Beharrezkoa da Noderen prozesua erreplikatzea PUZ guztiak erabiliz: aplikazio txiki eta ertainekin, Node Cluster edo PM2 erabil dezakezu; aplikazio handi samarrekin, berriz, saiatu erabiltzen Docker tankerako talderen bat (adibidez, K8S, ECS) edo Linux hasieratze sisteman oinarritutako garatze idazkerak (adibidez, systemd)

**Bestela:** seguruenik, zure aplikazioak erabilgarri dituen baliabideen %25a besterik ez du erabiltzen (!), edo gutxiago, agian. Kontuan izan ohiko zerbitzariek gutxienez lau nukleo dituztela PUZen, eta Node.jsren garatzaile soilak bat bakarra erabiltzen duela (AWS beanstalk bezalako PaaS zerbitzuekin lan egiten duenean ere)

🔗 [**Informazio gehiago: erabili PUZeko nukleo guztiak**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Sortu ‘bukerako mantentze puntua‘

**TL;PL:** API seguru batean, jarri agerian sistemarekin lotutako informazio multzo bat, hala nola, memoriaren erabilera eta REPL, etab. Nahiz eta gomendagarria den proba estandarretan eta tresna arruntetan oinarritzea, zenbait informazio eta eragiketa baliotsuak errazago egiten dira kodea erabiliz

**Bestela:** konturatuko zara “diagnostiko-inplementazio“ asko egiten ari zarela, eta kodea produkziora bidaltzen duzula soilik informazioa lortzeko diagnostikoa egite aldera

🔗 [**Informazio gehiago: sortu ‘bukerako mantentze puntua‘**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Aurkitu akatsak eta geldialdiak APM produktuak erabiliz

**TL;PL:** aplikazioen jarraipen eta errendimendu produktuek (APM deritzona) modu proaktiboan neurtzen dituzte kode basea eta APIa, modu automatikoan ohiko jarraipenetik haratago joateko eta erabiltzaileen esperientzia arrunta zerbitzu eta maila guztietan neurtzeko. Adibidez, APM produktu batzuek agerian jarri dezakete azken erabiltzaileen aldean motelegi kargatzen dela transakzio bat, sakoneko arrazoia iradokitzen duten bitartean

**Bestela:** APIaren errendimendua eta geldialdiak neurtzeko ahalegin handia egin zenezake, eta, ziurrenik, ez zinateke jabetuko zein diren zure kodearen atalik motelenak mundu errealeko eszenatokian eta nola eragiten dioten zure erabiltzaile esperientziari

🔗 [**Irakurri gehiago: aurkitu akatsak eta geldialdiak APM produktuak erabiliz**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Prestatu zure kodea ekoizpenerako

**TL;PL:** programatu helburua kontuan izanik; planifikatu produkzioa lehenengo egunetik hasita. Horrek lausoa eta zehazgabea ematen duenez, produkzioaren mantentzeari estu-estu lotuta dauden garatze aholku batzuk bildu ditut (egin klik hemen behean dagoen Gist estekan)

**Bestela:** IT / DevOps arloko munduko txapeldun batek ere ez du salbatuko gaizki idatzita dagoen sistema

🔗 [**Irakurri gehiago: prestatu zure kodea ekoizpenerako**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Neurtu eta babestu memoriaren erabilera

**TL;PL:** Node.jsek harreman gatazkatsuak ditu memoriarekin: v8 motorrak muga leunak dauzka memoria erabiltzean (1,4 GB) eta ezaguna da zein bidetatik galtzen duen Noderen kodeak memoria. Beraz, ezinbestekoa da Noderen prozesu memoriari erreparatzea. Aplikazio txikietan memoria aldizka neur dezakezu geruza komandoak erabiliz; baina aplikazio ertainetan eta handietan aztertu ez ote zaizun komeni zure memoria erlojua kontrol sistema sendo baten erara erabiltzea

**Bestela:** zure memoria prozesuak 100 bat megabyte gal dezake egunean, [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)-i gertatu zitzaion bezala

🔗 [**Irakurri gehiago: neurtu eta babestu memoriaren erabilera**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Atera zure frontend modulu aktiboak Nodetik

**TL;PL:** prestatu frontend edukia middleware dedikatu bat erabiliz (adibidez, nginx, S3, CDN), zeren Noderen errendimenduak behera egiten baitu artxibo estatiko askorekin lan egiten duenean, bera azpiprozesu bakarrekoa da eta

**Bestela:** Node eduki dinamikoa eskaintzeko sortu zen arren, haren hari bakarra lanpetuta egongo da html / images / angular / react erako ehunka fitxategi bidaltzen, bera egiteko sortua izan zen zereginei esleitu barik bere baliabide guztiak

🔗 [**Irakurri gehiago: atera zure frontend aktiboak Nodetik**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Izan stateless, hil zerbitzariak ia egunero

**TL;PL:** gorde edozein datu mota (adibidez, erabiltzaile saioak, cacheak, kargatutako fitxategiak) kanpoko datu biltegietan; eta aztertu ez ote zenituzkeen zure zerbitzari guztiak aldian behin “hil” beharko edo “zerbitzaririk gabe”ko plataformaren bat erabili (adibidez, AWS Lambda), berariaz stateless jokaera duena

**Bestela:** zerbitzari jakin batek huts eginez gero, makina akastun bat hil beharrean, aplikazioen geldialdia eragingo du. Gainera, gero eta zailagoa izango da mailaketaren elastikotasuna, zerbitzari jakin baten menpeko izanda

🔗 [**Irakurri gehiago: izan stateless, hil zerbitzariak ia egunero**](/sections/production/bestateless.md)

<br/><br/>


## ![✔] 5.13. Erabili ahuleziak automatikoki antzematen dituzten tresnak

**TL;PL:** menpekotasun ezagunenek ere –Express, adibidez– badituzte (noizean behin) ahulezia ezagunak, sistema arriskuan jar ditzaketenak. Horrek konponbide erraza du, ordea, tresna komunitario eta komertzialak erabiliz gero, ahuleziak etengabe kontrolatu eta haien berri ematen dute eta (bertan edo GitHub-en)

**Bestela:** zure kodea ahulezia eta zaurgarritasunetatik garbi mantentzeko tresna dedikaturik gabe, jarraipen estua egin beharko diezu mehatxu berriei buruz linean egiten diren argitalpenei, bide batez esanda, aspergarri samarra izaten dena

🔗 [**Irakurri gehiago: erabili ahuleziak automatikoki antzematen dituzten tresnak**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Esleitu transakzio identifikazio bat adierazpen-erregistro bakoitzari

**TL;PL:** esleitu identifikatzaile bera –transakzio-: {balioren bat}– erregistro sarrera bakoitzari eskaera bakar baten barruan. Ondoren, erregistroetako erroreak ikuskatzean, erraz konturatuko zara zer gertatu zen aurretik eta ondoren. Zoritxarrez, hori ez da erraz lortzen Noden, haren izaera asinkronoa da eta. Ikusi kodearen adibideak beheko estekan

**Bestela:** produkzioko erroreen erregistroa testuingururik gabe ikustean – aurretik gertatu zena, alegia –, askoz zailagoa eta motelagoa da arazoa aztertzea

🔗 [**Irakurri gehiago: esleitu ‘TransactionId’ adierazpen erregistro bakoitzari**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Ezarri NODE_ENV = produkzioa

**TL;PL:** ezarri NODE_ENV ingurune aldagaia ‘produkzioa‘ edo ‘garapena‘ ataletan produkzioaren optimizazioak aktibatu beharra dagoen adierazteko; npm pakete askok uneko ingurunea zehazten dute eta haren kodea optimizatzen dute ekoizpenerako

**Bestela:** ezaugarri soil hori gabe errendimendua asko jaits liteke. Adibidez, Express erabiltzean zerbitzarira bideratzeko `NODE_ENV` gabe, errendimendua heren bat moteltzen da

🔗 [**Informazio gehiago: Ezarri NODE_ENV = produkzioa**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Diseinatu inplementazio automatizatuak, atomikoak eta geldialdi gabekoak

**TL;PL:** ikerketek frogatu dute inplementazio ugari egiten dituzten taldeek ekoizpen arazo kritikoak izateko probabilitatea txikiagotzen dutela. Eskuz egin beharreko urrats arriskutsurik eta zerbitzuen geldialdirik ez duten inplementazio azkar eta automatizatuek nabarmen hobetzen dute inplementazio prozesua. Baliteke hori bera lortzea Docker eta IE tresnak, biak batera, erabiliz, inplementazio sinplifikatuari dagokionez industriaren estandarra bihurtu dira eta

**Bestela:** inplementazio luzeak -> produkzioaren geldialdia eta gizakiak eragindako erroreak -> inplementazioan konfiantzarik ez duen taldea -> inplementazio eta funtzio gutxiago egitea

<br/><br/>

## ![✔] 5.17. Erabili Node.jsren LTS bertsio berria

**TL;PL:** ziurtatu Node.jsren LTS bertsioa erabiltzen ari zarela errore kritikoen zuzenketak, segurtasun eguneratzeak eta errendimenduaren hobekuntzak jasotzeko

**Bestela:** aurkitu berri diren erroreak edo ahuleziak erabil litezke produkzioan exekutatzen den aplikazio bat ustiatzeko eta baliteke zure aplikazioa ez izatea bateragarria hainbat modulurekin eta zailagoa gertatzea hura mantentzea

🔗 [**Irakurri gehiago: Erabili NTS.jsren LTS bertsioa**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Ez bideratu erregistrorik aplikazioaren barruan

**TL;PL:** garatzaileek ez dituzte erregistroen helmugak aplikazio kodearen barruan kodetu behar, aplikazioa exekutatzen den inguruneak berak definitu beharko ditu eta. Garatzaileek `stdout`-ean idatzi behar dituzte erregistroak erregistratze tresna bat erabiliz, eta gero exekuzio inguruneak (edukiontzia, zerbitzaria eta abar) bideratuko du `stdout` korrontea helmuga egokira (hau da, Splunk, Graylog, ElasticSearch eta abar)

**Bestela:** aplikazioen kudeaketaren erregistroak bideratzea === zaila da eskalatzen, erregistroen galera dakar, eskasa izaten da kezken bereizketa

🔗 [**Irakurri gehiago: erregistroen bideraketa**](/sections/production/logrouting.md)

<br/><br/>

## ![✔] 5.19. Instalatu zure paketeak `npm ci` erabiliz

**TL;PL:** ziurtatu ekoizpen kodeak erabiltzen duela probak egiteko erabili dituzun paketeen bertsio berdina. Exekutatu `npm ci` zure package.json eta package-lock.json paketen menpekotasunen instalazio garbia egiteko

**Bestela:** QAk kodea sakonki probatuko du eta produkzioan modu desberdinean jokatuko duen bertsioa onartuko du. Are okerrago, produkzio talde bateko hainbat zerbitzarik kode desberdinak exekuta ditzake

🔗 [**Informazio gehiago: erabili npm ci**](/sections/production/installpackageswithnpmci.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;PL:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**Bestela:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Informazio gehiago: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;PL:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Bestela:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Informazio gehiago: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;PL:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**Bestela:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Informazio gehiago: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;PL:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**Bestela:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Informazio gehiago: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**TL;PL:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Informazio gehiago: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;PL:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**Bestela:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Informazio gehiago: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;PL:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**Bestela:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Informazio gehiago: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Protect Users' Passwords/Secrets using brypt or scrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;PL:** Passwords or secrets (e.g. API keys) should be stored using a secure hash + salt function like `bcrypt`,`scrypt`, or worst case `pbkdf2`.

**Bestela:** Passwords and secrets that are stored without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Informazio gehiago: User Passwords**](/sections/security/userpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;PL:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**Bestela:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Informazio gehiago: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;PL:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**Bestela:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Informazio gehiago: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;PL:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**Bestela:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Informazio gehiago: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;PL:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**Bestela:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Informazio gehiago: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;PL:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**Bestela:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Informazio gehiago: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;PL:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**Bestela:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Informazio gehiago: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;PL:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**Bestela:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Informazio gehiago: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;PL:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**Bestela:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Informazio gehiago: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;PL:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**Bestela:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the file system, or access already existing system files.

🔗 [**Informazio gehiago: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;PL:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**Bestela:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Informazio gehiago: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;PL:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**Bestela:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Informazio gehiago: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;PL:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**Bestela:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Informazio gehiago: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;PL:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**Bestela:** [Have you heard about the eslint developer whose password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;PL:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**Bestela:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Informazio gehiago: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;PL:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**Bestela:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;PL:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**Bestela:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Informazio gehiago: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;PL:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**Bestela:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Informazio gehiago: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `7. Draft: Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**TL;PL:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**Bestela:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**Informazio gehiago: Do not block the event loop**](/sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

**TL;PL:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**Bestela:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Informazio gehiago: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# `8. Docker Best Practices`

🏅 Many thanks to [Bret Fisher](https://github.com/BretFisher) from whom we learned many of the following practices

<br/><br/>

## ![✔] 8.1 Use multi-stage builds for leaner and more secure Docker images

**TL;PL:** Use multi-stage build to copy only necessary production artifacts. A lot of build-time dependencies and files are not needed for running your application. With multi-stage builds these resources can be used during build while the runtime environment contains only what's necessary. Multi-stage builds are an easy way to get rid of overweight and security threats.

**Bestela:** Larger images will take longer to build and ship, build-only tools might contain vulnerabilities and secrets only meant for the build phase might be leaked.

### Example Dockerfile for multi-stage builds

```dockerfile
FROM node:14.4.0 AS build

COPY . .
RUN npm ci && npm run build

FROM node:slim-14.4.0

USER node
EXPOSE 8080

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./
RUN npm ci --production

CMD [ "node", "dist/app.js" ]
```

🔗 [**Informazio gehiago: Use multi-stage builds**](/sections/docker/multi_stage_builds.md)

<br /><br /><br />

## ![✔] 8.2. Bootstrap using 'node' command, avoid npm start

**TL;PL:** use `CMD ['node','server.js']` to start your app, avoid using npm scripts which don't pass OS signals to the code. This prevents problems with child-process, signal handling, graceful shutdown and having zombie processes.

**Bestela:** When no signals are passed, your code will never be notified about shutdowns. Without this, it will lose its chance to close properly possibly losing current requests and/or data.

[**Informazio gehiago: Bootstrap container using node command, avoid npm start**](/sections/docker/bootstrap-using-node.md)

<br /><br /><br />

## ![✔] 8.3. Let the Docker runtime handle replication and uptime

**TL;PL:** When using a Docker run time orchestrator (e.g., Kubernetes), invoke the Node.js process directly without intermediate process managers or custom code that replicate the process (e.g. PM2, Cluster module). The runtime platform has the highest amount of data and visibility for making placement decision - It knows best how many processes are needed, how to spread them and what to do in case of crashes

**Bestela:** Container keeps crashing due to lack of resources will get restarted indefinitely by the process manager. Should Kubernetes be aware of that, it could relocate it to a different roomy instance

🔗 [**Informazio gehiago: Let the Docker orchestrator restart and replicate processes**](/sections/docker/restart-and-replicate-processes.md)

<br/><br /><br />

## ![✔] 8.4. Use .dockerignore to prevent leaking secrets

**TL;DR**: Include a `.dockerignore` file that filters out common secret files and development artifacts. By doing so, you might prevent secrets from leaking into the image. As a bonus the build time will significantly decrease. Also, ensure not to copy all files recursively rather explicitly choose what should be copied to Docker

**Bestela**: Common personal secret files like `.env`, `.aws` and `.npmrc` will be shared with anybody with access to the image (e.g. Docker repository)

🔗 [**Informazio gehiago: Use .dockerignore**](/sections/docker/docker-ignore.md)

<br /><br /><br />

## ![✔] 8.5. Clean-up dependencies before production

**TL;PL:** Although Dev-Dependencies are sometimes needed during the build and test life-cycle, eventually the image that is shipped to production should be minimal and clean from development dependencies. Doing so guarantees that only necessary code is shipped and the amount of potential attacks (i.e. attack surface) is minimized. When using multi-stage build (see dedicated bullet) this can be achieved by installing all dependencies first and finally running `npm ci --production`

**Bestela:** Many of the infamous npm security breaches were found within development packages (e.g. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes))

🔗 Read More: [Remove development dependencies](/sections/docker/install-for-production.md)

<br /><br /><br />

## ![✔] 8.6. Shutdown smartly and gracefully

**TL;PL:** Handle the process SIGTERM event and clean-up all existing connection and resources. This should be done while responding to ongoing requests. In Dockerized runtimes shutting down containers is not a rare event, rather a frequent occurrence that happen as part of routine work. Achieving this demands some thoughtful code to orchestrate several moving parts: The load balancer, keep-alive connections, the HTTP server and other resources

**Bestela:** Dying immediately means not responding to thousands of disappointed users

🔗 [**Informazio gehiago: Graceful shutdown**](/sections/docker/graceful-shutdown.md)

<br /><br /><br />

## ![✔] 8.7. Set memory limits using both Docker and v8

**TL;PL:** Always configure a memory limit using both Docker and the JavaScript runtime flags. The Docker limit is needed to make thoughtful container placement decision, the --v8's flag max-old-space is needed to kick off the GC on time and prevent under utilization of memory. Practically, set the v8's old space memory to be a just bit less than the container limit

**Bestela:** The docker definition is needed to perform thoughtful scaling decision and prevent starving other citizens. Without also defining the v8's limits, it will under utilize the container resources - Without explicit instructions it crashes when utilizing ~50-60% of its host resources

🔗 [**Informazio gehiago: Set memory limits using Docker only**](/sections/docker/memory-limit.md)

<br /><br /><br />

## ![✔] 8.8. Plan for efficient caching

**TL;PL:** Rebuilding a whole docker image from cache can be nearly instantaneous if done correctly. The less updated instructions should be at the top of your Dockerfile and the ones constantly changing (like app code) should be at the bottom.

**Bestela:** Docker build will be very long and consume lot of resources even when making tiny changes

🔗 [**Informazio gehiago: Leverage caching to reduce build times**](/sections/docker/use-cache-for-shorter-build-time.md)

<br /><br /><br />

## ![✔] 8.9. Use explicit image reference, avoid `latest` tag

**TL;PL:** Specify an explicit image digest or versioned label, never refer to `latest`. Developers are often led to believe that specifying the `latest` tag will provide them with the most recent image in the repository however this is not the case. Using a digest guarantees that every instance of the service is running exactly the same code.

In addition, referring to an image tag means that the base image is subject to change, as image tags cannot be relied upon for a deterministic install. Instead, if a deterministic install is expected, a SHA256 digest can be used to reference an exact image.

**Bestela:** A new version of a base image could be deployed into production with breaking changes, causing unintended application behaviour.

🔗 [**Informazio gehiago: Understand image tags and use the "latest" tag with caution**](/sections/docker/image-tags.md)

<br /><br /><br />

## ![✔] 8.10. Prefer smaller Docker base images

**TL;PL:** Large images lead to higher exposure to vulnerabilities and increased resource consumption. Using leaner Docker images, such as Slim and Alpine Linux variants, mitigates this issue.

**Bestela:** Building, pushing, and pulling images will take longer, unknown attack vectors can be used by malicious actors and more resources are consumed.

🔗 [**Informazio gehiago: Prefer smaller images**](/sections/docker/smaller_base_images.md)

<br /><br /><br />

## ![✔] 8.11. Clean-out build-time secrets, avoid secrets in args

**TL;PL:** Avoid secrets leaking from the Docker build environment. A Docker image is typically shared in multiple environment like CI and a registry that are not as sanitized as production. A typical example is an npm token which is usually passed to a dockerfile as argument. This token stays within the image long after it is needed and allows the attacker indefinite access to a private npm registry. This can be avoided by coping a secret file like `.npmrc` and then removing it using multi-stage build (beware, build history should be deleted as well) or by using Docker build-kit secret feature which leaves zero traces

**Bestela:** Everyone with access to the CI and docker registry will also get access to some precious organization secrets as a bonus

🔗 [**Informazio gehiago: Clean-out build-time secrets**](/sections/docker/avoid-build-time-secrets.md)

<br /><br /><br />

## ![✔] 8.12. Scan images for multi layers of vulnerabilities

**TL;PL:** Besides checking code dependencies vulnerabilities also scan the final image that is shipped to production. Docker image scanners check the code dependencies but also the OS binaries. This E2E security scan covers more ground and verifies that no bad guy injected bad things during the build. Consequently, it is recommended running this as the last step before deployment. There are a handful of free and commercial scanners that also provide CI/CD plugins

**Bestela:** Your code might be entirely free from vulnerabilities. However it might still get hacked due to vulnerable version of OS-level binaries (e.g. OpenSSL, TarBall) that are commonly being used by applications

🔗 [**Informazio gehiago: Generic Docker practices**](/sections/docker/scan-images.md)

<br /><br /><br />

## ![✔] 8.13 Clean NODE_MODULE cache

**TL;PL:** After installing dependencies in a container remove the local cache. It doesn't make any sense to duplicate the dependencies for faster future installs since there won't be any further installs - A Docker image is immutable. Using a single line of code tens of MB (typically 10-50% of the image size) are shaved off

**Bestela:** The image that will get shipped to production will weigh 30% more due to files that will never get used

🔗 [**Informazio gehiago: Clean NODE_MODULE cache**](/sections/docker/clean-cache.md)

<br /><br /><br />

## ![✔] 8.14. Generic Docker practices

**TL;PL:** This is a collection of Docker advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Informazio gehiago: Generic Docker practices**](/sections/docker/generic-tips.md)

<br/><br /><br />

## ![✔] 8.15. Lint your Dockerfile

**TL;PL:** Linting your Dockerfile is an important step to identify issues in your Dockerfile which differ from best practices. By checking for potential flaws using a specialised Docker linter, performance and security improvements can be easily identified, saving countless hours of wasted time or security issues in production code.

**Bestela:** Mistakenly the Dockerfile creator left Root as the production user, and also used an image from unknown source repository. This could be avoided with with just a simple linter.

🔗 [**Informazio gehiago: Lint your Dockerfile**](/sections/docker/lint-dockerfile.md)

<br/><br /><br />

<p align="right"><a href="#table-of-contents">⬆ Itzuli hasierara</a></p>

# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/goldbergyoni/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](./README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)
- ![RU](/assets/flags/RU.png) [Russian](./README.russian.md) - Courtesy of [Alex Ivanov](https://github.com/contributorpw)
- ![PL](/assets/flags/PL.png) [Polish](./README.polish.md) - Courtesy of [Michal Biesiada](https://github.com/mbiesiad)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/94))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/goldbergyoni/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/goldbergyoni/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/goldbergyoni)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png">

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Independent full-stack developer with a taste for Ops and automation.

<br/>

### Steering Committee Emeriti

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, TypeScript, GraphQL, MongoDB, pretty much anything that involves JS/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|                                    [Ido Richter (Founder)](https://github.com/idori)                                    |                                        [Keith Holliday](https://github.com/TheHollidayInn)                                         |

### Collaborator Emeriti

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :-------------------------------------------------------------------------------------------------------------------------: |
|                                        [Refael Ackermann](https://github.com/refack)                                        |

<br/>

## Contributing

If you've ever wanted to contribute to open source, now is your chance! See the [contributing docs](.operations/CONTRIBUTING.md) for more information.

## Contributors ✨

Thanks goes to these wonderful people who have contributed to this repository!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
    <td align="center"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
    <td align="center"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
    <td align="center"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
    <td align="center"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4?s=100" width="100px;" alt=""/><br /><sub><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
    <td align="center"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
    <td align="center"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4?s=100" width="100px;" alt=""/><br /><sub><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
    <td align="center"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4?s=100" width="100px;" alt=""/><br /><sub><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
    <td align="center"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4?s=100" width="100px;" alt=""/><br /><sub><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
    <td align="center"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4?s=100" width="100px;" alt=""/><br /><sub><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
    <td align="center"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
    <td align="center"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
    <td align="center"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
    <td align="center"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
    <td align="center"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
    <td align="center"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
    <td align="center"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
    <td align="center"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4?s=100" width="100px;" alt=""/><br /><sub><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
    <td align="center"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
    <td align="center"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
    <td align="center"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
    <td align="center"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
    <td align="center"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
    <td align="center"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
    <td align="center"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
    <td align="center"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4?s=100" width="100px;" alt=""/><br /><sub><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
    <td align="center"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
    <td align="center"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
    <td align="center"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
    <td align="center"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a> <a href="#translation-collierrgbsitisfise" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4?s=100" width="100px;" alt=""/><br /><sub><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
    <td align="center"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4?s=100" width="100px;" alt=""/><br /><sub><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
    <td align="center"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
    <td align="center"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
    <td align="center"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4?s=100" width="100px;" alt=""/><br /><sub><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
    <td align="center"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
    <td align="center"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
    <td align="center"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
    <td align="center"><a href="http://joshuahemphill.com"><img src="https://avatars3.githubusercontent.com/u/46608115?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh</b></sub></a><br /><a href="#content-josh-hemphill" title="Content">🖋</a> <a href="#security-josh-hemphill" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/alec-francis"><img src="https://avatars2.githubusercontent.com/u/32949882?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alec Francis</b></sub></a><br /><a href="#content-alec-francis" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/arjun6610"><img src="https://avatars1.githubusercontent.com/u/61268891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>arjun6610</b></sub></a><br /><a href="#content-arjun6610" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jan-osch"><img src="https://avatars2.githubusercontent.com/u/11651780?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Osch</b></sub></a><br /><a href="#content-jan-osch" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/thiagotrs"><img src="https://avatars2.githubusercontent.com/u/32005779?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thiago Rotondo Sampaio</b></sub></a><br /><a href="#translation-thiagotrs" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Alexsey"><img src="https://avatars0.githubusercontent.com/u/6392013?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexsey</b></sub></a><br /><a href="#content-Alexsey" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/13luismb"><img src="https://avatars1.githubusercontent.com/u/32210483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luis A. Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
    <td align="center"><a href="https://lromano97.github.io/"><img src="https://avatars1.githubusercontent.com/u/22394847?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Romano</b></sub></a><br /><a href="#translation-lromano97" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/denisecase"><img src="https://avatars0.githubusercontent.com/u/13016516?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denise Case</b></sub></a><br /><a href="#content-denisecase" title="Content">🖋</a></td>
    <td align="center"><a href="http://stackoverflow.com/story/elektronik"><img src="https://avatars3.githubusercontent.com/u/1078554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick Ribal</b></sub></a><br /><a href="#content-elektronik2k5" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/0xflotus"><img src="https://avatars3.githubusercontent.com/u/26602940?v=4?s=100" width="100px;" alt=""/><br /><sub><b>0xflotus</b></sub></a><br /><a href="#content-0xflotus" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.dijonkitchen.org/"><img src="https://avatars3.githubusercontent.com/u/11434205?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Chen</b></sub></a><br /><a href="#content-dijonkitchen" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/dilansri"><img src="https://avatars2.githubusercontent.com/u/5089728?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dilan Srilal</b></sub></a><br /><a href="#content-dilansri" title="Content">🖋</a></td>
    <td align="center"><a href="https://vectree.ru"><img src="https://avatars3.githubusercontent.com/u/4215285?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vladthelittleone</b></sub></a><br /><a href="#translation-vladthelittleone" title="Translation">🌍</a></td>
    <td align="center"><a href="https://www.nikolaso.com"><img src="https://avatars0.githubusercontent.com/u/60047271?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nik Osvalds</b></sub></a><br /><a href="#content-nosvalds" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kdaniel21"><img src="https://avatars0.githubusercontent.com/u/39854385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Kiss</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=kdaniel21" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
