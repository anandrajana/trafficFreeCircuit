'use strict';

angular.module('freecircuitApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegController',
        controllerAs: 'reg'
      });
  });