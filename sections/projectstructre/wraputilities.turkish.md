# Ortak yardımcı programları npm paketleri gibi paketleyin

<br/><br/>

### Bir paragraf açıklayıcı

Büyümeye başladığınızda ve benzer yardımcı programları tüketen farklı sunucularda farklı komponentlere sahip olduğunuzda, bağımlılıkları yönetmeye başlamalısınız. Yardımcı program kodunuzun 1 kopyasını nasıl saklayabilir ve birden çok tüketici komponentin kullanmasına ve dağıtmasına nasıl izin verebilirsiniz? İyi, bunun için bir araç var, buna npm denir. Gelecekte kolayca değiştirilebilir hale getirmek ve kendi kodunuzu özel npm paketi olarak yayınlamak için kendi kodunuzla 3. parti hizmet paketlerini paketleyerek başlayın. Artık tüm kod tabanınız bu kodu alabilir ve ücretsiz bağımlılık yönetimi aracından yararlanabilir.  [private modules](https://docs.npmjs.com/private-modules/intro), [private registry](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) veya [local npm packages](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc) kullanarak herkese açık olarak paylaşmadan npm paketlerini kendi özel kullanımınız için yayınlamak mümkündür.

<br/><br/>

### Kendi ortak yardımcı programlarınızı ortamlar ve bileşenler arasında paylaşma

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/Privatenpm.png "Komponentlere göre çözüm yapılandırma")
