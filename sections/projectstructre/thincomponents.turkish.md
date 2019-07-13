# Çözümünüzü komponentlere göre yapılandırın

<br/><br/>

### Tek Paragraf Açıklama

Orta ve üst düzey uygulamalar için, monolitler hiç iyi değil - Tek bir büyük yazılım bir çok şeyle bağlantılı olması, onun mantıklı olmasını zorlaştırıyor ve sıklıkla "spaghetti code(karmakarışık kod)"a neden oluyor. Bu sevimsiz şeyi ehlileştirip onu 'modülerleştiren' yetenekli mimarlar olmasına rağmen - 
her bir değişime ve dizayna mental çaba sarfetmek, diğer ona bağlantılı objeler üzerinde yaratacak etki için dikkatlice düşünmeyi gerektirir. Küçük bir yazılım geliştirmenin esas yolu: Tüm yığını kendi başına bir bütün olup, diğerleriyle dosya paylaşımında bulunmayan komponentlere bölmek, her birini çok az dosyalardan oluşmak(ör: API, servis, data erişimi, test, vb), komponentlerin aklınıza gelmesini daha kolaylaştırıcaktır. Bazıları buna 'mikroservis' mimarisi diyebilir - mikroservislerin bir dizi ilkeleri takip eden bir spekülasyon olmadığını bilmek önemlidir. Pek çok ilkeyi tam gelişmiş bir mikroservis mimarisine uygulayabilir veya yalnızca birkaçını benimseyebilirsiniz. Yazılımın karmaşıklığını düşük tuttuğunuz sürece ikisi de iyidir. En azından yapmanız gereken şey, komponentler arasında temel sınırlar oluşturmak, her bir işi yapan komponentler için projenizin ana dizininde bir dosya yaratmak ve bunu kendi başına bir bütün olabilen komponentler hazırlamak - diğer komponentler sadece kendi public interface'leri ya da API yoluyla işlevselliğini sürdürebilir. Bu, komponentlerinizi basit tutmak, bağlılıklarını en aza indirgemek ve ileride uygulamanız büyüdüğünde  mikroservisleri geliştirmeyi kolaylaştırmanın temelidir. 


<br/><br/>

### Blog Alıntısı: "Ölçekleme tüm uygulamanın ölçeklenmesini gerektirir"

 MartinFowler.com Blogundan

 > Monolitik uygulamalar başarılı olabilir, fakat çoğu insan giderek hüsrana uğruyor - özellikle daha çok uygulama "bulut"a dağıtıldığında. Değişim döngüleri birbiriyle bağlantılıdır - uygulamanın küçük bir yerinde yapılan değişiklik, tüm monolitiğin tekrar build edilmesi ve dağıtılması demektir. Zamanla iyi bir modüler yapı elde etmek oldukça zordur, modül içerisindeki sadece bir modülü etkilemesi gereken değişikliklerin yapılmasını zorlaştırır. Ölçekleme, uygulamanın belli bir bölümünü ölçeklemektense, tüm uygulamanın ölçeklenmeseni gerektirir.

 <br/><br/>

### Doğru: Çözümünüzü kendi başına bir bütün olabilen komponentlerle yapılandırmak

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Çözümünü komponentlere göre yapılandırmak")

 <br/><br/>

### Yanlış: Dosyalarınızı teknik rollerine göre gruplamak

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Çözümü teknik rollere göre yapılandırmak")
