# 委托任何可能的 (例如静态内容，gzip) 到反向代理

<br/><br/>


### 一段解释

过度使用Express，及其丰富的中间件去提供网络相关的任务，如服务静态文件，gzip 编码，throttling requests，SSL termination等，是非常诱人的。由于Node.js的单线程模型，这将使CPU长时间处于忙碌状态 (请记住，node的执行模型针对短任务或异步IO相关任务进行了优化)，因此这是一个性能消耗。一个更好的方法是使用专注于处理网络任务的工具 – 最流行的是nginx和HAproxy，它们也被最大的云供应商使用，以减轻在Node.js进程上所面临的负载问题。

<br/><br/>


### 代码示例 – 使用 nginx 压缩服务器响应

```
# 配置 gzip 压缩
gzip on;
gzip_comp_level 6;
gzip_vary on;

# 配置 upstream
upstream myApplication {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

#定义 web server
server {
    # configure server with ssl and error pages
    listen 80;
    listen 443 ssl;
    ssl_certificate /some/location/sillyfacesociety.com.bundle.crt;
    error_page 502 /errors/502.html;

    # handling static content
    location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
    root /usr/local/silly_face_society/node/public;
    access_log off;
    expires max;
}
```

<br/><br/>

### 其他博客作者说什么

* 摘自博客 [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications):
> …很容易落入这个陷阱 – 你看到一个包比如Express，并认为 "真棒!让我们开始吧" – 你编写了代码，你实现了一个应用程序，做你想要的。这很好，老实说，你已经完成了大部分的事情。但是，如果您将应用程序上传到服务器并让它侦听 HTTP 端口，您将搞砸这个应用，因为您忘记了一个非常关键的事情: node不是 web 服务器。**一旦任何流量开始访问你的应用程序， 你会发现事情开始出错:  连接被丢弃，资源停止服务，或在最坏的情况下，你的服务器崩溃。你正在做的是试图让node处理所有复杂的事情，而这些事情让一个已验证过了的 web 服务器来处理，再好也不会过。为什么要重新造轮子？It**
> **这只是为了一个请求，为了一个图像，并铭记在脑海中，您的应用程序可以用于重要的东西，如读取数据库或处理复杂的逻辑; 为了方便起见，你为什么要削弱你的应用？**


* 摘自博客 [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> 虽然 express.js 通过一些connect中间件处理静态文件，但你不应该使用它。**Nginx 可以更好地处理静态文件，并可以防止请求动态内容堵塞我们的node进程**…
