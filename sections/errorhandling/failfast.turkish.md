# Hızla başarısızlığa uğra, argümanları bağımsız bir kütüphane kullanarak doğrula

### Tek Paragraf Açıklama

Hepimiz argümanları incelemenin ve hızla başarısızlığa uğramanın gizli buglardan kurtulmak için önemli olduğunu biliyoruz. (aşağıdaki anti-model örneğine bakabilirsiniz). Aksi halde, açık programlama ve defansif programlamaya göz atın. Aslında hepimiz, sıkıcı bir kodlama deneyiminden kaçınmaya meyilliyiz.  (ör: e-posta ve tarihleri barındıran hiyerarşik bir JSON objesini doğrulamayı düşünün) – Joi ve Validator gibi kütüphaneler bu sıkıcı işi rahatlatıcı hale getirebiliyor.

### Vikipedi: Defansif Programlama

Defansif programlama, yazılımın bug ve problemlerini azaltmaya, genel kalite açısından yazılımı ve kaynak kodlarını geliştirmeye dayalı bir yaklaşımdır. Kaynak kodun okunabilirliğinin sağlanması – kaynak kod, kod denetiminde onaylanması için okunabilir ve anlaşılabilir olmalıdır. Beklenmeyen veri girişi veya kullanıcı işlemlerine rağmen yazılımın öngörülebilir bir şekilde çalışmasını sağlanmalıdır.

### Kod örneği: Karmaşık JSON verisini ‘Joi’ kullanarak doğrulama

```javascript
var memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember) {
 // assert önce gelir
 Joi.assert(newMember, memberSchema); //doğrulama başarısız olursa hata verir
 // diğer işlemler
}

```

### Anti-model: Doğrulama olmaması kötü buglar ortaya çıkarır

```javascript
// Eğer indirim pozitifse, kullanıcıyı indirim kuponlarını yazdırması için yönlendirelim
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// indirim parametresini göndermeyi unuttuk, kullanıcıyı indirim ekranına göndermek niyeymiş ki?

```

### Blog Alıntısı: "Bu hataları derhal fırlatmalısınız(throw)"

 Şu blogdan: Joyent

 > Birisi asenkron fonksiyon çağırıp callback fonksiyonu göndermediyse, bu dejenere bir durumdur. Program bozulduğundan ve bu hata ayıklama işleminde en iyi şansın en azından bir yığın izlemesi ve ideal olarak hata noktasında bir çekirdek dosyası oluşturması nedeniyle bu hataları derhal fırlatmalısınız. Bunu yapmak için, tüm argümanların tiplerini fonksiyonun başında doğrulamanızı öneriyoruz.
