'use strict'

app.controller('postCodeController',['$scope', 'postCodeService', function($scope, postCodeService){
  $scope.postCodeData = {};

  var success = function(data, status, headers, config) {
    $scope.postCodeData.result = data.result;
  };

  var error = function(data, status, headers, config) {
    $scope.postCodeData.error = data;
  };

  postCodeService.randomPostCode(success, error);
}]);
