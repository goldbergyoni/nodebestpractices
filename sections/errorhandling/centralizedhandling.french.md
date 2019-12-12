# Gérez les erreurs de manière centralisée, pas dans les middlewares

### Un paragraphe d'explication

En l'absence d'un objet dédié à la gestion des erreurs, les chances que des erreurs importantes se cachent sous le capot en raison d'une mauvaise manipulation sont plus grandes. L'objet gestionnaire d'erreur est là pour rendre l'erreur visible, par exemple en écrivant dans un logger bien formaté, en envoyant des événements à un produit de surveillance comme [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/) ou [Raygun](https://raygun.com/). La plupart des frameworks Web, comme [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers), fournissent un mécanisme de middleware de gestion des erreurs. Un flux de gestion d'erreurs typique pourrait être : des modules génèrent une erreur -> le routeur de l'API intercepte l'erreur -> il propage l'erreur au middleware (par exemple Express, KOA) qui est responsable de la capture des erreurs -> un gestionnaire d'erreurs centralisé est appelé -> le middleware est informé si cette erreur est une erreur non fiable (non opérationnelle) afin qu'il puisse redémarrer l'application avec douceur. Notez que c'est une pratique courante, mais erronée de gérer les erreurs dans le middleware Express - cela ne couvrira pas les erreurs qui sont lancées dans les interfaces non Web.

### Exemple de code - un flux d'erreur typique

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Strate de la DAL, nous ne gérons pas les erreurs ici
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error('Une bonne explication de l\'erreur à cet endroit', autres parametres utiles)
});

// Code de l'API route, nous interceptons les erreurs synchrone et asynchrone et les transmettons au middleware
try {
  customerService.addNew(req.body).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Gestion des erreurs du middleware, nous déléguons la gestion au gestionnaire d'erreurs centralisé
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// Strate de la DAL, nous ne gérons pas les erreurs ici
DB.addDocument(newCustomer, (error: Error, result: Result) => {
  if (error)
    throw new Error('Une bonne explication de l\'erreur à cet endroit', autres parametres utiles)
});

// Code de l'API route, nous interceptons les erreurs synchrone et asynchrone et les transmettons au middleware
try {
  customerService.addNew(req.body).then((result: Result) => {
    res.status(200).json(result);
  }).catch((error: Error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Gestion des erreurs du middleware, nous déléguons la gestion au gestionnaire d'erreurs centralisé
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```
</details>


### Exemple de code - gestion des erreurs dans un objet dédié

<details>
<summary><strong>Javascript</strong></summary>

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async (err) => {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.logError(err);
    await sendMailToAdminIfCritical();
    await saveInOpsQueueIfCritical();
    await determineIfOperationalError();
  };
}

export const handler = new ErrorHandler();
```
</details>


### Contre exemple de code - gestion des erreurs dans le middleware

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// middleware traitant l'erreur directement, qui va gérer les tâches Cron et tester les erreurs ?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Une erreur critique s\'est produite', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>


<details>
<summary><strong>Typescript</strong></summary>

```typescript
// middleware traitant l'erreur directement, qui va gérer les tâches Cron et tester les erreurs ?
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Une erreur critique s\'est produite', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>

### Citation de blog : « Parfois, les niveaux inférieurs ne peuvent rien faire d'utile, sauf propager l'erreur à leur appelant »

Extrait du blog de Joyent classé en 1ere position pour les mots clés “Node.js error handling”

> …Vous pouvez finir par gérer la même erreur à plusieurs niveaux de la pile. Cela se produit lorsque les niveaux inférieurs ne peuvent rien faire d'autre d'utile que de propager l'erreur à leur appelant, qui propage l'erreur à son appelant et ainsi de suite. Souvent, seul l'appelant de niveau supérieur sait quelle est la réponse appropriée, que ce soit pour réessayer l'opération, signaler une erreur à l'utilisateur ou autre chose. Mais cela ne signifie pas que vous devez essayer de signaler toutes les erreurs à une seule fonction de rappel de niveau supérieur, car cette fonction de rappel elle-même ne peut pas savoir dans quel contexte l'erreur s'est produite.…

### Citation de blog : « Gérer chaque erreur individuellement entraînerait une énorme duplication »

Extrait du blog de JS Recipes classé en 17eme position pour les mots clés “Node.js error handling”

> ……Uniquement dans le contrôleur api.js de Hackathon Starter, il y a plus de 79 occurrences d'objets d'erreur. Gérer chaque erreur individuellement entraînerait une énorme duplication de code. La meilleure chose à faire est de déléguer toute la logique de gestion des erreurs à un middleware Express…

### Citation de blog : « les erreurs HTTP n'ont pas leur place dans le code de votre base de données »

Extrait du blog de Daily JS classé en 14eme position pour les mots clés “Node.js error handling”

> ……Vous devez définir des propriétés utiles dans les objets d'erreur, mais utilisez ces propriétés de manière cohérente. Et ne traversez pas les flux : les erreurs HTTP n'ont pas leur place dans le code de votre base de données. Ou pour les développeurs dans les navigateurs, les erreurs Ajax ont une place dans le code qui parle au serveur, mais pas dans le code qui traite les templates de Mustache…
