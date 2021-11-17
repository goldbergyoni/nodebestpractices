# NODE_ENV = production으로 설정하라
<br/><br/>

### 한문단 설명

프로세스 환경 변수는 일반적으로 구성 목적으로 실행 중인 모든 프로그램에서 사용할 수 있는 키-값 쌍의 집합이다. 모든 변수들을 사용할 수 있지만, Node는 NODE_ENV라는 변수를 사용하여 현재 production인지 아닌지를 표시하는 규칙을 권장한다. 이런 결정이 개발 중에 구성 요소가 개선된 진단을 제공할 수 있다. 예를 들어 캐시를 사용하지 않거나 상세한 로그 문을 내보낸다. 모든 최신 배포 도구(Chef, Puppet, CloudFormation 등)는 배포 중 환경 변수 설정을 지원한다.

<br/><br/>

### 코드 예시: NODE_ENV 환경 변수 설정하고 읽기

```shell script
// Setting environment variables in bash before starting the node process
$ NODE_ENV=development
$ node
```

```javascript
// Reading the environment variable using code
if (process.env.NODE_ENV === 'production')
    useCaching = true;
```

<br/><br/>

### 다른 블로거들의 말

[dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/) 블로그에서
> Node.js에서 현재 모드를 설정하는 NODE_ENV라는 변수를 사용하는 규칙이 있다.  실제로, NODE_ENV를 읽고 설정되지 않으면 기본값은 'development'이다. NODE_ENV를 production으로 설정하면 CPU 사용량이 약간 떨어지는 동안 Node.js가 처리할 수 있는 요청 수가 약 2/3로 증가할 수 있다. *이것을 강조합니다: NODE_ENV를 production으로 설정하면 애플리케이션 속도가 3배나 더 빨라진다!*

![NODE_ENV=production](/assets/images/setnodeenv1.png "NODE_ENV=production")

<br/><br/>
