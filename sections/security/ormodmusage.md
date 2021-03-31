# Preventing database injection vulnerabilities by using ORM/ODM libraries or other DAL packages

### One Paragraph Explainer

When creating your database logic you should watch out for eventual injection vectors that could be exploited by potential attackers. Writing database queries manually or not including data validation for user requests are the easiest methods to allow for these vulnerabilities. This situation is however easy to avoid when you use suitable packages for validating input and handling database operations. In many cases your system will be safe and sound by using a validation library like
[joi](https://github.com/hapijs/joi) or [yup](https://github.com/jquense/yup) and an ORM/ODM from the list below. This should guarantee the use of parameterized queries and data bindings to ensure the validated data is properly escaped and handled without opening unwanted attack vectors. Many of these libraries will ease your life as a developer by enabling many useful features like not having to write complex queries manually, supplying types for language-based type systems or converting data types to wanted formats. To conclude, __always__ validate any data you are going to store and use proper data-mapping libraries to handle the dangerous work for you.

### Libraries

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### Example - NoSQL query injection

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

### Example - SQL injection

```sql
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### Additional resources

🔗 [OWASP SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)

🔗 [Testing for NoSQL Injection](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### What other bloggers say

Risks of NoSQL injection from the [OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

> NoSQL injection attacks may execute in different areas of an application than traditional SQL injection. Where SQL injection would execute within the database engine, NoSQL variants may execute during within the application layer or the database layer, depending on the NoSQL API used and data model. Typically NoSQL injection attacks will execute where the attack string is parsed, evaluated, or concatenated into a NoSQL API call.
