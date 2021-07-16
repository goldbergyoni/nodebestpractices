# Użyj dojrzałego programu rejestrującego, aby zwiększyć widoczność błędów

### Wyjaśnienie jednym akapitem

Wszyscy kochamy console.log, ale oczywiście poważny projekt to renomowany i trwały rejestrator, taki jak [Winston] [winston] (bardzo popularny) lub [Pino] [pino] (nowy dzieciak w mieście, który koncentruje się na wydajności). Zestaw praktyk i narzędzi pomoże znacznie szybciej uzasadnić błędy - (1) często rejestruj dane przy użyciu różnych poziomów (debugowanie, informacje, błąd), (2) podczas logowania, podaj informacje kontekstowe jako obiekty JSON, patrz przykład poniżej. (3) Oglądaj i filtruj dzienniki za pomocą interfejsu API do wysyłania zapytań (wbudowanego w większość programów rejestrujących) lub oprogramowania do przeglądania dzienników. (4) Ujawnij i wyślij oświadczenie dziennika dla zespołu operacyjnego za pomocą narzędzi wywiadu operacyjnego, takich jak Splunk.

[winston]: https://www.npmjs.com/package/winston
[pino]: https://www.npmjs.com/package/pino

### Przykład kodu - Winston Logger w akcji

```javascript
// your centralized logger object
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

// custom code somewhere using the logger
logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });
```

### Przykład kodu - zapytanie do folderu dziennika (wyszukiwanie wpisów)

```javascript
const options = {
  from: Date.now() - 24 * 60 * 60 * 1000,
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};

// Find items logged between today and yesterday.
winston.query(options, (err, results) => {
  // execute callback with results
});
```

### Cytat z Bloga: "Logger Requirements"

 Z Bloga Strong Loop

> Lets identify a few requirements (for a logger):
> 1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
> 2. Logging format should be easily digestible by humans as well as machines.
> 3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…
