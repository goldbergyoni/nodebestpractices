# Get your frontend assets out of Node

<br/><br/>

### One Paragraph Explainer

In a classic web app the backend serves the frontend/graphics to the browser, a very common approach in the Node’s world is to use Express static middleware for streamlining static files to the client. BUT – Node is not a typical webapp as it utilizes a single thread that is not optimized to serve many files at once. Instead, consider using a reverse proxy (e.g. nginx, HAProxy), cloud storage or CDN (e.g. AWS S3, Azure Blob Storage, etc) that utilizes many optimizations for this task and gain much better throughput. For example, specialized middleware like nginx embodies direct hooks between the file system and the network card and uses a multi-threaded approach to minimize intervention among multiple requests.

Your optimal solution might wear one of the following forms:

1. Using a reverse proxy – your static files will be located right next to your Node application, only requests to the static files folder will be served by a proxy that sits in front of your Node app such as nginx. Using this approach, your Node app is responsible deploying the static files but not to serve them. Your frontend’s colleague will love this approach as it prevents cross-origin-requests from the frontend.

2. Cloud storage – your static files will NOT be part of your Node app content, they will be uploaded to services like AWS S3, Azure BlobStorage, or other similar services that were born for this mission. Using this approach, your Node app is not responsible deploying the static files neither to serve them, hence a complete decoupling is drawn between Node and the Frontend which is anyway handled by different teams.

<br/><br/>

### Configuration example: typical nginx configuration for serving static files

```nginx
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

### What Other Bloggers Say

From the blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):

>…In development, you can use [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile) to serve static files. But don’t do this in production, because this function has to read from the file system for every file request, so it will encounter significant latency and affect the overall performance of the app. Note that res.sendFile() is not implemented with the sendfile system call, which would make it far more efficient. Instead, use serve-static middleware (or something equivalent), that is optimized for serving files for Express apps. An even better option is to use a reverse proxy to serve static files; see Use a reverse proxy for more information…

<br/><br/>
