# Тестируйте потоки ошибок с использованием вашей любимой тестовой среды

### Объяснение в один абзац

Тестирование "счастливых" путей не лучше, чем тестирование неудач. Хорошее тестирование покрытия кода требует тестирования исключительных путей. В противном случае, нет уверенности, что исключения действительно обрабатываются правильно. Каждая инфраструктура модульного тестирования, например [Mocha](https://mochajs.org/) и [Chai](http://chaijs.com/), поддерживает тестирование исключений (примеры кода ниже). Если вам кажется утомительным тестировать каждую внутреннюю функцию и исключение, вы можете согласиться с тестированием только ошибок HTTP REST API.

### Пример кода: обеспечение правильного исключения с помощью Mocha & Chai

```javascript
describe("Facebook chat", () => {
  it("Notifies on new chat message", () => {
    var chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: "Hi" })).to.throw(ConnectionError);
  });
});

```

### Пример кода: застрахованное API возвращает правильный код ошибки HTTP

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
