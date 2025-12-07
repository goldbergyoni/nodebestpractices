# Erabili segurtasunarekin lotutako goiburuak zure aplikazioa eraso arrunten aurka babesteko

<br/><br/>

### Azalpena

Badira segurtasunarekin lotutako goiburuak, zure aplikazioaren segurtasuna hobetzeko erabil daitezkeenak. Beheko zerrendan dituzu goibururik garrantzitsuenak. Orrialde honen behealdean ageri diren esteken guneak ere bisita ditzakezu gai honi buruzko informazio gehiago lortzeko. Goiburuok erraz ezar ditzakezu kaskoa moduluaren bidez (Expressentzat [Helmet](https://www.npmjs.com/package/helmet) ([Helmet for koa](https://www.npmjs.com/package/koa-helmet)).

<br/><br/>

### Table of Contents

- [HTTP Garraio Segurtasun Zorrotza (HSTS)](#http-garraio-segurtasun-zorrotza-hsts)
- [HTTPko giltza publikoak ainguratzea (HPKP)](#httpko-giltza-publikoak-ainguratzea-hpkp)
- [X-Frame-Aukerak (X-Frame-Options)](#x-frame-aukerak-x-frame-options)
- [X-XSS-Babesa (X-XSS-Protection)](#x-xss-babesa-x-xss-protection)
- [X-Eduki-Mota-Aukerak (X-Content-Type-Options)](#x-eduki-mota-aukerak-x-content-type-options)
- [Erreferentziazko politika (Referrer-Policy)](#erreferentziazko-politika-referrer-policy)
- [Espero-CT (Expect-CT)](#espero-ct-expect-ct)
- [Edukiaren Segurtasun Politika (Content-Security-Policy)](#edukiaren-segurtasun-politika-content-security-policy)
- [Baliabide Osagarriak](#baliabide-osagarriak)

<br/><br/>

### HTTP Garraio Segurtasun Zorrotza (HSTS)

HTTP Strict Transport Security (HSTS) webguneen segurtasun politikaren mekanismo bat da, webguneak babesteko [protokoloen degradazio eraso](https://en.wikipedia.org/wiki/Downgrade_attack) eta [cookieen bahiketaren](https://www.owasp.org/index.php/Session_hijacking_attack) aurka, eta web zerbitzariak ahalbidetzen ditu adierazteko web nabigatzaileei (edo baldintzak betetzen dituzten beste erabiltzaile batzuei) **HTTPS konexio seguruak** erabiliz soilik gauzatu behar direla elkarren arteko harremanak eta **inoiz ez** HTTP protokolo ez seguruaren bidez. HSTS gidalerroa `Strict-Transport-Security` goiburua erabiliz ezartzen da lehendik dagoen HTTPS konexio baten bidez .

Strict-Transport-Security Header-ek gehieneko balioa (`max-age`) onartzen du, segundotan adierazia, nabigatzaileari jakinarazteko zenbat denbora duen webgunean sartzeko HTTPS soilik erabiliz; gainera, beste balio bat ere onartzen du, `includeSubDomains` izenekoa, Garraioaren Segurtasun Zorrotzaren araua webgunearen azpidomeinu guztiei aplikatze aldera.

Goiburu adibidea: HSTS gidalerroak astebetez gaituta, azpidomeinuak barne Strict-Transport-Security: max-age = 2592000; includeSubDomains

```
Strict-Transport-Security: max-age=2592000; includeSubDomains
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hsts)

🔗 [Irakurri MDN web dokumentua](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

<br/><br/>

### HTTPko giltza publikoak ainguratzea (HPKP)

HTTP Public Key Pinning (HPKP) segurtasun mekanismo bat da, gaizki jaulkitako edo iruzurrezko SSL / TLS ziurtagiriak erabiliz erasotzaileek egindako nortasun faltsutzeei aurre egitea ahalbidetzen diena HTTPS webguneei.

HTTPS web zerbitzariak giltza publikoen traolen zerrenda eskaintzen du, eta ondorengo konexioetan bezeroek espero dute zerbitzariak giltza publiko horietako bat edo gehiago erabiltzea bere ziurtagirien katean. Ezaugarri hori arretaz erabilita, man-in-the-middle (MITM) erasoak eta autentifikazio faltsuko beste arazo batzuk murriztu ditzakezu zure aplikazioko erabiltzaileek gehiegizko arriskurik izan gabe.

Inplementatu aurretik, `Expect-CT` goiburua begiratu beharko zenuke, malgutasun handia daukalako ezarpen okerrak berreskuratzeko eta bestelako [abantailak](https://groups.google.com/a/chromium.org/forum/m/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ) ere badituelako.

Public-Key-Pins goiburuak 4 balio onartzen ditu: `pin-sha256` balioa, ziurtagiriaren giltza publikoa gehitzeko SHA256 algoritmoa erabiliz traolatua, hau da, hainbat aldiz gehi daitekeena hainbat giltza publikori; gehieneko adinaren balioa, nabigatzaileari esateko nola aplikatu beharko lukeen beti araua; `includeSubDomains` balioa, arau hori azpidomeinu guztiei aplikatzeko; eta `report-uri` balioa, pinaren baliozkotzearen erroreak jakinarazteko emandako URLan.

Goiburu adibidea: HPKP gidalerroa astebetez gaituta, azpidomeinuak barne, ohartarazi hutsegiteak adibide URL bati eta onartu bi giltza publiko

```
Public-Key-Pins: pin-sha256="d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM="; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g="; report-uri="http://example.com/pkp-report"; max-age=2592000; includeSubDomains
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hpkp)

🔗 [Irakurri MDN web dokumentua](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)

<br/><br/>

### X-Frame-Aukerak (X-Frame-Options)

X-Frame-Aukerak goiburuak aplikazioa babesten du [Clickjacking](https://www.owasp.org/index.php/Clickjacking) erasoen aurka, fotogramak erabiliz zure aplikazioa (kanpoko) beste orrialdeetan txerta daitekeen ala ez erabakitzen duen politika ezarriz.

X-Frame-Aukerek 3 parametro onartzen ditu: parametro bat, baliabidea txertatzea ez onartzeko (`deny`), oro har; aurrekoaren jatorri bera (`sameorigin`) duen beste parametro bat, baliabidea ostalari/jatorri berean (`allow-from`) txertatzeko baimena emateko; eta baimenaren parametroa, baliabidea txertatzeko ostalaria zehazteko.

Goiburu adibidea: ukatu zure aplikazioa kapsulatzea

```
X-Frame-Options: deny
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo)

🔗 [Irakurri MDN web dokumentuak](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

<br/><br/>

### X-XSS-Babesa (X-XSS-Protection)

Goiburu honek [Cross-site scripting](<https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)>) iragazkia gaitzen du zure nabigatzailean.

4 parametro onartzen ditu: `0` parametroa, iragazkia desgaitzeko; `1` parametroa, iragazkia gaitzeko, eta orriaren higienizazio automatikoa ahalbidetzeko; `mode=block` parametroa, iragazkia gaitzeko eta orria agerian jartzea eragozteko XSS erasoren bat atzematen bada (parametro hori 1i gehitu behar zaio puntua eta koma erabiliz); eta `report=<domainToReport>` parametroa, arau haustearen berri emateko (parametro hau `1`i gehitu behar zaio).

Goiburu adibidea: gaitu XSS babesa eta jakinarazi urraketak adibidearen URLari

```
X-XSS-Protection: 1; report=http://example.com/xss-report
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

<br/><br/>

### X-Eduki-Mota-Aukerak (X-Content-Type-Options)

Goiburu hau ezarriz gero, Nabigatzaileak eragotziko du [fitxategiak interpretatzea artxiboak HTTP](https://en.wikipedia.org/wiki/Content_sniffing) goiburuetako edukietan adierazitakoaz beste zerbait bezala.

Goiburu adibidea: jarraitu arrastoa debekatutako edukiari

```
X-Content-Type-Options: nosniff
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto)

🔗 [Irakurri MDN web dokumentuak](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)

<br/><br/>

### Erreferentziazko politika (Referrer-Policy)

HTTP Referer-Policy goiburuak arautzen du Erreferentzia (Referer) goiburuan bidalitako erreferentziazko informaziotik zein aukeratu behar den egindako eskaerekin batera sartzeko.

8 parametro onartzen ditu: erreferentziarik gabeko parametro bat (`no-referrer`), Erreferentzia (Referer) goiburua erabat kentzeko; `no-referrer-when-downgrade` parametroa Erreferentzia (`Referer`) goiburua kentzeko, adibidez, HTTPS -> HTTP; jatorrizko parametro bat ostalariaren erroa erreferentzia gisa **soilik** bidaltzeko; `origin-when-cross-origin` parametro bat jatorrizko URL osoa bidaltzeko jatorrian bertan dagoenean eta ostalariaren jatorria bidaltzeko jatorrian bertan ez dagoenean **bakarrik**; parametro bat bere webgune berera soilik erreferentziazko informazioa bidaltzeko eta informaziorik ez bidaltzeko jatorri gurutzatuko eskaerak daudenean; `strict-origin-when-cross-origin` parametro zorrotz bat erreferentziazko URL osoa jatorri bereko helmuga batera bidaltzeko; jatorria segurtasun maila bereko jatorri gurutzatuko helmugara **soilik** eta erreferentziarik ez hain segurua jatorri gurutzatuko helmuga batean; eta `unsafe-url` parametroa jatorri **bereko** edo jatorri gurutzatuko helmugetara bidaltzeko erreferentzia osoa.

Goiburu adibidea: kendu erabat Erreferentzia (`Referer`) goiburua

```
Erreferentziazko politika: erreferentziarik ez (no-referrer)
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp)

🔗 [Irakurri MDN web dokumentuak](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

<br/><br/>

### Espero-CT (Expect-CT)

Zerbitzari batek Expect-CT goiburua erabiltzen du esateko nabigatzaileek ebaluatu behar dituztela goiburua igortzen duen ostalariarekin konexioak, [ziurtagiriaren gardentasuna](https://www.certificate-transparency.org/) betetze aldera.

Goiburu honek 3 parametro onartzen ditu: `report-uri` parametroa, izateko URL helbideren bat, zeini emango zaion Expect-CTn izandako hutsegiteen berri; betearazteko parametroa, nabigatzaileari adierazteko ziurtagiriaren gardentasuna egikaritu behar dela (jakinarazi bakarrik ez, egikaritu egin da) eta uko egin behar zaiela ziurtagiriaren gardentasuna betetzen ez duten etorkizuneko konexioei; eta gehieneko adinaren parametroa (`max-age`), nabigatzaileak ostalariari adierazteko zenbat segunduan hartuko duen nabigatzaileak Expect-CT ostalaria ostalari ezaguntzat.

Goiburu adibidea: ziurtatu ziurtagiriaren gardentasuna astebetez eta eman adibidearen berri URLari

```
Expect-CT: max-age=2592000, enforce, report-uri="https://example.com/report-cert-transparency"
```

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#ect)

<br/><br/>

### Edukiaren Segurtasun Politika (Content-Security-Policy)

HTTP Edukiaren-Segurtasuna-Politika (Content-Security-Policy) erantzun goiburuak aukera ematen du erabiltzaileen agenteak orrialde jakin batera zer baliabide igo ditzakeen kontrolatzeko.
Salbuespenak salbuespen, gidalerroek, gehienetan, zerbitzariaren jatorria eta script amaierako puntuak zehaztea eskatu ohi dute. Horrek [guneen arteko scripting erasoen (XSS)](<https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)>) babesa ematen du.

Goiburu adibidea: gaitu CSP eta exekutatu jatorri bereko scriptak soilik

```
Content-Security-Policy/Edukiaren-Segurtasuna-Politika: script-src 'auto'
```

Edukia-Segurtasuna-Politika (Content-Security-Policy) erabiliz gaitutako politika asko daude, jarraian dituzun guneen esteketan aurki daitezkeenak.

🔗 [Irakurri OWASP Secure Headers Project proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#csp)

🔗 [Irakurri MDN web dokumentuak](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

<br/><br/>

### Baliabide osagarriak

🔗 [OWASP Secure Headers proiektua](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers)

🔗 [Node.js segurtasun zerrenda (RisingStack)](https://blog.risingstack.com/node-js-security-checklist/)

<br/><br/>
