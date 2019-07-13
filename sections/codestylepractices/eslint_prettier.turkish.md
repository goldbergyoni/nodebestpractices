# ESLint ve Prettier'ı kullanmak


### ESLint ve Prettier'ın karşılaştırılması

Eğer bu kodu ESLint kullanarak düzenlerseniz, bu size kapsamlı bir uyarı verecektir (`max-len` ayarınıza göre değişir). Prettier sizin için otomatik olarak düzenleyecektir..

```javascript
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne(), noWayYouGottaBeKiddingMe());
```

```javascript
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne(),
  noWayYouGottaBeKiddingMe()
);
```

Kaynak: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### ESLint ve Prettier'ın entegre edilmesi

ESLint ve Prettier kod formatlama özellikleriyle çakışıyor fakat bazı paketler kullanılarak kolaycan birleştirilebilir [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), ve [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Birbirlerinin farkı hakkında daha fazla bilgi için şu linke bakabilirsiniz. [here](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
