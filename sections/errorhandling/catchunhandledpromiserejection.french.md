# Capturez les rejets de promesses non gérés

<br/><br/>

### Un paragraphe d'explication

En règle générale, la plupart du code d'application Node.js/Express moderne s'exécute dans le cadre de promesse - que ce soit dans le gestionnaire .then, un rappel de fonction ou dans un bloc catch. Étonnamment, à moins qu'un développeur n'ait pensé à ajouter une clause .catch, les erreurs lancées à ces endroits ne sont pas traitées par le gestionnaire d'événement uncaughtException et disparaissent. Les versions récentes de Node ont ajouté un message d'avertissement lorsqu'un rejet non géré apparaît, bien que cela puisse aider à remarquer quand les choses tournent mal, mais ce n'est évidemment pas une bonne méthode de gestion des erreurs. La solution simple consiste à ne jamais oublier d'ajouter des clauses .catch dans chaque appel de chaîne de promesse et de rediriger vers un gestionnaire d'erreurs centralisé. Cependant, la construction de votre stratégie de gestion des erreurs uniquement sur la discipline du développeur est quelque peu fragile. Par conséquent, il est fortement recommandé d'utiliser une solution de secours élégante et de vous abonner à `process.on('unhandledRejection', callback)` - cela garantira que toute erreur de promesse, si elle n'est pas traitée localement, sera traitée.

<br/><br/>

### Exemple de code : ces erreurs ne seront détectées par aucun gestionnaire d'erreurs (sauf unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // cette erreur disparaîtra
  if(johnSnow.isAlive === false)
      throw new Error('ahhhh');
});
```

<br/><br/>

### Exemple de code : capturer des promesses non résolues et rejetées

<details>
<summary><strong>Javascript</strong></summary>

```javascript
process.on('unhandledRejection', (reason, p) => {
  // Je viens d'attraper un rejet de promesse non géré,
  // puisque nous avons déjà un gestionnaire de secours pour les erreurs non gérées (voir ci-dessous),
  // laissons throw et laissons-le gérer cela
  throw reason;
});

process.on('uncaughtException', (error) => {
  // Je viens de recevoir une erreur qui n'a jamais été traitée, il est temps de la gérer et de décider ensuite si un redémarrage est nécessaire
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
process.on('unhandledRejection', (reason: string, p: Promise<any>) => {
// Je viens d'attraper un rejet de promesse non géré,
  // puisque nous avons déjà un gestionnaire de secours pour les erreurs non gérées (voir ci-dessous),
  // laissons throw et laissons-le gérer cela
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  // Je viens de recevoir une erreur qui n'a jamais été traitée, il est temps de la gérer et de décider ensuite si un redémarrage est nécessaire
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});
```
</details>

<br/><br/>

### Citation de blog : « Si vous pouvez faire une erreur, vous la ferez à un moment donné »

Extrait du blog de James Nelson

 > Testons votre compréhension. Lequel des éléments suivants devrez afficher une erreur sur la console ?

```javascript
Promise.resolve('promised value').then(() => {
  throw new Error('error');
});

Promise.reject('error value').catch(() => {
  throw new Error('error');
});

new Promise((resolve, reject) => {
  throw new Error('error');
});
```

> Je ne sais pas pour vous, mais ma réponse est que je m'attends à ce que tous affichent une erreur. Cependant, la réalité est qu'un certain nombre d'environnements JavaScript modernes n'imprimeront d'erreurs pour aucun d'entre eux. Le problème avec l'être humain est que si vous pouvez faire une erreur, vous la ferez à un moment donné. En gardant cela à l'esprit, il semble évident que nous devons concevoir les choses de manière à ce que les erreurs fassent le moins de mal possible, ce qui signifie gérer les erreurs par défaut, et non les éliminer.
