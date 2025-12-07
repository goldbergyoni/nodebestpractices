# 安全でないリダイレクトを防ぐ

### 一段落説明

Node.js、そして Express でリダイレクトを実装する際は、サーバーサイドで入力検証を行うことが重要です。
もし攻撃者が、外部のユーザーから与えられた入力を検証していないことを発見した場合、特別に作成されたリンクをフォーラムやソーシャルメディア、その他のパブリックな場所に投稿してユーザーにクリックさせることで、この脆弱性を悪用する恐れがあります。

例: ユーザー入力を利用した、安全でない express リダイレクト
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

安全でないリダイレクトを避けるために推奨される改善方法は、ユーザー入力を信頼しないということです。ユーザー入力を利用する必要がある場合には、脆弱性を晒すことを避けるために、安全なリダイレクトホワイトリストを利用することができます。

例: 安全なリダイレクトホワイトリスト
```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // url がシングルスラッシュで始めっているかチェックする
  if (url.match(/^\/(?!\/)/)) { 
    // 正しくドメインを付加する
    return 'https://example.com' + url; 
  } 
    // または、ホワイトリストでチェックする
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```


### 他のブロガーが言っていること

[NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db) のブログより:
> 幸いなことに、この脆弱性に対する緩和策は非常にシンプルです - 検証されていないユーザー入力を、リダイレクトのための基準として扱わないことです。

[Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/) のブログより:
> しかし、もしサーバーサイドのリダイレクトロジックが url パラメータを入力するデータを検証しない場合、ユーザーはまるであなたのサイトのように見える（examp1e.com）にたどり着き、犯罪者ハッカーの要求を満たす結果となりかねません。


