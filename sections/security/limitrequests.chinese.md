# 通过平衡器或者中间件限制并发请求

### 一段解释

你的Node.js应用程序应该实现限流，以此来保护它不会因为同一时间太多请求而崩溃。限流就是一个任务，需要一个专门为此设计的服务来辅助才能达到最佳的执行效果，比如nginx，但是通过应用程序中间件也可以实现，比如[express-rate-limiter](https://www.npmjs.com/package/express-rate-limit)。

### 代码示例：Express对某些路由使用限流中间件

使用[express-rate-limiter](https://www.npmjs.com/package/express-rate-limit)模块

``` javascript
const RateLimit = require('express-rate-limit');
// 如果请求需要经过代理，确保客户端IP能够传给req.ip这一点非常重要
app.enable('trust proxy');

const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15分钟
  max: 100,
});

// 仅应用于以/user/开头的请求
app.use('/user/', apiLimiter);
```

### 其他博主的看法

摘自 [NGINX 博客](https://www.nginx.com/blog/rate-limiting-nginx/):

> 限流可以是出于安全考虑，比如用于降低暴力破解密码攻击的风险。可以通过限制输入请求速率在某个基于真实用户的特定值来防止DDOS攻击，这对分析（通过日志）特定的URLs也有一定的帮助。但通常情况下，限流是用来保护上游应用程序不会因为同一时间太多请求而崩溃。