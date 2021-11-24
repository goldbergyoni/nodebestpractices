# 공용 테스트 픽스처나 시드는 피하고, 테스트 별로 데이터를 추가해라

<br/><br/>

### 한문단 설명

특별한 테스트 규칙에 따라 테스트 케이스를 단순하게 유지하려면, 각 테스트에 DB행 집합을 추가하여 결합을 방지하고 테스트 흐름에 대해 쉽게 추론할 수 있도록 작동해야 한다. 실제로는 성능 향상을 위해 테스트를 실행하기 하기 전에 DB 데이터('테스트 픽스처'라고 함)를 시드하는 테스터에 의해 종종 위반되는 경우가 있습니다. 성능이 중요하긴 하지만 완화될 수 있다.(예: 매모리 내 DB, "구성 요소 테스트" 글머리 참조) 하지만 테스트 복잡성은 다른 고려사항을 통제해야 하는 매우 고통스러운 슬픔이다. 실제로, 각 테스트 케이스에 필요한 DB 레코드를 명시적으로 추가하고 해당 레코드에 대해서만 작동하도록 한다. 성능이 중요한 문제가 될 경우, 적절한 타협이 데이터를 변경하지 않는 유일한 테스트 모음(예: 쿼리)를 시드하는 형태로 나타낼 수 있다.

<br/><br/>

### 코드 예시: 각 테스트는 자체 데이터 집합에서 동작한다.
```javascript
it('When updating site name, get successful confirmation', async () => {
  // 테스트는 새로운 레코드를 추가하고 그 레코드에서만 작동한다.
  const siteUnderTest = await SiteService.addSite({
    name: 'siteForUpdateTest'
  });
  const updateNameResult = await SiteService.changeName(siteUnderTest, 'newName');
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### 코드 예시 – 좋지 않은 패턴: 테스트는 독립적이지 않고 미리 구성된 데이터의 존재를 가정한다.
```javascript
before(() => {
  // sites와 admins 데이터를 DB에 추가한다. 데이터는 어디에 있는가? 외부에. 일부는 외부의 json이나 마이그레이션 프레임워크에서
  await DB.AddSeedDataFromJson('seed.json');
});
it('When updating site name, get successful confirmation', async () => {
  // 'portal'이라는 사이트 이름이 존재하는 것을 안다. - 시드 파일에 있다.
  const siteToUpdate = await SiteService.getSiteByName('Portal');
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');
  expect(updateNameResult).to.be(true);
});
it('When querying by site name, get the right site', async () => {
  // 'portal'이라는 사이트 이름이 존재하는 것을 안다. - 시드 파일에 있다.
  const siteToCheck = await SiteService.getSiteByName('Portal');
  expect(siteToCheck.name).to.be.equal('Portal'); // 실패! 이전 테스트에서 이름 변경됨 :[
});
```
