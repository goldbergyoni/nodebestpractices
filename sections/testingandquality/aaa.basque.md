# Egitura probak AAA ereduaren arabera

<br/><br/>

### Azalpen Paragrafoa

Probak egiterakoan daukagun erronka handiena memoria espazio falta da, iada badugu asko lanpentzen gaituen ekoizpen kodea. Honegatik, proba kodea sinplea eta ulergarria izan behar da. Proba kasu bat irakurtzean, ez du kode inperatiboa (begiztak, ondoretasun) irakurtzearen irudia eman behar, HTML moduan, esperientzia deklaratibo bat baizik. Hau lortzeko, erabili AAA eredua irakurtzaileek probaren asmoa esfortzu gabe uler dezaten. Eredu hau bezalako beste batzuk ere badaude, XUnit 'Prestatu, Aritu, Egiaztatu, Eraitsi' ('Setup, Excercise, Verify, Teardown') bezalakoak. Hauek dira hiru Ak:

Lehenengo A, Prestatu (Arrange): Sistema, proba kasuak simulatu nahi duen egoeran jartzeko, egin beharreko kodearen prestakuntza. Honek, eraikitzailearen unitate proba egitea eska lezake, datu-basean datuak gehitzea, objektuak antzeratuz (mock) eta beste edozein prestakuntza kode

Bigarren A, Jokatu: zure unitate proba exekutatko. Normalean kode ilara bat

Hirugarren A, Baieztatu: Jasotako balioak esperotakoa errespetatzen duela ziurtatu. Normalean kode ilara bat

<br/><br/>

### Kode adibidea: AAA ereduaz egituratutako proba bat

```javascript
describe.skip("Bezero klasifikatzailea", () => {
  test("Bezeroak 500$ baino gehiago gastatzen dituenean, premium gisa kasifikatua izan behar da", () => {
    //Prestatu
    const klasifikatzekoBezeroa = { gastatuak: 505, sortua: new Date(), id: 1 };
    const DBAntzeratua = sinon
      .stub(dataAccess, "berreskuratuBezeroa")
      .reply({ id: 1, klasifikazioa: "arrunta" });

    //Jokatu
    const jasotakoKlasifikazioa = bezeroKlasifikatzailea.klasifikatuBezeroa(
      klasifikatzekoBezeroa
    );

    //Baieztatu
    expect(jasotakoKlasifikazioa).toMatch("premium");
  });
});
```

<br/><br/>

### Kodearen adibidea – Anti Eredua: bereizketarik ez, bloke bakarra, ulertzeko zailagoa

```javascript
test("Premium gisa klasifikatua izan beharko litzateke", () => {
  const klasifikatzekoBezeroa = { gastatuak: 505, sortua: new Date(), id: 1 };
  const DBAntzeratua = sinon
    .stub(dataAccess, "berreskuratuBezeroa")
    .reply({ id: 1, klasifikazioa: "arrunta" });
  const jasotakoKlasifikazioa = bezeroKlasifikatzailea.klasifikatuBezeroa(
    klasifikatzekoBezeroa
  );
  expect(jasotakoKlasifikazioa).toMatch("premium");
});
```

<br/><br/>

### "Erabili 6 zati proba bakoitzean"

["30 Node.jsen proba jarraibide egokiak" blogetik, Yoni Goldbergen eskutik](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

![Proba txostenaren adibidea](/assets/images/6-parts-in-test.jpg "Proba txostenaren adibidea")

<br/><br/>

### "Garrantzitsua da proba irakurtzen duen pertsonarentzat, probak zein jokaera egiaztatzen duen errez jakitea"

[XUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html) liburutik:

> Garrantzitsua da proba irakurtzen duen pertsonarentzat, proba zein jokaera egiaztatzen ari den azkar jakiteko gai izatea. Oso nahasgarria izan daiteke jokaera ugari probaren barruan (SUT) deituak izatea, batzuk SUTaren proba aurreko egoera prestatzeko (instalazioa), beste batzuk SUTa jokatzeko eta beste batzuk SUTaren proba ondorengo egoera egiaztatzeko. Lau faseak modu argian identifikatzeak probaren asmoa ikustea askoz errazago egiten dute
