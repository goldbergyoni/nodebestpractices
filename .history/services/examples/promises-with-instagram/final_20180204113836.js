const accessToken = '7050488302.d28b71a.099a077a83d24179ae313e91c370b8c9';
const https = require('https');

function tellMeWhatToEat(userId) {
  //let's print what is within(!) the Instagram images
  const imagesContent = [];

  const instagramAPIURL = getInstagramURL();
  console.log(`Instagram API URL is ${instagramAPIURL}`)

  const images = getNearbyImages(userId, instagramAPIURL).then(function(
    images
  ) {
    console.log("Images arrived, total ${images.length}");
  });

  imagesContent = identifyFoodWithinImages(images);

  console.log(`These are the objects in the images ${imagesContent}`);
}

function identifyFoodWithinImages(images) {}

function getNearbyImages(instagramAPIUrl) { 
  pro
https.get(instagramAPIUrl, (response) => {
  let data = '';
 
  // A chunk of data has been recieved.
  response.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  response.on('end', () => {
    
  });
}

function getInstagramURL() {
    return `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;
}


//auth flow: https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
//user:nodecourse
//pass: usual@