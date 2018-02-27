const Holidays = require("date-holidays");
const weather = require("weather-js");

class travellingRecommender {
  isItRecommended(countries, numberOfDays) {
    

    return false;
  }

  checkSingleCountry(country, numberOfDays) {

  }

  checkHolidays(country, num)

  howIsTheWeather(country, numberOfDays){
    //please promisify this using util.promisify (so the function returns a promise and you don't have to make new Promise youself)
    weather.find({ search: country, degreeType: "C" }, function(
      err,
      result
    ) {
      let youNeedCoat = false;
      result.forEach(location => {
        location.forecast.forEach(specificDay => {
          if (specificDay.low < 15) {
            youNeedCoat = true;
          }
        });
      });
      console.log(youNeedCoat ? "You need a coat" : "Leave your coat");
    });
    
  }
}

new travellingRecommender().isItRecommended("Haifa", [new Date()]);
