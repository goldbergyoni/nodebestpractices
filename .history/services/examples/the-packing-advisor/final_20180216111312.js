const weather = require("weather-js");

weather.find({ search: "San Francisco, CA", degreeType: "F" }, function(err,
  result
) {
  if (err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});
