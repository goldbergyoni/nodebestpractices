<!---
# Structure your solution by components
--->

# コンポーネントによってソリューションを構築する

<br/><br/>

<!---
### One Paragraph Explainer
--->

### 概要

<!---
For medium sized apps and above, monoliths are really bad - having one big software with many dependencies is just hard to reason about and often leads to spaghetti code. Even smart architects — those who are skilled enough to tame the beast and 'modularize' it — spend great mental effort on design, and each change requires carefully evaluating the impact on other dependent objects. The ultimate solution is to develop small software: divide the whole stack into self-contained components that don't share files with others, each constitutes very few files (e.g. API, service, data access, test, etc.) so that it's very easy to reason about it. Some may call this 'microservices' architecture — it's important to understand that microservices are not a spec which you must follow, but rather a set of principles. You may adopt many principles into a full-blown microservices architecture or adopt only a few. Both are good as long as you keep the software complexity low. The very least you should do is create basic borders between components, assign a folder in your project root for each business component and make it self-contained - other components are allowed to consume its functionality only through its public interface or API. This is the foundation for keeping your components simple, avoid dependency hell and pave the way to full-blown microservices in the future once your app grows.
--->

　中規模以上のアプリケーションにおいて、モノリスな構造はよくありません。多くの依存関係を持つ１つの大きなソフトウェアを保持することは、考えるのが難しいだけでなく、しばしばスパゲッティコードに陥ります。賢い設計者――すなわち獣を飼い慣らして、それを「モジュール化」するのに十分なスキルを持っている人――でさえ、設計に多大な精神的な努力を費やし、変更ごとに他の依存オブジェクトへの影響を慎重に評価する必要があります。究極の解決策は、小さなソフトウェアを開発することです。スタック全体を他のファイルと共有しない自己完結型のコンポーネントに分割し、それぞれが非常に少数のファイル（API、サービス、データアクセス、テストなど）によって構成されるようにします。このやり方であれば考えるのは簡単です。これは「マイクロサービス」アーキテクチャとも呼ばれています。マイクロサービスはあなたが従わなければならない仕様ではなく、むしろ一連の原則であることを理解することが重要です。あなたは本格的なマイクロサービスアーキテクチャに多くの原則を採用しても、またはいくつかのみを採用するかもしたとしても、ソフトウェアの複雑さを低く抑える限り、どちらでも問題はありません。最低限必要なのは、コンポーネント間に基本的な境界線を作成し、各ビジネスコンポーネントにプロジェクトルートのフォルダを割り当ててそれを自己完結型にすることです。他のコンポーネントは、そのパブリックインタフェースまたはAPIを通じてのみ機能を使用できます。これは、コンポーネントをシンプルに保ち、依存性地獄を避け、アプリケーションが成長したら将来的に本格的なマイクロサービスへの道を開くための基盤です。

<br/><br/>

<!---
### Blog Quote: "Scaling requires scaling of the entire application"
--->

### ブログからの引用：”スケーリングにはアプリケーション全体のスケーリングが必要となる”

<!---
 From the blog MartinFowler.com
--->

 MartinFowler.comより引用

<!---
> Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.
--->

> モノリシックアプリケーションはうまくいくこともありますが、より多くのアプリケーションがクラウドにデプロイされるようになるにつれて、人々はますます不満を感じてきています。変更サイクルは密接に関連しています。アプリケーションのごく一部に変更を加えるにも、モノリス全体を再構築してデプロイする必要があります。時間が経つにつれて、良いモジュール構造を維持するのは難しいことが多く、そのモジュール内の１つのモジュールだけに影響を与えるべき変更を維持するのが難しくなります。スケーリングは、リソースの追加を必要とするアプリケーションの一部だけではなく、アプリケーション全体でのスケーリングを必要とします。

<br/><br/>

<!---
### Blog Quote: "So what does the architecture of your application scream?"
--->

### ブログより引用：”それでは、アプリケーションのアーキテクチャーは何を叫ぶのでしょうか。”

<!---
 From the blog [uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) 
--->

ブログ [uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) より引用

<!---
> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library.<br/>

So what does the architecture of your application scream? When you look at the top level directory structure, and the source files in the highest level package; do they scream: Health Care System, or Accounting System, or Inventory Management System? Or do they scream: Rails, or Spring/Hibernate, or ASP?.
--->


> 　図書館の建築（アーキテクチャ）を見ている時、そこには壮大な入り口、チェックインカウンター、読書エリア、小さな会議室、そして、その図書館のすべての本を収納できる本棚をが配置された空間があるでしょう。その建築は叫ぶでしょう、図書館だと。<br/>

　それでは、アプリケーションのアーキテクチャは何を叫ぶのでしょうか。トップレベルのディレクトリ構造と、最上位パッケージのソースファイルを見たとき、彼らが叫ぶのは、ヘルスケアシステム？　会計システム？　または在庫管理システム？ それとも、彼らはRails、Spring/Hibernate、それともASPと叫ぶのでしょうか？

<br/><br/>

<!---
### Good: Structure your solution by self-contained components
--->

### GOOD：自己完結型のコンポーネントでソリューションを構築する

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

<!---
### Bad: Group your files by technical role
--->

### BAD：技術的な役割別でファイルをグループ化してしまう

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
