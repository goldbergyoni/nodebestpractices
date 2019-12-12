# Quittez le processus avec élégance lorsqu'un étranger arrive en ville

### Un paragraphe d'explication

Quelque part dans votre code, un objet gestionnaire d'erreur est chargé de décider comment procéder lorsqu'une erreur est levée - si l'erreur est fiable (c.-à-d. une erreur opérationnelle, voir plus d'explications dans la bonne pratique n° 3), alors l'écriture dans le fichier journal peut être suffisante. Les choses deviennent floues si l'erreur n'est pas familière - cela signifie que certains composants peuvent être dans un état défectueux et toutes les demandes futures sont susceptibles d'échouer. Par exemple, en supposant un service émetteur de jetons avec un état unique qui a levé une exception et a perdu son état - à partir de ce moment, il pourrait se comporter de manière inattendue et entraîner l'échec de toutes les demandes. Dans ce scénario, arrêtez le processus et utilisez un « outil de redémarrage » (comme Forever, PM2, etc.) pour recommencer avec un état propre.

### Exemple de code : décider s'il faut planter

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// En supposant que les développeurs marquent les erreurs opérationnelles connues avec error.isOperational = true, lisez la bonne pratique n° 3
process.on('uncaughtException', (error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// le gestionnaire d'erreurs centralisé encapsule la logique liée à la gestion des erreurs
function errorHandler() {
  this.handleError = (error) => {
    return logger.logError(error)
      .then(sendMailToAdminIfCritical)
      .then(saveInOpsQueueIfCritical)
      .then(determineIfOperationalError);
  }

  this.isTrustedError = (error) => {
    return error.isOperational;
  }
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// En supposant que les développeurs marquent les erreurs opérationnelles connues avec error.isOperational = true, lisez la bonne pratique n° 3
process.on('uncaughtException', (error: Error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// objet d'erreur centralisé qui dérive de l'Error de Node
export class AppError extends Error {
  public readonly isOperational: boolean;

  constructor(description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype); // restaurer la chaîne du prototype
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

// le gestionnaire d'erreurs centralisé encapsule la logique liée à la gestion des erreurs
class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.logError(err);
    await sendMailToAdminIfCritical();
    await saveInOpsQueueIfCritical();
    await determineIfOperationalError();
  };

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
}

export const handler = new ErrorHandler();
```
</details>

### Citation de blog : « La meilleure façon est de planter »

Extrait du blog de Joyent

> …La meilleure façon de récupérer des erreurs de programmation est de planter immédiatement. Vous devez exécuter vos programmes à l'aide d'un « outil de redémarrage » qui redémarrera automatiquement le programme en cas de plantage. Avec un « outil de redémarrage » en place, le plantage est le moyen le plus rapide de restaurer un service fiable face à une erreur de programmation transitoire…

### Citation de blog : « Il y a principalement trois écoles de réflexion sur la gestion des erreurs »

Extrait du blog de JS Recipes

> …Il y a principalement trois écoles de réflexion sur la gestion des erreurs :
1. Laissez l'application se planter et redémarrez-la.
2. Gérez toutes les erreurs possibles et ne plantez jamais.
3. Une approche équilibrée entre les deux

### Citation de blog : « Aucune solution sûre pour sortir sans créer un état fragile indéfini »

Extrait de la documentation officielle de Node.js

> …De par la nature même du fonctionnement de throw en JavaScript, il n'y a presque jamais aucun moyen de « reprendre là où vous vous étiez arrêté » en toute sécurité, sans fuite de références, ou sans créer une autre sorte d'état fragile non défini. Le moyen le plus sûr de répondre à une erreur levée est d'arrêter le processus. Bien sûr, dans un serveur Web normal, de nombreuses connexions peuvent être ouvertes et il n'est pas raisonnable de les fermer brutalement car une erreur a été déclenchée par quelqu'un d'autre. La meilleure approche consiste à envoyer une réponse d'erreur à la demande qui a déclenché l'erreur tout en laissant les autres se terminer dans leur temps normal et à cesser d'écouter les nouvelles demandes de ce processus.
