'use strict';

angular.module('freecircuitApp')
  .directive('header', function () {
    return {
      templateUrl: 'components/header/header.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('hero-unit');
      }
    };
  });
