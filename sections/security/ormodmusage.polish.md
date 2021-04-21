# Zapobieganie podatności na wstrzykiwanie bazy danych za pomocą bibliotek ORM / ODM lub innych pakietów DAL

### Wyjaśnienie jednym akapitem

Podczas tworzenia logiki bazy danych należy uważać na ewentualne wektory wstrzykiwania, które mogą zostać wykorzystane przez potencjalnych atakujących. Ręczne pisanie zapytań do bazy danych, bez sprawdzania poprawności danych dla żądań użytkowników, jest najłatwiejszym sposobem na uwzględnienie tych luk. Sytuacji tej można jednak łatwo uniknąć, używając odpowiednich pakietów do sprawdzania poprawności danych wejściowych i obsługi operacji na bazie danych. W wielu przypadkach Twój system będzie bezpieczny i będzie działał przy użyciu biblioteki sprawdzania poprawności, takiej jak
[joi](https://github.com/hapijs/joi) lub [yup](https://github.com/jquense/yup) i ORM / ODM z poniższej listy. Powinno to zagwarantować użycie sparametryzowanych zapytań i powiązań danych, aby zapewnić prawidłowe ucieczkę zweryfikowanych danych i obsługę ich bez otwierania niepożądanych wektorów ataku. Wiele z tych bibliotek ułatwi Ci życie jako programista, umożliwiając wiele przydatnych funkcji, takich jak brak konieczności ręcznego pisania skomplikowanych zapytań, dostarczanie typów dla systemów typów opartych na języku lub konwertowanie typów danych na pożądane formaty. Podsumowując: __zawsze__ sprawdzaj poprawność danych, które zamierzasz przechowywać, i używaj odpowiednich bibliotek mapowania danych do obsługi niebezpiecznej pracy.

### Biblioteki

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### Przykład - NoSQL query injection

```javascript
// A query of
db.balances.find({
  active: true,
  $where: (obj) => obj.credits - obj.debits < userInput
});

// Where userInput equals
"(function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"

// will trigger a denial of service

// Another user input might inject other logic resulting in the database exposing sensitive data
```

### Przykład - SQL injection

```sql
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### Dodatkowe źródła

🔗 [OWASP SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)

🔗 [Testing for NoSQL Injection](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### Co mówią inni blogerzy

Ryzyko wstrzyknięcia NoSQL z [OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

> NoSQL injection attacks may execute in different areas of an application than traditional SQL injection. Where SQL injection would execute within the database engine, NoSQL variants may execute during within the application layer or the database layer, depending on the NoSQL API used and data model. Typically NoSQL injection attacks will execute where the attack string is parsed, evaluated, or concatenated into a NoSQL API call.
