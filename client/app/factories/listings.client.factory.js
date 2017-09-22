angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {   
        return $http.get('http://' + window.location.hostname + '/api/listings');
      },

      create: function(listing) {
        return $http.post('http://' + window.location.hostname + '/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://' + window.location.hostname + '/api/listings' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://' + window.location.hostname + '/api/listings' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://' + window.location.hostname + '/api/listings' + id);
      }
    };

    return methods;
  }
]);
