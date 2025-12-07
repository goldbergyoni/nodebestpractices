# Dokumentuj błędy interfejsu API za pomocą Swagger lub GraphQL

### Wyjaśnienie jednym akapitem

REST API zwracają wyniki przy użyciu kodów stanu HTTP, użytkownik API musi bezwzględnie wiedzieć nie tylko o schemacie interfejsu API, ale także o potencjalnych błędach - osoba wywołująca może wtedy złapać błąd i taktownie go obsłużyć. Na przykład dokumentacja interfejsu API może z góry stwierdzać, że status HTTP 409 jest zwracany, gdy nazwa klienta już istnieje (zakładając, że interfejs API rejestruje nowych użytkowników), aby osoba wywołująca mogła odpowiednio wyświetlić najlepszy UX dla danej sytuacji. Swagger to standard definiujący schemat dokumentacji API oferujący ekosystem narzędzi umożliwiających łatwe tworzenie dokumentacji online, patrz ekrany drukowania poniżej.

Jeśli już przyjąłeś GraphQL dla punktów końcowych API, twój schemat zawiera już ścisłe gwarancje, jak powinny wyglądać błędy ([przedstawione w specyfikacji](https://facebook.github.io/graphql/June2018/#sec-Errors)) i jak powinny być obsługiwane przez narzędzia po stronie klienta. Ponadto można również uzupełnić je dokumentacją opartą na komentarzach.

### Przykład błędu GraphQL

> Ten przykład używa [SWAPI](https://graphql.org/swapi-graphql), API Star Wars.

```graphql
# should fail because id is not valid
{
  film(id: "1ZmlsbXM6MQ==") {
    title
  }
}
```

```json
{
  "errors": [
    {
      "message": "No entry in local cache for https://swapi.co/api/films/.../",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "film"
      ]
    }
  ],
  "data": {
    "film": null
  }
}
```

### Cytat z bloga: "You have to tell your callers what errors can happen"

Z bloga Joyent, w rankingu 1 dla słów kluczowych “Node.js logging”

 > We’ve talked about how to handle errors, but when you’re writing a new function, how do you deliver errors to the code that called your function? …If you don’t know what errors can happen or don’t know what they mean, then your program cannot be correct except by accident. So if you’re writing a new function, you have to tell your callers what errors can happen and what they mean…

### Przydatne narzędzie: Swagger Online Documentation Creator

![Swagger API Scheme](../../assets/images/swaggerDoc.png "API error handling")
