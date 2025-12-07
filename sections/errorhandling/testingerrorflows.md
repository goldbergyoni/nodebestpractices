# Test error flows using your favorite test framework

### One Paragraph Explainer

Testing ‘happy’ paths is no better than testing failures. Good testing code coverage demands to test exceptional paths. Otherwise, there is no trust that exceptions are indeed handled correctly. Every unit testing framework, like [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/), supports exception testing (code examples below). If you find it tedious to test every inner function and exception you may settle with testing only REST API HTTP errors.

### Code example: ensuring the right exception is thrown using Mocha & Chai

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

### Code example: ensuring API returns the right HTTP error code and log properly

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

### Code example: ensuring that are uncaught exceptions are handled as well

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
