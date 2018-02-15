# Eş zamansız hata denetiminde Eş zamansızlama-Bekletme ve vaatlerin kullanımı 


### Bir Paragraflık Açıklama

Geri aramalar çoğu programlamacı aşina olmadığı, baştan sona hataları kontrol etmenin zor olduğu, bozuk kod yerleştirmeyle ilgili sorunlar yarattığı ve kod akışıyla ilgili akıl yürütmeyi zorlaştırdığı için ölçeklendirilemez. Bluebird, async, Q pack gibi kitaplıklar program akışını kontrol etmek için GERİ DÖN ve FIRLAT gibi standart kod stillerini kullanır. Özellikle, ana kodun tüm fonksiyonlardaki hatalarla başa çıkmasını sağlayan favori deneme-yakalama hatasını denetleme stilini desteklerler.


### Kod Örneği - hataları yakalamak için vaatleri kullanmak


```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### Anti patern kod örneği - geri arama türü hata denetimi 

```javascript
getData(someParameter, function(err, result){
    if(err != null)
      // do something like calling the given callback function and pass the error
    getMoreData(a, function(err, result){
          if(err != null)
            // do something like calling the given callback function and pass the error
        getMoreData(b, function(c){ 
                getMoreData(d, function(e){ 
		 if(err != null)
            	// you get the idea? 
            });
        });
```

### Blog Alıntısı: "Vaatlerle ilgili problemlerimiz var"
blog pouchdb.com'dan
 
 > ……Aslında gerçekte, geri aramalar çok daha kötü bir şey yapar; bizi programlama dillerinde kanıksadığımız yığından mahrum bırakır. Yığın olmadan kod yazmak fren pedalı olmadan araba sürmek gibidir: uzanıp orada olmadığını anlayana kadar, ona ne kadar ihtiyacınız olduğunu anlamazsınız. Vaatlerin tüm amacı eş zamansızlığa düştüğümüzde kaybettiğimiz dil temellerini bize geri vermektir: geri dön, fırlat, ve yığın. Fakat vaatlerden avantaj sağlamak için onların nasıl kullanılması gerektiğini bilmek gerekir.

### Blog Alıntısı: "Vaat metodu çok daha kompakttır"
blog gosquared.com'dan
 
 > ………Vaat metodu çok daha kompakt, açık ve yazması hızlıdır. Eğer işlemler arasında bir hata veya istisna gerçekleşirse .catch() denetleyicisiyle denetlenir. Tüm hataların denetimi için tek bir komut olması çalışmanın her adımında hata kontrolü yapılmasına gerek olmadığı anlamına gelmektedir.

### Blog Alıntısı: "Vaatler jeneratörlerle kullanılabilen yerli ES6'lardır"
blog StrongLoop'dan
 
 > ….Geri aramalar kötü bir hata-denetimi geçmişine sahiptir. Vaatler daha iyidir. Express'teki yerleşik hata denetimiyle vaatleri birleştirin ve yakalanmayan istisnaların olma ihtimalini önemli ölçüde azaltın. Vaatler jeneratörlerle ve ES7 gibi Babel gibi derleyiciler üzerinden eş zamansızlama/bekletme yapan tekliflerle kullanılabilen yerli ES6'lardır.

### Blog Alıntısı: "Alıştığınız bütün düzenli akış kontrol yapıları tamamen yıkılmış durumda"
blog Benno’s'dan
 
 > ……Asinkronla ilgili en iyi şeylerden biri, geri arama temelli programlama temel olarak alıştığınız ve tamamen yıkılmış durumda olan düzenli akış kontrol yapısı olmasıdır. Ama, en bozuk durumda bulduğum istisnaları denetleme. İstisnaları denetlemek için Javascript çok tanıdık bir deneme-yakalama yapısı sağlar. İstisnalarla ilgili problem ise, bir çağrı yığınının üstünden kısa-yol hataları sağlarlar, fakat hata tamamen farklı bir yığında gerçekleştiğinde tamamen işe yaramaz olarak sonlanır…
