# Votre application ne doit pas gérer la redirection du journal

<br/><br/>

### Un paragraphe d'explication

Le code de l'application ne devrait pas gérer le routage des journaux, mais plutôt utiliser un utilitaire de journalisation pour écrire dans `stdout/stderr`. Le « routage des journaux » signifie qu'il faut récupérer et pousser les journaux vers un autre endroit que votre application ou processus d'application, par exemple, écrire les journaux dans un fichier, une base de données, etc. La raison en est essentiellement double : 1) la séparation des préoccupations et 2) [12-Factor les meilleures pratiques pour les applications modernes](https://12factor.net/logs).

Nous pensons souvent à la « séparation des préoccupations » en termes de morceaux de code entre les services et entre les services eux-mêmes, mais cela s'applique également aux éléments plus « infrastructurels ». Votre code d'application ne doit pas gérer quelque chose qui devrait être géré par l'infrastructure/l'environnement d'exécution (le plus souvent de nos jours, les conteneurs). Que se passe-t-il si vous définissez les emplacements des journaux dans votre application, mais que vous devez ensuite modifier cet emplacement ? Cela entraîne un changement de code et un déploiement. Lorsque l'on travaille avec des plateformes basées sur des conteneurs ou le cloud, les conteneurs peuvent démarrer et s'arrêter lors de la mise à l'échelle en fonction des exigences de performance, donc nous ne pouvons pas savoir où un fichier journal sera placé. L'environnement d'exécution (conteneur) devrait plutôt décider où les fichiers journaux sont dirigés. L'application doit simplement enregistrer ce dont elle a besoin dans `stdout` / `stderr`, et l'environnement d'exécution doit être configuré pour récupérer le flux de données de cet enregistrement et le diriger vers l'endroit où il doit aller. De plus, les membres de l'équipe qui doivent spécifier et/ou modifier les destinations des journaux ne sont souvent pas des développeurs d'applications mais font partie de DevOps, et ils peuvent ne pas être familiers avec le code de l'application. Cela les empêche d'apporter facilement des modifications. 

<br/><br/>

### Exemple de code incorrect : acheminement des logs étroitement couplé à l'application

```javascript
const { createLogger, transports, winston } = require('winston');
/**
   * Le fait d'exiger `winston-mongodb` exposera
   * `winston.transports.MongoDB`
   */
require('winston-mongodb');
 
// journalisation vers deux fichiers différents, sur lesquels l'application doit maintenant se concentrer
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});
 
// journalisation vers MongoDB, which the application now must be concerned with
winston.add(winston.transports.MongoDB, options);
```
En procédant ainsi, l'application gère à la fois la logique applicative/métier ET la logique de routage des journaux !

<br/><br/>

### Exemple de code - Meilleure gestion des journaux + exemple Docker
Dans l'application :
```javascript
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

logger.log('info', 'Test message du journal avec certains paramètres %s', 'certains paramètres', { anything: 'Voici les métadonnées' });
```
Puis, dans le conteneur du docker `daemon.json` :
```json5
{
  "log-driver": "splunk", // en utilisant Splunk comme exemple, il pourrait s'agir d'un autre type de stockage
  "log-opts": {
    "splunk-token": "",
    "splunk-url": "",
    //...
  }
}
```
Cet exemple se présente donc comme suit : `log -> stdout -> conteneur Docker -> Splunk`

<br/><br/>

### Citation du blog : « O'Reilly »

Extrait du [blog de O'Reilly](https://www.oreilly.com/ideas/a-cloud-native-approach-to-logs),
 > Lorsque vous avez un nombre fixe d'instances sur un nombre fixe de serveurs, le stockage des journaux sur disque semble logique. Cependant, lorsque votre application peut passer dynamiquement d'une instance à 100, et que vous n'avez aucune idée de l'endroit où ces instances sont exécutées, vous avez besoin que votre fournisseur du cloud s'occupe de l'agrégation de ces journaux en votre nom.

<br/><br/>

### Citation : « 12-Factor »

Extrait de [12-Factor les meilleures pratiques pour la journalisation](https://12factor.net/logs),
 > Une application à douze facteurs ne se préoccupe jamais du routage ou du stockage de son flux de sortie. Elle ne doit pas essayer d'écrire dans les fichiers journaux ou de les gérer. Au lieu de cela, chaque processus en cours d'exécution écrit son flux d'événements, sans bufferisation, sur stdout.
 
 > Lors des déploiements d'environnement de test ou de production, chaque flux de processus sera capturé par l'environnement d'exécution, regroupé avec tous les autres flux de l'application, et acheminé vers une ou plusieurs destinations finales pour être visionné et archivé à long terme. Ces destinations d'archivage ne sont pas visibles ou configurables par l'application, mais sont entièrement gérées par l'environnement d'exécution.

<br/><br/>

 ### Exemple : aperçu de l'architecture en utilisant Docker et Splunk comme exemple

![alt text](../../assets/images/logging-overview.png "Aperçu du routage des journaux")

<br/><br/>
