angular.module('weatherman').directive 'isResolving', ->
  restrict: 'E'
  replace: true
  scope: {}
  templateUrl: 'scripts/directives/isResolving.html'
  controller: ($scope, $rootScope) ->
    $scope.resolving = true
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->
      $scope.resolving = true

    $rootScope.$on '$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) ->
      $scope.resolving = false
