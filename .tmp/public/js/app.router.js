'use strict';
/* global angular */

  angular.module('myApp')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
          .otherwise('/home');

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'app/home.html',
            controller: 'HomeCtrl'
          })
          .state('houses', {
            url: '/neighbours',
            templateUrl: 'app/houses.html',
            controller: 'HousesCtrl'
          })
          .state('login', {
            url: '/login',
            templateUrl: 'app/login.html',
            controller: 'LoginCtrl'
          })
      }
    ]);
