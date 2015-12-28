'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
var app = angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);

// this is the Firebase URL we'll be talking to
// in case of your Firebase account, please modify
// the below URL appropriately
app.constant('FIREBASE_URI', 'https://salartest.firebaseio.com/');

//app.config(function ($routeProvider) {
//  $routeProvider
//    .when('/', {
//      templateUrl: 'views/employee.tpl.html',
//      controller: 'EmployeeCtrl'
//    })
//    .when('/postCode', {
//      templateUrl: 'views/postCode.tpl.html',
//      controller: 'postCodeController'
//    })
//    .otherwise({
//      redirectTo:'/'
//    });
//});
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main.html'
    })
    .when('/arrays', {
      templateUrl: 'views/syncarray.tpl.html',
      controller: 'SyncArrayCtrl'
    })
    .when('/objects', {
      templateUrl: 'sync-object/object.tpl.html',
      controller: 'SyncObjectCtrl'
    })
    .when('/properties', {
      templateUrl: 'property/property.tpl.html',
      controller: 'PropertyCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
