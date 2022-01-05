# Test error flows using your favorite test framework

### One Paragraph Explainer

행복한 테스트는 실패하는 것 밖에 없다. 테스트 범위의 지향점은 예외적인 방법들을 테스트는 하는 것이다. 그러나 예외들이 진짜로 적절하게 처리되는지는 확신할 수 없다. [Mocha](https://mochajs.org/)나 [Chai](http://chaijs.com/)같은 테스트 프레임워크들은 아래 예시와 같은 테스트 예외들을 제공한다. 만약 모든 내장 함수를 테스트하고 예외처리하는 것이 지루한 작업이라는 것을 안다면, 손쉽게 api에러만을 테스트하는 데에 쉽게 적응할 수 있을 것이다. 

### Code example: ensuring the right exception is thrown using Mocha & Chai

```javascript
// 보통 node내장 모듈인 assert모듈과 함께 사용한다.(assert모듈: 검사시 위배될 경우 프로그램 종료)
// describe: 테스트의 범위, it: 테스트의 단위
describe("테스트 이름: Facebook chat", () => {
  it("테스트 케이스 이름: Notifies on new chat message", () => {
    var chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: "Hi" })).to.throw(ConnectionError)
  });
});

```

### Code example: ensuring API returns the right HTTP error code

```javascript
it("테스트 케이스 이름: Creates new Facebook group", function (done) {// param{done} 테스트 케이스 종료시 호출됨. 비동기 테스트 가능
  // 틀린 request를 보냄.
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
