# Yakalanmamış promise rejection'larını yakalayın

<br/><br/>

### Tek Paragraf Açıklama

Genellikle, çoğu Node.js / Express uygulama kodları promise'lerin içerisinde çalışır – .then'in içerisinde, callback foncksiyonunda, veya bir catch bloğunda. Şaşırtıcı bir şekilde, bir geliştirici bir .catch bloğu eklemeyi unutursa, dönen hatalar uncaughtException event-handler tarafından yakalanamaz ve kaybolur.  Node'un son sürümlerinde, yakalanmamış bir rejection görüldüğünde bir uyarı mesajı göstermesi eklendi, ancak bu, işler ters gittiğinde fark edilmesine yardımcı olabilir, ancak bu kesinlikle uygun bir hata ayıklama yöntemi değildir. Basit çözüm, her promise zincirine .catch bloğunu eklemeyi asla unutmamak ve merkezi bir hata ayıklayıcısına yönlendirmektir. Ancak, hata ayıklama stratejinizi yalnızca geliştiricinin disiplinine bırakmak biraz sallantılı bir durumdur. Sonuç olarak, fallback kullanmanız ve `process.on(‘unhandledRejection’, callback)`A'yı kullanmanız önemle tavsiye edilir – Bu, herhangi bir promise hatasının yerel olarak yakalnmadığı takdirde bir iyileştirme sağlayacaktır.

<br/><br/>

### Kod Örneği: Bu hatalar herhangi bir hata işleyicisi tarafından yakalanmayacaktır (unhandledRejection dışında)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // bu hata uçup gidicek
  if(johnSnow.isAlive == false)
      throw new Error('ahhhh');
});

```

<br/><br/>

### Kod Örneği: Çözülmemiş ve reddedilen promise'leri yakalamak

```javascript
process.on('unhandledRejection', (reason, p) => {
  // Yakalanmamış bir promise rejection yakaladım, zaten yakalanmamış hatalar için fallback yakalayıcımız olduğundan , hatayı fırlatıp, yakalamasını sağlayalım
  throw reason;
});
process.on('uncaughtException', (error) => {
  // Hiç yakalanmamış bir hata aldım, bunu yakalayıp, restart'a ihtiyaç olup olmadığını kontrol edebiliriz
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```

<br/><br/>

### Blog Alıntısı: "Eğer hata yapabiliyorsanız, bir noktada yapacaksınız"

 James Nelson bloğundan

 > Anladınız mı test edelim. Aşağıdakilerden hangisinin konsola bir hata yazdırmasını beklersiniz?

```javascript
Promise.resolve(‘promised value’).then(() => {
  throw new Error(‘error’);
});

Promise.reject(‘error value’).catch(() => {
  throw new Error(‘error’);
});

new Promise((resolve, reject) => {
  throw new Error(‘error’);
});
```

> Seni bilmem, ama benim cevabım hepsinden hatayı bastırmasını beklerim. Ancak, gerçek şu ki, bazı modern JavaScript environment'ları hiçbiri için hata yazdırmıyor. İnsan olmanın bir sorunu, eğer bir hata yapabiliyorsanız, bir noktada yapacaksınız. Bunu akılda tutmak, hataları mümkün olduğunca az zarar verecek şekilde tasarlamamız gerektiği ve bunun da hataları normal olarak yakalama ve onları gözardı etmeme anlamına geldiği açıkça belli ediyor.
