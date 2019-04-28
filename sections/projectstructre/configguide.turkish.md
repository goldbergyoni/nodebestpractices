# Değişen ortamlara uyumlu, güvenli ve hiyerarşik konfig kullanın

<br/><br/>

### Bir Paragraf Açıklama

Konfigürasyon verileriyle uğraşırken, birçok şey rahatsız edici olabilir ve yavaşlayabilir:

1. Ortam değişkenlerini kullanarak tüm anahtarları ayarlamak, 100 anahtar enjekte etmek gerektiğinde çok sıkıcı olur (yerine sadece bir config dosyasında çalışmak), ancak dosyalarla uğraşırken yalnızca DevOps yöneticileri kodu değiştirmeden davranışı değiştiremez. Güvenilir bir yapılandırma çözümü, işlem değişkenlerinden her iki yapılandırma dosyasını da + işlem değişkenlerinden ezerek (override) birleştirmelidir

2. Düz bir JSON'daki tüm anahtarları belirtirken, liste büyüdükçe girdileri bulmak ve değiştirmek sinir bozucu hale gelir. Bölümler halinde gruplandırılmış hiyerarşik bir JSON dosyası bu sorunun üstesinden gelebilir + birkaç config kütüphanesi konfigürasyonu birden fazla dosyada saklamayı ve çalışma zamanında hepsini birleştirmeyi sağlar. Aşağıdaki örneğe bakın

3. DB şifresi gibi hassas bilgilerin depolanması kesinlikle önerilmez, ancak bu zorluk için hızlı ve kullanışlı bir çözüm yoktur. Bazı yapılandırma kütüphaneleri, dosyaları şifrelemeye izin verirken, diğerleri GIT işlemleri sırasında bu girişleri şifreler veya bu girişler için gerçek değerleri saklamaz ve ortam değişkenleri aracılığıyla dağıtım sırasında gerçek değeri belirtir.

4. Bazı gelişmiş konfigürasyon senaryoları, konfigürasyon değerlerini komut satırı (değişkenler) üzerinden enjekte etmeyi veya konfigürasyon bilgilerini Redis gibi merkezi bir önbellek ile senkronize etmeyi gerektirir, böylece birden fazla sunucu aynı konfigürasyon verilerini kullanır.

Bazı yapılandırma kitaplıkları bu özelliklerin çoğunu ücretsiz olarak sağlayabilir, [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) and [config](https://www.npmjs.com/package/config) gibi npm kütüphanelerine bakabilir ve bu gereksinimlerin çoğunu sağlayabilir.

<br/><br/>

### Kod Örneği – hiyerarşik yapılandırma, girdileri bulmanıza ve devasa yapılandırma dosyalarını korumanıza yardımcı olur.

```json
{
  // Customer module configs 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development 
      "initialDays": 1
    }
  }
}
```

<br/><br/>
