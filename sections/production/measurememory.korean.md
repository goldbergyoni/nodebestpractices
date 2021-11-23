# 메모리 사용량을 측정하고 보호해라

<br/><br/>

### 한문단 요약

웹 개발자는 메모리의 누수를 만들어서는 안된다.
실제로, 메모리 문제는 노드의 잘 알려진 문제이다.
무엇보다 메모리의 사용량을 지속적으로 처리해야 한다.
개발 및 작은 제품에서 당신은 리눅스 명령어 또는 node-inspector 및 memwatch와 같은 npm 라이브러리를 통해 수동으로 측정할 수 있다.
수동 작업의 주요한 단점은 사람이 적극적으로 모니터링 해야 한다는 것이다. 중요한 제품에서 메모리의 누수를 알려주는 강력한 모니터링 도구(AWS CloudWatch, DataDog 또는 이와 유사한 선제적 시스템)를 사용하는 것은 절대적으로 중요하다.
메모리의 누수를 방지하기 위한 몇가지 지침은 다음과 같다. 전역에서 데이터를 저장하지 말 것, 동적 데이터의 스트림을 사용할 것, let, const를 사용하여 변수 범위를 제한할 것.

<br/><br/>

### 블로그 인용

* [Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/)의 블로그:
> ... ”이미 우리가 배웠듯이 Node.js에서 JavaScript코드는 V8엔진에 의해 네이티브 코드로 실행된다. 그 결과 네이티브 데이터 구조는 원래의 구조와 크게 관련이 없으며 V8에서 단독으로 관리한다. 이것은 우리가 JavsScript에서 메모리를 능동적으로 할당하거나 해제 할 수 없음을 의미한다. V8엔진은 이 문제를 해결하기 위해 가비지 컬렉터라는 유명한 메커니즘을 사용한다.”


* [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load)의 블로그:
> ... “약간의 시간과 상당한 양의 메모리 할당으로 합덤프를 생성하여, 이러한 덤프들을 비교해보면 프로세스는 항상 동일하다는 명백한 결과로 이어진다.”


* [Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/)의 블로그:
> ... “메모리가 적은 시스템에서 Node.js가 1,5GBs의 메모리를 사용햐려고 하는 것은 제한되어야 하지만, 제한되지 않는다. 이것은 가바지 컬렉터의 고비용 작업에 의한 것으로 추측된다. 이에 대한 해결책은 "node –max_old_space_size=400 server.js –production" 명령을 이용해 Node.js 프로세스에 추가 변수를 할당하는 것이다. 가비지 컬렉터는 왜 고비용 작업인가? V8 JavaScript 엔진은 stop-the-world 가바지 컬렉터를 사용한다. 이것은 실제로 가비지 컬렉션이 진행되는 동안 프로그램이 실행을 중단한다는 의미이다.”