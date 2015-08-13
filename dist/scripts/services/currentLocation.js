(function() {
  angular.module('weatherman').service('CurrentLocation', function($q) {
    return {
      get: function() {
        var deferred, errorCB, successCB;
        if (!navigator.geolocation) {
          return Q.reject(new Error("geolocation is not supported by this browser"));
        }
        deferred = $q.defer();
        successCB = function(position) {
          return deferred.resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        };
        errorCB = function(err) {
          return deferred.reject(err);
        };
        navigator.geolocation.getCurrentPosition(successCB, errorCB);
        return deferred.promise;
      }
    };
  });

}).call(this);
