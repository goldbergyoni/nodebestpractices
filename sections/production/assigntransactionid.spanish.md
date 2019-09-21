# Asigna "TransactionId" a cada entrada de log

<br/><br/>

### Párrafo de explicación

El típico log es un almacén de entradas de todos los componentes y peticiones. Ante la detección de una línea sospechosa o error, se vuelve un lío cruzar dicha línea con otras líneas que pertenezcan a la misma cadena de sucesos (por ejemplo, el usuario "John" intentó comprar algo). Esto se vuelve aún más crítico y desafiante en un entorno de microservicios en el que para una petición/transacción pueden intervenir múltiples máquinas. Esto se soluciona asignando un valor único a modo de identificador de "la transacción" a todas las entradas de la misma petición, así cuando se detecta una línea de log puedes copiar dicho ID y buscar todas las líneas con la misma ID de transacción. Sin embargo, lograr esto en Node no es sencillo ya que se usa un solo thread para atender a todas las peticiones —considera el uso de una librería que agrupe datos a nivel de petición—. Observa el ejemplo de código en siguiente la imagen. Cuando llames a otro microservicio, pasa el ID de transacción en una cabecera HTTP como "x-transaction-id" para mantener el mismo contexto.

<br/><br/>

### Code example: typical Express configuration

```javascript
// when receiving a new request, start a new isolated context and set a transaction Id. The following example is using the NPM library continuation-local-storage to isolate requests

const { createNamespace } = require('continuation-local-storage');
var session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by Id');
});

// Now any other service or components can have access to the contextual, per-request, data
class someService {
    getById(id) {
        logger.info(“Starting to get something by Id”);
        // other logic comes here
    }
}

// The logger can now append the transaction-id to each entry so that entries from the same request will have the same value
class logger {
    info (message)
    {console.log(`${message} ${session.get('transactionId')}`);}
}
```
