# Utilisez un outil de journalisation mature pour augmenter la visibilité des erreurs

### Un paragraphe d'explication

Nous adorons console.log mais un logger réputé et persistant comme [Pino][pino] (une option plus récente axée sur les performances) est obligatoire pour les projets sérieux. 
Des outils de journalisation très performants permettent d'identifier les erreurs et les problèmes éventuels. Les recommandations en matière de journalisation sont :

1. Enregistrer fréquemment en utilisant différents niveaux (débogage, info, erreur).
2. Lors de la journalisation, fournir des informations contextuelles sous forme d'objets JSON. 
3. Surveiller et filtrer les journaux à l'aide d'une API d'interrogation des journaux (intégrée à de nombreux enregistreurs) ou d'un logiciel de visualisation des journaux. 
4. Exposer et conserver les déclarations de journal avec des outils de renseignement opérationnel tels que [Splunk][splunk].

[pino]: https://www.npmjs.com/package/pino
[splunk]: https://www.splunk.com/

### Exemple de code

```javascript
const pino = require('pino');

// votre objet de journalisation centralisé
const logger = pino();

// code personnalisé quelque part à l'aide de l'outil de journalisation
logger.info({ anything: 'This is metadata' }, 'Test Log Message with some parameter %s', 'some parameter');
```

### Citation de blog : « Exigences d'un outil de journalisation »

 Extrait du blog de Strong Loop ("Comparing Winston and Bunyan Node.js Logging" par Alex Corbatchev, 24 juin 2014) :

> Permet d'identifier quelques exigences (pour un outil de journalisation) :
> 1. Chaque ligne du journal est horodatée. Celle-ci est assez explicite - vous devriez pouvoir dire quand chaque entrée du journal s'est produite.
> 2. Le format d'enregistrement doit être facilement assimilable par les humains ainsi que par les machines.
> 3. Permet plusieurs flux de destination configurables. Par exemple, vous pouvez écrire des journaux de trace dans un fichier, mais lorsqu'une erreur se produit, cela écrit dans le même fichier, puis dans le fichier d'erreur et envoi un e-mail en même temps…

### Où est Winston ?

Pour plus d'informations sur les raisons pour lesquelles les favoris traditionnels (par exemple, Winston) peuvent ne pas être inclus dans la liste actuelle des meilleures pratiques recommandées, veuillez consulter [#684][#684].

[#684]: https://github.com/goldbergyoni/nodebestpractices/issues/684
