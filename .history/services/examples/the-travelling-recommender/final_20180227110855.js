const Holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")

class travellingRecommender{
  isItRecommended(cityName, multipleDates){
    const cityInfo = cities.filter(city => {
      return city.name.match(cityName)
    })
  const holidaysList = new Holidays("UK");
  console.log(cityInfo[0].country);
  const isHoliday = holidaysList.isHoliday(new Date('2018-25-03 00:00:00 GMT+0000'))
  console.log(isHoliday);

    return false;
  }
}

new travellingRecommender().isItRecommended('Haifa' , [new Date()]);