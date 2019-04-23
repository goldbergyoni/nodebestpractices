# Verwendung von ESLint und Prettier


### ESLint und Prettier im Vergleich

Wenn du diesen Code mit ESLint formatierst, erhältst du lediglich eine Warnung, dass er zu breit ist (abhängig von der `max-len` Einstellung). Prettier formatiert es automatisch für dich.

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

Quelle: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Integrieren von ESLint und Prettier

ESLint und Prettier überlappen sich in der Code-Formatierungsfunktion, können aber einfach mit anderen Paketen kombiniert werden, wie z.B. [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), und [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Weitere Informationen zu den Unterschieden findest du [hier](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
