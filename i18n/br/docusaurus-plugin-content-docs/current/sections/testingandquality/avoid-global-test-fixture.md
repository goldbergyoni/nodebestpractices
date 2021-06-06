# Evite dados fixos e sementes para teste, adicione os dados no teste

<br/><br/>

### Explicação em um Parágrafo

 Seguindo a regra de ouro de testes - manter os casos de teste totalmente simples, cada teste deve adicionar e agir em seu próprio conjunto de linhas de banco de dados para evitar o acoplamento e facilitar o entendimento do fluxo do teste. Na realidade, isso é frequentemente violado por testadores que semeiam o banco de dados com os dados antes de executar os testes (também conhecidos como 'dispositivo de teste') para melhorar o desempenho. Embora o desempenho seja de fato uma preocupação válida - ele pode ser mitigado (por exemplo, BD In-memory, consulte “Teste de Componente”), no entanto, a complexidade do teste é muito dolorosa e deve governar outras considerações. Na prática, faça com que cada caso de teste inclua explicitamente os registros de banco de dados necessários e atue apenas nesses registros. Se o desempenho se torna uma preocupação crítica - um compromisso equilibrado pode vir na forma de semear o único conjunto de testes que não estão alterando dados (por exemplo, consultas)

<br/><br/>

### Exemplo de código: cada teste atua em seu próprio conjunto de dados
```javascript
it("Ao atualizar o nome do site, obtenha confirmação de sucesso", async () => {
  //teste está adicionando novos registros e atuando apenas nos registros
  const siteUnderTest = await SiteService.addSite({
    name: "siteForUpdateTest"
  });
  const updateNameResult = await SiteService.changeName(siteUnderTest, "newName");
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### Exemplo de Código - Anti-Padrão: os testes não são independentes e assumem a existência de alguns dados pré-configurados
```javascript
before(() => {
  //adicionando sites e dados de administradores ao nosso banco de dados. Onde estão os dados? lado de fora. Em algum json externo ou estrutura de migração
  await DB.AddSeedDataFromJson('seed.json');
});
it("Ao atualizar o nome do site, obtenha confirmação de sucesso", async () => {
  //Eu sei que o nome do site "portal" existe - eu vi nos arquivos de semente
  const siteToUpdate = await SiteService.getSiteByName("Portal");
  const updateNameResult = await SiteService.changeName(siteToUpdate, "newName");
  expect(updateNameResult).to.be(true);
});
it("Ao consultar pelo nome do site, obtenha o site correto", async () => {
  //Eu sei que o nome do site "portal" existe - eu vi nos arquivos de semente
  const siteToCheck = await SiteService.getSiteByName("Portal");
  expect(siteToCheck.name).to.be.equal("Portal"); //Falha! O teste anterior muda o nome :[
});
```