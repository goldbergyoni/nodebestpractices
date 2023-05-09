# Mock responses of external HTTP services

<br/><br/>

### One Paragraph Explainer

Isolate the component under test by intercepting any outgoing HTTP request and providing the desired response so the collaborator HTTP API won't get hit. Nock is a great tool for this mission as it provides a convenient syntax for defining external services behavior. Isolation is a must to prevent noise and slow performance but mostly to simulate various scenarios and responses - A good flight simulator is not about painting clear blue sky rather bringing safe storms and chaos. This is reinforced in a Microservice architecture where the focus should always be on a single component without involving the rest of the world. Though it's possible to simulate external service behavior using test doubles (mocking), it's preferable not to touch the deployed code and act on the network level to keep the tests pure black-box. The downside of isolation is not detecting when the collaborator component changes and not realizing misunderstandings between the two services - Make sure to compensate for this using a few contract or E2E tests.


<br/><br/>

### Code Example – a simple mock using nock

```javascript
// Intercept requests for internal or 3rd party APIs and return a predefined response
beforeEach(() => {
  nock("http://localhost/user/").get(`/1`).reply(200, {
    id: 1,
    name: "John",
  });
});
```

### Code Example – simulating an important scenario inside the test

```javascript
// Using an uncommon user id (7) and create a compatible interceptor
test("When the user does not exist, return http 404", async () => {
  //Arrange
  const orderToAdd = {
    userId: 7,
    productId: 2,
    mode: "draft",
  };

  nock("http://localhost/user/").get(`/7`).reply(404, {
    message: "User does not exist",
    code: "nonExisting",
  });

  //Act
  const orderAddResult = await axiosAPIClient.post("/order", orderToAdd);

  //Assert
  expect(orderAddResult.status).toBe(404);
});
```

### Code Example – preventing requests from going outside to the real-world

```javascript
beforeAll(async () => {
  // ...
  // ️️️Ensure that this component is isolated by preventing unknown calls
  nock.disableNetConnect();
  // Enable only requests for the API under test
  nock.enableNetConnect("127.0.0.1");
});
```

### Code Example – ensuring that the outgoing request schema is correct

```javascript
// ️️️Assert that the app called the mailer service appropriately with the right input
test("When order failed, send mail to admin", async () => {
  //Arrange
  // ...
  let emailPayload;
  nock("http://mailer.com")
    .post("/send", (payload) => ((emailPayload = payload), true))
    .reply(202);
  const orderToAdd = {
    userId: 1,
    productId: 2,
    mode: "approved",
  };

  //Act
  await axiosAPIClient.post("/order", orderToAdd);

  // ️️️Assert
  expect(emailPayload).toMatchObject({
    subject: expect.any(String),
    body: expect.any(String),
    recipientAddress: expect.stringMatching(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  });
});
```
