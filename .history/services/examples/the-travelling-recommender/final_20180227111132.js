const Holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")

class travellingRecommender{
  isItRecommended(cityName, multipleDates){
    const cityInfo = cities.filter(city => {
      return city.name.match(cityName)
    })
  const holidaysList = new Holidays("IL");
  const allHolidays = holidaysList.getHolidays(2018)
  //console.log(allHolidays);
  const isHoliday = holidaysList.isHoliday(new Date('2018-12-25 00:00:00'))
  console.log(isHoliday);

    return false;
  }
}

new travellingRecommender().isItRecommended('Haifa' , [new Date()]);