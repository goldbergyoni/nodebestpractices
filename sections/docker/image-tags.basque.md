# Ulertu irudi etiketak eta erabili "latest" etiketa kontu handiz

### Azalpen paragrafoa

Ekoizpen egoera da hau eta segurtasuna eta egonkortasuna garrantzitsuak dira, eta "komenigarritasuna" ez da erabakitze faktore hoberena. Gainera, `:latest` Dockerren lehenetsitako etiketa da. Honek esan nahi du etiketa explizitu bat gehitzea ahaztu duen garatzaile batek irudi baten bertsio berri bat `latest` moduan argitaratuko duela, espero gabeko emaitzak sor ditzakena `latest` etiketa azken ekoizpen irudian fidatzen bada.

### Kodearen adibidea:

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

### Bete bloglariek diotena

Blogetik, [Vladislav Supalov](https://vsupalov.com/docker-latest-tag/)ren eskutik:

> Batzuek espero dute :latestek beti irudi baten bertsio berrienari erreferentzia egiten dioa. Hau ez da egia.

[Docker success center](https://success.docker.com/article/images-tagging-vs-digests) blogetik

>

<br/>
