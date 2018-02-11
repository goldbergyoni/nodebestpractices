function getInstagramImagesContent(userId) {
  //let's print what is within(!) the Instagram images
  const imagesContent = [];

  const instagramAPIURL = getInstagramURL();
  console.log(`Instagram API URL is ${instagramAPIURL}`)

  const images = getInstagramImages(userId, instagramAPIURL).then(function(
    images
  ) {
    console.log("Images arrived, total ${images.length}");
  });

  imagesContent = identifyObjectsInImages(images);

  console.log(`These are the objects in the images ${imagesContent}`);
}

function identifyObjectsInImages(images) {}

function getInstagramImages(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve([
        "http://instagram.com/images/1",
        "http://instagram.com/images/2"
      ]);
    }, 50);
  });
}

function getInstagramURL() {
    return 'https://api.instagram.com/v1/'
}
