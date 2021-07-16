# グローバルなテストフィクスチャとシードを避け、テストごとにデータを追加する

<br/><br/>

### 一段落説明

テストケースをこれ以上ないほどシンプルに保つ、という黄金のテストルールに則り、各テストは、テスト同士が結合するのを防ぎ、テストフローの理解を容易にするために、各自のデータセットを用意して実行されるべきです。実際には、これはしばしば、パフォーマンス向上を目的としてテストを実行する前に DB にシードデータを与える（「テストフィクスチャ」としても知られています）テスターによって違反されています。もちろんパフォーマンスは懸念するべき事項ではありますが、それは緩和することができます（例えば、インメモリ DB、「最低でも、API（コンポーネント）のテストを書く」の項目を参照してください）。しかしながらテストの複雑さは、他の懸念事項を凌駕するほどの、はるかに痛みを伴う悲痛の種です。現実的には、各テストケースに必要な DB レコードを明示的に追加させ、それらのレコード上でのみ実行させるべきです。もしパフォーマンスがクリティカルな懸念事項になる場合には、バランスを考慮した妥協案として、データに変更を加えない唯一のテストスイート（例えば、クエリ）をシードする、という形がありえます。

<br/><br/>

### コード例: 各テストが独自のデータセットを用いて実行される
```javascript
it('When updating site name, get successful confirmation', async () => {
  // テストは新しいデータを追加し、そのレコードのみを利用して動作しています
  const siteUnderTest = await SiteService.addSite({
    name: 'siteForUpdateTest'
  });
  const updateNameResult = await SiteService.changeName(siteUnderTest, 'newName');
  expect(updateNameResult).to.be(true);
});
```

<br/><br/>

### コード例 – アンチパターン:  テストが独立しておらず、事前に整えられたデータの存在を仮定している
```javascript
before(() => {
  // サイトと管理者のデータを DB に追加しています。データはどこにあるのでしょうか？外部ファイルです。外部の json ファイルか、もしくは マイグレーションフレームワークです。
  await DB.AddSeedDataFromJson('seed.json');
});
it('When updating site name, get successful confirmation', async () => {
  // 私は「Portal」という名前のサイトがあることを知っています - シードファイル上で確認したのです
  const siteToUpdate = await SiteService.getSiteByName('Portal');
  const updateNameResult = await SiteService.changeName(siteToUpdate, 'newName');
  expect(updateNameResult).to.be(true);
});
it('When querying by site name, get the right site', async () => {
  // 私は「Portal」という名前のサイトがあることを知っています - シードファイル上で確認したのです
  const siteToCheck = await SiteService.getSiteByName('Portal');
  expect(siteToCheck.name).to.be.equal('Portal'); // 失敗しました！前のテストがサイト名を変更しています :[
});
```