angular.module('weatherman').filter 'temperatureUnit', (UserPreferences) ->

  returnCelcius = (kelvin) ->
    unit = Math.round(parseInt(kelvin) - 273.15)
    "#{unit}°"
  returnFahrenheit = (kelvin) ->
    unit = Math.round((parseInt(kelvin) - 273.15) * 1.8 + 32)
    "#{unit}°"

  (input) ->
    preferredUnit = UserPreferences.getTemperatureUnit()
    switch preferredUnit
      when 'C' then returnCelcius input
      when 'F' then returnFahrenheit input
