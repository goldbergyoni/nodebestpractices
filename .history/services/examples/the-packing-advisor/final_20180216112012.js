const weather = require("weather-js");

weather.find({ search: "San Francisco, CA", degreeType: "C" }, 
function(err, result) {
    let youNeedCoat = false;
    result.forEach(location => {
        if(low < 15){
            youNeedCoat = true;
        }
    });
    console.log(youNeedCoat ? 'You need a coat' : 'Leave your coat')
});
