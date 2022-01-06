
# ORM/ODM 라이브러리 또는 다른 DAL 패키지들을 사용해 데이터베이스 주입 취약점을 방지하라.

### 한 문단 요약

데이터베이스 로직을 생성할 때, 당신은 반드시 잠재적인 공격자에 의해 악용될 수 있는 최종 주입 벡터에 대해 주의해야만 한다. 데이터베이스 쿼리를 수동적으로 작성하거나 또는 데이터의 유효성 검사를 포함하지 않는 것은 이러한 취약점들을 허용하는 가장 쉬운 방법들이다. 하지만 입력에 대한 유효성 검사와 데이터베이스 작업에 대해 적절한 패키지를 사용한다면 이런 좋지않은 상황들을 쉽게 피할 수 있다. 많은 경우 [joi](https://github.com/hapijs/joi)또는 [yup](https://github.com/jquense/yup)과 같은 유효성 검사 라이브러리들, 그리고 하단 리스트에 나와있는 ORM/ODM들을 사용해 시스템을 안전하고 건전한 상태로 만든다. 이것은 검증된 데이터들이 적절하게 이스케이프되고, 원하지 않는 공격 벡터를 열지 않고 처리되도록 매개변수화된 쿼리의 사용 및 데이터 바인딩의 사용에 대해 보장해야만 한다. 대부분의 라이브러리는 복잡한 쿼리들을 직접 작성할 필요 없이 언어 기반 유형 시스템을 위한 유형들을 제공하거나, 데이터의 유형을 원하는 형식으로 변환할 수 있도록 하는 기능들을 가지고 있어 개발자들을 편리하게 만들어준다. 결론적으로, __항상__ 당신이 저장하는 데이터에 대해 유효성을 검사하고, 적절한 데이터 매핑 라이브러리를 사용해서 위험할 수 있는 작업들을 처리하자.

### 라이브러리들

- [TypeORM](https://github.com/typeorm/typeorm)
- [sequelize](https://github.com/sequelize/sequelize)
- [mongoose](https://github.com/Automattic/mongoose)
- [Knex](https://github.com/tgriesser/knex)
- [Objection.js](https://github.com/Vincit/objection.js)
- [waterline](https://github.com/balderdashy/waterline)

### 예제 - NoSQL 쿼리 주입

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

### 예제 - SQL 주입

```
SELECT username, firstname, lastname FROM users WHERE id = 'user input';

SELECT username, firstname, lastname FROM users WHERE id = 'evil'input';
```

### 추가 자료

🔗 [OWASP SQL Injection](https://www.owasp.org/index.php/SQL_Injection)

🔗 [OWASP SQL Injection Prevention Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)

🔗 [Testing for NoSQL Injection](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)


### 다른 블로거들의 이야기

[OWASP wiki](https://www.owasp.org/index.php/Testing_for_NoSQL_injection)에서 발췌한 NoSQL 주입의 위험성

> NoSQL 주입 공격은 기존 SQL의 주입과 다른 애플리케이션의 영역에서 실행될 수 있다 SQL 주입이 데이터베이스 엔진에서 실행될 때, NoSQL 변형은 사용되는 API나 데이터 모델등에 따라 애플리케이션 또는 데이터베이스 계층에서 실행될 수 있다. 전형적인 NoSQL 주입 공격은 공격 문자열들이 파싱되거나 평가될 때, 또는 NoSQL API 호출로 연결되는 곳에서 실행되어진다.