angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {   
        return $http.get('https://' + window.location.hostname + '/api/listings');
      },

      create: function(listing) {
        return $http.post('https://' + window.location.hostname + '/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('https://' + window.location.hostname + '/api/listings' + id);
      }, 

      update: function(id, listing) {
        return $http.put('https://' + window.location.hostname + '/api/listings' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('https://' + window.location.hostname + '/api/listings' + id);
      }
    };

    return methods;
  }
]);
