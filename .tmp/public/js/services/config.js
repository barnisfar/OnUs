'use strict';
/* global angular */
angular.module('myApp').service('$config', function() {
    this.apiUrl = 'https://onus-barnisfar-3.c9.io/';
}).service('globals', function() {
    this.me = null;
    this.jwt = null;
});