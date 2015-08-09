angular.module('weatherman').controller 'WeatherSummaryController', ($scope, currentWeather) ->
  $scope.summary = "#{currentWeather?.weather?[0].main} + #{currentWeather?.weather?[0].description}"
  $scope.celcius = currentWeather?.main?.temp - 273.15
