const weather = require("weather-js");

function checkWeather() {
  return new Promise((resolve, reject) =>{
    weather.find({ search: "Israel", degreeType: "C" }, (err, result) => {
      if(err){
        reject(err);
        return;
      }
      let youNeedCoat = false;
      result.forEach(location => {
        location.forecast.forEach(specificDay => {
          if (specificDay.low < 15) {
            resolve(false);
          }
        });
      });
    });
  })
  
}
