# Запобігання вразливостям ін'єкцій бази даних за допомогою бібліотек ORM/ODM або інших DAL пакетів

### Пояснення за один абзац

При створенні логіки бази даних слід стежити за можливими векторами ін'єкцій, які можуть бути використані потенційними зловмисниками. Написання запитів до бази даних вручну або невключення валідації даних для запитів користувачів є найпростішими методами, що дозволяють ці вразливості. Однак цю ситуацію легко уникнути, використовуючи відповідні пакети для валідації вводу та обробки операцій з базою даних. У багатьох випадках ваша система буде безпечною та надійною при використанні бібліотеки валідації, такої як
[joi](https://github.com/hapijs/joi) або [yup](https://github.com/jquense/yup), та ORM/ODM зі списку нижче. Це повинно гарантувати використання параметризованих запитів і прив'язки даних, щоб забезпечити правильне екранування та обробку перевірених даних без відкриття небажаних векторів атак. Багато з цих бібліотек полегшать ваше життя як розробника, надаючи багато корисних функцій, таких як відсутність необхідності писати складні запити вручну, надання типів для систем типів на основі мови або перетворення типів даних у бажані формати. Підсумовуючи, __завжди__ валідуйте будь-які дані, які ви збираєтеся зберігати, і використовуйте відповідні бібліотеки відображення даних для обробки небезпечної роботи за вас.

### Бібліотеки

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### Приклад - NoSQL ін'єкція запиту

```javascript
// Запит
db.balances.find({
  active: true,
  $where: (obj) => obj.credits - obj.debits < userInput
});

// Де userInput дорівнює
"(function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"

// викличе відмову в обслуговуванні

// Інший користувацький ввід може ін'єктувати іншу логіку, що призведе до розкриття конфіденційних даних базою даних
```

### Приклад - SQL ін'єкція

```sql
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### Додаткові ресурси

🔗 [OWASP SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)

🔗 [Testing for NoSQL Injection](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### Що кажуть інші блогери

Ризики NoSQL ін'єкції з [OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

> Атаки NoSQL ін'єкції можуть виконуватися в різних областях додатку, ніж традиційна SQL ін'єкція. Там, де SQL ін'єкція виконується в движку бази даних, варіанти NoSQL можуть виконуватися на рівні додатку або рівні бази даних, залежно від використовуваного NoSQL API та моделі даних. Зазвичай атаки NoSQL ін'єкції виконуються там, де рядок атаки парситься, оцінюється або конкатенується у виклик NoSQL API.

