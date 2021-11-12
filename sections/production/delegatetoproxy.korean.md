# 가능한 모든것(예. static content, gzip)을 리버스 프록시에 맡겨라

<br/><br/>

### 한 문단 설명

익스프레스를 신봉하여 제공되는 풍부한 미들웨어를 static파일, gzip 인코딩, 쓰로틀링 요청, SSL termination 등과 같은 네트워크와 관련된 업무에 사용하는 것은 그럴싸 해 보이지만 사실은 다르다. 오히려 싱글스레드 모델이기 때문에 장기간동안 CPU를 바쁘게 함으로써 퍼포먼스 저하를 불러올 수 있다. (되새겨 봐라, 노드의 실행모델은 간단한 업무나 동기처리되는 입출력 관련 업무에 최적화되어있다). 네트워크 일에 특화된 툴을 사용하는 것이 더 나은 접근방법일 것이다 – 널리 알려진 툴들로는 가장 거대한 클라우드 밴더(cloud vendors)에게도 node.js 프로세스로의 유입 부하를 줄이기 위한 목적으로 사용되는 nginx와 HAproxy가 있다.

<br/><br/>

### Nginx Config파일 예시 – 서버 응답을 축약하기위해 nginx를 사용함

```nginx
# configure gzip compression
gzip on;
gzip_comp_level 6;
gzip_vary on;

# configure upstream
upstream myApplication {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

#defining web server
server {
    # configure server with ssl and error pages
    listen 80;
    listen 443 ssl;
    ssl_certificate /some/location/sillyfacesociety.com.bundle.crt;
    error_page 502 /errors/502.html;

    # handling static content
    location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
    root /usr/local/silly_face_society/node/public;
    access_log off;
    expires max;
}
```

<br/><br/>

### 다른 블로걸들이 말하길

- 다음의 블로거로 부터 [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications):

  > …다음과 같은 함정에 빠지기 쉽다 – 너는 Express와 같은 패키지를 보고 생각할 것이다. "대단해! 어서 시작해 보자" - 너는 코드를 적을것이고, 그리곤 너가 원하는 것을 해주는 어플리케이션을 만들것이다. 이것은 훌륭하며, 솔직히 말해 너는 이미 많은 전투에서 승리를 거둔 것이다. 하지만 노드는 웹서버라는 아주 중요한 사실을 까먹고 너가 서버에 앱을 업로드 하거나, HTTP 포트에 연결(listen)한다면 전쟁에선 결국 패배하는 것이다. **어떤 양의 트래픽이든 너의 애플리캐이션에 유입되기만 하면 너는 무언가 잘못되기 시작했음을 알아차릴 것이다: 연결은 끊기고, asset의 서비스는 중단되며 심할경우 너의 서버는 죽어버린다. 이 일에 대해 증명된 웹서버가 잘 처리하는 복잡한 일들을 노드에게 처리하도록 하는 꼴이다. 뭐하러 휠을 새로만드나?** > **노드는 하나의 요청, 하나의 이미지 용이다. 그리고 이것(노드)은 너의 애플리케이션이 데이터베이스를 읽어들이거나 복잡한 로직을 다루는 등의 중요한 일처리를 할 때 사용할 수 있는 메모리라는 것을 명심해라. 왜 편리함을 위해 너의 애플리케이션을 불구로 만들어 버리는 것인가?**

- 다음 블로거로 부터 [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
  > express.js가 연결 미들웨어에 몇 내장 static 파일 핸들링 기능을 갖고 있다고 해도, 너는 그것을 절대 사용해선 안된다. **Niginx가 static file을 핸들링하는 일과 동적이지 않은(non-dynamic) 컨텐츠에 대한 요청이 우리의 노드 프로세스를 클로기능하는 것을 방지하는 일에 있어 더 낫다**…
