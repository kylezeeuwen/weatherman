(function() {
  angular.module('weatherman').filter('temperatureUnit', function(UserPreferences) {
    var returnCelcius, returnFahrenheit;
    returnCelcius = function(kelvin) {
      var unit;
      unit = Math.round(parseInt(kelvin) - 273.15);
      return unit + "°";
    };
    returnFahrenheit = function(kelvin) {
      var unit;
      unit = Math.round((parseInt(kelvin) - 273.15) * 1.8 + 32);
      return unit + "°";
    };
    return function(input) {
      var preferredUnit;
      preferredUnit = UserPreferences.getTemperatureUnit();
      switch (preferredUnit) {
        case 'C':
          return returnCelcius(input);
        case 'F':
          return returnFahrenheit(input);
      }
    };
  });

}).call(this);
