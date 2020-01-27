# Избегайте глобальных тестовых приспособлений и параметров, добавляйте данные для каждого теста

<br/><br/>

### Объяснение в один абзац

Следуя золотому правилу тестирования - не усложняйте контрольные примеры, каждый тест должен добавлять и воздействовать на свой собственный набор строк БД, чтобы избежать связывания и легко рассуждать о ходе тестирования. В действительности это часто нарушается тестерами, которые загружают данные в БД перед запуском тестов (также называемых «тестовым креплением») для повышения производительности. Хотя производительность действительно является серьезной проблемой - ее можно уменьшить (например, в БД в памяти, см. Раздел «Тестирование компонентов»), однако сложность тестирования - это очень болезненное горе, которое должно руководствоваться другими соображениями. Практически, сделайте каждый тестовый пример явно добавляющим необходимые ему записи БД и действуйте только на эти записи. Если производительность становится критической проблемой - сбалансированный компромисс может прийти в виде заполнения единственного набора тестов, которые не изменяют данные (например, запросы)

<br/><br/>

### Пример кода: каждый тест действует на свой собственный набор данных
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

### Пример кода - Антипаттерн: тесты не являются независимыми и предполагают наличие некоторых предварительно настроенных данных
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