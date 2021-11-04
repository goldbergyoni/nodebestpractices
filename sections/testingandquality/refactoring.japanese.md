# リファクタリング

<br/><br/>

### 一段落説明

リファクタリングは反復開発フローにおいて重要なプロセスです。重複したコード、長いメソッド、長いパラメータリストといった「コードの臭い」（悪いコーディングプラクティス）を取り除くことで、コードが改善し、保守性が向上します。静的解析ツールを使用することは、そういったコードの臭いを発見しリファクタリングを中心としたプロセスを構築するのに役立ちます。こういったツールを CI に導入することで、品質チェックプロセスを自動化することができます。CI が Sonar や Code Climate といったツールと統合されている場合、コードの臭いを検出した際にビルドを失敗させ、作者に問題の対処方法を知らせます。これらの静的解析ツールは、ESLint のような lint ツールを補うものです。多くの linting ツールは、単一ファイルにおけるインデントやセミコロンの付け忘れ（長い関数のようなコードの臭いを見つけるものもありますが）といったコードスタイルにフォーカスしますが、静的解析ツールは単一のファイルおよび複数のファイルにおいてコードの臭いを発見する（重複したコード、複雑性解析など）ことにフォーカスしています。

<br/><br/>


### Martin Fowler - ThoughtWorks 社のチーフサイエンティスト

書籍 "Refactoring - Improving the Design of Existing Code" より

> リファクタリングは、既存のコードベースの設計を改善するための、制御された技術です。

<br/><br/>

### Evan Burchard - Web 開発コンサルタント、作家

書籍 "Refactoring JavaScript: Turning Bad Code into Good Code" より

> どのようなフレームワークや「JS にコンパイル可能な」言語、ライブラリを使用しようとも、JavaScript の根本的な質が低ければ、バグやパフォーマンスの懸念は常に問題になります。

<br/><br/>

### 例: CodeClimate を使用した複雑なメソッドの解析（商用）

![alt text](../../assets/images/codeanalysis-climate-complex-methods.PNG "複雑なメソッドの解析")

### 例: CodeClimate を使用したコード解析結果の傾向と履歴（商用）

![alt text](../../assets/images/codeanalysis-climate-history.PNG "コード解析の履歴")

### 例: コード解析結果のサマリーと傾向（商用）

![alt text](../../assets/images/codeanalysis-sonarqube-dashboard.PNG "コード解析結果のサマリーと傾向")


<br/><br/>
