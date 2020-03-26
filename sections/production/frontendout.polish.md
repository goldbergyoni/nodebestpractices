# Wyciągnij zasoby frontendu z Node'a

<br/><br/>

### Wyjaśnienie jednym akapitem

W klasycznej aplikacji internetowej backend obsługuje frontend / grafikę w przeglądarce, bardzo powszechnym podejściem w świecie Node jest użycie Express'owego oprogramowania pośredniego do usprawnienia plików statycznych w kliencie. ALE - Node nie jest typową aplikacją internetową, ponieważ wykorzystuje pojedynczy wątek, który nie jest zoptymalizowany do obsługi wielu plików jednocześnie. Zamiast tego rozważ użycie reverse-proxy (np. Nginx, HAProxy), magazynu w chmurze lub CDN (np. AWS S3, Azure Blob Storage itp.), który wykorzystuje wiele optymalizacji tego zadania i uzyskuje znacznie lepszą przepustowość. Na przykład specjalistyczne oprogramowanie pośrednie, takie jak nginx, zawiera bezpośrednie przechwytywanie między systemem plików a kartą sieciową i wykorzystuje podejście wielowątkowe, aby zminimalizować interwencję między wieloma żądaniami.

Twoje optymalne rozwiązanie może mieć jedną z następujących postaci:

1. Korzystanie z reverse-proxy - twoje pliki statyczne będą znajdować się tuż obok aplikacji Node, tylko żądania do folderu plików statycznych będą obsługiwane przez proxy, które znajduje się przed aplikacją Node, taką jak nginx. Dzięki takiemu podejściu aplikacja Node jest odpowiedzialna za wdrażanie plików statycznych, ale nie za ich obsługę. Twój kolega z interfejsu użytkownika pokocha to podejście, ponieważ zapobiega ono prośbom o pochodzenie z tego interfejsu.

2. Przechowywanie w chmurze - pliki statyczne NIE będą częścią zawartości aplikacji Node, zostaną przesłane do usług takich jak AWS S3, Azure BlobStorage lub innych podobnych usług, które powstały w ramach tej misji. Korzystając z tego podejścia, twoja aplikacja Node nie jest odpowiedzialna za wdrażanie plików statycznych ani ich obsługę, dlatego następuje całkowite rozdzielenie pomiędzy Node i Frontendem, które i tak jest obsługiwane przez różne zespoły.

<br/><br/>

### Przykład konfiguracji: typowa konfiguracja nginx do obsługi plików statycznych

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

### Co mówią inni blogerzy

Z bloga [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):

>…In development, you can use [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile) to serve static files. But don’t do this in production, because this function has to read from the file system for every file request, so it will encounter significant latency and affect the overall performance of the app. Note that res.sendFile() is not implemented with the sendfile system call, which would make it far more efficient. Instead, use serve-static middleware (or something equivalent), that is optimized for serving files for Express apps. An even better option is to use a reverse proxy to serve static files; see Use a reverse proxy for more information…

<br/><br/>
