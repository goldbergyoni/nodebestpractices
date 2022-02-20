# Lodash와 같은 사용자 영역 유틸리티보다는 네이티브 자바스크립트 메소드를 사용하라.

<br/><br/>

### 한 문단 요약

_lodash_ 또는 _underscore_ 같은 라이브러리들은 성능 손실을 일으키거나 필요한 이상으로 공간을 차지하는 경우가 발생할 수 있기 때문에, 때로는 네이티브 메소드를 사용하는 것이 더 낫다.
네이티브 메소드를 이용한 동작은 `Array.concat`, `Array.fill`, `Array.filter`, `Array.map`, `(Array|String).indexOf`, `Object.find`, ...등을 포함하여 [전체적으로 ~50% 정도의 이득](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx)을 가져온다.



<!-- comp here: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### 예제: 벤치마크 비교 - Lodash vs V8(네이티브)

아래 그래프는 [Lodash 메소드들의 다양한 종류들에 대한 벤치마크의 의미](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods)를 보여주고 있으며, 이를 통해 Lodash 메소드들이 V8 메소드들과 같은 작업을 수행할 때 평균적으로 시간을 146.23% 더 소요하고 있음을 알 수 있다.

![meanDiag](../../assets/images/sampleMeanDiag.png)

### 코드 예제 - `_.concat`/`Array.concat`에 대한 벤치마크 테스트
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

다음을 반환:

![output](../../assets/images/concat-benchmark.png)


당신은 [이 링크](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt)에서 좀 더 많은 벤치마크 리스트를 확인할 수 있다. 아니면 [이것](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js)을 확인하면 위와 같은 내용이지만 색상과 함께 확인이 가능하다.

### 블로그 인용: "당신에게 Lodash/Underscore은 필요하지 않다."

[Lodash와 Underscore에 집중한 문제에 대한 repo](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)로 부터

 > Lodash와 Underscore는 훌륭한 모던 자바스크립트 유틸리티 라이브러리이며, 그들은 프론트엔드 개발자들에 의해 널리 사용되어지고 있다. 그러나, 당신이 현대 브라우저들을 타겟팅하고 있다면, 당신은 이미 많은 메소드들이 ECMAScript5 [ES5]와 ECMAScript2015 [ES6]에 의해서 네이티브하게 지원되고 있음을 확인할 수 있을 것이다. 만약 당신의 프로젝트가 좀 더 적은 종속성을 요구하고 타겟 브라우저가 명확하다면, 아마 Lodash/Underscore를 사용할 필요가 없을 것이다.

### 예제: native가 아닌 메소드들의 사용에 대한 Linting

당신이 사용하지만 필요가 없는 라이브러리를 색출하고 제안을 동반한 경고를 전달하는 [ESLint plugin](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore)가 있다. (cf. 아래 예제)
`eslint-plugin-you-dont-need-lodash-underscore` 플러그인을 당신의 ESLint 설정 파일에 추가해주면 사용이 가능하다.

```json
{
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible"
  ]
}
```

### 예제: linter를 사용한 v8이 아닌 유틸리티 색출
아래 파일에 대해 생각해보자.
```js
const _ = require('lodash');
// ESLint will flag the line above with a suggestion
console.log(_.map([0, 1, 2, 4, 8, 16], x => `d${x}`));
```

YDNLU 플러그인을 사용할 때 ESLint는 다음과 같이 출력하게 된다.
![output](../../assets/images/ydnlu.png)


물론, 실제 코드베이스들에 대해 고려해볼 때 현실적으로 보이지는 않지만 이를 통해 당신은 아이디어를 얻어갈 수 있을 것이다.
