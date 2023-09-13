# Prévention des vulnérabilités d'injection de bases de données en utilisant les bibliothèques ORM/ODM ou d'autres paquets DAL

### Un paragraphe d'explication

Lorsque vous créez la logique de votre base de données, vous devez faire attention aux éventuels vecteurs d'injection qui pourraient être exploités par des attaquants potentiels. L'écriture manuelle des queries dans la base de données ou l'absence de validation des données pour les demandes des utilisateurs sont les méthodes les plus simples pour permettre ces vulnérabilités. Cette situation est cependant facile à éviter lorsque vous utilisez des paquets appropriés pour valider les entrées et traiter les opérations de la base de données. Dans de nombreux cas, votre système sera sûr et solide en utilisant une bibliothèque de validation comme
[joi](https://github.com/hapijs/joi) ou [yup](https://github.com/jquense/yup) et un ORM/ODM de la liste ci-dessous. Cela devrait garantir l'utilisation de queries paramétrées et de liaisons de données afin de s'assurer que les données validées sont correctement échappées et traitées sans ouvrir de vecteurs d'attaque indésirables. Nombre de ces bibliothèques vous faciliteront la vie en tant que développeur en vous permettant de bénéficier de nombreuses fonctionnalités utiles, comme le fait de ne pas avoir à écrire manuellement des queries complexes, la fourniture de types pour les systèmes de types basés sur le langage ou la conversion des types de données dans les formats souhaités. Pour conclure, validez __toujours__ toutes les données que vous allez stocker et utilisez les bibliothèques de conversion de données appropriées pour effectuer le travail dangereux à votre place.

### Bibliothèques

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### Exemple - Injection de query NoSQL

```javascript
// Une query
db.balances.find({
  active: true,
  $where: (obj) => obj.credits - obj.debits < userInput
});

// Où userInput est égal à
"(function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"

// déclenchera un déni de service

// Une autre entrée de l'utilisateur pourrait injecter une autre logique, ce qui aurait pour conséquence d'exposer des données sensibles dans la base de données
```

### Exemple - injection SQL

```sql
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### Ressources supplémentaires

🔗 [OWASP injection SQL](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP Aide-mémoire sur la prévention des injections SQL](https://github.com/OWASP/CheatSheetSeries)

🔗 [Tests pour l'injection NoSQL](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### Ce que disent les autres blogueurs

Risques de l'injection NoSQL extrait du [wiki OWASP](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

> Les attaques par injection NoSQL peuvent s'exécuter dans des zones différentes d'une application que celle de l'injection SQL traditionnelle. Là où l'injection SQL s'exécuterait dans le moteur de base de données, les versions NoSQL peuvent s'exécuter, selon l'API NoSQL utilisée et le modèle de données, dans la couche applicative ou dans la couche base de données. En général, les attaques par injection NoSQL s'exécutent lorsque la chaîne d'attaque est analysée, évaluée ou concaténée à l'intérieur d'un appel d'une API NoSQL.
