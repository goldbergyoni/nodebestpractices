# Odkryj błędy i przestoje przy użyciu produktów APM


### Wyjaśnienie jednego akapitu

Wyjątek != Błąd. Tradycyjna obsługa błędów zakłada istnienie wyjątku jako problemu związanego z kodem, ale błędy aplikacji mogą pojawiać się w postaci wolnych ścieżek kodu, przestojów API, braku zasobów obliczeniowych i innych. W tym miejscu przydają się produkty APM, które pozwalają proaktywnie wykrywać wiele „zakopanych” problemów przy minimalnej konfiguracji. Wśród typowych funkcji produktów APM są na przykład alarmowanie, gdy HTTP API zwraca błędy, wykrywanie, gdy czas odpowiedzi API spada poniżej pewnego progu, wykrywanie „code smells”, funkcje monitorowania zasobów serwera, pulpit nawigacyjny wywiadu operacyjnego z miernikami IT i wiele innych przydatnych funkcji. Większość dostawców oferuje bezpłatny plan.

### Wikipedia na temat APM

W dziedzinie technologii informatycznych i zarządzania systemami zarządzanie wydajnością aplikacji (APM) to monitorowanie wydajności i dostępności aplikacji oraz zarządzanie nimi. APM stara się wykrywać i diagnozować złożone problemy z wydajnością aplikacji, aby utrzymać oczekiwany poziom usług. APM to „przełożenie wskaźników IT na znaczenie biznesowe ([tj.] wartość)”. Główne produkty i segmenty.

### Zrozumienie rynku APM

Produkty APM stanowią 3 główne segmenty:

1. Monitorowanie witryny lub interfejsu API - usługi zewnętrzne, które stale monitorują czas działania i wydajność za pośrednictwem żądań HTTP. Można skonfigurować za kilka minut. Oto kilka wybranych pretendentów: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), i [New Relic](https://newrelic.com/application-monitoring)

2. Instrumentacja kodu - rodzina produktów, która wymaga osadzenia agenta w aplikacji w celu korzystania z funkcji takich jak powolne wykrywanie kodu, statystyki wyjątków, monitorowanie wydajności i wiele innych. Oto kilka wybranych pretendentów: New Relic, App Dynamics

3. Operational intelligence dashboard - ta linia produktów koncentruje się na ułatwianiu zespołowi operacyjnemu pomiarów i dobranych treści, które pozwalają łatwo utrzymać najwyższą wydajność aplikacji. Zwykle wymaga to agregacji wielu źródeł informacji (dzienników aplikacji, dzienników BD, dzienników serwerów itp.) I wstępnych prac projektowych na dashboardzie. Oto kilka wybranych kandydatów: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)



 ### Przykład: UpTimeRobot.Com – Website monitoring dashboard
![alt text](../../assets/images/uptimerobot.jpg "Website monitoring dashboard")

 ### Przykład: AppDynamics.Com – end to end monitoring combined with code instrumentation
![alt text](../../assets/images/app-dynamics-dashboard.png "end to end monitoring combined with code instrumentation")
