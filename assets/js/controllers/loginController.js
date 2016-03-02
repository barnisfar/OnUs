'use strict';
/* global angular */
angular.module('myApp').controller('LoginCtrl', ['$scope', '$http', '$config',
  function($scope, $http, $config) {
    $scope.title = 'Login';
    $scope.user = {};
    $scope.login = function() {
      $http.post($config.apiUrl + 'auth/login', null, { headers: $scope.user }).then(function(response) {
        
      });
    }
    $scope.getToken = function() {
      $http.post($config.apiUrl + 'auth/login', null, { headers: $scope.user }).then(function(response) {
        
      });
    }
  }
]);
