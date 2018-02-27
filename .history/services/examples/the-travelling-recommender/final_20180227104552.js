const holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")

class travellingRecommender{
  isItRecommended(cityName, multipleDates){
    const cityInfo = cities.filter(city => {
      return city.name.match('cityName')
    })
  holidays.getStates(cityInfo.country);
  hd.isHoliday(new Date('2016-02-09 00:00:00 GMT+0000'))


    return false;
  }
}

new travellingRecommender().isItRecommended('London' , [new Date()]);