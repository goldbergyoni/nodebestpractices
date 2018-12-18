# 阻止不安全的重定向

### 一段解释

当在Node.js或者Express中执行重定向的时候，在服务端进行输入验证是非常重要的。如果攻击者发现您没有验证外部用户的输入, 他们可能会在论坛、社交媒体和其他公共场所发布特制链接来利用此漏洞, 以让用户点击该链接。

代码示例: 基于用户输入的不安全express重定向
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

为了避免不安全的重定向，建议的解决方法是避免依赖用户输入。如果必须使用用户输入, 则可以使用安全的重定向白名单来避免暴露此漏洞。

代码示例: 安全重定向的白名单
```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // 检查url是否以单个斜线开头 
  if (url.match(/^\/(?!\/)/)) { 
    // 为了保险起见，前置添加我们的域名
    return 'https://example.com' + url; 
  } 
    // 否则通过白名单检查
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```


### 其他博主怎么说

摘自博客[NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db):
> 幸运的是, 此漏洞的解决方法非常简单 - 不要基于未经验证的用户输入进行重定向。 

摘自博客[Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/)
> 但是, 如果服务器端重定向逻辑不验证输入的url参数, 您的用户最终可能会访问与您的网站完全类似的站点(examp1e.com), 最终恶意的黑客会获得他所需要的信息!


