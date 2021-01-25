# Eskaneatu irudi osoa ekoizpenera bidali aurretik

<br/><br/>

### Azalpen paragrafoa

Kodea eskaneatzea ahultasunak aurkitzeko baliodun ekintza da baina ez du mehatxu guztietatik babesten. Zergatik? Ahultasunak sistema eragilean ere existitzen direlako eta Shell, Tarball eta OpenSSL bezalako binarioak exekuta ditzakelako. Gainera, ahulduradun menpekotasunak kodea eskaneatu ondoren gehituak izan daitezke (adibidez hornikuntza kataiaren erasoak), hori dela eta, zuzenena, bukaerako irudia zehazki ekoizpenera bidali aurretik eskaneatzea da. Ideia honek E2E proben antza du, zati bakoitza modu isolatuan probatu ondoren, beharrezkoa da guztiak batutako paketea frogatzea. 3 eskaner familia nagusi daude: datu baseen cacheatutako ahulduradun lekuko edo CIko binarioak, eskanerrak zerbitzu gisa hodeiean, eta gehienetan azkarrena, [Trivvy](https://github.com/aquasecurity/trivy), [Anchore](https://github.com/anchore/anchore) eta [Snyk](https://support.snyk.io/hc/en-us/articles/360003946897-Container-security-overview) bezalako tresnak aztertzeak merezi du. CI hornitzaile gehienek lekuko plugin bat proposatzen dute, eskaner hauekin elkarrekintza errezten dutenak. Eskanerrek eremu handiak estaltzen dituztela kontutan hartzekoa da, eta ia eskaner bakoitzean aurkikuntzak erakutsiko dituzte, muga altua zehaztu gainezka egitea ekiditeko.

<br/><br/>

### Kodearen adibidea: Trivvyrekin eskaneatu

<details>

<summary><strong>Bash</strong></summary>

```
sudo apt-get install rpm
$ wget https://github.com/aquasecurity/trivy/releases/download/{TRIVY_VERSION}/trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ sudo dpkg -i trivy_{TRIVY_VERSION}_Linux-64bit.deb
trivy image [YOUR_IMAGE_NAME]
```

</details>

<br/><br/>

### Txostenaren adibidea: Docker eskanerraren emaitzak (Anchoren eskutik)

![Txostenen adibideak](/assets/images/anchore-report.png "Docker eskanerraren txostena")
