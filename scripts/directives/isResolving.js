(function() {
  angular.module('weatherman').directive('isResolving', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: 'scripts/directives/isResolving.html',
      controller: function($scope, $rootScope) {
        $scope.resolving = true;
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          return $scope.resolving = true;
        });
        return $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
          return $scope.resolving = false;
        });
      }
    };
  });

}).call(this);
