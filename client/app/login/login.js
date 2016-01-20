'use strict';

angular.module('freecircuitApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      });
  });