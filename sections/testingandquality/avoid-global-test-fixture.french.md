# Évitez les tests globaux, ajoutez des données pour chaque test

<br/><br/>

### Un paragraphe d'explication

 En suivant la règle d'or des tests - gardez d'une simplicité absolue les cas de test, chaque test doit ajouter et agir sur son propre ensemble d'enregistrement de la base de données pour éviter le chevauchement des tests et expliquer facilement le déroulement du test. En réalité, ceci est souvent transgressé par les testeurs qui inondent la base de données avant de lancer les tests (aussi connu sous le nom de « dispositif de test ») dans le but d'améliorer les performances. Bien que la performance soit effectivement une préoccupation valable - elle peut être atténuée (par exemple la base de données en mémoire, voir le point « Tests des composants »), la complexité des tests est toutefois un sujet très douloureux qui devrait dominer les autres préoccupations. En pratique, faites en sorte que chaque scénario de test ajoute explicitement les enregistrements à la base de données dont il a besoin et n'agisse que sur ces enregistrements. Si la performance devient une préoccupation critique - un compromis équilibré pourrait prendre la forme d'un remplissage d'une seule suite de tests qui ne mutent pas les données (par exemple, les requêtes).

<br/><br/>

### Exemple de code : chaque test agit sur son propre ensemble de données
```javascript
it('Lors de la mise à jour du nom du site, obtenez une confirmation réussie', async () => {
  // Arrange (Préparer) - le test ajoute de nouveaux enregistrements et agit uniquement sur les enregistrements
  const siteUnderTest = await SiteService.addSite({
    name: 'siteForUpdateTest'
  });

  // Act (Agir)
  const updateNameResult = await SiteService.changeName(siteUnderTest, 'newName');

  // Assert (Vérifier)
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### Contre exemple de code : les tests ne sont pas indépendants et supposent l'existence de certaines données préconfigurées
```javascript
before(() => {
  // ajouter des données de sites et d'administrateurs à notre base de données. Où sont les données ? à l'extérieur. Sur un json externe ou un framework de migration
  await DB.AddSeedDataFromJson('seed.json');
});

it('Lors de la mise à jour du nom du site, obtenez une confirmation réussie', async () => {
  // Arrange (Préparer) - Je sais que le nom du site « Portal » existe - je l'ai vu dans les fichiers de remplissage
  const siteToUpdate = await SiteService.getSiteByName('Portal');

  // Act (Agir)
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');

  // Assert (Vérifier)
  expect(updateNameResult).to.be(true);
});

it('Lorsque vous interrogez par le nom du site, obtenez le bon site', async () => {
  // Act (Agir) - Je sais que le nom de site « Portal » existe - je l'ai vu dans les fichiers de remplissage
  const siteToCheck = await SiteService.getSiteByName('Portal');

  // Assert (Vérifier)
  expect(siteToCheck.name).to.be.equal('Portal'); // Échec ! Le test précédent change le nom :[
});
```