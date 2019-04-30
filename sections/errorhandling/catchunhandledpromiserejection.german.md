# Abfangen von unbehandelten Versprechungen

<br/><br/>

### Ein Absatz Erklärer

Normalerweise laufen die meisten modernen Anwendungscodes von Node.js/Express innerhalb Versprechungen - ob innerhalb des Handlers, eines Funktionsrückrufs oder in einem catch-Block. Überraschenderweise werden Fehler, die an diesen Stellen ausgegeben werden, nicht durch den Event-Handler uncaughtException behandelt, es sei denn, ein Entwickler hat daran gedacht, eine .catch-Klausel hinzuzufügen. Kürzlich erschienene Versionen von Node fügten eine Warnmeldung hinzu, wenn eine unbehandelte Ablehnung erscheint. Dies kann jedoch hilfreich sein, wenn Probleme auftreten, aber offensichtlich keine geeignete Fehlerbehandlungsmethode. Die unkomplizierte Lösung besteht darin, niemals das Hinzufügen von .catch-Klauseln in jedem Aufruf der Promise-Kette zu vergessen und zu einem zentralen Fehlerhandler umzuleiten. Die Strategie zur Fehlerbehandlung nur auf der Disziplin der Entwickler aufzubauen, ist jedoch etwas fragil. Es wird daher dringend empfohlen, einen eleganten Rückfall zu verwenden und `process.on ('unhandledRejection', Callback)` zu abonnieren. Dadurch wird sichergestellt, dass Versprechungsfehler behandelt werden, wenn sie lokal nicht behandelt worden sind.

<br/><br/>

### Code-Beispiel: diese Fehler werden von keinem Fehlerbehandlungsprogramm abgefangen (außer unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // this error will just vanish
  if(johnSnow.isAlive == false)
      throw new Error('ahhhh');
});

```

<br/><br/>

### Code-Beispiel: Ungelöste und abgelehnte Versprechungen abfangen

```javascript
process.on('unhandledRejection', (reason, p) => {
  // I just caught an unhandled promise rejection, since we already have fallback handler for unhandled errors (see below), let throw and let him handle that
  throw reason;
});
process.on('uncaughtException', (error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```

<br/><br/>

### Blog-Zitat: "Wenn du einen Fehler machen kannst, dann wirst du dies irgendwann tun"

 Aus dem Blog James Nelson

 > Testen wir dein Verständnis. Welche der folgenden Funktionen würdest du erwarten, einen Fehler auf die Konsole zu drucken?

```javascript
Promise.resolve(‘promised value’).then(() => {
  throw new Error(‘error’);
});

Promise.reject(‘error value’).catch(() => {
  throw new Error(‘error’);
});

new Promise((resolve, reject) => {
  throw new Error(‘error’);
});
```

> Ich weiß nicht, wie es dir geht, aber ich erwarte, dass alle einen Fehler ausgeben. Die Realität ist jedoch, dass eine Reihe moderner JavaScript-Umgebungen für keinen der o.g. Fehler ausgibt. Das Problem mit dem Menschsein besteht darin, dass wenn du einen Fehler machen kannst, du dies irgendwann tun werden. Wenn man dies bedenkt, ist es offensichtlich, dass wir die Dinge so gestalten sollten, dass Fehler so wenig wie möglich schaden. Das bedeutet, Fehler standardmäßig zu behandeln, nicht zu verwerfen.
