# 对express登录路由执行速率限制

### 一段解释

让专用路由, 如`/login`和`/admin`暴露在没有访问速率限制的情况下, 会使应用程序面临密码字典暴力攻击的风险。使用策略限制对于此类路由的请求可以防止破解操作的成功，比如可以通过根据请求属性（如ip）或正文参数（如用户名/电子邮件地址) 限制允许尝试的次数。

应在生产环境中使用内存型存储（如redis或mongodb），以强制跨应用集群实施限制共享。

### 代码示例: 使用express-brute

```javascript
const ExpressBrute = require('express-brute');
const RedisStore = require('express-brute-redis');

const redisStore = new RedisStore({
  host: '127.0.0.1',
  port: 6379
});

// 对同一用户，在5次失败尝试后，启动慢请求
const loginBruteforce = new ExpressBrute(redisStore, {
  freeRetries: 5,
  minWait: 5 * 60 * 1000, // 5 minutes
  maxWait: 60 * 60 * 1000, // 1 hour
  failCallback: failCallback,
  handleStoreError: handleStoreErrorCallback
});

app.post('/login',
  loginBruteforce.getMiddleware({
    key: function (req, res, next) {
      // 对同一用户名阻止过多请求
      next(req.body.username);
    }
  }), // 假如访问此路由过多，返回403
  function (req, res, next) {
    if (User.isValidLogin(req.body.username, req.body.password)) {
      // 对于登录成功用户名，重置失败计数
      req.brute.reset(function () {
        res.redirect('/'); // 登录
      });
    } else {
      // 处理失败的用户请求
    }
  }
);
```

### 其他博客作者怎么说

摘自[Liran Tal](https://leanpub.com/nodejssecurity)的书籍the Essential Node.js Security:
> 攻击者可能会使用暴力攻击将一系列用户/密码对，通过POST请求或者其它RESTful的API，发送到REST节点。这种字典攻击非常直接且易于执行, 并且可能在API或页面路由的任何其他部分执行, 与登录无关。
