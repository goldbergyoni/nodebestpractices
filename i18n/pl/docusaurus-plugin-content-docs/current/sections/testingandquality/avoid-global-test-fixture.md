# Unikaj globalnych test fixtures i seeds, dodawaj dane per-test

<br/><br/>

### Wyjaśnienie jednym akapitem

Kierując się złotą zasadą testowania - spraw, aby przypadki testowe były wyjątkowo proste, każdy test powinien dodawać i działać na swoim własnym zestawie wierszy BD, aby zapobiec sprzężeniu i łatwo uzasadnić przebieg testu. W rzeczywistości jest to często naruszane przez testerów, którzy zapełniają bazę danych danymi przed uruchomieniem testów (znanych również jako „urządzenie testowe”) w celu poprawy wydajności. Chociaż wydajność jest istotnym problemem - można ją złagodzić (np. BD w pamięci, patrz punkt „Testowanie komponentów”), jednak złożoność testu jest bardzo bolesnym smutkiem, który powinien rządzić innymi rozważaniami. Praktycznie spraw, aby każdy przypadek testowy wyraźnie dodał potrzebne rekordy BD i działał tylko na tych rekordach. Jeśli wydajność stanie się kluczowym problemem - zrównoważony kompromis może przyjść w postaci inicjowania jedynego zestawu testów, które nie powodują mutacji danych (np. zapytania)

<br/><br/>

### Przykład kodu: każdy test działa na własnym zestawie danych
```javascript
it('When updating site name, get successful confirmation', async () => {
  //test is adding a fresh new records and acting on the records only
  const siteUnderTest = await SiteService.addSite({
    name: 'siteForUpdateTest'
  });
  const updateNameResult = await SiteService.changeName(siteUnderTest, 'newName');
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### Przykład kodu - Antywzorzec: testy nie są niezależne i zakładają istnienie niektórych wstępnie skonfigurowanych danych
```javascript
before(() => {
  //adding sites and admins data to our DB. Where is the data? outside. At some external json or migration framework
  await DB.AddSeedDataFromJson('seed.json');
});
it('When updating site name, get successful confirmation', async () => {
  //I know that site name 'portal' exists - I saw it in the seed files
  const siteToUpdate = await SiteService.getSiteByName('Portal');
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');
  expect(updateNameResult).to.be(true);
});
it('When querying by site name, get the right site', async () => {
  //I know that site name 'portal' exists - I saw it in the seed files
  const siteToCheck = await SiteService.getSiteByName('Portal');
  expect(siteToCheck.name).to.be.equal('Portal'); //Failure! The previous test change the name :[
});
```
