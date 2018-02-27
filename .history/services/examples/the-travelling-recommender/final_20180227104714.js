const Holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")

class travellingRecommender{
  isItRecommended(cityName, multipleDates){
    const cityInfo = cities.filter(city => {
      return city.name.match('cityName')
    })
  const holidaysBank = new Holidays();
  holidays.getStates(cityInfo.country);
  holidays.isHoliday(new Date('2018-27-02 00:00:00 GMT+0000'))
  console.log(isHoliday);

    return false;
  }
}

new travellingRecommender().isItRecommended('London' , [new Date()]);