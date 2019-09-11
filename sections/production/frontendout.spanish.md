# Saca tus recursos frontend fuera de Node

<br/><br/>

### Párrafo de explicación

En una aplicación web clásica, el backend sirve tanto frontend como gráficos al navegador. Una práctica muy común en el mundo de Node es utilizar el middleware estático de Express para mandar los archivos estáticos al cliente. PERO, Node no es una aplicación web típica, ya que utiliza un único thread que no está diseñado para servir muchos archivos a la vez. Así que, en vez de eso, considera utilizar un proxy inverso (como nginx o HAProxy), almacenamiento cloud, o un CDN (como AWS S3, Azure Blob Storage, etc.) que se vale de muchas optimizaciones para esta tarea y ganas un rendimiento mucho mayor. Por ejemplo, un middleware especializado como nginx incorpora enlaces directos entre el sistema de archivos y la tarjeta de red, y funciona bajo un proceso multi-threaded para minimizar las afectaciones entre múltiples peticiones.

Tu solución óptima podría seguir uno de los siguientes modelos:

1. Usar un proxy inverso: tus archivos estáticos se ubicarán justo al lado de tu aplicación Node y solo las peticiones a la carpeta de archivos estáticos serán servidas mediante el proxy que se encuentra frente a tu aplicación Node, como nginx. Mediante esta técnica, tu aplicación Node es la responsable de publicar los archivos estáticos pero no de servirlos. Al colega de tu frontend le encantará este enfoque, ya que también evita peticiones cross-origin desde el frontend.

2. Usar almacenamiento cloud: tus archivos estáticos NO serán parte del contenido de tu aplicación Node, sino que se subirán a servicios como AWS S3, Azure BlobStorage o similares que nacieron para este cometido. Mediante esta técnica, tu aplicación Node no es responsable ni de publicar los archivos estáticos ni de servirlos, por tanto se desenlaza por completo el backend del frontend, que de todos modos lo gestionan equipos diferentes.

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
