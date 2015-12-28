'use strict'

app.controller('SyncArrayCtrl', ['$scope', 'syncArraySvc', function ($scope, syncArraySvc) {

  var Building = function (name, text) {
    this.name = name;
    this.text = text;
  };

  $scope.building = new Building('', '');
  $scope.buildings = syncArraySvc.getBuildings();

  $scope.addBuilding = function () {
    syncArraySvc.addBuilding(angular.copy($scope.building));
    $scope.building = new Building('', '');
  };

  $scope.updateBuilding = function(building){
      syncArraySvc.updateBuilding(building);
  };

  $scope.removeBuilding = function (buiding) {
    syncArraySvc.removeBuilding(buiding);
  }
}]);
