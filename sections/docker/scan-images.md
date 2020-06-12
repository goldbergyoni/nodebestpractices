# Scan the entire image before production

<br/><br/>

### One Paragraph Explainer

Scanning the code vunlerabilities is obviously a valuable act but it doesn't cover all potential threats. Why? Because CVEs exist also on the OS level and your code might execute a vunlerable version of Shell, Tarball or OpenSSL. In addition, vunbelerable dependencies might be injected after the code scan (i.e. supply chain attacks) hence a last comprehensive scan of the final deliberable image is in order. This resembles E2E tests - after testing the various pieces in-isolation, it's valuable to finally check the overall. There are more than a handful of tools that scans the entire Docker image, Scanners comes in 3 main flavours: Local/CI binaries with a cached vunlerabilities DB, scanners as a service in the cloud and a niche of tools who can scan during the docker build itself. The first group is the most popular and usually the faster, tools like Trivvy, Anchore and Snyk are worth exploring. Most CI vendors provide a local plugin that facilitate the interaction with these scanners. It should be noted that these type of scanners cover a lot of ground and therefore will find CVEs in almost every scan - consider setting a high threshold bar to avoid getting overwhelmed

<br/><br/>

### Code Example – Scanning with Trivvy

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

### Report Example – Docker scan results (By Anchore)

![Report examples](/assets/images/anchore-report.png "Docker scan report")
