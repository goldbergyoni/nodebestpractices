const https = require("https");//build-in module for approaching network api/sites
const Clarifai = require("clarifai");//NPM library that detect objects in images

//our main function
function tellMeWhatToEat(userId) {
  const instagramAPIURL = getInstagramURL();
  getNearbyImages(instagramAPIURL).then((images)=>{
    console.log('Images arrived')
    identifyFoodWithinImages(images).then((food)=>{
      printoutFood(food);
    })
  })

  console.log('Finished')
}


function printoutFood(food) {
  food.forEach(element => {
    console.log(element);
  });
}

function identifyFoodWithinImages(instagramPosts) {
  const postsArray = [];
  instagramPosts.data.forEach(aPost => {
    postsArray.push(identifyFoodWithinSingleImage(aPost));
  });
  return Promise.all(postsArray);
}

function anything(){
  return new Promise((resolve, reject) => {
    
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
      .predict(
        Clarifai.GENERAL_MODEL,
        instagramPost.images.standard_resolution.url
      )
      .then(response => {
        response.outputs.forEach(element => {
          element.data.concepts.forEach(object => {
            result.push(object.name);
          });
        });
        resolve(result);
      });
  });


}

tellMeWhatToEat();













//auth flow: https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
//user:nodecourse
//pass: usual@
