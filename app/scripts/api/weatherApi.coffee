'use strict'

angular.module('weatherman').factory 'WeatherApi', ($resource, $q, CONF) ->

  current_endpoint =  'http://api.openweathermap.org/data/2.5/weather'
  forecast_endpoint = ' http://api.openweathermap.org/data/2.5/forecast'

  actions =
    current_by_cityname:
      url: current_endpoint
      method:  'GET'
    current_by_cityid:
      url: current_endpoint
      method:  'GET'
    current_by_coords:
      url: current_endpoint
      method:  'GET'
    forecast_by_cityname:
      url: forecast_endpoint
      method:  'GET'
    forecast_by_cityid:
      url: forecast_endpoint
      method:  'GET'
    forecast_by_coords:
      url: forecast_endpoint
      method:  'GET'

  defaultParams =
    APPID: CONF.openweather

  $resource '', defaultParams, actions
