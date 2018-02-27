const holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")

weather.find({ search: "London", degreeType: "C" }, function(err, result) {
  cities.filter(city => {
    return city.name.match('Albuquerque')
  })
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