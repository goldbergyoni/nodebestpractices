# linter 보안 규칙 수용

### 한 문단 요약

ESLint와 TSLint을 위한 [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) 또는 [tslint-config-security](https://www.npmjs.com/package/tslint-config-security) 같은 보안 플러그인들은 안전하지 않은 정규식, 안전하지 않은 'eval()'의 사용, 어플리케이션 내 파일 시스템에 접근할 때 사용되는 리터럴이 아닌 파일명 등 기존에 널리 알려진 취약점들을 기반으로 코드의 보안을 점검한다. [pre-git](https://github.com/bahmutov/pre-git) 같은 git hooks를 사용하면 원격으로 배포되기 전에 소스 제어에 대한 모든 규칙을 추가로 적용할 수 있으며, 그 규칙들 중 하나는 소스 제어에 기밀이 추가되었는지를 확인하는 것이다.

### `eslint-plugin-security` example

`eslint-plugin-security`에 의해 감지된 안전하지 않은 규칙들의 예시:

`detect-pseudoRandomBytes`

```javascript
const insecure = crypto.pseudoRandomBytes(5);
```

`detect-non-literal-fs-filename`

```javascript
const path = req.body.userinput;
fs.readFile(path);
```

`detect-eval-with-expression`

```javascript
const userinput = req.body.userinput;
eval(userinput);
```

`detect-non-literal-regexp`

```javascript
const unsafe = new RegExp('/(x+x+)+y/)');
```


위에 제시된 안전하지 못한 코드 사례를 가진 Node.js 프로젝트에서 `eslint-plugin-security`를 실행하는 예제:

![nsp check example](/assets/images/eslint-plugin-security.png)


### 다른 블로거들의 이야기

[Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/)의 블로그로부터 발췌

> Linting은 공백이나 세미콜론, eval 문에 대해서 현학적인 규칙을 적용하기 위한 도구일 필요는 없다. Eslint는 당신의 코드에서 잠재적인 위함 콘트를 가진 넓은 범위의 패턴들(정규 표현식, 입력 유효성 등)을 제거하기 위해 강력한 프레임워크를 제공한다. 나는 이것이 보안에 대해 민감한 자바스크립트 개발자에게 고려의 가치가 있는 강력하고 새로운 도구를 제공한다고 생각한다.