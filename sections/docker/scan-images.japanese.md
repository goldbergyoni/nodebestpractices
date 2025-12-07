# プロダクションの前にイメージ全体をスキャンする

<br/><br/>

### One Paragraph Explainer

脆弱性のためにコードをスキャンすることは価値のある行動ですが、すべての潜在的な脅威をカバーできるものではありません。なぜでしょうか？ 理由は、脆弱性は OS レベルにも存在し、アプリケーションは Shell や Tarball、OpenSSL といったバイナリを実行する可能性があるためです。また、脆弱な依存関係がコードスキャンの後に注入される（サプライチェイン攻撃など）可能性があります - そのため、プロダクションの直前に最終的なイメージをスキャンする、といったことが順当です。このアイデアは E2E テストに似ています - 様々な要素を独立にテストした後に、組み合わせられた完成物を最終的にチェックするといったことは価値があります。主に 3 つのスキャナファミリーがあります: 脆弱性 DB をキャッシュしたローカル/CI バイナリ、クラウド上のスキャナサービス、そして docker ビルド中にスキャンするニッチなツールです。1 つめのグループは最も人気で、通常もっとも速いものです - [Trivvy](https://github.com/aquasecurity/trivy) や [Anchore](https://github.com/anchore/anchore)、そして [Snyk](https://support.snyk.io/hc/en-us/articles/360003946897-Container-security-overview) といったツールは一度見てみる価値があります。ほとんどの CI ベンダーはこういったスキャナを組み合わせて利用するためのローカルプラグインを提供しています。注意しておくべきこととして、これらのスキャナは多くの領域をカバーしているため、すべてのスキャンで何かしらの結果が表示されるといったことがあります - 圧倒されてしまうことを避けるため、高い閾値を設定することを検討してください。

<br/><br/>

### コード例 – Trivvy を用いたスキャン

<details>

<summary><strong>Bash</strong></summary>

```console
$ sudo apt-get install rpm
$ wget https://github.com/aquasecurity/trivy/releases/download/{TRIVY_VERSION}/trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ sudo dpkg -i trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ trivy image [YOUR_IMAGE_NAME]
```

</details>

<br/><br/>

### レポート例 – Docker スキャン結果 (Anchore)

![Report examples](../../assets/images/anchore-report.png "Docker scan report")
