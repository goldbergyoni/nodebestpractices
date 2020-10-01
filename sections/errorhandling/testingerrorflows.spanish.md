# Testear flujos de error mediante tu framework favorito de testing

### Párrafo de explicación

Testear rutas de ejecución "felices" no es mejor que testear errores. Un buen coverage de código exige testear rutas de ejecución adversas. De lo contrario, no existe ninguna seguridad de que las excepciones se capturen y gestionen correctamente. Cada framework de testing unitario, como Mocha y Chai, admite testing de excepciones (códigos de ejemplo a continuación). Si te parece tedioso ir probando cada función y excepción internas, podrías quedarte solo con el testing de errores REST API HTTP.

### Código de ejemplo: asegurando que se dispara la excepción correcta usando Mocha & Chai

```javascript
describe("Facebook chat", () => {
  it("Notifies on new chat message", () => {
    var chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: "Hi" })).to.throw(ConnectionError);
  });
});

```

### Código de ejemplo: asegurando que la API devuelve el código de error HTTP correcto

```javascript
it("Creates new Facebook group", function (done) {
  var invalidGroupInfo = {};
  httpRequest({
    method: 'POST',
    uri: "facebook.com/api/groups",
    resolveWithFullResponse: true,
    body: invalidGroupInfo,
    json: true
  }).then((response) => {
    // if we were to execute the code in this block, no error was thrown in the operation above
  }).catch(function (response) {
    expect(400).to.equal(response.statusCode);
    done();
  });
});
```
