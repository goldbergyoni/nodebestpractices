# 在node外处理您的前端资产

<br/><br/>


### 一段解释

在一个经典的 web 应用中，后端返回前端资源/图片给浏览器, 在node的世界，一个非常常见的方法是使用 Express 静态中间件, 以数据流的形式把静态文件返回到客户端。但是, node并不是一个典型的 web应用, 因为它使用单个线程，对于同时服务多个文件，未经过任何优化。相反, 考虑使用反向代理、云存储或 CDN (例如Nginx, AWS S3, Azure Blob 存储等), 对于这项任务, 它们做了很多优化，并获得更好的吞吐量。例如, 像 nginx 这样的专业中间件在文件系统和网卡之间的直接挂钩, 并使用多线程方法来减少多个请求之间的干预。

您的最佳解决方案可能是以下形式之一:
1. 反向代理 – 您的静态文件将位于您的node应用的旁边, 只有对静态文件文件夹的请求才会由位于您的node应用前面的代理 (如 nginx) 提供服务。使用这种方法, 您的node应用负责部署静态文件, 而不是为它们提供服务。你的前端的同事会喜欢这种方法, 因为它可以防止 cross-origin-requests 的前端请求。
2. 云存储 – 您的静态文件将不会是您的node应用内容的一部分, 他们将被上传到服务, 如 AWS S3, Azure BlobStorage, 或其他类似的服务, 这些服务为这个任务而生。使用这种方法, 您的node应用即不负责部署静态文件, 也不为它们服务, 因此, 在node和前端资源之间完全解耦, 这是由不同的团队处理。

<br/><br/>


### 代码示例: 对于静态文件，典型的nginx配置

```
# configure gzip compression
gzip on;
keepalive 64;

# defining web server
server {
listen 80;
listen 443 ssl;

# handle static content
location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
root /usr/local/silly_face_society/node/public;
access_log off;
expires max;
}
```

<br/><br/>

### 其它博主说了什么
摘自博客 [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):

>…开发模式下, 您可以使用 [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile) 服务静态文件. 但是不要在生产中这样做, 因为这个函数为了每个文件请求，必须从文件系统中读取, 因此它会遇到很大的延迟, 并影响应用程序的整体性能。请注意, res.sendFile() 没有用系统调用 sendFile 实现, 这将使它更高效。相反, 使用serve-static中间件 (或类似的东西), 在express应用中服务文件，这是优化了的。更佳的选择是使用反向代理来服务静态文件; 有关详细信息, 请参阅使用反向代理…

<br/><br/>
