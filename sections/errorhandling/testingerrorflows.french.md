# Testez les flux d'erreurs en utilisant votre framework de test préféré

### Un paragraphe d'explication

Tester les chemins « du bonheur » n’est pas mieux que de tester les échecs. Une bonne couverture du code de test exige de tester des chemins inhabituels. Sinon, il n'est pas certain que les exceptions soient effectivement gérées correctement. Chaque framework de tests unitaires, comme [Mocha](https://mochajs.org/) et [Chai](http://chaijs.com/), prend en charge les tests d'exception (exemples de code ci-dessous). Si vous trouvez fastidieux de tester chaque fonction interne et chaque exception, vous pouvez vous contenter de tester uniquement les erreurs HTTP de l'API REST.

### Exemple de code : s'assurer que la bonne exception est levée à l'aide de Mocha & Chai

<details>
<summary><strong>Javascript</strong></summary>

```javascript
describe('Facebook chat', () => {
  it('Avertit en cas de nouveau message dans la discussion', () => {
    const chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: 'Salut' })).to.throw(ConnectionError);
  });
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
describe('Facebook chat', () => {
  it('Avertit en cas de nouveau message dans la discussion', () => {
    const chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: 'Salut' })).to.throw(ConnectionError);
  });
});
```
</details>

### Exemple de code: s'assurer que l'API renvoie le bon code erreur HTTP

<details>
<summary><strong>Javascript</strong></summary>

```javascript
it('Crée un nouveau groupe Facebook', () => {
  const invalidGroupInfo = {};
  return httpRequest({
    method: 'POST',
    uri: 'facebook.com/api/groups',
    resolveWithFullResponse: true,
    body: invalidGroupInfo,
    json: true
  }).then((response) => {
    expect.fail('si nous devions exécuter le code dans ce bloc, aucune erreur n\'a été levée dans l\'opération ci-dessus')
  }).catch((response) => {
    expect(400).to.equal(response.statusCode);
  });
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
it('Crée un nouveau groupe Facebook', async () => {
  let invalidGroupInfo = {};
  try {
    const response = await httpRequest({
      method: 'POST',
      uri: 'facebook.com/api/groups',
      resolveWithFullResponse: true,
      body: invalidGroupInfo,
      json: true
    })
    // si nous devions exécuter le code dans ce bloc, aucune erreur n'a été levée dans l'opération ci-dessus
    expect.fail('La requête aurait dû échouer')
  } catch(response) {
    expect(400).to.equal(response.statusCode);
  }
});
```
</details>