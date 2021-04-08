# Utilisez uniquement l'objet intégré Error

### Un paragraphe d'explication

La nature permissive de JavaScript ainsi que sa variété d'options de flux de code (par exemple, EventEmitter, fonction de rappel, promesses, etc.) peut faire varier considérablement la façon dont les développeurs génèrent des erreurs - certains utilisent des chaînes, d'autres définissent leurs propres types personnalisés. L'utilisation de l'objet Error intégré de Node.js aide à maintenir l'uniformité dans votre code et avec les bibliothèques tierces, il préserve également des informations importantes comme la StackTrace. Lors de la levée de l'exception, il est généralement recommandé de la remplir avec des propriétés contextuelles supplémentaires telles que le nom de l'erreur et le code d'erreur HTTP associé. Pour atteindre cette uniformité et ces pratiques, envisagez d'étendre l'objet Error avec des propriétés supplémentaires, mais attention à ne pas en faire trop. Il est généralement judicieux d'étendre l'objet Error une seule fois avec un AppError pour toutes les erreurs au niveau de l'application, et de passer en argument toutes les données dont vous avez besoin pour différencier les différents types d'erreurs. Il n'est pas nécessaire d'étendre l'objet Error plusieurs fois (une fois pour chaque cas d'erreur, comme DbError, HttpError). Consulter l'exemple de code ci-dessous.

### Exemple de code - la bonne méthode

```javascript
// lève une Error depuis une fonction typique, qu'elle soit synchrone ou asynchrone
if(!productToAdd)
    throw new Error('Comment puis-je ajouter un nouveau produit lorsqu\'aucune valeur n\'est fournie ?');

// 'lève' une Error depuis EventEmitter
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('Oups !'));

// 'lève' une Error depuis une promesse
const addProduct = async (productToAdd) => {
  try {
    const existingProduct = await DAL.getProduct(productToAdd.id);
    if (existingProduct !== null) {
      throw new Error('Le produit existe déjà !');
    }
  } catch (err) {
    // ...
  }
}
```

### Exemple de code - la mauvaise méthode

```javascript
// lève une chaîne qui ne contient aucune information de trace de pile et autres propriétés de données importantes
if(!productToAdd)
    throw ('Comment puis-je ajouter un nouveau produit lorsqu\'aucune valeur n\'est fournie ?');
```

### Exemple de code - une méthode encore meilleure

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// objet d'erreur centralisé qui dérive de Error de Node
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...d'autres propriétés attribuées ici
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

// le client levant une exception
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'plus d\'explications', true)
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// objet d'erreur centralisé qui dérive de Error de Node
export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restaure la chaîne du prototype

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// le client levant une exception
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'plus d\'explications', true)
```
</details>

*Explication sur `Object.setPrototypeOf` en Typescript : https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### Citation de blog : « Je ne vois pas l'intérêt d'avoir beaucoup de types d'objets d'erreur différents »

Extrait du blog de Ben Nadel classé en 5ème position pour les mots clés “Node.js error object”

>… Personnellement, je ne vois pas l'intérêt d'avoir beaucoup de types d'objets d'erreur différents [comparé à l'extension d'une seule fois de AppError] - JavaScript, en tant que langage, ne semble pas répondre à la capture d'erreurs basée sur le constructeur. En tant que tel, la différenciation sur une propriété d'objet semble beaucoup plus facile que la différenciation sur un type de constructeur…

### Citation de blog : « Une chaîne n'est pas une erreur »

Extrait du blog de devthought.com classé en 6ème position pour les mots clés “Node.js error object”

> …le passage d'une chaîne au lieu d'une erreur entraîne une interopérabilité réduite entre les modules. Il rompt les contrats avec les API qui pourraient effectuer des vérifications d'Error avec `instanceof`, ou qui veulent en savoir plus sur l'erreur. Les objets d'Error, comme nous le verrons, ont des propriétés très intéressantes dans les moteurs JavaScript modernes en plus de contenir le message transmis au constructeur…

### Citation de blog : « L'héritage d'Error n'ajoute pas trop de valeur »

Extrait du blog de machadogj

> …Un problème que j'ai avec la classe Error est qu'il n'est pas si simple à étendre. Bien sûr, vous pouvez hériter de la classe et créer vos propres classes d'erreur comme HttpError, DbError, etc. Cependant, cela prend du temps et n'ajoute pas trop de valeur [que de l'étendre une seule fois pour une AppError] à moins que vous ne fassiez quelque chose avec des types. Parfois, vous voulez simplement ajouter un message et conserver l'erreur interne, et parfois vous voudrez peut-être étendre l'erreur avec des paramètres, etc.…

### Citation de blog : « Toutes les erreurs JavaScript et Système levées par Node.js héritent de Error »

Extrait de la documentation officielle de Node.js

> …Toutes les erreurs JavaScript et Système levées par Node.js héritent de, ou sont des instances de, la classe Error du JavaScript standard et sont garantes de fournir au moins les propriétés disponibles sur cette classe. Un objet Error JavaScript générique n'indique aucune circonstance particulière expliquant pourquoi l'erreur s'est produite. Les objets d'erreur capturent une « trace de la pile » détaillant le point dans le code où l'erreur a été instanciée et peuvent fournir une description textuelle de l'erreur. Toutes les erreurs générées par Node.js, y compris toutes les erreurs système et JavaScript, seront des instances ou hériteront de la classe Error…
