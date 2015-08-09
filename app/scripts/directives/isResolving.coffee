angular.module('weatherman').directive 'isResolving', ->
  restrict: 'E'
  replace: true
  scope: {}
  templateUrl: 'scripts/directives/isResolving.html'
  controller: ($scope, $rootScope) ->
    $scope.resolving = true
    console.log "Loading ze page"
    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->
      console.log "Start Resolving"
      $scope.resolving = true

    $rootScope.$on '$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) ->
      console.log "Done Resolving"
      $scope.resolving = false
