# 이미지 태그 vs 다이제스트를 이해하고 `:latest` 태그를 주의하여 사용해라.

### 한문단 설명

상용 상황이고 보안과 안정성이 중요하다면 "편의성"이 가장 최고의 결정 요인이 아닐 수 있다. 게다가 :latest 태그는 도커의 기본 태그이다. 이는 명시적 태그를 추가하는 것을 잊은 개발자가 latest 로 새로운 버전의 이미지를 실수로 푸시하는 것을 의미하고, latest 태그를 최신 상용 이미지로 사용하면 의도하지 않은 결과로 이어질 수 있다.

### 코드 예시:

```bash
$ docker build -t company/image_name:0.1 .
# :latest image is not updated
$ docker build -t company/image_name
# :latest image is updated
$ docker build -t company/image_name:0.2 .
# :latest image is not updated
$ docker build -t company/image_name:latest .
# :latest image is updated
```

### 다른 블로거의 말
[Vladislav Supalov](https://vsupalov.com/docker-latest-tag/): 블로그에서
> 일부 사람들은 :latest가 항상 가장 최근에 푸시된 이미지 버전을 가르킬 거라 예상한다. 하지만 사실이 아니다.

[Docker success center](https://success.docker.com/article/images-tagging-vs-digests)에서
> 

<br/>
