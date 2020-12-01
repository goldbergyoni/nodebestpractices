# JWT の ブラックリスト化をサポートする

### 一段落説明

設計上、JWTs (JSON Web Tokens) は完全にステートレスであるため、一度有効なトークンが発行者によって署名されると、恐らくそのトークンはアプリケーションによって本物であると判断されるでしょう。このことが引き起こす問題として、発行者によって施された署名がアプリケーションの要求と一致する限り署名は有効であると判断されるため、漏洩したトークンが使用され、そのトークンを無効にすることができないというセキュリティ上の懸念があります。
そのため、JWT 認証を利用する場合は、トークンが無効化される必要があるケースにおいてユーザーのセキュリティを維持するために、アプリケーションは期限切れや無効なトークンのブラックリストを管理する必要があります。

### `express-jwt-blacklist` の例

`express-jwt` を利用した Node.js プロジェクトで、`express-jwt-blacklist` を実行する例です。ここで、`express-jwt-blacklist` のデフォルトストア設定である（インメモリ）キャッシュを利用せず、複数の Node.js プロセスをまたいでトークンを無効化できるように、Redis のような外部のストアを利用することが重要であることに注意してください。

```javascript
const jwt = require('express-jwt');
const blacklist = require('express-jwt-blacklist');

blacklist.configure({
  tokenId: 'jti',
  strict: true,
  store: {
    type: 'memcached',
    host: '127.0.0.1',
    port: 11211,
    keyPrefix: 'mywebapp:',
    options: {
      timeout: 1000
    }
  }
});

app.use(jwt({
  secret: 'my-secret',
  isRevoked: blacklist.isRevoked
}));

app.get('/logout', (req, res) => {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

### 他のブロガーが言っていること

[Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/) のブログより:
> ...たとえそれがステートレス性を損なったとしても、JTW 上に無効化レイヤを追加してください。
