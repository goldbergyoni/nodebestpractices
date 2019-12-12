# Utilisez un outil de journalisation mature pour augmenter la visibilité des erreurs

### Un paragraphe d'explication

Nous aimons tous console.log mais de toute évidence, un outil de journalisation réputé et persistant comme [Winston][winston] (très populaire) ou [Pino][pino] (le nouveau gamin de la ville qui se concentre sur la performance) est obligatoire pour les projets sérieux. Un ensemble de pratiques et d'outils aidera à comprendre les erreurs beaucoup plus rapidement - (1) journalisez fréquemment en utilisant différents niveaux (débogage, informations, erreur), (2) lors de la journalisation, fournissez des informations contextuelles sous forme d'objets JSON, voir l'exemple ci-dessous. (3) Regardez et filtrez les journaux à l'aide d'une API d'interrogation des journaux (intégrée dans la plupart des enregistreurs) ou d'un logiciel de visualisation des journaux. (4) Exposer et conserver le journal de bord pour l'équipe d'exploitation à l'aide d'outils d'intelligence opérationnelle comme Splunk.

[winston]: https://www.npmjs.com/package/winston
[pino]: https://www.npmjs.com/package/pino

### Exemple de code - l'outil de journalisation Winston en action

```javascript
// votre objet de journalisation centralisé
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

// code personnalisé quelque part à l'aide de l'outil de journalisation
logger.log('info', 'Message du journal de test avec un paramètre %s', 'un paramètre', { anything: 'Ce sont des métadonnées' });
```

### Exemple de code - Interrogation du répertoire du journal (recherche d'entrées)

```javascript
const options = {
  from: Date.now() - 24 * 60 * 60 * 1000,
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};

// Recherchez les éléments enregistrés entre aujourd'hui et hier.
winston.query(options, (err, results) => {
  // exécute la fonction de rappel avec results
});
```

### Citation de blog : « Exigences d'un outil de journalisation »

 Extrait du blog de Strong Loop

> Permet d'identifier quelques exigences (pour un outil de journalisation) :
1. Chaque ligne du journal est horodatée. Celle-ci est assez explicite - vous devriez pouvoir dire quand chaque entrée du journal s'est produite.
2. Le format d'enregistrement doit être facilement assimilable par les humains ainsi que par les machines.
3. Permet plusieurs flux de destination configurables. Par exemple, vous pouvez écrire des journaux de trace dans un fichier, mais lorsqu'une erreur se produit, cela écrit dans le même fichier, puis dans le fichier d'erreur et envoi un e-mail en même temps…
