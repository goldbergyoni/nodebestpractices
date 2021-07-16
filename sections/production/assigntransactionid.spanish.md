# Asigna "TransactionId" a cada entrada de log

<br/><br/>

### Párrafo de explicación

El típico log es un almacén de entradas de todos los componentes y peticiones. Ante la detección de una línea sospechosa o error, se vuelve un lío cruzar dicha línea con otras líneas que pertenezcan a la misma cadena de sucesos (por ejemplo, el usuario "John" intentó comprar algo). Esto se vuelve aún más crítico y desafiante en un entorno de microservicios en el que para una petición/transacción pueden intervenir múltiples máquinas. Esto se soluciona asignando un valor único a modo de identificador de "la transacción" a todas las entradas de la misma petición, así cuando se detecta una línea de log puedes copiar dicho ID y buscar todas las líneas con la misma ID de transacción. Sin embargo, lograr esto en Node no es sencillo ya que se usa un solo hilo para atender a todas las peticiones —considere el uso de una biblioteca que agrupe datos a nivel de petición—. Observe el ejemplo de código en siguiente la imagen. Cuando llames a otro microservicio, pasa el ID de transacción en una cabecera HTTP como "x-transaction-id" para mantener el mismo contexto.

<br/><br/>

### Code example: compartiendo un transactionId a múltiples funciones de petición y entre servicios usando [async-local-storage](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage)

 **¿Qué es async-local-storage?** Puedes considerarlo como la alternativa Node para hilar almacenamiento de datos locales. Es básicamente un almacenamiento para flujos asíncronos en Node. Puedes ver más información [aquí](https://www.freecodecamp.org/news/async-local-storage-nodejs/).

```javascript
const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const uuid = require('uuid/v4');

const asyncLocalStorage = new AsyncLocalStorage();

// Configura el TransactionId de la petición entrante
const transactionIdMiddleware = (req, res, next) => {
    // El primer argumento de asyncLocalStorage.run es la inicialización de nuestro almacén de estado, el segundo argumento es la función que tiene acceso al almacén
    asyncLocalStorage.run(new Map(), () => {
        // Intenta extraer el TransactionId de la cabecera de la petición, o generar uno nuevo si no existe
        const transactionId = req.headers['transactionId'] || uuid();

        // Configura el TransactionId dentro del almacén
        asyncLocalStorage.getStore().set('transactionId', transactionId);
        
        // Al llamar a next() dentro de la función, nos aseguramos que los otros middlewares corran en el mismo AsyncLocalStorage
        next();
    });
};

const app = express();
app.use(transactionIdMiddleware);

// Configurar TransactionId para peticiones externas
app.get('/', (req, res) => {
    // Una vez que el TransactionId ha sido inicializado dentro del middleware, es accesible en cualquier punto del flujo de petición
    const transactionId = asyncLocalStorage.getStore().get('transactionId');

    try {
        // Agrega TransactionId como cabecera para pasarlo al siguiente servicio
        const response = await axios.get('https://externalService.com/api/getAllUsers', headers: {
        'x-transaction-id': transactionId
        });
    } catch (err) {
        // El error es pasado al middleware, y no es necesario enviarlo sobre el transactionId
        next(err);
    }

    logger.info('externalService was successfully called with TransactionId header');

    res.send('OK');
});

// el middleware manejador de errores invoca al logger
app.use(async (err, req, res, next) => {
    await logger.error(err);
});

// El logger puede agregar el transactionID a cada entrada para que las entradas de la misma petición tengan el mismo valor
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
<summary><strong>Código de ejemplo: Usando una biblioteca asistente para simplificar la sintaxis</strong></summary>

Sharing TransactionId among current request functions using [cls-rtracer](https://www.npmjs.com/package/cls-rtracer) (a library based on async-local-storage, implemented for Express & Koa middlewares and Fastify & Hapi plugins)

Compartiendo TransactionId entre las funciones de petición actuales usando [cls-rtracer](https://www.npmjs.com/package/cls-rtracer) (una biblioteca basada en async-local-storage (almacenamiento local asíncrono), implementada para middlewares Express y Koa y para las extensiones Fastify y Hapi)

```javascript
const express = require('express');
const rTracer = require('cls-rtracer');

const app = express();

app.use(rTracer.expressMiddleware());

app.get('/getUserData/{id}', async (req, res, next) => {
    try {
        const user = await usersRepo.find(req.params.id);

        // El TransactionId es alcanzable dentro del logger, no hay necesidad de enviárselo
        logger.info(`user ${user.id} data was fetched successfully`);

        res.json(user);
    } catch (err) {
        // El error es pasado al middleware
        next(err);
    }
})

// middleware manejador de errores invoca al logger
app.use(async (err, req, res, next) => {
    await logger.error(err);
});

// The logger can now append the TransactionId to each entry so that entries from the same request will have the same value
// El logar puede agregar el TransactionId en cada entrada, para que las entradas de la misma petición tengan el mismo valor
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

Compartiendo TransactionId entre microservicios

```javascript
// cls-tracer tienen la habilidad de almacenar el TransactionId en la cabecera de las peticiones salientes, y extraer el TransactionId de las cabeceras de peticiones entrantes, solo al sobre escribir la configuración por defecto del middleware
app.use(rTracer.expressMiddleware({
    // Agrega TransactionId a la cabecera
    echoHeader: true,
    // Respeta TransactionId de la cabecera
    useHeader: true,
    // Nombre de la cabecera de TransactionId
    headerName: 'x-transaction-id'
}));

const axios = require('axios');

// Ahora el servicio externo recibirá el automáticamente el TransactionId actual como cabecera
const response = await axios.get('https://externalService.com/api/getAllUsers');
```
</details>
<br/>

**NOTICE: there are two restrictions on using async-local-storage:**
1. It requires Node v.14. 
2. It is based on a lower level construct in Node called async_hooks which is still experimental, so you may have the fear of performance problems. Even if they do exist, they are very negligible, but you should make your own considerations.

**Nota: hay dos restricciones al usar async-local-storage**
1. Requiere Node v.14.
2. Está basado en un constructor de bajo nivel en Node llamado async_hooks el cual aún es experimental, debido a esto tal vez debas esperar problemas de rendimiento. Incluso si existen, son casi imperceptibles, pero igual deberías tenerlo en cuenta.

<br/>

<details>
<summary><strong>Código de ejemplo - configuración común de express sin la dependencia async-local-storage</strong></summary>

```javascript
// cuando recibes una nueva petición, empieza un nuevo contexto aislado y configura un TransactionId. el siguiente ejemplo usa una biblioteca npm llamada continuation-local-storage, para aislar peticiones
const { createNamespace } = require('continuation-local-storage');
const session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by id');
});

// Ahora cualquier otro servicio o componente puede acceder a los datos contextuales por petición
class someService {
    getById(id) {
        logger.info('Starting to get something by id');
        // otra lógica aquí
    }
}

// El logger puede agregar el TransactionId a cada entrada, para que las entradas de la misma petición tengan el mismo valor
class logger {
    info (message) {
        console.log(`${message} ${session.get('transactionId')}`);
    }
}
```
</details>

<br/><br/>

### Bueno: Logs con un TransactionId asignado - pueden ser usados como filtro para ver un único flujo
![alt text](https://i.ibb.co/YjJwgbN/logs-with-transaction-id.jpg "Logs con TransactionId")
<br/><br/>

### Malo: logs sin TransactionId- no hay opción de usar un filtro y ver solo un flujo, necesita entender por su cuenta que logs son relevantes entre todo el "ruido" alrededor
![alt text](https://i.ibb.co/PFgVNfn/logs-withtout-transaction-id.jpg "Logs sin TransactionI)d")

<br/><br/>

### Cita de blog: "La noción de un Id de correlación es simple, es un valor que es común a todas las peticiones, mensajes y respuestas en una transacción dada. Con su simplicidad consigues un gran poder"

De [rapid7](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/)

> In the old days when transactional behavior happened in a single domain, in step-by-step procedures, keeping track of request/response behavior was a simple undertaking. However, today one request to a particular domain can involve a myriad of subsequent asynchronous requests from the starting domain to others. For example, you send a request to Expedia, but behind the scenes Expedia is forwarding your request as a message to a message broker. Then that message is consumed by a hotel, airline and car rental agency that responds asynchronously too. So the question comes up, with your one request being passed about to a multitude of processing consumers, how do we keep track of the transaction? The answer is: use a Correlation ID.

> En los viejos tiempos cuando el comportamiento de transacciones ocurrían en un solo dominio, en procedimientos paso a paso, mantener seguimiento del comportamiento de las peticiones/respuestas era simple. Pero, hoy en día una petición a un dominio particular puede involucrar una múltitud de peticiones asíncronas subsecuentes del dominio inicial a otras. Por ejemplo, envías una petición a Expedia, pero ese mensaje es consumido por un hotel, una aerolínea y una agencia de renta de carros que también responden de manera asíncrona. Entonces surge la pregunta, con una petición que pasa por una múltitud de procesadores de consumo ¿Cómo mantenemos seguimiento de la transacción?, la respuesta es: use un Id de correlación.