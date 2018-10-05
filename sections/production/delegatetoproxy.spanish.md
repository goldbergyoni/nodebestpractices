# Delega todo lo posible (ej. contenido estático, gzip) a un proxy inverso

<br/><br/>

### Párrafo de explicación

Es muy tentador caer en el culto a Express y usar su rico sistema de middlewares para tareas relacionadas con la red, como servir archivos estáticos, encoding de gzip, peticiones de throttling, terminación SSL, etc. Esto mata el rendimiento ya que su modelo "single thread" mantendrá la CPU ocupada durante largos periodos de tiempo (recuerda, el modelo de ejecución de Node está optimizado para tareas cortas o asíncronas relacionadas con entrada/salida). Una mejor solución es utilizar una herramienta especializada en tareas de red; las más populares son nginx y HAproxy, usadas también por los mayores proveedores cloud para aligerar la carga entrante en procesos de node.js.

<br/><br/>

### Nginx Config Example – Using nginx to compress server responses

```nginx
# configure gzip compression
gzip on;
gzip_comp_level 6;
gzip_vary on;

# configure upstream
upstream myApplication {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

#defining web server
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

### What Other Bloggers Say

* From the blog [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications):
> …It’s very easy to fall into this trap – You see a package like Express and think “Awesome! Let’s get started” – you code away and you’ve got an application that does what you want. This is excellent and, to be honest, you’ve won a lot of the battle. However, you will lose the war if you upload your app to a server and have it listen on your HTTP port because you’ve forgotten a very crucial thing: Node is not a web server. **As soon as any volume of traffic starts to hit your application, you’ll notice that things start to go wrong: connections are dropped, assets stop being served or, at the very worst, your server crashes. What you’re doing is attempting to have Node deal with all of the complicated things that a proven web server does really well. Why reinvent the wheel?**
> **This is just for one request, for one image and bearing in mind this is the memory that your application could be used for important stuff like reading a database or handling complicated logic; why would you cripple your application for the sake of convenience?**

* From the blog [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> Although express.js has built-in static file handling through some connect middleware, you should never use it. **Nginx can do a much better job of handling static files and can prevent requests for non-dynamic content from clogging our node processes**…
