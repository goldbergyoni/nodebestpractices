# Retirez les secrets des fichiers de configuration ou utiliser des paquets pour les crypter

### Un paragraphe d'explication

La façon la plus courante et la plus sûre de permettre à une application Node.js d'accéder à des clés et à des secrets est de les stocker en utilisant des variables d'environnement sur le système où elle est exécutée. Une fois ces variables définies, on peut y accéder à partir de l'objet global `process.env`.
Un test décisif pour savoir si une application a correctement pris en compte toutes les configurations dans le code, c'est de savoir si la base du code peut être rendue open source à tout moment, sans compromettre les références.

Dans les rares cas où des secrets doivent être stockés dans le contenu des sources, l'utilisation d'un logiciel tel que [cryptr](https://www.npmjs.com/package/cryptr) permet de les stocker sous une forme cryptée plutôt qu'en texte brut.

Il existe une variété d'outils qui utilisent git pour auditer les commits et les messages de commit pour les ajouts accidentels de secrets, tels que [git-secrets](https://github.com/awslabs/git-secrets).

### Exemple de code

Accès à une clé d'une API stockée dans une variable d'environnement :

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

Utilisation de `cryptr` pour stocker un secret crypté :

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // produit une chaîne décryptée qui n'a pas été stockée dans le contenu de la source
```

### Ce que disent les autres blogueurs

> Les variables d'environnement sont faciles à modifier entre les déploiements sans changer le code, contrairement aux fichiers de configuration, il y a peu de chances qu'elles soient enregistrées accidentellement dans le dépôt de code et contrairement aux fichiers de configuration personnalisés ou à d'autres mécanismes de configuration tels que les propriétés du système Java, elles sont une norme qui ne tient pas compte du langage et du système d'exploitation. [Extrait de l'application 12 facteurs](https://12factor.net/config).
