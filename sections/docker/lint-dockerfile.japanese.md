# Lint your Dockerfile

### One Paragraph Explainer

As our core application code is linted to conform to best practices and eliminate issues and bugs before it could become a problem, so too should our Dockerfiles. Linting the Dockerfile means increasing the chances of catching production issues on time with very light effort. For example, it can ensure that there aren’t any structural problems with the logic and instructions specified in your Dockerfiles like trying to copy from non-existing stage, copying from unknown online repository, running the app with power user (SUDO) and many more. The Open Source Dockerfile linter [Hadolint](https://github.com/hadolint/hadolint) can be used manually or as part of a CI process to lint your Dockerfile/s. Hadolint is a specialized Dockerfile linter that aims to embrace the [Docker best practices.](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)


<br/>

### Code example: Inspecting a Dockerfile using hadolint

```bash 
hadolint production.Dockerfile
hadolint --ignore DL3003 --ignore DL3006 <Dockerfile> # exclude specific rules
hadolint --trusted-registry my-company.com:500 <Dockerfile> # Warn when using untrusted FROM images
```

### What Other Bloggers Say

From the blog by [Josh Reichardt](https://thepracticalsysadmin.com/lint-your-dockerfiles-with-hadolint/):
> If you haven’t already gotten in to the habit of linting your Dockerfiles you should.  Code linting is a common practice in software development which helps find, identify and eliminate issues and bugs before they are ever able to become a problem.  One of the main benefits of linting your code is that it helps identify and eliminate nasty little bugs before they ever have a chance to become a problem.

From the blog by [Jamie Phillips](https://www.phillipsj.net/posts/hadolint-linting-your-dockerfile/)
> Linters are commonly used in development to help teams detect programmatic and stylistic errors. Hadolint is a linter created for Dockerfiles using Haskell. This tool validates against the best practices outlined by Docker and takes a neat approach to parse the Dockerfile that you should checkout. It supports all major platforms, and this tutorial will be leveraging the container to perform the linting on an example Dockerfile.
<br/>
