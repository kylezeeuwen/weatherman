(function() {
  'use strict';
  angular.module('weatherman', ['ngResource', 'LocalStorageModule', 'ui.router']).config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', 'current_location');
    $urlRouterProvider.otherwise('current_location');
    $stateProvider.state('current_location', {
      url: '/current_location',
      templateUrl: 'views/weather_summary.html',
      resolve: {
        currentWeather: [
          'WeatherApi', 'CurrentLocation', function(WeatherApi, CurrentLocation) {
            return CurrentLocation.get().then(function(coords) {
              return WeatherApi.current_by_coords({
                lat: coords.lat,
                lon: coords.lon
              }).$promise;
            });
          }
        ],
        forecastWeather: [
          'WeatherApi', 'CurrentLocation', function(WeatherApi, CurrentLocation) {
            return CurrentLocation.get().then(function(coords) {
              return WeatherApi.forecast_by_coords({
                lat: coords.lat,
                lon: coords.lon
              }).$promise;
            });
          }
        ]
      },
      controller: 'WeatherSummaryController'
    });
    $stateProvider.state('city_name', {
      url: '/city/:cityName',
      templateUrl: 'views/weather_summary.html',
      resolve: {
        currentWeather: [
          'WeatherApi', '$stateParams', function(WeatherApi, $stateParams) {
            return WeatherApi.current_by_cityname({
              q: $stateParams.cityName
            }).$promise;
          }
        ],
        forecastWeather: [
          'WeatherApi', '$stateParams', function(WeatherApi, $stateParams) {
            return WeatherApi.forecast_by_cityname({
              q: $stateParams.cityName
            }).$promise;
          }
        ]
      },
      controller: 'WeatherSummaryController'
    });
  });

}).call(this);
