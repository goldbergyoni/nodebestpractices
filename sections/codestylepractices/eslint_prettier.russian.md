# Использование ESLint и Prettier


### Сравнение ESLint и Prettier

Если вы отформатируете код ниже с помощью ESLint, он просто выдаст вам предупреждение, что он слишком широкий (зависит от настроек `max-len`). Prettier же автоматически отформатирует его для вас.

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

Source: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Интеграция ESLint и Prettier

ESLint и Prettier перекрываются в функции форматирования кода, но могут быть легко объединены с помощью других пакетов, таких как [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), и [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Для получения дополнительной информации об их различиях вы можете просмотреть ссылку [здесь](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
