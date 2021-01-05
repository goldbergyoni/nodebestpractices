# Perfiere los métodos nativos de JS por sobre utilidades user-land como Lodash


<br/><br/>

### Párrafo de explicación

A veces, usar métodos nativos es mejor que requerir `lodash` o `underscore` porque no llevan a una mejora de performance y usan más espacio del necesario.
La performance al usar métodos nativos resulta en una [ganancia total de ~50%](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx) lo que incluye los siguientes métodos: `Array.concat`, `Array.fill`, `Array.filter`, `Array.map`, `(Array|String).indexOf`, `Object.find`, ...


<!-- comparación aquí: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### Ejemplo: comparación de benchmark - Lodash vs V8 (Nativo)
El gráfico debajo muestra la [media de los benchmarks para una variedad de métodos de Lodash](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods), esto muestra que los métodos de Lodash toman en promedio un 146.23% más de tiempo en completarse que la misma tarea de un método de V8.

![meanDiag](../../assets/images/sampleMeanDiag.png)

### Ejemplo de código – Prueba de benchmark `_.concat`/`Array.concat`
```javascript
const _ = require('lodash'),
  __ = require('underscore'),
  Suite = require('benchmark').Suite,
  opts = require('./utils'); //cf. https://github.com/Berkmann18/NativeVsUtils/blob/master/utils.js

const concatSuite = new Suite('concat', opts);
const array = [0, 1, 2];

concatSuite.add('lodash', () => _.concat(array, 3, 4, 5))
  .add('underscore', () => __.concat(array, 3, 4, 5))
  .add('native', () => array.concat(3, 4, 5))
  .run({ 'async': true });
```

Lo que retorna esto:

![output](../../assets/images/concat-benchmark.png)

Se puede encontrar una lista más larga de benchmarks [aquí](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) o alternativamente [correr esto](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js) lo que mostrará lo mismo pero con colores.

### Cita de blog: "Tú no (podrías no) necesitas Lodash/Underscore"

Del [repositorio sobre este tema que se enfoca en Lodash y Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).

 > Lodash y Underscore son bibliotecas de utilidades buenas de JavaScript moderno, y son ampliamente utilizadas por desarrolladores Front-end. Sin embargo, cuando estas apuntando a navegadores modernos, deberías descubrir que hay muchos métodos que ya se encuentran soportados nativamente gracias a ECMAScript5 [ES5] y ECMAScript2015 [ES6]. Si quieres que tu proyecto requiera menos dependencias, y conoces cual será el navegador utilizado, entonces tal vez no necesites Lodash/Underscore.

### Ejemplo: Linting para el uso de métodos no nativos
Aquí hay un [plugin de ESLint](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) que detecta donde estas utilizando bibliotecas que no son necesarias y advierte con una sugerencia (cf. ejemplo debajo).<br>
La manera de configurarlo es al agregar el plugin `eslint-plugin-you-dont-need-lodash-underscore` a tu archivo de configuración de ESLint:
```json
{
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible"
  ]
}
```

### Ejemplo: detectando el uso de utilidades no pertencientes a v8 usando un linter
Considerá el archivo debajo:
```javascript
const _ = require('lodash');
// ESLint marcará la línea de arriba con una sugerencia
console.log(_.map([0, 1, 2, 4, 8, 16], x => `d${x}`));
```
Esto es lo que ESLint nos mostraría al usar el plugin YDNLU.
![output](../../assets/images/ydnlu.png)

Por supuesto, el ejemplo de arriba no parece realista considerando lo que un repositorio de código real puede llegar a tener pero nos da una idea.
