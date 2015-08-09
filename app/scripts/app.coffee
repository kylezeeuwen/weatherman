'use strict'

angular.module('weatherman', [
  'ngResource'
  'ui.router'
]).config ($urlRouterProvider, $stateProvider) ->

  $urlRouterProvider.when '', 'current_location'

  $urlRouterProvider.otherwise 'current_location'

  $stateProvider.state 'current_location',
    url: '/current_location'
    templateUrl: 'views/weather_summary.html'
    resolve:
      currentWeather: ['WeatherApi', 'CurrentLocation', (WeatherApi, CurrentLocation) ->
        CurrentLocation.get().then (coords) ->
          WeatherApi.current_by_coords(lat: coords.lat, lon: coords.lon).$promise
      ]
      forecastWeather: ['WeatherApi', 'CurrentLocation', (WeatherApi, CurrentLocation) ->
        CurrentLocation.get().then (coords) ->
          WeatherApi.forecast_by_coords(lat: coords.lat, lon: coords.lon).$promise
      ]
    controller: 'WeatherSummaryController'

  $stateProvider.state 'city_name',
    url: '/city/:cityName'
    templateUrl: 'views/weather_summary.html'
    resolve:
      currentWeather: ['WeatherApi', '$stateParams', (WeatherApi, $stateParams) ->
        WeatherApi.current_by_cityname(q: $stateParams.cityName).$promise
      ]
      forecastWeather: ['WeatherApi', '$stateParams', (WeatherApi, $stateParams) ->
        WeatherApi.forecast_by_cityname(q: $stateParams.cityName).$promise
      ]
    controller: 'WeatherSummaryController'

  return
