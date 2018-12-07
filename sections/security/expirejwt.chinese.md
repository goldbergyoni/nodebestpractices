# 支持黑名单的JWTs

### 一段解释

按照设计, JWTs(JSON Web Tokens)是完全无状态的, 因此, 一旦有效令牌由颁发者签署, 应用程序就可以验证该令牌是否真实。这导致了安全的问题, 这里，泄漏的令牌仍可使用且无法撤销, 因为只要问题令牌提供的签名与应用程序所期望的相匹配, 签名就仍然有效。
因此, 在使用JWT身份验证时, 应用程序应管理过期或已吊销令牌的黑名单, 以便在需要吊销令牌的情况下保留用户的安全性。

### `express-jwt-blacklist` 示例

在Node.js项目中，使用`express-jwt`，并运行`express-jwt-blacklist`的例子

```javascript
const jwt = require('express-jwt');
const blacklist = require('express-jwt-blacklist');
 
app.use(jwt({
  secret: 'my-secret',
  isRevoked: blacklist.isRevoked
}));
 
app.get('/logout', function (req, res) {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

### 其他博客作者说什么

摘自博客[Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/):
> ...在JWT之上添加一个吊销层(revocation layer), 即使它意味着失去其无状态性质。
