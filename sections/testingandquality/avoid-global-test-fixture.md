# 고정적인 공용 테스트 데이터나 seeds는 피하고, 테스트별로 데이타를 붙여라

<br/><br/>

### 한문단 설명

특별한 테스트 규칙에 따라 테스트 케이스를 단순하게 유지하려면, 각 테스트에 DB 행 집합을 추가하여 결합을 방지하고 테스트 흐름에 대해 쉽게 추론할 수 있도록 작동해야 한다. 실제로는 성능 향상을 위해 테스트 하기 전에 DB 데이터를 시드하는 테스터('테스트 픽스처'라고 함)에 의해 종종 위반되는 경우가 있습니다. 성능은 실제로 유효한 문제지만(예: 매모리 내 DB, "구성 요소 테스트" 글머리 참조)테스트 복잡성이 다른 고려사항을 통제해야 하는 것은 매우 고통스러운 슬픔이다. 실제로, 각 테스트 케이스에 필요한 DB 레코드를 명시적으로 추가하고 해당 레코드에 대해서만 작동하도록 한다. 성능이 중요한 문제가 될 경우, 균형 잡힌 타협이 데이터를 변경하지 않는 유일한 테스트 모음(예: 쿼리)를 시드하는 형태로 나타낼 수 있다.

<br/><br/>

### 코드 예시: 각 테스트는 자체 데이터 집합에서 동작한다.
```javascript
it('When updating site name, get successful confirmation', async () => {
  //test is adding a fresh new records and acting on the records only
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
  //adding sites and admins data to our DB. Where is the data? outside. At some external json or migration framework
  await DB.AddSeedDataFromJson('seed.json');
});
it('When updating site name, get successful confirmation', async () => {
  //I know that site name 'portal' exists - I saw it in the seed files
  const siteToUpdate = await SiteService.getSiteByName('Portal');
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');
  expect(updateNameResult).to.be(true);
});
it('When querying by site name, get the right site', async () => {
  //I know that site name 'portal' exists - I saw it in the seed files
  const siteToCheck = await SiteService.getSiteByName('Portal');
  expect(siteToCheck.name).to.be.equal('Portal'); //Failure! The previous test change the name :[
});
```
