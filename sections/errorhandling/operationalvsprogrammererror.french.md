# Distinguez les erreurs opérationnelles des erreurs de programmation

### Un paragraphe d'explication

La distinction des deux types d'erreur suivants minimisera l'indisponibilité de votre application et aidera à éviter les bogues fous : les erreurs opérationnelles se rapportent à des situations où vous comprenez ce qui s'est passé et son impact - par exemple, une requête vers un service HTTP a échoué en raison d'un problème de connexion. D'un autre côté, les erreurs de programmation se rapportent à des cas où vous n'avez aucune idée de la raison et parfois de l'origine d'une erreur - il peut s'agir d'un code qui a tenté de lire une valeur non définie ou d'un pool de connexions DB qui a une fuite mémoire. Les erreurs opérationnelles sont relativement faciles à gérer - la journalisation de l'erreur suffit généralement. Les choses deviennent compliquées lorsqu'une erreur de programmation apparaît, l'application peut être dans un état incohérent et il n'y a rien de mieux que de redémarrer en douceur.

### Exemple de code - marquer une erreur comme opérationnelle (fiable)

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// marquer un objet Error comme opérationnel
const myError = new Error('Comment puis-je ajouter un nouveau produit lorsqu\'aucune valeur n\'est fournie ?');
myError.isOperational = true;

// ou si vous utilisez une fabrique d'erreurs centralisée (voir d'autres exemples pour le point "Utilisez uniquement l'objet intégré Error")
class AppError {
  constructor (commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
  }
};

throw new AppError(errorManagement.commonErrors.InvalidInput, 'Décrivez ici ce qui s\'est passé', true);

```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// une fabrique d'erreurs centralisée (voir d'autres exemples pour le point "Utilisez uniquement l'objet intégré Error")
export class AppError extends Error {
  public readonly commonType: string;
  public readonly isOperational: boolean;

  constructor(commonType: string, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restaure la chaîne du prototype

    this.commonType = commonType;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// marquer un objet Error comme opérationnel (true)
throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

### Citation de blog : « Les erreurs du programmeur sont des bogues dans le programme »

Extrait du blog de Joyent classé en 1ere position pour les mots clés “Node.js error handling”

 > …La meilleure façon de récupérer des erreurs de programmation est de planter immédiatement. Vous devez exécuter vos programmes à l'aide d'un « outil de redémarrage » qui redémarrera automatiquement le programme en cas de plantage. Avec un « outil de redémarrage » en place, le plantage est le moyen le plus rapide de restaurer un service fiable face à une erreur de programmation transitoire…

### Citation de blog : « Aucune solution sûre pour sortir sans créer un état fragile indéfini »

Extrait de la documentation officielle de Node.js

 > …De par la nature même du fonctionnement de throw en JavaScript, il n'y a presque jamais aucun moyen de « reprendre là où vous vous étiez arrêté » en toute sécurité, sans fuite de références, ou sans créer une autre sorte d'état fragile non défini. Le moyen le plus sûr de répondre à une erreur levée est d'arrêter le processus. Bien sûr, dans un serveur Web normal, de nombreuses connexions peuvent être ouvertes et il n'est pas raisonnable de les fermer brutalement car une erreur a été déclenchée par quelqu'un d'autre. La meilleure approche consiste à envoyer une réponse d'erreur à la demande qui a déclenché l'erreur tout en laissant les autres se terminer dans leur temps normal et à cesser d'écouter les nouvelles demandes de ce processus.

### Citation de blog : « Sinon, vous risquez l'état de votre application »

Extrait du blog de debugable.com classé en 3ème position pour les mots clés “Node.js uncaught exception”

 > …Donc, à moins que vous sachiez vraiment ce que vous faites, vous devez effectuer un redémarrage en douceur de votre service après avoir reçu un événement d'exception « uncaughtException ». Sinon, vous risquez que l'état de votre application, ou celui des bibliothèques tierces, ne devienne incohérent, conduisant à toutes sortes de bugs fous…

### Citation de blog : « Il y a principalement trois écoles de réflexion sur la gestion des erreurs »

Extrait du blog de JS Recipes

> …Il y a principalement trois écoles de réflexion sur la gestion des erreurs :
1. Laissez l'application se planter et redémarrez-la.
2. Gérez toutes les erreurs possibles et ne plantez jamais.
3. Une approche équilibrée entre les deux
