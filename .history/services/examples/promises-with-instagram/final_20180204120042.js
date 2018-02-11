const accessToken = "7050488302.d28b71a.099a077a83d24179ae313e91c370b8c9";
const https = require("https");
const Clarifai = require("clarifai");

function tellMeWhatToEat(userId) {
  //let's print what is within(!) the Instagram images
  const imagesContent = [];

  const instagramAPIURL = getInstagramURL();
  const images = getNearbyImages(instagramAPIURL)
    .then(identifyFoodWithinImages);

  //imagesContent = identifyFoodWithinImages(images);

  //console.log(`These are the objects in the images ${imagesContent}`);
}

function identifyFoodWithinImages(images) {
  console.log(images.data)
  const app = new Clarifai.App({
    apiKey: "ae04f8d71fce4b8ab61168e6bbc5cd4d"
  });

  images.data.forEach((mediaItem)=>{
    console.log(`About to analyze the image ${mediaItem.images.standard_resolution.url}`)
    app.models.predict(Clarifai.GENERAL_MODEL, mediaItem.images.standard_resolution.url)
    .then((response) => {
        response.outputs.forEach(element => {
          element.data.concepts.forEach(object => {
            console.log(object.name);
          });
        });
      },
      function(err) {
        console.error(err);
      }
    );  
  })

  
}

function getNearbyImages(instagramAPIUrl) {
  return new Promise((resolve, reject) => {
    https.get(instagramAPIUrl, response => {
      let data = "";

      // A chunk of data has been recieved.
      response.on("data", chunk => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      response.on("end", () => {
        resolve(JSON.parse(data));
      });
    });
  });
}

function getInstagramURL() {
  return `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;
}

tellMeWhatToEat();

//auth flow: https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
//user:nodecourse
//pass: usual@
