# 상용 이전에 전체 이미지를 스캔하라.

<br/><br/>

### 한 문단 요약

취약점을 위해 코드를 스캔하는 것은 가치있는 일이지만, 그것이 모든 잠재적인 위협에 대해 다뤄주지는 않는다. 왜 그런것일까? 이는 취약점들이 OS-레벨에도 존재하며, 애플리케이션이 shell, Tarball, OpenSSL과 같은 바이너리들을 실행시키기 때문이다. 또한 취약한 종속성들은 코드 스캔 이후에 주입될 수 있다. - 그 후 상용 바로 직전 최종 이미지를 스캔하는 것이 이어진다. 이러한 아이디어는 E2E 테스트들을 닮아있다. - 각각의 격리된 부분들을 테스트한 후, 최종적으로 조립된 결과물을 확인하는 것이 중요하다. 3개의 주요 스캐너 제품군이 있다.: 캐싱된 취약점 DB가 있는 로컬/CI 바이너리, 서비스로서의 클라우드의 스캐너의 경우, 그리고 도커가 스스로 빌드하는 동안 스캔하는 툴의 틈새 시장 등이 해당된다. 첫번째 그룹은 가장 대중적이고 일반적으로 가장 빠르다. - [Trivvy](https://github.com/aquasecurity/trivy), [Anchore](https://github.com/anchore/anchore) and [Snyk](https://support.snyk.io/hc/en-us/articles/360003946897-Container-security-overview)같은 툴들은 탐색을 해볼만한 가치가 있다. 대부분의 CI 공급업체들은 스캐너들과의 상호작용을 용이하게 해주는 로컬 플러그인을 제공한다. 이러한 스캐너들이 많은 근거들을 다루기 때문에, 대부분의 스캔에서 보여주는 것을 확인할 수 있다. - 너무 많은 것을 다루어 감당할 수 없는 경우를 막기 위해서는 높은 임계점을 설정하는 것을 고려해보라.

<br/><br/>

### 코드  예제 - Trivvy를 통한 스캐닝

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

### 리포트 예제 - (Anchore을 이용한) 도커 스캔 결과들

![Report examples](https://github.com/goldbergyoni/nodebestpractices/raw/master/assets/images/anchore-report.png)