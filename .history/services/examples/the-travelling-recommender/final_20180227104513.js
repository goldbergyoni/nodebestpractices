const holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")

class travellingRecommender{
  isItRecommended(cityName, multipleDates){
    const country = cities.filter(city => {
      return city.name.match('cityName')
    })
holidays.getStates('US')

    return false;
  }
}

new travellingRecommender().isItRecommended('London' , [new Date()]);