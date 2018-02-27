const holidays = require("date-holidays");
const weather = require("weather-js");
const cities = require("all-the-cities")


weather.find({ search: "London", degreeType: "C" }, function(err, result) {
  cities.filter(city => {
    return city.name.match('London')
  })

});