# Soyez prudent lorsque vous travaillez avec des processus enfants

### Un paragraphe d'explication

Aussi importants que soient les processus enfants, ils doivent être utilisés avec prudence. Les entrées des utilisateurs qui y sont passées doivent être assainies (NdT *sanitize*), voire évitées. 
Les dangers d'une entrée non assainie exécutant une logique au niveau du système sont illimités, allant de l'exécution de code à distance à l'exposition de données système sensibles et aussi de perte de données.
Une liste de contrôle des préparatifs pourrait ressembler à ceci : 

- éviter les entrées des utilisateurs dans tous les cas, autrement les valider et les assainir 
- limiter les privilèges du parent et des processus enfants en utilisant les identités de groupe et d'utilisateur
- exécuter votre processus dans un environnement isolé pour prévenir des effets secondaires indésirables si les autres préparations échouent

### Exemple de code : Les dangers de l'exécution de processus enfants non assainis

```javascript
const { exec } = require('child_process');

...

// comme exemple, prenons un script qui prend deux arguments, l'un d'entre eux est une entrée utilisateur non assainie
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> imaginez ce qu'il se passerait si un utilisateur entrait simplement quelque chose comme '&& rm -rf --no-preserve-root /'
// vous auriez une surprise indésirable
```

### Ressources supplémentaires

Extrait de la [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback) Node.js sur les processus enfants :

> Ne jamais passer une entrée utilisateur non assainie à cette fonction. Toute entrée comportant des métacaractères du shell peut être utilisée pour déclencher une commande arbitrairement 