# Attribuez un ‘TransactionId’ à chaque relevé du journal

<br/><br/>

### Un paragraphe d'explication

Un journal typique est un registre des entrées de tous les composants et requêtes. Lorsqu'une ligne ou une erreur suspecte est détectée, il devient difficile de faire correspondre d'autres lignes appartenant au même flux spécifique (par exemple, l'utilisateur "John" a essayé d'acheter quelque chose). Cela devient encore plus critique et difficile dans un environnement de micro-services lorsqu'une requête/transaction peut concerner plusieurs ordinateurs. Il convient de remédier à ce problème en attribuant une valeur d'identification de transaction unique à toutes les entrées d'une même requête, de sorte qu'en détectant une ligne, on puisse copier l'identifiant et rechercher toutes les lignes qui ont un identifiant de transaction similaire. Toutefois, la réalisation de cette opération dans Node n'est pas simple, car un seul processus est utilisé pour toutes les requêtes - envisagez d'utiliser une bibliothèque qui peut regrouper les données au niveau de la requête - voir l'exemple de code suivant. Lorsque vous appelez d'autres micro-services, transmettez l'identifiant de la transaction en utilisant une entête HTTP comme "x-transaction-id" pour conserver le même contexte.

<br/>

### Exemple de code : partage de TransactionId entre les fonctions de requête et entre les services à l'aide de [async-local-storage](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage)

 **Qu'est ce que async-local-storage ?** Vous pouvez le considérer comme l'alternative de Node pour le stockage local des threads.
 Il s'agit essentiellement d'un stockage pour les flux asynchrones dans Node. Vous pouvez en savoir plus [ici](https://www.freecodecamp.org/news/async-local-storage-nodejs/).

```javascript
const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const uuid = require('uuid/v4');

const asyncLocalStorage = new AsyncLocalStorage();

// Définit le TransactionId des requêtes entrantes
const transactionIdMiddleware = (req, res, next) => {
    // Le premier argument de asyncLocalStorage.run est l'initialisation de l'état du stockage, le second argument est la fonction qui a accès à ce stockage
    asyncLocalStorage.run(new Map(), () => {
        // Essaye d'extraire le TransactionId de l'entête de la requête, ou en génére un nouveau s'il n'existe pas
        const transactionId = req.headers['transactionId'] || uuid();

        // Définit le TransactionId à l'intérieur du stockage
        asyncLocalStorage.getStore().set('transactionId', transactionId);

        // En appelant next() dans la fonction, nous nous assurons que tous les autres middlewares fonctionnent dans le même contexte AsyncLocalStorage
        next();
    });
};

const app = express();
app.use(transactionIdMiddleware);

// Définit le TransactionId des requêtes sortantes
app.get('/', (req, res) => {
    // Une fois que TransactionId a été initialisé dans le middleware, il est accessible à tout moment pour le flux de requêtes.
    const transactionId = asyncLocalStorage.getStore().get('transactionId');

    try {
        // Ajoute TransactionId comme entête afin de le passer au service suivant
        const response = await axios.get('https://externalService.com/api/getAllUsers', headers: {
        'x-transaction-id': transactionId
        });
    } catch (err) {
        // L'erreur est transmise au middleware, et il n'est pas nécessaire d'envoyer le TransactionId
        next(err);
    }

    logger.info('externalService a été appelé avec succès avec l\'entête TransactionId');

    res.send('OK');
});

// Un middleware de gestion des erreurs appelle le journal
app.use(async (err, req, res, next) => {
    await logger.error(err);
});

// Le journal peut désormais ajouter le TransactionId à chaque entrée, de sorte que les entrées d'une même requête aient la même valeur
class logger {
    error(err) {
        console.error(`${err} ${asyncLocalStorage.getStore().get('transactionId')}`);
    }

    info(message) {
        console.log(`${message} ${asyncLocalStorage.getStore().get('transactionId')}`);
    }
}
```
<br/>

<details>
<summary><strong>Exemple de code : utilisation d'une bibliothèque pour simplifier la syntaxe</strong></summary>

Partage du TransactionId entre les fonctions de requête actuelles en utilisant [cls-rtracer](https://www.npmjs.com/package/cls-rtracer) (une bibliothèque basée sur async-local-storage, implémentée pour les middlewares Express & Koa et les plugins Fastify & Hapi)

```javascript
const express = require('express');
const rTracer = require('cls-rtracer');

const app = express();

app.use(rTracer.expressMiddleware());

app.get('/getUserData/{id}', async (req, res, next) => {
    try {
        const user = await usersRepo.find(req.params.id);

        // Le TransactionId est accessible de l'intérieur du journal, il n'est pas nécessaire de l'envoyer
        logger.info(`les données de l'utilisateur ${user.id} ont été récupérées avec succès`);

        res.json(user);
    } catch (err) {
        // L'erreur est transmise au middleware
        next(err);
    }
})

// Un middleware de gestion des erreurs appelle le journal
app.use(async (err, req, res, next) => {
    await logger.error(err);
});

// Le journal peut désormais ajouter le TransactionId à chaque entrée, de sorte que les entrées d'une même requête aient la même valeur
class logger {
    error(err) {
        console.error(`${err} ${rTracer.id()}`);
    }

    info(message) {
        console.log(`${message} ${rTracer.id()}`);
    }
}
```
<br/>

Partage le TransactionId entre les micro services

```javascript
// cls-tracer a la capacité de stocker le TransactionId sur les entêtes des requêtes sortantes de votre service, et d'extraire le TransactionId des entêtes des requêtes entrantes, en remplaçant simplement la configuration par défaut du middleware
app.use(rTracer.expressMiddleware({
    // Ajoute le TransactionId à l'entête
    echoHeader: true,
    // Respecte le TransactionId de l'entête
    useHeader: true,
    // Nom de l'entête TransactionId
    headerName: 'x-transaction-id'
}));

const axios = require('axios');

// Maintenant, le service extérieur obtiendra automatiquement le TransactionId actuel comme entête
const response = await axios.get('https://externalService.com/api/getAllUsers');
```
</details>
<br/>

**REMARQUE : l'utilisation de async-local-storage est soumise à deux restrictions :**
1. Il nécessite Node v.14.
2. Il est basé sur une construction de niveau inférieur dans Node appelé async_hooks qui est encore expérimental, donc vous pouvez craindre des problèmes de performance. Même s'ils existent, ils sont très négligeables, mais vous devriez faire vos propres choix.

<br/>

<details>
<summary><strong>Exemple de code - configuration Express typique sans dépendance de async-local-storage</strong></summary>

```javascript
// à la réception d'une nouvelle requête, commencez un nouveau contexte isolé et définissez un identifiant de transaction. L'exemple suivant utilise la bibliothèque npm continuation-local-storage pour isoler les requêtes

const { createNamespace } = require('continuation-local-storage');
const session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'un GUID unique');
    someService.getById(req.params.id);
    logger.info('Début de l\'identification');
});

// Désormais, tout autre service ou composant peut avoir accès aux données contextuelles par requête
class someService {
    getById(id) {
        logger.info('Début de l\'identification');
        // une autre logique vient ici
    }
}

// Le journal peut désormais ajouter l'identifiant de la transaction à chaque entrée, de sorte que les entrées d'une même requête aient la même valeur
class logger {
    info (message) {
        console.log(`${message} ${session.get('transactionId')}`);
    }
}
```
</details>

<br/><br/>

### Bon : Journaux avec un TransactionId attribué - peut être utilisé comme filtre pour ne voir qu'un seul flux
![alt text](https://i.ibb.co/YjJwgbN/logs-with-transaction-id.jpg "Journaux avec transaction id")
<br/><br/>

### Mauvais : journaux sans TransactionId - pas de possibilité d'utiliser un filtre et de ne voir qu'un seul flux, vous devez comprendre par vous-même quels journaux sont pertinents entre tous les « bruits » environnants
![alt text](https://i.ibb.co/PFgVNfn/logs-withtout-transaction-id.jpg "Journaux avec transaction id")

<br/><br/>

### Citation de blog : « La notion d'ID de corrélation est simple. C'est une valeur qui est commune à toutes les requêtes, messages et réponses dans une transaction donnée. Avec cette simplification, vous obtenez beaucoup de pouvoir ».

Extrait de [rapid7](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/)

> Dans le passé, lorsque le comportement transactionnel se déroulait dans un seul domaine, dans le cadre de procédures par étapes, le suivi du comportement des requêtes et des réponses était une tâche simple. Cependant, aujourd'hui, une requête vers un domaine particulier peut impliquer une myriade de requêtes asynchrones ultérieures du domaine de départ vers d'autres domaines. Par exemple, vous envoyez une requête à Expedia, mais en coulisse, Expedia transmet votre requête sous forme de message à un gestionnaire de messages. Ce message est ensuite consommé par un hôtel, une compagnie aérienne et une agence de location de voitures qui répondent également de manière asynchrone. La question se pose donc, alors que votre seule requête est transmise à une multitude de consommateurs en cours de traitement, comment pouvons-nous suivre la transaction ? La réponse est : utiliser un identifiant de corrélation.