angular.module('weatherman').service 'CurrentLocation', ($q) ->

  return {
    get: () ->
      if not navigator.geolocation
        return Q.reject new Error "geolocation is not supported by this browser"

      deferred = $q.defer()

      successCB = (position) ->
        deferred.resolve
          lat: position.coords.latitude
          lon: position.coords.longitude

      errorCB = (err) ->
        deferred.reject err

      navigator.geolocation.getCurrentPosition successCB, errorCB

      return deferred.promise
  }

