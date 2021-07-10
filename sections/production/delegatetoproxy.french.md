# Déléguez tout ce qui est possible (par exemple gzip, SSL) à un proxy inverse

<br/><br/>

### Un paragraphe d'explication

Il est très tentant de faire appel à cargo-cult d'Express et d'utiliser son riche middleware pour les tâches liées au réseau, comme le service de fichiers statiques, l'encodage gzip, les requêtes de restriction, la terminaison SSL, etc. C'est une perte de performance due à son modèle de processus unique qui gardera le CPU occupé pendant de longues périodes (Rappelez-vous, le modèle d'exécution de Node est optimisé pour des tâches courtes ou des tâches liées à des E/S asynchrones). Une meilleure approche est d'utiliser un outil qui maîtrise les tâches réseau - les plus populaires sont nginx et HAproxy qui sont également utilisés par les plus grands vendeurs du cloud pour alléger la charge entrante sur les processus node.js.

<br/><br/>

### Exemple de configuration Nginx - Utilisation de nginx pour compresser les réponses du serveur

```nginx
# configure la compression gzip
gzip on;
gzip_comp_level 6;
gzip_vary on;

# configure upstream
upstream myApplication {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

# définition du serveur web
server {
    # configure le serveur avec ssl et des pages d'erreur
    listen 80;
    listen 443 ssl;
    ssl_certificate /some/location/sillyfacesociety.com.bundle.crt;
    error_page 502 /errors/502.html;

    # gestion du contenu statique
    location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
    root /usr/local/silly_face_society/node/public;
    access_log off;
    expires max;
}
```

<br/><br/>

### Ce que disent les autres blogueurs

* Extrait du blog de [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications):
> …Il est très facile de tomber dans ce piège - Vous voyez un paquet comme Express et pensez « Génial ! Commençons » - vous codez et vous avez une application qui fait ce que vous voulez. C'est excellent et, pour être honnête, vous avez gagné beaucoup de bataille. Cependant, vous perdrez la guerre si vous téléchargez votre application sur un serveur et que vous la faites écouter sur votre port HTTP parce que vous avez oublié une chose très cruciale : Node n'est pas un serveur Web. **Aussitôt qu'un volume de trafic quelconque commence à toucher votre application, vous remarquerez que les choses commencent à mal tourner : les connexions sont interrompues, les ressources cessent d'être servis ou, au pire, votre serveur se plante. Ce que vous faites est d'essayer de faire en sorte que Node s'occupe de toutes les choses compliquées qu'un serveur web éprouvé fait très bien. Pourquoi réinventer la roue ?**
> **C'est juste pour une requête ou une image et en gardant à l'esprit que cette mémoire peut être utilisée par votre application pour des choses plus importantes comme la lecture d'une base de données ou la manipulation d'une logique compliquée, pourquoi paralyser votre application pour des raisons de commodité ?**

* Extrait du blog de [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load) :
> Bien qu'express.js ait une gestion intégrée des fichiers statiques via un middleware de connexion, vous ne devez jamais l'utiliser. **Nginx peut faire un bien meilleur travail de gestion des fichiers statiques et peut empêcher les requêtes de contenu non dynamique de saturer nos processus de Node**…
