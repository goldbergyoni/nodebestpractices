# Utilisez une configuration respectueuse de l'environnement, sécurisée et hiérarchique

<br/><br/>

### Un paragraphe d'explication

Lorsqu'il s'agit de données de configuration, beaucoup de choses peuvent tout simplement vous énerver et vous freiner :

1. le paramétrage de toutes les clés à l'aide de variables d'environnement de processus devient très fastidieux lorsqu'il faut injecter 100 clés (au lieu de simplement les livrer dans un fichier de configuration), cependant, lorsque l'on traite uniquement des fichiers, les administrateurs DevOps ne peuvent pas modifier le comportement sans modifier le code. Une solution de configuration fiable doit combiner les deux : fichiers de configuration + écrasements des variables de processus.

2. lorsque vous spécifiez toutes les clés d'un JSON plat, il devient frustrant de trouver et de modifier des entrées lorsque la liste s'allonge. Un fichier JSON hiérarchique regroupé en sections peut résoudre ce problème + quelques bibliothèques de configuration permettent de stocker la configuration dans plusieurs fichiers et de de prendre soin de les unifier lors de l'exécution. Voir l'exemple ci-dessous

3. le stockage d'informations sensibles comme le mot de passe de la base de données n'est évidemment pas recommandé, mais aucune solution rapide et pratique n'existe pour ce défi. Certaines bibliothèques de configuration permettent de crypter les fichiers, d'autres cryptent ces entrées pendant les commits GIT ou simplement ne stockent pas les valeurs réelles de ces entrées et spécifient la valeur réelle pendant le déploiement via les variables d'environnement.

4. certains scénarios de configuration avancés nécessitent d'injecter des valeurs de configuration via la ligne de commande (vargs) ou de synchroniser les informations de configuration via un cache centralisé comme Redis afin que plusieurs serveurs utilisent les mêmes données de configuration.

5. l'application doit échouer le plus rapidement possible et fournir un retour immédiat si les variables d'environnement requises ne sont pas présentes au démarrage, ceci peut être réalisé en utilisant [convict](https://www.npmjs.com/package/convict) pour valider la configuration.

Certaines bibliothèques de configuration peuvent fournir gratuitement la plupart de ces fonctionnalités, jetez un œil aux bibliothèques npm comme [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config) et [convict](https://www.npmjs.com/package/convict) qui traitent un bon nombre de ces exigences.

<br/><br/>

### Exemple de code - la configuration hiérarchique aide à trouver des entrées et à maintenir d'énormes fichiers de configuration

```json5
{
  // Configurations du module Customer
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Régler un niveau bas pour le développement
      "initialDays": 1
    }
  }
}
```

<br/><br/>
