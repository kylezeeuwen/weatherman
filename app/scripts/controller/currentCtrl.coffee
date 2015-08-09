angular.module('weatherman').controller 'CurrentCtrl', ($scope, currentWeather) ->
  console.log 'Current Ctrl loading'
  $scope.current = JSON.stringify currentWeather, {}, 2
