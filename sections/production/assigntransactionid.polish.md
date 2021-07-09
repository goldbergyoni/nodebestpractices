# Przypisz ‘TransactionId’ do każdej instrukcji dziennika

<br/><br/>

### Wyjaśnienie jednym akapitem

Typowy dziennik to magazyn wpisów ze wszystkich komponentów i żądań. Po wykryciu jakiejś podejrzanej linii lub błędu staje się pokręcony, aby dopasować inne linie należące do tego samego określonego przepływu (np. użytkownik „John” próbował coś kupić). Staje się to jeszcze bardziej krytyczne i trudne w środowisku mikrousług, gdy żądanie / transakcja może obejmować wiele komputerów. Należy rozwiązać ten problem, przypisując unikalną wartość identyfikatora transakcji do wszystkich wpisów z tego samego żądania, aby po wykryciu jednej linii można skopiować identyfikator i wyszukać każdą linię o podobnym identyfikatorze transakcji. Jednak osiągnięcie tego w Node nie jest proste, ponieważ pojedynczy wątek służy do obsługi wszystkich żądań - rozważ użycie biblioteki, która może grupować dane na poziomie żądań - patrz przykład kodu na następnym slajdzie. Podczas wywoływania innej mikrousługi przekaż identyfikator transakcji za pomocą nagłówka HTTP, takiego jak „x-transaction-id”, aby zachować ten sam kontekst.

<br/><br/>

### Przykład kodu: typowa konfiguracja Express

```javascript
// when receiving a new request, start a new isolated context and set a transaction Id. The following example is using the npm library continuation-local-storage to isolate requests

const { createNamespace } = require('continuation-local-storage');
const session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by Id');
});

// Now any other service or components can have access to the contextual, per-request, data
class someService {
    getById(id) {
        logger.info('Starting to get something by Id');
        // other logic comes here
    }
}

// The logger can now append the transaction-id to each entry so that entries from the same request will have the same value
class logger {
    info (message) {
        console.log(`${message} ${session.get('transactionId')}`);
    }
}
```
