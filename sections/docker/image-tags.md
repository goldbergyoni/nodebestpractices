# Understand image tags vs digests and use the `:latest` tag with caution

### One Paragraph Explainer

If this is a production situation and security and stability are important then just "convenience" is likely not the best deciding factor. In addition the `:latest` tag is Docker's default tag. This means that a developer who forgets to add an explicit tag will accidentally push a new version of an image as `latest`, which might end in very unintended results if the `latest` tag is being relied upon as the latest production image.

### Code example:

```bash
$ docker build -t company/image_name:0.1 .
# :latest image is not updated
$ docker build -t company/image_name
# :latest image is updated
$ docker build -t company/image_name:0.2 .
# :latest image is not updated
$ docker build -t company/image_name:latest .
# :latest image is updated
```

### What Other Bloggers Say
From the blog by [Vladislav Supalov](https://vsupalov.com/docker-latest-tag/):
> Some people expect that :latest always points to the most-recently-pushed version of an image. That’s not true.

From the [Docker success center](https://success.docker.com/article/images-tagging-vs-digests)
> 

<br/>
