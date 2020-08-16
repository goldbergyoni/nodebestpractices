TL;DR: Althoug DevDepencies are sometimes needed during the build and test life-cycle, eventually the image that is shipped to production should be minimal and clean from development depdencies. Doing so gurantess that only neccessary code is shipped and the amount of potnetial attacks (i.e. attack surface) is minimized. When using multi stage build (see dedicated bullet) this can be achieved by installing all dependencies first and finally running 'npm ci --production'

Otherwise: Many of the infamous npm security breaches were found within development packages

🔗 Read More: Remove development dependencies


8.1. Clean NODE_MODULE cache

**TL;DR:** After installing dependencies in a container, remove the local cache. It doesn't make any sense to duplicate the dependencies for faster future installs since there won't be any further installs - A Docker image is immutable. By doing so, using a single line of code, tens of MB, typically 10-50% of the image size are shaved off


**Otherwise:** The image that will get shipped to production will weigh 30% more due to files that will never get used

🔗 [**Read More: Clean NODE_MODULE cache**](/sections/docker/clean-cache.md)

## ![✔] 8.4. Lint your Dockerfile

**TL;DR:** Linting your Dockerfile is an important step to identify issues in your Dockerfile which differ from best practices. By checking for potential flaws using a specialised Docker linter, performance and security improvements can be easily identified, saving countless hours of wasted time or security issues in production code.

**Otherwise:** A Docker image built with errors or performance bottlenecks could result in security issues in production, or differing from best practices to the detriment of the application end user.

🔗 [**Read More: Lint your Dockerfile**](/sections/docker/lint-dockerfile.md)

Use multistage builds
    Bootstrap the code using 'node' command, avoid 'npm run' scripts
    Install packages for production
    Dockerignore
    Graceful shutdown
    Set Docker memory limits
    Utilize caching for better build time
    Don't use "latest", use a digest or specific tag
    Prefer smaller images
    Get rid of secrets
    Scan your image for vulnerabilities
    Clean npm cache
    A generic list of ideas
    Last: Lint your dockefile