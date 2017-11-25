const Clarifai = require('clarifai');
const util = require('util');

const app = new Clarifai.App({
    apiKey: 'ae04f8d71fce4b8ab61168e6bbc5cd4d'
});

app.models.predict(Clarifai.GENERAL_MODEL, 'https://s3-eu-west-1.amazonaws.com/i0natan-general/lunch4.jpeg').then(
    function (response) {
        response.outputs.forEach((element)=> {
            element.data.concepts.forEach((object)=>{
                console.log(object.name)
            });
        });
        
    },
    function (err) {
        console.error(err);
    }
);