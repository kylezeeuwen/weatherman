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

    getFavorites: () ->
      favorites = localStorageService.get('favorites')
      @setFavorites([]) if _.isNull favorites
      favorites

    removeFavorite: (favorite) ->
      favorites = @getFavorites()
      @setFavorites _.pull favorites, favorite


    addFavorite: (favorite) ->
      favorites = @getFavorites()
      @setFavorites _.uniq favorites.concat favorite

    setFavorites: (favorites) ->
      localStorageService.set 'favorites', favorites

    isFavorite: (favorite) ->
      favorites = @getFavorites()
      _.contains favorites, favorite
