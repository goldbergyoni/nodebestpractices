# 빌드 시간 동안의 기밀 값들에 대해 삭제하고, 인수에 기밀값들을 넣는 것을 피하라.

#### 한 문단 요약

도커 이미지는 단순히 파일의 묶음이 아니라, 빌드 시간 동안 어떤 일이 일어나는지를 보여주는 여러 레이어들이다. 가장 일반적인 시나리오에서 빌드되는 시간동안 개발자들은 npm 토큰을 필요로 한다.(대부분 비공개 레지스트리 용이다.) 이것은 빌드 시간의 인자로 토큰을 전달하여 잘못 달성되게 만든다. 흠없고 안전한 것처럼 보일 수 있지만, 해당 토큰은 이제 개발자의 컴퓨터에 있는 도커 기록 및 도커 레지스트리, 그리고 CI로부터 가져올 수 있다. 토큰에 대한 접근 권한을 얻은 침입자들은 조직 개인 npm 레지스트리 조직에 대해서 작성을 할 수 있게 된다. 두 개의 조금 더 안전한 대안책은 다음과 같다: 가장 문제가 없는 방식은 Docker이다. -- (2020년 7월에 실험 단계) 기밀 기능은 빌드가 되는 시간동안에만 파일을 마운팅 할 수 있게 허락한다. 두번째 접근 방식은 인자를 포함한 여러 단계의 빌드를 사용하여 빌드하고, 필요한 파일들만 상용에 복사하는 것이다. 마지막 기술은 이미지와 함께 기밀을 전송하지 않고 로컬 도커 히스토리에서 나타나도록 하는 것이다. - 이는 일반적으로 대부분의 조직들에서 충분히 안전하다고 간주되고 있다.

#### 코드 예제 - 기밀 값들이 탑재된 도커 사용 (실험적이지만 안정적이다.)
<details>
<summary>Dockerfile</summary>
<div markdown="1">

```dockerfile
# syntax = docker/dockerfile:1.0-experimental

FROM node:12-slim

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# The rest comes here
```

</div>
</details>


<br/>

#### 코드 예제 - 여러 단계의 빌드를 통한 안전한 빌드
<details>
<summary>Dockerfile</summary>
<div markdown="1">

```dockerfile
FROM node:12-slim AS build

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist

RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc


FROM build as prod

COPY --from=build /dist /dist
CMD ["node", "index.js"]

# The ARG and .npmrc won't appear in the final image but can be found in the Docker daemon un-tagged images list - make sure to delete those
```

</div>
</details>


<br/>

#### 코드 예제 안티 패턴 - 시간 인자를 사용하여 빌드
<details>
<summary>Dockerfile</summary>
<div markdown="1">

```dockerfile
FROM node:12-slim

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist

RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

# Deleting the .npmrc within the same copy command will not save it inside the layer, however it can be found in image history

CMD ["node", "index.js"]
```

</div>
</details>


<br/><br/>

#### 블로그 인용: "이러한 기밀 값들은 최종 도커에 저장되지 않는다."

[Alexandra Ulsh](https://www.alexandraulsh.com/2019/02/24/docker-build-secrets-and-npmrc/?fbclid=IwAR0EAr1nr4_QiGzlNQcQKkd9rem19an9atJRO_8-n7oOZXwprToFQ53Y0KQ) 블로그에서 발췌

>2018년 11월에 도커 18.09 버전에서 도커 빌드를 위한 새로운 --secret 플래그가 선보여졌다. 이것은 우리로 하여금 파일의 기밀 값들을 도커 빌드로 전달할 수 있게 한다. 기말 값들은 마지막 도커 이미지나 중간 이미지, 또는 이미지 커밋 기록에 저장되지 않는다. 이제는 빌드 기밀값을 사용할 때 빌드 인자 또는 여러 단계의 빌드 없이도 개인 npm 패키지로 Docker 이미지를 안전하게 빌드할 수 있다.