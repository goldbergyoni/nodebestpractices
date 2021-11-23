# Node에서 프론트 엔드 자산을 빼라

<br/><br/>

### 한문단 요약

클래식 웹에서는 백엔드가 브라우저에 프론트엔드/그래픽을 제공했다. Node에서 일반적인 방식은 정적 파일을 클라이언트에게 전달하기 위해 Express 정적 미들웨어를 사용하는 것이다.
그러나 단일 스레드를 사용하는 Node는 일반적인 웹 앱이 아니기에 한번에 많은 파일을 제공하기에 최적화되지 않았다.
대신 작업에 대해 많은 최적화와, 훨씬 많은 처리량을 제공하는 리버스 프록시(예를 들어 nginx, HAProxy), 클라우드 저장소, CDN(예를 들어, AWS S3, Azure Blob Storage 등)의 사용을 고려해야 한다.
예를 들어 nginx와 같은 특수 미들웨어는 파일 시스템과 네트웨크 카드 간의 직접 연결을 구현하고 다중 스레드 접근 방식을 사용하여, 다수의 요청 간의 개입을 최소화 한다.

최적의 솔루션:

1. 리버스 프록시 사용 - 정적 파일은 Node 애플리케이션의 바로 옆에 위치하며, 정적 파일 폴더에 대한 요청만 nginx와 같은 Node 애플리케이션 앞에 있는 프록시에서 제공한다.
이 방식을 사용하면, Node는 정적 파일을 배포하는 책임은 있으나 직접 제공하지는 않는다. 이 방법은 CORS를 예방하기에 이러한 방식을 선호 할 것이기 때문에  프론트엔드 동료는 이 접근 방식을 선호할 것이다.

2. 클라우드 저장소 - 정적 파일은 Node 애플리케이션의 컨텐츠가 아니고, AWS S3, Azure BlobStorage와 비슷한 저장소에 저장이 될 것이다.
이 방식을 사용하면, Node는 정적 파일을 배포 하거나 제공할 책임이 없다. 따라서 노드와 프론트엔드 간에 완전한 분리가 이루어지며, 이는 다른 팀에서 처리한다.

<br/><br/>

### 예제 논의: 정적 파일을 제공하지 위한 일반적인 nginx 구성

```nginx
# gzip 압축 구성
gzip on;
keepalive 64;

# 웹서버 정의
server {
listen 80;
listen 443 ssl;

# 정적 컨텐츠 관리
location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
root /usr/local/silly_face_society/node/public;
access_log off;
expires max;
}
```

<br/><br/>

### 블로그 인용

[StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/)의 블로그:

>…개발중 당신은 정적 파일을 제공하기 위해 [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile)를 사용할 수 있다.
그러나 이 함수는 모든 파일 요청에 대해 파일 시스템에서 읽어야 하기 때문에 상당한 대기 시간이 발생하고 애플리케이션 전체 성능에 영향을 미치기 때문에 상용되는 서버에는 사용하면 안된다.
res.sendFile()은 파일 전송 시스템으로 구현되어 있지 않기 때문에 효율과는 거리가 멀어진다. 
대신, Express 애플리케이션에서 파일 제공에 최적화 되어있는 serve-static 미들웨어(또는, 비슷한 환경)를 사용해라.
더 나은 방법은 정적 파일 제공을 위해 리버스 프록시를 사용하는 것이다. 자세한 내용은 리버스 프록시 사용에 대한 정보를 참조해라…
<br/><br/>
