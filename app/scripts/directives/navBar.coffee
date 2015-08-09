angular.module('weatherman').directive 'navBar', ->
  restrict: 'E'
  replace: true
  templateUrl: 'scripts/directives/navBar.html'
  scope: {}

  controller: ($scope, $state) ->
    $scope.fuzzyCity = null

    $scope.changeCity = () ->
      $state.go 'city_name', cityName: $scope.fuzzyCity
