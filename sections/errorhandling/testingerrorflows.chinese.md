# 使用您喜欢的测试框架测试错误流


### 一段解释

测试‘正确’路径并不比测试失败更好。良好的测试代码覆盖率要求测试异常路径。否则，异常确实被处理正确是不可信的。每个单元测试框架，如[Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/)，都支持异常测试（请看下面的代码示例）。如果您觉得测试每个内部函数和异常都很乏味，那么您可以只测试REST API HTTP错误。



### 代码示例: 使用 Mocha & Chai 确保正确的异常被抛出

```javascript
describe("Facebook chat", () => {
 it("Notifies on new chat message", () => {
 var chatService = new chatService();
 chatService.participants = getDisconnectedParticipants();
 expect(chatService.sendMessage.bind({message: "Hi"})).to.throw(ConnectionError);
 });
});

```

### 代码示例: 确保 API 返回正确的 HTTP 错误码

```javascript
it("Creates new Facebook group", function (done) {
 var invalidGroupInfo = {};
 httpRequest({method: 'POST', uri: "facebook.com/api/groups", resolveWithFullResponse: true, body: invalidGroupInfo, json: true
 }).then((response) => {
 //oh no if we reached here than no exception was thrown
 }).catch(function (response) {
 expect(400).to.equal(response.statusCode);
 done();
 });
 });

```