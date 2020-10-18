# お気に入りのテストフレームワークを使用してエラーフローをテストする

### 一段落説明

「ハッピー」パスをテストすることは、失敗をテストすることも同然です。良いテストコードカバレッジは、例外パスをテストすることを要求します。さもなければ、例外が実際に正しく処理されるという信用はありません。[Mocha](https://mochajs.org/) や [Chai](http://chaijs.com/) といったすべてのユニットテストフレームワークは、例外テストをサポートしています（下記のコード例参照）。もしすべての内部関数や例外をテストすることが面倒だと感じたら、REST API の HTTP エラーのみをテストすることに落ち着くかもしれません。

### コード例: Mocha と Chai を利用して正しい例外が投げられることを確認する

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

### コード例: API が正しい HTTP エラーコードを返すことを確認する

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
    // このブロックで下記コードを実行した場合、上記オペレーションではエラーが発生しなかったことを意味します
    expect.fail('The request should have failed')
  } catch(response) {
    expect(400).to.equal(response.statusCode);
  }
});
```
</details>