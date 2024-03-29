'use strict';

angular.module('freecircuitApp')
  .directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.RegForm.password.$viewValue
                ctrl.$setValidity('noMatch', !noMatch);
                if(!noMatch){
                  ctrl.$setValidity('noMatch', !noMatch);
                  return false;
                }
                else
                  return true
            })
        }
    }
  });
