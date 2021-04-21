# Ekidin datu basea injektatzeko ahultasunak ORM / ODM liburutegiak edo DAL moduko beste pakete batzuk erabiliz

### Azalpena

Zure datu basearen logika sortzerakoan kontuz ibili beharko zenuke erasotzaile potentzialek baliatu ditzaketen injekzio bektoreekin. Datu basearen kontsultak eskuz idaztea edo erabiltzaileen eskaeretarako datuak balioztatu gabe sartzea, horiek dira ahultasun horietaz ohartzeko metodorik errazenak. Erraza da, ordea, egoera hori saihesten, datu baseko eragiketen sarrerak balioztatzeko eta kudeatzeko pakete egokiak erabiltzen dituzunean. Kasu askotan, zure sistema egokia eta segurua izatea lortuko duzu [joi](https://github.com/hapijs/joi) edo [yup](https://github.com/jquense/yup) bezalako balioztatze liburutegiren bat eta beheko zerrendako ORM / ODM bat erabiliz. Horrek bermatu beharko luke kontsulta parametrizatuen eta datuen loturen erabilera datu balioztatuak behar bezala saihestu eta kudeatuko direla ziurtatzeko nahi gabeko eraso bektoreak ireki gabe. Liburutegi horietako askok bizimodua erraztuko dizute, programatzaile zaren aldetik, funtzio erabilgarri ugari ahalbidetuz: esaterako, kontsulta konplexuak eskuz idatzi beharrik ez izatea, lengoaietan oinarritutako sistemetarako letra tipoak hornitzea edo zenbait datu mota nahi duzun formatuetara pasatzea. Amaitzeko, __beti__ balioztatu gorde nahi dituzun datuak eta erabili datuen mapaketa liburutegi egokiak zure lan arriskutsua kudeatzeko.

### Liburutegiak

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### Adibidea: NoSQL kontsulta injekzioa

```javascript
// Kontsulta bat
db.balances.find({
  active: true,
  $where: (obj) => obj.credits - obj.debits < userInput
});

// Non userInput berdin
"(function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"

// zerbitzu-ukatzea abiaraziko du

// Beste erabiltzaile sarrera batek, datu basean informazio sentsitiboa agerian utz dezakeen beste logika bat gehi dezake
```

### Adibidea: SQL injekzioa

```sql
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### Baliabide osagarriak

🔗 [OWASP SQL injekzioa](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL injekzioaren prebentziorako tranpa orria](https://github.com/OWASP/CheatSheetSeries)

🔗 [NoSQL injekzioaren azterketa](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### Beste blogari batzuek diotena

NoSQL injekzioaren arriskuak [OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)tik hartua

> NoSQL injekzio erasoak exekuta daitezkeen aplikazioen eremuak desberdinak dira SQL injekzio tradizionalak exekuta daitezkeenen aldean. SQL injekzioa datu baseko motorraren barruan exekutatuko litzatekeen lekuan, NoSQL aldaerak aplikazioen geruzan edo datu basearen geruzan exekuta daitezke, beti ere zein NoSQL API erabiltzen den eta datuen ereduaren arabera. Normalean NoSQL injekzio erasoak exekutatuko dira eraso katea analizatu, ebaluatu edo NoSQL APIaren dei batean kateatzen den lekuan.
