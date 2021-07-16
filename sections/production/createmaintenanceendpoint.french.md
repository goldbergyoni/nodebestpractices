# Créez un « point de terminaison de maintenance »

<br/><br/>

### Un paragraphe d'explication

Un point de terminaison de maintenance est une API HTTP hautement sécurisée qui fait partie du code de l'application et dont l'objectif est d'être utilisé par l'équipe d'exploitation/production pour surveiller et exposer les fonctionnalités de maintenance. Par exemple, il peut retourner un vidage de mémoire (instantané de la mémoire) du processus, signaler s'il y a des fuites de mémoire et même permettre d'exécuter directement des commandes REPL. Ce point de terminaison est nécessaire lorsque les outils DevOps classiques (produits de surveillance, journaux, etc.) ne parviennent pas à collecter un certain type d'informations spécifiques ou si vous choisissez de ne pas acheter/installer de tels outils. La règle d'or est d'utiliser des outils professionnels et externes pour le suivi et la maintenance de la production, ceux-ci sont généralement plus robustes et plus précis. Cela dit, il est probable que les outils génériques ne parviennent pas à extraire des informations spécifiques de Node ou de votre application - par exemple, si vous souhaitez générer un instantané de mémoire au moment où le GC (Garbage collection, NdT : [« Ramasse-miettes »](https://fr.wikipedia.org/wiki/Ramasse-miettes_(informatique))) a terminé un cycle - quelques bibliothèques npm se feront un plaisir de vous le faire, mais les outils de surveillance populaires manqueront probablement cette fonctionnalité. Il est important de garder ce point de terminaison privé et accessible uniquement par les administrateurs, car il peut devenir la cible d'une attaque DDOS.

<br/><br/>

### Exemple de code : génération d'un vidage mémoire via du code

```javascript
const heapdump = require('heapdump');

// Vérifie si la requête est autorisée
function isAuthorized(req) {
    // ...
}

router.get('/ops/heapdump', (req, res, next) => {
    if (!isAuthorized(req)) {
        return res.status(403).send('Vous n\'êtes pas autorisé !');
    }

    logger.info('À propos de la génération du vidage mémoire');

    heapdump.writeSnapshot((err, filename) => {
        console.log('le fichier heapdump est prêt à être envoyé au demandeur', filename);
        fs.readFile(filename, 'utf-8', (err, data) => {
            res.end(data);
        });
    });
});
```

<br/><br/>

### Ressources recommandées

[Préparez votre application Node.js pour la production (Slides)](http://naugtur.pl/pres3/node2prod)

▶ [Préparez votre application Node.js pour la production (Vidéo)](https://www.youtube.com/watch?v=lUsNne-_VIk)

![Préparez votre application Node.js pour la production](../../assets/images/createmaintenanceendpoint1.png "Préparez votre application Node.js pour la production")
