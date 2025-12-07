# Ulertu irudi etiketak eta laburpenak eta erabili "azken" (latest) etiketak kontu handiz

### Azalpena

Ekoizpen aldian segurtasuna eta egonkortasuna garrantzitsuak dira, eta "erosotasuna" ez da erabakitze faktore egokiena. Gainera, `:latest` Dockeren lehenetsitako etiketa da. Horrek esan nahi du etiketa esplizitua gehitzea ahaztu duen garatzaileak nahi gabe irudi baten bertsio berria argitaratuko duela, espero gabeko emaitzak sor ditzakeena `latest` etiketa ekoizpeneko azken irudia izatea erabakiz gero.

### Kode adibidea:

```bash
$ docker build -t company/image_name:0.1 .
# :azken irudia ez da eguneratua
$ docker build -t company/image_name
# :azken irudia eguneratua da
$ docker build -t company/image_name:0.2 .
# :azken irudia ez da eguneratua
$ docker build -t company/image_name:latest .
# :azken irudia eguneratua da
```

### Beste bloglariek diotena

[Vladislav Supalov](https://vsupalov.com/docker-latest-tag/)en bloga:

> Batzuek espero dute :latestek beti irudi baten bertsio berrienari erreferentzia egingo diola. Hori ez da egia.

[Docker success center](https://success.docker.com/article/images-tagging-vs-digests) bloga

>

<br/>
