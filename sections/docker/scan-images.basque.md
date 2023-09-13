# Eskaneatu irudi osoa ekoiztu aurretik

<br/><br/>

### Azalpena

Kodea eskaneatzea ahultasunak aurkitzeko ekintza baliotsua da, baina ez du mehatxu guztietatik babesten. Zergatik? Sistema eragilean ere badirelako ahultasunak, eta Shell, Tarball eta OpenSSL bezalako binarioak exekuta ditzakeelako aplikazioak. Gainera, erasogarriak diren menpekotasunak kodea eskaneatu ondoren gehitu daitezke (adibidez hornikuntza katearen erasoak). Hori dela eta, zuzenena da bukaerako irudia eskaneatzea zehazki ekoizpenera bidali aurretik. Ideia horrek E2E proben antza du, zati bakoitza modu isolatuan probatu ondoren, guztiak batutako paketea probatzea komeni da. 3 eskaner familia nagusi daude: tokiko/IEko binarioak, cachean ahultasunak dituzten datu base eta guzti; hodeiko zerbitzu gisa antolatutako eskanerrak; eta baliabide sorta bat, dockera bera konpilatu bitartean eskaneatzen duena. Lehenengo taldea da ezagunena eta normalean azkarrena. Merezi du [Trivvy](https://github.com/aquasecurity/trivy), [Anchore](https://github.com/anchore/anchore) eta [Snyk](https://support.snyk.io/hc/en-us/articles/360003946897-Container-security-overview) bezalako tresnak ikertzea. IE hornitzaile gehienek lekuko plugin bat proposatzen dute, eskaner horiekin elkarrekintza errazten dutenak. Kontuan izan behar da eskaner horiek eremu handiak hartzen dituztela, eta, beraz, emaitzak izaten dituztela ia eskaneatze guztietan. Aztertu ez ote den komeni atalase maila handi samarra ezartzea larrialdiak izatea ekiditeko.

<br/><br/>

### Kode adibidea: eskaneatu Trivvyrekin

<details>

<summary><strong>Bash</strong></summary>

```console
$ sudo apt-get install rpm
$ wget https://github.com/aquasecurity/trivy/releases/download/{TRIVY_VERSION}/trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ sudo dpkg -i trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ trivy image [YOUR_IMAGE_NAME]
```

</details>

<br/><br/>

### Txosten adibidea: Docker eskanerraren emaitzak (Anchoren eskutik)

![Txosten adibideak](../../assets/images/anchore-report.png "Docker eskanerraren txostena")
