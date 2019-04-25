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

1.  [Proje Yapısı En İyi Uygulamaları (5)](#1-project-structure-practices)
2.  [Hata İşleme En İyi Uygulamaları (11) ](#2-error-handling-practices)
3.  [Kod Stil En İyi Uygulamaları (12) ](#3-code-style-practices)
4.  [Test Ve Tam Kalite En İyi Uygulamaları (10) ](#4-testing-and-overall-quality-practices)
5.  [Canlı Ortam (Production) En İyi Uygulamaları (18) ](#5-going-to-production-practices)
6.  [Güvenlik İçin En İyi Uygulamalar (25)](#6-security-best-practices)
7.  [Performans En İyi Uygulamaları (1) (Devam Etmekte ✍️)](#7-performance-best-practices)

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

# `2. Hata İşleme En İyi Uygulamaları`

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

## ![✔] 3.12 Ok fonksiyon ifadelerini kullanın (=>)

**TL;DR:** Async-await kullanımı önerilmesine rağmen, promises veya callbacks kabul eden eski API'ler ile ilgilenirken fonksiyon parametrelerinden kaçının - ok işareti fonksiyonları, kod yapısını daha kompakt hale gertirir ve root fonksiyonun sözcük bağlamını korur (yani `this`)

**Aksi takdirde:** Daha uzun kod (ES5 fonksiyonları) hatalara ve okunma hantallığına daha yatkındır.

🔗 [**Daha fazla oku: Ok fonksiyon ifadelerine sarılma zamanı**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `4. Test Ve Tam Kalite En İyi Uygulamaları`

## ![✔] 4.1 En azından, API (bileşen) testi yazın

**TL;DR:** Projelerin çoğu kısa zaman sebebiyle otomatik test edilmemiş veya çoğu zaman 'test projesi' kontrolden çıkmış ve terk edilmiştir. Bu nedenle, birim testinden daha fazla kapsam sağlayan ve yazmanın kolay bir yolu olan API testini önceliklendirin ve başlayın. [Postman](https://www.getpostman.com/) gibi araçlar kullanarak kod olmadan API testleri bile yapabilirsiniz. Daha sonra, daha fazla kaynağa ve zamana sahipseniz, birim testi, VT testi, performans testi vb gibi gelişmiş test ürünlerine devam edin.

**Aksi takdirde:** Birim testleri yazmak için uzun günler harcayabilirsin bu sayede sadece %20 sistem kapsamını kontrol edersiniz.

<br/><br/>

## ![✔] 4.2 Her test ismi 3 parça içersin

**TL;DR:** Testi gereksinimler düzeyinde konuşturun böylece kod içeriğine aşina olmayan kalite mühendisleri (qa) ve geliştiriciler için kendi kendini açıklar. Test isminde neyin test edildğini (test edilen birim), hangi koşullar altında ve beklenen sonucun ne olduğunu belirtin

**Aksi takdirde:** Bir dağıtım az önce başarısız oldu, başarısız olan testin ismi “Ürün Ekle”. Bu size tam olarak neyin yanlış gittiğini söylüyor mu?

🔗 [**Daha fazla oku: Her test ismi 3 parça içersin**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Bir linter ile kod sorunlarını tespit edin

**TL;DR:** Bir kod linter kullanarak temel kaliteyi kontrol et ve anti tasarım kalıplarını tespit et. Herhangi bir testten önce, herhangi bir sorunu gözden geçirmek ve düzeltmek için gereken süreyi en aza indirmek için pre-commit gibi git-hook ekleyin ve çalıştırın. Ayrıca kod stil uygulamalarını kontrol edebilirsin [Section 3](https://github.com/i0natan/nodebestpractices#3-code-style-practices) 

**Aksi takdirde:** Canlı ortamınıza bazı anti tasarım ve olası hassas kodları iletebilirsiniz.

<br/><br/>

## ![✔] 4.4 CI platformununu dikkatli secin (Jenkins vs CircleCI vs Travis vs Diğerleri)

**TL;DR:** SÜrekli entegrasyon platformunuz (CICD) tüm kalite araçlarına ev sahipliği yapacak (örneğin test, lint) bu yüzden canlı bir eklenti ekosistemi ile gelmelidir. [Jenkins](https://jenkins.io/) en büyük topluluğa sahip dik bir öğrenme eğrisi gerektiren karmaşık kurulumu olan güçlü bir platform olduğundan bir çok projede varsayılan olarak kullanıldı. Şimdilerde, [CircleCI](https://circleci.com) ve diğerleri gibi SaaS araçları kullanarak bir CI çözümü oluşturmak çok daha kolay hale geldi. Bu araçlar, tüm altyapıyı yönetme yükü olmadan esnek bir CI boru hattı (pipeline) oluşturulmasına izin veriyor. Sonuçta, bu sağlamlık ile hız arasında bir seçimdir - seçiminizi dikkatli yapın

**Aksi takdirde:** Satıcı seçiminiz bazı gelişmiş özelleştirme ihtiyaçlarınız için sizi engelleyebilir. Diğer yandan, Jenkins ile devam ederseniz, altyapısal kurulumlar değerli zamanınızı yakabilir.

🔗 [**Daha fazla oku: CI platformununu seçimi**](/sections/testingandquality/citools.md)

<br/><br/>

## ![✔] 4.5 Güvencesiz bağımlılıkları sürekli inceleyin

**TL;DR:** Ekspress gibi çok saygın bağımlılıkların bile bilinen açıkları vardır.
Bu, her yapı için CI'nizden çağrılabilecek 🔗 [npm audit](https://docs.npmjs.com/cli/audit) ve 🔗 [snyk.io](https://snyk.io) gibi topluluk ve ticari araçlar kullanılarak kolayca evcilleştirilebilir.

**Aksi takdirde:** Kodunuzu özel araçlar olmadan güvenlik açıklarından temiz tutmak için sürekli çevrimiçi yayınları takip etmeniz gerekecek. Oldukça sıkıcı

<br/><br/>

## ![✔] 4.6 Testlerini etiketle

**TL;DR:** Farklı senaryolarda farklı testler çalışmalı: quick smoke, IO-less, geliştirci bir dosyayı kaydettiğinde veya commit lediğinde testler çalışmalıdır, yeni bir pull request gönderildiğinde uçtan uca testler yapılmalıdır, vb. Bu testleri #cold #api #sanity gibi anahtar kelimelerle etiketleyerek sağlanabilir böylece test takımınızda arayabilirsiniz ve istenen alt grubu çağırabilirsiniz. Örneğin, [Mocha](https://mochajs.org/) ile tutarlılık test grubunu (sanity) çağırabilirsiniz: mocha --grep 'sanity'

**Aksi takdirde:** Bütün testleri çalıştırmak, onlarca VT sorgusu gerçekleştiren testler de dahil olmak üzere, bir geliştiricinin herhangi bir zamanda yaptığı küçük bir değişikliği çok yavaşlatabilir ve geliştiricileri testleri çalıştırmaktan uzak tutar

<br/><br/>

## ![✔] 4.7 Test kapsamınızı kontrol edin, bu yanlış test tasarımlarınızı tespit etmenize yardım eder

**TL;DR:** [Istanbul/NYC ](https://github.com/gotwarlost/istanbul) gibi test kapsam aracı 3 sebepten dolayı çok iyidir: ücretsizdir (raporlardan faydalanmak için efora gerek yok), test kapsamındaki bir düşüşün belirlenmesine yardım eder ve test uyumsuzluklarını vurgular: renkli kod kapsamı raporlarına bakarak fark edebilirsiniz, örneğin, catch blokları gibi hiç test edilmeyen kod alanları (yani test sadece olumlu durumlar için çalışır ve uygulamanın bir hata durumunda nasıl davranacağını bilmez). Eğer kapsam belirli bir eşik değerin altına düşerse yapıyı başarız olarak ayarlayın.

**Aksi takdirde:** Kodunuzun büyük bir bölümünün test kapsamına girmediğini size bildiren otomatik bir metrik olmayacak

<br/><br/>

## ![✔] 4.8 Güncel olmayan paketleri denetleyin

**TL;DR:** Eski olan kurulu paketleri tespit etmek için tercih ettiğiniz aracı kullanın (örneğin, 'npm outdated' veya [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)), bu kontrolü CI pipeline'nıza enjekte edin ve hatta ciddi bir senaryoda derleme işlemini başarısız hale getirin. Örneğin, kurulu bir paket 5 patch commit arkadaysa ciddi bir senaryo olabilir veya kendi yazarı tarafından kullanımdan kaldırıldı olarak etiketlenebilir - bu durumlarda derlemeyi sonlandır ve bu sürümü dağıtmayı engelle

**Aksi takdirde:** Ürününüz yazarı tarafından açıkça riskli olarak etiketlenen paketleri kullanacak

<br/><br/>

## ![✔] 4.9 Uçtan uca (e2e) testi için docker-compose kullanın

**TL;DR:** Canlı verileri kullanan uçtan uça (e2e) testi, VT gibi ağır hizmetlere bağlı olduğundan CI işleminin zayıf parçasıdır. Docker-compose bu sorunu üretim işçiliği ile bir esinti haline getiriyor - ortam bazlı basit bir metin dosyası kullanıyor ve kolay komutlar kullanıyor. e2e testi için tüm bağımlı servislerin, VT ve izole edilmiş ağın işçiliğini sağlar.

**Aksi takdirde:** Docker-compose kullanmayan takımlar, geliştiricilerin makineleri de dahil olmak üzere her test ortamı için bir test VT'si sağlamalıdır, tüm bu VT'ler senkron tutun böylece test sonuçları ortamlara göre değişiklik göstermez

<br/><br/>

## ![✔] 4.10 Statik analiz araçları ile düzenli olarak refactor yap

**TL;DR:** Statik analiz araçları kullanmak, kod kalitesini geliştirmek için objektif yollar vererek yardımcı olur ve kod bakımınızı devamlı sağlar. Kodda koku bulduğunda derlemenin başarısız olması için, static analiz araçlarını CI derlemenize ekleyebilirsiniz. Plain linting de ana noktalar, kaliteyi birden fazla dosyaların bağlamında incelemek (örneğin tekrarları algıla), gelişmiş analizler yapmak (örneğin kod karmaşıklığı) ve kod sorunlarının tarihçesini ve ilerlemesini takip edebilmek. Kullanabileceğiniz iki araç örneği [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) ve [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**Aksi takdirde:** Düşük kod kalitesiyle, parlak yeni kütüphane veya son teknoloji özelliklerinin düzeltemeyeceği, hatalar ve performans sorunları sürekli olacaktır

🔗 [**Daha fazla oku: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `5. Canlı Ortam (Production) En İyi Uygulamaları`

## ![✔] 5.1. Görüntüleme!

**TL;DR:** İzleme müşterilerden önce sorunları bulma oyunudur - açıkçası buna eşi görülmemiş bir önem verilmelidir. Piyasa, tekliflerle doludur, bu nedenle takip etmeniz gereken temel ölçütleri (önerilerim dahilinde) tanımlamaya başlayıp ardından ek keyfi özelliklerin üzerinden gidin ve tüm kutuları işaretleyen çözümü seçin. Çözümlere genel bir bakış için 'The Gist' tıklayın

**Aksi takdirde:** Arıza === hayal kırıklığına uğrayan müşteriler. Basit

🔗 [**Daha fazla oku: İzleme!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Akıllı loglama kullanarak şeffaflığı arttır

**TL;DR:** Loglama, hata ayıklama ifadelerinin aptal bir deposu veya uygulamanızın hikayesini anlatan güzel bir kontrol paneli olabilir. Log platformunuzu birinci günden itibaren planlayın: istenilen bilgilerin sağlanması için logların nasıl toplanacağı, depolanacağı ve analiz edileceği (örneğin hata oranları, tüm işlemin servisler ve sunucular üzerinden takip edilmesi vb.) gerçekten çıkartılabilir

**Aksi takdirde:** Nedeni zor bir kara kutu ile karşılaşırsınız, daha sonra ek bilgi eklemek için tüm log ifadelerini yeniden yazmaya başlarsınız.

🔗 [**Daha fazla oku: akıllı loglama kullanarak şeffaflığı arttır**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Mümkün olan herşeyi (ör: gzip, SSL) reverse proxy e devret

**TL;DR:** Node, gzipping, SSL şifrelerini çözme gibi yoğun CPU görevlerinde çok kötüdür. nginx, HAproxy veya bulut satıcı hizmetleri gibi ‘gerçek’ ara katman bir hizmet kullanmalısınız

**Aksi takdirde:** Tek zayıf thread, uygulamanızla uğraşmak yerine altyapı işleri ile meşgul olacaktır ve bu nedenle performans düşecektir

🔗 [**Daha fazla oku: Mümkün olan herşeyi (ör: gzip, SSL) reverse proxy e devret**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Bağımılıkları salbitle

**TL;DR:** Kodunuz tüm ortamlarda aynı olmalıdır fakat şaşırtıcı bir şekilde varsayılan olarak npm bağımlılıkların ortamlar arasında kaymasına izin verir - paketleri farklı ortamlara yüklediğinizde, son versiyonları yüklemeye çalışır. Npm config dosyalarını kullanarak bunun üstesinden gelin, .npmrc, her ortama her paketin aynı versiyonunu (son değil) kaydetmesini söyleyin. Alternatif olarak, ince taneli kontrol için `npm shrinkwrap` kullanın. *Güncelleme: NPM5'den itibaren bağımlılıklar varsayılan olarak kilitleniyor. Yeni paket yöneticisi, yarn, yarn da bizi varsayılan olarak karşıladı.

**Aksi takdirde:** Kalite ekibi, kodu tamamen test edecek ve üretimde farklı davranacak bir sürümü onaylayacaktır. Daha da kötüsü, farklı sunucularda ürünün aynı sürümleri farklı kod çalıştırabilir

🔗 [**Daha fazla oku: Bağımılıkları salbitle**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Doğru araçlar kullanarak sürecin çalışma süresini koruyun

**TL;DR:** Süreç devam etmeli ve başarısızlıklar üzerine yeniden başlatılmalıdır. Basit senaryolar, PM2 gibi süreç yönetim araçları yeterli olabilir fakat günümüz 'dockerized' dünyası, küme yönetim araçları (cluster management tools) da dikkate alınmalıdır

**Aksi takdirde:** Net bir strateji olmadan onlarca örnek çalıştırmak ve birlikte çok fazla araç kullanmak (cluster management, docker, PM2) DevOps kaosuna neden olabilir

🔗 [**Daha fazla oku: Doğru araçlar kullanarak sürecin çalışma süresini koruyun**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Tüm CPU çekirdelerinden yararlanma

**TL;DR:** Temel haliye, bir Node uygulaması tek CPU ile çalışır, diğerleri boşta kalır. Node işlemlerini çoğaltmak ve tüm CPU'ları kullanmak sizin göreviniz - küçük-orta ölçekli uygulamalar için Node Cluster veya PM2 kullanabilirsiniz. Daha büyük bir uygulama için, bazı Docker kümesini kullanarak işlemleri çoklayabilirsin (örneğin K8S, ECS) veya linux sisteminde dağıtım komutları ile yapabilirsin (örneğin systemd)

**Aksi takdirde:** Uygulamanız muhtemelen mevcut kaynakların yalnızca %25'ini veya daha azını kullanacaktır. Tipik bir sunucunun 4 CPU çekirdeği ya da daha fazlasına sahip olduğunu, Node.js'in saf dağıtımı sadece 1 CPU kullandığını unutmayın (AWS beanstalk gibi PaaS servislerini kullanma!)

🔗 [**Daha fazla oku: Tüm CPU çekirdelerinden yararlanma**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Bir ‘maintenance endpoint’ oluşturun

**TL;DR:** Sistemle ilgili bir dizi bilgiyi gösterin, bellek kullanımı, REPL ve güvenli API gibi. Standart ve battle-tests araçlarına güvenmeniz şiddetle tavsiye edilmesine rağmen, bazı değerli bilgiler ve işlemler kod kullanılarak daha kolay yapılabilir

**Aksi takdirde:** Pek çok "diagnostic deploys" gerçekleştirdiğinizi göreceksiniz - yalnızca tanı amacıyla bazı bilgileri çıkartmak için canlı ortama gönderim kodu

🔗 [**Daha fazla oku: Bir ‘maintenance endpoint’ oluşturun**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. APM ürünlerini kullanarak hataları ve kesintileri bulun

**TL;DR:** Uygulama izleme ve performans ürünleri (diğer adıyla APM) proaktif olarak kod tabanını ve API uygulamasını ölçer böylece otomatik olarak geleneksel izlemenin ötesine geçebilir ve hizmetler ve katmanlar arasındaki kullanıcı deneyimini ölçebilir. Örneğin bazı APM ürünleri, son kullanıcılardaki çok yavaş yüklenen bir işlemin kök nedenini vurgulayabilir

**Aksi takdirde:** API performansını ve kesinti zamanlarını ölçmek için müthiç efor harcayabilirsin, muhtemelen gerçek senaryoda en yavaş kod parçasının hangisi olduğunu ve bunların UX'i nasıl etkilediğini asla bilemezsiniz

🔗 [**Daha fazla oku: APM ürünlerini kullanarak hataları ve kesintileri bulun**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Kodunuzu üretime hazır hale getirin

**TL;DR:** 1. günden itibaren üretim için plan yapın. Bu biraz belirsiz geliyor bu yüzden üretim bakımıyla yakından ilgili birkaç ipucu derledim (aşağıdaki Gist'e tıkla)

**Aksi takdirde:** Dünya IT/DevOps şampiyonu kötü yazılmış bir sistemi kurtaramaz

🔗 [**Daha fazla oku: Kodunuzu üretime hazır hale getirin**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Bellek kullanımını ölçün ve koruyun

**TL;DR:** Node.js bellek ile kontrollü ilişki içindedir: v8 motorunun bellek kullanımı konusunda yumuşak sınırları vardır (1.4GB) ve Node kodunda bellek sızıntısı için bilinen yollar vardır - bununla beraber Node'ın işlem belleğini izlemek bir zorunluluktur. Küçük uygulamalarda, belleği shell komutları kullanarak periyodik olarak ölçebilirsiniz fakat orta ve büyük uygulamalarda belleğinizi güçlü bir izleme sistemi ile izlemeyi düşünebilirsiniz

**Aksi takdirde:** İşlem belleğiniz bir günde yüz megabytes sızdırabilir, [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak) daki gibi

🔗 [**Daha fazla oku: Bellek kullanımını ölçün ve koruyun**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Ön yüzdeki assets dosyalarını Node kullanmadan getir

**TL;DR:** Özel arakatman (nginx, S3, CDN) kullanarak önyüz içeriğini sunun çünkü Node performansı tek thread üzerinde bir çok statik dosyalarla uğraşırken gercekten zarar görür 

**Aksi takdirde:** Tek thread Node, tüm kaynaklarını doğduğu göreve tahsis etmek yerine yüzlerce html/images/angular/react dosyalarının akışıyla meşgul olacak - dinamik içerik sunma

🔗 [**Daha fazla oku: Ön yüzdeki assets dosyalarını Node kullanmadan getir**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Sunucu bağımsız olun, Neredeyse her gün sunucularınızı öldürün

**TL;DR:** Her türden veriyi (örneğin kullanıcı oturumları, önbellek, yüklenen dosyalar (upload)) harici veri depolarında saklayın. Sunucularınızı periyodik olarak "killing" yok ettiğinizi düşünün veya "serverless" platformunu (örneğin AWS Lambda) kullanın bu sunucu bağımsızlığını açıkça uygular.

**Aksi takdirde:** Bir sunucudaki başarısızlık, sadece hatalı makineyi öldürmek yerine uygulamanızda kesintiye neden olur. Hatta, dağıtıklaştırma esnekliği sunucuya güvenme nedeniyle daha da zorlaşacaktır.

🔗 [**Daha fazla oku: Sunucu bağımsız olun, Neredeyse her gün sunucularınızı öldürün**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Güvenlik açıklarını otomatik olarak algılayan araçları kullanın

**TL;DR:** Express gibi çok saygın bağımlılıkların bile bilinen açıkları vardır (zaman zaman) bu sisteminize risk koyar. Bu, sürekli güvenlik açıklarını kontrol eden ve uyaran (yerel olarak veya GitHub'da) topluluk  ve ticari araçlar kullanılarak kolayca evcilleştirilebilir, bazıları hemen onları düzeltelebilir

**Aksi takdirde:** Kodunuzu özel araçlar olmadan güvenlik açıklarından temiz tutmak için sürekli çevrimiçi yayınları takip etmeniz gerekecek. Oldukça sıkıcı

🔗 [**Daha fazla oku: Güvenlik açıklarını otomatik olarak algılayan araçları kullanın**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Her log ifadesine bir işlem id'si atayın

**TL;DR:** Tek istek içerisindeki her log kaydına aynı işlem id'sini, transaction-id, atayın. Daha sonra log kayıtlarındaki hataları incelerken, önce ve sonra olanları kolayca sonuçlandırırsınız. Ne yazık ki, doğasında asenkron olması nedeniyle Node için yapılması kolay değildir, kod örneklerine bakın

**Aksi takdirde:** Bağlam olmadan üretim hata loguna bakmak - önce ne oldu - sorunla ilgili nedenleri zorlaştırır ve yavaşlatır

🔗 [**Daha fazla oku: Her log ifadesine bir ‘TransactionId’ atayın**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Ortam optimizasyonlarını aktif hale getirip NODE_ENV ortam değişkenini "production" veya "development" olarak ayarlayın. Birçok npm paketi mevcut ortamı belirler ve canlı ortam için kodlarını optimize eder

**Aksi takdirde:** Bu basit özelliği atlamak performansı büyük ölçüde düşürebilir. Örneğin, `NODE_ENV` atlanması Express server-side bir uygulamada üç kat daha yavaş olur

🔗 [**Daha fazla oku: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Otomatik, atomik ve sıfır kesinti dağıtımları (deploy) tasarlayın

**TL;DR:** Araştırmalar, birçok dağıtım yapan ekiplerin ciddi canlı ortam sorunlarının olasılığını azalttığını gösteriyor. Hızlı ve otomatikleştirilmiş dağıtımlar, riskli manuel adım ve hizmet kesintisi olmadan dağıtım işlemini önemli ölçüde iyileştirir. Modern dağıtım için endüstri standardı olarak, muhtemelen bunu CI araçlarıyla beraber Docker kullanarak yapabilirsiniz.

**Aksi takdirde:** Uzun dağıtımlar -> canlı ortamda kesinti & insan kaynaklı hata -> dağıtımın yapılmasından emin olmayan ekip -> daha az dağıtım ve özellik

<br/><br/>

## ![✔] 5.17. Node.js'in bir LTS sürümünü kullanın

**TL;DR:** Kritik hata düzeltmeleri, güvenlik güncellemeleri ve performans iyileştirmelerini almak için Node.js'in LTS sürümünü kullandığınızdan emin olun

**Aksi takdirde:** Canlı ortamda çalışan bir uygulamanızı kötüye kullanmak için yeni keşfedilen hatalar veya güvenlik açıkları kullanılabilir ve uygulamanız çeşitli modüller tarafından desteklenmiyor ve bakımı zorlaşıyor

🔗 [**Daha fazla oku: Node.js'in bir LTS sürümünü kullanın**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Uygulama içerisinde logları yönlendirmeyin

**TL;DR:** Logların yazılacağı hedef yerler, uygulama kodu dahilinde geliştiriciler tarafından kodlanmamalı, bunun yerine uygulamanın çalıştığı yürütme ortamı tarafından tanımlanmalıdır. Geliştiriciler bir logger yardımcı aracını kullanarak `stdout`'a loglar yazmalı ve ardından yürütme ortamının (container, server, vb.) `stdout` akışını uygun hedefe (Splunk, Graylog, ElasticSearch, vb.) yönlenirmesine izin vermelidir.

**Aksi takdirde:** Uygulamada log yönerdirilmesi === ölçeklendirmesi zor, log kayıpları, bağımlılıkların ayrılmaması

🔗 [**Daha fazla oku: Log Yönlendirme**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `6. Güvenlik İçin En İyi Uygulamalar`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="53 items"/>
</div>

## ![✔] 6.1. Linter güvenlik kurallarını benimseyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Güvenlik açıklarını ve sorunları mümkün olduğunca erken yakalamak için tercihen kodlama yaparken [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) gibi linter güvenlik eklentilerini kullanın. Bu, eval kullanma, bir çocuk sürecini başlatma veya string ile modülü içe aktarma (import) gibi güvenlik zayıflıklarının yakalanmasına yardımcı olabilir. Güvenlik linter'inin yakalayacağı kor örneklerini görmek işin aşağıdaki 'Daha fazla oku' linkine tıklayın.

**Aksi takdirde:** Geliştirme sırasında basit bir güvenlik açığı ne olabilirdi, canlı ortamda önemli bir sorun olan. Ayrıca, proje kod güvenliği uygulamalarını takip etmeyebilir, güvenlik açıklarının çıkmasına neden olabilir veya uzak depolara hassas gizlilikler commit edilebilir.

🔗 [**Daha fazla oku: Lint kuralları**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Bir ara katman yazılımı kullanarak eş zamanlı istekleri limitleyin

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS atakları çok popüler ve nispeten yapması kolay. Harici bir servis kullanarak istek sayısını sınırlandırın, mesela: bulut yük dengeleyici, bulut güvenlik duvarı, nginx veya (küçük veya az kritik uygulamalar için) bir istek sınırlayıcı ara katman yazılımı (ör: [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Aksi takdirde:** Bir uygulama, gerçek kullanıcıların kullandıkları bir serviste, servis reddine sebep olan bir saldırıya maruz kalabilir.

🔗 [**Daha fazla oku: İstek sayısını sınırlama**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Konfigürasyon dosyalarından gizlilikleri çıkarın veya şifrelemek için paketler kullanın

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Gizli bilgileri düz metin olarak konfigürasyon dosyalarında veya kaynak kodunda asla saklamayın. Bunun yerine, gizlilik  yönetimi (secret-management) sistemlerini kullanın, örneğin Vault ürünleri, Kubernetes/Docker Secrets veya ortam değişkenlerini kullanın. Son çare olarak, gizlilikler kaynak kodunda saklanan gizlilikler şifrelenmeli ve yönetilmelidir (anahtarlar, kullanım süresi, denetim). Yanlışlıkla gizlilikleri göndermeyi önlemek için pre-commit/push hooks kullanın.

**Aksi takdirde:** Kaynak kontrolü, özel depolar bile, yanlışlıkla halka açık (public) hâle gelebilir ve tüm gizlilikler açıklanabilir. Harici bir taraf istemeden kaynak kontrolüne erişim sağlayacaktır (veritabanı, apis, services, vb.)

🔗 [**Daha fazla oku: Gizlilik yönetimi**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. ORM/ODM kütüphaneleri ile sorgu açıklarını önleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** SQL/NoSQL injection ve diğer kötü niyetli saldırıları önlemek için, ORM/ODM veya veri kaçışını, isim desteği, parametreli sorgular ve beklenen türler için kullanıcı girişlerini doğrulamaya dikkat etmek bir veritabanı kütüphanesi kullanın. Asla sadece sorgulara değer eklemek için Javascript şablon stringleri veya string birleştirme özelliğini kullanmayın; bu, uygulamanıza geniş bir güvenlik açığı açar. Bütün saygın Node.js veri erişim kütüphaneleri (ör: [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) enjeksiyon (injection) saldırılarına karşı dahili korumaya sahiptir.

**Aksi takdirde:** Doğrulanmamış veya temizlenmemiş kullanıcı girişi NoSQL MongoDB ile çalışırken operatör enjeksiyonuna neden olabilir ve uygun bir temizleme sistemi veya ORM kullanmamak SQL enjeksiyon saldırılarına kolayca izin verecek ve dev bir güvenlik açığı oluşturacaktır.

🔗 [**Daha fazla oku: ORM/ODM kütüphaneleri kullanarak sorgu açıklarını önleyin**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Genel güvenlik en iyi uygulamaların toplanması

**TL;DR:** Bu Node.js ile direkt ilgili olmayan güvenlik tavsiyelerinin toplanmasıdır. Node'a uygulamak diğer dillerden çok farklı değildir. Göz atmak için daha fazlasını oku'ya tıklayın.

🔗 [**Daha fazla oku: Ortak güvenlik en iyi uygulamları**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Gelişmiş güvenlik için HTTP yanıt başlığını (response header) düzenle

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Uygulamanız, siteler arası komut çalıştırma (XSS), clickjacking ve diğer kötü niyetli saldırılar gibi ortak saldırıları önlemek için güvenli başlıklar (headers) kullanmalıdır. Bunlar [helmet](https://www.npmjs.com/package/helmet) gibi modüller kullanarak basitçe yapılandırılabilir.

**Aksi takdirde:** Saldırganlar, uygulamanızın kullanıcılarına doğrudan saldırılar gerçekleştirerek büyük güvenlik açıklarına neden olabilir

🔗 [**Daha fazla oku: Uygulamanızda geüvenli başlıklar (header) kullanma**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Zayıf bağımlılıkları sürekli ve otomatik olarak denetleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** Npm ekosistemi ile bir projede birçok bağımlılığa sahip olmak yaygındır. Yeni güvenlik açıkları bulunduğundan bağımlılıklar her zaman kontrol edilmelidir. Zayıf bağımlılıkları takip etmek ve izlemek için [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) gibi araçlar kullanın. Bu araçları CI kurulumunuza entegre edin, böylece canlı ortama sürüm çıkmadan önce zayıf bir bağımlılığı yakalarsınız.

**Aksi takdirde:** Bir saldırgan web framework'ünüzü keşfedebilir ve bilinin tüm güvenlik açıklarına saldırabilir.

🔗 [**Daha fazla oku: Bağımlılıkların güvenliği**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Şifreleri işlemek için Node.js şifreleme kütüphanesini kullanmaktan kaçının, Bcrypt kullanın

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Şifreler ve gizli bilgiler (ör: API keys) `bcrypt` gibi güvenli hash + salt function kullanılarak depolanmalıdır, performans ve güvenlik nedenlerinden dolayı Javascript uygulamaları için tercih edilen bir seçenek olmalıdır.

**Aksi takdirde:** Güvenli bir fonksiyon kullanılmadan kullanılan şifreler ve gizlilikler, kaba zorlama (brute force) ve sözlük saldırıları için savunmasızdır, sonuç olarak şifreleri açığa çıkaracaktır.

🔗 [**Daha fazla oku: Bcrypt kullan**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. HTML, JS ve CSS çıktılardan kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Tarayıcıya gönderilen güvenilmeyen veriler yalnızca görüntülenmek yerine çalıştırılabilir, bu siteler arası komut dosyası çalıştırma saldırısı (XSS) olarak adlandırılır. Verileri, hiçbir zaman çalıştırılmaması gereken saf içerik olarak açıkça işaretleyen özel kütüphaneler kullanarak bunu azaltın (ör: encoding, escaping)

**Aksi takdirde:** Bir saldırgan veritabanınızda zararlı JavaScript kodunu depolayabilir ve daha sonra bu durum zayıf kullanıcılara gönderilir.

🔗 [**Daha fazla oku: Çıktılardan kaçının**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Gelen JSON şemalarını doğrulayın

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Gelen isteklerin body yükünü doğrulayın ve beklentiyi karşıladığından emin olun, eğer doğrulanmazsa hızlıca başarısız olun. Her rotada sıkıcı doğrulama kodunda kaçının, [jsonschema](https://www.npmjs.com/package/jsonschema) veya [joi](https://www.npmjs.com/package/joi) gibi hafif JSON tabanlı doğrulama şemaları kullanabilirsiniz

**Aksi takdirde:** Cömert ve serbest yaklaşımınızz saldırının yüzeyini muhteşem arttırır ve saldırganı, uygulamanın çökmesine neden olacak bir kombinasyon bulana kadar birçok girişi denemeye teşvik eder

🔗 [**Daha fazla oku: Gelen JSON şemalarını doğrulayın**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. JWT nin kara listesini destekleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** JSON Web Token'ı kullandığınızda (örneğin [Passport.js](https://github.com/jaredhanson/passport)) varsayılan olarak, verilen tokenlardan erişimi iptal etme için hiçbir mekanizma yoktur. Kötü niyetli bir kullanıcı bunu keşfederse, geçerli bir tokenı tuttukları sürece sisteme erişimlerini engellemenin bir yolu yoktur. Güvenilmeyen tokenların kara listesini tutup, her istekte doğrulayarak bunu azaltın.

**Aksi takdirde:** Süresi dolmuş veya yanlış yerleştirilmiş tokenlar, bir uygulamaya erişmek ve token sahibine bürünmek için üçüncü bir tarafça kötü amaçlı olarak kullanılabilir.

🔗 [**Daha fazla oku: JSON Web Token Kara Listesi**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Yetkilendirmeye karşı brute-force saldırılarını önleme

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Basit ve güçlü bir teknik, iki metrik kullanarak yetkilendirme girişimlerini sınırlandırmak:

1. Birincisi, benzersiz aynı kullanıcı adı/ID ve IP adresi ile art arda başarısız girişlerin sayısıdır.
2. İkincisi, uzun bir süre boyunca bir IP adresinden yapılan başarısız deneme sayısıdır. Örneğin, eğer bir IP adresi bir günde 100 başarısız giriş denemesi yaparsa engelleyin.

**Aksi takdirde:** Bir saldırgan, bir uygulamadaki ayrıcalıklı hesaplara erişim elde etmek için sayısız otomatik şifre denemesi yapabilir.

🔗 [**Daha fazla oku: Login girişlerini limitleme**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Node.js'i kök (root) olmayan kullanıcı tarafından çalıştırın

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Node.js'nin sınırsız izinlere sahip bir kök kullanıcı olarak çalıştığı yaygın bir senaryo vardır. Örneğin, bu Docker container daki varsayılan davranıştır. Kök olmayan bir kullanıcı oluşturmanız önerilir ve Docker görüntüsüne de bu şekilde ayarlayın (aşağıda örnek verildi) veya "-u username" ile conatiner'ı çalıştırarak işlemleri bu kullanıcı adıyla çalıştırmanız önerilir.

**Aksi takdirde:** Sunucuda bir komut dosyası çalıştırmaya yekisi olan bir saldırgan, yerel makine üzerinde sınırsız güç elde eder (örneğin, iptable'ı değiştirir ve trafiği kendi sunucusuna yönlendirir)

🔗 [**Daha fazla oku: Node.js'i kök (root) olmayan kullanıcıyla çalıştırın**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Bir reverse-proxy veya bir ara katman kullanarak yükleme boyutunu limitlendirin

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Daha büyük body yükü, tek iş parçacığınızın (thread) onu işlemesini daha fazla zorlaştırır. Bu, muazzam miktarda istek olmadan sunucuları dize getirmek için bir fırsattır (DOS/DDOS saldırıları). Gelen isteklerin body boyutunu sınırlandırmasını sağlayın (ör: güvenlik duvarı, ELB) veya [express body parser](https://github.com/expressjs/body-parser) konfigüre ederek sadece küçük boyutlu yükleri kabul edin.

**Aksi takdirde:** Uygulamanız büyük isteklerle uğraşmak zorunda kalacak, yapması gereken diğer önemli işleri işleyemeyecek, performans etkilenecek ve DOS saldırılarına karşı güvenlik açığı olacak

🔗 [**Daha fazla oku: Yük boyutunu limitlendirin**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. JavaScript eval ifadelerinden kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` çalışma süresince uyarlanmış JavaScript kodlarının çalıştırılmasına izin verdiği için kötüdür. Bu sadece performans sorunu değil ayrıca kullanıcı girişinden kaynaklanabilecek kötü amaçlı JavaScript kodu nedeniyle de önemli bir güvenlik sorunudur. Kaçınılması gereken diğer bir dil özellik ise `new Function` yapıcısıdır. `setTimeout` ve `setInterval` öğelerinin de hiçbir zaman dinamik JavaScript kodu geçirilmemesi gerekir.

**Aksi takdirde:** Kötü niyetli JavaScript kodu, eval veya JavaScript dil fonksiyonlarını değerlendiren diğer gerçek zamanlı terimlerin içerisine geçirilen metnin içinde bir yol bulur, ve sonunda sayfadaki JavaScript  izinlerine tam erişim sağlar. Bu güvenlik açığı, genellikle bir XSS saldırısı olarak kendini gösterir.

🔗 [**Daha fazla oku: JavaScript eval ifadelerinden kaçının**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Kötü RegEx'in tek iş parçasını (single thread) aşırı yüklemesini önleyin

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions kullanışlı iken, özellikle JavaScript uygulamalarına ve Node.js platformuna gerçek bir tehdit oluşturur. Bir kullanıcı girişi metni eşleştirmek için yapılan işlem olağanüstü miktarda CPU döngüsü gerektirebilir. RegEx işlemi verimsiz olabilir, 10 kelimeyi doğrulayan tek bir isteğin tüm olay döngüsünü 6 saniye boyunca engelleyebilir ve sonunda CPU 🔥. Bu nedenle, kendi Regex desenlerinizi yazmak yerine [validator.js](https://github.com/chriso/validator.js) gibi üçüncü parti doğrulama  paketlerini tercih edin veya zayıf regex desenlerini saptamak için [safe-regex](https://github.com/substack/safe-regex) kullanın.

**Aksi takdirde:** Kötü yazılmış regex'ler, olay döngüsünü tamamen engelleyecek Regular Expression DoS saldırılarına açık olabilir. Örneğin, popüler `moment` paketi 2017 yılının Kasım ayında kötü niyetli RegEx kullanımına  karşı savunmasız bulundu.

🔗 [**Daha fazla oku: Kötü niyetli RegEx'i önle**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Değişken kullanarak modül yüklemekten kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Kullanıcı girişinden kaynaklanmış olabileceği endişesi nedeniyle parametre olarak verilen bir yol ile başka bir dosya istemek/içe aktarmaktan kaçının.
Bu kural, genel olarak dosyalara (ör. `fs.readFile()`) veya kullanıcı girişinden kaynaklanan dinamik değişkenlerle diğer hassas kaynaklara erişmek için genişletilebilir. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter bu tür desenleri yakalayabilir ve yeterince erken uyarabilir.

**Aksi takdirde:** Kötü amaçlı kullanıcı girişi, örneğin, dosya sisteminde önceden yüklenmiş bir dosya veya zaten varolan sistem dosyalarına erişmek için kullanılan bir parametreye giden yolu bulabilir.

🔗 [**Daha fazla oku: Güvenli modül yükleme**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Bir sanal alanda (sandbox) güvensiz kod çalıştırma

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Çalışma zamanında verilen harici kodu (örn. eklenti) çalıştırmak için görevlendirildiğinde, ana kodu eklentiye karşı izole eden ve koruyan herhangi bir 'sandbox' yürütme ortamını kullanın. Bu, özel bir işlem (örn. `cluster.fork()`), sunucusuz ortam veya sanal alan gibi davranan özel npm paketleri kullanılarak gerçekleştirilebilir

**Aksi takdirde:** Bir eklenti sonsuz döngüler, bellek aşırı yükleme ve hassas ortam değişkenlerine erişim gibi sayısız seçenek arasından saldırabilir

🔗 [**Daha fazla oku: Bir sanal alanda güvensiz kod çalıştırma**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Çocuk işlemlerle (child pocesses) çalışırken ekstra dikkat gösterin

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Mümkünse çocuk işlenlerini (child processes) kullanmaktan kaçının ve kullanmak zorundaysan kabuk enjeksiyon (shell injection) saldırılarını azaltmak için girdiyi doğrulayın ve sterilize edin. Tanım gereği yalnızca bir öznitelik kümesiyle tek bir komut yürütecek ve kabuk parametresi genişlemesine izin vermeyecek `child_process.execFile` kullanmayı tercih edin.

**Aksi takdirde:** Alt işlemlerin naif kullanımı, sterilize edilmemiş bir sistem komutuna iletilen kötü amaçlı kullanıcı girişi nedeniyle uzaktan komut çalıştırılmasına veya kabuk enjeksiyon saldırılarına neden olabilir.

🔗 [**Daha fazla oku: Çocuk işlemleriyle çalışırken dikkatli olun**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. İstemciden hata detaylarını saklayın

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Entegre bir ekspres hata işleyicisi varsayılan olarak hata ayrıntılarını gizler. Bununla birlikte, kendi hata işleme mantığınızı özel Error nesneleriyle (çoğu kişi tarafından en iyi uygulama olarak kabul edilir) uygulayabilmeniz harika bir yöntemdir. Bunu yaparsanız, bazı hassas uygulama ayrıntıları içeren Error nesnesinin tümünü istemciye iade etmemeye dikkat edin.

**Aksi takdirde:** Sunucu dosya yolları, kullanımda olan üçüncü taraf modülleri ve bir saldırgan tarafından kullanılabilecek uygulamanın diğer iç iş akışları gibi hassas uygulama ayrıntıları yığın izlemesinde bulunan bilgilerden sızdırılabilir

🔗 [**Daha fazla oku: İstemciden hata ayrıntılarını gizle**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. İki faktörlü kimlik doğrulamayı yapılandırın

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Geliştirme zincirindeki herhangi bir adım MFA (çok faktörlü doğrulama) ile korunmalıdır, npm/Yarn, bazı geliştiricilerin şifresini ele geçirebilen saldırganlar için tatlı bir fırsattır. Saldırganlar, geliştirici kimlik bilgilerini kullanarak, projeler ve servisler arasında yaygın olarak yüklenen kütüphanelere kötü amaçlı kod enjekte edebilir. Belki web'de halka açık olarak yayınlanmışsa bile. Npm'de 2 faktörlü kimlik doğrulamasının etkinleştirilmesi, saldırganların paket kodunuzu değiştirmesi için neredeyse sıfır şans sağlar.

**Aksi takdirde:** [Şifresinin ele geçirildiği eslint geliştiricisini duydunuz mu?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Oturum ara katman (middleware) ayarlarını değiştirin

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Her web çerçevesi (framework) ve teknolojisinin bilinen zayıf yönleri vardır - bir saldırgana hangi web çerçevesini kullandığımızı söylerseniz, onlara çok yardımcı olursunuz. Oturum ara katman programlarının varsayılan ayarlarını kullanmak, uygulamanızı `X-Powered-By` başlığına benzer şekilde modüle veya çerçeveye özgü kaçırma saldırılarına (hijacking attacks) maruz bırakabilir. Teknik yığınınızı tanımlayan ve ortaya çıkaran her şeyi saklamayı deneyin (örn. Node.js, express)

**Aksi takdirde:** Çerezler güvenli olmayan bağlantılar üzerinden gönderilebilir ve saldırgan, web uygulamasının temel çerçevesini ve modüle özgü güvenlik açıklarını belirlemek için oturum kimliğini kullanabilir.

🔗 [**Daha fazla oku: Çerez ve oturum güvenliği**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Bir işlemin kilitleneceğini açıkça ayarlayarak DOS saldırılarını önleme

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Hata işlenmediğinde Node işlemi çökecektir. Birçok en iyi uygulama, bir hata yakalansa ve ele alınsa bile çıkmanızı önerir. Örneğin, Express, herhangi bir asenkron hatada çökecektir - rotaları bir catch durumuyla sarmadığınız sürece. Bu, hangi girdinin işlemi çökerttiğini tanıyan ve aynı isteği tekrar tekrar gönderen saldırganlar için çok tatlı bir saldırı noktası açar. Bunun için bir çare yok ama birkaç teknik acıyı hafifletebilir: işlenmeyen bir hata nedeniyle bir işlem çöktüğünde kritik önem taşıyan uyarı yapın, girişi doğrulayın ve geçersiz kullanıcı girişi nedeniyle işlemi çökertmekten kaçının, tüm rotaları bir catch ile sarın ve bir istek içerisinde bir hata oluştuğunda kilitlenmemeyi hesaba katın (küresel olarak olanların aksine)

**Aksi takdirde:** Bu sadece eğitimli bir tahmindir: birçok Node.js uygulaması göz önüne alındığında, boş bir JSON gövdesini tüm POST isteklerine geçirmeyi denersek - bir avuç uygulama çöker. Bu noktada, uygulamaları kolaylıkla aşağı çekmek için aynı isteği göndererek tekrar edebiliriz.

<br/><br/>

## ![✔] 6.24. Güvensiz yönlendirmeleri önleyin

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Kullanıcı girdisini doğrulamayan yönlendirmeler, saldırganların kimlik avı dolandırıcılığı başlatmasına, kullanıcı kimlik bilgilerini çalmasına ve diğer kötü amaçlı eylemler gerçekleştirmesine olanak tanır.

**Aksi takdirde:** Bir saldırgan dış, kullanıcı tarafından sağlanan girdiyi doğrulamadığınızı fark ederse, bu güvenlik açığından yararlanarak forumlar, sosyal medya ve diğer herkese açık yerlerde özel olarak hazırlanmış bağlantılar göndererek yararlanabilir.

🔗 [**Daha fazla oku: Güvensiz yönlendirmeleri önle**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Npm kayıt defterinde gizlilikleri yayınlamaktan kaçının

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Gizlilikleri halka açık npm kayıtlarına yanlışlıkla yayınlama riskinden kaçınmak için önlemler alınmalıdır. Bir `.npmignore` dosyası, belirli dosyaları veya klasörleri kara listeye almak için kullanılabilir veya package.json içindeki dosyalar dizisi beyaz liste olarak işlev görebilir.

**Otherwise:** Projenizin API anahtarları, parolaları veya diğer sırları, finansal kayıp, kimliğe bürünme ve diğer risklere neden olabilecek herkes tarafından istismar edilmeye açıktır.

🔗 [**Read More: Gizlilikleri yayınlamaktan kaçının**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Başa dön</a></p>

# `7. Performans En İyi Uygulamaları`

## Katkıda bulunanlarımız bu bölümde çalışıyor. [Katılmak ister misin?](https://github.com/i0natan/nodebestpractices/issues/256)

## ![✔] 7.1. Doğal JS metotlarını, Lodash gibi araçların yerine tercih edin

 **TL;DR:** Gereksiz bağımlılıklara ve daha yavaş performansa yol açtığından, doğal metotlara göre `lodash` ve `underscore` gibi yardımcı program kütüphanelerini kullanmak genellikle daha fazla cezalandırıcıdır. Yeni ES standartlarının yanı sıra yeni V8 motorunun piyasaya sürülmesiyle doğal metotların, yardımcı kütüphanelerden %50 daha fazla performans gösterecek şekilde geliştirildiğini unutmayın.

**Aksi takdirde:** Daha az performanslı projeler sürdürmek zorunda kalacaksınız, **zaten** mevcutta var olanı basitçe kullanabilirdiniz veya birkaç dosya karşılığında birkaç satırla daha uğraşın.

You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

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
