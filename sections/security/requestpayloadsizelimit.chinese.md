# 使用反向代理或中间件限制负载大小

### 一段解释

分析请求正文，例如JSON编码的请求，是一种对性能要求高的操作，尤其针对较大的请求。
在web应用程序中处理传入请求时, 应限制相应请求的大小。具有无限大小的传入请求正文或者负载可能会导致应用程序执行不佳，或由于拒绝服务而中断，或其他不必要的副作用而崩溃。许多用于解析请求的流行中间件解决方案(如已经包含在express的`body-parser`包) 提供了限制请求负载大小的选项, 从而使开发人员能够轻松地实现此功能。如果支持, 还可以在反向代理，或者web服务器软件中集成限制请求正文大小。下面是使用`express`和`nginx`限制请求大小的示例。

### `express`的示例代码

```javascript
const express = require('express');

const app = express();

app.use(express.json({ limit: '300kb' })); // body-parser默认设置正文大小为100kb

// 请求json正文
app.post('/json', (req, res) => {

    // 检查请求有效负载内容类型是否与JSON匹配, 因为body-parser不检查内容类型
    if (!req.is('json')) {
        return res.sendStatus(415); // -> 如果请求没有JSON正文, 则返回为不支持媒体类型
    }

    res.send('Hooray, it worked!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

🔗 [**对于express.json()的Express文档**](http://expressjs.com/en/4x/api.html#express.json)

### `nginx`的示例配置

```
http {
    ...
    # Limit the body size for ALL incoming requests to 1 MB
    client_max_body_size 1m;
}

server {
    ...
    # Limit the body size for incoming requests to this specific server block to 1 MB
    client_max_body_size 1m;
}

location /upload {
    ...
    # Limit the body size for incoming requests to this route to 1 MB
    client_max_body_size 1m;
}
```

🔗 [**对于client_max_body_size的Nginx文档**](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)