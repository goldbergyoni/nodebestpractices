# Her log komutuna ‘TransactionId’ ataması

<br/><br/>


### Bir Paragraflık Açıklama

Sıradan bir log tüm bileşenlerden ve taleplerden gelen girdilerin ambarı gibidir. Bazı şüpheli satır veya hataların tespit edilmesinin üzerine, aynı spesifik akışa ait olan satırlarla eşleştirilmesi tehlikeli olur (örneğin, kullanıcı "John" bir şey satın almaya çalıştı). Bu durum mikroservis ortamında, bir istek/işlem birden fazla bilgisayar üzerinden yayıldığında daha bile kritik ve zorlayıcı olur. Aynı istekten gelen tüm girdilere benzersiz bir işlem tanımlayıcı değeri atayarak bunu belirtin, böylelikle bir satır tespit edildiğinde kişi kimliği kopyalayabilir ve her bir satırda benzer işlem kimliğini arayabilir. Bununla birlikte, In Node’da buna ulaşmak tüm istekleri yerine getirmek için kullanılan tek bir parçacığı kullanmak kadar basit değildir -verileri istek seviyesinde gruplayabilen bir kütüphane kullandığınızı düşünün- bir sonraki slaytta kod örneğine bakın. Diğer mikroservisleri çağırırken, aynı bağlamı devam ettirmek için “x-transaction-id” gibi bir HTTP üst bilgisi kullanın.

<br/><br/>


### Code example: typical Express configuration

```javascript
// when receiving a new request, start a new isolated context and set a transaction Id. The following example is using the NPM library continuation-local-storage to isolate requests
 
const { createNamespace } = require('continuation-local-storage');
var session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by Id');
});

// Now any other service or components can have access to the contextual, per-request, data
class someService {
    getById(id) {
        logger.info(“Starting to get something by Id”);
        // other logic comes here
    }
}

// The logger can now append the transaction-id to each entry, so that entries from the same request will have the same value
class logger {
    info (message)
    {console.log(`${message} ${session.get('transactionId')}`);}
}
```

<br/><br/>

### Diğer Bloggerlar Ne Diyor
blog [ARG! TEAM](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
Express.js, bazı bağlama ara katmanı aracılığıyla statik dosya işlemeyi gerçekleştirmiş olsa da, asla kullanmamalısınız. *Nginx statik dosya işlemede çok daha iyi iş yapıyor ve dinamik olmayan içeriklerin taleplerinin node proseslerimizi tıkamasını önleyebiliyor
> ...Express.js, bazı bağlama ara katmanı aracılığıyla statik dosya işlemeyi gerçekleştirmiş olsa da, asla kullanmamalısınız. *Nginx statik dosya işlemede çok daha iyi iş yapıyor ve dinamik olmayan içeriklerin taleplerinin node proseslerimizi tıkamasını önleyebiliyor*...
