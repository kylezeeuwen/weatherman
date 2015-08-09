angular.module('weatherman').controller 'CityCtrl', ($scope, currentWeather) ->
  console.log 'City Ctrl loading'
  $scope.current = JSON.stringify currentWeather, {}, 2
