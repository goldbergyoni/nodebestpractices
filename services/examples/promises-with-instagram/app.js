function tellMeWhatToEat(userId) {
  //let's print what is within(!) the Instagram images
  const imagesContent = [];

  const instagramAPIURL = getInstagramURL();
  console.log(`Instagram API URL is ${instagramAPIURL}`)

  getNearbyImages(userId, instagramAPIURL)


  imagesContent = identifyFoodWithinImages(images);

  console.log(`These are the objects in the images ${imagesContent}`);
}

function identifyFoodWithinImages(images) {}

function getNearbyImages(userId) {
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
    return 'https://api.instagram.com/v1/';
}

tellMeWhatToEat();