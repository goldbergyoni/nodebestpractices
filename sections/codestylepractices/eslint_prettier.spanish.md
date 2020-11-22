# Usando ESLint y Prettier


### Comparando ESLint y Prettier

Si le das formato a este código utilizando ESLint, te arrojará una alerta de que es muy largo (dependiendo del `max-len` configurado). Prettier le dará automáticamente formato por ti.

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

Fuente: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Integrando ESLint y Prettier

ESLint y Prettier se solapan al darle formato al código pero pueden ser fácilmente combinadas al usar otros paquetes como [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), y [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Para más información acerca de sus diferencias, tu puedes ver el link [aquí](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
