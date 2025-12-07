# Babestu zure erabiltzaileen pasahitzak

### Azalpena

Enkriptatu **beti** erabiltzaileen pasahitzak testu gisa gorde aurretik. Hiru aukera dituzu erabiltzailearen pasahitzak enkriptatzeko, betiere zertarako erabili nahi dituzun kontuan hartuta. Beheko funtzio guztiak behar bezala ezarri behar dira segurtasuna eskaintzeko (begiratu gutxieneko erreferentzia edo [IETFren gomendioak](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) jakiteko zein parametro erabili behar duzun bakoitzarekin). Gutxienez gomendatutako propietateak erabili beharko zenituzke; parametro altuagoak eta zure programarako bakarra den konbinazioa erabiltzeak lagundu ahal dizu kalte batzuk arintzen, noizbait baten batek zure pasahitz traolatuak eskuratzea lortzen badu. Gainera, gehitu [“gatza”](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) (datu erreproduzigarriak, erabiltzailearentzat eta zure sistemarentzat berariaz sortuak eta bakarrak) papasahitzak enkriptatu aurretik.

  - Erabilera kasu gehienetan,  [`bcrypt`](https://www.npmjs.com/package/bcrypt) liburutegi ezaguna erabil daiteke  (minimum: `cost:12`, password lengths must be <64)
  - Jatorrizko soluzio zorrotzagoa lortzeko edo tamaina mugagabeko pasahitzak lortzeko, erabili [`scrypt`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) funtzioa. (gutxienekoak: `N:32768, r:8, p:1`)
  - FIPS / Governement betetzeko, erabili jatorrizko kriptografia moduluan sartutako [`PBKDF2`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback) funtzio zaharrena. (gutxienekoa: `errepikapenak: 10000, luzera: {salt: 16, pasahitza: 32}`)


(OHARRA: `Math.random()` ez da **inoiz** erabili behar inolako pasahitz edo token sorkuntzaren zati gisa, aldez aurretik igar daitekeelako. Ikusi [atal aurreratua](#randomness) informazio gehiago lortzeko)


### Kode adibidea: Bcrypt

```javascript
const iterations = 12;
try {
// era asinkronoan pasahitz seguru bat sortu
  const hash = await bcrypt.hash('nirePasahitza', iterations);
  // Store secure hash in user record

  // hornitutako pasahitz sarrera bat gordetako hasharekin alderatu
  const match = await bcrypt.compare('pasahitzBat', hash);
  if (match) {
   // pasahitzak berdinak dira
  } else {
   // pasahitzak ez dira berdinak
  }
} catch {
  logger.error('ezin da pasahitzaren hasha egin.')
}
```

### Kode adibidea: SCrypt

```javascript
  const outSize = 64;
  const hash = crypto.scryptSync('nirePasahitzMugagabea','erabiltzaileBalioBakarraGatzerako',outSize).toString('hex');

  // Hash segurua erabiltzailearen datuan gorde

  // hornitutako pasahitz sarrera bat gordetako hasharekin alderatu
  const match = hash === crypto.scryptSync('nirePasahitzMugagabea','gatzEratorria',outSize).toString('hex');

  if (match) {
   // pasahitzak berdinak dira
  } else {
   // pasahitzak ez dira berdinak
  }
```

### Kode adibidea: PBKDF2 (pasahitzean oinarritutako giltzen deribazio funtzioa, Crypto Spec v2.1)

```javascript
try {
  const outSize = 64;
  const digest = 'blake2b512';
  const iterations = 12;
  const hash = crypto.pbkdf2Sync('nirePasahitza','erabiltzaileBalioBakarraGatzerako', iterations * 1000, digest, outSize).toString('hex');

  // Hash segurua erabiltzailearen datuan gorde

  // hornitutako pasahitz sarrera bat gordetako hasharekin alderatu
  const match = hash === crypto.pbkdf2Sync('pasahitzBat','gatzEratorria', iterations * 1000, digest, outSize).toString('hex');

  if (match) {
   // pasahitzak berdinak dira
  } else {
   // pasahitzak ez dira berdinak
  }
} catch {
  logger.error('ezin da pasahitzaren hasha egin.')
}
```

### Beste blogari batzuek diotena

[Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt)ren bloga:
> ... kontua ez da soilik erabiltzea aztarna algoritmo egokia enkriptatzeko. Luze eta zabal azaldu izan dut beharrezkoa dela tresna egokiak "denboraren" osagaia edukitzea pasahitz enkriptatuaren algoritmoaren zati gisa eta zer suposatzen duen horrek indarra erabiliz pasahitzak krakeatzen saiatzen den erasotzailearentzat.

[Troy Hunt](https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/) blogetik hartua, HaveIBeenPwned.com-en sortzailea:
> Pasahitzak behin eta berriro "enkriptatuta" daudela esateak ez du esan nahi horrela denik. Bcrypt enkriptazioek lan ona egiten dute, baina oso esanguratsua da denei esatea komeni dela pasahitza aldatzea, eta horrek erakusten du enkriptazio onak ere bere arriskuak dituela.

### Aurreratuak eta erreferentziak

#### Algoritmoak

Erabiltzaileen pasahitzak gordetzerakoan, zenbait aukera hartu behar dira kontuan, betiere zer lehentasun dituen haintzat hartuta

Beheko algoritmo/funtzio guztiak behar bezala ezarri behar dira segurtasuna eskaintzeko. Begiratu [IETFren gomendioak](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) jakiteko zein parametro erabili behar diren  bakoitzarekin. Gutxienez gomendatutako propietateak erabili beharko zenituzke; parametro altuagoak eta zure programarako bakarra den konbinazioa erabiltzeak lagundu ahal dizu kalte batzuk arintzen, noizbait baten batek zure pasahitz traolatuak eskuratzea lortzen badu. Gainera, gehitu gatza (datu erreproduzigarriak, erabiltzailearentzat eta zure sistemarentzat berariaz sortuak eta bakarrak) pasahitzak enkriptatu aurretik.

[`bcrypt`](https://www.npmjs.com/package/bcrypt) da gehien erabiltzen den kanpoko menpekotasuna, eta ahal denean erabili egin behar da. Izan ere, `bcrypt` erabiltzean "erronda" batzuk zehaztu daitezke aztarna segurua eskaintzeko. Horrek datuak prozesatzen dituen lan faktorea edo "erronda" kopurua ezartzen du, eta zenbat eta aztarna erronda gehiago egin, orduan eta seguruagoa lortzen da  traol aztarna (PUZeko denbora handitzen bada ere). Aztarna errondak sartzeak esan nahi du indar gordinaren faktorea nabarmen murriztea, pasahitz crackerrak moteldu egiten baitira eta saiakera bat sortzeko behar den denbora handitu.

[`scrypt`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) funtzioa erabil daiteke, jatorrizko kriptografia moduluan sartutakoa, bcrypten baino hobexeagoa baita. Izan ere, luzera mugagabeko pasahitzak erabiltzeko aukera ematen du, eta ez du menpekotasunik gehitzen. Bestalde, hobeto konfiguratu beharra izaten du, eta, berriagoa izanik, gutxiago arakatua izaten da. `scrypt`ek batera erabiltzen ditu kostua (PUZ/memoriaren kostua handitzeko), blockSize (memoriaren kostua handitzeko) eta paralelizazioa (bereizitako eragiketetan zatitzearen kostua handitzeko) definitzeko zer segurtasun maila duen, zenbat denbora beharko duen eta zertan den seguruena.

FIPS edo bestelako onarpenen bat guztiz beharrezkoa bada, jatorrizko kriptografia moduluan sartutako [`PBKDF2`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback) funtzio zaharrena erabili beharko litzateke. `PBKDF2`k `bcrypt`en antzeko APIa du, iterazio zenbaketa erabiltzen baitu erabilera indarra eta denbora definitzeko.

2021ean zehar erantsia izatekoa den (OpenSSLri erantsiz) `Argon2` funtzioa da [Pasahitz Aztarnen Lehiaketa](https://password-hashing.net/)ko irabazlea (Password Hashing Competition), eta [OWASP](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md#modern-algorithms)ek eta [IETF](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations)k gegien gomendatutakoa. Vehin jatorrizko modulu kriptografikoari gehitutakoan, `Argon2`k egonkorra izan beharko luke, eta lehentasuna eman beharko zenioke.


#### Gatza botatzen

Algoritmoa/funtzioa edozein izanda ere, sartu beti zure sistemarentzako eta erabiltzailearentzako bakarra den kateren bat. Hona hemen adibide batzuk: erabiltzaile izena/erabiltzaile IDa eta zure aplikazioaren izena edo erabiltzailearen helbide elektronikoa eta zure enpresako helbide elektronikoa; elementu horietako batzuk konbinatuta, zuk zeuk nahi duzun moduan. Hala ere, zure aztarnaren algoritmoa/funtzioa aukeratzerakoan, kontuan hartu BCryptek 64 karaktereko muga duela, SCrypt konplexuagoak nahi adina gatz eta pasahitz erabiltzeko aukera ematen duen bitartean.

##### Zergatik bota gatza?

Gatza gehitzean aztarna aldatu egiten da, eta, beraz, norbaiten sistemako pasahitz bereko aztarnatik bereizten da. Pasahitz bat erabiltzen baduzu gune anitzetarako eta beste norbaitek datuak urratuz lortuz gero zure pasahitzaren aztarna, ezingo du zure datu baseko aztarnarekin lotu. Denek aztarnak erabiltzen dituztenean, ia ezinezkoa da erasotzaileek pasahitza berrerabiltzeko ereduak identifikatzea.

#### Pasahitzaren luzera

Zure pasahitza gehi gatza batera erabiliz ezin badute muga bat gainditu, eta, gatz ona erabiltzen baduzu, erabiltzaileen pasahitzak are mugatuagoak izango dira. Oro har ona izaten da muga hori gainditzea, eta, horretarako, aldez aurretik pasahitzen aztarna egin dezakezu. Zama administratiboa eragin ahal dizu, baina konpromisoa gai bazara iturriaren muturrean aztarna sinple bat modu koherentean erabiltzeko, aztarna aurrez konfigura dezakezu pasahitzetik sortzeko luzera zehatz bateko kate hexadezimalak, zure zerbitzarira bidali aurretik. Horrek esan nahi du zure APIan egiaztapen sendoak izan ditzakezula.

Adibidez, zehazki 256 karakterreko luzera dituzten karakter hexadezimalak onartzen ditu soilik, baina erabiltzaileei aukera ematen die edozein karakterekin edozein luzerako pasahitzak erabiltzeko (oraindik nahikoa aztarna ona erabili behar duzu, nahi gabe talkarik ez sortzeko bi pasahitz ezberdinek aztarna berdina sortzen dutenean; ez legoke gaizki aztarna seguruagoak erabiltzea, denbora gehiago eskatzen badu ere)

Nabigatzailearen kode adibidea: `const hash = crypto.subtle.digest('sha-256', password)`

#### Ausazkoa

Ahal den guztietan, utzi ausazko sorkuntza zuk aukeratutako algoritmoen esku. Kontuan izan, ez da `Math.random()` alternatibaren aipamenik eman; izan ere, saihestu beharko zenuke `crypto.random()` erabiltzea ere, ordenagailuko baliabide mugatu berezia baita Randomness, eta hartaz abusatzeak arazoak sor ahal dizkio zure programari eta baita makinako beste programa batzuei ere.

#### Nola funtzionatzen dute BCryptek/SCryptek

Biok ere iterazioak erabiltzen dituzte, zeren haien premisa hau baita: X denbora eta baliabide behar badituzu behin enkriptatzeko, eta X ^ erasotzaileak denbora eta baliabide asko behar baditu enkriptazioa indarrez behartzeko, orduan enkriptazioa enkriptatzen baduzu, eta berriro enkriptazio berria enkriptatzen baduzu, eta hori behin eta berriro egiten baduzu, gero eta handiagoak izango dira erasotzaileak behar dituen baliabideak zure aztarna behartzeko. SCryptek blokearen/ zatiaren tamainaren eta paralelismoaren parametroak ere baditu, "zailtasunak" areagotzen saiatzeko RAM edo PUZ nukleo kopuru jakin bat bakarrik beharko dutela uste duten erasotzaileei. Parametro horien eraginkortasuna eztabaidagai dago.

#### Erreferentziak

  - IETF - pasahitza biltegiratzeko gomendioak: https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html
  - OWASP - Pasahitza biltegiratzeko tranpa orria: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md
  - auth0 - Zer da Gatza Pasahitza: https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/
  - Troy Hunt - Zein da Hashing eta Encryption arteko desberdintasuna: https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/
  - Password Hashing Competition: https://password-hashing.net/

