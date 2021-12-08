# npm registry에 기밀사항이 출판되는 것을 막아라

### 한문단 설명
예방책은 공공의 npm 저장소에 기밀사항을 실수로 출판하는 위험을 피할 수 있도록 조치를 취해야 한다. `.npmignore` 파일을 사용하여 특정한 파일이나 폴더를 블랙리스트로 올리도록 하거나 `package.json`에서 `files` 배열은 whitelist로 행동할 수 있다.

npm publish가 실제로 저장소에 게시한 내용을 얻으려면, `--dry-run` 플래그를 npm publish 명령어에 추가하여 생성된 tarbell 패키지의 상세보기를 제공할 수 있다.

프로젝트가 `.npmignore`와 `.gitignore` 파일을 모두 작성하는 경우, `.npmignore`에 없는 모든 것이 저장소에 게시된다. (즉, `.npmignore`파일이 `.gitignore` 파일을 재정의한다.) 이 상태는 일반적인 혼란의 원인이고 기밀 사항이 누설로 이어질 수 있는 문제이다. 개발자들은 `.gitignore` 파일을 갱신하지만, `.npmignore` 파일 갱신은 잊을 수 있고, 이러한 것으로 인해 잠재적으로 민감한 파일이 소스 제어로 푸시되지 않고 npm 패키지에 포함될 수 있다.

### 코드 예시
Example .npmignore file
```
#tests
test
coverage

#build tools
.travis.yml
.jenkins.yml

#environment
.env
.config

```

Example use of files array in package.json

```
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### 다른 블로거의 말

[Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/): 블로그에서
> 사용해야 할 다른 좋은 사례는 화이트리스트로 작동하고 생성 및 설치될 패키지에 포함될 파일 배열을 지정하는 package.json의 파일 속성을 사용하는 것이다. 파일 속성과 ignore파일은 패키지에서 명시적으로 포함할 파일을 결정하기 위해 함께 사용될 수 있다. 둘 다 사용할 경우, package.json의 이전 파일 속성이 ingore파일보다 우선시한다.
 
[npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)에서
> npm publish를 실행할 때, npm은 현재 디렉토리에 모든 파일들을 번들로 묶는다. 이는 무엇을 포함하고 무시해야 할지에 대해 몇 가지 결정을 내린다. 이러한 결정을 내리기 위해서, 프로젝트 디렉토리에서 여러 파일의 내용을 사용한다. 이 파일들은 .gitignore, .npmignore와 package.json의 파일 배열들을 포함한다. 또한, 항상 일부 파일들을 포함하고 다른 파일들은 무시한다.
