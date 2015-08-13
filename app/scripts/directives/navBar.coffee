angular.module('weatherman').directive 'navBar', (UserPreferences, $state) ->
  restrict: 'E'
  replace: true
  templateUrl: 'scripts/directives/navBar.html'
  scope: {}

  controller: ($scope, $state) ->
    $scope.fuzzyCity = null

    $scope.changeCity = () ->
      return unless $scope.fuzzyCity
      $state.go 'city_name', cityName: $scope.fuzzyCity

    $scope.getFavorites = () ->
      UserPreferences.getFavorites()

    $scope.removeFavorite = (favorite) ->
      UserPreferences.removeFavorite favorite

    $scope.setTempUnit = (tempUnit) ->
      UserPreferences.setTemperatureUnit tempUnit
      $state.reload()

    $scope.getTempUnit = () ->
      UserPreferences.getTemperatureUnit()

    $scope.isActive = (tempUnit) ->
      tempUnit == $scope.getTempUnit()
