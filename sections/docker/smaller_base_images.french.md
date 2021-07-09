
Large Docker images can lead to higher exposure to vulnerabilities and increased resource consumption. Often you don't need certain packages installed at runtime that are needed for building.
Pulling and storing larger images will become more expensive at scale, when dealing with larger images. By design minimal images may not come with common libraries needed for building native modules or packages useful for debugging (e.g. curl) pre-installed.
Using the Alpine Linux variants of images can lead to a reduced footprint in terms of resources used and the amount of attack vectors present in fully-featured systems. The Node.js v14.4.0 Docker image is ~345MB in size versus ~39MB for the Alpine version, which is almost 10x smaller.
A Slim variant based on Debian, which is only 38MB in size and contains the minimal packages needed to run Node.js, is also a great choice.

### Blog Quote: "If you want to shrink your Docker images, have your services start faster and be more secure then try Alpine out."

From [Nick Janetakis' blog](https://nickjanetakis.com/blog/the-3-biggest-wins-when-using-alpine-as-a-base-docker-image)

> It’s no secret by now that Docker is heavily using Alpine as a base image for official Docker images. This movement started near the beginning of 2016. [...]
  When pulling down new Docker images onto a fresh server, you can expect the initial pull to be quite a bit faster on Alpine. The slower your network is, the bigger the difference it will be. [...] Another perk of being much smaller in size is that the surface area to be attacked is much less. When there’s not a lot of packages and libraries on your system, there’s very little that can go wrong.