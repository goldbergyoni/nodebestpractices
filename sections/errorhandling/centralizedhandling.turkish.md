# Hataları merkezi olarak yakalayın. Middleware'lerin içerisinde değil

### Tek Paragraf Açıklama

Hata yakalama için özel bir obje olmadan, hatalı kullanım nedeniyle gizlenen önemli hataların olma olasılığı daha yüksektir. Hata yakalama objesi, hatanın görünebilirliğinden sorumludur, örneğin güzel formatlanmış bir loga yazmak, olayları [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), veya [Raygun](https://raygun.com/) gibi izleme araçlarına göndermek gibi. [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers) gibi çoğu framework, bir hata yakalama middleware'ı sağlar. Tipik bir hata yakalama akışı şunun gibidir: Bir modül hata verir -> API router'ı hatayı yakalar -> hatayı yakalamakla yükümlü olan middleware (ör: Express, Koa)'e hatayı iletir -> merkezi hata yakalayıcısı çağırılır -> middleware bu hatanın güvenilmeyen bir hata olup olmadığını söyler (işlemsel değil), böylece uygulama güvenlice restart edilebilir. Express middleware'inin hataları yakalamada genel, ancak yanlış bir yöntem olduğunu unutmayın – bunu yapmak web dışı interfacelerde karşılaşılan hataları kapsamaz.

### Code Example – a typical error flow

```javascript
// DAL katmanı, hataları burda yakalamıyoruz
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error("Hata için açıklayıcı bir tanımlama", other useful parameters)
});

// API yönlendirme kodu, senkron ve asenkron hataları burada yakalayıp, middleware'e yolluyoruz
try {
  customerService.addNew(req.body).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Hata yakalama middleware'i, işlemeyi merkezi hata işleyicisine devrederiz
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```

### Code example – handling errors within a dedicated object

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async function(error) {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```

### Code Example – Anti Pattern: handling errors within the middleware

```javascript
// middleware direkt olarak hatayı yakalayacak, Hataları test edip, Cron job'ları kim yakalayacak?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```

### Blog Alıntısı: "Bazen düşük seviyeler, hatayı yönlendirmek dışında yararlı bir şey yapamaz."

Joyent bloğundan, “Node.js error handling” anahtar kelimesi için 1. sıraya yerleşti

> … Aynı hata yığınının birkaç seviyesinde yakalamayı bırakabilirsiniz. Bu genelde, düşük seviyeler, hatayı yönlendirmek dışında yararlı bir şey ve benzeri faaliyetler yapmadığında olur. Genellikle, yalnızca en üst düzey caller'lar uygun yanıtın ne olduğunu, işlemi yeniden denemek, kullanıcıya bir hata bildirmek ya da başka bir olay olup olmadığını bilir. Ama, bu tüm hataları tek bir yüksek seviye callback'e raporlayacağınız anlamına gelmez, çünkü bu callback kendie başına o hatanın hangi bağlamda gerçekleştiğini bilmemez…

### Blog Alıntısı: "Her bir hatayı ayrı ayrı yakalama, muazzam bir kopyaya neden olur"

JS Recipes bloğundan, “Node.js error handling” anahtar kelimesi için 17. sıraya yerleşti

> ……Hackathon Starter'da yalnızda api.js controller'ında, 79'dan fazla hata objesi oluşumu vardı. Her bir hatanın ayrı ayrı kullanılması, muazzam miktarda kod kopyasıyla sonuçlanacaktır. Yapabileceğiniz en iyi şey tüm hata işleme mantığını bir Express middleware'ine devretmektir.

### Blog Alıntısı: "HTTP hatalarının veritabanı kodunuzda yeri yok"

Daily JS bloğundan, “Node.js error handling” anahtar kelimesi için 14. sıraya yerleşti

> ……Faydalı özellikleri hata objelerine ayarlamalı, ancak bu özellikleri tutarlı bir şekilde kullanmalısınız. Ve bu akışı atlamayın: HTTP hatalarının veritabanı kodunuzda yeri yok. veya tarayıcı geliştiricileri için, Ajax hatalarının sunucuyla iletişim halinde olan kodda yeri yok, ancak Mustache şablonlarını işleyen kod buna dahil değil…
