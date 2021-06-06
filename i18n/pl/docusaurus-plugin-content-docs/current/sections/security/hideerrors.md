# Ukryj szczegóły błędu przed klientem

### Wyjaśnienie jednym akapitem

Należy unikać ujawniania klientowi szczegółów błędu aplikacji podczas produkcji ze względu na ryzyko ujawnienia wrażliwych szczegółów aplikacji, takich jak ścieżki plików serwera, używane moduły innych firm i inne wewnętrzne przepływy pracy aplikacji, które mogą zostać wykorzystane przez atakującego.
Express jest wyposażony we wbudowany moduł obsługi błędów, który zajmuje się wszelkimi błędami, które mogą wystąpić w aplikacji. Ta domyślna funkcja oprogramowania pośredniego obsługująca błędy jest dodawana na końcu stosu funkcji oprogramowania pośredniego.
Jeśli przekażesz błąd do `next ()` i nie obsłużysz go w niestandardowej procedurze obsługi błędów, zostanie on obsłużony przez wbudowaną procedurę obsługi błędów Express; błąd zostanie zapisany w kliencie ze śledzeniem stosu. To zachowanie będzie prawdziwe, gdy `NODE_ENV` jest ustawione na `development`, jednak gdy `NODE_ENV` jest ustawione na `production`, ślad stosu nie jest zapisywany, tylko kod odpowiedzi HTTP.

### Przykład kodu: Express error handler

```javascript
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
```

### Dodatkowe źródła

🔗 [Express.js error handling documentation](https://expressjs.com/en/guide/error-handling.html)
