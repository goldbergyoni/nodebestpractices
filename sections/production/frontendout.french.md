# Retirez vos ressources frontend de Node

<br/><br/>

### Un paragraphe d'explication

Dans une application web classique, le backend fournit le frontend/les graphiques au navigateur. Une approche très courante dans le monde de Node consiste à utiliser le middleware statique Express pour transmettre les fichiers statiques au client. MAIS - Node n'est pas une application web classique car il utilise un seul processus qui n'est pas optimisé pour servir plusieurs fichiers à la fois. Il faut plutôt envisager d'utiliser un proxy inverse (par exemple nginx, HAProxy), un stockage dans le cloud ou un CDN (par exemple, AWS S3, Azure Blob Storage, etc.) qui utilisent de nombreuses optimisations pour cette tâche et obtiennent un bien meilleur débit. Par exemple, un middleware spécialisé comme nginx comporte des hooks directs entre le système de fichiers et la carte réseau et utilise une approche multi-processus pour minimiser l'intervention parmi les multiples requêtes.

Votre solution optimale pourrait prendre l'une des formes suivantes :

1. En utilisant un proxy inverse - vos fichiers statiques seront situés juste à côté de votre application Node, seules les requêtes vers le dossier des fichiers statiques seront servies par un proxy qui se trouve devant votre application Node comme nginx. En utilisant cette approche, votre application Node est responsable du déploiement des fichiers statiques mais pas de leur distribution. Le responsable de votre application frontend aimera cette approche car elle permet d'éviter les requêtes d'origine croisée depuis le frontend.

2. Stockage dans le cloud - vos fichiers statiques NE feront PAS partie du contenu de votre application Node, ils seront téléchargés vers des services comme AWS S3, Azure BlobStorage, ou d'autres services similaires qui sont conçus pour cette mission. En utilisant cette approche, votre application Node n'est pas responsable du déploiement des fichiers statiques ni de leur utilisation, d'où un dissociation complète entre Node et le Frontend qui est de toute façon géré par des équipes différentes.

<br/><br/>

### Exemple de configuration : configuration typique de nginx pour servir des fichiers statiques

```nginx
# configuration de la compression gzip
gzip on;
keepalive 64;

# définition du serveur web
server {
listen 80;
listen 443 ssl;

# gestion du contenu statique
location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
root /usr/local/silly_face_society/node/public;
access_log off;
expires max;
}
```

<br/><br/>

### Ce que disent les autres blogueurs

Extrait du blog de [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):

>…En développement, vous pouvez utiliser [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile) pour fournir des fichiers statiques. Mais ne le faites pas en production, car cette fonction doit lire dans le système de fichiers pour chaque requête de fichier, elle rencontrera donc une latence importante et affectera la performance globale de l'application. Remarquez que res.sendFile() n'est pas implémentée avec l'appel système sendfile, ce qui la rendrait bien plus efficace. Utilisez plutôt un middleware de type serveur statique (ou quelque chose d'équivalent), qui est optimisé pour servir des fichiers pour les applications Express. Une option encore meilleure est d'utiliser un proxy inverse pour servir des fichiers statiques; consultez Utiliser un proxy inverse pour plus d'informations…

<br/><br/>
