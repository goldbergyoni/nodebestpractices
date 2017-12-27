# Using ESLint and Prettier


### Comparing ESLint and Prettier

If you format this code using ESLint, it will just give you a warning that it's too wide (depends on your `max-len` setting). Prettier will automatically format it for you.

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

### Integrating ESLint and Prettier

ESLint and Prettier overlap in the code formatting feature but can be easily combined by using other packages like [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). For more information about their differences, you can view the link [here](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
