const util = require("util");

const Holidays = require("date-holidays");
const weather = require("weather-js");

const weatherPromise = util.promisify(weather.find);

function getCountryCode(country) {
  const holidays = new Holidays();
  const countries = holidays.getCountries();

  for (const countryCode in countries) {
    const countryName = countries[countryCode];

    if (countryName === country) {
      return countryCode;
    }
  }

  return null;
}

function countrySupported(country) {
  return getCountryCode(country) !== null;
}

class travellingRecommender {
  isItRecommended(places, numberOfDays) {
    const placesToCheck = [];

    places.forEach(place =>
      placesToCheck.push(this.checkSinglePlace(place, numberOfDays))
    );
    return Promise.all(placesToCheck);
  }

  async checkSinglePlace(place, numberOfDays) {
    try {
      const isHoliday = await this.checkHolidays(place, numberOfDays);

      if (isHoliday) {
        return "No. The streets will be crowded!";
      }

      const weatherTooCold = await this.isWeatherWarmEnough(
        place,
        numberOfDays
      );

      return weatherTooCold ? "Oh no, might be too cold" : "Sure, go for it!";
    } catch (e) {
      console.log(e.message);
    }
  }

  checkHolidays(place, numberOfDays) {
    return new Promise((resolve, reject) => {
      if (!countrySupported(place.country)) {
        reject(
          new Error(
            "Country " + place.country + " not supported by Holiday library"
          )
        );
      }

      const holidays = new Holidays(getCountryCode(place.country));

      const date = new Date();

      // Loop through number of days and check if holiday occurs
      for (let i = 0; i < numberOfDays; i++) {
        date.setDate(date.getDate() + 1);
        if (holidays.isHoliday(date)) {
          resolve(true);
        }
      }

      resolve(false);
    });
  }

  async isWeatherWarmEnough(place, numberOfDays) {
    const weatherResult = await weatherPromise({
      search: `${place.city} ${place.country}`,
      degreeType: "C"
    });

    let weatherTooCold = false;

    // Check through every location the service got
    weatherResult.forEach((weatherResult, index) => {
      if (weatherResult.forecast && Array.isArray(weatherResult.forecast)) {
        weatherResult.forecast.forEach(specificDay => {
          if (parseInt(specificDay.low) < 12) {
            weatherTooCold = true;
            return;
          }
        });
      }
    });

    return weatherTooCold;
  }
}

const numberOfDays = 3;

const places = [
  {
    country: "United Kingdom",
    city: "Northern Ireland"
  },
  {
    country: "United States of America",
    city: "Los Angeles"
  },
  {
    country: "Brasil",
    city: "Rio de Janeiro"
  }
];

new travellingRecommender()
  .isItRecommended(places, numberOfDays)
  .then(result => console.log(result));
