[✔]: ../../assets/images/checkbox-small-blue.png

# Node.jsren ohiko segurtasun praktika onak

Ohiko segurtasun praktiken atalak esparru eta konbentzio askotan estandarizatuta dauden praktika onak biltzen ditu. Adibidez, aplikazio bat exekutatzea SSL / TLS-rekin konfigurazio guztietan erabili beharko litzatekeen praktika eta konbentzio arrunta da, horrela segurtasun abantaila handiak lortuko lirateke eta.

## ![✔] Erabili SSL / TLS bezeroen zerbitzariaren konexioa enkriptatzeko

**TL; DR:** [doako SSL / TLS ziurtagirien](https://letsencrypt.org/) eta haien konfigurazio errazaren garaian, ez duzu zertan pisatu zerbitzari segurua erabiltzearen abantailak eta desabantailak, argi eta garbi gailentzen baitira segurtasuna, teknologia modernoaren laguntza eta konfiantza bezalako abantailak -gutxieneko gainkarga minimoa bezalako desabantailak edukita ere- HTTP hutsaren aldean.

**Bestela:** erasotzaileek erdi-erdiko erasoak egin ditzakete, zure erabiltzaileen portaera zelatatu eta are ekintza maltzurragoak egin ditzakete konexioa enkriptatu gabe dagoenean.

🔗 [**Informazio gehiago: Node.js zerbitzari segurua egikaritzea**](/sections/security/secureserver.basque.md)

<br/><br/>

## ![✔] Balio sekretuak eta aztarnak modu seguruan alderatzea

**TL; DR:** balio sekretuak edo aztarnak alderatzean HMAC laburpenak balira bezala, [`crypto.timingSafeEqual(a, b)`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) funtzioa erabili beharko zenuke, Node.js v6.6.0 geroztik Nodek eskaintzen duena. Metodo horrek emandako bi objektu alderatzen ditu eta datuok alderatzen jarraitzen du bat ez badatoz ere. Datuak berdinak diren alderatzeko metodo lehenetsiak berez bueltatuko lirateke berriro, karakterrak bat etorriko ez balira, eta horrela eragiketaren iraupen luzeak  erasoak ahalbidetuko lituzke

**Bestela:** datuak berdinak diren alderatzeko metodo lehenetsiak erabiltzen badituzu, informazio kritikoa agerian jar dezakezu, zenbatekoa den bi objektu alderatzeko behar den denbora.

<br/><br/>

## ![✔] Ausazko kateak sortzea Node.js erabiliz

**TL; DR:** tokenetarako (giltzak) eta segurtasunaren menpekoak diren beste kasu batzuetarako sasi ausazko kateak sortzen dituen funtzio pertsonalizatua erabiltzea ez da, agian, uste bezain ausazkoa izango, eta, ondorioz, zure aplikazioa eraso kriptografikoen aurrean zaurgarria izan daditeke. Ausazko kate seguruak sortu behar dituzunean, erabili [`crypto.randomBytes(size, [callback])`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) funtzioa sistemak eskaintzen duen entropia baliatuz.

**Bestela:** sasi ausazko kateak sortzen direnean kriptografikoki seguruak diren metodorik gabe, erasotzaileek sortutako emaitzak aurreikusi eta erreproduzi ditzakete, zure aplikazioa segurtasunik gabe geldituz.

<br/><br/>

Jarraian, OWASP proiektuko hainbat gomendio garrantzitsu zerrendatu ditugu

## ![✔] OWASP A2: hautsitako autentifikazioa

- Eskatu MFA / 2FA zerbitzu eta kontu garrantzitsuetarako
- Biratu pasahitzak eta atzitzeko gakoak maiz, SSH giltzak barne
- Aplikatu pasahitz politika sendoak, bai operazioetarako, bai aplikazioko erabiltzaileen kudeaketarako ([🔗 OWASP pasahitz gomendioa](https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Implement_Proper_Password_Strength_Controls.22))
- Ez bidali edo zabaldu zure aplikazioa lehenespenezko kredentzialekin, batez ere administratzaile erabiltzaileentzat edo menpeko dituzun kanpoko zerbitzuentzat
- Erabili OAuth, OpenID eta horiek bezalako autentifikazio metodo estandarrak, eta **saihestu** oinarrizko autentifikazioa
- Mugatu autentifikazio saiakera kopurua: debekatu _X_ saio saiakera baino gehiago (pasahitza berreskuratzea barne, etab.) _Y_ aldian
- Saioa hastean huts eginez gero, ez utzi erabiltzaileari jakiten erabiltzaile izenaren egiaztatzeak edo pasahitzaren egiaztatzeak huts egin zuen; autentifikazio errore arrunta itzuli besterik ez egin
- Aztertu ez ote den komeni erabiltzea erabiltzaileen kudeaketarako sistema zentralizaturen bat langile bakoitzeko hainbat kontu kudeatu beharra ekiditeko (adibidez, GitHub, AWS, Jenkins, etab.) eta erabiltzaileen kudeaketarako sistema ezagun eta zailduren baten onurez baliatzeko.

## ![✔] OWASP A5: sarbide kontrol hautsia

- Errespetatu [pribilegio txikienaren printzipioa](https://en.wikipedia.org/wiki/Principle_of_least_privilege): DevOpseko osagai eta pertsona bakoitzak soilik izan behar du aukera beharrezko informazioa eta baliabideak eskuratzeko
- **Inoiz** ez lan egin kontsola / root (pribilegio osoa) kontuarekin kontu kudeaketan izan ezik
- Exekutatu instantzia / edukiontzi guztiak rol / zerbitzu kontu baten izenean
- Esleitu baimenak taldeei eta ez erabiltzaileei. Horrek baimenen kudeaketa errazagoa eta gardenagoa izatea ahalbidetu beharko luke kasu gehienetan

## ![✔] OWASP A6: segurtasun okerreko konfigurazioa

- Barne sarea da bide bakarra ekoizpen inguruneko barne osagaietara iristeko; erabili SSH edo beste modu batzuk erabili, baina _inoiz_ agerian jarri gabe barne zerbitzuak
- Mugatu barne sareko sarbidea: berariaz zehaztu zein baliabide sar daitekeen beste baliabide batzuetara (adibidez, sare politika edo azpisareak)
- Cookieak erabiltzen badituzu, konfiguratu modu "seguruan", bidalketak SSL bidez bakarrik egiteko
- Cookieak erabiltzen badituzu, konfiguratu "gune bererako" soilik; beraz domeinu bereko eskaerek soilik izendatutako cookieak itzuliko dituzte
- Cookieak erabiltzen badituzu, aukeratu "HttpOnly" konfigurazioa, bezeroaren JavaScript kodea sartzea galarazten duena
- Babestu VPC bakoitza sarbide arau zorrotz eta murriztaileekin
- Lehenetsi mehatxuak STRIDE edo DREAD bezalako segurtasun mehatxu eredu estandarrak erabiliz
- Babestu DDoS erasoen aurka HTTP (S) eta TCP karga orekatzaileak erabiliz
- Erakunde espezializatuek aldizka sartzeko probak egin

## ![✔] OWASP A3: bereziki babestutako datuen esposizioa

- Onartu SSL / TLS konexioak soilik, eta ezarri Strict-Transport-Security goiburuak erabiliz
- Bereizi sarea segmentutan (hau da, azpisareak) eta ziurtatu nodo bakoitzak sarbide baimenak dituela beharrezko gutxieneko sarerako
- Multzokatu Interneteko sarbiderik behar ez duten zerbitzu / instantzia guztiak eta berariaz baztertu irteerako edozein konexio (azpisare pribatua, adibidez)
- Gorde sekretu guztiak AWS KMS, HashiCorp Vault edo Google Cloud KMS bezalako segurtasun karpetak dituzten produktuetan
- Blokeatu izaera sentikorreko metadatuak metadatuak erabiliz
- Enkriptatu pasoko datuak ingurune fisiko batetik irteten direnean
- Ez sartu sekretuak egunkarietako adierazpenetan
- Saihestu frontendean pasahitz arruntak erakustea; hartu beharrezko neurriak backendean; eta ez gorde inoiz informazio sentikorrik testu soilean


## ![✔] OWASP A9: segurtasun ahulezia ezagunak dituzten osagaien erabilera

- Eskaneatu dockeren irudiak ahulezia ezagunak aurkitzeko (Dockeren eta beste hornitzaile batzuen eskaneatze zerbitzuak erabiliz)
- Gaitu instantzia automatikoen (makina) adabakiak eta bertsio berritzea segurtasun adabakirik ez duten sistema eragileen bertsio zaharrak exekutatzea ekiditeko
- Eman erabiltzaileari 'id', 'sarbidea' eta 'eguneratu'ren giltzak(tokenak), sarbide giltzak (tokenak) iraupen laburra izan dezan eta giltzarekin (tokenarekin) egunera dadin
- Erregistratu eta ikuskatu APIaren dei guztiak hodei eta kudeaketa zerbitzuetara (adibidez, nork ezabatu zuen S3 ontzia?) AWS CloudTrail bezalako zerbitzuak erabiliz
- Exekutatu zure hodei hornitzailearen segurtasun egiaztatzailea (adibidez, AWS segurtasun fidagarritasun aholkularia)


## ![✔] OWASP A10: erregistro eta kontrol eznahikoak

- Ohartarazi ikuskaritzako gertaera aipagarri edo susmagarriez: erabiltzaileen saioa hastea, erabiltzaile berriak sortzea, baimenen aldaketa, etab
- Ohartarazi saioa hastean hutsegiteen kopuru irregularra dela (edo ahaztutako pasahitza bezalako ekintzak)
- Sartu eguneratzeari hasiera eman dion denbora eta erabiltzaile izena DB erregistro bakoitzean

## ![✔] OWASP A7: Cross-Site-Scripting (XSS)

- Erabili diseinuaren bidez XSS-i automatikoki ihes egiten dioten txantiloien motorrak edo esparruak, hala nola EJS, Pug, React edo Angular. Ezagutu XSS babes mekanismo bakoitzaren mugak eta kudeatu estaltzen ez diren erabilera kasuak
- HTML irteerako testuinguruaren arabera  fidagarriak ez diren HTTP eskaera datuak sahiestean (gorputza, atributua, JavaScript, CSS edo URLa) konpondu egingo dira islatu eta gordetako XSS ahuleziak
- Testuinguruaren araberako kodeketa aplikatzeak DOM XSSren aurka egiten du arakatzailearen dokumentua aldatzean bezeroaren aldetik
- Gaitu Edukien Segurtasun Politika (CSP) XSSren aurkako kontrola arintzeko defentsa sakon gisa

## ![✔] Babestu pertsonalki identifikatu daitekeen informazioa (PII datuak)

- Pertsonalki identifikatzeko informazioa (PII) pertsona zehatz bat identifikatzeko erabil daitekeen edozein datu da
- Babestu aplikazioetan identifikatu daitekeen informazioa, enkriptatuz
- Jarraitu tokian tokiko datuen pribatutasun legeak. Erreferentzia legeak:
  - Europar Batasuna: GDPR - https://ec.europa.eu/info/law/law-topic/data-protection_en
  - India: https://meity.gov.in/writereaddata/files/Personal_Data_Protection_Bill,2018.pdf
  - Singapur: https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act

## ![✔] Izan security.txt fitxategia [PRODUKZIOA]

**TL; DR:** izan ```security.txt``` izeneko testu fitxategia direktorio ```/.well-known``` azpian (/.well-known/security.txt) edo zure webgunearen edo ekoizpenean dagoen zure web aplikazioaren erro direktorioan (/security.txt). Segurtasun ikertzaileek atzemandako ahultasunen xehetasunak izan behar ditu ```security.txt``` fitxategiak, eta txostenak bidali behar zaizkion pertsona edo talde arduradunaren harremanetarako datuak ere jaso beharko ditu (posta elektronikoko IDa edo / eta telefono zenbakiak) .

**Bestela:** baliteke ahulezien berri ez izatea. Galduko duzu ahuleziei garaiz eragiteko aukera.

🔗 [**security.txt**](https://securitytxt.org/)
<br/><br/><br/>

## ![✔] Izan SECURITY.md fitxategia [ITURRI IREKIA]

**TL; DR:** zure proiektuaren segurtasun ahulezien berri modu arduratsuan eman nahi badiozu jendeari jarraibideak zehazte aldera,  SECURITY.md fitxategia gehi dezakezu zure biltegiko erroan, dokumentuetan edo .github karpetan. SECURITY.md fitxategiak informazio egokia eduki behar du segurtasun ikertzaileek proiektuaren ahuleziak atzeman eta txostenak bidali behar zaizkion pertsona / talde arduradunaren  harremanetarako datuak (posta elektronikoko IDa edo / eta telefono zenbakiak) jaso ahal ditzaten

**Bestela:** baliteke ahulezien berri ez izatea. Ahulezien gainean garaiz jarduteko aukera galduko duzu.

🔗 [**Informazio gehiago: SECURITY.md**](https://help.github.com/en/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)

<br/><br/><br/>


<br/><br/><br/>
