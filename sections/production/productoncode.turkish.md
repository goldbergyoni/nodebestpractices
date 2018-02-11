# Kodunuzu üretime hazır hale getirin

<br/><br/>


### Bir Paragraflık Açıklama

Üretim devamlılığını ve stabilitesini güzel yönde etkileyecek geliştirme ipuçlarının listesi:

* On iki-faktör kılavuzu – [On iki faktör] kılavuzunu öğrenin (https://12factor.net/)
* Durum bilginiz olmasın – Lokal olarak hiçbir spesifik web sunucusuna veri kaydetmeyin (ayrı madde imine bakın – ‘Durum bilgisiz olma’)
* Önbellek – Önbelleği çokça kullanın fakat önbellek uyuşmazlığından başarısızlığa uğramayın
* Belleği test edin – Gelişimsel akışınızın bir parçası olarak hafıza kullanımını ve sızıntıları ölçün, 'memwatch' gibi araçlar bu görevi bir hayli basitleştirebilir
* Fonksiyonları isimlendirin – Anonim fonksiyonların kullanımını en aza indirgeyin (satır içi geri arama gibi) çünkü sıradan bir hafıza yanaylacı method adı başına hafıza kullanımı sağlayacaktır
* CI araçlarını kullanın – Üretime göndermeden hataları tespit etmek için CI aracını kullanın. Örneğin, referans hatalarını ve tanımsız değişkenleri tespit etmek için ESLint kullanın. Senkronize APIleri (async versiyonu yerine) kullanan kodu tanımlamak için -trace-sync-io kullanın Use –trace-sync-io to identify code that uses synchronous APIs
* Log takibini akıllıca yapın – Herbir log komutunda bağlamsal bilgilerden bahset, tercihen JSON formatında olsun çünkü bu şekilde Elastic gibi log kaynak araçları bu özelliklere göre arama yapabilir (ayrı madde imine bakın - 'akıllı logları kullanarak görünürlüğü arttır'). Ayrıca, herbir teklifi tanımlayan ve aynı işlemi tanımlayan dizileri ilişkilendirmeye izin veren işlem-id'si (ayrı madde imine bakın - 'İşlem-ID'si İçer')

Hata yönetimi –  Hata işleme, Node.JS üretim sitelerinin zayıf noktasıdır - birçok Node işlemi küçük hatalar yüzünden çöküyor, bazıları ise çökmek yerine hatalı olarak var olmaya devam ediyor. Hata denetleme stratejisi belirlemek kesinlikle kritiktir, yazımı okuyun [en iyi hata denetim uygulamaları] (http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)
