# 各テスト名に 3 つの要素を含む

<br/><br/>

### 一段落説明

テストレポートは、コードに詳しくない人々のために、現在のアプリケーションの修正が要件を満たしているかどうか伝えるべきです: テスター、デプロイを担当している DevOps エンジニア、2 年後の未来のあなた自身といった人々のため、です。これは、テスト名が要件レベルを表し、次の 3 つの要素を含む場合に最もよく達成されます:

(1) 何がテストされているのか？ 例: ProductsService.addNewProduct メソッド

(2) どのような状況、シナリオ下なのか？ 例: price という引数がメソッドに渡されていない

(3) 期待する結果は何か？ 例: 新しい製品（new product）が承認されない

<br/><br/>

### コード例: 3 つの要素を含むテスト名
```javascript
//1. テスト対象のユニット
describe('Products Service', () => {
  describe('Add new product', () => {
    //2. シナリオ、そして 3. 期待する結果
    it('When no price is specified, then the product status is pending approval', () => {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

### コード例 – アンチパターン: 意図を理解するためにコード全体を読まなければならない
```javascript
describe('Products Service', () => {
  describe('Add new product', () => {
    it('Should return the right status', () => {
      // えーと、このテストは何をチェックしているのでしょうか？シナリオと期待する結果は何でしょうか？
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

### "Doing It Right Example: The test report resembles the requirements document"（適切な例: テストレポートは要件ドキュメントに似ています）

 [Yoni Goldberg によるブログ記事 "30 Node.js testing best practices"](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![テストレポートの例](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/test-report-like-requirements.jpeg "テストレポートの例")

<br/><br/>