# Asenkron hata yakalamak için Async-Await ya da Promise kullanın

### Tek Paragraf Açıklama

Callback'ler çoğu programcı buna aşina olmadığı için çok iyi ölçeklenemez. Baştan sona hataları kontrol etmekle başedip, gereksiz kodlarla uğraşıp, kodun akışını ve anlaşılırlığını zorlaştırıyorlar. BlueBird, async ve Q gibi kütüphaneler, program akışını kontrol etmek için RETURN ve THROW'u kullanarak standart bir kod stili sağlar. Özellikle, ana kod yolunu her fonksiyonda hatalarla uğraşmaktan kurtarmaya yarayan favori TRY-CATCH hata ayıklama stilini destekliyorlar.

### Kod Örneği – hataları yakalamak için promise kullanmak

```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### Anti model kod örneği - callback stili hata yakalama

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // gönderilen callback fonksiyonunu çağırmak ve hatayı göndermek gibi işlemler yapın
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // gönderilen callback fonksiyonunu çağırmak ve hatayı göndermek gibi işlemler yapın
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // anladınız mı? 
                        }
                    })
                });
            }
        });
    }
});
```

### Blog Alıntısı: "Promise'lerle ilgili bir sorunumuz var"

 pouchdb.com bloğundan

 > ……Ve aslında, Callback'ler daha kötü bir şey yapıyor: Bizi yığınlardan mahrum ediyorlar, bu genellikle programlama dillerinde aldığımız bir şey.. Yığın olmadan kod yazmak, fren pedalı olmadan araba kullanmak gibi bir şey: ulaşana kadar ona ne kadar çok ihtiyacın olduğunu fark etmiyorsun. Promise'lerin tek amacı, asenktron kullandığımızda kaybedilen dil temellerini bize geri vermektir: return, throw, ve yığın. Ancak promise'leri onlardan faydalanabilmek için doğru kullanmayı bilmek zorundasınız..

### Blog Alıntısı: "Promise'lerin yöntemi çok daha kompakt"

 gosquared.com bloğundan

 > ………Promise'lerin yöntemi çok daha kompakt, temiz ve yazması daha hızlı. Herhangi bir ops içinde bir hata veya exception oluşursa, tek bir .catch () tarafından ele alınır. Tüm hataları yakalamak için bu tek bir yere sahip olmak, çalışmanın her aşaması için hata kontrolü yazmanıza gerek olmadığı anlamına gelir.

### Blog Alıntısı: "Promise'ler doğal ES6'dir, üreticiler ile birlikte kullanılabilir"

 StrongLoop bloğundan

 > ….Callback'lerin kötü bir hata yakalama hikayesi var. Promise'ler daha bundan daha iyi. Express'te Promise'leri ve built-in hata ayıklamayı birleştirin ve beklenmedik bir exception ihtimalini önemli ölçüde azaltın. Promise'ler doğal ES6'dir, üreticiler ile birlikte kullanılabilir, ve ES7 async/await gibi Babel tarzı derleyiciler önerilebilir

### Blog Alıntısı: "Alışık olduğumuz tüm bu düzenli akış kontrol yapıları tamamen bozuldu"

Benno’s bloğundan

 > ……Asenkron, Callback-tabanlı programlama hakkında en iyi şeylerden biri de, temelde alışkın olduğunuz tüm düzenli akış kontrol yapılarının tamamen kırılmasıdır. Ancak, en çok bozulduğunu düşündüğüm şeylerden biri de exception yakalamak. Javascript, exception ile baş etmek için oldukça bilindik bir try-catch yapısı sunmaktadır. İstisna olan sorun, bir çağrı yığınında hataların kısaltılmasında harika bir yol sağlamalarıdır, ancak hata farklı bir yığında gerçekleşirse tamamen işe yaramaz olurlar.
