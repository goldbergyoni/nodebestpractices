# Предпочитайте нативные методы JS над пользовательскими утилитами, такими как Lodash


<br/><br/>

### Объяснение в один абзац

Иногда использовать нативные методы лучше, чем привязывать `lodash` или `underscore`, потому что это не приведет к повышению производительности и использованию большего пространства, чем необходимо.
Результативность с использованием собственных методов приводит к [общему увеличению ~ 50%](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx), который включает следующие методы: `Array.concat`, `Array.fill`, `Array.filter`, `Array.map`, `(Array|String).indexOf`, `Object.find`, ...


<!-- comp here: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### Пример: сравнение производительности - Lodash vs V8 (Native)
На приведенном ниже графике показано [среднее из эталонных показателей для различных методов Lodash](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods), это показывает, что методы Lodash занимают в среднем на 146,23% больше время для выполнения тех же задач, что и методы V8.

![meanDiag](../../assets/images/sampleMeanDiag.png)

### Пример кода - бенчмарк-тест для `_.concat`/`Array.concat`
```javascript
const _ = require('lodash');
const __ = require('underscore');
const Suite = require('benchmark').Suite;
const opts = require('./utils'); //cf. https://github.com/Berkmann18/NativeVsUtils/blob/master/utils.js

const concatSuite = new Suite('concat', opts);
const array = [0, 1, 2];

concatSuite.add('lodash', () => _.concat(array, 3, 4, 5))
  .add('underscore', () => __.concat(array, 3, 4, 5))
  .add('native', () => array.concat(3, 4, 5))
  .run({ 'async': true });
```

Который возвращает это:

![output](../../assets/images/concat-benchmark.png)

Вы можете найти больший список тестов [здесь](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) или альтернативно [запустить это](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js), который показывает то же самое, но в цвете.

### Цитата блога: "Вам не нужно (не нужно) Lodash/Underscore"

Из [репо по этому вопросу, в котором основное внимание уделяется Lodash и Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).

> Lodash и Underscore - отличные современные библиотеки утилит JavaScript, и они широко используются разработчиками Front-end. Однако, когда вы ориентируетесь на современные браузеры, вы можете обнаружить, что есть много методов, которые уже изначально поддерживаются благодаря ECMAScript5 [ES5] и ECMAScript2015 [ES6]. Если вы хотите, чтобы вашему проекту требовалось меньше зависимостей, и вы четко знаете целевой браузер, то вам может не потребоваться Lodash/Underscore.

### Пример: Linting для использования неродных методов
Существует [плагин ESLint](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore), который определяет, где вы используете библиотеки, но не должен предупреждать вас с предложениями (см. пример ниже).<br/>
Вы можете настроить его, добавив плагин `eslint-plugin-you-dont-need-lodash-underscore` в файл конфигурации ESLint:
```json
{
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible"
  ]
}
```

### Пример: обнаружение использования утилит не-v8 с использованием линтера
Рассмотрим файл ниже:
```js
const _ = require('lodash');
// ESLint will flag the line above with a suggestion
console.log(_.map([0, 1, 2, 4, 8, 16], x => `d${x}`));
```
Вот что ESLint будет выводить при использовании плагина YDNLU.
![output](../../assets/images/ydnlu.png)

Конечно, приведенный выше пример не выглядит реалистичным, если учесть, какие будут исходные кодовые базы, но вы поняли идею.
