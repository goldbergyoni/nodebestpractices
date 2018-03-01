const https = require("https"); //build-in module for approaching network api/sites
const Clarifai = require("clarifai"); //NPM library that detect objects in images
const util = require('util');

//our main function
function tellMeWhatToEat(userId) {
  try {
    const instagramAPIURL = getInstagramURL();
    getNearbyImages(instagramAPIURL)
      .then((images)=> pickLast5FiveImagesOnly(images))
      .then((images) => identifyFoodWithinImages(images))
      .then((food) => printoutFood(food))
      .catch((e) => {console.log(`Error caught in promise catch ${e.message}`);})
    console.log('Finished')
  } catch (e) {
    console.log(`Error caught in catch ${e.message}`);}
  }


function printoutFood(food) {
  food.forEach(element => {
    console.log(element);
  });
}


function pickLast5FiveImagesOnly(images){
  return images.data.slice(0,4); 
}

function identifyFoodWithinImages(instagramPosts) {
  const postsArray = [];
  instagramPosts.forEach(aPost => {
    postsArray.push(identifyFoodWithinSingleImage(aPost));
  });
  return Promise.all(postsArray);
}

function anything() {
  return new Promise((resolve, reject) => {
    try {
      //custom code goes here

      resolve('your result data');
    } catch (e) {
      reject(e);
    }
  });
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
  
  const accessToken = "7050488302.d28b71a.099a077a83d24179ae313e91c370b8c9";
  return `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;
}



function identifyFoodWithinSingleImage(instagramPost) {
  const result = [];
  const app = new Clarifai.App({
    apiKey: "ae04f8d71fce4b8ab61168e6bbc5cd4d"
  });
  return new Promise((resolve, reject) => {
    app.models
      .predict(Clarifai.GENERAL_MODEL,instagramPost.images.standard_resolution.url)
      .then(response => {
        response.outputs.forEach(element => {
          element.data.concepts.forEach(object => {
            result.push(object.name);
          });
        });
        resolve(result);
      })
      .catch((error) => {console.log(error)});
  });


}

tellMeWhatToEat();













//auth flow: https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
//user:nodecourse
//pass: usual@