# Erabili ESLint eta Prettier

### ESLint eta Prettier alderatzen

Kode hau formateatzen baduzu ESLint erabiliz, abisu bat besterik ez dizu emango luzeegia dela esanez (zure `max-len` ezarpenaren arabera). Prettierrek zure order automatikoki formateatuko du


```javascript
foo(
  argudioBenetanLuzea(),
  aiAmaParametroPiloPiloa(),
  hauGarbituBeharkoNuke(),
  benetanOraindikBesteBat(),
  txantxetanZabiltzaEzta()
);
```

```javascript
foo(
  argudioBenetanLuzea(),
  aiAmaParametroPiloPiloa(),
  hauGarbituBeharkoNuke(),
  benetanOraindikBesteBat(),
  txantxetanZabiltzaEzta()
);
```

Iturria: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### ESLint eta Prettier integratzen

ESLint eta Prettier kodea formateatzeko funtzionalitateetan gainjar daitezke, baina erraz konbina daitezke [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), eta [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) bezalako liburutegiekin. Haien arteko ezberdintasunei buruzko informazio gehiago nahi izanez gero, [hemen](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint) begira dezakezu esteka.
