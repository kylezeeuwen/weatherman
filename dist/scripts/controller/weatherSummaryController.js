(function() {
  angular.module('weatherman').controller('WeatherSummaryController', function($scope, currentWeather, forecastWeather, UserPreferences) {
    var ref, ref1, ref2;
    $scope.dayOfWeek = function(unixtime) {
      var dt;
      dt = moment(unixtime * 1000);
      return dt.format('ddd');
    };
    $scope.dayOfMonth = function(unixtime) {
      var dt;
      dt = moment(unixtime * 1000);
      return dt.format('DD');
    };
    $scope.cityName = currentWeather.name;
    $scope.current = {
      main: currentWeather != null ? (ref = currentWeather.weather) != null ? ref[0].main : void 0 : void 0,
      description: currentWeather != null ? (ref1 = currentWeather.weather) != null ? ref1[0].description : void 0 : void 0,
      kelvin: currentWeather != null ? (ref2 = currentWeather.main) != null ? ref2.temp : void 0 : void 0,
      icon: currentWeather != null ? currentWeather.weather[0].icon : void 0
    };
    $scope.forecast = forecastWeather.list;
    $scope.addFavorite = function() {
      return UserPreferences.addFavorite($scope.cityName);
    };
    $scope.removeFavorite = function() {
      return UserPreferences.removeFavorite($scope.cityName);
    };
    return $scope.isFavorite = function() {
      return UserPreferences.isFavorite($scope.cityName);
    };
  });

}).call(this);
