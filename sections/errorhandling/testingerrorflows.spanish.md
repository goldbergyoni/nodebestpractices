# Prueba flujos de error mediante tu framework favorito de testing

### Párrafo de explicación

Probar rutas de ejecución "felices" no es mejor que probar errores. Una buena cobertura de código exige testear rutas de ejecución adversas. De lo contrario, no existe ninguna seguridad de que las excepciones se capturen y gestionen correctamente. Cada framework de pruebas unitario, como [Mocha](https://mochajs.org/) y [Chai](http://chaijs.com/), admite pruebas de excepciones (códigos de ejemplo a continuación). Si te parece tedioso ir probando cada función y excepción internas, podrías quedarte solo con las pruebas de errores REST API HTTP.

### Código de ejemplo: asegurando que se dispara la excepción correcta usando Mocha & Chai

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

### Código de ejemplo: asegurando que la API devuelve el código de error HTTP correcto

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
    // Su se ejecutará el código en este bloque, no se arrojaría un error en la operación de arriba
    expect.fail('The request should have failed')
  } catch(response) {
    expect(400).to.equal(response.statusCode);
  }
});
```
</details>