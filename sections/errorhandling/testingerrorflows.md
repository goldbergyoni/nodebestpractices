# Test error flows using your favorite test framework

### One Paragraph Explainer

Testing ‘happy’ paths is no better than testing failures. Good testing code coverage demands to test exceptional paths. Otherwise, there is no trust that exceptions are indeed handled correctly. Every unit testing framework, like [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/), supports exception testing (code examples below). If you find it tedious to test every inner function and exception you may settle with testing only REST API HTTP errors.

### Code example: ensuring the right exception is thrown using Mocha & Chai

```javascript
describe("Facebook chat", () => {
  it("Notifies on new chat message", () => {
    var chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: "Hi" })).to.throw(ConnectionError);
  });
});

```

### Code example: ensuring API returns the right HTTP error code

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
