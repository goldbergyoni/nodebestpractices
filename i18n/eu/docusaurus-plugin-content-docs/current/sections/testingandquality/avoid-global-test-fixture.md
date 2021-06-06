# Saihestu datu globalak, gehitu datuak proba bakoitzeko

<br/><br/>

### Azalpena

Urrezko proba arauari jarraituz egin proben kasu sinpleak: proba bakoitzak bere datu baseko ilarak sortu eta erabili behar ditu menpekotasunak ekiditeko eta probaren fluxua ondo ulertzeko. Egia esan, garatzaileek askotan urratzen dute hori, datu baseak betez probak exekutatu aurretik (‘test instalazioa‘ bezala ere ezagutuak), errendimendua hobetzeko xedearekin. Errendimendua gai garrantzitsua izan arren, arindua izan daiteke (adibidez, begiratu Memoria Datu Baseak "Osagarrien probak" atalean), baina proben konplexutasuna da buruko min asko ematen dituen gai, kontutan hartu beharrekoa. Praktikan, sortu proben kasu bakoitza berariaz datu basean beharrezko informazioa gehitzeko eta jokatu bakarrik datu horiekin. Errendimendua arazo larria bihurtzen bada, adostasun orekatua aurki daiteke soilik datuak gehituko dituen proba bat idatziz eta ondoren hori bikoiztuz beste probentzat (adibidez queries)

<br/><br/>

### Kode adibidea: proba bakoitzak bere datu multzoarekin bakarrik egiten du lan

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

### Anti ereduaren kode adibidea: probak ez dira independenteak eta aurrez konfiguratutako datuak daudela suposatzen dute

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
