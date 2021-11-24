# 테스트 이름에 이 3가지를 포함해라

<br/><br/>

### 한문단 설명

테스트 보고서는 현재 응용 프로그램 개정판에 익숙하지 않은 사용자(테스터, 배포중인 DevOps 엔지니어와 지금으로부터 2년 후의 미래)의 요구를 충족시키는지 아닌지를 알려야 한다. 이는 테스트가 요구 사항 수준에서 말하는 3가지를 포함할 경우 가장 잘 달성된다.

(1) 무엇을 테스트하고 있는가? 예를 들어, ProductsService.addNewProduct 메소드

(2) 어떤 상황과 시나리오인가? 예를 들어, 메소드에 가격이 전달되지 않는다.

(3) 예상하는 결과는 무엇인가? 예를 들어, 새로운 제품이 승인되지 않았다.

<br/><br/>

### 코드 예시: 3가지를 포함하는 테스트 이름
```javascript
//1. 테스트 중인 유닛(모듈)
describe('Products Service', () => {
  describe('Add new product', () => {
    //2. 시나리오와 and 3. 예상
    it('When no price is specified, then the product status is pending approval', () => {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

### 코드 예시 - 좋지 않은 패턴: 의도를 이해하려면 전체 테스트 코드를 읽어야 한다.
```javascript
describe('Products Service', () => {
  describe('Add new product', () => {
    it('Should return the right status', () => {
        // 이 테스트가 확인하려는 것은 무엇인가? 시나리오와 예상은?
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

###  "올바른 예시: 테스트 보고서는 요구 사항 문서와 비슷하다."

 [Yoni Goldberg 블로그에서 "30 Node.js 테스트 모범 사례"](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![테스트 보고서 예시](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/test-report-like-requirements.jpeg "A test report example")

<br/><br/>
