angular.module('weatherman').controller 'WeatherSummaryController', ($scope, currentWeather, forecastWeather, UserPreferences) ->
  $scope.dayOfWeek = (unixtime) ->
    dt = moment unixtime * 1000
    dt.format('ddd')

  $scope.dayOfMonth = (unixtime) ->
    dt = moment unixtime * 1000
    dt.format('DD')

  $scope.cityName = currentWeather.name
  $scope.current =
    main: currentWeather?.weather?[0].main
    description: currentWeather?.weather?[0].description
    kelvin: currentWeather?.main?.temp
    icon: currentWeather?.weather[0].icon

  $scope.forecast = forecastWeather.list

  $scope.addFavorite = () ->
    UserPreferences.addFavorite $scope.cityName

  $scope.removeFavorite = () ->
    UserPreferences.removeFavorite $scope.cityName

  $scope.isFavorite = () ->
    UserPreferences.isFavorite $scope.cityName
