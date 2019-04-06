[✔]: assets/images/checkbox-small-blue.png

# Node.js En İyi Uygulamalar

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2081%20Best%20Practices-blue.svg" alt="81 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Mar%2010%202019-green.svg" alt="Last update: March 10, 2019"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%2010.15.3%20LTS-brightgreen.svg" alt="Updated for Node 10.15.3 LTS">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Bizi Twitter'da takip edin!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Farklı dillerde oku: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![RU](/assets/flags/RU.png)**RU** and ![TR](/assets/flags/TR.png)**TR** in progress!)](#translations)

<br/>

###### Yapım ve bakım [Yönetim Kurulu](#steering-committee) ve [Ortak Çalışanlar](#collaborators) tarafından yapılıyor

# Son En İyi Uygulamalar ve Haberler

- **New translation:** ![BR](/assets/flags/BR.png) [Brazilian Portuguese](/README.brazilian-portuguese.md) available now, courtesy of [Marcelo Melo](https://github.com/marcelosdm)! ❤️

- **New best practice:** 4.2: Include 3 parts in each test name - [_From the section "Testing and overall quality"_](https://github.com/i0natan/nodebestpractices#4-testing-and-overall-quality-practices)

- **New best practice:** 7.1: Prefer native JS methods over user-land utils like Lodash - [_From the section "Performance"_](https://github.com/i0natan/nodebestpractices#7-performance-best-practices)

- **News update:** [We kicked-off the performance section, wanna join?](https://github.com/i0natan/nodebestpractices/issues/302)

<br/><br/>

# Hoşgeldiniz! Öncelikle Bilmeniz Gereken 3 Şey:

**1. You are, in fact, reading dozens of the best Node.js articles -** this repository is a summary and curation of the top-ranked content on Node.js best practices, as well as content written here by collaborators

**2. It is the largest compilation, and it is growing every week -** currently, more than 70 best practices, style guides, and architectural tips are presented. New issues and pull requests are created every day to keep this live book updated. We'd love to see you contributing here, whether that is fixing code mistakes, helping with translations, or suggesting brilliant new ideas. See our [writing guidelines here](/.operations/writing-guidelines.md)

**3. Most best practices have additional info -** most bullets include a **🔗Read More** link that expands on the practice with code examples, quotes from selected blogs and more information

<br/><br/>

## Table of Contents

1.  [Project Structure Practices (5)](#1-project-structure-practices)
2.  [Error Handling Practices (11) ](#2-error-handling-practices)
3.  [Code Style Practices (12) ](#3-code-style-practices)
4.  [Testing And Overall Quality Practices (10) ](#4-testing-and-overall-quality-practices)
5.  [Going To Production Practices (18) ](#5-going-to-production-practices)
6.  [Security Practices (24)](#6-security-best-practices)
7.  [Performance Practices (1) (In Progress️ ✍️)](#7-performance-best-practices)

<br/><br/>

# `1. Proje Yapısı En İyi Uygulamaları`

## ![✔] 1.1 Çözümünüzü komponentler ile yapılandırın

**TL;DR:** 
En kötü büyük uygulamalardaki gizli tehlike yüzlerce bağımlılıkla büyük bir kod tabanını sürdürmektir - bir monolit gibi (koca bir kaya gibi) yeni özellikler eklemeye çalışan geliştiricileri yavaşlatır. Bunun yerine, kodunuzu komponentlere ayırın, her komponent kendi klasörünü veya kendine özel bir kod tabanını alır ve her birimin küçük ve basit olmasını sağlayın. Doğru proje yapısının örneklerini görmek için aşağıdaki 'Daha Fazla Oku' kısmını ziyaret edin.

**Aksi takdirde:** Yeni özellikleri kodlayan geliştiriciler değişikliklerinin etkisini anlamakta zorlanıyorlar ve diğer bağımlı komponentleri bozma korkusu - dağımtımlar daha yavaş ve daha riskli olur. Ayrıca tüm iş birimleri ayrılmadığında dağıtıklaştırmanın daha zor olduğu düşünülmektedir.

🔗 [**Daha fazla oku: komponentlerle yapı**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Komponentlerinizi katmanlayın, Express'i sınırları içerisinde tutun

**TL;DR:** Her komponent 'katmanlar' (layers) içermelidir. Web, mantık ve veri erişim kodu için özel bir nesne. Bu sadece farklı kavramların birbirinden ayrılmasını (separation of concerns) sağlamaz ayrıca önemli ölçüde testi ve mocklamayı (mocking) kolaylaştırır. Bu çok yaygın bir kalıp olmasına rağmen, API geliştiricileri, web katmanı nesnelerini (Express req, res) iş mantığına ve veri katmanlarına geçirerek katmanları karıştırma eğilimindedir. Bu, uygulamanızı sadece Express'e bağlı ve erişilebilir yapar.

**Aksi takdirde:** Web nesnelerini diğer katmanlarla karıştıran uygulamalaya test kodu, görev zamanlayıcısı ve diğer Express dışından çağıranlar tarafından erişilemez.

🔗 [**Daha fazla oku: uygulamanızı katmanlayın**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Ortak kullanılan yardımcı uygulamaları npm paketleri gibi paketleyin

**TL;DR:** Büyük bir kod tabanından oluşan büyük bir uygulamada, loglama, şifreleme ve benzerleri gibi kesişen ilgileri ayıran (cross-cutting-concern) yardımcı uygulamalar kendi kodunuzla paketlenmeli ve özel npm paketleri olarak gösterilmelidir. Bu, kodunuzu birçok kod tabanında ve projelerde paylaşmanıza izin verir.

In a large app that constitutes a large code base, cross-cutting-concern utilities like logger, encryption and alike, should be wrapped by your own code and exposed as private npm packages. This allows sharing them among multiple code bases and projects

**Aksi takdirde:** Kendi dağıtım ve bağımlılık tekerleğinizi icat etmeniz gerekecek.

🔗 [**Daha fazla oku: Özelliklerle yapı**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 'uygulama' ve 'server' birbirinden ayrı Express uygulaması

**TL;DR:** Tüm Express uygulamasını tek bir büyük dosyada tanımlamak gibi kötü alışkanlıklardan kaçının - Express tanımlamanızı en az iki dosyaya ayırın: API tanımalaması (app.js) ve ağ (www). Daha iyi bir yapı için, API tanımlamanızı komponentler içerisine koyun.

**Aksi takdirde:** API'nize sadece HTTP istekleri ile test için erişilebilecek (daha yavaş ve kapsama raporları oluşturmak çok daha zor). Muhtemelen yüzlerce kod satırını tek bir dosyada bakımını sağlamak büyük bir zevk olmaz.

🔗 [**Daha fazla oku: 'uygulama' ve 'server' birbirinden ayrı Express uygulaması**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Konfigürasyon dosyalarını değişen ortamlara uyumlu, güvenli ve hiyerarşik yapın

**TL;DR:** Mükemmel ve kusursuz bir konfigürasyon kurulmalıdır (a) anahtarlar (keys) dosyadan ve ortam değişkenlerinden okunabilir (b) gizli bilgileri commit kodun dışında tut (c) konfig kolay bulunabilmesi için hiyerarşiktir. [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) and [config](https://www.npmjs.com/package/config) gibi paketler yardım edebilir.

**Aksi takdirde:** Config gereksinimlerinden herhangi birinin yerine getirilmemesi geliştirmeyi veya devops takımını basitçe çıkmaza sokacaktır. Muhtemelen ikisi de.

🔗 [**Daha fazla oku: konfigürasyon en iyi uygulamaları**](/sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `2. Hata İşleme Uygulamaları`

## ![✔] 2.1 Asenkron hata işlemek için Async-Await veya Promises kullanın

**TL;DR:** Geri çağırma (callback) stilinde asenkron hata işleme muhtemelen cehenneme giden en hızlı yoldur (ayrıca şöyle bilinir pyramid of doom). Kodunuza verebileceğiniz en iyi hediye, try-catch gibi daha kompakt ve tanıdık bir kod sözdizimi yerine saygın bir promise veya async-await kütüphanesi kullanılmasıdır.

**Aksi takdirde:** Node.js geri çağırma (callback) stili, function(err, response), rastgele kod, fazla iç içe yerleştirme ve garip kodlama kalıplarını hata işlemeyle karıştırmaktan dolayı sürdürülemez kod olur.

🔗 [**Daha fazla oku: geri çağırmalardan kaçın**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Sadece dahili Error nesnesini kullanın

**TL;DR:** Bir string veya özel bir tür gibi çok hata fırlatmak - bu, hata işleme mantığını ve modüller arasındaki birlikte çalışabilirliği karmaşıklaştırır. Eğer bir promise reddetmek, bir istisna fırlatmak veya bir hata yayınlamak (emit) - yalnızca dahili Error nesnesini kullanmak tekdüzeliği artıracak ve bilgi kaybını önleyecektir.

**Aksi takdirde:** When invoking some component, being uncertain which type of errors come in return – it makes proper error handling much harder. Even worse, using custom types to describe errors might lead to loss of critical error information like the stack trace!

🔗 [**Daha fazla oku: Dahili Error nesnesini kullanma**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 İşletimsel hatalar ile yazılımcı hatalarını ayrıştırın

**TL;DR:** Operasyonel hatalar (örneğin API'nin geçersiz bir input alması) hata etkisinin tam olarak anlaşıldığı ve dikkatlice işlenebildiği hataları ifade eder. Diğer yandan, programcı hatası (örneğin tanımsız (undefined) değişkeni okumaya çalışması) uygulamayı nazikçe yeniden başlatmak için zorlayan bilinmeyen kod hatasını ifade eder.

**Aksi takdirde:** Bir hata olduğunda uygulamayı her zaman yeniden başlatabilirsin, fakat neden basit, tahmin edilebilen, operasyonel hata yüzünden ~5000 çevrimiçi kullanıcının düşmesine izin veriyorsun? Tam tersi de ideal değildir - bilinmeyen bir sorun (programcı hatası) meydana geldiğinde uygulama devam ettirmek tahmin edilemeyen bir davranışa yol açabilir. İkisini ayırt etmek nazikçe davranmayı ve duruma göre dengeli bir yaklaşım uygulamayı sağlar.

🔗 [**Daha fazla oku: operasyonel vs programcı hatası**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Merkezi hata işleyicisi kullanın, Express middleware içerisinde hataları işlemeyin

**TL;DR:** Yöneticiye mail atma ve loglama gibi hata işleme, bir hata aldığında bütün uç noktaların (örneğin Express ara katmanı, görev zamanlayıcı, birim testleri) çağırdığı özel ve merkezi bir nesnede saklanmalıdır.

**Aksi takdirde:** Hatalaron tek bir yerde işlenmemesi, kod tekrarına ve muhtemelen yanlış işlenmiş hatalara yol açacaktır

🔗 [**Daha fazla oku: merkezi bir yerde hata işleme**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Swagger veya GraphQL kullanarak API hatalarını dökümante edin 

**TL;DR:** API uygulamanıza istek atanların hangi hataları alabileceğini bilmelerini sağlayın böylece çökme (crashing) olmadan hataları dikkatlice işleyebilirler. RESTful API için, bu genellikle swagger gibi framework dökümantasyonu ile yapılır. Eğer GraphQl kullanıyorsanız, şemalarınızı ve yorumlarınızı da kullanabilirsiniz.

**Aksi takdirde:** API kullanıcısı anlamayadığı bir hatayı alırsa çökmeye veya yeniden başlatmaya karar verebilir. Note: bu kullanıcı siz olabilirsiniz (bir mikro servis ortamında çok normal)

🔗 [**Daha fazla oku: Swagger veya GraphQL’de API hatalarını dökümante etmek**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Bir yabancı şehre geldiğinde işlemden nazikçe çıkın

**TL;DR:** Bilinmeyen bir hata oluştuğunda (bir geliştirici hatası, en iyi uygulamalar 2.3 bak) - uygulamanın sağlığına ilişkin belirsizlik var. Bir işlem yönetim aracı [Forever](https://www.npmjs.com/package/forever) or [PM2](http://pm2.keymetrics.io/) gibi kullanarak dikkatlice işlemi yeniden başlatmak yaygın bir uygulamadır.

**Aksi takdirde:** Bilmediğiniz bir istisna oluştuğunda, bazı nesneler hatalı durumda olabilir (örneğin global olarak kullanılan ve bazı iç arızalar nedeniyle artık olayları tetiklemeyen bir olay (event) tetikleyicisi) ve gelecekteki tüm istekler başarısız olabilir veya çılgınca davranabilir

🔗 [**Daha fazla oku: işlemin sonlandırılması**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Hata görünürlüğünü artırmak için olgun bir log tutucu kullanın

**TL;DR:** [Winston](https://www.npmjs.com/package/winston), [Bunyan](https://github.com/trentm/node-bunyan) veya [Log4js](http://stritti.github.io/log4js/) gibi olgun bir log tutma aracı hata bulma ve anlama sürecini hızlandıracak.

**Aksi takdirde:** Console.log'lar arasında gezinme veya karışık metin dosyaları arasında sorgulama araçları olmadan manuel gezinme veya iyi bir log görüntüleyici olmadan sorgulama yapmak geç saate kadar iş ile meşgul olmanıza neden olur.

🔗 [**Daha fazla oku: olgun bir log tutucu kullan**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Favori test çerçevenizi (framework) kullanarak test için hatalı akışlar yapın

**TL;DR:** Profesyonel otomatik kalite güvencesi veya manuel geliştirici testi - Kodunuzun sadece pozitif senaryoları karşılamadığından aynı zamanda doğru hataları işlediğinden ve doğru hataları döndürdüğünden emin olun. Mocha & Chai gibi test çerçeveleri (framework) bu işlemleri kolayca işleyebilir.

**Aksi takdirde:** Otomatik veya manuel test yapmadan, kodunuzun doğru hataları döndürdüğüne güvenemezsiniz. Anlamlı hatalar olmadan - hata işlemesi olmaz.

🔗 [**Daha fazla oku: test için hatalı akışlar**](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Hataları ve APM ürünlerini kullanarak kesintileri keşfedin

**TL;DR:** İzleme ve performans ürünleri (diğer ismi APM)  kod tabanınızı veya API uygulamanızı proaktif olarak ölçer böylece bu araçlar otomatik olarak hataları, çökmeleri ve kaçırdığınız parçaları vurgulayabilir.

**Aksi takdirde:** API permformansı ve çökme süreleri için çok efor harcayabilirsiniz, muhtemelen gerçek dünya senaryosunda en yavaş kodlu parçaların hangileri olduğunu ve bunların UX'i nasıl etkilediğini asla bilemezsiniz.

🔗 [**Daha fazla oku: APM ürünlerini kullanın**](/sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 İşlenmeyen promise retlerini yakalayın

**TL;DR:** Promise içerisinde fırlatılan herhangi bir istisna, bir geliştirici açıkça işlemeyi unutmadığı sürece, yutulur ve atılır.
Any exception thrown within a promise will get swallowed and discarded unless a developer didn’t forget to explicitly handle. Kodunuz `process.uncaughtException` 'a subscribed olsa bile! Bu olayı kaydederek bunun üstesinden gel `process.unhandledRejection`

**Aksi takdirde:** Hatalarınız yutulur ve iz bırakmaz. Endişelenecek birşey yok

🔗 [**Daha fazla oku: işlenmeyen promise retlerini yakalayın**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Fail fast, Özel bir kütüphane kullanarak argümanları doğrula

**TL;DR:** Bu Ekspress en iyi uygulamaların bir parçası olmalıdır - Daha sonra izlemesi daha zor olan kötü hatalardan kaçınmak için API girişini belirtin. Doğrulama genellikle Joi gibi çok havalı bir yardımcı kütüphane kullanmadığınız sürece sıkıcı olur.

**Aksi takdirde:** Bunu düşün - fonksiyonunuz, çağıranın geçmeyi unuttuğu bir nümerik argüman “Discount” bekliyor, daha sonra, kodunuz if Discount!=0 kontrol ediyor (izin verilen indirim tutarı sıfırdan büyük), o zaman kullanıcının bir indirimden yararlanmasına izin verecektir. Aman Allah'ım, ne çirkin bir bug. Gördün mü?

🔗 [**Daha fazla oku: failing fast**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `3. Kod Stil En İyi Uygulamaları`

## ![✔] 3.1 ESLint Kullan

**TL;DR:** [ESLint](https://eslint.org), olası kod hatalarını kontrol eden ve kod stilini düzelten fiili standarttır, sadece boşluk sorunları belirlemek değil aynı zamanda geliştiricilerin sınıflandırma olmadan fırlatılan hataları gibi ciddi anti desenleri (anti-patterns) ortaya çıkartır. Eslint otomatik olarak kod stillerini düzeltse de, [prettier](https://www.npmjs.com/package/prettier) and [beautify](https://www.npmjs.com/package/js-beautify) gibi diğer araçlar da formatlamak için çok güçlüdür ve ESLint ile birlikte çalışır

**Aksi takdirde:** Geliştiriciler sıkıcı boşluk sorunlarına odaklanacak ve satır genişliği ve kod stilini düşünerek boşa zaman kaybetmiş olacaksınız

🔗 [**Daha fazla oku: ESLint ve Prettier kullanın**](/sections/codestylepractices/eslint_prettier.md)

<br/><br/>

## ![✔] 3.2 Node.js özel eklentiler

**TL;DR:** Geleneksel Javascripti kapsayan ESLint standart kurallarının üstüne, [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security) gibi Node.js özel eklentilerini ekleyin

**Aksi takdirde:** Çok kötü Node.js kod tasarımı radarın altına kaçabilir. Örneğin,saldırganların herhangi bir JS komutunu çalıştırmasına izin veren, yol (path) olarak verilen bir değişken ile (variableAsPath) dosyalar isteyebilir. 

<br/><br/>

## ![✔] 3.3 Kod bloğu ile küme parantezi aynı satırda başlatın

**TL;DR:** Bir kod bloğunun açık küme (süslü) parantezi, açılış ifadesiyle aynı satırda olmalıdır

### Kod örneği

```javascript
// Do
function someFunction() {
  // code block
}

// Avoid
function someFunction()
{
  // code block

}
```

**Aksi takdirde:** Bu en iyi uygulamayı yapmamak beklenmeyen sonuçlara yol açabilir, aşağıdaki StackOverflow başlığında görüldüğü gibi:

🔗 [**Daha fazla oku:** "Neden küme parantezinin yerleşimine göre sonuçlar değişiyor?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Noktalı virgülü unutma

**TL;DR:** Oy birliği ile kabul edilmiş olmasa da, her ifadenin sonuna noktalı virgül koymanız tavsiye edilir. Bu kodunuzu daha çok okunabilir yapar ve diğer geliştiricilerin okumaları için daha açık hale getirir.

**Aksi takdirde:** As seen in the previous section, JavaScript's interpreter automatically adds a semicolon at the end of a statement if there isn't one, or considers a statement as not ended where it should, which might lead to some undesired results

### Kod örneği

```javascript
// Do
const count = 2;
(function doSomething() {
  // do something amazing
}());

// Avoid — throws exception
const count = 2 // it tries to run 2(), but 2 is not a function
(function doSomething() {
  // do something amazing
}())
```

<br/><br/>

## ![✔] 3.5 Fonksiyonlarını isimlendir

**TL;DR:** Geridönüş (callbacks) ve kapanış (closures) dahil bütün fonksiyonları isimlendirin. İsimsiz fonksiyonlardan kaçının. Bu özellikle bir node uygulamasının profilini çıkarırken kullanışlıdır. Bütün fonksiyonların isimlendirilmesi bir bellek görüntüsünü (memory snapshot) kontrol ederken ne arıyorsanuz kolayca anlamanıza izin verir

**Aksi takdirde:** İsimsiz fonksiyonlardan önemli miktarda bellek tüketimi fark ettiğinizde bir çekirdek dökümü (memory snapshot) kullanarak canlı ortamda (production) hata ayıklamak (debugging) zorlaşabilir

<br/><br/>

## ![✔] 3.6 Değişkenler, sabitler, fonksiyonlar ve sınıflar için isimlendirme kurallarını kullanın

**TL;DR:** Sabitleri, değişkenleri ve fonksiyonları isimlendirdiğinizde **_lowerCamelCase_** kullanın ve sınıf isimlendirmelerinde **_UpperCamelCase_** (ilk harf de büyük) kullanın. Bu değişkenleri/fonksiyonları ve sınıfları kolayca ayırt etmenizi yardımcı olur. Açıklayıcı isimler kullanın fakat kısa tutmaya çalışın

**Aksi takdirde:** Javascript, sınıfı oluşturmadan yapıcıyı direkt çağırmaya izin veren dünyadaki tek dildir. Sonuç olarak sınıflar ve fonksiyonlar UpperCamelCase ile başlatılarak farklılaştırılır

### Kod örneği

```javascript
// for class name we use UpperCamelCase
class SomeClassExample {}

// for const names we use the const keyword and lowerCamelCase
const config = {
  key: 'value'
};

// for variables and functions names we use lowerCamelCase
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Const ve let tercih edin. Var kullanmayın

**TL;DR:** `const` kullanmak, bir değişken atandığında tekrar atanamayacağı anlamına gelir. `const` tercih etmek, farklı kullanımlar için aynı değişkeni kulanmamanıza ve kodunuzu daha temiz yapmanıza yardım edecektir. Eğer yeniden atanabilir bir değişken ihtiyacı varsa, örneğin bir for döngüsü içerisinde, `let` kullanın. `let` 'in diğer bir önemli yönü, `let` kullanarak tanımlanan bir değişkenin yalnızca tanımlandığı blok kapsamında mevcut olmasıdır. `var` blok kapsamında değil fonksiyon kapsamındadır ve [ES6 ile kullanılmamalıdır](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) , `const` ve `let` kullanmalısınız.

**Aksi takdirde:** Hata ayıklama, sıklıkla 
değişen bir değişkeni takip ederken daha hantal hale gelir

🔗 [**Daha fazla oku: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Önce modül gereksinimleri, fonksiyonlar değil

**TL;DR:** Her dosyanın başında, herhangi bir fonksiyonun öncesinde ve dışında modül gereksinimleri. Bu basit en iyi uygulama, bir dosyanın bağımlılıklarını en baştan kolayca ve hızlı bir şekilde haber vermekle kalmaz, aynı zamanda birkaç olası sorunu da önler

**Aksi takdirde:** Gereksinimler Node.js tarafından senkron çalışır. Fonksiyon içinde çağrılırlarsa, diğer isteklerin daha kritik bir zamanda işlenmesini engelleyebilir. Ayrıca eğer bir modül gereksinimi veya herhangi bir kendi bağımlılığınız bir hata fırlatırsa ve sunucu çökerse, en kısa sürede onu bulmak en iyisidir, eğer modül bir fonksiyon içerisinden istendiyse durum böyle olmayabilir.

<br/><br/>

## ![✔] 3.9 Modüller, direkt dosyaların yerine klasörlerden olmalı

**TL;DR:** Bir klasörde bir modül/kütüphane geliştirirken, modülün içindekileri gösteren, her tüketicinin geçeceği bir index.js dosyası yerleştirin. Bu modülünüze bir 'interface' işlevi görür ve anlaşmayı bozmadan gelecekteki değişiklikleri kolaylaştırır.

**Aksi takdirde:** Dosyaların iç yapısını değiştirmek veya ismini değiştirmek kullanıcıyla olan arayüzü bozabilir.

### Kod örneği

```javascript
// Do
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// Avoid
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 Bu operatörü kullanın `===`

**TL;DR:** Katı eşitlik operatörünü `===`, zayıf eşitlik operatörüne `==` tercih edin. `==` operatörü, iki değişkeni ortak bir türe dönüştürdükten sonra karşılaştırır. `===` operatöründe tür dönüşümü yoktur ve iki değişken de eşit olması için aynı tipte olmalıdır

**Aksi takdirde:** Eşit olmayan değişkenler `==` operatör ile karşılaştırılırken true dönebilir

### Kod örneği

```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```

Yukarıdaki bütün ifadeler, eğer `===` operatörü kullanılsaydı false dönecekti

<br/><br/>

## ![✔] 3.11 Async Await kullan, callbacks kullanmaktan kaçın

**TL;DR:** Node 8 LTS, Async-await için tam desteğe sahip. Bu, callbacks ve promises yerine geçen asenkron kodlara yaklaşımın yeni bir yoludur. Async-await engellemez ve asenkron kodu senkron görünümlü yapar. Konudunuza verebileceğiniz en iyi hediye, try-catch gibi çok daha kompakt ve tanıdık bir kod sözdizimi sağlayan async-await kullanmaktır

**Aksi takdirde:** Asenkron hataları işleme callback stilinde muhtemelen cehenneme giden  en hızlı yoldur - Bu stil her yerde hataları kontrol etmeye zorlar, garip kod yerleştirme ile uğraşır ve kod akışı hakkında düşünmeyi zorlaştırıyor

🔗[**Daha fazla oku:** async await 1.0 klavuzu](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Ok fonksiyon ifadelerini kullan (=>)

**TL;DR:** Async-await kullanımı önerilmesine rağmen, promises veya callbacks kabul eden eski API'ler ile ilgilenirken fonksiyon parametrelerinden kaçının - ok işareti fonksiyonları, kod yapısını daha kompakt hale gertirir ve root fonksiyonun sözcük bağlamını korur (yani `this`)

**Aksi takdirde:** Daha uzun kod (ES5 fonksiyonları) hatalara ve okunma hantallığına daha yatkındır.

🔗 [**Daha fazla oku: Ok fonksiyon ifadelerine sarılma zamanı**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `4. Test Ve Bütün Kalite Uygulamalari`

## ![✔] 4.1 En azından, API (bileşen) testi yaz

**TL;DR:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' ran out of control and was abandoned. For that reason, prioritize and start with API testing which is the easiest way to write and provides more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterward, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**Aksi takdirde:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Her test 3 parça içersin

**TL;DR:** Make the test speak at the requirements level so it's self explanatory also to QA engineers and developers who are not familiar with the code internals. State in the test name what is being tested (unit under test), under what circumstances and what is the expected result

**Aksi takdirde:** A deployment just failed, a test named “Add product” failed. Does this tell you what exactly is malfunctioning?

🔗 [**Daha fazla oku: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Bir linter ile kod sorunlarını tespit et

**TL;DR:** Use a code linter to check basic quality and detect anti-patterns early. Run it before any test and add it as a pre-commit git-hook to minimize the time needed to review and correct any issue. Also check [Section 3](https://github.com/i0natan/nodebestpractices#3-code-style-practices) on Code Style Practices

**Aksi takdirde:** You may let pass some anti-pattern and possible vulnerable code to your production environment.

<br/><br/>

## ![✔] 4.4 CI platformunu dikkatli seç (Jenkins vs CircleCI vs Travis vs Diğerleri)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it has become much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**Aksi takdirde:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**Daha fazla oku: Choosing CI platform**](/sections/testingandquality/citools.md)

<br/><br/>

## ![✔] 4.5 Güvencesiz bağımlılıkları sürekli incele

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [npm audit](https://docs.npmjs.com/cli/audit) and 🔗 [snyk.io](https://snyk.io) that can be invoked from your CI on every build

**Aksi takdirde:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.6 Testlerini etiketle

**TL;DR:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**Aksi takdirde:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.7 Kodun ne kadarının test edilmiş olduğunu kontrol et, bu yanlış test tasarımlarını tespit etmene yardım eder

**TL;DR:** Code coverage tools like [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**Aksi takdirde:** There won't be any automated metric telling you when a large portion of your code is not covered by testing

<br/><br/>

## ![✔] 4.8 Güncel olmayan paketleri kontrol et

**TL;DR:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**Aksi takdirde:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 4.9 Uçtan uca (e2e) testi için docker-compose kullan

**TL;DR:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Docker-compose turns this problem into a breeze by crafting production-like environment using a simple text file and easy commands. It allows crafting all the dependent services, DB and isolated network for e2e testing. Last but not least, it can keep a stateless environment that is invoked before each test suite and dies right after

**Aksi takdirde:** Without docker-compose teams must maintain a testing DB for each testing environment including developers' machines, keep all those DBs in sync so test results won't vary across environments

<br/><br/>

## ![✔] 4.10 Statik analiz araçları ile düzenli olarak refactor yap

**TL;DR:** Using static analysis tools helps by giving objective ways to improve code quality and keeps your code maintainable. You can add static analysis tools to your CI build to fail when it finds code smells. Its main selling points over plain linting are the ability to inspect quality in the context of multiple files (e.g. detect duplications), perform advanced analysis (e.g. code complexity) and follow the history and progress of code issues. Two examples of tools you can use are [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) and [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**Aksi takdirde:** With poor code quality, bugs and performance will always be an issue that no shiny new library or state of the art features can fix

🔗 [**Daha fazla oku: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `5. Canlı Ortam (Production) Uygulamaları`

## ![✔] 5.1. Görüntüleme!

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**Aksi takdirde:** Failure === disappointed customers. Simple

🔗 [**Daha fazla oku: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Akıllı loglama kullanarak şeffaflığı arttır

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Aksi takdirde:** You end up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Daha fazla oku: Increase transparency using smart logging**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Mümkün olan herşeyi reverse proxy e devret

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**Aksi takdirde:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**Daha fazla oku: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Bağımlılıkları sabitle

**TL;DR:** Your code must be identical across all environments, but amazingly npm lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using npm config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grained control use `npm shrinkwrap`. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Aksi takdirde:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code

🔗 [**Daha fazla oku: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Doğru araçlar kullanarak işlem sürelerini koruyun

**TL;DR:** The process must go on and get restarted upon failures. For simple scenarios, process management tools like PM2 might be enough but in today's ‘dockerized’ world, cluster management tools should be considered as well

**Aksi takdirde:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to DevOps chaos

🔗 [**Daha fazla oku: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Tüm CPU çekirdelerini kullan

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all others are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Aksi takdirde:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**Daha fazla oku: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Bir ‘maintenance endpoint’ oluştur

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Aksi takdirde:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**Daha fazla oku: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. APM ürünlerini kullanarak hataları ve kesintileri bulun

**TL;DR:** Application monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Aksi takdirde:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Daha fazla oku: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Kodunu canlı ortama göre geliştir

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Aksi takdirde:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**Daha fazla oku: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Bellek kullanımını ölçün ve koruyun

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leak memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large apps consider baking your memory watch into a robust monitoring system

**Aksi takdirde:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Daha fazla oku: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Ön yüzdeki assets dosyalarını Node kullanmadan getir

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single-threaded model

**Aksi takdirde:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**Daha fazla oku: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Yurtsuz olun, Neredeyse her gün sunucularınızı öldürün

**TL;DR:** Store any type of data (e.g. user sessions, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Aksi takdirde:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**Daha fazla oku: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Güvenlik açıklarını otomatik olarak algılayan araçları kullanın

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can be easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Aksi takdirde:** Keeping your code clean from vulnerabilities without dedicated tools will require you to constantly follow online publications about new threats. Quite tedious

🔗 [**Daha fazla oku: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Her log ifadesine bir işlem id'si atayın

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**Aksi takdirde:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**Daha fazla oku: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many npm packages determine the current environment and optimize their code for production

**Aksi takdirde:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes it slower by a factor of three!

🔗 [**Daha fazla oku: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Otomatik, atomik ve sıfır kesinti dağıtımları (deploy) tasarlayın

**TL;DR:** Research shows that teams who perform many deployments lower the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improve the deployment process. You should probably achieve this using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Aksi takdirde:** Long deployments -> production downtime & human-related error -> team unconfident in making deployment -> fewer deployments and features

<br/><br/>

## ![✔] 5.17. Node.js'in son kararlı sürümünü kullanın

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**Aksi takdirde:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**Daha fazla oku: Use an LTS release of Node.js**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Uygulama içerisinde logları yönlendirmeyin

**TL;DR:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**Aksi takdirde:** Application handling log routing === hard to scale, loss of logs, poor separation of concerns

🔗 [**Daha fazla oku: Log Routing**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `6. Güvenlik İçin En İyi Uygulamar`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="53 items"/>
</div>

## ![✔] 6.1. Güvenlik kurallarına sarılın

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**Aksi takdirde:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Daha fazla oku: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Bir ara katman kullanarak eş zamanlı istekleri limitleyin

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Aksi takdirde:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Daha fazla oku: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Yapılandırma dosyalarından gizli keyleri çıkarın veya şifrelemek için paketler kullanın

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**Aksi takdirde:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Daha fazla oku: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. ORM/ODM kütüphanelerindeki sorgu açıklarını önleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**Aksi takdirde:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Daha fazla oku: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Genel güvenlik uygulamaları

**TL;DR:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Daha fazla oku: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Gelişmiş güvenlik için HTTP cevap başlığını (response header) düzenle

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**Aksi takdirde:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Daha fazla oku: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Savunmasız bağımlılıkları sürekli ve otomatik olarak denetleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**Aksi takdirde:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Daha fazla oku: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Şifreleri işlemek için Node.js şifreleme kütüphanesini kullanmaktan kaçın, Bcrypt kullanın

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**Aksi takdirde:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Daha fazla oku: Use Bcrypt**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. HTML, JS ve CSS çıktılardan kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**Aksi takdirde:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Daha fazla oku: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Gelen JSON şemalarını doğrulayın

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**Aksi takdirde:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Daha fazla oku: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. JWT nin kara listesini destekleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**Aksi takdirde:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Daha fazla oku: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Her kullanıcının login isteğini limitleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A brute force protection middleware such as [express-brute](https://www.npmjs.com/package/express-brute) should be used inside an express application to prevent brute force/dictionary attacks on sensitive routes such as /admin or /login based on request properties such as the username, or other identifiers such as body parameters

**Aksi takdirde:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Daha fazla oku: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Node.js'i kök (root) olmayan kullanıcı tarafından çalıştırın

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**Aksi takdirde:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Daha fazla oku: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Bir reverse-proxy veya bir ara katman kullanarak yükleme boyutunu limitlendirin

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**Aksi takdirde:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Daha fazla oku: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. JavaScript eval ifadelerinden kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**Aksi takdirde:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Daha fazla oku: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Kötü RegEx'in tek iş parçasını (single thread) aşırı yüklemesini önleyin

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**Aksi takdirde:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Daha fazla oku: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Değişken kullanarak modül yüklemekten kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**Aksi takdirde:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the filesystem, or access already existing system files.

🔗 [**Daha fazla oku: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Bir sandbox ta güvensiz kod çalıştırın

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**Aksi takdirde:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Daha fazla oku: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Çocuk işlemlerle (child pocesses) çalıştığında ekstra dikkat et

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**Aksi takdirde:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Daha fazla oku: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. İstemciden hata detaylarını saklayın

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**Aksi takdirde:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Daha fazla oku: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. İki faktörlü kimlik doğrulamayı yapılandırın

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**Aksi takdirde:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Oturum ara katman (middleware) ayarlarını değiştirin

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**Aksi takdirde:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Daha fazla oku: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Bir işlem olağandışı sonlandığında ayarlarla DOS ataklarından kaçın

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**Aksi takdirde:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Güvensiz yönlendirmeleri önleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**Aksi takdirde:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Daha fazla oku: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `7. Performans En İyi Uygulamaları`

## Our contributors are working on this section. [Would you like to join?](https://github.com/i0natan/nodebestpractices/issues/256)

## ![✔] 7.1. Doğal JS metotlarını, Lodash gibi araçların yerine tercih edin

 **TL;DR:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
 Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**Aksi takdirde:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Daha fazla oku: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>

# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/i0natan/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](/README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![RU](/assets/flags/RU.png) [Russian](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/i0natan)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in USA, Europe, and Israel on building large scale scalable Node applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web developer and Node.js enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, MongoDB, pretty much anything that involves using JavaScript/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation, collaborating on the Community Committee's Website Redesign Initiative.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a reguar basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :--: | :--: |
| [Ido Richter (Founder)](https://github.com/idori) | [Keith Holliday](https://github.com/TheHollidayInn) |

### Past collaborators

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :--: |
| [Refael Ackermann](https://github.com/refack) |

<br/>

## Thank You Notes

We appreciate any contribution, from a single word fix to a new best practice. Below is a list of everyone who contributed to this project. A 🌻 marks a successful pull request and a ⭐ marks an approved new best practice.

### Flowers

🌻 [Kevin Rambaud](https://github.com/kevinrambaud),
🌻 [Michael Fine](https://github.com/mfine15),
🌻 [Shreya Dahal](https://github.com/squgeim),
🌻 [ChangJoo Park](https://github.com/ChangJoo-Park),
🌻 [Matheus Cruz Rocha](https://github.com/matheusrocha89),
🌻 [Yog Mehta](https://github.com/BitYog),
🌻 [Kudakwashe Paradzayi](https://github.com/kudapara),
🌻 [t1st3](https://github.com/t1st3),
🌻 [mulijordan1976](https://github.com/mulijordan1976),
🌻 [Matan Kushner](https://github.com/matchai),
🌻 [Fabio Hiroki](https://github.com/fabiothiroki),
🌻 [James Sumners](https://github.com/jsumners),
🌻 [Chandan Rai](https://github.com/crowchirp),
🌻 [Dan Gamble](https://github.com/dan-gamble),
🌻 [PJ Trainor](https://github.com/trainorpj),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Yoni Jah](https://github.com/yonjah),
🌻 [Misha Khokhlov](https://github.com/hazolsky),
🌻 [Evgeny Orekhov](https://github.com/EvgenyOrekhov),
🌻 [Gediminas Petrikas](https://github.com/gediminasml),
🌻 [Isaac Halvorson](https://github.com/hisaac),
🌻 [Vedran Karačić](https://github.com/vkaracic),
🌻 [lallenlowe](https://github.com/lallenlowe),
🌻 [Nathan Wells](https://github.com/nwwells),
🌻 [Paulo Vítor S Reis](https://github.com/paulovitin),
🌻 [syzer](https://github.com/syzer),
🌻 [David Sancho](https://github.com/davesnx),
🌻 [Robert Manolea](https://github.com/pupix),
🌻 [Xavier Ho](https://github.com/spaxe),
🌻 [Aaron Arney](https://github.com/ocularrhythm),
🌻 [Jan Charles Maghirang Adona](https://github.com/septa97),
🌻 [Allen Fang](https://github.com/AllenFang),
🌻 [Leonardo Villela](https://github.com/leonardovillela),
🌻 [Michal Zalecki](https://github.com/MichalZalecki)
🌻 [Chris Nicola](https://github.com/chrisnicola),
🌻 [Alejandro Corredor](https://github.com/aecorredor),
🌻 [Ye Min Htut](https://github.com/ymhtut),
🌻 [cwar](https://github.com/cwar),
🌻 [Yuwei](https://github.com/keyfoxth),
🌻 [Utkarsh Bhatt](https://github.com/utkarshbhatt12),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Sagir Khan](https://github.com/sagirk),
🌻 [Jason Kim](https://github.com/serv),
🌻 [Mitja O.](https://github.com/Max101),
🌻 [Sandro Miguel Marques](https://github.com/SandroMiguel),
🌻 [Gabe Kuslansky](https://github.com/GabeKuslansky),
🌻 [Ron Gross](https://github.com/ripper234),
🌻 [Valeri Karpov](https://github.com/vkarpov15)
🌻 [Sergio](https://github.com/imsergiobernal),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Nikola Telkedzhiev](https://github.com/ntelkedzhiev),
🌻 [Vitor Godoy](https://github.com/vitordagamagodoy),
🌻 [Manish Saraan](https://github.com/manishsaraan),
🌻 [Sangbeom Han](https://github.com/uronly14me),
🌻 [blackmatch](https://github.com/blackmatch),
🌻 [Joe Reeve](https://github.com/ISNIT0),
🌻 [Marcelo Melo](https://github.com/marcelosdm),
🌻 [Ryan Busby](https://github.com/BusbyActual),
🌻 [Iman Mohamadi](https://github.com/ImanMh),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Sergii Paryzhskyi](https://github.com/HeeL),
🌻 [Kapil Patel](https://github.com/kapilepatel),
🌻 [迷渡](https://github.com/justjavac),
🌻 [Hozefa](https://github.com/hozefaj),
🌻 [Ethan](https://github.com/el-ethan),
🌻 [Sam](https://github.com/milkdeliver),
🌻 [Arlind](https://github.com/ArlindXh),
🌻 [Teddy Toussaint](https://github.com/ttous),
🌻 [Lewis](https://github.com/LewisArdern)

### Stars

⭐ [Kyle Martin](https://github.com/js-kyle),
⭐ [Keith Holliday](https://github.com/TheHollidayInn),
⭐ [Corey Cleary](https://github.com/coreyc),
⭐ [Maximilian Berkmann](https://github.com/Berkmann18)

<br/><br/><br/>
