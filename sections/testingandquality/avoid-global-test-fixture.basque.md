# Saihestu datu globalak, gehitu datuak proba bakoitzeko

<br/><br/>

### Azalpen paragrafoa

Hau da urrezko proba araua: egin proba kasuak sinpleak, proba bakoitzak bere datu-baseko ilarak sortu eta erabili behar ditu menpekotasunak ekiditeko eta probaren fluxua ondo ulertzeko. Egia esan, garatzaileek hau askotan urratzen dute, datu-baseak beteaz probak exekutatu aurretik (‘test fixture’ bezala ere ezagutuak), errendimendua hobetzeko xedearekin. Errendimendua gai garrantzitsua izan arren arindua izan daiteke (adibidez Memoria Datu-Baseak, begiratu "Osagarrien probrak" atala), baina proben konplexutasuna da kontutan hartu beharreko gai mingarriena. Praktikan, sortu proba kasu bakoitza explizituki datu-basean beharrezko informazioa gehitzeko eta jokatu bakarrik datu horiekin. Errendimendua arazo larria bihurtzen bada, oreka akordio bat aurki daiteke soilik datuak gehituko dituen proba bat idazten eta ondoren hau bikoizten beste probentzat (adibidez queries)

<br/><br/>

### Kodearen adibidea: proba bakoitzat bere datu multzoa bakarrik ikutzen du

```javascript
it("Webgune baten izena eguneratzerakoan, baieztapen arrakastatsua izan", async () => {
  // probak datu berriak gehitzen ditu eta horiek bakarrik ikutzen ditu
  const probapeanDagoenWebgunea = await WebguneZerbitzua.webguneaGehitu({
    izena: "webgunearenEguneraketarenProba",
  });
  const izenEguneraketarenEmaitza = await WebguneZerbitzua.izenaAldatu(
    probapeanDagoenWebgunea,
    "izenBerria"
  );
  expect(izenEguneraketarenEmaitza).to.be(true);
});
```

<br/><br/>

### Kodearen adibidea – Anti Erdua: probak ez dira independenteak eta aurrez konfiguratutako datuak egotea aintzat hartzen dute

```javascript
before(() => {
  //webguneak eta admnistrariak gehitu gure datu-basean. Non daude datuak? kanpoan. Kanpo jsonen edo migrazio frameworken batean
  await DB.GehituDatuakJsonIturritik('iturria.json');
});
it('Webgune baten izena eguneratzerakoan, baieztapen arrakastatsua izan', async () => {
  //Badakit 'portal' webgune izena existitzen dela, iturri fitxategietan ikusi dut
  const eguneratzekoWebgunea = await WebguneZerbitzua.berreskuratuWebgunearenIzena('Portal');
  const izenEguneraketarenEmaitza = await WebguneZerbitzua.izenaAldatu(eguneratzekoWebgunea, 'izenBerria');
  expect(izenEguneraketarenEmaitza).to.be(true);
});
it('Webgune izena erabiliaz eskaera egitean, webgune zuzena berreskuratu', async () => {
  //Badakit 'portal' webgune izena existitzen dela, iturri fitxategietan ikusi dut
  const egiaztatzekoWebgunea = await WebguneZerbitzua.berreskuratuWebguneaIzenarenBidez('Portal');
  expect(egiaztatzekoWebgunea.izena).to.be.equal('Portal'); //Huts egitea! Aurreko probak izena aldatu du :[
});
```
