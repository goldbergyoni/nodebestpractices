[✔]: ../../assets/images/checkbox-small-blue.png

# Common Node.js Docker best practices

This common Docker guidelines section contains best practices that are standardized among all programming languages and have no special Node.js interpretation

## ![✔] Prefer COPY over ADD command

**TL;DR:** COPY is safer as it copies local files only while ADD supports fancier fetches like downloading binaries from remote sites

## ![✔] Avoid updating the base OS

**TL;DR:** Updating the local binaries during build (e.g. apt-get update) creates inconsistent images every time it runs and also demands elevated privileges. Instead use base images that are updated frequently

## ![✔] Classify images using labels

**TL;DR:** Providing metadata for each image might help Ops professionals treat it adequately. For example, include the maintainer name, build date and other information that might prove useful when someone needs to reason about an image

## ![✔] Use unprivileged containers

**TL;DR:** Privileged container have the same permissions and capabilities as the root user over the host machine. This is rarely needed and as a rule of thumb one should use the 'node' user that is created within official Node images

## ![✔] Inspect and verify the final result

**TL;DR:** Sometimes it's easy to overlook side effects in the build process like leaked secrets or unnecessary files. Inspecting the produced image using tools like [Dive](https://github.com/wagoodman/dive) can easily help to identify such issues

## ![✔] Perform integrity check

**TL;DR:** While pulling base or final images, the network might be mislead and redirected to download malicious images. Nothing in the standard Docker protocol prevents this unless signing and verifying the content. [Docker Notary](https://docs.docker.com/notary/getting_started/) is one of the tools to achieve this