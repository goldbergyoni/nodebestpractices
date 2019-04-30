# Verwende Async-Await oder Promises (Versprechungen) für asynchrone Fehlerbehandlung

### Ein Absatz Erklärer

Callbacks (Rückrufe) lassen sich nicht gut skalieren, da die meisten Programmierer nicht mit ihnen vertraut sind. Sie erzwingen die Überprüfung aller Fehler, den Umgang mit unangenehmen Verschachtelungen von Code und machen es schwierig, über den Code-Fluss nachzudenken. Promise-Bibliotheken wie BlueBird, Async und Q packen einen Standard-Code-Stil, indem sie RETURN und THROW verwenden, um den Programmfluss zu steuern. Insbesondere unterstützen sie den bevorzugten Try-Catch-Fehlerbehandlungsstil, der den Hauptcodepfad davon befreit, Fehler in jeder Funktion zu behandeln

### Code-Beispiel – Promises verwenden, um Fehler abzufangen

```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### Beispiel für Anti-Mustercode - Fehlerbehandlung im Callback-Stil

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // do something like calling the given callback function and pass the error
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // do something like calling the given callback function and pass the error
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // you get the idea? 
                        }
                    })
                });
            }
        });
    }
});
```

### Blog-Zitat: "Wir haben ein Problem mit Promises"

 Aus dem Blog pouchdb.com

 > ……In der Tat wirken Rückrufe noch unheimlicher: sie berauben uns des Stacks, was wir normalerweise in Programmiersprachen als selbstverständlich betrachten. Das Schreiben von Code ohne Stack ist dem Fahren eines Fahrzeugs ohne Bremspedal sehr ähnlich: du weißt nicht, wie dringend du ihn benötigst, bis du danach greifst und er nicht da ist. Der ganze Sinn der Versprechungen besteht darin, uns die sprachlichen Grundlagen zurückzugeben, die wir verloren haben, als wir auf Async umgestiegen sind: return, throw und der Stack. Aber man muss wissen, wie man Versprechungen richtig einsetzt, um sie zu nutzen.

### Blog-Zitat: "Die Promises-Methode ist viel kompakter"

 Aus dem Blog gosquared.com

 > ………Die Versprechungsmethode ist viel kompakter, klarer und schneller zu schreiben. Wenn ein Fehler oder eine Ausnahme in einer der Operationen auftritt, wird sie vom einzelnen .catch()-Handler behandelt. Wenn du an einem einzigen Ort alle Fehler behandeln kannst, musst du für jede Phase der Arbeit keine Fehlerprüfung mehr durchführen.

### Blog-Zitat: "Promises sind native ES6, können mit Generatoren verwendet werden"

 Aus dem Blog StrongLoop

 > ….Rückrufe haben eine miese Fehlerbehandlung. Versprechungen sind besser. Implementiere die eingebaute Fehlerbehandlung in Express mit Versprechungen und verringere die Wahrscheinlichkeit einer nicht erfassten Ausnahme erheblich. Versprechungen sind native ES6, können mit sowohl mit Generatoren verwendet werden als auch mit ES7-Vorschläge wie async/await durch einen Compiler wie Babel

### Blog-Zitat: "All diese regulären Kontrollflusskonstrukte, an die du gewöhnt bist, sind vollig defekt"

Aus dem Blog Benno’s

 > ……Eine der besten Eigenschaften der asynchronen, Callback-basierten Programmierung ist, dass im Allgemeinen alle regulären Kontrollflusskonstrukte, an die du gewöhnt bist, vollständig kaputt sind. Am besten finde ich jedoch den Umgang mit Ausnahmen. Javascript bietet einen ziemlich bekannten try… catch-Konstrukt für den Umgang mit Ausnahmen. Das Problem mit Ausnahmen ist aber, dass sie eine große Möglichkeit für Kurzschlussfehler in einem Aufrufstack darstellen, aber am Ende völlig unbrauchbar sind, wenn der Fehler auf einem anderen Stack auftritt…
