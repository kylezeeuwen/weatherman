(function() {
  var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module('weatherman').service('UserPreferences', function(localStorageService) {
    var ACCEPTED_TERMPERATURE_UNITS, DEFAULT_TEMPERATURE_UNIT, service;
    DEFAULT_TEMPERATURE_UNIT = 'C';
    ACCEPTED_TERMPERATURE_UNITS = ['C', 'F'];
    return service = {
      getTemperatureUnit: function() {
        var unit;
        unit = localStorageService.get('temperature-unit');
        if (!unit) {
          localStorageService.set('temperature-unit', DEFAULT_TEMPERATURE_UNIT);
          unit = DEFAULT_TEMPERATURE_UNIT;
        }
        return unit;
      },
      setTemperatureUnit: function(unit) {
        if (indexOf.call(ACCEPTED_TERMPERATURE_UNITS, unit) < 0) {
          throw new Error("invalid temperature unit " + unit);
        }
        return localStorageService.set('temperature-unit', unit);
      },
      getFavorites: function() {
        var favorites;
        favorites = localStorageService.get('favorites');
        if (_.isNull(favorites)) {
          this.setFavorites([]);
        }
        return favorites;
      },
      removeFavorite: function(favorite) {
        var favorites;
        favorites = this.getFavorites();
        return this.setFavorites(_.pull(favorites, favorite));
      },
      addFavorite: function(favorite) {
        var favorites;
        favorites = this.getFavorites();
        return this.setFavorites(_.uniq(favorites.concat(favorite)));
      },
      setFavorites: function(favorites) {
        return localStorageService.set('favorites', favorites);
      },
      isFavorite: function(favorite) {
        var favorites;
        favorites = this.getFavorites();
        return _.contains(favorites, favorite);
      }
    };
  });

}).call(this);
