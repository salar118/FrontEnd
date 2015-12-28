'use strict'

app.service('postCodeService', ['$http', function($http){

  this.randomPostCode = function(success, error){
    $http.get('http://api.postcodes.io/random/postcodes')
      .success(function(data, status, headers, config){
        success(data, status, headers, config);
      })
      .error(function(data, status, headers, config){
        error(data, status, headers, config);
      });
  };

  //public api
  //this.randomPostCode = randomPostCode;
}]);
