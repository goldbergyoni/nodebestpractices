# Use ESLint e Prettier


### Comparando ESLint com Prettier

Se você formatar este código usando o ESLint, ele apenas dará um aviso de que ele é muito grande (dependendo da sua configuração `max-len`). O Prettier irá formatá-lo automaticamente para você.

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

Fonte: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Integrando ESLint e Prettier

ESLint e Prettier se sobrepõem no recurso de formatação de código, mas podem ser facilmente combinados usando outros pacotes como [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), e [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Para mais informações sobre as diferenças entre eles, clique [aqui](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
