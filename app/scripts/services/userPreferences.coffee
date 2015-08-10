angular.module('weatherman').service 'UserPreferences', (localStorageService) ->

  DEFAULT_TEMPERATURE_UNIT = 'C'
  ACCEPTED_TERMPERATURE_UNITS = ['C', 'F']

  service =
    getTemperatureUnit: () ->
      unit = localStorageService.get('temperature-unit')

      unless unit
        localStorageService.set 'temperature-unit', DEFAULT_TEMPERATURE_UNIT
        unit = DEFAULT_TEMPERATURE_UNIT

      unit

    setTemperatureUnit: (unit) ->
      unless unit in ACCEPTED_TERMPERATURE_UNITS
        throw new Error "invalid temperature unit #{unit}"

      localStorageService.set 'temperature-unit', unit
