const util = require('util');

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
    //check each place and consolidate the result
    //run with promise.all (array of checkSinglePlace)

    const placesToCheck = [];

    places.forEach((place) => placesToCheck.push(this.checkSinglePlace(place, numberOfDays)));

    return Promise.all(placesToCheck);
  }

  checkSinglePlace(place, numberOfDays) {
    //check both holidays and the weather

    return this.checkHolidays(place, numberOfDays).then((isHoliday) => {

      // Check if holiday promise returned that a holiday is going to occur
      if (isHoliday) {
        return 'No. The streets will be crowded!';
      }

      // Fetch weather information
      return this.isWeatherWarmEnough(place, numberOfDays).then((weatherResults) => {
        // Return early if that did not work
        
      });
    })
  }

  checkHolidays(place, numberOfDays) {
    return new Promise((resolve, reject) => {
      if (!countrySupported(place.country)) {
        reject(new Error('Country ' + place.country + ' not supported by Holiday library'));
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

  isWeatherWarmEnough(place, numberOfDays) {
    //please promisify this using util.promisify (so the function returns a promise and you don't have to make new Promise youself)
    return weatherPromise({
      search: `${place.city} ${place.country}`,
      degreeType: 'C'
    });
  }
}

const numberOfDays = 3;

const places = [{
    country: 'Deutschland',
    city: 'Frankfurt am Main'
  },
  {
    country: 'United States of America',
    city: 'Los Angeles, CA'
  },
  {
    country: 'Brasil',
    city: 'Rio de Janeiro'
  }
]

new travellingRecommender().isItRecommended(places, numberOfDays).then((result) => console.log(result));