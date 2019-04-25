# Çözümünüzü komponentler ile yapılandırın

<br/><br/>

### Açıklayıcı Bir Paragraf

Orta ve üstü büyüklükteki uygulamalar için monolitler gerçekten kötüdür - birçok bağımlılıkları olan büyük bir yazılımda akıl yürütmek zordur ve genellikle spagetti koduna yol açar. Akıllı mimarlar bile — canavarı evcilleştirecek ve onu'modülerleştirecek kadar yetenekli olanlar — tasarıma büyük zihinsel çaba harcarlar ve her değişiklik, diğer bağımlı nesneler üzerindeki etkiyi dikkatlice değerlendirmeyi gerektirir. Nihai çözüm küçük yazılım geliştirmektir: tüm yığını bölün, başkalarıyla dosya paylaşmayan kendi kendine yeten bileşenlere bölün, her biri çok az dosya oluşturur (örn: API, servis, veri erişim, test vb.)böylece bunun için akıl yürütmek çok kolay olacaktır. Bazıları buna 'mikro servisler' mimarisi diyebilir — mikro servisler; takip etmeniz gereken bir özellik değil, bir dizi ilke olduğunu anlamak önemlidir. Olgunlaşmış mikro servis mimarisinin prensiplerini benimseyebilirsin veya bir kaçını benimseyebilirsin. Yazılım karmaşıklığını düşük tuttuğunuz sürece her ikisi de iyidir. Yapmanız gereken en azından bileşenler arasında temel sınırlar oluşturmak, her iş bileşeni için proje kökünde bir klasör atamak ve kendi kendine yeten hale getirmektir — diğer bileşenlere işlevlerin yalnızca arayüzle (interface) veya API ile kullanmasına izin verilir. Bu, bileşenlerinizi basit tutmak için temeldir, bağımlılık cehenneminden kaçının ve uygulamanız büyüdükçe gelecekte tam gelişmiş mikro hizmetlerin önünü açacaktır.

<br/><br/>

### Blog Alıntı: "Ölçeklendirme tüm uygulamanın ölçeklendirilmesini gerektirir"

 MartinFowler.com blog'undan

> Monolitik uygulamalar başarılı olabilir, ancak giderek insanlar onlarla daha fazla sıkıntı yaşıyor - özellikle buluta daha fazla uygulama dağıtıldığında. Değişim döngüleri birbirine bağlanır - uygulamanın küçük bir kısmında yapılan bir değişiklik, tüm monolitin yeniden derlenmesini ve dağıtılmasını gerektiriyor. Zamanla, iyi bir modüler yapıyı devam ettirmek genellikle zordur, bu da modül içindeki yalnızca bir modülü etkileyecek değişiklikleri tutmayı zorlaştırır. Ölçekleme, daha fazla kaynak gerektiren parçalar yerine tüm uygulamanın ölçeklendirilmesini gerektirir.

<br/><br/>

### Blog Alıntı: "So what does the architecture of your application scream?"

 [uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) blog'undan

> ...bir kütüphanenin mimarisine bakıyorsanız, büyük bir giriş, check-in görevlileri için bir alan, okuma alanları, küçük konferans salonları ve kütüphanedeki tüm kitaplar için kitap raflarını tutabilen galeri, sonrasında galeri görürsünüz. Bu mimari çığlık atardı: Kütüphane.<br/>

Peki uygulamanızın mimarisi ne çığlık atıyor? En üst seviye dizin yapısına ve en yüksek seviye paketindeki kaynak dosyalara baktığınızda; çığlık atıyorlar mı: Sağlık Bakım Sistemi veya Muhasebe Sistemi veya Envanter Yönetim Sistemi? Yoksa çığlık atıyorlar mı: Rails veya Spring/Hibernate veya ASP?

<br/><br/>

### İyi: Çözümünüzü bağımsız bileşenlerle yapılandırın

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

### Kötü: Dosyalarınızı teknik rollere göre gruplayın

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
