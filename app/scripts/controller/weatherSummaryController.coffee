angular.module('weatherman').controller 'WeatherSummaryController', ($scope, currentWeather, forecastWeather) ->
  $scope.name = currentWeather.name
  $scope.summary = "#{currentWeather?.weather?[0].main} + #{currentWeather?.weather?[0].description}"
  $scope.celcius = Math.round currentWeather?.main?.temp - 273.15
  $scope.icon = currentWeather?.weather[0].icon
  $scope.forecast = forecastWeather.list
