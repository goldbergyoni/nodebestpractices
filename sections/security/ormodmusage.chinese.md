# 防止数据库注入漏洞, 通过使用ORM/ODM库或者其他DAL组件

### 一段解释

在创建数据库逻辑时, 应注意潜在攻击者可能利用的注入漏洞。手动编写数据库查询或不包括数据验证的用户请求，是暴露这些漏洞的最简单方法。但是, 当您使用合适的包来验证输入和处理数据库操作时, 这种情况很容易避免。在许多情况下, 使用验证库[joi](https://github.com/hapijs/joi)或者[yup](https://github.com/jquense/yup)和一个下面列出来的ORM/ODM库, 您的系统将是安全和健全的。这将保证在使用参数化查询和数据绑定时, 确保在不打开不需要的攻击漏洞的情况下，正确转义和处理已验证的数据。其中大部分库将通过启用许多有用的功能 (如不必手动编写复杂查询, 为基于语言的类型系统提供类型, 或将数据类型转换为所需格式) 来简化您作为开发人员的生活。最后, __always__ 验证要存储的任何数据, 并使用适当的数据映射库为您处理危险的工作。

### 库

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### 示例 - NoSQL查询注入

```javascript
// 下面的查询
db.balances.find( { active: true, $where: function() { return obj.credits - obj.debits < userInput; } } );

// 如果userInput等于
"(function(){var date = new Date(); do{curDate = new Date();}while(curDate-date<10000); return Math.max();})()"

// 将导致拒绝服务

// 另一个用户输入可能会注入其他逻辑, 导致数据库公开敏感数据
```

### 示例 - SQL注入

```
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### 更多资源

🔗 [OWASP SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL Injection Prevention Cheat Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)

🔗 [Testing for NoSQL Injection](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

### 其他博主怎么说

NoSQL注入的风险, 摘自[OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)

> 与传统SQL注入相比, NoSQL注入攻击可能会在应用程序的不同区域执行。SQL注入将在数据库引擎中执行, 而对于的NoSQL注入可能会在应用层或数据库层中执行, 具体取决于所使用的NoSQL API和数据模型。通常, 在受攻击文本在被语义上分析、计算或连接到NoSQL API调用时, NoSQL注入攻击将执行。
