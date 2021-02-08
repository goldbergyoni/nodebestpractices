# Hobetsi Docker oinarrizko irudi txikiagoak

Docker irudi handiek ahulbide gehiago sor ditzakete eta baliabideen kontsumoa handitu. Sarri, erakitzerako orduan beharrezkoak diren pakete batzuk, ez dituzu exekuzio garaian instalatuak izaterik behar. Irudi handiak argitaratu eta gordetzea eskalatzerako orduan garestiagoa bihurtuko da. Diseinu aldetik, irudi txikiek ez dituzte edukiko debugeatzeko erabilgarriak diren aurre-instalatutako oinarrizko moduluak edo paketeak (adibidez curl).
Linuxen Alpine irudi bariantea erabiltzeak baliabide erabilera eta funtzionalitate guztiak dituzten sistemenganako erasoen murrizketa ekar dezake. Node.jsen v14.4.0 Docker irudiak gutxi gora behera 345MBko tamaina du, aldiz Alpine bertsioak 39MB, ia 10 aldiz txikiagoa dena.
Debianen oinarritutako bariante arina, 38MBko tamaina duena eta Node abiatzeko beharrezkoak diren pakete minimoak dituena ere aukera bikaina da.

### Blogeko aipua: "Zure Docker irudiak txikiagotu nahi badituzu, zure zerbitzuen abiaratze azkarragoa izan, seguruagoa izan eta orduan probatu Alpine."

[Nick Janetakis](https://nickjanetakis.com/blog/the-3-biggest-wins-when-using-alpine-as-a-base-docker-image) blogetik

> Gaur egun jakina da Dockerrek Alpine maiz erabiltzen duela Dockerren irudi ofizialetarako. Mugimendu hau 2016ko hasieran hasi zen gutxi gora-behera. [...]
  Zerbitzari berri batean Docker irudiak argitaratzean, espero dezakezu hasierako argitarapena pixkat azkarragoa izatea. Sarea geroz eta motelagoa izan, ezberdintasuna orduan eta handiagoa izango da. [...] Tamaina txikiaren beste abantailetako bat erasotze-azala txikiagoa izatea da. Zure sisteman pakete eta liburutegi asko ez daudenean, gaizki irten daitezken oso gauza gutxi daude.
