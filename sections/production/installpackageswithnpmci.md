# npm ci로 패키지를 설치해라

<br/><br/>

### 한문단 설명

[**Lock dependencies**](/sections/production/lockdependencies.md)에 따라 종속성을 고정했지만 이제는 상용에서 정확한 패키지 버전이 사용되는지 확실하게 해야한다.

`npm ci`을 사용하여 패키지를 설치하면 그 이상을 정확하게 한다.
* `package.json`과 `package-lock.json`이 일치하지 않거나(일치해야 함) lock 파일이 없으면 실패한다. 
* `node_modules` 폴더가 있으면 설치하기 전에 자동으로 제거한다.
* [릴리즈 블로그 포스트](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)에 따르면 거의 2배나 더 빠르다!

### 언제 유용할까?
CI 환경이나 QA가 나중에 상용으로 보내는 것과 정확히 같은 패키지 버전으로 소프트웨어를 테스트할 수 있음을 보장한다. 또한, cli 명령어가 아닌 package.json이 어떠한 이유로 직접 편집하여 수동으로 변경하면, package.json과 package-lock.json 사이에 갭이 생기고 에러가 발생한다.

### npm이 말하는 것

[npm ci 문서](https://docs.npmjs.com/cli/ci.html)에서
> 이 명령어는 테스트 플랫폼, 지속적 통합 및 배포(또는 종속성을 새로 설치하려는 모든 상황)와 같은 자동화된 환경에서 사용되는 것을 제외하면 npm-install과 유사하다.

[`ci` 명령어 출시를 알려주는 블로그 포스트](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
> 이 명령어는 워크플로에서 CI/CD를 사용하는 개발자에게 일관되고 빠른 경험을 제공하여, 지속적인 통합/지속적인 배포 프로세스를 위한 빌드의 성능과 안정성 모두의 대규모 개선을 제공한다.

[npmjs: dependencies와 devDepencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
>    "dependencies": 프로덕션에서 애플리케이션에 필요한 패키지들
>    "devDependencies": 로컬 개발과 테스트에만 필요한 패키지들

<br/><br/>
