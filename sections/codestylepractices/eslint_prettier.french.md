# Utilisez ESLint et Prettier


### Comparaison d'ESLint et de Prettier

Si vous formatez ce code à l'aide d'ESLint, il vous avertira simplement qu'il est trop large (dépend de votre paramètre `max-len`). Prettier le formatera automatiquement pour vous.

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

Source : [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Intégration d'ESLint et de Prettier

ESLint et Prettier se recoupent dans la fonction de formatage du code mais ils peuvent être facilement combinés en utilisant d'autres packages comme [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) et [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Pour plus d'informations sur leurs différences, vous pouvez consulter le lien [ici](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
