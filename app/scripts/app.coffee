'use strict'

angular.module('weatherman', [
  'ngResource'
  'ui.router'
]).config ($urlRouterProvider, $stateProvider) ->

  $urlRouterProvider.when '', '/intro'

  $urlRouterProvider.otherwise '/intro'

  $stateProvider.state 'intro',
    url: '/intro'
    templateUrl: 'views/intro.html'

  return
