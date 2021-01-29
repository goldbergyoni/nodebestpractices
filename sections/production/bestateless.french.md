# Soyez sans état, tuez vos serveurs presque tous les jours

<br/><br/>

### Un paragraphe d'explication

Avez-vous déjà rencontré un grave problème en production où il manquait un élément de configuration ou une donnée sur un serveur ? Cela est probablement dû à une dépendance inutile avec une ressource locale qui ne fait pas partie du déploiement. De nombreux produits à succès traitent les serveurs comme un oiseau phénix - il meurt et renaît périodiquement sans aucun dommage. En d'autres termes, un serveur n'est qu'une pièce de matériel qui exécute votre code pendant un certain temps et qui est ensuite remplacé.
Cette approche

- permet une mise à l'échelle par l'ajout et la suppression dynamiques de serveurs sans aucun effet secondaire.
- simplifie la maintenance car elle libère notre esprit de l'évaluation de l'état de chaque serveur.

<br/><br/>

### Exemple de code incorrect

```javascript
// Erreur typique 1 : enregistrement des fichiers téléchargés localement sur un serveur
const multer = require('multer'); // un middleware express pour gérer les téléchargements en plusieurs parties
const upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {});

// Erreur typique 2 : stockage des sessions d'authentification (passeport) dans un fichier ou une mémoire locale
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// Erreur typique 3 : stockage d'informations sur l'objet global
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### Ce que disent les autres blogueurs

Extrait du blog de [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html) :
> ...Un jour, j'ai eu le délire de lancer un service de certification des exploitations. L'évaluation de la certification consisterait pour un collègue et moi à nous rendre au centre de données de l'entreprise et à nous occuper des serveurs de production critiques avec une batte de base-ball, une tronçonneuse et un pistolet à eau. L'évaluation serait basée sur le temps qu'il faudrait à l'équipe d'exploitation pour remettre toutes les applications en marche. C'est peut-être une idée folle, mais il y a là une pincée de bon sens. Bien que vous deviez renoncer aux battes de base-ball, il est bon de détruire virtuellement vos serveurs à intervalles réguliers. Un serveur doit être comme un phénix, renaissant régulièrement de ses cendres...

<br/><br/>
