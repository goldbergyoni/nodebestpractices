# Використання ESLint та Prettier

### Порівняння ESLint та Prettier

Якщо ви відформатуєте цей код за допомогою ESLint, він лише видасть попередження про те, що рядок занадто широкий (залежить від налаштувань `max-len`). Prettier автоматично відформатує його для вас.

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

Джерело: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Інтеграція ESLint та Prettier

ESLint та Prettier перетинаються у функції форматування коду, але їх можна легко поєднати за допомогою інших пакетів, таких як [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) та [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Для отримання додаткової інформації про їхні відмінності, ви можете переглянути посилання [тут](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
