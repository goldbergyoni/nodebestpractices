# İzleme

### Tek Paragraf Açıklama

> En temel seviyede izleme, yayında oluşabilen kötü olayları kolayca belirleyebilmeniz anlamına gelir. Örneğin, Slavk veya email ile bilgilendirilmek. Asıl zor olan, bütçenizi sarsmayacak gereksinimlerinizi karşılayacak doğru aracı seçmenizdir. Sağlıklı bir durum sağlamak için izlenmesi gereken temel ölçüm grubunu tanımlayarak başlayabilirim. – CPU, sunucu RAM'i, Node işlem RAM'i (1.4GB'dan az), son dakika hatalarının sayısı, işlemlerin tekrar başlatılmasının sayısı, ortalama cevap süresi. Ardından, hoşunuza gidebilecek bazı gelişmiş özellikleri gözden geçirin ve listenize ekleyin. Lüks sayılabilecek izleme özelliği sağlayabilen bazı örnekler: DB profilleme, cross-service ölçümü (ticari transaction ölçümü), ön yüz entegrasonu, Ham verileri özel BI istemcilerine aktarma, Slack bildirimleri ve dahası.

Gelişmiş özelliklere sahip olmak, uzun kurulumlar veya Datadog, newrelik ve benzeri gibi ticari ürünleri satın almayı gerektirir. Maalesef, bazım ölçümler donanımla ilgili olduğundan (CPU) ve diğer node işlemlerinde (dahili hatalar) yaşandığından, temel işlemler bile bazı ek kurulumlar gerektirdiği için o kadar da kolay değildir. Örneğin, bulut tabanlı izleme çözümleri (ör: AWS CloudWatch, Google StackDriver) size direk donanım metriklerini söyleyecek, fakat dahili uygulama işleyişi hakkında bir şey söylemeyecektir. Diğer yandan, ElasticSearch gibi log tabanlı çözümler donanım izlemeyi barındırmaz. Çözüm ise seçiminizi eksik ölçümlerle artırmaktır, örneğin, popüler bir seçenek olarak uygulama loglarını Elastic yığınına göndermek ve donanımla ilgili tüm olan biteni görebilmek için ek olarak bazı etmenlerin (ör: Beat) konfigürasyonunu yapmak.

### Blog Alıntısı: "Promise'lerle ilgili bir sıkıntımız var"

 Şu blogdan: pouchdb.com, “Node Promises” anahtar kelimesi için 11. sırada yer aldı

 > … Tüm servisleriniz için bu sinyalleri izlemenizi öneriyoruz: Hata oranı: Çünkü hatalar kullanıcının karşısına çıktığı ve müşteriyi hemen etkilediği için.
Cevap süresi: Çünkü gecikme direkt olarak işinizi ve müşterileriniz etkiler.
Çıktı: Trafik, artan hataların ve gecikmenin kaynağını anlamanızda yardımcı olur.
Canlılık: Bu servisinizin ne kadar "dolu" olduğunu gösterir. Eğer CPU kullanımı 90% ise, sisteminiz daha fazla trafiği kaldırabilir mi?
…
