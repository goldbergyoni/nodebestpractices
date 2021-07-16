# Назначьте "TransactionId" для каждого вхождения журнала логирования

<br/><br/>

### Объяснение в один абзац

Типичный журнал - это хранилище записей всех компонентов и запросов. При обнаружении какой-либо подозрительной линии или ошибки становится трудно сопоставить другие строки, принадлежащие к тому же конкретному потоку (например, пользователь "Джон" пытался что-то купить). Это становится еще более критическим и сложным в микросервисной среде, когда запрос/транзакция может охватывать несколько компьютеров. Чтобы решить эту проблему, присвойте уникальное значение идентификатора транзакции всем записям одного и того же запроса, чтобы при обнаружении одной строки можно было копировать идентификатор и искать каждую строку, имеющую аналогичный идентификатор транзакции. Однако добиться этого в узле непросто, так как для обслуживания всех запросов используется один поток - рассмотрите возможность использования библиотеки, которая может группировать данные на уровне запроса - см. Пример кода на следующем слайде. При вызове другого микросервиса передайте идентификатор транзакции, используя заголовок HTTP, например "x-transaction-id", чтобы сохранить тот же контекст.

<br/><br/>

### Пример кода: типичная экспресс-конфигурация

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
