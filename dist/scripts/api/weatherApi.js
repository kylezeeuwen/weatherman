(function() {
  'use strict';
  angular.module('weatherman').factory('WeatherApi', function($resource, $q, CONF) {
    var actions, current_endpoint, defaultParams, forecast_endpoint;
    current_endpoint = 'http://api.openweathermap.org/data/2.5/weather';
    forecast_endpoint = ' http://api.openweathermap.org/data/2.5/forecast/daily';
    actions = {
      current_by_cityname: {
        url: current_endpoint,
        method: 'GET'
      },
      current_by_cityid: {
        url: current_endpoint,
        method: 'GET'
      },
      current_by_coords: {
        url: current_endpoint,
        method: 'GET'
      },
      forecast_by_cityname: {
        url: forecast_endpoint,
        method: 'GET'
      },
      forecast_by_cityid: {
        url: forecast_endpoint,
        method: 'GET'
      },
      forecast_by_coords: {
        url: forecast_endpoint,
        method: 'GET'
      }
    };
    defaultParams = {
      APPID: CONF.openweatherKey
    };
    return $resource('', defaultParams, actions);
  });

}).call(this);
