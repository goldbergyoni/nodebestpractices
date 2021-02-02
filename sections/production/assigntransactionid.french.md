# Attribuez un ‘TransactionId’ à chaque relevé du journal

<br/><br/>

### Un paragraphe d'explication

Un journal typique est un registre des entrées de tous les composants et requêtes. Lorsqu'une ligne ou une erreur suspecte est détectée, il devient difficile de faire correspondre d'autres lignes appartenant au même flux spécifique (par exemple, l'utilisateur "John" a essayé d'acheter quelque chose). Cela devient encore plus critique et difficile dans un environnement de micro-services lorsqu'une requête/transaction peut concerner plusieurs ordinateurs. Il convient de remédier à ce problème en attribuant une valeur d'identification de transaction unique à toutes les entrées d'une même requête, de sorte qu'en détectant une ligne, on puisse copier l'identifiant et rechercher toutes les lignes qui ont un identifiant de transaction similaire. Toutefois, la réalisation de cette opération dans Node n'est pas simple, car un seul processus est utilisé pour toutes les requêtes - envisagez d'utiliser une bibliothèque qui peut regrouper les données au niveau de la requête - voir l'exemple de code suivant. Lorsque vous appelez d'autres micro-services, transmettez l'identifiant de la transaction en utilisant une entête HTTP comme "x-transaction-id" pour conserver le même contexte.

<br/><br/>

### Exemple de code : configuration typique d'Express

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
