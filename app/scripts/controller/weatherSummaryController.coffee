angular.module('weatherman').controller 'WeatherSummaryController', ($scope, currentWeather, forecastWeather) ->
  $scope.name = currentWeather.name
  $scope.current =
    main: currentWeather?.weather?[0].main
    description: currentWeather?.weather?[0].description
    celcius: Math.round currentWeather?.main?.temp - 273.15
    icon: currentWeather?.weather[0].icon

  $scope.forecast = forecastWeather.list
