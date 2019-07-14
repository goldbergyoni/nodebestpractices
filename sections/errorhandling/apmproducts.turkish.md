# APM ürünlerini kullanarak hataları ve arıza sürelerini keşfedin


### Tek Paragraf Açıklama

Exception != Error. Geleneksel hata ayıklama, Exception'ın oluşunu varsayar, ancak uygulama hataları yavaş kod yolları biçiminde gelebilir, API arıza süreleri, bilişimsel kaynak yetersizliği ve dahası. APM ürünlerinin en basit kurulumla proaktif olarak çok çeşitli “gömülü” sorunları tespit etmelerine yaradığı için burada yararlı hale geliyor. APM ürünlerinin ortak özellikleri arasında mesela HTTP API'ı hata verdiği zaman uyarmak, API yanıt süresinin belli bir sınırın altına düştüğünü tespit etmek, 'code smells' tespiti, sunucu kaynaklarını izleme özellikleri, BT ölçümleri ile operasyonel zeka panosu ve dahası gibi kullanışlı özellikler. Bir çok satıcı ücretsiz bir plan sunar.

### APM hakkında Vikipedi

Bilgi teknolojileri ve sistem yönetimi alanlarında, Uygulama Performans Yönetimi (Application Performance Management-APM) yazılım uygulamalarının performans ve kullanılabilirliğinin izlenmesi ve yönetimidir. APM, beklenen hizmet düzeyini korumak için karmaşık uygulama performansı sorunlarını saptamaya ve tanılamaya çalışmaktadır. APM “BT metriklerinin işletme değerine çevirisidir". Başlıca ürünler ve bölümler.

### APM pazarını anlamak

APM ürünleri 3 ana bölümden oluşur:

1. Web site yada API izleme – HTTP istekleri aracılığıyla kesintisiz çalışma ve performansı izleyen harici servisler. Birkaç dakika içinde kurulabilirler. Alanında birkaç iddialı paketler: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), and [New Relic](https://newrelic.com/application-monitoring)

2. Kod enstrümantasyonu – yavaş kod algılama, exception istatistikleri, performans izleme ve dahası gibi özellikleri kullanmak için uygulama içinde bir aracın gömülmesini gerektiren ürün familyası. Alanında birkaç iddialı paketler: New Relic, App Dynamics

3. Operasyonel zeka panosu – bu ürün yelpazesi, ops ekibinin, uygulama performansını yüksek tutmada yardımcı olacak metrikler ve küratörlü içerikle kolaylaştırılmasına odaklanmıştır. Bu genellikle birden fazla bilgi kaynağının birleştirilmesini gerektirir.(uygulama logları, DB logları, serverların logları, vb) ve panel tasarım çalışmaları. Alanında birkaç iddialı paketler: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)



 ### Örnek: UpTimeRobot.Com – WebSite izleme paneli
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/uptimerobot.jpg "WebSite izleme paneli")

 ### Örnek: AppDynamics.Com – Kod enstrümantasyonu ile kombine edilmiş uçtan uca(end to end) izleme
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/app-dynamics-dashboard.png "Kod enstrümantasyonu ile kombine edilmiş uçtan uca izleme")
