# Тестування потоків помилок за допомогою улюбленого фреймворку для тестування

### Пояснення за один абзац

Тестування "щасливих" шляхів не краще, ніж тестування випадків збоїв. Гарне покриття коду тестами вимагає тестування виняткових ситуацій. Інакше, немає впевненості, що виключення дійсно оброблені належним чином. Кожен фреймворк для модульного тестування, як-от [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/), підтримує тестування виключень (приклади коду нижче). Якщо вам здається нудним тестувати кожну внутрішню функцію та виключення, ви можете обмежитись тестуванням лише HTTP помилок REST API.

### Приклад коду: забезпечення викидання правильного винятку за допомогою Mocha & Chai

<details>
<summary><strong>Javascript</strong></summary>

```javascript
describe("Facebook chat", () => {
  it("Notifies on new chat message", () => {
    const chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: "Hi" })).to.throw(ConnectionError);
  });
});
```

</details>

### Приклад коду: перевірка того, що API повертає правильний HTTP код помилки та коректно логує

<details>
<summary><strong>Javascript</strong></summary>

```javascript
test("When exception is throw during request, Then logger reports the mandatory fields", async () => {
  //Arrange
  const orderToAdd = {
    userId: 1,
    productId: 2,
  };

  sinon
    .stub(OrderRepository.prototype, "addOrder")
    .rejects(new AppError("saving-failed", "Order could not be saved", 500));
  const loggerDouble = sinon.stub(logger, "error");

  //Act
  const receivedResponse = await axiosAPIClient.post("/order", orderToAdd);

  //Assert
  expect(receivedResponse.status).toBe(500);
  expect(loggerDouble.lastCall.firstArg).toMatchObject({
    name: "saving-failed",
    status: 500,
    stack: expect.any(String),
    message: expect.any(String),
  });
});
```

</details>

### Приклад коду: перевірка того, що необроблені виключення також обробляються

<details>
<summary><strong>Javascript</strong></summary>

```javascript
test("When unhandled exception is throw, Then the logger reports correctly", async () => {
  //Arrange
  await api.startWebServer();
  const loggerDouble = sinon.stub(logger, "error");
  const errorToThrow = new Error("An error that wont be caught 😳");

  //Act
  process.emit("uncaughtException", errorToThrow);

  // Assert
  expect(loggerDouble.calledWith(errorToThrow));
});
```

</details>
