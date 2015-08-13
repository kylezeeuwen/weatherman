(function() {
  angular.module('weatherman').directive('navBar', function(UserPreferences, $state) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'scripts/directives/navBar.html',
      scope: {},
      controller: function($scope, $state) {
        $scope.fuzzyCity = null;
        $scope.changeCity = function() {
          if (!$scope.fuzzyCity) {
            return;
          }
          return $state.go('city_name', {
            cityName: $scope.fuzzyCity
          });
        };
        $scope.getFavorites = function() {
          return UserPreferences.getFavorites();
        };
        $scope.removeFavorite = function(favorite) {
          return UserPreferences.removeFavorite(favorite);
        };
        $scope.setTempUnit = function(tempUnit) {
          UserPreferences.setTemperatureUnit(tempUnit);
          return $state.reload();
        };
        $scope.getTempUnit = function() {
          return UserPreferences.getTemperatureUnit();
        };
        return $scope.isActive = function(tempUnit) {
          return tempUnit === $scope.getTempUnit();
        };
      }
    };
  });

}).call(this);
