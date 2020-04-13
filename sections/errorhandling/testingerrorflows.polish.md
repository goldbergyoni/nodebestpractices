# Przepływy błędów testowych przy użyciu ulubionego środowiska testowego

### Wyjaśnienie jednym akapitem

Testowanie „szczęśliwych” ścieżek nie jest lepsze niż testowanie błędów. Dobry zasięg kodu testowego wymaga testowania wyjątkowych ścieżek. W przeciwnym razie nie ma zaufania, że wyjątki rzeczywiście są obsługiwane poprawnie. Każda platforma testowania jednostek, jak [Mocha](https://mochajs.org/) i [Chai](http://chaijs.com/), obsługuje testowanie wyjątków (przykłady kodu poniżej). Jeśli okaże się, że testowanie każdej funkcji wewnętrznej i wyjątku jest uciążliwe, możesz zadowolić się testowaniem tylko błędów HTTP interfejsu REST API.

### Przykład kodu: upewnienie się, że odpowiedni wyjątek jest zgłaszany za pomocą Mocha i Chai

<details>
<summary><strong>Javascript</strong></summary>

```javascript
describe('Facebook chat', () => {
  it('Notifies on new chat message', () => {
    const chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: 'Hi' })).to.throw(ConnectionError);
  });
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
describe('Facebook chat', () => {
  it('Notifies on new chat message', () => {
    const chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: 'Hi' })).to.throw(ConnectionError);
  });
});
```
</details>

### Przykład kodu: upewnienie się, że API zwraca prawidłowy kod błędu HTTP

<details>
<summary><strong>Javascript</strong></summary>

```javascript
it('Creates new Facebook group', () => {
  const invalidGroupInfo = {};
  return httpRequest({
    method: 'POST',
    uri: 'facebook.com/api/groups',
    resolveWithFullResponse: true,
    body: invalidGroupInfo,
    json: true
  }).then((response) => {
    expect.fail('if we were to execute the code in this block, no error was thrown in the operation above')
  }).catch((response) => {
    expect(400).to.equal(response.statusCode);
  });
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
it('Creates new Facebook group', async () => {
  let invalidGroupInfo = {};
  try {
    const response = await httpRequest({
      method: 'POST',
      uri: 'facebook.com/api/groups',
      resolveWithFullResponse: true,
      body: invalidGroupInfo,
      json: true
    })
    // if we were to execute the code in this block, no error was thrown in the operation above
    expect.fail('The request should have failed')
  } catch(response) {
    expect(400).to.equal(response.statusCode);
  }
});
```
</details>
