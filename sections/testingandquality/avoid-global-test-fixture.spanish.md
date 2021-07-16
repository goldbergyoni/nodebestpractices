# Evita accesorios globales y semillas, agrega data por-prueba

<br/><br/>

### Párrafo de explicación

Yendo por la regla de oro de pruebas - mantén los casos de pruebas simples, cada prueba debe agregar y actuar por su cuenta en su propio conjunto de columnas de la DB para prevenir acoplamiento y razonar fácilmente el flujo de pruebas. En realidad, esto suele ser violado por testers los cuales implantan a la DB con datos antes de correr las pruebas (también conocido como ‘test fixture’(‘accesorio de pruebas’)) por el bien de mejoras de rendimiento. Mientras el rendimiento es en efecto una preocupación válida - puede ser mitigado (Por ejemplo. DB en memoria, véase el punto "pruebas de componentes"), sin embargo, la complejidad de las pruebas es un dolor muy fuerte que debería dominar sobre otras consideraciones. Prácticamente, haz cada caso de prueba agregue los registros que necesita en la DB de manera explícita y actúa solo en esos registros. Si el rendimiento se convierte en una preocupación crítica - un compromiso balanceado puede llegar a ser el crear el único conjunto de pruebas que no están mutando datos (Por ejemplo queries)

<br/><br/>

### Código de ejemplo: cada prueba actúa en su propio conjunto de datos
```javascript
it('When updating site name, get successful confirmation', async () => {
  //Ordena - la prueba está añadiendo un nuevo conjunto de registros y actuando solo en esos registros
  const siteUnderTest = await SiteService.addSite({
    name: 'siteForUpdateTest'
  });

  //Actúa
  const updateNameResult = await SiteService.changeName(siteUnderTest, 'newName');

  //Verifica
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### Código de ejemplo anti-patrón: las pruebas no son independientes y asumen la existencia de ciertos datos pre-configurados
```javascript
before(() => {
  //Ordena - agregando datos de sitios y administradores a nuestra DB. ¿Dónde están estos datos? afuera. En un json externo o framework de migración
  await DB.AddSeedDataFromJson('seed.json');
});

it('When updating site name, get successful confirmation', async () => {
  //Arrange - I know that site name 'portal' exists - I saw it in the seed files
  const siteToUpdate = await SiteService.getSiteByName('Portal');

  //Actúa
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');

  //Verifica
  expect(updateNameResult).to.be(true);
});

it('When querying by site name, get the right site', async () => {
  //Actúe - Se que el sitio con el nombre 'portal' existe - Lo ví en los archivos semilla
  const siteToCheck = await SiteService.getSiteByName('Portal');

  //Verifica
  expect(siteToCheck.name).to.be.equal('Portal'); //¡Falló! la prueba anterior cambio el nombre
});
```