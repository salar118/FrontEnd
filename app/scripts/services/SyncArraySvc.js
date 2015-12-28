'use strict'

app.factory('syncArraySvc', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI){

  var buildingsUri = FIREBASE_URI;
  var ref = new Firebase(buildingsUri);
  var sync = $firebase(ref);
  var buildings = sync.$asArray();

  var getBuildings = function(){
    return buildings;
  };

  var addBuilding = function(item){
    console.log('adding333: ' + JSON.stringify(item));
    buildings.$add(item);
  };

  var updateBuilding = function (building) {
    buildings.$save(building);
  };

  var removeBuilding = function (item) {
    console.log('removing333: ' + JSON.stringify(item));
    buildings.$remove(item);
  };

  return {
    getBuildings: getBuildings,
    addBuilding: addBuilding,
    updateBuilding: updateBuilding,
    removeBuilding: removeBuilding
  }
}]);
