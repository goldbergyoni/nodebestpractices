# O/Rマッパ/ODM ライブラリを使用してクエリインジェクション脆弱性を防ぐ

### 一段落説明

データベースロジックを作成している際は、潜在的な攻撃者に悪用される可能性のある、偶発的なインジェクションの脆弱性に注意しなければなりません。データベースクエリを手動で書いたり、ユーザーリクエストに対してデータ検証を含まないことは、このような脆弱性をもたらす最も簡単な方法です。しかしながら、この状況は入力を検証したり、データベースのオペレーションを処理してくれる適切なパッケージを利用することで、容易に防ぐことができます。多くの場合、[joi](https://github.com/hapijs/joi) や [yup](https://github.com/jquense/yup) といった検証ライブラリや、下記のリストにあるような O/Rマッパ/ODM を利用することで、システムは安全で確かなものになります。これによって、検証されたデータは適切にエスケープされていて、望まない攻撃を受けることなく処理されるということを明確にするために、パラメータ化されたクエリとデータバインディングの使用を保証します。これらのライブラリの多くは、複雑なクエリを自ら書く必要を無くすこと、言語ベースの型システム用の型を提供すること、データ型を希望の形式に変換してくれることなど、多くの便利な機能を実現し、開発者としての生活を楽にしてくれるでしょう。まとめると、__必ず__、 保存しようとしているデータを検証し、危険な仕事を処理してくれる適切なデータマッピングライブラリを使用してください。

### ライブラリ

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### 例 - NoSQL クエリインジェクション

```javascript
// このクエリの
db.balances.find({
  active: true,
  $where: (obj) => obj.credits - obj.debits < userInput
});

// userInput が下記のとき、
"(function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"

// サービス停止を引き起こします

// このユーザー入力に他のロジックが注入された場合、センシティブなデータを晒してしまうことになるかもしれません
```

### 例 - SQL インジェクション

```sql
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### その他のリソース

🔗 [OWASP SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)

🔗 [Testing for NoSQL Injection](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### 他のブロガーが言っていること

[OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection) より、NoSQL インジェクションのリスク

> NoSQL インジェクション攻撃は、従来の SQL インジェクションとは異なる領域で実行される可能性があります。SQL インジェクションはデータベースエンジン内部で実行されるのに対し、NoSQL インジェクションは、使用される NoSQL API とデータモデルによっては、アプリケーションレイヤーとデータベースレイヤーの間で実行されるかもしれません。典型的には、NoSQL インジェクション攻撃は、攻撃文字列がパース、評価され、そして NoSQL API の呼び出しに結合された際に実行されます。
