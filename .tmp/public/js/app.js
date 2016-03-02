'use strict';
/* global angular */

angular.module('myApp', [
  'ngMaterial',
  'ui.router'
]).controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);;
