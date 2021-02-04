# AAA パターンを用いてテストを構成する

<br/><br/>

### 一段落説明

テストにおける最大の課題は、私たちの頭の容量不足です ー 既存のプロダクションコードで、私たちはすでに手一杯なのです。そのため、テストコードは非常にシンプルで、理解しやすいものでなければなりません。テストケースを読んでいるときは、命令的なコード（ループ、継承）を読むような感じではなく、むしろ HTML のように、宣言的なコードを読むような感覚を持つべきです。これを実現するには、コードを読む人がテストの意図を楽に汲み取れるように、AAA という慣習を守ってください。このパターンに似た形式として、XUnit の 'Setup, Excercise, Verify, Teardown' のようなものがあります。3 つの A は次の通りです:

1 つ目のA - Arrange（アレンジ）: テストがシミュレートするシナリオにシステムの環境を設定するための、すべてのセットアップコードです。これには、テストコンストラクタ対象ユニットのインスタンス化、DB レコードの追加、オブジェクトのモック／スタブ、その他準備のためのコードが含まれるかもしれません。

2 つ目のA - Act（アクト）: テスト対象のユニットを実行します。通常、1 行のコードです。

3 つ目のA - Assert（アサート）: 得た値が期待する条件を満たすことを確認します。通常、1 行のコードです。

<br/><br/>

### コード例: AAA パターンで構成されたテスト
```javascript
describe.skip('Customer classifier', () => {
    test('When customer spent more than 500$, should be classified as premium', () => {
        //Arrange
        const customerToClassify = {spent:505, joined: new Date(), id:1}
        const DBStub = sinon.stub(dataAccess, 'getCustomer')
            .reply({id:1, classification: 'regular'});

        //Act
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

        //Assert
        expect(receivedClassification).toMatch('premium');
    });
});
```

<br/><br/>

### コード例 – アンチパターン: 分割無し、一塊の、解釈の難しいコード
```javascript
test('Should be classified as premium', () => {
        const customerToClassify = {spent:505, joined: new Date(), id:1}
        const DBStub = sinon.stub(dataAccess, 'getCustomer')
            .reply({id:1, classification: 'regular'});
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);
        expect(receivedClassification).toMatch('premium');
    });
```

<br/><br/>

###  "Include 6 parts in each test"（各テストに 6 つの要素を含めましょう）

 [Yoni Goldberg によるブログ "30 Node.js testing best practices"](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![テストレポートの例](/assets/images/6-parts-in-test.jpg "テストレポートの例")

<br/><br/>

### "It is important for the test reader to be able to quickly determine what behavior the test is verifying"（テストコード読者にとって重要なことは、テストがどんな挙動を検証しているのかすぐに判断できることです）
書籍 [XUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html) より:

> テストコード読者にとって重要なことは、テストがどんな挙動を検証しているのかすぐに判断できることです。様々なテスト対象システム（the system under unit, SUT）の挙動が呼び出されると、非常に複雑になります。あるものは SUT のプレテスト状態（フィクスチャー）をセットアップし、またあるものは SUT を動かし、さらには SUT のポストテスト状態を検証したりする状況です。4 つのフェーズを明確に識別することで、テストの意図がよりわかりやすくなります。
