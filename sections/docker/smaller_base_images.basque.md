# Hobetsi Docker oinarrizko irudi txikiagoak

Docker irudi handiek ahultasun gehiago sor ditzakete eta baliabideen kontsumoa handitu. Askotan, exekutatzeko garaian instalatutako zenbait pakete ez dituzu behar konpilatzeko orduan. Zenbat eta irudi handiagoak argitaratu eta gorde, garestiagoa izango da eskalatzerako orduan. Gerta daiteke irudi txikiak diseinuz ez etortzea aldez aurretik instalatuta ohiko liburutegi arruntetan (adibidez, curl), modulu natiboak sortu edo arazketak egiteko erabilgarriak diren paketeak sortzeko beharrezkoak direnak. Alpine Linuxen irudien aldaerak erabiltzeak aztarna murriztarazi dezake, erabilitako baliabideei eta sistema guztietan dauden eraso bektoreei dagokienez. Node.jsren v14.4.0 Docker irudiak gutxi gora behera 345MBko tamaina du; Alpine bertsioak, aldiz, 39MB, hau da, ia 10 aldiz txikiagoa da. Aukera bikaina da ere Debianen oinarritutako aldaera arina (Slim), 38 MB besterik ez duena eta Node.js exekutatzeko behar diren gutxieneko paketeak dituena.

### Blogeko aipua: "Zure zerbitzuen abiaratzea azkarragoa eta seguruagoa izan dadin Docker irudiak txikiagoak izatea nahi baduzu, probatu Alpine."

[Nick Janetakis](https://nickjanetakis.com/blog/the-3-biggest-wins-when-using-alpine-as-a-base-docker-image)-en bloga

> Gaur egun jakina da Dockerek Alpine maiz erabiltzen duela Dockeren irudi ofizialetarako. Mugimendu hori 2016ko hasieran hasi zen gutxi gora-behera. [...]
> Zerbitzari berri batean Docker irudiak argitaratzean, espero dezakezu hasierako argitalpena pixka bat azkarragoa izatea. Sarea gero eta motelagoa izan, ezberdintasuna orduan eta handiagoa izango da. [...] Tamaina txikiaren beste abantailetako bat da erasotze azala txikiagoa dela. Zure sisteman pakete eta liburutegi asko ez dagoenean, oso gauza gutxi daude gaizki irten daitezkeenak.
