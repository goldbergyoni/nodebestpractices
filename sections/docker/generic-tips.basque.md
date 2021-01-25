[✔]: ../../assets/images/checkbox-small-blue.png

# Dockerren Node.js praktika arruntak

Dockerren jarraibide arrunten atal honek programazio lengoaia guztietan araupetuta dauden jarraibide egokiak biltzen ditu, ez dira Node.jsentzat bakarrik

## ![✔] Nahiago COPY, ADD komandoa baino

**TL;DR:** COPY seguruagoa da, bakarrik lekuko fitxategiak kopiatzen ditu eta, ADDek aldiz bestelako funtzionalitateak onartzen ditu, adibidez urruneko webguneetatik binarioak deskargatzea bezalakoak

## ![✔] Oinarrizko sistema eragilea eguneratzea ekidin

**TL;DR:** Eraikitze prozesuaren bitartean lekuko binarioak eguneratzeak (adibidez apt-get update), exekutatzen duen bakoitzean irudi inkontsekuenteak sortzen ditu, eta pribilegio gorenak eskatzen ditu. Honen ordez sarri eguneratuak diren base irudiak erabil etzazu

## ![✔] Klasifikatu irudiak etiketen bidez

**TL;DR:** Irudi bakoitzaren metadatuak hornitzeak Ops adituari modu egokiak tratatzen lagun diezaioke. Adibidez, gehitu mantentzailearen izena, eraikitze-data eta bestelako informazioa, irudi bat erabili behar duenari lagungarria izango zaiona

## ![✔] Erabili pribilegiodun kontainerrak

**TL;DR:** Pribilegiodun kontainer batek erabiltzaile nagusiak makina ostalariak dituen baimen eta gaitasun berdinak ditu. Hau nekez da beharrezkoa, eta arau sinple gisa Node irudi ofizialetan sortutako 'node' erabiltzailea erabiltzea hobeto da

## ![✔] Bukaerako emaitza arakatu eta egiaztatu

**TL;DR:** Batzuetan eraikitze prozesuko albo-efektuak ahaztea erraza da, adibidez sekretu filtratuak edota beharrezkoak ez diren fitxategiak. [Dive](https://github.com/wagoodman/dive) bezalako tresnak erabiltzeak sortutako irudia arakatzeko horrelako arazoak identifikatzen lagun dezake

## ![✔] Integritate egiaztapena burutu

**TL;DR:** Oinarrizko edo bukaerako irudiak argitaratzean, sarea tronpatua izan daiteke eta irudi maltzurrak deskargatu. Dockerren protokolo estandarrean ez dago ezer hau ekidin dezana, edukia sinatzea eta egiaztatzea izan ezik. [Docker Notary](https://docs.docker.com/notary/getting_started/) hau lortzea ahalbidetzen duen tresnetako bat da