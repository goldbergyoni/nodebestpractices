const util = require("util");
const Holidays = require("date-holidays");
const weather = require("weather-js");

class travellingRecommender {
  async isLocationRecommended(place) {
    try {
      console.log(`Starting to check now the location ${util.inspect(place)}`);
      const isHoliday = await this.checkHolidays(place);

      if (isHoliday) {
        return "No. The streets will be crowded!";
      }

      const weatherTooCold = await this.isWeatherWarmEnough(place);

      return weatherTooCold ? "Oh no, might be too cold" : "Sure, go for it!";
    } catch (e) {
      console.log(e.message);
    }
  }

  checkHolidays(place) {
    const holidays = new Holidays(place.country);

    return holidays.isHoliday(new Date());
  }

  async isWeatherWarmEnough(place, numberOfDays) {
    return new Promise((resolve, reject) => {
      weather.find({ search: "Israel", degreeType: "C" }, (err, weatherResult) => {
          let weatherTooCold = false;

          // Check through every location the service got
          weatherResult.forEach((weatherResult, index) => {
            if (weatherResult.forecast && Array.isArray(weatherResult.forecast)) {
              weatherResult.forecast.forEach(specificDay => {
                if (specificDay.high < 12) {
                  weatherTooCold = true;
                }
              });
            }
          });
          resolve(weatherTooCold);
        }
      );
    });
  }
}

const placesToCheck = {
  country: "United States of America",
  city: "Los Angeles"
};

new travellingRecommender()
  .isLocationRecommended(placesToCheck)
  .then(result => console.log(result));
