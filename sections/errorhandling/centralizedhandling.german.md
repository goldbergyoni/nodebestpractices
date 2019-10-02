# Fehler zentral behandeln. Nicht innerhalb von Middlewares

### Ein Absatz Erklärer

Ohne ein dediziertes Objekt für die Fehlerbehandlung sind die Chancen größer, dass sich wichtige Fehler aufgrund unsachgemäßer Handhabung unter dem Radar verstecken. Das Error-Handler-Objekt ist dafür verantwortlich, den Fehler sichtbar zu machen, z.B. indem es in einen gut formatierten Logger schreibt, Ereignisse an ein Überwachungsprodukt wie [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), oder [Raygun](https://raygun.com/) sendet. Die meisten Web-Frameworks, wie [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers), bieten einen Mechanismus zur Fehlerbehandlung von Middleware. Ein typischer Fehlerbehandlungsablauf könnte sein: Einige Module werfen einen Fehler -> API-Router fängt den Fehler ab -> er verbreitet den Fehler an die Middleware (z.B. Express, KOA), die für das Abfangen von Fehlern verantwortlich ist -> ein zentralisierter Fehlerbehandler wird aufgerufen -> der Middleware wird mitgeteilt, ob es sich bei diesem Fehler um einen nicht vertrauenswürdigen Fehler (nicht operativ) handelt, so dass er die App elegant neu starten kann. Beachte, dass es eine gängige, aber falsche Praxis ist, Fehler innerhalb der Express-Middleware zu behandeln - dies behandelt nicht Fehler, die in Nicht-Web-Schnittstellen auftreten.

### Code-Beispiel: – ein typischer Fehlerverlauf

```javascript
// DAL layer, we don't handle errors here
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error("Great error explanation comes here", other useful parameters)
});

// API route code, we catch both sync and async errors and forward to the middleware
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

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```

### Code-Beispiel: – Fehlerbehandlung innerhalb eines dedizierten Objekts

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async function(error) {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```

### Code-Beispiel: – Anti-Pattern: Fehlerbehandlung innerhalb der Middleware

```javascript
// middleware handling the error directly, who will handle Cron jobs and testing errors?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```

### Blog-Zitat: "Manchmal können niedrigere Ebenen nichts Nützliches tun, außer den Fehler an ihren Aufrufer weiterzugeben."

Aus dem Blog Joyent (Rang 17 für die keywords “Node.js error handling”)

> …Es kann sein, dass Du den gleichen Fehler auf mehreren Ebenen des Stapels behandelst. Dies geschieht, wenn niedrigere Ebenen nichts Nützliches tun können, außer den Fehler an ihren Aufrufer weiterzugeben, der den Fehler an seinen Aufrufer weiterleitet, und so weiter. Oft weiß nur der oberste Aufrufer, was die richtige Antwort ist, ob es nun darum geht, den Vorgang erneut zu versuchen, einen Fehler an den Benutzer zu melden oder etwas anderes. Das bedeutet aber nicht, dass Du versuchen solltest, alle Fehler an einen einzelnen Callback der obersten Ebene zu melden, denn dieser Callback selbst kann nicht wissen, in welchem Kontext der Fehler aufgetreten ist…

### Blog-Zitat: "Die individuelle Behandlung jedes Fehlers würde zu enormen Doppelarbeit führen."

Aus dem Blog JS Recipes (Rang 17 für die keywords “Node.js error handling”)

> …Allein im Hackathon Starter api.js Controller gibt es über 79 Vorkommen von Fehlerobjekten. Die individuelle Behandlung jedes Fehlers würde zu einer enormen Menge an Code-Duplizierung führen. Das Nächstbeste, was Du tun kannst, ist, die gesamte Fehlerbehandlungslogik an eine Express-Middleware zu delegieren…

### Blog-Zitat: "HTTP-Fehler haben keinen Platz in Deinem Datenbankcode."

Aus dem Blog Daily JS (Rang 14 für die Keywords "Node.js error handling")

> …Du solltest nützliche Eigenschaften in Fehlerobjekten festlegen, aber solche Eigenschaften konsistent verwenden. Und, nicht die Ströme kreuzen: HTTP-Fehler haben in Deinem Datenbankcode keinen Platz. Oder für Browser-Entwickler haben Ajax-Fehler eine Stelle im Code, der mit dem Server spricht, aber nicht im Code, der Mustache-Vorlagen verarbeitet…
