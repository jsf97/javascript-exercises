const convertToCelsius = function(number) {
  let nmb = (number - 32) * .5556
  return (Math.round(nmb * 10) / 10)
};

const convertToFahrenheit = function(number) {
  let nmb = number * 1.8 + 32
  return (Math.round(nmb * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
