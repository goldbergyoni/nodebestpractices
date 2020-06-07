# 避免不安全的重定向

### 一段解释

当我们在 Node.js 或者 Express 中实现重定向时，在服务器端进行输入校验非常重要。当攻击者发现你没有校验用户提供的外部输入时，他们会在论坛、社交媒体以和其他公共场合发布他们精心制作的链接来诱使用户点击，以此达到漏洞利用的目的。

案例： express 使用用户输入的不安全的重定向

```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

建议的避免不安全重定向的方案是，避免依赖用户输入的内容来进行重定向。如果一定要使用用户输入的内容，可以通过使用白名单重定向的方式来避免暴露漏洞。

案例：使用白名单实现安全的重定向

```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // 检查url是否以/开头
  if (url.match(/^\/(?!\/)/)) { 
    // 前置我们的域名来确保（安全）
    return 'https://example.com' + url; 
  } 

    // 否则对照白名单列表
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```

### 其他博主的看法

来自博客[NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db)：

> 幸运的是，缓解此漏洞的方法非常简单-不要使用未经验证的用户输入作为重定向的基础。

来自博客[Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/)：

> 但是，如果服务器端的重定向逻辑没有对url参数的数据进行校验的话，则你的用户可能最终访问的地址跟你的地址看起来几乎完全一致（examp1e.com），但这最终满足了犯罪黑客们的需求。
