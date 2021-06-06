# Używanie ESLint oraz Prettier


### Porównanie ESLint i Prettier

Jeśli sformatujesz ten kod za pomocą ESLint, wyświetli ostrzeżenie, że jest on zbyt szeroki (zależy od twojego ustawienia „max-len”). Prettier automatycznie go sformatuje.

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

Źródło: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### Integracja ESLint i Prettier

ESLint i Prettier nakładają się na siebie w funkcji formatowania kodu, ale można je łatwo łączyć za pomocą innych pakietów, takich jak [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), i [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Aby uzyskać więcej informacji o ich różnicach, możesz zobaczyć link [tutaj](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
