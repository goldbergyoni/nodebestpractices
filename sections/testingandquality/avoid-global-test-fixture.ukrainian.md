# Уникайте глобальних тестових фікстур і сідів, додавайте дані для кожного тесту

<br/><br/>

### Пояснення за один абзац

 Дотримуючись золотого правила тестування — тримайте тестові випадки максимально простими, кожен тест повинен додавати і працювати зі своїм власним набором рядків БД, щоб запобігти зв'язуванню і легко міркувати про потік тесту. Насправді це часто порушується тестувальниками, які заповнюють БД даними перед запуском тестів (також відомо як 'тестова фікстура') заради покращення продуктивності. Хоча продуктивність дійсно є важливим питанням — її можна пом'якшити (наприклад, In-memory БД, див. пункт "Компонентне тестування"), однак складність тестів є набагато болючішим горем, яке повинно керувати іншими міркуваннями. Практично кажучи, зробіть так, щоб кожен тестовий випадок явно додавав записи БД, які йому потрібні, і працював лише з цими записами. Якщо продуктивність стає критичною проблемою — збалансований компроміс може бути у формі заповнення лише набору тестів, які не мутують дані (наприклад, запити)

<br/><br/>

### Приклад коду: кожен тест працює зі своїм власним набором даних
```javascript
it('When updating site name, get successful confirmation', async () => {
  //Arrange - тест додає свіжі нові записи і працює лише з цими записами
  const siteUnderTest = await SiteService.addSite({
    name: 'siteForUpdateTest'
  });

  //Act
  const updateNameResult = await SiteService.changeName(siteUnderTest, 'newName');

  //Assert
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### Приклад коду – Антипатерн: тести не є незалежними і припускають існування деяких попередньо налаштованих даних
```javascript
before(() => {
  //Arrange - додаємо дані сайтів і адміністраторів до нашої БД. Де дані? ззовні. У якомусь зовнішньому json або фреймворку міграції
  await DB.AddSeedDataFromJson('seed.json');
});

it('When updating site name, get successful confirmation', async () => {
  //Arrange - я знаю, що сайт з назвою 'portal' існує - я бачив це в seed-файлах
  const siteToUpdate = await SiteService.getSiteByName('Portal');

  //Act
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');

  //Assert
  expect(updateNameResult).to.be(true);
});

it('When querying by site name, get the right site', async () => {
  //Act - я знаю, що сайт з назвою 'portal' існує - я бачив це в seed-файлах
  const siteToCheck = await SiteService.getSiteByName('Portal');

  //Assert
  expect(siteToCheck.name).to.be.equal('Portal'); //Помилка! Попередній тест змінив назву :[
});
```

